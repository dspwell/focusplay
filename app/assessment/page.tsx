"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, User } from 'lucide-react'
import { Scenario, Tool, Focus } from "@/lib/types"
import { useErrorHandler } from "@/hooks/use-error-handler"
import { useAuth } from "@/lib/auth-context"
import { AuthModal } from "@/components/auth/auth-modal"
import { toast } from "sonner"

export default function AssessmentPage() {
  const router = useRouter()
  const { user, profile, children } = useAuth()
  const { handleApiError, handleAsyncOperation } = useErrorHandler()
  const [isLoading, setIsLoading] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [selectedChild, setSelectedChild] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    ageMonths: "",
    scenario: "" as Scenario | "",
    toolPref: "" as Tool | "any" | "",
    focus: "" as Focus | ""
  })

  // 如果用户已登录，预填充邮箱
  useEffect(() => {
    if (user?.email && !formData.email) {
      setFormData(prev => ({ ...prev, email: user.email || "" }))
    }
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 表单验证
    if (!formData.email || !formData.ageMonths || !formData.scenario || !formData.toolPref) {
      toast.error("请填写所有必填信息")
      return
    }

    const ageNumber = parseInt(formData.ageMonths)
    if (isNaN(ageNumber) || ageNumber < 24 || ageNumber > 48) {
      toast.error("年龄必须在24-48个月之间")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("请输入有效的邮箱地址")
      return
    }

    setIsLoading(true)
    
    await handleAsyncOperation(async () => {
      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          ageMonths: ageNumber,
          scenario: formData.scenario,
          toolPref: formData.toolPref,
          focus: formData.focus || undefined
        }),
      })

      if (!response.ok) {
        await handleApiError(response, "生成计划")
        return null
      }

      const data = await response.json()
      if (data.success && data.data?.planId) {
        toast.success("专注力训练计划生成成功！")
        router.push(`/plan/${data.data.planId}`)
        return data.data
      } else {
        throw new Error("生成计划失败")
      }
    }, "生成专注力训练计划")

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              幼儿专注力发展测评
            </CardTitle>
            <p className="text-center text-gray-600">
              为您的孩子定制个性化的专注力训练计划
            </p>
          </CardHeader>
          <CardContent>
            {/* 用户状态提示 */}
            {!user && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">
                        登录以获得更好体验
                      </p>
                      <p className="text-xs text-blue-600">
                        保存计划、跟踪进度、管理多个孩子档案
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => setShowAuthModal(true)}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    登录/注册
                  </Button>
                </div>
              </div>
            )}

            {/* 已登录用户的孩子选择 */}
            {user && children.length > 0 && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <Label htmlFor="child-select" className="text-sm font-medium text-green-800">
                  为哪个孩子创建计划？
                </Label>
                <Select value={selectedChild} onValueChange={setSelectedChild}>
                  <SelectTrigger className="mt-2 border-green-300">
                    <SelectValue placeholder="选择孩子或创建通用计划" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">通用计划（不指定孩子）</SelectItem>
                    {children.map((child) => (
                      <SelectItem key={child.id} value={child.id}>
                        {child.name} ({calculateAge(child.birth_date)}岁)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">邮箱地址</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="请输入您的邮箱"
                  required
                />
              </div>

              <div>
                <Label htmlFor="ageMonths">孩子年龄（月龄）</Label>
                <Input
                  id="ageMonths"
                  type="number"
                  min="24"
                  max="48"
                  value={formData.ageMonths}
                  onChange={(e) => setFormData({ ...formData, ageMonths: e.target.value })}
                  placeholder="24-48个月"
                  required
                />
              </div>

              <div>
                <Label htmlFor="scenario">主要使用场景</Label>
                <Select value={formData.scenario} onValueChange={(value: Scenario) => setFormData({ ...formData, scenario: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择主要使用场景" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">居家</SelectItem>
                    <SelectItem value="outdoor">户外</SelectItem>
                    <SelectItem value="waiting">等待时</SelectItem>
                    <SelectItem value="bedtime">睡前</SelectItem>
                    <SelectItem value="travel">旅途中</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500 mt-1">
                  选择您最常需要专注力活动的场景
                </p>
              </div>

              <div>
                <Label htmlFor="toolPref">道具偏好</Label>
                <Select value={formData.toolPref} onValueChange={(value: Tool | "any") => setFormData({ ...formData, toolPref: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择道具类型偏好" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">任意</SelectItem>
                    <SelectItem value="hands">仅用手</SelectItem>
                    <SelectItem value="paper">纸笔类</SelectItem>
                    <SelectItem value="blocks_puzzle">积木/拼图</SelectItem>
                    <SelectItem value="books_pictures">图书/图片卡</SelectItem>
                    <SelectItem value="household">家居物品</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="focus">能力发展重点（可选）</Label>
                <Select value={formData.focus} onValueChange={(value: Focus) => setFormData({ ...formData, focus: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择重点发展能力" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">智能推荐</SelectItem>
                    <SelectItem value="fine">精细动作</SelectItem>
                    <SelectItem value="language">语言沟通</SelectItem>
                    <SelectItem value="cognition">逻辑认知</SelectItem>
                    <SelectItem value="gross">大肢体动作</SelectItem>
                    <SelectItem value="social">社交情感</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500 mt-1">
                  留空则由系统智能推荐适合的能力发展组合
                </p>
              </div>

              <Button
                type="submit"
                disabled={isLoading || !formData.email || !formData.ageMonths || !formData.scenario || !formData.toolPref}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    正在生成个性化计划...
                  </>
                ) : (
                  "生成专注力训练计划"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {/* 认证模态框 */}
        <AuthModal 
          open={showAuthModal}
          onOpenChange={setShowAuthModal}
          defaultTab="signin"
        />
      </div>
    </div>
  )
}

// 计算年龄的辅助函数
function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate)
  const now = new Date()
  const age = now.getFullYear() - birth.getFullYear()
  const monthDiff = now.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    return age - 1
  }
  
  return age
}
