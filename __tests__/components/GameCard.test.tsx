import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { GameCard } from '@/components/GameCard'
import type { Game } from '@/lib/types'

describe('GameCard', () => {
  const mockGame: Game = {
    id: 1,
    name: '测试游戏',
    description: '这是一个测试游戏的详细描述，包含了游戏的玩法和目标。',
    age_min: 24,
    age_max: 36,
    duration_min: 15,
    difficulty: 3,
    mode: 'active',
    tool: 'hands',
    scenario: 'home',
    focuses: ['fine', 'cognition'],
    safety_notes: '注意安全事项',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }

  it('should render game information correctly', () => {
    render(<GameCard game={mockGame} />)

    expect(screen.getByText('测试游戏')).toBeInTheDocument()
    expect(screen.getByText(/这是一个测试游戏的详细描述/)).toBeInTheDocument()
    expect(screen.getByText('24-36个月')).toBeInTheDocument()
    expect(screen.getByText('15分钟+')).toBeInTheDocument()
    expect(screen.getByText('徒手游戏')).toBeInTheDocument()
    expect(screen.getByText('家中')).toBeInTheDocument()
  })

  it('should render difficulty stars correctly', () => {
    render(<GameCard game={mockGame} />)

    const stars = screen.getAllByTestId('difficulty-star')
    expect(stars).toHaveLength(5)
    
    // Check filled stars (difficulty = 3)
    expect(stars[0]).toHaveClass('text-yellow-400')
    expect(stars[1]).toHaveClass('text-yellow-400')
    expect(stars[2]).toHaveClass('text-yellow-400')
    expect(stars[3]).toHaveClass('text-gray-300')
    expect(stars[4]).toHaveClass('text-gray-300')
  })

  it('should render focus areas correctly', () => {
    render(<GameCard game={mockGame} />)

    expect(screen.getByText('精细动作')).toBeInTheDocument()
    expect(screen.getByText('认知能力')).toBeInTheDocument()
  })

  it('should show safety notes when available', () => {
    render(<GameCard game={mockGame} />)

    expect(screen.getByText('注意安全事项')).toBeInTheDocument()
    expect(screen.getByLabelText('安全提醒')).toBeInTheDocument()
  })

  it('should not show safety notes when not available', () => {
    const gameWithoutSafety = { ...mockGame, safety_notes: undefined }
    render(<GameCard game={gameWithoutSafety} />)

    expect(screen.queryByLabelText('安全提醒')).not.toBeInTheDocument()
  })

  it('should handle different game modes', () => {
    const quietGame = { ...mockGame, mode: 'quiet' as const }
    const { rerender } = render(<GameCard game={quietGame} />)

    expect(screen.getByText('安静游戏')).toBeInTheDocument()

    const activeGame = { ...mockGame, mode: 'active' as const }
    rerender(<GameCard game={activeGame} />)

    expect(screen.getByText('活跃游戏')).toBeInTheDocument()
  })

  it('should handle different tools', () => {
    const toolMappings = [
      { tool: 'hands', display: '徒手游戏' },
      { tool: 'blocks_puzzle', display: '积木拼图' },
      { tool: 'books_pictures', display: '书籍图片' },
      { tool: 'art_supplies', display: '美术用品' },
      { tool: 'household', display: '家居用品' },
      { tool: 'music_toys', display: '音乐玩具' },
      { tool: 'outdoor', display: '户外道具' }
    ]

    toolMappings.forEach(({ tool, display }) => {
      const gameWithTool = { ...mockGame, tool: tool as any }
      const { rerender } = render(<GameCard game={gameWithTool} />)
      
      expect(screen.getByText(display)).toBeInTheDocument()
      
      // Clean up for next iteration
      rerender(<div />)
    })
  })

  it('should handle different scenarios', () => {
    const scenarioMappings = [
      { scenario: 'home', display: '家中' },
      { scenario: 'outdoor', display: '户外' },
      { scenario: 'car', display: '车内' }
    ]

    scenarioMappings.forEach(({ scenario, display }) => {
      const gameWithScenario = { ...mockGame, scenario: scenario as any }
      const { rerender } = render(<GameCard game={gameWithScenario} />)
      
      expect(screen.getByText(display)).toBeInTheDocument()
      
      // Clean up for next iteration
      rerender(<div />)
    })
  })

  it('should handle different focus areas', () => {
    const focusMappings = [
      { focus: 'fine', display: '精细动作' },
      { focus: 'gross', display: '大动作' },
      { focus: 'cognition', display: '认知能力' },
      { focus: 'language', display: '语言能力' },
      { focus: 'social', display: '社交能力' },
      { focus: 'emotional', display: '情感发展' }
    ]

    focusMappings.forEach(({ focus, display }) => {
      const gameWithFocus = { ...mockGame, focuses: [focus as any] }
      const { rerender } = render(<GameCard game={gameWithFocus} />)
      
      expect(screen.getByText(display)).toBeInTheDocument()
      
      // Clean up for next iteration
      rerender(<div />)
    })
  })

  it('should handle multiple focus areas', () => {
    const gameWithMultipleFocuses = { 
      ...mockGame, 
      focuses: ['fine', 'cognition', 'language'] as any 
    }
    render(<GameCard game={gameWithMultipleFocuses} />)

    expect(screen.getByText('精细动作')).toBeInTheDocument()
    expect(screen.getByText('认知能力')).toBeInTheDocument()
    expect(screen.getByText('语言能力')).toBeInTheDocument()
  })

  it('should handle edge case difficulties', () => {
    const easyGame = { ...mockGame, difficulty: 1 }
    const { rerender } = render(<GameCard game={easyGame} />)

    let stars = screen.getAllByTestId('difficulty-star')
    expect(stars[0]).toHaveClass('text-yellow-400')
    expect(stars[1]).toHaveClass('text-gray-300')

    const hardGame = { ...mockGame, difficulty: 5 }
    rerender(<GameCard game={hardGame} />)

    stars = screen.getAllByTestId('difficulty-star')
    stars.forEach(star => {
      expect(star).toHaveClass('text-yellow-400')
    })
  })

  it('should handle long descriptions', () => {
    const longDescription = 'A'.repeat(200)
    const gameWithLongDescription = { ...mockGame, description: longDescription }
    render(<GameCard game={gameWithLongDescription} />)

    expect(screen.getByText(longDescription)).toBeInTheDocument()
  })

  it('should handle missing optional fields gracefully', () => {
    const minimalGame = {
      id: 1,
      name: '简单游戏',
      description: '简单描述',
      age_min: 24,
      age_max: 36,
      difficulty: 1,
      mode: 'quiet' as const,
      tool: 'hands' as const,
      scenario: 'home' as const,
      focuses: ['fine'] as any,
      is_active: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }

    render(<GameCard game={minimalGame} />)

    expect(screen.getByText('简单游戏')).toBeInTheDocument()
    expect(screen.getByText('简单描述')).toBeInTheDocument()
    expect(screen.queryByLabelText('安全提醒')).not.toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    render(<GameCard game={mockGame} />)

    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('测试游戏')
  })
})