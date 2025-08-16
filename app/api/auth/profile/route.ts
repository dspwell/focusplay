import { NextRequest } from "next/server"
import { createClient } from "../../../lib/supabase"
import { withErrorHandling, successResponse, validateRequestBody, handleSupabaseError } from "../../../lib/api-response"
import { createError } from "../../../lib/errors"
import { z } from "zod"

// 用户档案更新 schema
const updateProfileSchema = z.object({
  display_name: z.string().max(100, '姓名不能超过100个字符').optional(),
  parent_name: z.string().max(100, '家长姓名不能超过100个字符').optional(),
  phone: z.string().max(20, '手机号不能超过20个字符').optional(),
  preferred_language: z.enum(['zh-CN', 'en-US']).optional(),
  notification_enabled: z.boolean().optional(),
  onboarding_completed: z.boolean().optional()
})

// 获取用户档案
async function getProfileHandler(request: NextRequest) {
  const supabase = createClient()

  // 验证用户身份
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    throw createError.api('用户未登录', { context: 'auth_required' })
  }

  // 获取用户档案
  const { data: profile, error: profileError } = await supabase
    .from('user_profiles')
    .select(`
      *,
      children:children_profiles(*)
    `)
    .eq('id', user.id)
    .single()

  if (profileError) {
    if (profileError.code === 'PGRST116') {
      // 档案不存在，创建默认档案
      const { data: newProfile, error: createError } = await supabase
        .from('user_profiles')
        .insert({
          id: user.id,
          email: user.email || '',
          display_name: user.user_metadata?.display_name || null,
          role: 'user',
          preferred_language: 'zh-CN',
          notification_enabled: true,
          onboarding_completed: false
        })
        .select()
        .single()

      if (createError) {
        throw handleSupabaseError(createError)
      }

      return successResponse({
        profile: { ...newProfile, children: [] },
        stats: await getUserStats(supabase, user.id)
      })
    }
    
    throw handleSupabaseError(profileError)
  }

  // 获取用户统计信息
  const stats = await getUserStats(supabase, user.id)

  return successResponse({
    profile,
    stats
  })
}

// 更新用户档案
async function updateProfileHandler(request: NextRequest) {
  const supabase = createClient()

  // 验证用户身份
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    throw createError.api('用户未登录', { context: 'auth_required' })
  }

  // 验证请求体
  const updates = await validateRequestBody(request, (data) => {
    const result = updateProfileSchema.safeParse(data)
    if (!result.success) {
      throw createError.validation(
        result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', '),
        { errors: result.error.errors }
      )
    }
    return result.data
  })

  // 更新用户档案
  const { data: updatedProfile, error: updateError } = await supabase
    .from('user_profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', user.id)
    .select()
    .single()

  if (updateError) {
    throw handleSupabaseError(updateError)
  }

  return successResponse({
    profile: updatedProfile
  })
}

// 获取用户统计信息
async function getUserStats(supabase: any, userId: string) {
  try {
    const { data, error } = await supabase.rpc('get_user_stats', {
      user_uuid: userId
    })

    if (error) {
      console.warn('获取用户统计失败:', error)
      return {
        total_plans: 0,
        completed_plans: 0,
        total_sessions: 0,
        total_play_time: 0,
        children_count: 0,
        avg_engagement: 0
      }
    }

    return data || {
      total_plans: 0,
      completed_plans: 0,
      total_sessions: 0,
      total_play_time: 0,
      children_count: 0,
      avg_engagement: 0
    }
  } catch (error) {
    console.warn('获取用户统计异常:', error)
    return {
      total_plans: 0,
      completed_plans: 0,
      total_sessions: 0,
      total_play_time: 0,
      children_count: 0,
      avg_engagement: 0
    }
  }
}

// 导出处理函数
export const GET = withErrorHandling(getProfileHandler)
export const PUT = withErrorHandling(updateProfileHandler)