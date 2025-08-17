import { z } from 'zod'

const envSchema = z.object({
  // Supabase Configuration
  NEXT_PUBLIC_SUPABASE_URL: z.string().url('Invalid Supabase URL'),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, 'Supabase anon key is required'),
  
  // Node Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Next.js Configuration
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
})

// Validate environment variables (with fallbacks for client-side)
function validateEnv() {
  // 在客户端环境中，只验证 NEXT_PUBLIC_ 变量
  const isClient = typeof window !== 'undefined'
  
  if (isClient) {
    // 客户端只需要 NEXT_PUBLIC_ 变量
    return {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      NODE_ENV: process.env.NODE_ENV || 'development',
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || undefined,
    }
  }

  // 服务端进行完整验证
  try {
    return envSchema.parse(process.env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors
        .map(err => `${err.path.join('.')}: ${err.message}`)
        .join('\n')
      
      console.warn(`Environment variable validation failed:\n${errorMessage}`)
      
      // 返回部分配置而不是抛出错误
      return {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        NODE_ENV: process.env.NODE_ENV || 'development',
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || undefined,
      }
    }
    throw error
  }
}

// Export validated environment variables
export const env = validateEnv()

// Type-safe environment variables
export type Env = z.infer<typeof envSchema>