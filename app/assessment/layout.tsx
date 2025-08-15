import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: '专注力评估测试',
  description: '免费的幼儿专注力发展评估工具，为24-48个月幼儿提供个性化专注力训练计划。基于科学研究，帮助家长了解孩子的发展状况并制定针对性训练方案。',
  keywords: ['幼儿专注力评估', '儿童发展测试', '24-48个月评估', '个性化训练计划', '免费专注力测试', '幼儿发展工具'],
  url: '/assessment',
  type: 'website'
})

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}