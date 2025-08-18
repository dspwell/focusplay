import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  Users, 
  Clock, 
  Target, 
  Brain, 
  Heart,
  Activity,
  Eye,
  Zap,
  CheckCircle,
  PlayCircle,
  TrendingUp,
  Shield,
  Award,
  Sparkles,
  Quote
} from 'lucide-react'
import Link from "next/link"

// 核心优势 Section
export function CoreAdvantagesSection() {
  const advantages = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "个性化定制",
      description: "基于孩子的年龄、兴趣和发展水平，AI智能生成专属训练游戏",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "科学时长设计",
      description: "遵循幼儿注意力发展规律，合理控制游戏时长，避免过度刺激",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "专家指导",
      description: "由儿童心理学专家设计，确保每个游戏都符合科学发展原理",
      color: "text-purple-600 bg-purple-100"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            核心优势
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            为什么选择 FocusPlay？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们结合最新的儿童发展理论和AI技术，为您的孩子提供最科学、最有效的专注力训练方案
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full ${advantage.color} flex items-center justify-center mx-auto mb-4`}>
                  {advantage.icon}
                </div>
                <CardTitle className="text-xl mb-3">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// 功能介绍 Section
export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "智能游戏生成",
      description: "AI分析孩子的特点和需求，自动生成个性化的专注力训练游戏",
      highlights: ["个性化推荐", "难度自适应", "多样化内容"]
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "进度追踪",
      description: "详细记录孩子的训练进展，提供科学的成长分析报告",
      highlights: ["实时数据", "成长曲线", "专业分析"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            功能介绍
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            强大的功能，简单的使用
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们将复杂的儿童发展理论转化为简单易用的功能，让每位家长都能轻松使用
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// 用户证言 Section
export function TestimonialsSection() {
  const testimonials = [
    {
      name: "李妈妈",
      role: "3岁孩子的母亲",
      content: "使用FocusPlay一个月后，我明显感觉到孩子的专注力有了很大提升。游戏设计很科学，孩子很喜欢玩，而且每次都能坚持完成。作为家长，看到孩子的进步真的很开心！",
      rating: 5,
      avatar: "👩‍🦱"
    },
    {
      name: "王老师",
      role: "幼儿园教育工作者",
      content: "作为一名幼儿教育工作者，我深知专注力训练的重要性。FocusPlay的游戏设计非常专业，既有趣又有效。我已经推荐给班上很多家长，反馈都很好。这确实是一个值得信赖的平台。",
      rating: 5,
      avatar: "👨‍🏫"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
            用户证言
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            家长和专家都信赖的选择
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            听听真实用户的声音，了解FocusPlay如何帮助孩子们提升专注力
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg relative">
              <Quote className="h-8 w-8 text-blue-200 absolute top-4 left-4" />
              <div className="pt-4">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// 价格方案 Section
export function PricingSection() {
  const plans = [
    {
      name: "基础版",
      price: "¥29",
      period: "/月",
      description: "适合初次体验的家庭",
      features: [
        "每月30个游戏生成",
        "基础进度追踪",
        "邮件客服支持",
        "基础游戏模板"
      ],
      popular: false,
      buttonText: "开始使用"
    },
    {
      name: "专业版",
      price: "¥59",
      period: "/月",
      description: "最受欢迎的选择",
      features: [
        "无限游戏生成",
        "详细进度分析",
        "专家一对一指导",
        "高级游戏模板",
        "家长训练课程",
        "优先客服支持"
      ],
      popular: true,
      buttonText: "立即升级"
    },
    {
      name: "企业版",
      price: "联系",
      period: "销售",
      description: "适合教育机构",
      features: [
        "多账户管理",
        "定制化内容",
        "数据导出功能",
        "API接入支持",
        "专属客服",
        "培训支持"
      ],
      popular: false,
      buttonText: "联系销售"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
            价格方案
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            选择适合您的方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            灵活的定价方案，满足不同家庭和机构的需求
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-xl transform scale-105' 
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                  最受欢迎
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-800 hover:bg-gray-900'
                }`}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Section
export function FooterSection() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* 品牌信息 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">FocusPlay</span>
            </div>
            <p className="text-gray-400">
              专业的幼儿专注力发展平台，为2-4岁幼儿提供科学的训练方案。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
            </div>
          </div>
          
          {/* 产品链接 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">产品</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/assessment" className="hover:text-white">专注力评估</Link></li>
              <li><Link href="/dashboard" className="hover:text-white">个人中心</Link></li>
              <li><Link href="/progress" className="hover:text-white">进度追踪</Link></li>
              <li><Link href="/children" className="hover:text-white">孩子档案</Link></li>
            </ul>
          </div>
          
          {/* 支持链接 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">支持</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">帮助中心</a></li>
              <li><a href="#" className="hover:text-white">联系我们</a></li>
              <li><a href="#" className="hover:text-white">用户指南</a></li>
              <li><a href="#" className="hover:text-white">常见问题</a></li>
            </ul>
          </div>
          
          {/* 公司信息 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">公司</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">关于我们</a></li>
              <li><a href="#" className="hover:text-white">隐私政策</a></li>
              <li><a href="#" className="hover:text-white">服务条款</a></li>
              <li><a href="#" className="hover:text-white">合作伙伴</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} FocusPlay. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}