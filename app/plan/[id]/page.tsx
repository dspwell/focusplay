"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, Wrench, AlertCircle } from 'lucide-react'
import { Plan, PlanItem, Focus } from "@/lib/types"
import { PageWrapper, ContentLoader } from "@/components/page-loading"
import { CardSkeleton, ListSkeleton } from "@/components/ui/loading"
import { useErrorHandler } from "@/hooks/use-error-handler"
import { useSimpleLoading } from "@/hooks/use-loading"
import { Button } from "@/components/ui/button"

interface PlanPageProps {
  params: { id: string }
}

const FOCUS_LABELS: Record<Focus, string> = {
  fine: "精细动作",
  language: "语言沟通", 
  cognition: "逻辑认知",
  gross: "大肢体动作",
  social: "社交情感",
  undefined: ""
}

const TOOL_LABELS = {
  hands: "仅用手",
  paper: "纸笔类", 
  blocks_puzzle: "积木/拼图",
  books_pictures: "图书/图片卡",
  household: "家居物品",
  any: "任意"
}

export default function PlanPage({ params }: PlanPageProps) {
  const [plan, setPlan] = useState<Plan | null>(null)
  const [planItems, setPlanItems] = useState<PlanItem[]>([])
  const [error, setError] = useState<Error | null>(null)
  const { loading, withLoading } = useSimpleLoading(true)
  const { handleApiError } = useErrorHandler()

  const fetchPlan = async () => {
    await withLoading(async () => {
      const response = await fetch(`/api/plan/${params.id}`)
      if (!response.ok) {
        await handleApiError(response, '获取训练计划')
        throw new Error('Failed to fetch plan')
      }
      
      const data = await response.json()
      if (data.success && data.data) {
        setPlan(data.data.plan)
        setPlanItems(data.data.planItems)
        setError(null)
      } else {
        throw new Error('计划数据格式错误')
      }
    })
  }

  useEffect(() => {
    fetchPlan().catch(err => {
      setError(err)
    })
  }, [params.id])

  // 错误状态处理组件
  const ErrorFallback = ({ error, retry }: { error: Error; retry: () => void }) => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>
          <CardTitle className="text-xl text-gray-800">
            加载训练计划失败
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            抱歉，无法加载您的训练计划。请检查网络连接或稍后重试。
          </p>
          <div className="flex flex-col gap-2">
            <Button onClick={retry} className="w-full">
              重新加载
            </Button>
            <Button variant="outline" onClick={() => window.history.back()} className="w-full">
              返回上页
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // 加载状态的骨架屏
  const PlanLoadingSkeleton = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        {/* 计划信息骨架 */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardSkeleton />
          </CardHeader>
        </Card>
        
        {/* 活动列表骨架 */}
        <div className="space-y-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  )

  return (
    <PageWrapper
      loading={loading}
      error={error}
      loadingComponent={<PlanLoadingSkeleton />}
      errorComponent={ErrorFallback}
    >
      <PlanContent plan={plan} planItems={planItems} />
    </PageWrapper>
  )
}

// 分离计划内容组件
function PlanContent({ plan, planItems }: { plan: Plan | null; planItems: PlanItem[] }) {
  if (!plan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-gray-600">未找到训练计划</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Group activities by day
  const dayGroups = planItems.reduce((groups, item) => {
    if (!groups[item.day]) {
      groups[item.day] = []
    }
    groups[item.day].push(item)
    return groups
  }, {} as Record<number, PlanItem[]>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="mb-8 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              14天专注力训练计划
            </CardTitle>
            <div className="text-center space-y-2">
              <p className="text-gray-600">
                年龄：{plan.age_months}个月 | 
                场景：{plan.scenario === 'home' ? '居家' : 
                      plan.scenario === 'outdoor' ? '户外' : 
                      plan.scenario === 'waiting' ? '等待时' : 
                      plan.scenario === 'bedtime' ? '睡前' : 
                      plan.scenario === 'travel' ? '旅途中' : plan.scenario} | 
                道具偏好：{TOOL_LABELS[plan.tool_pref as keyof typeof TOOL_LABELS] || plan.tool_pref}
              </p>
              {plan.focus && (
                <Badge variant="secondary" className="text-sm">
                  重点发展：{FOCUS_LABELS[plan.focus]}
                </Badge>
              )}
            </div>
          </CardHeader>
        </Card>

        <div className="grid gap-6">
          {Object.entries(dayGroups).map(([day, items]) => (
            <Card key={day} className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">
                  第 {day} 天训练活动
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {items.map((item) => (
                    <Card key={item.id} className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {item.activity.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {item.activity.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span>{item.activity.duration_min}分钟</span>
                            <Badge variant={item.activity.mode === 'quiet' ? 'secondary' : 'default'} className="text-xs">
                              {item.activity.mode === 'quiet' ? '安静' : '活动'}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <Wrench className="w-4 h-4 text-green-500" />
                            <span>{TOOL_LABELS[item.activity.tool]}</span>
                          </div>

                          {item.activity.focuses.length > 0 && (
                            <div className="flex items-center gap-2 text-sm">
                              <Target className="w-4 h-4 text-purple-500" />
                              <div className="flex flex-wrap gap-1">
                                {item.activity.focuses.map((focus) => (
                                  <Badge key={focus} variant="outline" className="text-xs">
                                    {FOCUS_LABELS[focus]}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {item.activity.safety_notes && (
                          <div className="mt-3 p-2 bg-yellow-50 rounded text-xs text-yellow-800">
                            安全提示：{item.activity.safety_notes}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
