import { generateGames } from '@/lib/gameService'
import type { Scenario, Tool, Focus } from '@/lib/types'

describe('GameService', () => {
  describe('generateGames', () => {
    const validRequest = {
      email: 'test@example.com',
      ageMonths: 30,
      scenario: 'home' as Scenario,
      toolPref: 'hands' as Tool,
      focus: 'fine' as Focus
    }

    beforeEach(() => {
      // Mock fetch
      global.fetch = jest.fn()
    })

    it('should generate games with valid input', async () => {
      const mockGames = [
        {
          id: 1,
          name: '测试游戏',
          description: '测试描述',
          age_min: 24,
          age_max: 36,
          scenario: 'home',
          tool: 'hands',
          focuses: ['fine']
        }
      ]

      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, data: { games: mockGames } })
      })

      const result = await generateGames(validRequest)

      expect(result.success).toBe(true)
      expect(result.data?.games).toHaveLength(1)
      expect(result.data?.games[0].name).toBe('测试游戏')
    })

    it('should handle API errors', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => ({ error: 'Internal server error' })
      })

      const result = await generateGames(validRequest)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Internal server error')
    })

    it('should handle network errors', async () => {
      ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))

      const result = await generateGames(validRequest)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Network error')
    })

    it('should validate age range', async () => {
      const invalidRequest = { ...validRequest, ageMonths: 20 }

      const result = await generateGames(invalidRequest)

      expect(result.success).toBe(false)
      expect(result.error).toContain('年龄必须在24-48个月之间')
    })

    it('should validate email format', async () => {
      const invalidRequest = { ...validRequest, email: 'invalid-email' }

      const result = await generateGames(invalidRequest)

      expect(result.success).toBe(false)
      expect(result.error).toContain('邮箱格式不正确')
    })

    it('should handle missing required fields', async () => {
      const invalidRequest = { ...validRequest, scenario: '' as any }

      const result = await generateGames(invalidRequest)

      expect(result.success).toBe(false)
      expect(result.error).toContain('必填字段')
    })

    it('should filter games by age range', async () => {
      const mockGames = [
        { id: 1, age_min: 24, age_max: 30, name: '适合游戏' },
        { id: 2, age_min: 36, age_max: 48, name: '不适合游戏' }
      ]

      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, data: { games: mockGames } })
      })

      const request = { ...validRequest, ageMonths: 28 }
      const result = await generateGames(request)

      expect(result.success).toBe(true)
      // 应该过滤掉不适合年龄的游戏
      expect(result.data?.games).toHaveLength(1)
      expect(result.data?.games[0].name).toBe('适合游戏')
    })

    it('should handle empty response', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, data: { games: [] } })
      })

      const result = await generateGames(validRequest)

      expect(result.success).toBe(true)
      expect(result.data?.games).toHaveLength(0)
    })
  })
})