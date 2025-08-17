import { Metadata } from 'next'
import SafePage from './safe-page'

export const metadata: Metadata = {
  title: 'FocusPlay - 幼儿专注力发展平台',
  description: '专业的2-4岁幼儿专注力发展评估与训练平台'
}

// 临时使用安全页面进行调试
export default function HomePage() {
  return <SafePage />
}