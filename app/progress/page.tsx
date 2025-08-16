'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Badge } from '../../components/ui/badge'
import { Progress } from '../../components/ui/progress'
import { 
  BarChart3, 
  TrendingUp, 
  Award,
  Calendar,
  Clock,
  Target,
  Star,
  Trophy,
  Activity,
  Brain,
  Heart,
  Eye,
  Zap
} from 'lucide-react'
import { useAuth, useRequireAuth } from '../../lib/auth-context'
import { PageWrapper } from '../../components/page-loading'
import { LoadingSpinner } from '../../components/ui/loading'
import { useErrorHandler } from '../../hooks/use-error-handler'
import type { 
  UserProgressSummary, 
  ProgressData, 
  Achievement, 
  GameSession 
} from '../../lib/types'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar, BarChart } from 'recharts'

interface ProgressPageData {
  summary: UserProgressSummary | null
  progress: ProgressData
  achievements: Achievement[]
  recentSessions: GameSession[]
  analytics: any
}

export default function ProgressPage() {
  const { user, children } = useAuth()
  const { isAuthenticated, loading: authLoading } = useRequireAuth()
  const { handleAsyncOperation } = useErrorHandler()
  const [selectedChild, setSelectedChild] = useState<string>('')
  const [selectedPeriod, setSelectedPeriod] = useState('30')
  const [data, setData] = useState<ProgressPageData | null>(null)
  const [loading, setLoading] = useState(false)

  // 加载进度数据
  const loadProgressData = async () => {
    setLoading(true)
    
    await handleAsyncOperation(async () => {
      const searchParams = new URLSearchParams({
        period: selectedPeriod
      })
      if (selectedChild) {
        searchParams.set('child_id', selectedChild)
      }

      // 并行请求多个API
      const [progressResponse, achievementsResponse, sessionsResponse, analyticsResponse] = await Promise.all([
        fetch(`/api/progress?${searchParams}`),
        fetch(`/api/achievements?${searchParams}`),
        fetch(`/api/game-sessions?${searchParams}&limit=10`),
        fetch(`/api/analytics?${searchParams}&type=overview`)
      ])

      if (!progressResponse.ok || !achievementsResponse.ok || !sessionsResponse.ok || !analyticsResponse.ok) {
        throw new Error('Failed to load progress data')
      }

      const [progressData, achievementsData, sessionsData, analyticsData] = await Promise.all([
        progressResponse.json(),
        achievementsResponse.json(),
        sessionsResponse.json(),
        analyticsResponse.json()
      ])

      setData({
        summary: progressData.data.summary,
        progress: progressData.data.progress,
        achievements: achievementsData.data.achievements,
        recentSessions: sessionsData.data.sessions,
        analytics: analyticsData.data
      })
    }, '加载进度数据')
    
    setLoading(false)
  }

  useEffect(() => {
    if (isAuthenticated && !authLoading) {
      loadProgressData()
    }
  }, [isAuthenticated, authLoading, selectedChild, selectedPeriod])

  if (authLoading) {
    return <LoadingSpinner />
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <PageWrapper loading={loading}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          {/* 页面标题和筛选器 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">学习进度</h1>
              <p className="text-gray-600">追踪孩子的专注力训练表现和成长轨迹</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              {/* 孩子选择 */}
              {children.length > 0 && (
                <Select value={selectedChild} onValueChange={setSelectedChild}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="选择孩子" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">所有孩子</SelectItem>
                    {children.map((child) => (
                      <SelectItem key={child.id} value={child.id}>
                        {child.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              
              {/* 时间周期选择 */}
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7天</SelectItem>
                  <SelectItem value="30">30天</SelectItem>
                  <SelectItem value="90">90天</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 主要内容 */}
          {data ? (
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">概览</TabsTrigger>
                <TabsTrigger value="skills">能力发展</TabsTrigger>
                <TabsTrigger value="achievements">成就</TabsTrigger>
                <TabsTrigger value="sessions">训练记录</TabsTrigger>
              </TabsList>

              {/* 概览页面 */}
              <TabsContent value="overview" className="space-y-6">
                {/* 统计卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatsCard
                    icon={<Calendar className="h-6 w-6" />}
                    title="训练次数"
                    value={data.analytics.overview?.total_sessions || 0}
                    subtitle="次"
                    color="blue"
                  />
                  <StatsCard
                    icon={<Clock className="h-6 w-6" />}
                    title="总时长"
                    value={data.analytics.overview?.total_play_time_minutes || 0}
                    subtitle="分钟"
                    color="green"
                  />
                  <StatsCard
                    icon={<Star className="h-6 w-6" />}
                    title="平均参与度"
                    value={data.analytics.overview?.avg_engagement_score?.toFixed(1) || '0.0'}
                    subtitle="分"
                    color="yellow"
                  />
                  <StatsCard
                    icon={<Target className="h-6 w-6" />}
                    title="平均准确率"
                    value={`${data.analytics.overview?.avg_accuracy_percentage?.toFixed(1) || '0.0'}%`}
                    subtitle=""
                    color="purple"
                  />
                </div>

                {/* 趋势图表 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        参与度趋势
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data.progress.trend.engagement}>
                          <XAxis dataKey="date" />
                          <YAxis domain={[1, 5]} />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="score" 
                            stroke="#3b82f6" 
                            strokeWidth={2}
                            dot={{ fill: '#3b82f6' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        准确率趋势
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data.progress.trend.accuracy}>
                          <XAxis dataKey="date" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="percentage" 
                            stroke="#10b981" 
                            strokeWidth={2}
                            dot={{ fill: '#10b981' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 能力发展页面 */}
              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      能力发展雷达图
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* 能力进度条 */}
                      <div className="space-y-4">
                        <SkillProgressBar
                          icon={<Zap className="h-5 w-5" />}
                          label="精细动作"
                          progress={data.progress.skills.fine_motor}
                          color="bg-blue-500"
                        />
                        <SkillProgressBar
                          icon={<Heart className="h-5 w-5" />}
                          label="语言沟通"
                          progress={data.progress.skills.language}
                          color="bg-green-500"
                        />
                        <SkillProgressBar
                          icon={<Brain className="h-5 w-5" />}
                          label="逻辑认知"
                          progress={data.progress.skills.cognition}
                          color="bg-purple-500"
                        />
                        <SkillProgressBar
                          icon={<Activity className="h-5 w-5" />}
                          label="大肢体动作"
                          progress={data.progress.skills.gross_motor}
                          color="bg-orange-500"
                        />
                        <SkillProgressBar
                          icon={<Eye className="h-5 w-5" />}
                          label="社交情感"
                          progress={data.progress.skills.social}
                          color="bg-pink-500"
                        />
                      </div>
                      
                      {/* 建议卡片 */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-800">发展建议</h3>
                        {data.summary?.next_focus_areas && data.summary.next_focus_areas.length > 0 ? (
                          data.summary.next_focus_areas.map((area, index) => (
                            <div key={index} className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-800">{getFocusAreaLabel(area)}</p>
                            </div>
                          ))
                        ) : (
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600">继续保持当前的训练节奏</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 成就页面 */}
              <TabsContent value="achievements" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.achievements.length > 0 ? (
                    data.achievements.map((achievement) => (
                      <AchievementCard key={achievement.id} achievement={achievement} />
                    ))
                  ) : (
                    <Card className="col-span-full text-center py-12">
                      <CardContent>
                        <Trophy className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">还没有获得成就</h3>
                        <p className="text-gray-600">完成更多训练来解锁成就吧！</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              {/* 训练记录页面 */}
              <TabsContent value="sessions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      最近训练记录
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {data.recentSessions.length > 0 ? (
                      <div className="space-y-4">
                        {data.recentSessions.map((session) => (
                          <SessionCard key={session.id} session={session} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">还没有训练记录</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="text-center py-12">
              <LoadingSpinner />
              <p className="text-gray-600 mt-4">正在加载进度数据...</p>
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

// 能力进度条组件
function SkillProgressBar({ 
  icon, 
  label, 
  progress, 
  color 
}: {
  icon: React.ReactNode
  label: string
  progress: number
  color: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {icon}
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </div>
        <span className="text-sm text-gray-500">{progress.toFixed(1)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

// 成就卡片组件
function AchievementCard({ achievement }: { achievement: Achievement }) {
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'first_game': return <Star className="h-6 w-6" />
      case 'streak_3':
      case 'streak_7': return <Calendar className="h-6 w-6" />
      case 'perfect_score': return <Target className="h-6 w-6" />
      case 'focused_learner': return <Brain className="h-6 w-6" />
      default: return <Trophy className="h-6 w-6" />
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white mx-auto mb-4">
          {getAchievementIcon(achievement.achievement_type)}
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">{achievement.achievement_name}</h3>
        {achievement.description && (
          <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
        )}
        <p className="text-xs text-gray-500">
          {new Date(achievement.earned_at).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  )
}

// 训练记录卡片组件
function SessionCard({ session }: { session: GameSession }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
          G
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{session.games?.name || '游戏'}</h4>
          <p className="text-sm text-gray-600">
            {new Date(session.started_at).toLocaleDateString()} • {Math.round(session.duration_seconds / 60)}分钟
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">参与度</p>
          <p className="font-semibold">{session.engagement_score || '-'}/5</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">准确率</p>
          <p className="font-semibold">{session.accuracy_percentage?.toFixed(1) || '0'}%</p>
        </div>
        <Badge variant={session.completion_percentage === 100 ? 'default' : 'secondary'}>
          {session.completion_percentage === 100 ? '已完成' : '进行中'}
        </Badge>
      </div>
    </div>
  )
}

// 获取能力区域标签
function getFocusAreaLabel(area: string): string {
  const labels: Record<string, string> = {
    fine: '建议增加精细动作训练',
    language: '建议增加语言沟通训练',
    cognition: '建议增加逻辑认知训练',
    gross: '建议增加大肢体动作训练',
    social: '建议增加社交情感训练'
  }
  return labels[area] || area
}