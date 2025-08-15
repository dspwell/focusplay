/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server'
import { GET, POST } from '@/app/api/admin/games/route'

// Mock Supabase
const mockSupabase = {
  auth: {
    getSession: jest.fn()
  },
  from: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
    order: jest.fn().mockReturnThis(),
    range: jest.fn().mockReturnThis(),
    or: jest.fn().mockReturnThis(),
    contains: jest.fn().mockReturnThis(),
  }))
}

jest.mock('@supabase/auth-helpers-nextjs', () => ({
  createRouteHandlerClient: jest.fn(() => mockSupabase)
}))

jest.mock('next/headers', () => ({
  cookies: jest.fn()
}))

describe('/api/admin/games', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /api/admin/games', () => {
    it('should return games list for admin user', async () => {
      // Mock admin user session
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: { user: { id: 'admin-user-id' } } },
        error: null
      })

      // Mock admin profile
      mockSupabase.from().select().eq().single.mockResolvedValue({
        data: { role: 'admin' },
        error: null
      })

      // Mock games data
      const mockGames = [
        {
          id: 1,
          name: '测试游戏1',
          description: '描述1',
          age_min: 24,
          age_max: 36,
          scenario: 'home',
          tool: 'hands'
        }
      ]

      mockSupabase.from().select().order().range.mockResolvedValue({
        data: mockGames,
        error: null,
        count: 1
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.games).toHaveLength(1)
      expect(data.data.pagination.total).toBe(1)
    })

    it('should return 401 for unauthenticated user', async () => {
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: null },
        error: null
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(401)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Unauthorized')
    })

    it('should return 403 for non-admin user', async () => {
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: { user: { id: 'regular-user-id' } } },
        error: null
      })

      mockSupabase.from().select().eq().single.mockResolvedValue({
        data: { role: 'user' },
        error: null
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(403)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Forbidden')
    })

    it('should handle search and filters', async () => {
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: { user: { id: 'admin-user-id' } } },
        error: null
      })

      mockSupabase.from().select().eq().single.mockResolvedValue({
        data: { role: 'admin' },
        error: null
      })

      mockSupabase.from().select().order().range.mockResolvedValue({
        data: [],
        error: null,
        count: 0
      })

      const url = 'http://localhost:3000/api/admin/games?search=测试&scenario=home&page=2'
      const request = new NextRequest(url)
      const response = await GET(request)

      expect(response.status).toBe(200)
      expect(mockSupabase.from().or).toHaveBeenCalledWith('name.ilike.%测试%,description.ilike.%测试%')
      expect(mockSupabase.from().eq).toHaveBeenCalledWith('scenario', 'home')
    })
  })

  describe('POST /api/admin/games', () => {
    const validGameData = {
      name: '新游戏',
      description: '新游戏描述',
      age_min: 24,
      age_max: 36,
      difficulty: 2,
      scenario: 'home',
      tool: 'hands',
      focuses: ['fine'],
      is_active: true
    }

    it('should create game for admin user', async () => {
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: { user: { id: 'admin-user-id' } } },
        error: null
      })

      mockSupabase.from().select().eq().single.mockResolvedValue({
        data: { role: 'admin' },
        error: null
      })

      const mockCreatedGame = { id: 1, ...validGameData }
      mockSupabase.from().insert().select().single.mockResolvedValue({
        data: mockCreatedGame,
        error: null
      })

      // Mock analytics insert
      mockSupabase.from().insert.mockResolvedValue({
        data: null,
        error: null
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games', {
        method: 'POST',
        body: JSON.stringify(validGameData),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.game.name).toBe('新游戏')
    })

    it('should validate required fields', async () => {
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: { user: { id: 'admin-user-id' } } },
        error: null
      })

      mockSupabase.from().select().eq().single.mockResolvedValue({
        data: { role: 'admin' },
        error: null
      })

      const invalidGameData = { ...validGameData, name: '' }

      const request = new NextRequest('http://localhost:3000/api/admin/games', {
        method: 'POST',
        body: JSON.stringify(invalidGameData),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Missing required fields')
    })

    it('should validate age range', async () => {
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: { user: { id: 'admin-user-id' } } },
        error: null
      })

      mockSupabase.from().select().eq().single.mockResolvedValue({
        data: { role: 'admin' },
        error: null
      })

      const invalidGameData = { ...validGameData, age_min: 20, age_max: 60 }

      const request = new NextRequest('http://localhost:3000/api/admin/games', {
        method: 'POST',
        body: JSON.stringify(invalidGameData),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error).toContain('Invalid age range')
    })

    it('should validate difficulty range', async () => {
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: { user: { id: 'admin-user-id' } } },
        error: null
      })

      mockSupabase.from().select().eq().single.mockResolvedValue({
        data: { role: 'admin' },
        error: null
      })

      const invalidGameData = { ...validGameData, difficulty: 6 }

      const request = new NextRequest('http://localhost:3000/api/admin/games', {
        method: 'POST',
        body: JSON.stringify(invalidGameData),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Difficulty must be between 1-5')
    })

    it('should handle database errors', async () => {
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: { user: { id: 'admin-user-id' } } },
        error: null
      })

      mockSupabase.from().select().eq().single.mockResolvedValue({
        data: { role: 'admin' },
        error: null
      })

      mockSupabase.from().insert().select().single.mockResolvedValue({
        data: null,
        error: { message: 'Database error' }
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games', {
        method: 'POST',
        body: JSON.stringify(validGameData),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Failed to create game')
    })
  })
})