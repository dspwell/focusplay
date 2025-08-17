import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '@/lib/api/middleware'
import type { 
  StartGameSessionRequest, 
  GameSessionResponse,
  GameSession,
  GameStepProgress
} from '@/lib/types'

export const runtime = 'nodejs';

// 获取用户的游戏会话列表
const getGameSessionsHandler = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const searchParams = req.nextUrl.searchParams
  const childId = searchParams.get('child_id')
  const planId = searchParams.get('plan_id')
  const status = searchParams.get('status')
  const limit = parseInt(searchParams.get('limit') || '10')
  const offset = parseInt(searchParams.get('offset') || '0')

  // 构建查询
  let query = supabase
    .from('game_sessions')
    .select(`
      *,
      plans:plan_id(id, title),
      games:game_id(id, name, description),
      children_profiles:child_id(id, name)
    `)
    .eq('user_id', session.user.id)
    .order('started_at', { ascending: false })
    .range(offset, offset + limit - 1)

  // 添加过滤条件
  if (childId) {
    query = query.eq('child_id', childId)
  }
  if (planId) {
    query = query.eq('plan_id', planId)
  }
  if (status) {
    query = query.eq('status', status)
  }

  const { data: sessions, error } = await query

  if (error) {
    console.error('Error fetching game sessions:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch game sessions' 
    }, { status: 500 })
  }

  // 获取会话总数
  let countQuery = supabase
    .from('game_sessions')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', session.user.id)

  if (childId) countQuery = countQuery.eq('child_id', childId)
  if (planId) countQuery = countQuery.eq('plan_id', planId)
  if (status) countQuery = countQuery.eq('status', status)

  const { count } = await countQuery

  return NextResponse.json({
    success: true,
    data: {
      sessions,
      total: count || 0,
      offset,
      limit
    }
  })
}

// 开始新的游戏会话
const startGameSessionHandler = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const body: StartGameSessionRequest = await req.json()
  const { plan_id, game_id, child_id } = body

  // 验证必需字段
  if (!plan_id || !game_id) {
    return NextResponse.json({ 
      success: false, 
      error: 'Missing required fields: plan_id, game_id' 
    }, { status: 400 })
  }

  // 验证游戏和计划是否存在
  const { data: game, error: gameError } = await supabase
    .from('games')
    .select('id, name, steps')
    .eq('id', game_id)
    .single()

  if (gameError || !game) {
    return NextResponse.json({ 
      success: false, 
      error: 'Game not found' 
    }, { status: 404 })
  }

  const { data: plan, error: planError } = await supabase
    .from('plans')
    .select('id, user_id')
    .eq('id', plan_id)
    .eq('user_id', session.user.id)
    .single()

  if (planError || !plan) {
    return NextResponse.json({ 
      success: false, 
      error: 'Plan not found or access denied' 
    }, { status: 404 })
  }

  // 如果指定了孩子，验证孩子是否属于当前用户
  if (child_id) {
    const { data: child, error: childError } = await supabase
      .from('children_profiles')
      .select('id')
      .eq('id', child_id)
      .eq('parent_id', session.user.id)
      .single()

    if (childError || !child) {
      return NextResponse.json({ 
        success: false, 
        error: 'Child not found or access denied' 
      }, { status: 404 })
    }
  }

  try {
    // 创建游戏会话
    const { data: newSession, error: sessionError } = await supabase
      .from('game_sessions')
      .insert({
        user_id: session.user.id,
        child_id: child_id || null,
        plan_id,
        game_id,
        status: 'active',
        interaction_data: {}
      })
      .select(`
        *,
        plans:plan_id(id, title),
        games:game_id(id, name, description, steps),
        children_profiles:child_id(id, name)
      `)
      .single()

    if (sessionError) {
      console.error('Error creating game session:', sessionError)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to create game session' 
      }, { status: 500 })
    }

    // 如果游戏有步骤，创建步骤进度记录
    const stepProgress: GameStepProgress[] = []
    if (game.steps && Array.isArray(game.steps)) {
      const stepInserts = game.steps.map((step: any, index: number) => ({
        session_id: newSession.id,
        step_number: index + 1,
        step_description: step.description || step.name || `步骤 ${index + 1}`,
        step_data: {}
      }))

      const { data: steps, error: stepsError } = await supabase
        .from('game_step_progress')
        .insert(stepInserts)
        .select('*')

      if (!stepsError && steps) {
        stepProgress.push(...steps)
      }
    }

    // 记录用户活动
    await supabase
      .from('usage_analytics')
      .insert({
        user_id: session.user.id,
        event_type: 'game_started',
        event_data: {
          session_id: newSession.id,
          game_id,
          plan_id,
          child_id
        }
      })

    const response: GameSessionResponse = {
      session: newSession as GameSession,
      step_progress: stepProgress
    }

    return NextResponse.json({
      success: true,
      data: response
    })

  } catch (error) {
    console.error('Error in start game session:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

export const GET = withErrorHandling(getGameSessionsHandler)
export const POST = withErrorHandling(startGameSessionHandler)