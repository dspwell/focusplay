/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server'
import { GET, PUT, DELETE } from '@/app/api/admin/games/[gameId]/route'

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
  }))
}

jest.mock('@supabase/auth-helpers-nextjs', () => ({
  createRouteHandlerClient: jest.fn(() => mockSupabase)
}))

jest.mock('next/headers', () => ({
  cookies: jest.fn()
}))

describe('/api/admin/games/[gameId]', () => {
  const mockAdminSession = {
    data: { session: { user: { id: 'admin-user-id' } } },
    error: null
  }

  const mockAdminProfile = {
    data: { role: 'admin' },
    error: null
  }

  const mockSuperAdminProfile = {
    data: { role: 'super_admin' },
    error: null
  }

  const mockGame = {
    id: 1,
    name: '测试游戏',
    description: '测试描述',
    age_min: 24,
    age_max: 36,
    difficulty: 2,
    scenario: 'home',
    tool: 'hands',
    focuses: ['fine'],
    is_active: true
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /api/admin/games/[gameId]', () => {
    it('should return game details for admin user', async () => {
      mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
      mockSupabase.from().select().eq().single
        .mockResolvedValueOnce(mockAdminProfile)
        .mockResolvedValueOnce({ data: mockGame, error: null })

      const request = new NextRequest('http://localhost:3000/api/admin/games/1')
      const response = await GET(request, { params: { gameId: '1' } })
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.game.name).toBe('测试游戏')
    })

    it('should return 404 for non-existent game', async () => {
      mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
      mockSupabase.from().select().eq().single
        .mockResolvedValueOnce(mockAdminProfile)
        .mockResolvedValueOnce({ data: null, error: { message: 'Not found' } })

      const request = new NextRequest('http://localhost:3000/api/admin/games/999')
      const response = await GET(request, { params: { gameId: '999' } })
      const data = await response.json()

      expect(response.status).toBe(404)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Game not found')
    })

    it('should return 401 for unauthenticated user', async () => {
      mockSupabase.auth.getSession.mockResolvedValue({
        data: { session: null },
        error: null
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games/1')
      const response = await GET(request, { params: { gameId: '1' } })
      const data = await response.json()

      expect(response.status).toBe(401)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Unauthorized')
    })
  })

  describe('PUT /api/admin/games/[gameId]', () => {
    const updateData = {
      name: '更新的游戏',
      description: '更新的描述',
      difficulty: 3
    }

    it('should update game for admin user', async () => {
      mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
      mockSupabase.from().select().eq().single
        .mockResolvedValueOnce(mockAdminProfile)

      const updatedGame = { ...mockGame, ...updateData }
      mockSupabase.from().update().eq().select().single.mockResolvedValue({
        data: updatedGame,
        error: null
      })

      // Mock analytics insert
      mockSupabase.from().insert.mockResolvedValue({
        data: null,
        error: null
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games/1', {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await PUT(request, { params: { gameId: '1' } })
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.game.name).toBe('更新的游戏')
    })

    it('should validate update data', async () => {
      mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
      mockSupabase.from().select().eq().single.mockResolvedValue(mockAdminProfile)

      const invalidData = { difficulty: 6 }

      const request = new NextRequest('http://localhost:3000/api/admin/games/1', {
        method: 'PUT',
        body: JSON.stringify(invalidData),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await PUT(request, { params: { gameId: '1' } })
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Difficulty must be between 1-5')
    })

    it('should handle database errors', async () => {
      mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
      mockSupabase.from().select().eq().single.mockResolvedValue(mockAdminProfile)

      mockSupabase.from().update().eq().select().single.mockResolvedValue({
        data: null,
        error: { message: 'Database error' }
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games/1', {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await PUT(request, { params: { gameId: '1' } })
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Failed to update game')
    })
  })

  describe('DELETE /api/admin/games/[gameId]', () => {
    it('should delete game for super admin user', async () => {
      mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
      mockSupabase.from().select().eq().single.mockResolvedValue(mockSuperAdminProfile)

      mockSupabase.from().delete().eq.mockResolvedValue({
        data: null,
        error: null
      })

      // Mock analytics insert
      mockSupabase.from().insert.mockResolvedValue({
        data: null,
        error: null
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games/1', {
        method: 'DELETE'
      })

      const response = await DELETE(request, { params: { gameId: '1' } })
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.message).toBe('Game deleted successfully')
    })

    it('should return 403 for regular admin user', async () => {
      mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
      mockSupabase.from().select().eq().single.mockResolvedValue(mockAdminProfile)

      const request = new NextRequest('http://localhost:3000/api/admin/games/1', {
        method: 'DELETE'
      })

      const response = await DELETE(request, { params: { gameId: '1' } })
      const data = await response.json()

      expect(response.status).toBe(403)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Only super admins can delete games')
    })

    it('should handle deletion errors', async () => {
      mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
      mockSupabase.from().select().eq().single.mockResolvedValue(mockSuperAdminProfile)

      mockSupabase.from().delete().eq.mockResolvedValue({
        data: null,
        error: { message: 'Cannot delete game with active sessions' }
      })

      const request = new NextRequest('http://localhost:3000/api/admin/games/1', {
        method: 'DELETE'
      })

      const response = await DELETE(request, { params: { gameId: '1' } })
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Failed to delete game')
    })
  })
})