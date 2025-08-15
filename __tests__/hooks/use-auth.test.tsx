import React from 'react'
import { renderHook, act } from '@testing-library/react'
import { useAuth, AuthProvider } from '@/lib/auth-context'

// Mock Supabase client
const mockSupabaseClient = {
  auth: {
    getSession: jest.fn(),
    signInWithPassword: jest.fn(),
    signUp: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChange: jest.fn(() => ({
      data: { subscription: { unsubscribe: jest.fn() } }
    }))
  },
  from: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
  }))
}

jest.mock('@/lib/supabase', () => ({
  createClient: () => mockSupabaseClient
}))

// Mock useErrorHandler
jest.mock('@/hooks/use-error-handler', () => ({
  useErrorHandler: () => ({
    handleError: jest.fn(),
    handleAsyncOperation: jest.fn()
  })
}))

// Mock toast
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}))

// Wrapper component for tests
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
)

describe('useAuth', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should initialize with loading state', () => {
    mockSupabaseClient.auth.getSession.mockResolvedValue({
      data: { session: null },
      error: null
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    expect(result.current.loading).toBe(true)
    expect(result.current.user).toBeNull()
    expect(result.current.profile).toBeNull()
  })

  it('should handle successful authentication', async () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com',
      user_metadata: {}
    }

    const mockProfile = {
      id: 'user-123',
      email: 'test@example.com',
      role: 'user',
      child_age_months: 30
    }

    mockSupabaseClient.auth.getSession.mockResolvedValue({
      data: { session: { user: mockUser } },
      error: null
    })

    mockSupabaseClient.from().select().eq().single.mockResolvedValue({
      data: mockProfile,
      error: null
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    // Wait for async operations
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.loading).toBe(false)
    expect(result.current.user).toEqual(mockUser)
    expect(result.current.profile).toEqual(mockProfile)
  })

  it('should handle sign in', async () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com'
    }

    mockSupabaseClient.auth.signInWithPassword.mockResolvedValue({
      data: { user: mockUser, session: { user: mockUser } },
      error: null
    })

    mockSupabaseClient.from().select().eq().single.mockResolvedValue({
      data: { id: 'user-123', email: 'test@example.com', role: 'user' },
      error: null
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await result.current.signIn('test@example.com', 'password')
    })

    expect(mockSupabaseClient.auth.signInWithPassword).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password'
    })
  })

  it('should handle sign in errors', async () => {
    const mockError = { message: 'Invalid credentials' }

    mockSupabaseClient.auth.signInWithPassword.mockResolvedValue({
      data: { user: null, session: null },
      error: mockError
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      try {
        await result.current.signIn('test@example.com', 'wrong-password')
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
      }
    })
  })

  it('should handle sign up', async () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com'
    }

    mockSupabaseClient.auth.signUp.mockResolvedValue({
      data: { user: mockUser, session: null },
      error: null
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await result.current.signUp('test@example.com', 'password')
    })

    expect(mockSupabaseClient.auth.signUp).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
      options: {
        data: {
          display_name: undefined
        }
      }
    })
  })

  it('should handle sign out', async () => {
    mockSupabaseClient.auth.signOut.mockResolvedValue({
      error: null
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await result.current.signOut()
    })

    expect(mockSupabaseClient.auth.signOut).toHaveBeenCalled()
  })

  it('should update profile', async () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com'
    }

    // Initial setup
    mockSupabaseClient.auth.getSession.mockResolvedValue({
      data: { session: { user: mockUser } },
      error: null
    })

    const updatedProfile = {
      id: 'user-123',
      email: 'test@example.com',
      role: 'user',
      child_age_months: 36
    }

    mockSupabaseClient.from().update().eq.mockResolvedValue({
      data: null,
      error: null
    })

    mockSupabaseClient.from().select().eq().single.mockResolvedValue({
      data: updatedProfile,
      error: null
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await result.current.updateProfile({ child_age_months: 36 })
    })

    expect(mockSupabaseClient.from().update).toHaveBeenCalled()
  })

  it('should handle profile update errors', async () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com'
    }

    mockSupabaseClient.auth.getSession.mockResolvedValue({
      data: { session: { user: mockUser } },
      error: null
    })

    const mockError = { message: 'Update failed' }

    mockSupabaseClient.from().update().eq.mockResolvedValue({
      data: null,
      error: mockError
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      try {
        await result.current.updateProfile({ child_age_months: 36 })
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
      }
    })
  })

  it('should handle unauthenticated profile update', async () => {
    mockSupabaseClient.auth.getSession.mockResolvedValue({
      data: { session: null },
      error: null
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      try {
        await result.current.updateProfile({ child_age_months: 36 })
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
      }
    })
  })

  it('should handle profile fetch errors', async () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com'
    }

    mockSupabaseClient.auth.getSession.mockResolvedValue({
      data: { session: { user: mockUser } },
      error: null
    })

    mockSupabaseClient.from().select().eq().single.mockResolvedValue({
      data: null,
      error: { message: 'Profile not found' }
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.loading).toBe(false)
    expect(result.current.user).toEqual(mockUser)
    expect(result.current.profile).toBeNull()
  })

  it('should handle auth state changes', async () => {
    let authCallback: any = null

    mockSupabaseClient.auth.onAuthStateChange.mockImplementation((callback) => {
      authCallback = callback
      return { data: { subscription: { unsubscribe: jest.fn() } } }
    })

    mockSupabaseClient.auth.getSession.mockResolvedValue({
      data: { session: null },
      error: null
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    // Simulate auth state change
    const newUser = { id: 'user-456', email: 'new@example.com' }
    const newProfile = { id: 'user-456', email: 'new@example.com', role: 'user' }

    mockSupabaseClient.from().select().eq().single.mockResolvedValue({
      data: newProfile,
      error: null
    })

    await act(async () => {
      authCallback('SIGNED_IN', { user: newUser })
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.user).toEqual(newUser)
    expect(result.current.profile).toEqual(newProfile)
  })

  it('should create profile for new users during sign up', async () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com'
    }

    // Mock profile doesn't exist
    mockSupabaseClient.from().select().eq().single.mockResolvedValueOnce({
      data: null,
      error: { message: 'Profile not found' }
    })

    // Mock profile creation
    const newProfile = {
      id: 'user-123',
      email: 'test@example.com',
      role: 'user'
    }

    mockSupabaseClient.from().insert().select().single.mockResolvedValue({
      data: newProfile,
      error: null
    })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      // Simulate auth state change for new user
      const authCallback = mockSupabaseClient.auth.onAuthStateChange.mock.calls[0][0]
      authCallback('SIGNED_IN', { user: mockUser })
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(mockSupabaseClient.from().insert).toHaveBeenCalledWith({
      id: 'user-123',
      email: 'test@example.com',
      role: 'user'
    })
  })
})