import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '@/lib/api/middleware'
import type { GameStepProgress } from '@/lib/types'

// 更新游戏步骤进度
const updateStepProgressHandler = async (
  req: NextRequest,
  { params }: { params: { sessionId: string } }
) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { sessionId } = params
  const body = await req.json()
  const { step_number, is_completed, time_spent_seconds, success_rate, hints_used, step_data } = body

  // 验证必需字段
  if (step_number === undefined) {
    return NextResponse.json({ 
      success: false, 
      error: 'step_number is required' 
    }, { status: 400 })
  }

  // 验证会话是否存在且属于当前用户
  const { data: gameSession, error: sessionError } = await supabase
    .from('game_sessions')
    .select('id, status')
    .eq('id', sessionId)
    .eq('user_id', session.user.id)
    .single()

  if (sessionError || !gameSession) {
    return NextResponse.json({ 
      success: false, 
      error: 'Game session not found or access denied' 
    }, { status: 404 })
  }

  // 检查会话是否已完成
  if (gameSession.status === 'completed') {
    return NextResponse.json({ 
      success: false, 
      error: 'Cannot update steps of completed session' 
    }, { status: 400 })
  }

  try {
    // 构建更新数据
    const updateData: Partial<GameStepProgress> = {
      time_spent_seconds: time_spent_seconds || 0,
      attempts_count: 1, // 简化处理，可以后续改进
      success_rate,
      hints_used: hints_used || 0,
      step_data: step_data || {}
    }

    // 如果标记为完成，设置完成时间
    if (is_completed) {
      updateData.is_completed = true
      updateData.completed_at = new Date().toISOString()
    }

    // 更新步骤进度
    const { data: updatedStep, error: updateError } = await supabase
      .from('game_step_progress')
      .update(updateData)
      .eq('session_id', sessionId)
      .eq('step_number', step_number)
      .select('*')
      .single()

    if (updateError) {
      console.error('Error updating step progress:', updateError)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to update step progress' 
      }, { status: 500 })
    }

    // 计算整体会话完成进度
    const { data: allSteps, error: stepsError } = await supabase
      .from('game_step_progress')
      .select('is_completed')
      .eq('session_id', sessionId)

    if (!stepsError && allSteps) {
      const completedSteps = allSteps.filter(step => step.is_completed).length
      const totalSteps = allSteps.length
      const completionPercentage = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0

      // 更新会话的完成百分比
      await supabase
        .from('game_sessions')
        .update({ completion_percentage: completionPercentage })
        .eq('id', sessionId)
    }

    // 记录用户活动
    await supabase
      .from('usage_analytics')
      .insert({
        user_id: session.user.id,
        event_type: 'step_progress_updated',
        event_data: {
          session_id: sessionId,
          step_number,
          is_completed,
          success_rate
        }
      })

    return NextResponse.json({
      success: true,
      data: { step: updatedStep as GameStepProgress }
    })

  } catch (error) {
    console.error('Error in update step progress:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 获取游戏步骤进度列表
const getStepProgressHandler = async (
  req: NextRequest,
  { params }: { params: { sessionId: string } }
) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { sessionId } = params

  // 验证会话是否存在且属于当前用户
  const { data: gameSession, error: sessionError } = await supabase
    .from('game_sessions')
    .select('id')
    .eq('id', sessionId)
    .eq('user_id', session.user.id)
    .single()

  if (sessionError || !gameSession) {
    return NextResponse.json({ 
      success: false, 
      error: 'Game session not found or access denied' 
    }, { status: 404 })
  }

  // 获取步骤进度
  const { data: steps, error: stepsError } = await supabase
    .from('game_step_progress')
    .select('*')
    .eq('session_id', sessionId)
    .order('step_number')

  if (stepsError) {
    console.error('Error fetching step progress:', stepsError)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch step progress' 
    }, { status: 500 })
  }

  return NextResponse.json({
    success: true,
    data: { steps: steps as GameStepProgress[] }
  })
}

export const GET = withErrorHandling(getStepProgressHandler)
export const PUT = withErrorHandling(updateStepProgressHandler)