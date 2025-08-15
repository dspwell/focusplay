import { NextResponse } from 'next/server'
import { AppError, createSafeErrorResponse, logError } from './errors'

// 标准化 API 响应格式
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: {
    message: string
    code: string
  }
  meta?: {
    timestamp: string
    requestId?: string
  }
}

// 成功响应
export function successResponse<T>(
  data: T,
  statusCode: number = 200,
  meta?: Record<string, unknown>
): NextResponse<ApiResponse<T>> {
  const response: ApiResponse<T> = {
    success: true,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      ...meta,
    },
  }
  
  return NextResponse.json(response, { status: statusCode })
}

// 错误响应
export function errorResponse(
  error: Error | AppError,
  context?: Record<string, unknown>
): NextResponse<ApiResponse> {
  // 记录错误日志
  logError(error, context)
  
  // 创建安全的错误响应
  const safeResponse = createSafeErrorResponse(error)
  
  const response: ApiResponse = {
    success: false,
    error: safeResponse.error,
    meta: {
      timestamp: new Date().toISOString(),
    },
  }
  
  return NextResponse.json(response, { status: safeResponse.statusCode })
}

// API 路由错误处理装饰器
export function withErrorHandling<T extends unknown[], R>(
  handler: (...args: T) => Promise<NextResponse<R>>
) {
  return async (...args: T): Promise<NextResponse<R | ApiResponse>> => {
    try {
      return await handler(...args)
    } catch (error) {
      return errorResponse(error instanceof Error ? error : new Error('Unknown error'))
    }
  }
}

// 验证请求体
export async function validateRequestBody<T>(
  request: Request,
  validator: (data: unknown) => T
): Promise<T> {
  try {
    const body = await request.json()
    return validator(body)
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new AppError('请求体格式错误', 'VALIDATION_ERROR', 400)
    }
    throw error
  }
}

// 处理 Supabase 错误
export function handleSupabaseError(error: unknown): AppError {
  if (typeof error === 'object' && error !== null) {
    const supabaseError = error as {
      message?: string
      code?: string
      details?: string
    }
    
    // 根据 Supabase 错误代码映射到自定义错误
    switch (supabaseError.code) {
      case '23505': // unique_violation
        return new AppError('数据已存在', 'VALIDATION_ERROR', 409)
      case '23503': // foreign_key_violation
        return new AppError('关联数据不存在', 'VALIDATION_ERROR', 400)
      case '42P01': // undefined_table
        return new AppError('数据表不存在', 'DATABASE_ERROR', 500)
      default:
        return new AppError(
          supabaseError.message || '数据库操作失败',
          'DATABASE_ERROR',
          500,
          true,
          { code: supabaseError.code, details: supabaseError.details }
        )
    }
  }
  
  return new AppError('数据库操作失败', 'DATABASE_ERROR', 500)
}