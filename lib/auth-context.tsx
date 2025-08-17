'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { createClient } from './supabase'
import type { User, AuthChangeEvent, Session } from '@supabase/supabase-js'
import type { AuthUser, UserProfile, ChildProfile, AuthContextType } from './types'
import { useErrorHandler } from '../hooks/use-error-handler'
import { toast } from 'sonner'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [childrenProfiles, setChildrenProfiles] = useState<ChildProfile[]>([])
  const [loading, setLoading] = useState(true)
  const { handleError, handleAsyncOperation } = useErrorHandler({ showToast: false })
  
  const supabase = createClient()

  // 初始化认证状态
  useEffect(() => {
    let isMounted = true

    const initializeAuth = async () => {
      try {
        // 获取当前会话
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('获取会话失败:', error)
          return
        }

        if (session?.user && isMounted) {
          await handleUserSession(session.user)
        }
      } catch (error) {
        console.error('初始化认证状态失败:', error)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    initializeAuth()

    // 监听认证状态变化
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        if (!isMounted) return

        console.log('认证状态变化:', event, session?.user?.id)

        switch (event) {
          case 'SIGNED_IN':
            if (session?.user) {
              await handleUserSession(session.user)
            }
            setLoading(false)
            break
          
          case 'SIGNED_OUT':
            setUser(null)
            setProfile(null)
            setChildrenProfiles([])
            setLoading(false)
            break
          
          case 'TOKEN_REFRESHED':
            if (session?.user) {
              await handleUserSession(session.user, false) // 不重新加载档案
            }
            break
          
          case 'USER_UPDATED':
            if (session?.user) {
              await handleUserSession(session.user)
            }
            break
        }
      }
    )

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  // 处理用户会话
  const handleUserSession = async (authUser: User, loadProfile = true) => {
    const user: AuthUser = {
      id: authUser.id,
      email: authUser.email,
      user_metadata: authUser.user_metadata
    }
    
    setUser(user)

    if (loadProfile) {
      await loadUserProfile(authUser.id)
    }
  }

  // 加载用户档案
  const loadUserProfile = async (userId: string) => {
    try {
      // 加载用户档案
      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (profileError && profileError.code !== 'PGRST116') {
        console.error('获取用户档案失败:', profileError)
        return
      }

      if (profileData) {
        setProfile(profileData)
        
        // 加载孩子档案
        const { data: childrenData, error: childrenError } = await supabase
          .from('children_profiles')
          .select('*')
          .eq('parent_id', userId)
          .eq('is_active', true)
          .order('created_at', { ascending: true })

        if (childrenError) {
          console.error('获取孩子档案失败:', childrenError)
        } else {
          setChildrenProfiles(childrenData || [])
        }
      }
    } catch (error) {
      console.error('加载用户档案失败:', error)
    }
  }

  // 登录
  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      throw new Error(getAuthErrorMessage(error.message))
    }

    toast.success('登录成功！')
  }

  // 注册
  const signUp = async (email: string, password: string, displayName?: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName
        }
      }
    })

    if (error) {
      throw new Error(getAuthErrorMessage(error.message))
    }

    if (data.user && !data.session) {
      toast.success('注册成功！请检查邮箱并点击确认链接激活账户。')
    } else if (data.session) {
      // 创建用户档案
      await createUserProfile(data.user.id, email, displayName)
      toast.success('注册成功！')
    }
  }

  // 登出
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      throw new Error(getAuthErrorMessage(error.message))
    }

    toast.success('已安全退出登录')
  }

  // 创建用户档案
  const createUserProfile = async (userId: string, email: string, displayName?: string) => {
    const { error } = await supabase
      .from('user_profiles')
      .insert({
        id: userId,
        email,
        display_name: displayName || null,
        role: 'user',
        preferred_language: 'zh-CN',
        notification_enabled: true,
        onboarding_completed: false
      })

    if (error && error.code !== '23505') { // 忽略重复插入错误
      console.error('创建用户档案失败:', error)
      throw new Error('创建用户档案失败')
    }
  }

  // 更新用户档案
  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user?.id) {
      throw new Error('用户未登录')
    }

    const { error } = await supabase
      .from('user_profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', user.id)

    if (error) {
      throw new Error('更新档案失败')
    }

    await loadUserProfile(user.id)
    toast.success('档案更新成功')
  }

  // 刷新用户档案
  const refreshProfile = async () => {
    if (user?.id) {
      await loadUserProfile(user.id)
    }
  }

  // 错误消息映射
  const getAuthErrorMessage = (error: string): string => {
    const errorMap: Record<string, string> = {
      'Invalid login credentials': '邮箱或密码错误',
      'Email not confirmed': '邮箱未验证，请检查邮箱并点击确认链接',
      'User already registered': '该邮箱已注册，请直接登录',
      'Password should be at least 6 characters': '密码至少需要6个字符',
      'Invalid email format': '邮箱格式不正确',
      'Signup disabled': '注册功能暂时关闭',
      'Too many requests': '请求过于频繁，请稍后再试'
    }

    return errorMap[error] || '认证失败，请重试'
  }

  const contextValue: AuthContextType = {
    user,
    profile,
    children: childrenProfiles,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile,
    refreshProfile
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook 使用认证上下文
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth 必须在 AuthProvider 内使用')
  }
  return context
}

// 检查是否已认证的 Hook
export function useRequireAuth() {
  const { user, loading } = useAuth()
  
  useEffect(() => {
    if (!loading && !user) {
      // 可以重定向到登录页或显示登录模态框
      toast.error('请先登录')
    }
  }, [user, loading])

  return { user, loading, isAuthenticated: !!user }
}

// 检查角色权限的 Hook
export function useRole() {
  const { profile } = useAuth()
  
  const hasRole = (roles: string | string[]) => {
    if (!profile) return false
    
    const roleArray = Array.isArray(roles) ? roles : [roles]
    return roleArray.includes(profile.role)
  }

  const isAdmin = hasRole(['admin', 'super_admin'])
  const isSuperAdmin = hasRole('super_admin')
  
  return {
    role: profile?.role,
    hasRole,
    isAdmin,
    isSuperAdmin
  }
}