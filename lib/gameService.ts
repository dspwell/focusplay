import { createClient } from './supabase'

export interface GameFromDatabase {
  id: string
  name: string
  age_range: string
  scene: string
  props: string
  focus: string
  core_goal: string
  materials: string
  steps: string[]
  tips: string[]
  safety_notes?: string
  extensions?: string
  duration: number
  difficulty: number
  activity_type: 'quiet' | 'active'
}

export interface GameFilters {
  ageRange?: string
  scene?: string
  props?: string
  focus?: string
}

class GameService {
  private supabase = createClient()

  /**
   * Get a random game based on filters
   */
  async getRandomGame(filters: GameFilters): Promise<GameFromDatabase | null> {
    try {
      let query = this.supabase.from('games').select('*')

      // Apply filters
      if (filters.ageRange) {
        query = query.eq('age_range', filters.ageRange)
      }
      if (filters.scene) {
        query = query.eq('scene', filters.scene)
      }
      if (filters.props) {
        query = query.eq('props', filters.props)
      }
      if (filters.focus) {
        query = query.eq('focus', filters.focus)
      }

      const { data: games, error } = await query

      if (error) {
        console.error('Error fetching games:', error)
        return null
      }

      if (!games || games.length === 0) {
        console.log('No games found matching criteria:', filters)
        return null
      }

      // Return a random game from matching results
      const randomIndex = Math.floor(Math.random() * games.length)
      return games[randomIndex]
    } catch (error) {
      console.error('Exception in getRandomGame:', error)
      return null
    }
  }

  /**
   * Get all games with optional filters
   */
  async getGames(filters: GameFilters = {}): Promise<GameFromDatabase[]> {
    try {
      let query = this.supabase.from('games').select('*')

      // Apply filters
      if (filters.ageRange) {
        query = query.eq('age_range', filters.ageRange)
      }
      if (filters.scene) {
        query = query.eq('scene', filters.scene)
      }
      if (filters.props) {
        query = query.eq('props', filters.props)
      }
      if (filters.focus) {
        query = query.eq('focus', filters.focus)
      }

      const { data: games, error } = await query.order('name')

      if (error) {
        console.error('Error fetching games:', error)
        return []
      }

      return games || []
    } catch (error) {
      console.error('Exception in getGames:', error)
      return []
    }
  }

  /**
   * Get a specific game by ID
   */
  async getGameById(id: string): Promise<GameFromDatabase | null> {
    try {
      const { data: game, error } = await this.supabase
        .from('games')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Error fetching game by ID:', error)
        return null
      }

      return game
    } catch (error) {
      console.error('Exception in getGameById:', error)
      return null
    }
  }

  /**
   * Get games count with filters
   */
  async getGamesCount(filters: GameFilters = {}): Promise<number> {
    try {
      let query = this.supabase.from('games').select('*', { count: 'exact', head: true })

      // Apply filters
      if (filters.ageRange) {
        query = query.eq('age_range', filters.ageRange)
      }
      if (filters.scene) {
        query = query.eq('scene', filters.scene)
      }
      if (filters.props) {
        query = query.eq('props', filters.props)
      }
      if (filters.focus) {
        query = query.eq('focus', filters.focus)
      }

      const { count, error } = await query

      if (error) {
        console.error('Error getting games count:', error)
        return 0
      }

      return count || 0
    } catch (error) {
      console.error('Exception in getGamesCount:', error)
      return 0
    }
  }

  /**
   * Get games statistics
   */
  async getGameStatistics() {
    try {
      // Get total count
      const totalCount = await this.getGamesCount()

      // Get count by age range
      const ageRangeStats = await Promise.all([
        this.getGamesCount({ ageRange: '2-2.5' }),
        this.getGamesCount({ ageRange: '2.5-3' }),
        this.getGamesCount({ ageRange: '3-4' })
      ])

      // Get count by scene
      const sceneStats = await Promise.all([
        this.getGamesCount({ scene: 'home' }),
        this.getGamesCount({ scene: 'outdoor' }),
        this.getGamesCount({ scene: 'waiting' }),
        this.getGamesCount({ scene: 'bedtime' }),
        this.getGamesCount({ scene: 'travel' })
      ])

      // Get count by focus
      const focusStats = await Promise.all([
        this.getGamesCount({ focus: 'fine' }),
        this.getGamesCount({ focus: 'language' }),
        this.getGamesCount({ focus: 'cognition' }),
        this.getGamesCount({ focus: 'gross' }),
        this.getGamesCount({ focus: 'social' })
      ])

      return {
        total: totalCount,
        byAgeRange: {
          '2-2.5': ageRangeStats[0],
          '2.5-3': ageRangeStats[1],
          '3-4': ageRangeStats[2]
        },
        byScene: {
          'home': sceneStats[0],
          'outdoor': sceneStats[1],
          'waiting': sceneStats[2],
          'bedtime': sceneStats[3],
          'travel': sceneStats[4]
        },
        byFocus: {
          'fine': focusStats[0],
          'language': focusStats[1],
          'cognition': focusStats[2],
          'gross': focusStats[3],
          'social': focusStats[4]
        }
      }
    } catch (error) {
      console.error('Error getting game statistics:', error)
      return null
    }
  }
}

// Export singleton instance
export const gameService = new GameService()

// Helper function for backward compatibility with existing API
export function getRandomGameFromDatabase(
  ageRange: string,
  scene: string,
  props: string,
  focus?: string
): Promise<GameFromDatabase | null> {
  return gameService.getRandomGame({ ageRange, scene, props, focus })
}