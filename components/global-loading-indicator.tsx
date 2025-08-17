'use client'

import { useEffect, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { LoadingSpinner } from '@/components/ui/loading'

// 内部组件，处理 useSearchParams
function LoadingIndicatorContent() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // 页面路由变化时停止加载指示器
    setLoading(false)
  }, [pathname, searchParams])

  // 顶部进度条
  if (loading) {
    return (
      <div className="fixed top-0 left-0 right-0 h-1 bg-blue-200 z-[9999]">
        <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
      </div>
    )
  }

  return null
}

// 全局页面切换加载指示器（包装在 Suspense 中）
export function GlobalLoadingIndicator() {
  return (
    <Suspense fallback={null}>
      <LoadingIndicatorContent />
    </Suspense>
  )
}

// 浮动加载指示器
export function FloatingLoadingIndicator({ 
  show = false, 
  message = '正在处理...',
  position = 'bottom-right' 
}: {
  show?: boolean
  message?: string
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center'
}) {
  if (!show) return null

  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6',
    'center': 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  }

  return (
    <div className={`${positionClasses[position]} z-50`}>
      <div className="bg-white rounded-lg shadow-lg border p-4 flex items-center space-x-3">
        <LoadingSpinner size="small" className="text-blue-600" />
        <span className="text-gray-700 text-sm font-medium">{message}</span>
      </div>
    </div>
  )
}

// 模态加载覆盖层
export function ModalLoadingOverlay({ 
  show = false,
  message = '正在处理...',
  progress,
  onCancel
}: {
  show?: boolean
  message?: string
  progress?: number
  onCancel?: () => void
}) {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full text-center space-y-6">
        <LoadingSpinner size="large" className="mx-auto text-blue-600" />
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{message}</h3>
          {progress !== undefined && (
            <div className="space-y-2">
              <div className="text-sm text-gray-600">{Math.round(progress)}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {onCancel && (
          <button
            onClick={onCancel}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            取消
          </button>
        )}
      </div>
    </div>
  )
}

// 内联加载状态（适用于按钮等小组件）
export function InlineLoadingState({ 
  loading = false,
  children,
  loadingText = '加载中...',
  size = 'default'
}: {
  loading?: boolean
  children: React.ReactNode
  loadingText?: string
  size?: 'small' | 'default' | 'large'
}) {
  const spinnerSizes = {
    small: 'small' as const,
    default: 'default' as const,
    large: 'large' as const
  }

  if (loading) {
    return (
      <div className="flex items-center space-x-2">
        <LoadingSpinner size={spinnerSizes[size]} className="text-current" />
        <span className="text-current">{loadingText}</span>
      </div>
    )
  }

  return <>{children}</>
}

// 延迟加载指示器（避免闪烁）
export function DelayedLoadingIndicator({
  show = false,
  delay = 200,
  children
}: {
  show?: boolean
  delay?: number
  children: React.ReactNode
}) {
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (show) {
      timer = setTimeout(() => {
        setShowLoading(true)
      }, delay)
    } else {
      setShowLoading(false)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [show, delay])

  if (!showLoading) return null
  
  return <>{children}</>
}