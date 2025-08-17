import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '@/lib/api/middleware'
import type { Scenario, Tool, Focus } from '../@/lib/types'

interface UpdateGameRequest {
  name?: string
  description?: string
  age_min?: number
  age_max?: number
  difficulty?: number
  scenario?: Scenario
  tool?: Tool
  focuses?: Focus[]
  steps?: Array<{
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

// 获取特定游戏详情（管理员）
const getGameHandler = async (
  req: NextRequest,
  { params }: { params: { gameId: string } }
) => {
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

  const { gameId } = params
  const gameIdNum = parseInt(gameId)

  if (isNaN(gameIdNum)) {
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid game ID' 
    }, { status: 400 })
  }

  try {
    const { data: game, error } = await supabase
      .from('games')
      .select(`
        *,
        game_sessions(count),
        user_profiles!games_created_by_fkey(id, display_name, email)
      `)
      .eq('id', gameIdNum)
      .single()

    if (error || !game) {
      return NextResponse.json({ 
        success: false, 
        error: 'Game not found' 
      }, { status: 404 })
    }

    // 获取游戏使用统计
    const { data: sessionStats, error: statsError } = await supabase
      .from('game_sessions')
      .select('status, engagement_score, accuracy_percentage, created_at')
      .eq('game_id', gameIdNum)

    let stats = {
      total_sessions: 0,
      completed_sessions: 0,
      avg_engagement: 0,
      avg_accuracy: 0,
      completion_rate: 0
    }

    if (!statsError && sessionStats) {
      stats.total_sessions = sessionStats.length
      stats.completed_sessions = sessionStats.filter(s => s.status === 'completed').length
      stats.completion_rate = stats.total_sessions > 0 
        ? (stats.completed_sessions / stats.total_sessions) * 100 
        : 0

      const completedSessions = sessionStats.filter(s => s.status === 'completed')
      if (completedSessions.length > 0) {
        stats.avg_engagement = completedSessions.reduce((sum, s) => sum + (s.engagement_score || 0), 0) / completedSessions.length
        stats.avg_accuracy = completedSessions.reduce((sum, s) => sum + (s.accuracy_percentage || 0), 0) / completedSessions.length
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        game,
        stats
      }
    })

  } catch (error) {
    console.error('Error in get game:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 更新游戏（管理员）
const updateGameHandler = async (
  req: NextRequest,
  { params }: { params: { gameId: string } }
) => {
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

  const { gameId } = params
  const gameIdNum = parseInt(gameId)

  if (isNaN(gameIdNum)) {
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid game ID' 
    }, { status: 400 })
  }

  const body: UpdateGameRequest = await req.json()

  // 验证数据
  if (body.age_min !== undefined && (body.age_min < 24 || body.age_min > 48)) {
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid age_min. Must be between 24-48 months' 
    }, { status: 400 })
  }

  if (body.age_max !== undefined && (body.age_max < 24 || body.age_max > 48)) {
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid age_max. Must be between 24-48 months' 
    }, { status: 400 })
  }

  if (body.age_min !== undefined && body.age_max !== undefined && body.age_min > body.age_max) {
    return NextResponse.json({ 
      success: false, 
      error: 'age_min cannot be greater than age_max' 
    }, { status: 400 })
  }

  if (body.difficulty !== undefined && (body.difficulty < 1 || body.difficulty > 5)) {
    return NextResponse.json({ 
      success: false, 
      error: 'Difficulty must be between 1-5' 
    }, { status: 400 })
  }

  try {
    // 检查游戏是否存在
    const { data: existingGame, error: fetchError } = await supabase
      .from('games')
      .select('id, name')
      .eq('id', gameIdNum)
      .single()

    if (fetchError || !existingGame) {
      return NextResponse.json({ 
        success: false, 
        error: 'Game not found' 
      }, { status: 404 })
    }

    // 更新游戏
    const updateData = {
      ...body,
      updated_at: new Date().toISOString()
    }

    const { data: updatedGame, error: updateError } = await supabase
      .from('games')
      .update(updateData)
      .eq('id', gameIdNum)
      .select('*')
      .single()

    if (updateError) {
      console.error('Error updating game:', updateError)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to update game' 
      }, { status: 500 })
    }

    // 记录管理员操作
    await supabase
      .from('usage_analytics')
      .insert({
        user_id: session.user.id,
        event_type: 'admin_game_updated',
        event_data: {
          game_id: gameIdNum,
          game_name: updatedGame.name,
          updated_fields: Object.keys(body)
        }
      })

    return NextResponse.json({
      success: true,
      data: { game: updatedGame }
    })

  } catch (error) {
    console.error('Error in update game:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 删除游戏（管理员）
const deleteGameHandler = async (
  req: NextRequest,
  { params }: { params: { gameId: string } }
) => {
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

  if (profileError || !profile || profile.role !== 'super_admin') {
    return NextResponse.json({ 
      success: false, 
      error: 'Only super administrators can delete games' 
    }, { status: 403 })
  }

  const { gameId } = params
  const gameIdNum = parseInt(gameId)

  if (isNaN(gameIdNum)) {
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid game ID' 
    }, { status: 400 })
  }

  try {
    // 检查游戏是否存在
    const { data: existingGame, error: fetchError } = await supabase
      .from('games')
      .select('id, name')
      .eq('id', gameIdNum)
      .single()

    if (fetchError || !existingGame) {
      return NextResponse.json({ 
        success: false, 
        error: 'Game not found' 
      }, { status: 404 })
    }

    // 检查是否有关联的游戏会话
    const { data: sessions, error: sessionsError } = await supabase
      .from('game_sessions')
      .select('id')
      .eq('game_id', gameIdNum)
      .limit(1)

    if (sessionsError) {
      console.error('Error checking game sessions:', sessionsError)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to check game dependencies' 
      }, { status: 500 })
    }

    if (sessions && sessions.length > 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Cannot delete game with existing sessions. Consider deactivating instead.' 
      }, { status: 400 })
    }

    // 删除游戏
    const { error: deleteError } = await supabase
      .from('games')
      .delete()
      .eq('id', gameIdNum)

    if (deleteError) {
      console.error('Error deleting game:', deleteError)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to delete game' 
      }, { status: 500 })
    }

    // 记录管理员操作
    await supabase
      .from('usage_analytics')
      .insert({
        user_id: session.user.id,
        event_type: 'admin_game_deleted',
        event_data: {
          game_id: gameIdNum,
          game_name: existingGame.name
        }
      })

    return NextResponse.json({
      success: true,
      data: { message: 'Game deleted successfully' }
    })

  } catch (error) {
    console.error('Error in delete game:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

export const GET = withErrorHandling(getGameHandler)
export const PUT = withErrorHandling(updateGameHandler)
export const DELETE = withErrorHandling(deleteGameHandler)