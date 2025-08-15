import { NextRequest, NextResponse } from 'next/server'

export type ApiHandler = (req: NextRequest, context?: any) => Promise<NextResponse>

/**
 * 错误处理中间件
 * 统一处理 API 路由的错误和异常
 */
export function withErrorHandling(handler: ApiHandler): ApiHandler {
  return async (req: NextRequest, context?: any) => {
    try {
      return await handler(req, context)
    } catch (error) {
      console.error('API Error:', error)
      
      // 处理不同类型的错误
      if (error instanceof Error) {
        // 自定义错误
        if (error.message.includes('Unauthorized')) {
          return NextResponse.json(
            { success: false, error: 'Unauthorized' },
            { status: 401 }
          )
        }
        
        if (error.message.includes('Forbidden')) {
          return NextResponse.json(
            { success: false, error: 'Forbidden' },
            { status: 403 }
          )
        }
        
        if (error.message.includes('Not Found')) {
          return NextResponse.json(
            { success: false, error: 'Not Found' },
            { status: 404 }
          )
        }
        
        if (error.message.includes('Bad Request')) {
          return NextResponse.json(
            { success: false, error: 'Bad Request' },
            { status: 400 }
          )
        }
      }
      
      // 默认服务器错误
      return NextResponse.json(
        { 
          success: false, 
          error: 'Internal Server Error',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      )
    }
  }
}

/**
 * 输入验证中间件
 */
export function withValidation<T>(
  schema: (data: any) => data is T,
  handler: (req: NextRequest, data: T, context?: any) => Promise<NextResponse>
): ApiHandler {
  return async (req: NextRequest, context?: any) => {
    try {
      const body = await req.json()
      
      if (!schema(body)) {
        return NextResponse.json(
          { success: false, error: 'Invalid request data' },
          { status: 400 }
        )
      }
      
      return await handler(req, body, context)
    } catch (error) {
      if (error instanceof SyntaxError) {
        return NextResponse.json(
          { success: false, error: 'Invalid JSON' },
          { status: 400 }
        )
      }
      throw error
    }
  }
}

/**
 * 速率限制中间件（简单实现）
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function withRateLimit(
  maxRequests: number = 100,
  windowMs: number = 60000 // 1分钟
) {
  return function (handler: ApiHandler): ApiHandler {
    return async (req: NextRequest, context?: any) => {
      const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown'
      const now = Date.now()
      
      const record = rateLimitMap.get(ip)
      
      if (!record || now > record.resetTime) {
        // 重置或创建新记录
        rateLimitMap.set(ip, {
          count: 1,
          resetTime: now + windowMs
        })
      } else {
        // 增加计数
        record.count++
        
        if (record.count > maxRequests) {
          return NextResponse.json(
            { 
              success: false, 
              error: 'Too Many Requests',
              resetTime: record.resetTime
            },
            { status: 429 }
          )
        }
      }
      
      return await handler(req, context)
    }
  }
}

/**
 * CORS 中间件
 */
export function withCors(
  options: {
    origin?: string | string[]
    methods?: string[]
    allowedHeaders?: string[]
  } = {}
) {
  const {
    origin = '*',
    methods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders = ['Content-Type', 'Authorization']
  } = options

  return function (handler: ApiHandler): ApiHandler {
    return async (req: NextRequest, context?: any) => {
      // 处理预检请求
      if (req.method === 'OPTIONS') {
        return new NextResponse(null, {
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': Array.isArray(origin) ? origin.join(',') : origin,
            'Access-Control-Allow-Methods': methods.join(','),
            'Access-Control-Allow-Headers': allowedHeaders.join(','),
          }
        })
      }
      
      const response = await handler(req, context)
      
      // 添加 CORS 头
      response.headers.set('Access-Control-Allow-Origin', Array.isArray(origin) ? origin.join(',') : origin)
      response.headers.set('Access-Control-Allow-Methods', methods.join(','))
      response.headers.set('Access-Control-Allow-Headers', allowedHeaders.join(','))
      
      return response
    }
  }
}

/**
 * 组合多个中间件
 */
export function compose(...middlewares: ((handler: ApiHandler) => ApiHandler)[]): (handler: ApiHandler) => ApiHandler {
  return (handler: ApiHandler) => {
    return middlewares.reduceRight((acc, middleware) => middleware(acc), handler)
  }
}

/**
 * 常用的中间件组合
 */
export const withStandardMiddleware = compose(
  withErrorHandling,
  withRateLimit(100, 60000), // 每分钟100次请求
  withCors()
)

/**
 * 高频率操作的中间件组合
 */
export const withHighFrequencyMiddleware = compose(
  withErrorHandling,
  withRateLimit(1000, 60000), // 每分钟1000次请求
  withCors()
)