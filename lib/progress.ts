import { createServerSupabaseClient, getCurrentUser } from '@/lib/auth'
import type { UserProgressSummary, ProgressData } from '@/lib/types'

/**
 * 获取用户进度数据 - 服务端函数
 * 用于Server Components直接调用，避免API绕行
 */
export async function getUserProgress(childId?: string): Promise<{
  success: boolean
  data?: ProgressData
  error?: string
}> {
  try {
    const { user } = await getCurrentUser()
    if (!user) {
      return { success: false, error: 'Unauthorized' }
    }

    const supabase = createServerSupabaseClient()

    // 获取进度汇总
    let summaryQuery = supabase
      .from('user_progress_summary')
      .select('*')
      .eq('user_id', user.id)

    if (childId) {
      summaryQuery = summaryQuery.eq('child_id', childId)
    } else {
      summaryQuery = summaryQuery.is('child_id', null)
    }

    const { data: summary, error: summaryError } = await summaryQuery.single()

    if (summaryError && summaryError.code !== 'PGRST116') {
      throw summaryError
    }

    // 获取最近的游戏会话
    let sessionsQuery = supabase
      .from('game_sessions')
      .select(`
        *,
        plans:plan_id(id, title),
        games:game_id(id, name, description),
        children_profiles:child_id(id, name)
      `)
      .eq('user_id', user.id)
      .eq('status', 'completed')
      .order('completed_at', { ascending: false })
      .limit(10)

    if (childId) {
      sessionsQuery = sessionsQuery.eq('child_id', childId)
    }

    const { data: recentSessions, error: sessionsError } = await sessionsQuery

    if (sessionsError) {
      throw sessionsError
    }

    // 获取成就
    let achievementsQuery = supabase
      .from('achievements')
      .select('*')
      .eq('user_id', user.id)
      .order('earned_at', { ascending: false })

    if (childId) {
      achievementsQuery = achievementsQuery.eq('child_id', childId)
    }

    const { data: achievements, error: achievementsError } = await achievementsQuery

    if (achievementsError) {
      throw achievementsError
    }

    // 获取月度统计
    const monthlyStats = await getMonthlyStats(supabase, user.id, childId)

    const progressData: ProgressData = {
      summary: summary as UserProgressSummary || {
        id: '',
        user_id: user.id,
        child_id: childId || null,
        total_sessions: 0,
        total_play_time_minutes: 0,
        total_games_completed: 0,
        avg_engagement_score: 0,
        avg_completion_rate: 0,
        current_streak_days: 0,
        last_played_at: null,
        last_calculated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      recent_sessions: recentSessions || [],
      achievements: achievements || [],
      monthly_stats: monthlyStats
    }

    return { success: true, data: progressData }
  } catch (error) {
    console.error('Error fetching user progress:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Internal server error' 
    }
  }
}

/**
 * 获取月度统计数据
 */
async function getMonthlyStats(supabase: any, userId: string, childId?: string) {
  try {
    const threeMonthsAgo = new Date()
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)

    let query = supabase
      .from('game_sessions')
      .select('completed_at, duration_seconds, engagement_score')
      .eq('user_id', userId)
      .eq('status', 'completed')
      .gte('completed_at', threeMonthsAgo.toISOString())

    if (childId) {
      query = query.eq('child_id', childId)
    }

    const { data: sessions, error } = await query

    if (error || !sessions) {
      return []
    }

    // 按月份分组统计
    const monthlyData = sessions.reduce((acc: any, session: any) => {
      const month = new Date(session.completed_at).toISOString().slice(0, 7) // YYYY-MM
      
      if (!acc[month]) {
        acc[month] = {
          month,
          sessions: 0,
          total_minutes: 0,
          avg_engagement: 0,
          engagement_sum: 0
        }
      }

      acc[month].sessions += 1
      acc[month].total_minutes += Math.round((session.duration_seconds || 0) / 60)
      acc[month].engagement_sum += session.engagement_score || 0
      acc[month].avg_engagement = acc[month].engagement_sum / acc[month].sessions

      return acc
    }, {})

    return Object.values(monthlyData).sort((a: any, b: any) => 
      a.month.localeCompare(b.month)
    )
  } catch (error) {
    console.error('Error fetching monthly stats:', error)
    return []
  }
}

/**
 * 获取用户成就列表
 */
export async function getUserAchievements(childId?: string): Promise<{
  success: boolean
  data?: any[]
  error?: string
}> {
  try {
    const { user } = await getCurrentUser()
    if (!user) {
      return { success: false, error: 'Unauthorized' }
    }

    const supabase = createServerSupabaseClient()

    let query = supabase
      .from('achievements')
      .select('*')
      .eq('user_id', user.id)
      .order('earned_at', { ascending: false })

    if (childId) {
      query = query.eq('child_id', childId)
    }

    const { data: achievements, error } = await query

    if (error) {
      throw error
    }

    return { success: true, data: achievements || [] }
  } catch (error) {
    console.error('Error fetching achievements:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    }
  }
}