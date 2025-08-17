'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Star, Users, Clock, Target } from 'lucide-react'
import Link from 'next/link'

// 安全的首页组件，用于测试
export default function SafePage() {
  const [mounted, setMounted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 测试环境变量
  useEffect(() => {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      
      if (!supabaseUrl || !supabaseKey) {
        setError(`环境变量缺失: URL=${!!supabaseUrl}, KEY=${!!supabaseKey}`)
      } else {
        console.log('环境变量检查通过')
      }
      
      setMounted(true)
    } catch (err) {
      setError(`初始化错误: ${err instanceof Error ? err.message : String(err)}`)
    }
  }, [])

  if (error) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
        <Card className="max-w-lg">
          <CardHeader>
            <CardTitle className="text-red-600">环境配置错误</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700">{error}</p>
            <Button className="mt-4" onClick={() => window.location.reload()}>
              重新加载
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p>正在加载...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* 简化的导航 */}
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">FocusPlay</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/assessment">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                开始评估
              </Button>
            </Link>
          </div>
        </nav>

        {/* 主标题 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            专业的幼儿
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              专注力发展
            </span>
            平台
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            为 2-4 岁幼儿提供科学的专注力评估与个性化训练计划
          </p>
        </div>

        {/* 简化的统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCard icon={<Star className="h-5 w-5" />} number="358+" label="专业游戏" />
          <StatCard icon={<Users className="h-5 w-5" />} number="10,000+" label="家庭信赖" />
          <StatCard icon={<Clock className="h-5 w-5" />} number="14天" label="训练计划" />
          <StatCard icon={<Target className="h-5 w-5" />} number="95%" label="满意度" />
        </div>

        {/* 环境检查信息 */}
        <div className="text-center text-sm text-gray-500">
          <p>环境检查通过 ✓</p>
          <p>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? '已配置' : '未配置'}</p>
          <p>构建时间: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-2 text-blue-600">
        {icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
        {number}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}