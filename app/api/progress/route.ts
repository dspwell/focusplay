import { createServerSupabaseClient } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '@/lib/api/middleware'
import type { UserProgressSummary, ProgressData } from '@/lib/types'

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// 获取用户或孩子的整体进度
const getProgressHandler = async (req: NextRequest) => {
  const supabase = createServerSupabaseClient()
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const searchParams = req.nextUrl.searchParams
  const childId = searchParams.get('child_id')
  const period = searchParams.get('period') || '30' // 默认30天

  try {
    // 获取进度汇总
    let progressQuery = supabase
      .from('user_progress_summary')
      .select('*')
      .eq('user_id', session.user.id)

    if (childId) {
      progressQuery = progressQuery.eq('child_id', childId)
    } else {
      progressQuery = progressQuery.is('child_id', null)
    }

    const { data: progressSummary, error: progressError } = await progressQuery.single()

    if (progressError && progressError.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Error fetching progress summary:', progressError)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch progress summary' 
      }, { status: 500 })
    }

    // 获取趋势数据
    const periodDays = parseInt(period)
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - periodDays)

    // 获取参与度趋势
    const { data: engagementTrend, error: engagementError } = await supabase
      .from('game_sessions')
      .select('started_at, engagement_score')
      .eq('user_id', session.user.id)
      .eq('status', 'completed')
      .gte('started_at', startDate.toISOString())
      .order('started_at')

    // 获取准确率趋势
    const { data: accuracyTrend, error: accuracyError } = await supabase
      .from('game_sessions')
      .select('started_at, accuracy_percentage')
      .eq('user_id', session.user.id)
      .eq('status', 'completed')
      .gte('started_at', startDate.toISOString())
      .order('started_at')

    // 获取游戏时长趋势
    const { data: playTimeTrend, error: playTimeError } = await supabase
      .from('game_sessions')
      .select('started_at, duration_seconds')
      .eq('user_id', session.user.id)
      .eq('status', 'completed')
      .gte('started_at', startDate.toISOString())
      .order('started_at')

    if (engagementError || accuracyError || playTimeError) {
      console.error('Error fetching trend data:', { engagementError, accuracyError, playTimeError })
    }

    // 处理趋势数据，按日期聚合
    const processedEngagementTrend = processTrendData(engagementTrend || [], 'engagement_score')
    const processedAccuracyTrend = processTrendData(accuracyTrend || [], 'accuracy_percentage')
    const processedPlayTimeTrend = processTrendData(playTimeTrend || [], 'duration_seconds', true) // 转换为分钟

    // 构建响应数据
    const progressData: ProgressData = {
      skills: {
        fine_motor: progressSummary?.fine_motor_progress || 0,
        language: progressSummary?.language_progress || 0,
        cognition: progressSummary?.cognition_progress || 0,
        gross_motor: progressSummary?.gross_motor_progress || 0,
        social: progressSummary?.social_progress || 0,
      },
      trend: {
        engagement: processedEngagementTrend,
        accuracy: processedAccuracyTrend,
        play_time: processedPlayTimeTrend
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        summary: progressSummary as UserProgressSummary || null,
        progress: progressData
      }
    })

  } catch (error) {
    console.error('Error in get progress:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 辅助函数：处理趋势数据
function processTrendData(
  data: any[], 
  valueField: string, 
  convertToMinutes = false
): Array<{ date: string; score?: number; percentage?: number; minutes?: number }> {
  const dailyData: { [date: string]: number[] } = {}

  // 按日期分组数据
  data.forEach(item => {
    const date = new Date(item.started_at).toISOString().split('T')[0]
    if (!dailyData[date]) {
      dailyData[date] = []
    }
    
    let value = item[valueField]
    if (convertToMinutes && value) {
      value = Math.round(value / 60) // 将秒转换为分钟
    }
    
    if (value !== null && value !== undefined) {
      dailyData[date].push(value)
    }
  })

  // 计算每日平均值
  return Object.entries(dailyData).map(([date, values]) => {
    const average = values.reduce((sum, val) => sum + val, 0) / values.length
    
    const result: any = { date }
    if (valueField === 'engagement_score') {
      result.score = Math.round(average * 10) / 10 // 保留一位小数
    } else if (valueField === 'accuracy_percentage') {
      result.percentage = Math.round(average * 10) / 10
    } else if (valueField === 'duration_seconds') {
      result.minutes = Math.round(average)
    }
    
    return result
  }).sort((a, b) => a.date.localeCompare(b.date))
}

export const GET = withErrorHandling(getProgressHandler)