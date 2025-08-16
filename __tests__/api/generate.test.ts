/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server'
import { POST } from '@/app/api/generate/route'

// Mock Supabase
const mockSupabase = {
  from: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    gte: jest.fn().mockReturnThis(),
    lte: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    single: jest.fn(),
    order: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
  }))
}

jest.mock('@supabase/auth-helpers-nextjs', () => ({
  createRouteHandlerClient: jest.fn(() => mockSupabase)
}))

jest.mock('next/headers', () => ({
  cookies: jest.fn()
}))

// Mock pickActivities
const mockPickActivities = jest.fn()
jest.mock('@/lib/pickactivities', () => ({
  pickActivities: mockPickActivities
}))

describe('/api/generate', () => {
  const validRequest = {
    email: 'test@example.com',
    ageMonths: 30,
    scenario: 'home',
    toolPref: 'hands',
    focus: 'fine'
  }

  const mockActivities = [
    {
      id: '1',
      name: '手指游戏',
      description: '锻炼精细动作',
      age_min: 24,
      age_max: 36,
      duration_min: 10,
      mode: 'quiet',
      tool: 'hands',
      focuses: ['fine'],
      safety_notes: '注意安全'
    },
    {
      id: '2',
      name: '积木游戏',
      description: '锻炼认知能力',
      age_min: 30,
      age_max: 48,
      duration_min: 15,
      mode: 'active',
      tool: 'blocks_puzzle',
      focuses: ['cognition'],
    }
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    mockPickActivities.mockReturnValue(mockActivities)
  })

  it('should generate games with valid request', async () => {
    // Mock database queries
    mockSupabase.from().select().eq().gte().lte().order().limit.mockResolvedValue({
      data: mockActivities,
      error: null
    })

    mockSupabase.from().insert().single.mockResolvedValue({
      data: { id: 'session-123' },
      error: null
    })

    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify(validRequest),
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.data.games).toHaveLength(2)
    expect(data.data.sessionId).toBe('session-123')
    expect(mockPickActivities).toHaveBeenCalledWith(
      mockActivities,
      expect.objectContaining({
        ageMonths: 30,
        scenario: 'home',
        toolPref: 'hands',
        focus: 'fine'
      })
    )
  })

  it('should validate required fields', async () => {
    const invalidRequest = { ...validRequest, email: '' }

    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify(invalidRequest),
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toContain('必填字段')
  })

  it('should validate email format', async () => {
    const invalidRequest = { ...validRequest, email: 'invalid-email' }

    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify(invalidRequest),
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toContain('邮箱格式不正确')
  })

  it('should validate age range', async () => {
    const invalidRequest = { ...validRequest, ageMonths: 20 }

    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify(invalidRequest),
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toContain('年龄必须在24-48个月之间')
  })

  it('should validate scenario values', async () => {
    const invalidRequest = { ...validRequest, scenario: 'invalid' }

    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify(invalidRequest),
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toContain('场景必须是')
  })

  it('should handle database errors', async () => {
    mockSupabase.from().select().eq().gte().lte().order().limit.mockResolvedValue({
      data: null,
      error: { message: 'Database connection failed' }
    })

    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify(validRequest),
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.success).toBe(false)
    expect(data.error).toBe('游戏生成失败，请稍后重试')
  })

  it('should handle no matching activities', async () => {
    mockSupabase.from().select().eq().gte().lte().order().limit.mockResolvedValue({
      data: [],
      error: null
    })

    mockPickActivities.mockReturnValue([])

    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify(validRequest),
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.data.games).toHaveLength(0)
    expect(data.message).toContain('没有找到符合条件的游戏')
  })

  it('should handle session creation failure', async () => {
    mockSupabase.from().select().eq().gte().lte().order().limit.mockResolvedValue({
      data: mockActivities,
      error: null
    })

    mockSupabase.from().insert().single.mockResolvedValue({
      data: null,
      error: { message: 'Session creation failed' }
    })

    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify(validRequest),
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.data.games).toHaveLength(2)
    expect(data.data.sessionId).toBeNull()
  })

  it('should handle malformed JSON', async () => {
    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: 'invalid json',
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toContain('请求格式错误')
  })

  it('should include safety notes in response', async () => {
    mockSupabase.from().select().eq().gte().lte().order().limit.mockResolvedValue({
      data: [mockActivities[0]], // Only activity with safety_notes
      error: null
    })

    mockPickActivities.mockReturnValue([mockActivities[0]])

    mockSupabase.from().insert().single.mockResolvedValue({
      data: { id: 'session-123' },
      error: null
    })

    const request = new NextRequest('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify(validRequest),
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.data.games[0].safety_notes).toBe('注意安全')
  })
})