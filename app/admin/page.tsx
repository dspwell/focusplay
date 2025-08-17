'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  GamepadIcon, 
  BarChart3, 
  Calendar,
  TrendingUp,
  Activity,
  Clock,
  Award,
  Settings,
  FileText
} from 'lucide-react'
import { useRequireAdmin } from '../../hooks/use-admin'
import { PageWrapper } from '../../components/page-loading'
import { Loader2 } from 'lucide-react'
import { useErrorHandler } from '../../hooks/use-error-handler'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar, BarChart } from 'recharts'
import Link from 'next/link'

interface AdminDashboardData {
  overview: {
    user_stats: {
      total_users: number
      new_users_30d: number
      active_users_7d: number
      premium_users: number
    }
    game_stats: {
      total_games: number
      active_games: number
      new_games_30d: number
    }
    session_stats: {
      total_sessions: number
      completed_sessions: number
      sessions_30d: number
      avg_engagement: number
      total_play_time_hours: number
    }
    plan_stats: {
      total_plans: number
      active_plans: number
      completed_plans: number
      plans_30d: number
    }
  }
  charts: {
    user_registrations: Array<{ date: string; count: number }>
    daily_sessions: Array<{ date: string; count: number }>
    daily_plans: Array<{ date: string; count: number }>
    hourly_activity: Array<{ hour: number; count: number }>
  }
  recent_activity: Array<{
    id: string
    event_type: string
    event_data: any
    created_at: string
  }>
}

export default function AdminDashboardPage() {
  const { isAdmin, loading: authLoading } = useRequireAdmin()
  const { handleAsyncOperation } = useErrorHandler()
  const [data, setData] = useState<AdminDashboardData | null>(null)
  const [loading, setLoading] = useState(false)

  // 加载管理员仪表板数据
  const loadDashboardData = async () => {
    setLoading(true)
    
    await handleAsyncOperation(async () => {
      const response = await fetch('/api/admin/dashboard')
      if (!response.ok) {
        throw new Error('Failed to load dashboard data')
      }
      
      const result = await response.json()
      setData(result.data)
    }, '加载管理员仪表板数据')
    
    setLoading(false)
  }

  useEffect(() => {
    if (isAdmin && !authLoading) {
      loadDashboardData()
    }
  }, [isAdmin, authLoading])

  if (authLoading) {
    return <Loader2 className="h-5 w-5 animate-spin" />
  }

  if (!isAdmin) {
    return null // useRequireAdmin will handle redirect
  }

  return (
    <PageWrapper loading={loading}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* 页面标题 */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">管理后台</h1>
              <p className="text-gray-600">系统概览和内容管理</p>
            </div>
            
            <div className="flex space-x-4">
              <Link href="/admin/games">
                <Button>
                  <GamepadIcon className="mr-2 h-4 w-4" />
                  游戏管理
                </Button>
              </Link>
              <Link href="/admin/users">
                <Button variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  用户管理
                </Button>
              </Link>
              <Link href="/admin/data">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  数据管理
                </Button>
              </Link>
            </div>
          </div>

          {data ? (
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">概览</TabsTrigger>
                <TabsTrigger value="analytics">数据分析</TabsTrigger>
                <TabsTrigger value="activity">活动日志</TabsTrigger>
              </TabsList>

              {/* 概览页面 */}
              <TabsContent value="overview" className="space-y-6">
                {/* 统计卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatsCard
                    icon={<Users className="h-6 w-6" />}
                    title="总用户数"
                    value={data.overview.user_stats.total_users}
                    subtitle={`${data.overview.user_stats.new_users_30d} 新增`}
                    color="blue"
                  />
                  <StatsCard
                    icon={<GamepadIcon className="h-6 w-6" />}
                    title="游戏总数"
                    value={data.overview.game_stats.total_games}
                    subtitle={`${data.overview.game_stats.active_games} 活跃`}
                    color="green"
                  />
                  <StatsCard
                    icon={<Activity className="h-6 w-6" />}
                    title="游戏会话"
                    value={data.overview.session_stats.total_sessions}
                    subtitle={`${data.overview.session_stats.sessions_30d} 本月`}
                    color="yellow"
                  />
                  <StatsCard
                    icon={<FileText className="h-6 w-6" />}
                    title="训练计划"
                    value={data.overview.plan_stats.total_plans}
                    subtitle={`${data.overview.plan_stats.active_plans} 活跃`}
                    color="purple"
                  />
                </div>

                {/* 详细统计 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* 用户统计 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        用户统计
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">7天活跃用户</span>
                        <span className="font-semibold">{data.overview.user_stats.active_users_7d}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">高级会员</span>
                        <span className="font-semibold">{data.overview.user_stats.premium_users}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">30天新增</span>
                        <span className="font-semibold">{data.overview.user_stats.new_users_30d}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 游戏统计 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        游戏数据
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">完成率</span>
                        <span className="font-semibold">
                          {data.overview.session_stats.total_sessions > 0 
                            ? Math.round((data.overview.session_stats.completed_sessions / data.overview.session_stats.total_sessions) * 100)
                            : 0}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">平均参与度</span>
                        <span className="font-semibold">{data.overview.session_stats.avg_engagement.toFixed(1)}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">总游戏时长</span>
                        <span className="font-semibold">{Math.round(data.overview.session_stats.total_play_time_hours)}小时</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 计划统计 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        计划数据
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">已完成</span>
                        <span className="font-semibold">{data.overview.plan_stats.completed_plans}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">进行中</span>
                        <span className="font-semibold">{data.overview.plan_stats.active_plans}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">30天新增</span>
                        <span className="font-semibold">{data.overview.plan_stats.plans_30d}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 数据分析页面 */}
              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* 用户注册趋势 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        用户注册趋势（30天）
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data.charts.user_registrations}>
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="count" 
                            stroke="#3b82f6" 
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* 游戏会话趋势 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        游戏会话趋势（30天）
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data.charts.daily_sessions}>
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="count" 
                            stroke="#10b981" 
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* 计划创建趋势 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        计划创建趋势（30天）
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data.charts.daily_plans}>
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="count" 
                            stroke="#f59e0b" 
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* 时段活跃度 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        时段活跃度分布
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={data.charts.hourly_activity}>
                          <XAxis dataKey="hour" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="count" fill="#8b5cf6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 活动日志页面 */}
              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      最近活动
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {data.recent_activity.length > 0 ? (
                      <div className="space-y-4">
                        {data.recent_activity.map((activity) => (
                          <ActivityItem key={activity.id} activity={activity} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">暂无活动记录</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="text-center py-12">
              <Loader2 className="h-5 w-5 animate-spin" />
              <p className="text-gray-600 mt-4">正在加载管理数据...</p>
            </div>
          )}
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
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold text-gray-800">{value}</p>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// 活动项组件
function ActivityItem({ activity }: { activity: any }) {
  const getActivityIcon = (eventType: string) => {
    switch (eventType) {
      case 'admin_game_created': return <GamepadIcon className="h-4 w-4" />
      case 'admin_game_updated': return <Settings className="h-4 w-4" />
      case 'admin_game_deleted': return <Activity className="h-4 w-4" />
      case 'game_started': return <Clock className="h-4 w-4" />
      case 'game_completed': return <Award className="h-4 w-4" />
      default: return <Activity className="h-4 w-4" />
    }
  }

  const getActivityText = (eventType: string, eventData: any) => {
    switch (eventType) {
      case 'admin_game_created':
        return `创建了游戏 "${eventData?.game_name || '未知'}"`
      case 'admin_game_updated':
        return `更新了游戏 "${eventData?.game_name || '未知'}"`
      case 'admin_game_deleted':
        return `删除了游戏 "${eventData?.game_name || '未知'}"`
      case 'game_started':
        return `用户开始了游戏会话`
      case 'game_completed':
        return `用户完成了游戏会话`
      default:
        return `执行了操作: ${eventType}`
    }
  }

  return (
    <div className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50">
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        {getActivityIcon(activity.event_type)}
      </div>
      <div className="flex-1">
        <p className="text-sm">{getActivityText(activity.event_type, activity.event_data)}</p>
        <p className="text-xs text-gray-500">
          {new Date(activity.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  )
}