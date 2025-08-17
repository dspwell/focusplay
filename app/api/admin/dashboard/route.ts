import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '../@/lib/api/middleware'

// 获取管理员仪表板数据
const getAdminDashboardHandler = async (req: NextRequest) => {
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

  try {
    // 并行获取各种统计数据
    const [
      usersResult,
      gamesResult,
      sessionsResult,
      plansResult,
      recentActivityResult
    ] = await Promise.all([
      // 用户统计
      supabase
        .from('user_profiles')
        .select('id, created_at, subscription_status, last_active_at'),
      
      // 游戏统计
      supabase
        .from('games')
        .select('id, created_at, is_active'),
      
      // 游戏会话统计
      supabase
        .from('game_sessions')
        .select('id, created_at, status, duration_seconds, engagement_score'),
      
      // 计划统计
      supabase
        .from('plans')
        .select('id, created_at, status'),
      
      // 最近活动
      supabase
        .from('usage_analytics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50)
    ])

    // 处理用户数据
    const users = usersResult.data || []
    const now = new Date()
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    const userStats = {
      total_users: users.length,
      new_users_30d: users.filter(u => new Date(u.created_at) >= thirtyDaysAgo).length,
      active_users_7d: users.filter(u => u.last_active_at && new Date(u.last_active_at) >= sevenDaysAgo).length,
      premium_users: users.filter(u => u.subscription_status === 'premium').length
    }

    // 处理游戏数据
    const games = gamesResult.data || []
    const gameStats = {
      total_games: games.length,
      active_games: games.filter(g => g.is_active).length,
      new_games_30d: games.filter(g => new Date(g.created_at) >= thirtyDaysAgo).length
    }

    // 处理游戏会话数据
    const sessions = sessionsResult.data || []
    const completedSessions = sessions.filter(s => s.status === 'completed')
    
    const sessionStats = {
      total_sessions: sessions.length,
      completed_sessions: completedSessions.length,
      sessions_30d: sessions.filter(s => new Date(s.created_at) >= thirtyDaysAgo).length,
      avg_engagement: completedSessions.length > 0 
        ? completedSessions.reduce((sum, s) => sum + (s.engagement_score || 0), 0) / completedSessions.length 
        : 0,
      total_play_time_hours: sessions.reduce((sum, s) => sum + (s.duration_seconds || 0), 0) / 3600
    }

    // 处理计划数据
    const plans = plansResult.data || []
    const planStats = {
      total_plans: plans.length,
      active_plans: plans.filter(p => p.status === 'active').length,
      completed_plans: plans.filter(p => p.status === 'completed').length,
      plans_30d: plans.filter(p => new Date(p.created_at) >= thirtyDaysAgo).length
    }

    // 处理最近活动
    const recentActivity = recentActivityResult.data || []

    // 生成图表数据
    const chartData = generateChartData(users, sessions, plans)

    return NextResponse.json({
      success: true,
      data: {
        overview: {
          user_stats: userStats,
          game_stats: gameStats,
          session_stats: sessionStats,
          plan_stats: planStats
        },
        charts: chartData,
        recent_activity: recentActivity.slice(0, 20) // 返回最近20条活动
      }
    })

  } catch (error) {
    console.error('Error in get admin dashboard:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 生成图表数据
function generateChartData(users: any[], sessions: any[], plans: any[]) {
  const now = new Date()
  const last30Days = []
  
  // 生成最近30天的日期
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
    last30Days.push(date.toISOString().split('T')[0])
  }

  // 按日期统计用户注册
  const userRegistrations = last30Days.map(date => {
    const count = users.filter(u => 
      u.created_at && u.created_at.startsWith(date)
    ).length
    return { date, count }
  })

  // 按日期统计游戏会话
  const dailySessions = last30Days.map(date => {
    const count = sessions.filter(s => 
      s.created_at && s.created_at.startsWith(date)
    ).length
    return { date, count }
  })

  // 按日期统计计划创建
  const dailyPlans = last30Days.map(date => {
    const count = plans.filter(p => 
      p.created_at && p.created_at.startsWith(date)
    ).length
    return { date, count }
  })

  // 用户活跃度统计（按小时）
  const hourlyActivity = Array.from({ length: 24 }, (_, hour) => {
    const count = sessions.filter(s => {
      if (!s.created_at) return false
      const sessionHour = new Date(s.created_at).getHours()
      return sessionHour === hour
    }).length
    return { hour, count }
  })

  return {
    user_registrations: userRegistrations,
    daily_sessions: dailySessions,
    daily_plans: dailyPlans,
    hourly_activity: hourlyActivity
  }
}

export const GET = withErrorHandling(getAdminDashboardHandler)