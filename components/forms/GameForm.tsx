'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, AlertCircle } from 'lucide-react'
import { generateGames } from '@/lib/gameservice'
import type { Scenario, Tool, Focus, Game } from '@/lib/types'

const gameFormSchema = z.object({
  email: z.string().email('邮箱格式不正确').min(1, '请输入邮箱'),
  ageMonths: z.number().min(24, '年龄必须在24-48个月之间').max(48, '年龄必须在24-48个月之间'),
  scenario: z.enum(['home', 'outdoor', 'car'], {
    required_error: '请选择游戏场景',
  }),
  toolPref: z.enum(['any', 'hands', 'blocks_puzzle', 'books_pictures', 'art_supplies', 'household', 'music_toys', 'outdoor']),
  focus: z.enum(['fine', 'gross', 'cognition', 'language', 'social', 'emotional']).optional(),
})

type GameFormData = z.infer<typeof gameFormSchema>

interface GameFormProps {
  onSubmit?: (data: GameFormData) => void
  onGamesGenerated?: (result: { games: Game[], sessionId: string | null }) => void
}

export function GameForm({ onSubmit, onGamesGenerated }: GameFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<GameFormData>({
    resolver: zodResolver(gameFormSchema),
    defaultValues: {
      ageMonths: 24,
      toolPref: 'any'
    }
  })

  const watchedValues = watch()

  const onFormSubmit = async (data: GameFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      onSubmit?.(data)

      const result = await generateGames({
        email: data.email,
        ageMonths: data.ageMonths,
        scenario: data.scenario,
        toolPref: data.toolPref,
        focus: data.focus
      })

      if (result.success && result.data) {
        onGamesGenerated?.(result.data)
        reset() // Reset form after successful generation
      } else {
        setError(result.error || '游戏生成失败，请重试')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '发生未知错误')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>游戏生成器</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">邮箱</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register('email')}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ageMonths">孩子年龄（月）</Label>
            <Input
              id="ageMonths"
              type="number"
              min={24}
              max={48}
              placeholder="30"
              {...register('ageMonths', { valueAsNumber: true })}
              disabled={isLoading}
            />
            {errors.ageMonths && (
              <p className="text-sm text-red-600">{errors.ageMonths.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="scenario">游戏场景</Label>
            <Select
              value={watchedValues.scenario || ''}
              onValueChange={(value) => setValue('scenario', value as Scenario)}
              disabled={isLoading}
            >
              <SelectTrigger id="scenario">
                <SelectValue placeholder="选择游戏场景" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">家中</SelectItem>
                <SelectItem value="outdoor">户外</SelectItem>
                <SelectItem value="car">车内</SelectItem>
              </SelectContent>
            </Select>
            {errors.scenario && (
              <p className="text-sm text-red-600">{errors.scenario.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="toolPref">道具偏好</Label>
            <Select
              value={watchedValues.toolPref || 'any'}
              onValueChange={(value) => setValue('toolPref', value as Tool | 'any')}
              disabled={isLoading}
            >
              <SelectTrigger id="toolPref">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">任意道具</SelectItem>
                <SelectItem value="hands">徒手游戏</SelectItem>
                <SelectItem value="blocks_puzzle">积木拼图</SelectItem>
                <SelectItem value="books_pictures">书籍图片</SelectItem>
                <SelectItem value="art_supplies">美术用品</SelectItem>
                <SelectItem value="household">家居用品</SelectItem>
                <SelectItem value="music_toys">音乐玩具</SelectItem>
                <SelectItem value="outdoor">户外道具</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="focus">发展重点（可选）</Label>
            <Select
              value={watchedValues.focus || ''}
              onValueChange={(value) => setValue('focus', value as Focus)}
              disabled={isLoading}
            >
              <SelectTrigger id="focus">
                <SelectValue placeholder="选择发展重点" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fine">精细动作</SelectItem>
                <SelectItem value="gross">大动作</SelectItem>
                <SelectItem value="cognition">认知能力</SelectItem>
                <SelectItem value="language">语言能力</SelectItem>
                <SelectItem value="social">社交能力</SelectItem>
                <SelectItem value="emotional">情感发展</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                生成中...
              </>
            ) : (
              '生成游戏'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}