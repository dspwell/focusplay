'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LoadingSpinner } from '@/components/ui/loading'

// 页面切换加载指示器
export function PageLoadingIndicator() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(false)
  }, [pathname])

  // 监听页面导航开始
  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    // 这里可以集成 Next.js 的路由事件
    // 由于 App Router 的限制，我们使用简化的方案
    
    return () => {
      // 清理事件监听器
    }
  }, [])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
    </div>
  )
}

// 页面包装器，提供统一的加载状态
export function PageWrapper({
  children,
  loading = false,
  error = null,
  loadingComponent,
  errorComponent
}: {
  children: React.ReactNode
  loading?: boolean
  error?: Error | null
  loadingComponent?: React.ReactNode
  errorComponent?: React.ComponentType<{ error: Error; retry: () => void }>
}) {
  if (error && errorComponent) {
    const ErrorComponent = errorComponent
    return <ErrorComponent error={error} retry={() => window.location.reload()} />
  }

  if (loading) {
    return loadingComponent || <DefaultPageLoader />
  }

  return <>{children}</>
}

// 默认页面加载组件
function DefaultPageLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <LoadingSpinner size="large" className="text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            正在加载页面
          </h2>
          <p className="text-gray-600">
            请稍候，我们正在为您准备内容...
          </p>
        </div>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  )
}

// 内容加载状态组件
export function ContentLoader({
  loading = false,
  children,
  skeleton,
  message = '正在加载内容...'
}: {
  loading?: boolean
  children: React.ReactNode
  skeleton?: React.ReactNode
  message?: string
}) {
  if (loading) {
    return skeleton || (
      <div className="space-y-4">
        <div className="flex items-center justify-center py-8">
          <div className="text-center space-y-4">
            <LoadingSpinner size="large" className="mx-auto text-blue-600" />
            <p className="text-gray-600">{message}</p>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}