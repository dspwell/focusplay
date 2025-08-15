import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useRequireAdmin() {
  const { user, profile, loading } = useAuth()
  const router = useRouter()

  const isAdmin = profile?.role && ['admin', 'super_admin'].includes(profile.role)

  useEffect(() => {
    if (!loading && !user) {
      // 未登录，重定向到首页
      router.push('/?auth=required')
    } else if (!loading && user && !isAdmin) {
      // 已登录但不是管理员，重定向到仪表板
      router.push('/dashboard?error=access_denied')
    }
  }, [user, isAdmin, loading, router])

  return {
    isAdmin: !!isAdmin,
    isAuthenticated: !!user,
    loading,
    profile
  }
}

export function useRole() {
  const { profile } = useAuth()
  
  return {
    isAdmin: profile?.role && ['admin', 'super_admin'].includes(profile.role),
    isSuperAdmin: profile?.role === 'super_admin',
    isUser: profile?.role === 'user' || !profile?.role,
    role: profile?.role || 'user'
  }
}