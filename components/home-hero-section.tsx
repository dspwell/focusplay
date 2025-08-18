import { Button } from "@/components/ui/button"
import { Star, Users, Clock, Target, Brain } from 'lucide-react'
import Link from "next/link"
import { UserMenu, LoginButton } from "@/components/auth/user-menu"

// 静态内容组件，可以在构建时预渲染
export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
        <div className="text-center py-16 pb-8">
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

      </div>
    </section>
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