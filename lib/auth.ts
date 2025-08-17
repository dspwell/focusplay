import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import type { User } from '@supabase/supabase-js'

/**
 * 创建服务端Supabase客户端
 * 用于Server Components和API Routes
 */
export function createServerSupabaseClient() {
  const cookieStore = cookies()
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set: (name: string, value: string, options: any) => {
          try {
            cookieStore.set({ name, value, ...options })
          } catch {
            // 静默处理cookie设置错误（可能在只读模式下）
          }
        },
        remove: (name: string, options: any) => {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch {
            // 静默处理cookie删除错误
          }
        },
      },
    }
  )
}

/**
 * 获取当前登录用户
 * 用于Server Components中需要认证的页面
 */
export async function getCurrentUser(): Promise<{ 
  user: User | null
  session: any
  error: any 
}> {
  const supabase = createServerSupabaseClient()
  
  try {
    const { data: { user, session }, error } = await supabase.auth.getUser()
    return { user, session, error }
  } catch (error) {
    return { user: null, session: null, error }
  }
}

/**
 * 获取当前用户会话
 * 更轻量的认证检查
 */
export async function getCurrentSession() {
  const supabase = createServerSupabaseClient()
  
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  } catch (error) {
    return { session: null, error }
  }
}

/**
 * 验证用户是否有管理员权限
 */
export async function checkAdminRole(userId: string): Promise<{
  isAdmin: boolean
  role: string | null
  error: any
}> {
  const supabase = createServerSupabaseClient()
  
  try {
    const { data: profile, error } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', userId)
      .single()

    if (error) {
      return { isAdmin: false, role: null, error }
    }

    const isAdmin = profile && ['admin', 'super_admin'].includes(profile.role)
    return { isAdmin, role: profile?.role || null, error: null }
  } catch (error) {
    return { isAdmin: false, role: null, error }
  }
}

/**
 * 需要认证的页面重定向辅助函数
 */
export function requireAuth(user: User | null, redirectTo: string = '/') {
  if (!user) {
    throw new Error(`Unauthorized - redirect to ${redirectTo}`)
  }
  return user
}

/**
 * 需要管理员权限的页面检查
 */
export async function requireAdmin(userId: string) {
  const { isAdmin, error } = await checkAdminRole(userId)
  
  if (error || !isAdmin) {
    throw new Error('Admin access required')
  }
  
  return true
}