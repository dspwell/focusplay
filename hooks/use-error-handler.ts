'use client'

import { useCallback } from 'react'
import { toast } from 'sonner'
import { AppError, getUserFriendlyMessage } from '@/lib/errors'

interface UseErrorHandlerOptions {
  showToast?: boolean
  logError?: boolean
}

export function useErrorHandler(options: UseErrorHandlerOptions = {}) {
  const { showToast = true, logError = true } = options

  const handleError = useCallback((
    error: Error | AppError | unknown,
    context?: string
  ) => {
    let processedError: Error

    // 标准化错误对象
    if (error instanceof Error) {
      processedError = error
    } else if (typeof error === 'string') {
      processedError = new Error(error)
    } else {
      processedError = new Error('未知错误')
    }

    // 记录错误日志
    if (logError) {
      console.error('Error handled:', {
        context,
        error: processedError,
        timestamp: new Date().toISOString(),
      })
    }

    // 显示用户友好的错误提示
    if (showToast) {
      const userMessage = getUserFriendlyMessage(processedError)
      toast.error(userMessage, {
        description: context || '请稍后重试或联系技术支持',
        action: {
          label: '重试',
          onClick: () => window.location.reload(),
        },
      })
    }

    return processedError
  }, [showToast, logError])

  // 处理 API 响应错误
  const handleApiError = useCallback(async (
    response: Response,
    context?: string
  ) => {
    try {
      const data = await response.json()
      const errorMessage = data.error?.message || `请求失败 (${response.status})`
      
      const error = new AppError(
        errorMessage,
        data.error?.code || 'API_ERROR',
        response.status
      )
      
      return handleError(error, context)
    } catch {
      const error = new AppError(
        `网络请求失败 (${response.status})`,
        'NETWORK_ERROR',
        response.status
      )
      
      return handleError(error, context)
    }
  }, [handleError])

  // 处理网络请求
  const handleAsyncOperation = useCallback(async <T>(
    operation: () => Promise<T>,
    context?: string
  ): Promise<T | null> => {
    try {
      return await operation()
    } catch (error) {
      handleError(error, context)
      return null
    }
  }, [handleError])

  return {
    handleError,
    handleApiError,
    handleAsyncOperation,
  }
}

// 全局错误处理 Hook
export function useGlobalErrorHandler() {
  const { handleError } = useErrorHandler()

  // 监听全局未处理的错误
  const setupGlobalHandlers = useCallback(() => {
    // 处理未捕获的 Promise 拒绝
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleError(
        event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
        '全局未处理的 Promise 拒绝'
      )
    }

    // 处理全局错误
    const handleGlobalError = (event: ErrorEvent) => {
      handleError(event.error || new Error(event.message), '全局错误')
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleGlobalError)

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleGlobalError)
    }
  }, [handleError])

  return { setupGlobalHandlers }
}