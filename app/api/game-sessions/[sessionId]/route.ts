import { createServerSupabaseClient } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '@/lib/api/middleware'
import type { 
  UpdateGameSessionRequest, 
  CompleteGameSessionRequest,
  GameSession,
  GameStepProgress
} from '@/lib/types'

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// 获取特定游戏会话详情
const getGameSessionHandler = async (
  req: NextRequest,
  { params }: { params: { sessionId: string } }
) => {
  const supabase = createServerSupabaseClient()
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { sessionId } = params

  // 获取游戏会话详情
  const { data: gameSession, error } = await supabase
    .from('game_sessions')
    .select(`
      *,
      plans:plan_id(id, title, description),
      games:game_id(id, name, description, steps, difficulty, focuses),
      children_profiles:child_id(id, name, birth_date)
    `)
    .eq('id', sessionId)
    .eq('user_id', session.user.id)
    .single()

  if (error || !gameSession) {
    return NextResponse.json({ 
      success: false, 
      error: 'Game session not found or access denied' 
    }, { status: 404 })
  }

  // 获取步骤进度
  const { data: stepProgress, error: stepsError } = await supabase
    .from('game_step_progress')
    .select('*')
    .eq('session_id', sessionId)
    .order('step_number')

  if (stepsError) {
    console.error('Error fetching step progress:', stepsError)
  }

  return NextResponse.json({
    success: true,
    data: {
      session: gameSession as GameSession,
      step_progress: stepProgress as GameStepProgress[] || []
    }
  })
}

// 更新游戏会话进度
const updateGameSessionHandler = async (
  req: NextRequest,
  { params }: { params: { sessionId: string } }
) => {
  const supabase = createServerSupabaseClient()
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { sessionId } = params
  const body: UpdateGameSessionRequest = await req.json()

  // 验证会话是否存在且属于当前用户
  const { data: existingSession, error: fetchError } = await supabase
    .from('game_sessions')
    .select('id, status, started_at')
    .eq('id', sessionId)
    .eq('user_id', session.user.id)
    .single()

  if (fetchError || !existingSession) {
    return NextResponse.json({ 
      success: false, 
      error: 'Game session not found or access denied' 
    }, { status: 404 })
  }

  // 检查会话是否已完成
  if (existingSession.status === 'completed') {
    return NextResponse.json({ 
      success: false, 
      error: 'Cannot update completed session' 
    }, { status: 400 })
  }

  // 计算会话持续时间
  const duration_seconds = Math.floor(
    (new Date().getTime() - new Date(existingSession.started_at).getTime()) / 1000
  )

  // 构建更新对象
  const updateData: Partial<GameSession> = {
    duration_seconds,
    ...body
  }

  // 如果有交互数据，合并而不是覆盖
  if (body.interaction_data) {
    const { data: currentSession } = await supabase
      .from('game_sessions')
      .select('interaction_data')
      .eq('id', sessionId)
      .single()

    if (currentSession) {
      updateData.interaction_data = {
        ...currentSession.interaction_data,
        ...body.interaction_data
      }
    }
  }

  // 更新会话
  const { data: updatedSession, error: updateError } = await supabase
    .from('game_sessions')
    .update(updateData)
    .eq('id', sessionId)
    .eq('user_id', session.user.id)
    .select(`
      *,
      plans:plan_id(id, title),
      games:game_id(id, name, description),
      children_profiles:child_id(id, name)
    `)
    .single()

  if (updateError) {
    console.error('Error updating game session:', updateError)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update game session' 
    }, { status: 500 })
  }

  // 记录用户活动
  await supabase
    .from('usage_analytics')
    .insert({
      user_id: session.user.id,
      event_type: 'game_progress_updated',
      event_data: {
        session_id: sessionId,
        updates: Object.keys(body)
      }
    })

  return NextResponse.json({
    success: true,
    data: { session: updatedSession as GameSession }
  })
}

// 完成游戏会话
const completeGameSessionHandler = async (
  req: NextRequest,
  { params }: { params: { sessionId: string } }
) => {
  const supabase = createServerSupabaseClient()
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { sessionId } = params
  const body: CompleteGameSessionRequest = await req.json()

  // 验证必需字段
  if (!body.engagement_score || body.engagement_score < 1 || body.engagement_score > 5) {
    return NextResponse.json({ 
      success: false, 
      error: 'Valid engagement_score (1-5) is required' 
    }, { status: 400 })
  }

  // 验证会话是否存在且属于当前用户
  const { data: existingSession, error: fetchError } = await supabase
    .from('game_sessions')
    .select('id, status, started_at, game_id, child_id, plan_id')
    .eq('id', sessionId)
    .eq('user_id', session.user.id)
    .single()

  if (fetchError || !existingSession) {
    return NextResponse.json({ 
      success: false, 
      error: 'Game session not found or access denied' 
    }, { status: 404 })
  }

  // 检查会话是否已完成
  if (existingSession.status === 'completed') {
    return NextResponse.json({ 
      success: false, 
      error: 'Session already completed' 
    }, { status: 400 })
  }

  // 计算最终持续时间
  const completed_at = new Date()
  const duration_seconds = Math.floor(
    (completed_at.getTime() - new Date(existingSession.started_at).getTime()) / 1000
  )

  try {
    // 更新会话为完成状态
    const { data: updatedSession, error: updateError } = await supabase
      .from('game_sessions')
      .update({
        status: 'completed',
        completed_at: completed_at.toISOString(),
        duration_seconds,
        engagement_score: body.engagement_score,
        difficulty_rating: body.difficulty_rating,
        parent_notes: body.parent_notes,
        completion_percentage: 100,
        interaction_data: body.final_interaction_data || {}
      })
      .eq('id', sessionId)
      .eq('user_id', session.user.id)
      .select(`
        *,
        plans:plan_id(id, title),
        games:game_id(id, name, description),
        children_profiles:child_id(id, name)
      `)
      .single()

    if (updateError) {
      console.error('Error completing game session:', updateError)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to complete game session' 
      }, { status: 500 })
    }

    // 更新或创建用户进度汇总
    await updateUserProgressSummary(
      supabase, 
      session.user.id, 
      existingSession.child_id,
      existingSession.game_id,
      duration_seconds,
      body.engagement_score
    )

    // 检查是否获得成就
    await checkAndAwardAchievements(
      supabase,
      session.user.id,
      existingSession.child_id,
      sessionId
    )

    // 记录用户活动
    await supabase
      .from('usage_analytics')
      .insert({
        user_id: session.user.id,
        event_type: 'game_completed',
        event_data: {
          session_id: sessionId,
          game_id: existingSession.game_id,
          duration_seconds,
          engagement_score: body.engagement_score
        }
      })

    return NextResponse.json({
      success: true,
      data: { session: updatedSession as GameSession }
    })

  } catch (error) {
    console.error('Error in complete game session:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 辅助函数：更新用户进度汇总
async function updateUserProgressSummary(
  supabase: any,
  userId: string,
  childId: string | null,
  gameId: number,
  durationSeconds: number,
  engagementScore: number
) {
  // 获取当前进度汇总
  const { data: summary, error: fetchError } = await supabase
    .from('user_progress_summary')
    .select('*')
    .eq('user_id', userId)
    .eq('child_id', childId || '')
    .single()

  const playTimeMinutes = Math.round(durationSeconds / 60)
  const now = new Date().toISOString()

  if (fetchError || !summary) {
    // 创建新的进度汇总
    await supabase
      .from('user_progress_summary')
      .insert({
        user_id: userId,
        child_id: childId,
        total_sessions: 1,
        total_play_time_minutes: playTimeMinutes,
        total_games_completed: 1,
        avg_engagement_score: engagementScore,
        avg_completion_rate: 100,
        current_streak_days: 1,
        last_played_at: now,
        last_calculated_at: now
      })
  } else {
    // 更新现有进度汇总
    const newTotalSessions = summary.total_sessions + 1
    const newAvgEngagement = (
      (summary.avg_engagement_score * summary.total_sessions + engagementScore) / 
      newTotalSessions
    )

    await supabase
      .from('user_progress_summary')
      .update({
        total_sessions: newTotalSessions,
        total_play_time_minutes: summary.total_play_time_minutes + playTimeMinutes,
        total_games_completed: summary.total_games_completed + 1,
        avg_engagement_score: newAvgEngagement,
        last_played_at: now,
        last_calculated_at: now
      })
      .eq('id', summary.id)
  }
}

// 辅助函数：检查并颁发成就
async function checkAndAwardAchievements(
  supabase: any,
  userId: string,
  childId: string | null,
  sessionId: string
) {
  // 检查是否是第一次完成游戏
  const { data: sessions, error } = await supabase
    .from('game_sessions')
    .select('id')
    .eq('user_id', userId)
    .eq('child_id', childId || '')
    .eq('status', 'completed')

  if (!error && sessions && sessions.length === 1) {
    // 颁发"初次体验"成就
    await supabase
      .from('achievements')
      .insert({
        user_id: userId,
        child_id: childId,
        achievement_type: 'first_game',
        achievement_name: '初次体验',
        description: '完成第一个专注力游戏',
        criteria_met: { session_id: sessionId }
      })
  }

  // 更多成就检查逻辑可以在这里添加...
}

export const GET = withErrorHandling(getGameSessionHandler)
export const PUT = withErrorHandling(updateGameSessionHandler)
export const POST = withErrorHandling(completeGameSessionHandler)