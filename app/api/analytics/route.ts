import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '../../../lib/api/middleware'

// 获取用户分析数据
const getAnalyticsHandler = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const searchParams = req.nextUrl.searchParams
  const childId = searchParams.get('child_id')
  const period = searchParams.get('period') || '30' // 默认30天
  const type = searchParams.get('type') || 'overview' // overview, detailed, comparison

  try {
    const periodDays = parseInt(period)
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - periodDays)

    let baseQuery = supabase
      .from('game_sessions')
      .select('*')
      .eq('user_id', session.user.id)
      .eq('status', 'completed')
      .gte('started_at', startDate.toISOString())

    if (childId) {
      baseQuery = baseQuery.eq('child_id', childId)
    }

    const { data: sessions, error: sessionsError } = await baseQuery

    if (sessionsError) {
      console.error('Error fetching sessions for analytics:', sessionsError)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch analytics data' 
      }, { status: 500 })
    }

    let analyticsData = {}

    switch (type) {
      case 'overview':
        analyticsData = await generateOverviewAnalytics(sessions || [])
        break
      case 'detailed':
        analyticsData = await generateDetailedAnalytics(sessions || [], supabase, session.user.id, childId)
        break
      case 'comparison':
        analyticsData = await generateComparisonAnalytics(sessions || [], supabase, session.user.id, childId)
        break
      default:
        analyticsData = await generateOverviewAnalytics(sessions || [])
    }

    return NextResponse.json({
      success: true,
      data: analyticsData
    })

  } catch (error) {
    console.error('Error in get analytics:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 生成概览分析数据
async function generateOverviewAnalytics(sessions: any[]) {
  const totalSessions = sessions.length
  const totalPlayTime = sessions.reduce((sum, s) => sum + (s.duration_seconds || 0), 0)
  const avgEngagement = sessions.length > 0 
    ? sessions.reduce((sum, s) => sum + (s.engagement_score || 0), 0) / sessions.length 
    : 0
  const avgAccuracy = sessions.length > 0
    ? sessions.reduce((sum, s) => sum + (s.accuracy_percentage || 0), 0) / sessions.length
    : 0

  // 按游戏类型统计
  const gameStats: { [key: number]: { count: number, avgEngagement: number, avgAccuracy: number } } = {}
  sessions.forEach(session => {
    if (!gameStats[session.game_id]) {
      gameStats[session.game_id] = { count: 0, avgEngagement: 0, avgAccuracy: 0 }
    }
    gameStats[session.game_id].count++
    gameStats[session.game_id].avgEngagement += session.engagement_score || 0
    gameStats[session.game_id].avgAccuracy += session.accuracy_percentage || 0
  })

  // 计算平均值
  Object.keys(gameStats).forEach(gameId => {
    const stats = gameStats[parseInt(gameId)]
    stats.avgEngagement = stats.avgEngagement / stats.count
    stats.avgAccuracy = stats.avgAccuracy / stats.count
  })

  // 最佳表现日期
  const dailyStats: { [date: string]: { sessions: number, avgEngagement: number } } = {}
  sessions.forEach(session => {
    const date = new Date(session.started_at).toISOString().split('T')[0]
    if (!dailyStats[date]) {
      dailyStats[date] = { sessions: 0, avgEngagement: 0 }
    }
    dailyStats[date].sessions++
    dailyStats[date].avgEngagement += session.engagement_score || 0
  })

  // 计算每日平均参与度
  Object.keys(dailyStats).forEach(date => {
    dailyStats[date].avgEngagement = dailyStats[date].avgEngagement / dailyStats[date].sessions
  })

  const bestDay = Object.entries(dailyStats)
    .sort((a, b) => b[1].avgEngagement - a[1].avgEngagement)[0]

  return {
    overview: {
      total_sessions: totalSessions,
      total_play_time_minutes: Math.round(totalPlayTime / 60),
      avg_engagement_score: Math.round(avgEngagement * 10) / 10,
      avg_accuracy_percentage: Math.round(avgAccuracy * 10) / 10,
      best_performance_date: bestDay ? bestDay[0] : null,
      best_performance_score: bestDay ? Math.round(bestDay[1].avgEngagement * 10) / 10 : null
    },
    game_performance: gameStats,
    daily_stats: dailyStats
  }
}

// 生成详细分析数据
async function generateDetailedAnalytics(sessions: any[], supabase: any, userId: string, childId?: string) {
  const overview = await generateOverviewAnalytics(sessions)

  // 获取游戏详细信息
  const gameIds = [...new Set(sessions.map(s => s.game_id))]
  const { data: games } = await supabase
    .from('games')
    .select('id, name, difficulty, focuses')
    .in('id', gameIds)

  const gameMap = games ? games.reduce((map: any, game: any) => {
    map[game.id] = game
    return map
  }, {}) : {}

  // 按难度分析
  const difficultyStats: { [key: number]: { count: number, avgEngagement: number, avgAccuracy: number } } = {}
  
  // 按能力焦点分析
  const focusStats: { [key: string]: { count: number, avgEngagement: number, avgAccuracy: number } } = {}

  sessions.forEach(session => {
    const game = gameMap[session.game_id]
    if (!game) return

    // 难度统计
    const difficulty = game.difficulty || 1
    if (!difficultyStats[difficulty]) {
      difficultyStats[difficulty] = { count: 0, avgEngagement: 0, avgAccuracy: 0 }
    }
    difficultyStats[difficulty].count++
    difficultyStats[difficulty].avgEngagement += session.engagement_score || 0
    difficultyStats[difficulty].avgAccuracy += session.accuracy_percentage || 0

    // 能力焦点统计
    const focuses = game.focuses || []
    focuses.forEach((focus: string) => {
      if (!focusStats[focus]) {
        focusStats[focus] = { count: 0, avgEngagement: 0, avgAccuracy: 0 }
      }
      focusStats[focus].count++
      focusStats[focus].avgEngagement += session.engagement_score || 0
      focusStats[focus].avgAccuracy += session.accuracy_percentage || 0
    })
  })

  // 计算平均值
  Object.values(difficultyStats).forEach(stats => {
    stats.avgEngagement = stats.avgEngagement / stats.count
    stats.avgAccuracy = stats.avgAccuracy / stats.count
  })

  Object.values(focusStats).forEach(stats => {
    stats.avgEngagement = stats.avgEngagement / stats.count
    stats.avgAccuracy = stats.avgAccuracy / stats.count
  })

  // 学习进展分析
  const progressAnalysis = analyzeProgressTrend(sessions)

  return {
    ...overview,
    detailed_analysis: {
      difficulty_performance: difficultyStats,
      focus_area_performance: focusStats,
      progress_trend: progressAnalysis,
      game_details: gameMap
    }
  }
}

// 生成对比分析数据
async function generateComparisonAnalytics(sessions: any[], supabase: any, userId: string, childId?: string) {
  // 获取前一个周期的数据进行对比
  const currentPeriodSessions = sessions
  
  const previousStartDate = new Date()
  previousStartDate.setDate(previousStartDate.getDate() - sessions.length * 2) // 前一个相同长度的周期
  
  const previousEndDate = new Date()
  previousEndDate.setDate(previousEndDate.getDate() - sessions.length)

  let previousQuery = supabase
    .from('game_sessions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'completed')
    .gte('started_at', previousStartDate.toISOString())
    .lt('started_at', previousEndDate.toISOString())

  if (childId) {
    previousQuery = previousQuery.eq('child_id', childId)
  }

  const { data: previousSessions } = await previousQuery

  const currentAnalytics = await generateOverviewAnalytics(currentPeriodSessions)
  const previousAnalytics = await generateOverviewAnalytics(previousSessions || [])

  // 计算变化百分比
  const calculateChange = (current: number, previous: number) => {
    if (previous === 0) return current > 0 ? 100 : 0
    return Math.round(((current - previous) / previous) * 100)
  }

  return {
    current_period: currentAnalytics,
    previous_period: previousAnalytics,
    comparison: {
      sessions_change: calculateChange(
        currentAnalytics.overview.total_sessions, 
        previousAnalytics.overview.total_sessions
      ),
      play_time_change: calculateChange(
        currentAnalytics.overview.total_play_time_minutes, 
        previousAnalytics.overview.total_play_time_minutes
      ),
      engagement_change: calculateChange(
        currentAnalytics.overview.avg_engagement_score, 
        previousAnalytics.overview.avg_engagement_score
      ),
      accuracy_change: calculateChange(
        currentAnalytics.overview.avg_accuracy_percentage, 
        previousAnalytics.overview.avg_accuracy_percentage
      )
    }
  }
}

// 分析进展趋势
function analyzeProgressTrend(sessions: any[]) {
  if (sessions.length < 3) {
    return { trend: 'insufficient_data', message: '数据不足，需要更多训练记录' }
  }

  // 按时间排序
  const sortedSessions = sessions.sort((a, b) => 
    new Date(a.started_at).getTime() - new Date(b.started_at).getTime()
  )

  // 计算趋势
  const firstHalf = sortedSessions.slice(0, Math.floor(sortedSessions.length / 2))
  const secondHalf = sortedSessions.slice(Math.floor(sortedSessions.length / 2))

  const firstHalfAvgEngagement = firstHalf.reduce((sum, s) => sum + (s.engagement_score || 0), 0) / firstHalf.length
  const secondHalfAvgEngagement = secondHalf.reduce((sum, s) => sum + (s.engagement_score || 0), 0) / secondHalf.length

  const firstHalfAvgAccuracy = firstHalf.reduce((sum, s) => sum + (s.accuracy_percentage || 0), 0) / firstHalf.length
  const secondHalfAvgAccuracy = secondHalf.reduce((sum, s) => sum + (s.accuracy_percentage || 0), 0) / secondHalf.length

  const engagementImprovement = secondHalfAvgEngagement - firstHalfAvgEngagement
  const accuracyImprovement = secondHalfAvgAccuracy - firstHalfAvgAccuracy

  let trend = 'stable'
  let message = '保持稳定的学习状态'

  if (engagementImprovement > 0.5 && accuracyImprovement > 5) {
    trend = 'improving'
    message = '学习表现持续改善，继续保持！'
  } else if (engagementImprovement < -0.5 || accuracyImprovement < -5) {
    trend = 'declining'
    message = '可能需要调整训练难度或休息一下'
  }

  return {
    trend,
    message,
    engagement_change: Math.round(engagementImprovement * 10) / 10,
    accuracy_change: Math.round(accuracyImprovement * 10) / 10
  }
}

export const GET = withErrorHandling(getAnalyticsHandler)