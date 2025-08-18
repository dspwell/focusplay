'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { HeroSection, StatsSection } from '../components/home-hero-section'
import { 
  CoreAdvantagesSection, 
  FeaturesSection, 
  TestimonialsSection, 
  PricingSection, 
  FooterSection 
} from '../components/home-sections'
import { useGlobalErrorHandler } from '../hooks/use-error-handler'

// 动态导入游戏生成器，支持懒加载
const GameGenerator = dynamic(() => import('../components/game-generator'), {
  loading: () => (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-24 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
            <div className="h-12 bg-gray-200 rounded animate-pulse w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  ),
  ssr: false // 游戏生成器需要客户端状态管理
})

export default function HomeClient() {
  const { setupGlobalHandlers } = useGlobalErrorHandler()

  useEffect(() => {
    // 设置全局错误处理
    const cleanup = setupGlobalHandlers()
    return cleanup
  }, [setupGlobalHandlers])

  return (
    <>
      {/* 主标题和导航 */}
      <HeroSection />
      
      {/* 立即生成专属游戏 - 游戏生成器 */}
      <GameGenerator />
      
      {/* 统计数据 */}
      <StatsSection />
      
      {/* 核心优势 */}
      <CoreAdvantagesSection />
      
      {/* 功能介绍 */}
      <FeaturesSection />
      
      {/* 用户证言 */}
      <TestimonialsSection />
      
      {/* 价格方案 */}
      <PricingSection />
      
      {/* 行动号召 */}
      <CTASection />
      
      {/* 网页尾部 */}
      <FooterSection />
    </>
  )
}

// 行动号召区域
function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          开始您孩子的专注力发展之旅
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          通过专业评估，我们将为您的孩子制定个性化的 14 天专注力训练计划
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            <a href="/assessment" className="block">
              免费开始评估
            </a>
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            了解更多信息
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">5分钟</div>
            <div className="text-blue-100">完成专业评估</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">14天</div>
            <div className="text-blue-100">个性化训练计划</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">科学有效</div>
            <div className="text-blue-100">基于儿童发展理论</div>
          </div>
        </div>
      </div>
    </section>
  )
}