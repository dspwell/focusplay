import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '@/lib/api/middleware'
import type { Achievement } from '@/lib/types'

// 获取用户成就列表
const getAchievementsHandler = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const searchParams = req.nextUrl.searchParams
  const childId = searchParams.get('child_id')
  const achievementType = searchParams.get('type')

  try {
    // 构建查询
    let query = supabase
      .from('achievements')
      .select(`
        *,
        children_profiles:child_id(id, name)
      `)
      .eq('user_id', session.user.id)
      .order('earned_at', { ascending: false })

    // 添加过滤条件
    if (childId) {
      query = query.eq('child_id', childId)
    }
    if (achievementType) {
      query = query.eq('achievement_type', achievementType)
    }

    const { data: achievements, error } = await query

    if (error) {
      console.error('Error fetching achievements:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch achievements' 
      }, { status: 500 })
    }

    // 获取可能的成就类型统计
    const { data: typeStats, error: statsError } = await supabase
      .from('achievements')
      .select('achievement_type')
      .eq('user_id', session.user.id)

    const achievementTypeCounts: { [key: string]: number } = {}
    if (!statsError && typeStats) {
      typeStats.forEach(achievement => {
        achievementTypeCounts[achievement.achievement_type] = 
          (achievementTypeCounts[achievement.achievement_type] || 0) + 1
      })
    }

    return NextResponse.json({
      success: true,
      data: {
        achievements: achievements as Achievement[],
        stats: {
          total: achievements?.length || 0,
          by_type: achievementTypeCounts
        }
      }
    })

  } catch (error) {
    console.error('Error in get achievements:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 手动检查并颁发成就（管理员功能或定时任务）
const checkAchievementsHandler = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证用户
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { child_id } = body

  try {
    const newAchievements: Achievement[] = []

    // 检查连续训练成就
    const streakAchievements = await checkStreakAchievements(supabase, session.user.id, child_id)
    newAchievements.push(...streakAchievements)

    // 检查完美表现成就
    const perfectScoreAchievements = await checkPerfectScoreAchievements(supabase, session.user.id, child_id)
    newAchievements.push(...perfectScoreAchievements)

    // 检查专注学习者成就
    const focusedLearnerAchievements = await checkFocusedLearnerAchievements(supabase, session.user.id, child_id)
    newAchievements.push(...focusedLearnerAchievements)

    return NextResponse.json({
      success: true,
      data: {
        new_achievements: newAchievements,
        count: newAchievements.length
      }
    })

  } catch (error) {
    console.error('Error in check achievements:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

// 检查连续训练成就
async function checkStreakAchievements(
  supabase: any, 
  userId: string, 
  childId?: string
): Promise<Achievement[]> {
  const achievements: Achievement[] = []

  // 获取最近的游戏会话，按日期分组
  const { data: sessions, error } = await supabase
    .from('game_sessions')
    .select('started_at')
    .eq('user_id', userId)
    .eq('child_id', childId || '')
    .eq('status', 'completed')
    .order('started_at', { ascending: false })
    .limit(30) // 只检查最近30天

  if (error || !sessions) return achievements

  // 计算连续天数
  const uniqueDates = [...new Set(
    sessions.map(session => 
      new Date(session.started_at).toISOString().split('T')[0]
    )
  )].sort().reverse()

  let currentStreak = 0
  const today = new Date().toISOString().split('T')[0]
  
  for (let i = 0; i < uniqueDates.length; i++) {
    const expectedDate = new Date()
    expectedDate.setDate(expectedDate.getDate() - i)
    const expectedDateStr = expectedDate.toISOString().split('T')[0]
    
    if (uniqueDates[i] === expectedDateStr) {
      currentStreak++
    } else {
      break
    }
  }

  // 检查是否达到成就条件
  const streakMilestones = [
    { days: 3, type: 'streak_3', name: '三日连击' },
    { days: 7, type: 'streak_7', name: '一周坚持' }
  ]

  for (const milestone of streakMilestones) {
    if (currentStreak >= milestone.days) {
      // 检查是否已经获得此成就
      const { data: existing } = await supabase
        .from('achievements')
        .select('id')
        .eq('user_id', userId)
        .eq('child_id', childId || '')
        .eq('achievement_type', milestone.type)
        .single()

      if (!existing) {
        const { data: newAchievement, error: insertError } = await supabase
          .from('achievements')
          .insert({
            user_id: userId,
            child_id: childId,
            achievement_type: milestone.type,
            achievement_name: milestone.name,
            description: `连续${milestone.days}天完成训练`,
            criteria_met: { current_streak: currentStreak }
          })
          .select('*')
          .single()

        if (!insertError && newAchievement) {
          achievements.push(newAchievement)
        }
      }
    }
  }

  return achievements
}

// 检查完美表现成就
async function checkPerfectScoreAchievements(
  supabase: any, 
  userId: string, 
  childId?: string
): Promise<Achievement[]> {
  const achievements: Achievement[] = []

  // 查找准确率100%的最近会话
  const { data: perfectSessions, error } = await supabase
    .from('game_sessions')
    .select('id, accuracy_percentage, started_at')
    .eq('user_id', userId)
    .eq('child_id', childId || '')
    .eq('status', 'completed')
    .eq('accuracy_percentage', 100)
    .order('started_at', { ascending: false })
    .limit(1)

  if (error || !perfectSessions || perfectSessions.length === 0) {
    return achievements
  }

  // 检查是否已经获得完美表现成就
  const { data: existing } = await supabase
    .from('achievements')
    .select('id')
    .eq('user_id', userId)
    .eq('child_id', childId || '')
    .eq('achievement_type', 'perfect_score')
    .single()

  if (!existing) {
    const { data: newAchievement, error: insertError } = await supabase
      .from('achievements')
      .insert({
        user_id: userId,
        child_id: childId,
        achievement_type: 'perfect_score',
        achievement_name: '完美表现',
        description: '在一次游戏中获得100%准确率',
        criteria_met: { 
          session_id: perfectSessions[0].id,
          accuracy: 100
        }
      })
      .select('*')
      .single()

    if (!insertError && newAchievement) {
      achievements.push(newAchievement)
    }
  }

  return achievements
}

// 检查专注学习者成就
async function checkFocusedLearnerAchievements(
  supabase: any, 
  userId: string, 
  childId?: string
): Promise<Achievement[]> {
  const achievements: Achievement[] = []

  // 获取用户进度汇总
  const { data: progressSummary, error } = await supabase
    .from('user_progress_summary')
    .select('avg_engagement_score, total_sessions')
    .eq('user_id', userId)
    .eq('child_id', childId || '')
    .single()

  if (error || !progressSummary) return achievements

  // 检查是否平均参与度达到4分以上且有至少10次会话
  if (progressSummary.avg_engagement_score >= 4.0 && progressSummary.total_sessions >= 10) {
    // 检查是否已经获得专注学习者成就
    const { data: existing } = await supabase
      .from('achievements')
      .select('id')
      .eq('user_id', userId)
      .eq('child_id', childId || '')
      .eq('achievement_type', 'focused_learner')
      .single()

    if (!existing) {
      const { data: newAchievement, error: insertError } = await supabase
        .from('achievements')
        .insert({
          user_id: userId,
          child_id: childId,
          achievement_type: 'focused_learner',
          achievement_name: '专注学习者',
          description: '平均参与度达到4分以上',
          criteria_met: { 
            avg_engagement: progressSummary.avg_engagement_score,
            total_sessions: progressSummary.total_sessions
          }
        })
        .select('*')
        .single()

      if (!insertError && newAchievement) {
        achievements.push(newAchievement)
      }
    }
  }

  return achievements
}

export const GET = withErrorHandling(getAchievementsHandler)
export const POST = withErrorHandling(checkAchievementsHandler)