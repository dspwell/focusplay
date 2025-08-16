import { Metadata } from 'next'
import HomeClient from './home-client'
import { generateMetadata } from '../lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'FocusPlay - 幼儿专注力发展平台',
  description: '专业的2-4岁幼儿专注力发展评估与训练平台，提供个性化游戏推荐和科学训练计划。免费生成专注力训练游戏，帮助孩子提升专注力、认知能力和社交技能。基于科学研究，适合24-48个月幼儿使用。',
  keywords: ['专注力训练游戏', '幼儿认知发展', '24-48个月幼儿', '个性化训练计划', '儿童心理学', '免费早教资源', '亲子互动游戏', '专注力评估'],
  url: '/',
  type: 'website'
})

// 启用静态生成以优化性能和SEO
export const revalidate = 3600 // 1小时重新验证

export default function HomePage() {
  return <HomeClient />
}