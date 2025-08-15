/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server'
import { GET } from '@/app/api/admin/dashboard/route'

// Mock Supabase
const mockSupabase = {
  auth: {
    getSession: jest.fn()
  },
  from: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    gte: jest.fn().mockReturnThis(),
    single: jest.fn(),
    order: jest.fn().mockReturnThis(),
  }))
}

jest.mock('@supabase/auth-helpers-nextjs', () => ({
  createRouteHandlerClient: jest.fn(() => mockSupabase)
}))

jest.mock('next/headers', () => ({
  cookies: jest.fn()
}))

describe('/api/admin/dashboard', () => {
  const mockAdminSession = {
    data: { session: { user: { id: 'admin-user-id' } } },
    error: null
  }

  const mockAdminProfile = {
    data: { role: 'admin' },
    error: null
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return dashboard data for admin user', async () => {
    mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
    mockSupabase.from().select().eq().single.mockResolvedValue(mockAdminProfile)

    // Mock statistics queries
    const mockStats = [
      { data: [{ count: 150 }], error: null }, // total users
      { data: [{ count: 45 }], error: null },  // total games
      { data: [{ count: 1200 }], error: null }, // total sessions
      { data: [{ count: 85 }], error: null },  // active plans
      { data: [{ count: 12 }], error: null },  // new users (30 days)
      { data: [{ count: 89 }], error: null },  // active sessions (30 days)
    ]

    let callCount = 0
    mockSupabase.from().select().single = jest.fn(() => {
      const result = mockStats[callCount] || { data: [{ count: 0 }], error: null }
      callCount++
      return Promise.resolve(result)
    })

    // Mock trends data
    const mockTrends = [
      {
        data: [
          { date: '2024-01-01', count: 10 },
          { date: '2024-01-02', count: 15 },
        ],
        error: null
      },
      {
        data: [
          { date: '2024-01-01', count: 5 },
          { date: '2024-01-02', count: 8 },
        ],
        error: null
      }
    ]

    let trendCallCount = 0
    mockSupabase.from().select().gte().order = jest.fn(() => {
      const result = mockTrends[trendCallCount] || { data: [], error: null }
      trendCallCount++
      return Promise.resolve(result)
    })

    const request = new NextRequest('http://localhost:3000/api/admin/dashboard')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.data.statistics.totalUsers).toBe(150)
    expect(data.data.statistics.totalGames).toBe(45)
    expect(data.data.statistics.totalSessions).toBe(1200)
    expect(data.data.statistics.activePlans).toBe(85)
    expect(data.data.statistics.newUsers30Days).toBe(12)
    expect(data.data.statistics.activeSessions30Days).toBe(89)
    expect(data.data.trends.userTrends).toHaveLength(2)
    expect(data.data.trends.sessionTrends).toHaveLength(2)
  })

  it('should return 401 for unauthenticated user', async () => {
    mockSupabase.auth.getSession.mockResolvedValue({
      data: { session: null },
      error: null
    })

    const request = new NextRequest('http://localhost:3000/api/admin/dashboard')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(401)
    expect(data.success).toBe(false)
    expect(data.error).toBe('Unauthorized')
  })

  it('should return 403 for non-admin user', async () => {
    mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
    mockSupabase.from().select().eq().single.mockResolvedValue({
      data: { role: 'user' },
      error: null
    })

    const request = new NextRequest('http://localhost:3000/api/admin/dashboard')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(403)
    expect(data.success).toBe(false)
    expect(data.error).toBe('Forbidden')
  })

  it('should handle database errors gracefully', async () => {
    mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
    mockSupabase.from().select().eq().single.mockResolvedValue(mockAdminProfile)

    // Mock database error
    mockSupabase.from().select().single.mockResolvedValue({
      data: null,
      error: { message: 'Database connection failed' }
    })

    const request = new NextRequest('http://localhost:3000/api/admin/dashboard')
    const response = await GET(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.success).toBe(false)
    expect(data.error).toBe('Failed to fetch dashboard data')
  })

  it('should handle partial data failures', async () => {
    mockSupabase.auth.getSession.mockResolvedValue(mockAdminSession)
    mockSupabase.from().select().eq().single.mockResolvedValue(mockAdminProfile)

    // Mock mixed success/failure responses
    const mockMixedStats = [
      { data: [{ count: 150 }], error: null }, // success
      { data: null, error: { message: 'Query failed' } }, // failure
      { data: [{ count: 1200 }], error: null }, // success
    ]

    let callCount = 0
    mockSupabase.from().select().single = jest.fn(() => {
      const result = mockMixedStats[callCount] || { data: [{ count: 0 }], error: null }
      callCount++
      return Promise.resolve(result)
    })

    mockSupabase.from().select().gte().order = jest.fn(() => 
      Promise.resolve({ data: [], error: null })
    )

    const request = new NextRequest('http://localhost:3000/api/admin/dashboard')
    const response = await GET(request)
    const data = await response.json()

    // Should still return data for successful queries
    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.data.statistics.totalUsers).toBe(150)
    expect(data.data.statistics.totalSessions).toBe(1200)
  })
})