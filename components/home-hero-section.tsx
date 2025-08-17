import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Users, Clock, Target, Brain, Heart } from 'lucide-react'
import Link from "next/link"
import { UserMenu, LoginButton } from "@/components/auth/user-menu"

// 静态内容组件，可以在构建时预渲染
export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 顶部导航区域 */}
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">FocusPlay</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/assessment">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                开始评估
              </Button>
            </Link>
            <UserMenu />
            <LoginButton variant="outline" />
          </div>
        </nav>

        {/* 主标题区域 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            专业的幼儿
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              专注力发展
            </span>
            平台
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            为 2-4 岁幼儿提供科学的专注力评估与个性化训练计划，
            通过专业的游戏设计，让孩子在快乐中提升专注力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                免费生成训练计划
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              了解更多
            </Button>
          </div>
        </div>

        {/* 特色功能卡片 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<Target className="h-6 w-6" />}
            title="个性化评估"
            description="根据孩子年龄和特点，提供专业的专注力评估"
          />
          <FeatureCard
            icon={<Brain className="h-6 w-6" />}
            title="科学训练"
            description="基于儿童发展心理学，设计系统性训练方案"
          />
          <FeatureCard
            icon={<Heart className="h-6 w-6" />}
            title="亲子互动"
            description="促进家长与孩子的深度互动，增进亲子关系"
          />
          <FeatureCard
            icon={<Star className="h-6 w-6" />}
            title="持续跟踪"
            description="记录训练进展，及时调整计划，确保效果"
          />
        </div>
      </div>
    </section>
  )
}

// 特色功能卡片组件
function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-center mb-2 text-blue-600">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

// 统计数据组件（可以后续添加真实数据）
export function StatsSection() {
  const stats = [
    { number: "358+", label: "专业游戏", icon: <Star className="h-5 w-5" /> },
    { number: "10,000+", label: "家庭信赖", icon: <Users className="h-5 w-5" /> },
    { number: "14天", label: "训练计划", icon: <Clock className="h-5 w-5" /> },
    { number: "95%", label: "满意度", icon: <Target className="h-5 w-5" /> },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            数据见证专业
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们致力于为每个家庭提供最专业的幼儿专注力发展服务
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}