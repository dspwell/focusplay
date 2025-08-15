// 统一错误处理工具类
export enum ErrorCode {
  // 通用错误
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  
  // 业务逻辑错误
  INVALID_INPUT = 'INVALID_INPUT',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  
  // API 错误
  API_ERROR = 'API_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  
  // 环境配置错误
  ENV_ERROR = 'ENV_ERROR',
}

export class AppError extends Error {
  public readonly code: ErrorCode
  public readonly statusCode: number
  public readonly isOperational: boolean
  public readonly context?: Record<string, unknown>

  constructor(
    message: string,
    code: ErrorCode = ErrorCode.UNKNOWN_ERROR,
    statusCode: number = 500,
    isOperational: boolean = true,
    context?: Record<string, unknown>
  ) {
    super(message)
    
    this.name = 'AppError'
    this.code = code
    this.statusCode = statusCode
    this.isOperational = isOperational
    this.context = context

    Error.captureStackTrace(this, this.constructor)
  }
}

// 错误工厂函数
export const createError = {
  validation: (message: string, context?: Record<string, unknown>) =>
    new AppError(message, ErrorCode.VALIDATION_ERROR, 400, true, context),
  
  notFound: (resource: string) =>
    new AppError(`${resource} 未找到`, ErrorCode.NOT_FOUND, 404, true),
  
  network: (message: string = '网络连接失败') =>
    new AppError(message, ErrorCode.NETWORK_ERROR, 503, true),
  
  api: (message: string, context?: Record<string, unknown>) =>
    new AppError(message, ErrorCode.API_ERROR, 500, true, context),
  
  database: (message: string, context?: Record<string, unknown>) =>
    new AppError(message, ErrorCode.DATABASE_ERROR, 500, true, context),
}

// 错误消息映射（用户友好的中文消息）
export const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [ErrorCode.UNKNOWN_ERROR]: '未知错误，请稍后重试',
  [ErrorCode.NETWORK_ERROR]: '网络连接失败，请检查网络连接',
  [ErrorCode.TIMEOUT_ERROR]: '请求超时，请稍后重试',
  [ErrorCode.INVALID_INPUT]: '输入信息有误，请检查后重试',
  [ErrorCode.VALIDATION_ERROR]: '数据验证失败，请检查输入信息',
  [ErrorCode.NOT_FOUND]: '请求的资源不存在',
  [ErrorCode.API_ERROR]: 'API 请求失败，请稍后重试',
  [ErrorCode.DATABASE_ERROR]: '数据库操作失败，请稍后重试',
  [ErrorCode.ENV_ERROR]: '环境配置错误，请联系管理员',
}

// 获取用户友好的错误消息
export function getUserFriendlyMessage(error: Error | AppError): string {
  if (error instanceof AppError) {
    return ERROR_MESSAGES[error.code] || error.message
  }
  
  // 处理一些常见的系统错误
  if (error.message.includes('fetch')) {
    return ERROR_MESSAGES[ErrorCode.NETWORK_ERROR]
  }
  
  if (error.message.includes('timeout')) {
    return ERROR_MESSAGES[ErrorCode.TIMEOUT_ERROR]
  }
  
  return ERROR_MESSAGES[ErrorCode.UNKNOWN_ERROR]
}

// 日志记录函数
export function logError(error: Error | AppError, context?: Record<string, unknown>) {
  const timestamp = new Date().toISOString()
  const errorInfo = {
    timestamp,
    name: error.name,
    message: error.message,
    stack: error.stack,
    ...(error instanceof AppError && {
      code: error.code,
      statusCode: error.statusCode,
      isOperational: error.isOperational,
      context: error.context,
    }),
    ...context,
  }
  
  // 在开发环境中打印详细错误信息
  if (process.env.NODE_ENV === 'development') {
    console.error('🚨 Error Details:', errorInfo)
  } else {
    // 生产环境中只记录必要信息
    console.error('Error:', {
      timestamp: errorInfo.timestamp,
      message: error.message,
      code: error instanceof AppError ? error.code : 'UNKNOWN_ERROR',
    })
  }
}

// 安全错误响应（不暴露敏感信息）
export function createSafeErrorResponse(error: Error | AppError) {
  const safeMessage = getUserFriendlyMessage(error)
  const statusCode = error instanceof AppError ? error.statusCode : 500
  
  return {
    success: false,
    error: {
      message: safeMessage,
      code: error instanceof AppError ? error.code : ErrorCode.UNKNOWN_ERROR,
    },
    statusCode,
  }
}