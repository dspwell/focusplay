'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

interface LoadingState {
  [key: string]: boolean
}

// 全局加载状态管理
export function useLoading(initialState: LoadingState = {}) {
  const [loadingStates, setLoadingStates] = useState<LoadingState>(initialState)
  const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout }>({})

  // 设置加载状态
  const setLoading = useCallback((key: string, loading: boolean) => {
    // 清除可能存在的超时
    if (timeoutRefs.current[key]) {
      clearTimeout(timeoutRefs.current[key])
      delete timeoutRefs.current[key]
    }

    setLoadingStates(prev => ({
      ...prev,
      [key]: loading
    }))
  }, [])

  // 带超时的加载状态设置
  const setLoadingWithTimeout = useCallback((key: string, loading: boolean, timeout = 10000) => {
    setLoading(key, loading)
    
    if (loading && timeout > 0) {
      timeoutRefs.current[key] = setTimeout(() => {
        setLoading(key, false)
        console.warn(`Loading timeout for key: ${key}`)
      }, timeout)
    }
  }, [setLoading])

  // 异步操作包装器
  const withLoading = useCallback(async <T>(
    key: string,
    asyncFn: () => Promise<T>,
    timeout?: number
  ): Promise<T | null> => {
    try {
      setLoadingWithTimeout(key, true, timeout)
      const result = await asyncFn()
      return result
    } catch (error) {
      console.error(`Error in async operation ${key}:`, error)
      throw error
    } finally {
      setLoading(key, false)
    }
  }, [setLoading, setLoadingWithTimeout])

  // 获取特定的加载状态
  const isLoading = useCallback((key: string) => {
    return loadingStates[key] || false
  }, [loadingStates])

  // 检查是否有任何加载状态为真
  const hasAnyLoading = useCallback(() => {
    return Object.values(loadingStates).some(loading => loading)
  }, [loadingStates])

  // 清理所有加载状态
  const clearAllLoading = useCallback(() => {
    // 清除所有超时
    Object.values(timeoutRefs.current).forEach(timeout => {
      clearTimeout(timeout)
    })
    timeoutRefs.current = {}
    
    setLoadingStates({})
  }, [])

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach(timeout => {
        clearTimeout(timeout)
      })
    }
  }, [])

  return {
    loadingStates,
    setLoading,
    setLoadingWithTimeout,
    withLoading,
    isLoading,
    hasAnyLoading,
    clearAllLoading
  }
}

// 简化的单一加载状态 Hook
export function useSimpleLoading(initialLoading = false) {
  const [loading, setLoading] = useState(initialLoading)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const setLoadingWithTimeout = useCallback((newLoading: boolean, timeout = 10000) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }

    setLoading(newLoading)

    if (newLoading && timeout > 0) {
      timeoutRef.current = setTimeout(() => {
        setLoading(false)
        console.warn('Simple loading timeout')
      }, timeout)
    }
  }, [])

  const withLoading = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    timeout?: number
  ): Promise<T | null> => {
    try {
      setLoadingWithTimeout(true, timeout)
      const result = await asyncFn()
      return result
    } catch (error) {
      console.error('Error in async operation:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }, [setLoadingWithTimeout])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {
    loading,
    setLoading,
    setLoadingWithTimeout,
    withLoading
  }
}

// 进度加载 Hook
export function useProgressLoading() {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const startProgress = useCallback((initialMessage = '开始处理...') => {
    setLoading(true)
    setProgress(0)
    setMessage(initialMessage)
  }, [])

  const updateProgress = useCallback((newProgress: number, newMessage?: string) => {
    setProgress(Math.max(0, Math.min(100, newProgress)))
    if (newMessage) {
      setMessage(newMessage)
    }
  }, [])

  const completeProgress = useCallback((finalMessage = '完成！') => {
    setProgress(100)
    setMessage(finalMessage)
    
    // 短暂显示完成状态后清除
    setTimeout(() => {
      setLoading(false)
      setProgress(0)
      setMessage('')
    }, 1000)
  }, [])

  const resetProgress = useCallback(() => {
    setLoading(false)
    setProgress(0)
    setMessage('')
  }, [])

  return {
    progress,
    loading,
    message,
    startProgress,
    updateProgress,
    completeProgress,
    resetProgress
  }
}