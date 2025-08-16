import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GameForm } from '@/components/forms/gameform'

// Mock useAuth hook
const mockUseAuth = {
  user: { id: 'test-user' },
  profile: null,
  loading: false
}

jest.mock('@/lib/auth-context', () => ({
  useAuth: () => mockUseAuth
}))

// Mock generateGames function
const mockGenerateGames = jest.fn()
jest.mock('@/lib/gameservice', () => ({
  generateGames: mockGenerateGames
}))

describe('GameForm', () => {
  const mockOnSubmit = jest.fn()
  const mockOnGamesGenerated = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render form fields correctly', () => {
    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    expect(screen.getByLabelText(/邮箱/)).toBeInTheDocument()
    expect(screen.getByLabelText(/孩子年龄/)).toBeInTheDocument()
    expect(screen.getByLabelText(/游戏场景/)).toBeInTheDocument()
    expect(screen.getByLabelText(/道具偏好/)).toBeInTheDocument()
    expect(screen.getByLabelText(/发展重点/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /生成游戏/ })).toBeInTheDocument()
  })

  it('should validate required fields', async () => {
    const user = userEvent.setup()
    
    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    const submitButton = screen.getByRole('button', { name: /生成游戏/ })
    await user.click(submitButton)

    expect(screen.getByText(/请输入邮箱/)).toBeInTheDocument()
    expect(screen.getByText(/请选择游戏场景/)).toBeInTheDocument()
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it('should validate email format', async () => {
    const user = userEvent.setup()
    
    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    const emailInput = screen.getByLabelText(/邮箱/)
    await user.type(emailInput, 'invalid-email')

    const submitButton = screen.getByRole('button', { name: /生成游戏/ })
    await user.click(submitButton)

    expect(screen.getByText(/邮箱格式不正确/)).toBeInTheDocument()
  })

  it('should validate age range', async () => {
    const user = userEvent.setup()
    
    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    const ageInput = screen.getByLabelText(/孩子年龄/)
    await user.clear(ageInput)
    await user.type(ageInput, '20')

    const submitButton = screen.getByRole('button', { name: /生成游戏/ })
    await user.click(submitButton)

    expect(screen.getByText(/年龄必须在24-48个月之间/)).toBeInTheDocument()
  })

  it('should submit form with valid data', async () => {
    const user = userEvent.setup()
    
    mockGenerateGames.mockResolvedValue({
      success: true,
      data: {
        games: [
          {
            id: 1,
            name: '测试游戏',
            description: '测试描述',
            age_min: 24,
            age_max: 36
          }
        ],
        sessionId: 'session-123'
      }
    })

    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    // Fill form
    await user.type(screen.getByLabelText(/邮箱/), 'test@example.com')
    await user.type(screen.getByLabelText(/孩子年龄/), '30')
    await user.selectOptions(screen.getByLabelText(/游戏场景/), 'home')
    await user.selectOptions(screen.getByLabelText(/道具偏好/), 'hands')
    await user.selectOptions(screen.getByLabelText(/发展重点/), 'fine')

    // Submit form
    await user.click(screen.getByRole('button', { name: /生成游戏/ }))

    await waitFor(() => {
      expect(mockGenerateGames).toHaveBeenCalledWith({
        email: 'test@example.com',
        ageMonths: 30,
        scenario: 'home',
        toolPref: 'hands',
        focus: 'fine'
      })
    })

    expect(mockOnGamesGenerated).toHaveBeenCalledWith({
      games: [
        {
          id: 1,
          name: '测试游戏',
          description: '测试描述',
          age_min: 24,
          age_max: 36
        }
      ],
      sessionId: 'session-123'
    })
  })

  it('should handle API errors', async () => {
    const user = userEvent.setup()
    
    mockGenerateGames.mockResolvedValue({
      success: false,
      error: '服务器错误'
    })

    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    // Fill and submit form
    await user.type(screen.getByLabelText(/邮箱/), 'test@example.com')
    await user.type(screen.getByLabelText(/孩子年龄/), '30')
    await user.selectOptions(screen.getByLabelText(/游戏场景/), 'home')
    
    await user.click(screen.getByRole('button', { name: /生成游戏/ }))

    await waitFor(() => {
      expect(screen.getByText(/服务器错误/)).toBeInTheDocument()
    })

    expect(mockOnGamesGenerated).not.toHaveBeenCalled()
  })

  it('should show loading state during submission', async () => {
    const user = userEvent.setup()
    
    // Mock a delayed response
    mockGenerateGames.mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        success: true,
        data: { games: [], sessionId: null }
      }), 100))
    )

    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    // Fill and submit form
    await user.type(screen.getByLabelText(/邮箱/), 'test@example.com')
    await user.selectOptions(screen.getByLabelText(/游戏场景/), 'home')
    
    await user.click(screen.getByRole('button', { name: /生成游戏/ }))

    expect(screen.getByText(/生成中.../)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /生成中.../ })).toBeDisabled()

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /生成游戏/ })).toBeEnabled()
    })
  })

  it('should reset form after successful submission', async () => {
    const user = userEvent.setup()
    
    mockGenerateGames.mockResolvedValue({
      success: true,
      data: { games: [], sessionId: null }
    })

    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    const emailInput = screen.getByLabelText(/邮箱/) as HTMLInputElement
    const ageInput = screen.getByLabelText(/孩子年龄/) as HTMLInputElement

    // Fill form
    await user.type(emailInput, 'test@example.com')
    await user.type(ageInput, '30')
    await user.selectOptions(screen.getByLabelText(/游戏场景/), 'home')

    // Submit form
    await user.click(screen.getByRole('button', { name: /生成游戏/ }))

    await waitFor(() => {
      expect(emailInput.value).toBe('')
      expect(ageInput.value).toBe('24')
    })
  })

  it('should handle different scenario options', async () => {
    const user = userEvent.setup()
    
    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    const scenarioSelect = screen.getByLabelText(/游戏场景/)
    
    expect(screen.getByText('家中')).toBeInTheDocument()
    expect(screen.getByText('户外')).toBeInTheDocument()
    expect(screen.getByText('车内')).toBeInTheDocument()

    await user.selectOptions(scenarioSelect, 'outdoor')
    expect((scenarioSelect as HTMLSelectElement).value).toBe('outdoor')
  })

  it('should handle different tool preferences', async () => {
    const user = userEvent.setup()
    
    render(
      <GameForm 
        onSubmit={mockOnSubmit}
        onGamesGenerated={mockOnGamesGenerated}
      />
    )

    const toolSelect = screen.getByLabelText(/道具偏好/)
    
    expect(screen.getByText('任意道具')).toBeInTheDocument()
    expect(screen.getByText('徒手游戏')).toBeInTheDocument()
    expect(screen.getByText('积木拼图')).toBeInTheDocument()

    await user.selectOptions(toolSelect, 'blocks_puzzle')
    expect((toolSelect as HTMLSelectElement).value).toBe('blocks_puzzle')
  })
})