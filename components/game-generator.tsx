'use client'

import { useState, Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "../../../components/ui/alert-dialog"
import { Badge } from "../../../components/ui/badge"
import { Loader2, Play, Check, Star, X } from 'lucide-react'
import { useErrorHandler } from "../../../hooks/use-error-handler"
import { toast } from "sonner"

interface GameData {
  game_name: string
  goals: string[]
  materials: string
  duration_min: number
  difficulty_star: number
  activity_type: "quiet" | "active"
  steps: string[]
  tips: string[]
}

// 骨架屏组件
function GameGeneratorSkeleton() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
            <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export function GameGenerator() {
  const { handleAsyncOperation } = useErrorHandler()
  const [ageRange, setAgeRange] = useState<string>("")
  const [scene, setScene] = useState<string>("")
  const [props, setProps] = useState<string>("")
  const [focus, setFocus] = useState<string>("none")
  const [isLoading, setIsLoading] = useState(false)
  const [gameData, setGameData] = useState<GameData | null>(null)
  const [showDialog, setShowDialog] = useState(false)

  // 限制每日抽取次数
  const getTodayDrawCount = () => {
    if (typeof window === "undefined") return 0
    const key = `todfocus_drawcount_${new Date().toISOString().split("T")[0].replace(/-/g, "")}`
    const count = localStorage.getItem(key)
    return count ? Number.parseInt(count) : 0
  }

  const incrementDrawCount = () => {
    if (typeof window === "undefined") return
    const key = `todfocus_drawcount_${new Date().toISOString().split("T")[0].replace(/-/g, "")}`
    const currentCount = getTodayDrawCount()
    localStorage.setItem(key, (currentCount + 1).toString())
  }

  const handleGenerate = async () => {
    // 验证表单
    if (!ageRange || !scene || !props) {
      toast.error("请选择所有选项")
      return
    }

    // 检查每日限制
    const todayCount = getTodayDrawCount()
    if (todayCount >= 10) {
      toast.error("今日免费体验次数已用完，请明天再试或完成评估获得完整计划")
      return
    }

    setIsLoading(true)
    
    await handleAsyncOperation(async () => {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age_range: ageRange,
          scene,
          props,
          focus: focus === "none" ? undefined : focus,
        }),
      })

      if (!response.ok) {
        throw new Error("生成游戏失败")
      }

      const data = await response.json()
      if (data.success && data.data) {
        setGameData(data.data)
        setShowDialog(true)
        incrementDrawCount()
        toast.success("游戏生成成功！")
      } else {
        throw new Error("游戏数据格式错误")
      }
    }, "生成专注力游戏")

    setIsLoading(false)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            免费体验游戏生成
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            快速生成适合您孩子的专注力训练游戏，每日可免费体验 10 次
          </p>
          <div className="mt-4">
            <Badge variant="outline" className="text-blue-600">
              今日已使用: {getTodayDrawCount()}/10 次
            </Badge>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              选择游戏条件
            </CardTitle>
            <p className="text-center text-gray-600">
              根据孩子的情况选择合适的游戏条件
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">孩子年龄</label>
                <Select value={ageRange} onValueChange={setAgeRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择年龄段" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-2.5">2-2.5岁</SelectItem>
                    <SelectItem value="2.5-3">2.5-3岁</SelectItem>
                    <SelectItem value="3-4">3-4岁</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">游戏场景</label>
                <Select value={scene} onValueChange={setScene}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择场景" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">居家</SelectItem>
                    <SelectItem value="outdoor">户外</SelectItem>
                    <SelectItem value="waiting">等待时</SelectItem>
                    <SelectItem value="bedtime">睡前</SelectItem>
                    <SelectItem value="travel">旅途中</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">道具要求</label>
                <Select value={props} onValueChange={setProps}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择道具" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hands">仅用手</SelectItem>
                    <SelectItem value="paper">纸笔类</SelectItem>
                    <SelectItem value="blocks_puzzle">积木/拼图</SelectItem>
                    <SelectItem value="books_pictures">图书/图片卡</SelectItem>
                    <SelectItem value="household">家居物品</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">发展重点</label>
                <Select value={focus} onValueChange={setFocus}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择重点" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">智能推荐</SelectItem>
                    <SelectItem value="fine">精细动作</SelectItem>
                    <SelectItem value="language">语言沟通</SelectItem>
                    <SelectItem value="cognition">逻辑认知</SelectItem>
                    <SelectItem value="gross">大肢体动作</SelectItem>
                    <SelectItem value="social">社交情感</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Button
                onClick={handleGenerate}
                disabled={isLoading || !ageRange || !scene || !props}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 min-w-48"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    生成中...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    生成专注力游戏
                  </>
                )}
              </Button>
              
              <div className="text-sm text-gray-500">
                想要完整的 14 天训练计划？
                <Button variant="link" className="p-0 ml-1 text-blue-600" asChild>
                  <a href="/assessment">完成专业评估</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 游戏结果弹窗 */}
        <GameResultDialog 
          gameData={gameData}
          showDialog={showDialog}
          onClose={() => setShowDialog(false)}
        />
      </div>
    </section>
  )
}

// 游戏结果弹窗组件
function GameResultDialog({
  gameData,
  showDialog,
  onClose
}: {
  gameData: GameData | null
  showDialog: boolean
  onClose: () => void
}) {
  if (!gameData) return null

  return (
    <AlertDialog open={showDialog} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle className="text-2xl flex items-center">
              <Play className="mr-2 h-6 w-6 text-blue-600" />
              {gameData.game_name}
            </AlertDialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </AlertDialogHeader>
        
        <div className="space-y-6">
          {/* 游戏基本信息 */}
          <div className="flex flex-wrap gap-2">
            <Badge variant={gameData.activity_type === 'active' ? 'default' : 'secondary'}>
              {gameData.activity_type === 'active' ? '活跃型' : '安静型'}
            </Badge>
            <Badge variant="outline" className="flex items-center">
              <Star className="w-3 h-3 mr-1" />
              难度 {gameData.difficulty_star}/5
            </Badge>
            <Badge variant="outline">
              {gameData.duration_min} 分钟
            </Badge>
          </div>

          {/* 游戏目标 */}
          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <Target className="mr-2 h-4 w-4 text-green-600" />
              发展目标
            </h4>
            <ul className="space-y-1">
              {gameData.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 所需材料 */}
          <div>
            <h4 className="font-semibold mb-2">所需材料</h4>
            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
              {gameData.materials}
            </p>
          </div>

          {/* 游戏步骤 */}
          <div>
            <h4 className="font-semibold mb-2">游戏步骤</h4>
            <ol className="space-y-2">
              {gameData.steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 贴心提示 */}
          <div>
            <h4 className="font-semibold mb-2">贴心提示</h4>
            <ul className="space-y-1">
              {gameData.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2 flex-shrink-0">💡</span>
                  <span className="text-sm text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-500 mb-4">
              想要获得更系统的训练计划吗？
            </p>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="/assessment">完成专业评估，获取 14 天计划</a>
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

// 懒加载包装器
export default function LazyGameGenerator() {
  return (
    <Suspense fallback={<GameGeneratorSkeleton />}>
      <GameGenerator />
    </Suspense>
  )
}