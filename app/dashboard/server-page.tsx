import { redirect } from 'next/navigation'
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
import { getCurrentUser } from '@/lib/auth'
import { getUserProgress } from '@/lib/progress'
import Link from 'next/link'

// 强制动态渲染，禁用静态生成
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

/**
 * Dashboard页面 - Server Component版本
 * 演示如何直接调用服务端函数，避免API绕行
 */
export default async function DashboardServerPage() {
  // 直接获取当前用户，无需API调用
  const { user } = await getCurrentUser()
  
  if (!user) {
    redirect('/')
  }

  // 直接获取进度数据，无需API调用
  const progressResult = await getUserProgress()
  
  if (!progressResult.success) {
    throw new Error(progressResult.error || 'Failed to load progress')
  }

  const { data: progressData } = progressResult

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">学习仪表板</h1>
          <p className="text-gray-600">欢迎回来，{user.email}</p>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={<Calendar className="h-6 w-6" />}
            title="总训练次数"
            value={progressData?.summary?.total_sessions || 0}
            subtitle="次"
            color="blue"
          />
          <StatsCard
            icon={<Clock className="h-6 w-6" />}
            title="总训练时长"
            value={progressData?.summary?.total_play_time_minutes || 0}
            subtitle="分钟"
            color="green"
          />
          <StatsCard
            icon={<Star className="h-6 w-6" />}
            title="平均参与度"
            value={progressData?.summary?.avg_engagement_score?.toFixed(1) || '0.0'}
            subtitle="分"
            color="yellow"
          />
          <StatsCard
            icon={<Award className="h-6 w-6" />}
            title="获得成就"
            value={progressData?.achievements?.length || 0}
            subtitle="个"
            color="purple"
          />
        </div>

        {/* 最近活动 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 最近训练 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                最近训练
              </CardTitle>
            </CardHeader>
            <CardContent>
              {progressData?.recent_sessions && progressData.recent_sessions.length > 0 ? (
                <div className="space-y-4">
                  {progressData.recent_sessions.slice(0, 3).map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {session.games?.name || '游戏训练'}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {new Date(session.started_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {Math.round(session.duration_seconds / 60)}分钟
                        </p>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{session.engagement_score || 0}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">还没有训练记录</p>
                  <Link href="/assessment">
                    <Button className="mt-4">
                      开始训练
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 成就展示 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                最新成就
              </CardTitle>
            </CardHeader>
            <CardContent>
              {progressData?.achievements && progressData.achievements.length > 0 ? (
                <div className="space-y-4">
                  {progressData.achievements.slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{achievement.achievement_name}</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(achievement.earned_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">还没有获得成就</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 快速操作 */}
        <div className="mt-8 flex gap-4">
          <Link href="/assessment">
            <Button size="lg" className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              开始新训练
            </Button>
          </Link>
          <Link href="/progress">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              查看详细进度
            </Button>
          </Link>
        </div>
      </div>
    </div>
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