'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog'
import { Badge } from '../../components/ui/badge'
import { 
  Baby, 
  Plus, 
  Edit, 
  Calendar,
  User
} from 'lucide-react'
import { useAuth, useRequireAuth } from '../../lib/auth-context'
import { PageWrapper } from '../../components/page-loading'
import { CardSkeleton } from '../../components/ui/loading'
import type { ChildProfile, Gender } from '@/lib/types'
import { toast } from 'sonner'

export default function ChildrenPage() {
  const { user, children, refreshProfile } = useAuth()
  const { isAuthenticated, loading: authLoading } = useRequireAuth()
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [editingChild, setEditingChild] = useState<ChildProfile | null>(null)

  if (authLoading) {
    return <ChildrenPageSkeleton />
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          {/* 页面标题 */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">孩子档案</h1>
              <p className="text-gray-600">管理您孩子的基本信息和发展偏好</p>
            </div>
            <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="mr-2 h-4 w-4" />
                  添加孩子
                </Button>
              </DialogTrigger>
              <AddChildDialog onClose={() => setShowAddDialog(false)} onSuccess={refreshProfile} />
            </Dialog>
          </div>

          {/* 孩子列表 */}
          {children.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Baby className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">还没有添加孩子档案</h3>
                <p className="text-gray-600 mb-6">
                  添加您的孩子信息，为他们创建个性化的专注力训练计划
                </p>
                <Button 
                  onClick={() => setShowAddDialog(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  添加第一个孩子
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {children.map((child) => (
                <ChildCard 
                  key={child.id} 
                  child={child} 
                  onEdit={() => setEditingChild(child)}
                />
              ))}
            </div>
          )}

          {/* 编辑对话框 */}
          {editingChild && (
            <Dialog open={!!editingChild} onOpenChange={() => setEditingChild(null)}>
              <EditChildDialog 
                child={editingChild}
                onClose={() => setEditingChild(null)} 
                onSuccess={() => {
                  setEditingChild(null)
                  refreshProfile()
                }}
              />
            </Dialog>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}

// 孩子卡片组件
function ChildCard({ child, onEdit }: { child: ChildProfile; onEdit: () => void }) {
  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate)
    const now = new Date()
    const ageInMonths = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth())
    return Math.floor(ageInMonths)
  }

  const ageInMonths = calculateAge(child.birth_date)
  const ageText = ageInMonths >= 24 ? `${Math.floor(ageInMonths / 12)}岁${ageInMonths % 12}个月` : `${ageInMonths}个月`

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
            {child.name.charAt(0)}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{child.name}</CardTitle>
            <p className="text-sm text-gray-600 flex items-center mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              {ageText}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            className="shrink-0"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 性别 */}
        {child.gender && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">性别</span>
            <Badge variant="outline">
              {child.gender === 'male' ? '男孩' : child.gender === 'female' ? '女孩' : '其他'}
            </Badge>
          </div>
        )}

        {/* 发展重点 */}
        {child.development_focuses.length > 0 && (
          <div>
            <p className="text-sm text-gray-600 mb-2">发展重点</p>
            <div className="flex flex-wrap gap-1">
              {child.development_focuses.map((focus) => (
                <Badge key={focus} variant="secondary" className="text-xs">
                  {getFocusLabel(focus)}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* 难度偏好 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">难度偏好</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full mr-1 ${
                  i < child.difficulty_preference ? 'bg-yellow-400' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// 添加孩子对话框
function AddChildDialog({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    birth_date: '',
    gender: '' as Gender | '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.birth_date) {
      toast.error('请填写必填信息')
      return
    }

    try {
      // TODO: 调用 API 创建孩子档案
      toast.success('孩子档案添加成功！')
      onSuccess()
      onClose()
    } catch (error) {
      toast.error('添加失败，请重试')
    }
  }

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>添加孩子档案</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">姓名 *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="输入孩子的姓名"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="birth_date">出生日期 *</Label>
          <Input
            id="birth_date"
            type="date"
            value={formData.birth_date}
            onChange={(e) => setFormData({ ...formData, birth_date: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">性别</Label>
          <Select value={formData.gender} onValueChange={(value: Gender) => setFormData({ ...formData, gender: value })}>
            <SelectTrigger>
              <SelectValue placeholder="选择性别" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">男孩</SelectItem>
              <SelectItem value="female">女孩</SelectItem>
              <SelectItem value="other">其他</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            取消
          </Button>
          <Button type="submit">
            添加
          </Button>
        </div>
      </form>
    </DialogContent>
  )
}

// 编辑孩子对话框
function EditChildDialog({ 
  child, 
  onClose, 
  onSuccess 
}: { 
  child: ChildProfile
  onClose: () => void
  onSuccess: () => void 
}) {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>编辑 {child.name} 的档案</DialogTitle>
      </DialogHeader>
      <div className="text-center py-8">
        <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">编辑功能正在开发中...</p>
        <Button className="mt-4" onClick={onClose}>
          关闭
        </Button>
      </div>
    </DialogContent>
  )
}

// 页面骨架屏
function ChildrenPageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="h-8 bg-gray-200 rounded animate-pulse w-48 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-64"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded animate-pulse w-32"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

// 获取发展重点标签
function getFocusLabel(focus: string): string {
  const labels: Record<string, string> = {
    fine: '精细动作',
    language: '语言沟通',
    cognition: '逻辑认知',
    gross: '大肢体动作',
    social: '社交情感'
  }
  return labels[focus] || focus
}