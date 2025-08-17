import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '@/lib/api/middleware'
import type { Scenario, Tool, Focus } from '@/lib/types'

interface CreateGameRequest {
  name: string
  description: string
  age_min: number
  age_max: number
  difficulty: number
  scenario: Scenario
  tool: Tool
  focuses: Focus[]
  steps: Array<{
    number: number
    instruction: string
    expected_duration: number
    materials?: string[]
    success_criteria?: string[]
  }>
  safety_notes?: string
  materials?: string[]
  tags?: string[]
  is_active?: boolean
}

interface UpdateGameRequest extends Partial<CreateGameRequest> {
  id: number
}

// 获取游戏列表（管理员）
const getGamesHandler = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证管理员权限
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  // 检查管理员权限
  const { data: profile, error: profileError } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', session.user.id)
    .single()

  if (profileError || !profile || !['admin', 'super_admin'].includes(profile.role)) {
    return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 })
  }

  const searchParams = req.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')
  const search = searchParams.get('search')
  const scenario = searchParams.get('scenario')
  const tool = searchParams.get('tool')
  const focus = searchParams.get('focus')
  const isActive = searchParams.get('is_active')

  const offset = (page - 1) * limit

  try {
    // 构建查询
    let query = supabase
      .from('games')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    // 添加过滤条件
    if (search) {
      query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`)
    }
    if (scenario) {
      query = query.eq('scenario', scenario)
    }
    if (tool) {
      query = query.eq('tool', tool)
    }
    if (focus) {
      query = query.contains('focuses', [focus])
    }
    if (isActive !== null) {
      query = query.eq('is_active', isActive === 'true')
    }

    const { data: games, error, count } = await query

    if (error) {
      console.error('Error fetching games:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch games' 
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      data: {
        games,
        pagination: {
          page,
          limit,
          total: count || 0,
          pages: Math.ceil((count || 0) / limit)
        }
      }
    })

  } catch (error) {
    console.error('Error in get games:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 创建新游戏（管理员）
const createGameHandler = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证管理员权限
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { data: profile, error: profileError } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', session.user.id)
    .single()

  if (profileError || !profile || !['admin', 'super_admin'].includes(profile.role)) {
    return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 })
  }

  const body: CreateGameRequest = await req.json()

  // 验证必需字段
  if (!body.name || !body.description || !body.age_min || !body.age_max || !body.scenario || !body.tool) {
    return NextResponse.json({ 
      success: false, 
      error: 'Missing required fields' 
    }, { status: 400 })
  }

  // 验证数据
  if (body.age_min < 24 || body.age_max > 48 || body.age_min > body.age_max) {
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid age range. Must be between 24-48 months' 
    }, { status: 400 })
  }

  if (body.difficulty < 1 || body.difficulty > 5) {
    return NextResponse.json({ 
      success: false, 
      error: 'Difficulty must be between 1-5' 
    }, { status: 400 })
  }

  try {
    const gameData = {
      name: body.name,
      description: body.description,
      age_min: body.age_min,
      age_max: body.age_max,
      difficulty: body.difficulty || 1,
      scenario: body.scenario,
      tool: body.tool,
      focuses: body.focuses || [],
      steps: body.steps || [],
      safety_notes: body.safety_notes,
      materials: body.materials || [],
      tags: body.tags || [],
      is_active: body.is_active !== false, // 默认为 true
      created_by: session.user.id
    }

    const { data: newGame, error } = await supabase
      .from('games')
      .insert(gameData)
      .select('*')
      .single()

    if (error) {
      console.error('Error creating game:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to create game' 
      }, { status: 500 })
    }

    // 记录管理员操作
    await supabase
      .from('usage_analytics')
      .insert({
        user_id: session.user.id,
        event_type: 'admin_game_created',
        event_data: {
          game_id: newGame.id,
          game_name: newGame.name
        }
      })

    return NextResponse.json({
      success: true,
      data: { game: newGame }
    })

  } catch (error) {
    console.error('Error in create game:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

export const GET = withErrorHandling(getGamesHandler)
export const POST = withErrorHandling(createGameHandler)