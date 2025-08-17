'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { 
  GamepadIcon, 
  Plus, 
  Edit, 
  Search,
  Filter,
  Trash2,
  Eye,
  MoreHorizontal,
  ArrowLeft
} from 'lucide-react'
import { useRequireAdmin } from '../../../hooks/use-admin'
import { PageWrapper } from '../../../components/page-loading'
import { Loader2 } from 'lucide-react'
import { useErrorHandler } from '../../../hooks/use-error-handler'
import { toast } from 'sonner'
import type { Scenario, Tool, Focus } from '@/lib/types'
import Link from 'next/link'

interface Game {
  id: number
  name: string
  description: string
  age_min: number
  age_max: number
  difficulty: number
  scenario: Scenario
  tool: Tool
  focuses: Focus[]
  steps: any[]
  safety_notes?: string
  materials?: string[]
  tags?: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

interface GameFormData {
  name: string
  description: string
  age_min: number
  age_max: number
  difficulty: number
  scenario: Scenario | ''
  tool: Tool | ''
  focuses: Focus[]
  steps: Array<{
    number: number
    instruction: string
    expected_duration: number
    materials?: string[]
    success_criteria?: string[]
  }>
  safety_notes: string
  materials: string[]
  tags: string[]
  is_active: boolean
}

export default function GamesManagementPage() {
  const { isAdmin, loading: authLoading } = useRequireAdmin()
  const { handleAsyncOperation } = useErrorHandler()
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(false)
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [editingGame, setEditingGame] = useState<Game | null>(null)
  const [filters, setFilters] = useState({
    search: '',
    scenario: '',
    tool: '',
    focus: '',
    is_active: ''
  })
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  })

  // 加载游戏列表
  const loadGames = async () => {
    setLoading(true)
    
    await handleAsyncOperation(async () => {
      const searchParams = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...Object.fromEntries(Object.entries(filters).filter(([_, value]) => value))
      })

      const response = await fetch(`/api/admin/games?${searchParams}`)
      if (!response.ok) {
        throw new Error('Failed to load games')
      }
      
      const result = await response.json()
      setGames(result.data.games)
      setPagination(result.data.pagination)
    }, '加载游戏列表')
    
    setLoading(false)
  }

  useEffect(() => {
    if (isAdmin && !authLoading) {
      loadGames()
    }
  }, [isAdmin, authLoading, filters, pagination.page])

  // 创建游戏
  const createGame = async (gameData: GameFormData) => {
    await handleAsyncOperation(async () => {
      const response = await fetch('/api/admin/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gameData)
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to create game')
      }

      toast.success('游戏创建成功！')
      setShowCreateDialog(false)
      await loadGames()
    }, '创建游戏')
  }

  // 更新游戏
  const updateGame = async (gameId: number, gameData: Partial<GameFormData>) => {
    await handleAsyncOperation(async () => {
      const response = await fetch(`/api/admin/games/${gameId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gameData)
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to update game')
      }

      toast.success('游戏更新成功！')
      setEditingGame(null)
      await loadGames()
    }, '更新游戏')
  }

  // 删除游戏
  const deleteGame = async (gameId: number) => {
    if (!confirm('确定要删除这个游戏吗？此操作不可撤销。')) {
      return
    }

    await handleAsyncOperation(async () => {
      const response = await fetch(`/api/admin/games/${gameId}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to delete game')
      }

      toast.success('游戏删除成功！')
      await loadGames()
    }, '删除游戏')
  }

  if (authLoading) {
    return <Loader2 className="h-5 w-5 animate-spin" />
  }

  if (!isAdmin) {
    return null
  }

  return (
    <PageWrapper loading={loading}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* 页面标题 */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link href="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  返回管理后台
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">游戏管理</h1>
                <p className="text-gray-600">创建和管理专注力训练游戏</p>
              </div>
            </div>
            
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  添加游戏
                </Button>
              </DialogTrigger>
              <GameFormDialog
                onSubmit={createGame}
                onClose={() => setShowCreateDialog(false)}
                title="创建游戏"
              />
            </Dialog>
          </div>

          {/* 筛选器 */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <Label htmlFor="search">搜索</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="搜索游戏名称或描述..."
                      className="pl-10"
                      value={filters.search}
                      onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <Label>场景</Label>
                  <Select 
                    value={filters.scenario} 
                    onValueChange={(value) => setFilters({ ...filters, scenario: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="所有场景" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">所有场景</SelectItem>
                      <SelectItem value="home">居家</SelectItem>
                      <SelectItem value="outdoor">户外</SelectItem>
                      <SelectItem value="waiting">等待时</SelectItem>
                      <SelectItem value="bedtime">睡前</SelectItem>
                      <SelectItem value="travel">旅途中</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>道具</Label>
                  <Select 
                    value={filters.tool} 
                    onValueChange={(value) => setFilters({ ...filters, tool: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="所有道具" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">所有道具</SelectItem>
                      <SelectItem value="hands">仅用手</SelectItem>
                      <SelectItem value="paper">纸笔类</SelectItem>
                      <SelectItem value="blocks_puzzle">积木/拼图</SelectItem>
                      <SelectItem value="books_pictures">图书/图片卡</SelectItem>
                      <SelectItem value="household">家居物品</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>能力重点</Label>
                  <Select 
                    value={filters.focus} 
                    onValueChange={(value) => setFilters({ ...filters, focus: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="所有能力" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">所有能力</SelectItem>
                      <SelectItem value="fine">精细动作</SelectItem>
                      <SelectItem value="language">语言沟通</SelectItem>
                      <SelectItem value="cognition">逻辑认知</SelectItem>
                      <SelectItem value="gross">大肢体动作</SelectItem>
                      <SelectItem value="social">社交情感</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>状态</Label>
                  <Select 
                    value={filters.is_active} 
                    onValueChange={(value) => setFilters({ ...filters, is_active: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="所有状态" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">所有状态</SelectItem>
                      <SelectItem value="true">活跃</SelectItem>
                      <SelectItem value="false">停用</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 游戏列表 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GamepadIcon className="h-5 w-5" />
                游戏列表 ({pagination.total})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {games.length > 0 ? (
                <div className="space-y-4">
                  {games.map((game) => (
                    <GameCard 
                      key={game.id} 
                      game={game} 
                      onEdit={() => setEditingGame(game)}
                      onDelete={() => deleteGame(game.id)}
                    />
                  ))}
                  
                  {/* 分页 */}
                  {pagination.pages > 1 && (
                    <div className="flex justify-center space-x-2 mt-6">
                      <Button
                        variant="outline"
                        disabled={pagination.page <= 1}
                        onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                      >
                        上一页
                      </Button>
                      <span className="flex items-center px-4">
                        第 {pagination.page} 页，共 {pagination.pages} 页
                      </span>
                      <Button
                        variant="outline"
                        disabled={pagination.page >= pagination.pages}
                        onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                      >
                        下一页
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <GamepadIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">暂无游戏</h3>
                  <p className="text-gray-600 mb-6">开始创建您的第一个游戏</p>
                  <Button onClick={() => setShowCreateDialog(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    添加游戏
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 编辑对话框 */}
          {editingGame && (
            <Dialog open={!!editingGame} onOpenChange={() => setEditingGame(null)}>
              <GameFormDialog
                game={editingGame}
                onSubmit={(data) => updateGame(editingGame.id, data)}
                onClose={() => setEditingGame(null)}
                title="编辑游戏"
              />
            </Dialog>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}

// 游戏卡片组件
function GameCard({ 
  game, 
  onEdit, 
  onDelete 
}: { 
  game: Game
  onEdit: () => void
  onDelete: () => void
}) {
  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return 'bg-green-100 text-green-800'
    if (difficulty <= 3) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  const getScenarioLabel = (scenario: string) => {
    const labels: Record<string, string> = {
      home: '居家',
      outdoor: '户外',
      waiting: '等待时',
      bedtime: '睡前',
      travel: '旅途中'
    }
    return labels[scenario] || scenario
  }

  const getToolLabel = (tool: string) => {
    const labels: Record<string, string> = {
      hands: '仅用手',
      paper: '纸笔类',
      blocks_puzzle: '积木/拼图',
      books_pictures: '图书/图片卡',
      household: '家居物品'
    }
    return labels[tool] || tool
  }

  const getFocusLabel = (focus: string) => {
    const labels: Record<string, string> = {
      fine: '精细动作',
      language: '语言沟通',
      cognition: '逻辑认知',
      gross: '大肢体动作',
      social: '社交情感'
    }
    return labels[focus] || focus
  }

  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{game.name}</h3>
            <Badge variant={game.is_active ? 'default' : 'secondary'}>
              {game.is_active ? '活跃' : '停用'}
            </Badge>
            <Badge className={getDifficultyColor(game.difficulty)}>
              难度 {game.difficulty}
            </Badge>
          </div>
          <p className="text-gray-600 mb-3">{game.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="outline">{getScenarioLabel(game.scenario)}</Badge>
            <Badge variant="outline">{getToolLabel(game.tool)}</Badge>
            <Badge variant="outline">{game.age_min}-{game.age_max}个月</Badge>
            {game.focuses.map((focus) => (
              <Badge key={focus} variant="outline" className="text-xs">
                {getFocusLabel(focus)}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" onClick={onEdit}>
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onDelete}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        创建时间：{new Date(game.created_at).toLocaleDateString()}
        {game.steps && game.steps.length > 0 && (
          <span className="ml-4">步骤数：{game.steps.length}</span>
        )}
      </div>
    </div>
  )
}

// 游戏表单对话框组件
function GameFormDialog({ 
  game, 
  onSubmit, 
  onClose, 
  title 
}: { 
  game?: Game
  onSubmit: (data: GameFormData) => Promise<void>
  onClose: () => void
  title: string
}) {
  const [formData, setFormData] = useState<GameFormData>({
    name: game?.name || '',
    description: game?.description || '',
    age_min: game?.age_min || 24,
    age_max: game?.age_max || 48,
    difficulty: game?.difficulty || 1,
    scenario: game?.scenario || '',
    tool: game?.tool || '',
    focuses: game?.focuses || [],
    steps: game?.steps || [],
    safety_notes: game?.safety_notes || '',
    materials: game?.materials || [],
    tags: game?.tags || [],
    is_active: game?.is_active !== false
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return

    setSubmitting(true)
    try {
      await onSubmit(formData)
    } finally {
      setSubmitting(false)
    }
  }

  const handleFocusChange = (focus: Focus, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, focuses: [...formData.focuses, focus] })
    } else {
      setFormData({ ...formData, focuses: formData.focuses.filter(f => f !== focus) })
    }
  }

  return (
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 基本信息 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">游戏名称 *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="difficulty">难度等级 *</Label>
            <Select 
              value={formData.difficulty.toString()} 
              onValueChange={(value) => setFormData({ ...formData, difficulty: parseInt(value) })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 - 非常简单</SelectItem>
                <SelectItem value="2">2 - 简单</SelectItem>
                <SelectItem value="3">3 - 中等</SelectItem>
                <SelectItem value="4">4 - 困难</SelectItem>
                <SelectItem value="5">5 - 非常困难</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="description">游戏描述 *</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            required
          />
        </div>

        {/* 年龄范围 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="age_min">最小年龄（月） *</Label>
            <Input
              id="age_min"
              type="number"
              min={24}
              max={48}
              value={formData.age_min}
              onChange={(e) => setFormData({ ...formData, age_min: parseInt(e.target.value) })}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="age_max">最大年龄（月） *</Label>
            <Input
              id="age_max"
              type="number"
              min={24}
              max={48}
              value={formData.age_max}
              onChange={(e) => setFormData({ ...formData, age_max: parseInt(e.target.value) })}
              required
            />
          </div>
        </div>

        {/* 场景和道具 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>使用场景 *</Label>
            <Select 
              value={formData.scenario} 
              onValueChange={(value: Scenario) => setFormData({ ...formData, scenario: value })}
            >
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
          
          <div>
            <Label>道具类型 *</Label>
            <Select 
              value={formData.tool} 
              onValueChange={(value: Tool) => setFormData({ ...formData, tool: value })}
            >
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
        </div>

        {/* 能力重点 */}
        <div>
          <Label>能力发展重点</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {(['fine', 'language', 'cognition', 'gross', 'social'] as Focus[]).map((focus) => (
              <label key={focus} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.focuses.includes(focus)}
                  onChange={(e) => handleFocusChange(focus, e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">
                  {focus === 'fine' && '精细动作'}
                  {focus === 'language' && '语言沟通'}
                  {focus === 'cognition' && '逻辑认知'}
                  {focus === 'gross' && '大肢体动作'}
                  {focus === 'social' && '社交情感'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* 安全注意事项 */}
        <div>
          <Label htmlFor="safety_notes">安全注意事项</Label>
          <Textarea
            id="safety_notes"
            value={formData.safety_notes}
            onChange={(e) => setFormData({ ...formData, safety_notes: e.target.value })}
            rows={2}
            placeholder="描述游戏过程中需要注意的安全事项..."
          />
        </div>

        {/* 状态切换 */}
        <div className="flex items-center space-x-2">
          <Switch
            id="is_active"
            checked={formData.is_active}
            onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
          />
          <Label htmlFor="is_active">启用游戏</Label>
        </div>

        {/* 按钮 */}
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            取消
          </Button>
          <Button type="submit" disabled={submitting}>
            {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : (game ? '更新游戏' : '创建游戏')}
          </Button>
        </div>
      </form>
    </DialogContent>
  )
}