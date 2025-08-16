import { Loader2 } from 'lucide-react'
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// 基础加载指示器
export function LoadingSpinner({ 
  className,
  size = 'default'
}: { 
  className?: string
  size?: 'small' | 'default' | 'large'
}) {
  const sizeClasses = {
    small: 'h-4 w-4',
    default: 'h-6 w-6',
    large: 'h-8 w-8'
  }

  return (
    <Loader2 className={cn('animate-spin', sizeClasses[size], className)} />
  )
}

// 加载按钮组件
export function LoadingButton({
  children,
  loading = false,
  disabled = false,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={cn(
        'relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md',
        'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
    >
      {loading && (
        <LoadingSpinner size="small" className="mr-2" />
      )}
      <span className={loading ? 'opacity-70' : ''}>{children}</span>
    </button>
  )
}

// 页面级加载覆盖层
export function LoadingOverlay({
  loading = false,
  message = '正在加载...',
  children
}: {
  loading?: boolean
  message?: string
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      {children}
      {loading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center space-y-4">
            <LoadingSpinner size="large" className="mx-auto text-blue-600" />
            <p className="text-gray-600 font-medium">{message}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// 骨架屏组件
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-200', className)}
      {...props}
    />
  )
}

// 卡片骨架屏
export function CardSkeleton() {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  )
}

// 表单骨架屏
export function FormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-32 w-full" />
      </div>
      <Skeleton className="h-10 w-32" />
    </div>
  )
}

// 列表骨架屏
export function ListSkeleton({ 
  items = 3,
  showAvatar = false 
}: { 
  items?: number
  showAvatar?: boolean 
}) {
  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          {showAvatar && <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />}
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}

// 游戏卡片骨架屏
export function GameCardSkeleton() {
  return (
    <div className="border rounded-lg p-6 space-y-4 shadow-sm">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-1/2" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <div className="space-y-1">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
          <Skeleton className="h-3 w-3/5" />
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-16 w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-12" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3 w-16" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      </div>

      <Skeleton className="h-10 w-full" />
    </div>
  )
}

// 数据表格骨架屏
export function TableSkeleton({
  rows = 5,
  columns = 4
}: {
  rows?: number
  columns?: number
}) {
  return (
    <div className="space-y-3">
      {/* 表头 */}
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-3/4" />
        ))}
      </div>
      
      {/* 表格行 */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid gap-4 py-2" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-4 w-full" />
          ))}
        </div>
      ))}
    </div>
  )
}

// 进度条加载组件
export function ProgressLoader({
  progress = 0,
  message = '正在处理...',
  showPercentage = true
}: {
  progress?: number
  message?: string
  showPercentage?: boolean
}) {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="text-center">
        <LoadingSpinner size="large" className="mx-auto mb-4 text-blue-600" />
        <p className="text-gray-600 font-medium">{message}</p>
        {showPercentage && (
          <p className="text-sm text-gray-500 mt-1">{Math.round(progress)}%</p>
        )}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
        />
      </div>
    </div>
  )
}