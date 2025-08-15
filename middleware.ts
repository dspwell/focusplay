import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 需要认证的路径
const protectedRoutes = [
  '/dashboard',
  '/children', 
  '/progress',
  '/settings',
  '/admin'
]

// 管理员专用路径
const adminRoutes = [
  '/admin'
]

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const pathname = req.nextUrl.pathname

  // 跳过 API 路由和静态文件
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return res
  }

  try {
    // 创建 Supabase 客户端
    const supabase = createMiddlewareClient({ req, res })
    
    // 获取会话信息
    const { data: { session }, error } = await supabase.auth.getSession()

    // 检查是否访问受保护的路径
    const isProtectedRoute = protectedRoutes.some(route => 
      pathname.startsWith(route)
    )

    const isAdminRoute = adminRoutes.some(route => 
      pathname.startsWith(route)
    )

    if (isProtectedRoute) {
      // 未登录用户重定向到首页
      if (!session) {
        const redirectUrl = new URL('/', req.url)
        redirectUrl.searchParams.set('redirect', pathname)
        redirectUrl.searchParams.set('auth', 'required')
        return NextResponse.redirect(redirectUrl)
      }

      // 检查管理员权限
      if (isAdminRoute) {
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('role')
          .eq('id', session.user.id)
          .single()

        if (!profile || !['admin', 'super_admin'].includes(profile.role)) {
          const redirectUrl = new URL('/', req.url)
          redirectUrl.searchParams.set('error', 'access_denied')
          return NextResponse.redirect(redirectUrl)
        }
      }
    }

    // 记录用户活动（可选）
    if (session && !pathname.startsWith('/api')) {
      // 异步记录用户访问日志，不阻塞请求
      supabase
        .from('usage_analytics')
        .insert({
          user_id: session.user.id,
          event_type: 'page_view',
          event_data: { pathname },
          user_agent: req.headers.get('user-agent'),
          ip_address: req.ip || req.headers.get('x-forwarded-for')
        })
        .then(() => {
          // 静默记录，错误不影响正常流程
        })
        .catch(() => {
          // 静默处理错误
        })
    }

    return res
  } catch (error) {
    // 中间件错误不应阻塞请求
    console.error('Middleware error:', error)
    return res
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}