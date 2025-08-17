'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Clock, Star, AlertTriangle } from 'lucide-react'
import type { Game } from '@/lib/types'

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const getToolLabel = (tool: string) => {
    const toolMap: Record<string, string> = {
      hands: '徒手游戏',
      blocks_puzzle: '积木拼图',
      books_pictures: '书籍图片',
      art_supplies: '美术用品',
      household: '家居用品',
      music_toys: '音乐玩具',
      outdoor: '户外道具'
    }
    return toolMap[tool] || tool
  }

  const getScenarioLabel = (scenario: string) => {
    const scenarioMap: Record<string, string> = {
      home: '家中',
      outdoor: '户外',
      car: '车内'
    }
    return scenarioMap[scenario] || scenario
  }

  const getFocusLabel = (focus: string) => {
    const focusMap: Record<string, string> = {
      fine: '精细动作',
      gross: '大动作',
      cognition: '认知能力',
      language: '语言能力',
      social: '社交能力',
      emotional: '情感发展'
    }
    return focusMap[focus] || focus
  }

  const getModeLabel = (mode: string) => {
    const modeMap: Record<string, string> = {
      quiet: '安静游戏',
      active: '活跃游戏'
    }
    return modeMap[mode] || mode
  }

  const renderDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        data-testid="difficulty-star"
        className={`w-4 h-4 ${
          index < difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200" role="article">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-lg leading-tight" role="heading" aria-level={3}>
            {game.name}
          </CardTitle>
          <div className="flex items-center gap-1 flex-shrink-0">
            {renderDifficultyStars(game.difficulty)}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="secondary" className="text-xs">
            {game.age_min}-{game.age_max}个月
          </Badge>
          
          {game.duration_min && (
            <Badge variant="outline" className="text-xs">
              <Clock className="w-3 h-3 mr-1" />
              {game.duration_min}分钟+
            </Badge>
          )}
          
          <Badge variant="outline" className="text-xs">
            {getToolLabel(game.tool)}
          </Badge>
          
          <Badge variant="outline" className="text-xs">
            {getScenarioLabel(game.scenario)}
          </Badge>
          
          <Badge variant="outline" className="text-xs">
            {getModeLabel(game.mode)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {game.description}
        </p>

        <div>
          <h4 className="text-sm font-medium mb-2">发展重点</h4>
          <div className="flex flex-wrap gap-1">
            {game.focuses.map((focus) => (
              <Badge key={focus} variant="default" className="text-xs">
                {getFocusLabel(focus)}
              </Badge>
            ))}
          </div>
        </div>

        {game.safety_notes && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle 
                className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" 
                aria-label="安全提醒"
              />
              <div>
                <h4 className="text-sm font-medium text-amber-800 mb-1">安全提醒</h4>
                <p className="text-xs text-amber-700">{game.safety_notes}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}