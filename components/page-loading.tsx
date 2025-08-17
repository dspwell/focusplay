'use client';
import { Loader2 } from "lucide-react";

export default function PageLoading({ text = '加载中...' }: { text?: string }) {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-3 text-sm text-gray-600">
      <Loader2 className="h-7 w-7 animate-spin" />
      <div>{text}</div>
    </div>
  );
}

// 页面切换加载指示器
export function PageLoadingIndicator() {
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
    return loadingComponent || <PageLoading />
  }

  return <>{children}</>
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
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
            <p className="text-gray-600">{message}</p>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}