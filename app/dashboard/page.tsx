'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  User, 
  Baby, 
  BarChart3, 
  Clock, 
  Star, 
  TrendingUp,
  Calendar,
  Award,
  Play,
  Plus
} from 'lucide-react'
import { useAuth, useRequireAuth } from '@/lib/auth-context'
import { useErrorHandler } from '../../hooks/use-error-handler'
import { useSimpleLoading } from '../../hooks/use-loading'
import { PageWrapper } from '../../components/page-loading'
import { Loader2 } from 'lucide-react'
import { CardSkeleton } from '@/components/ui/loading'
import type { UserStats, Plan } from '@/lib/types'
import Link from 'next/link'

interface DashboardData {
  stats: UserStats
  recentPlans: Plan[]
  upcomingPlans: Plan[]
}

export default function DashboardPage() {
  const { user, profile, children } = useAuth()
  const { isAuthenticated, loading: authLoading } = useRequireAuth()
  const { handleAsyncOperation } = useErrorHandler()
  const { loading, withLoading } = useSimpleLoading()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)

  // 加载仪表板数据
  const loadDashboardData = async () => {
    await withLoading(async () => {
      const response = await fetch('/api/auth/profile')
      if (!response.ok) {
        throw new Error('加载数据失败')
      }
      
      const data = await response.json()
      if (data.success) {
        setDashboardData({
          stats: data.data.stats,
          recentPlans: [], // TODO: 从 API 获取
          upcomingPlans: [] // TODO: 从 API 获取
        })
      }
    })
  }

  useEffect(() => {
    if (isAuthenticated && !authLoading) {
      loadDashboardData()
    }
  }, [isAuthenticated, authLoading])

  if (authLoading) {
    return <DashboardSkeleton />
  }

  if (!isAuthenticated) {
    return null // 中间件会处理重定向
  }

  return (
    <PageWrapper loading={loading} loadingComponent={<DashboardSkeleton />}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          {/* 顶部欢迎区域 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              欢迎回来，{profile?.display_name || profile?.parent_name || '家长'}！
            </h1>
            <p className="text-gray-600">
              让我们继续您孩子的专注力发展之旅
            </p>
          </div>

          {/* 统计卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              icon={<Calendar className="h-6 w-6" />}
              title="训练计划"
              value={dashboardData?.stats.total_plans || 0}
              subtitle="个计划"
              color="blue"
            />
            <StatsCard
              icon={<Clock className="h-6 w-6" />}
              title="训练时长"
              value={`${dashboardData?.stats.total_play_time || 0}`}
              subtitle="分钟"
              color="green"
            />
            <StatsCard
              icon={<Star className="h-6 w-6" />}
              title="参与度"
              value={`${(dashboardData?.stats.avg_engagement || 0).toFixed(1)}`}
              subtitle="平均评分"
              color="yellow"
            />
            <StatsCard
              icon={<Baby className="h-6 w-6" />}
              title="孩子数量"
              value={dashboardData?.stats.children_count || 0}
              subtitle="个孩子"
              color="purple"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左侧主要内容 */}
            <div className="lg:col-span-2 space-y-6">
              {/* 快速操作 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    快速开始
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="/assessment">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Plus className="mr-2 h-4 w-4" />
                        创建新计划
                      </Button>
                    </Link>
                    <Link href="/children">
                      <Button variant="outline" className="w-full">
                        <Baby className="mr-2 h-4 w-4" />
                        管理孩子档案
                      </Button>
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <Link href="/progress">
                      <Button variant="outline" className="w-full">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        查看进度
                      </Button>
                    </Link>
                    <Link href="/assessment">
                      <Button variant="outline" className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        新建训练
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* 最近活动 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    最近活动
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {dashboardData?.recentPlans.length === 0 ? (
                    <div className="text-center py-8">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">还没有训练记录</p>
                      <Link href="/assessment">
                        <Button>开始第一个训练计划</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* TODO: 渲染最近的计划 */}
                      <p className="text-gray-500">正在开发中...</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* 右侧边栏 */}
            <div className="space-y-6">
              {/* 孩子档案 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Baby className="h-5 w-5" />
                    孩子档案
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {children.length === 0 ? (
                    <div className="text-center py-4">
                      <Baby className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-3">还没有添加孩子档案</p>
                      <Link href="/children">
                        <Button size="sm" variant="outline">
                          添加孩子
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {children.map((child) => (
                        <div key={child.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                            {child.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{child.name}</h4>
                            <p className="text-xs text-gray-500">
                              {calculateAge(child.birth_date)} 岁
                            </p>
                          </div>
                        </div>
                      ))}
                      <Link href="/children">
                        <Button size="sm" variant="outline" className="w-full">
                          管理档案
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* 会员状态 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    会员状态
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-3">
                    <Badge 
                      variant={profile?.subscription_status === 'premium' ? 'default' : 'secondary'}
                      className="text-sm"
                    >
                      {profile?.subscription_status === 'premium' ? '高级会员' : '免费会员'}
                    </Badge>
                    <p className="text-sm text-gray-600">
                      {profile?.subscription_status === 'premium' 
                        ? '享受所有高级功能' 
                        : '升级解锁更多功能'
                      }
                    </p>
                    {profile?.subscription_status !== 'premium' && (
                      <Button size="sm" className="w-full">
                        升级会员
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

// 统计卡片组件
function StatsCard({ 
  icon, 
  title, 
  value, 
  subtitle, 
  color = 'blue' 
}: {
  icon: React.ReactNode
  title: string
  value: string | number
  subtitle: string
  color?: 'blue' | 'green' | 'yellow' | 'purple'
}) {
  const colorClasses = {
    blue: 'text-blue-600 bg-blue-100',
    green: 'text-green-600 bg-green-100',
    yellow: 'text-yellow-600 bg-yellow-100',
    purple: 'text-purple-600 bg-purple-100'
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-full ${colorClasses[color]}`}>
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-2xl font-bold text-gray-800">{value}</p>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// 仪表板骨架屏
function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-2">
          <div className="h-8 bg-gray-200 rounded animate-pulse w-64"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-96"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <CardSkeleton />
            <CardSkeleton />
          </div>
          <div className="space-y-6">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </div>
    </div>
  )
}

// 计算年龄
function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate)
  const now = new Date()
  const age = now.getFullYear() - birth.getFullYear()
  const monthDiff = now.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    return age - 1
  }
  
  return age
}