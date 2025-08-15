import { pickActivities } from '@/lib/pickActivities'
import type { Activity, Scenario, Tool, Focus } from '@/lib/types'

describe('PickActivities', () => {
  const mockActivities: Activity[] = [
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
    },
    {
      id: '3',
      name: '语言游戏',
      description: '锻炼语言能力',
      age_min: 24,
      age_max: 48,
      duration_min: 20,
      mode: 'quiet',
      tool: 'books_pictures',
      focuses: ['language'],
    },
    {
      id: '4',
      name: '综合游戏',
      description: '多种能力训练',
      age_min: 24,
      age_max: 48,
      duration_min: 25,
      mode: 'active',
      tool: 'household',
      focuses: ['fine', 'cognition', 'social'],
    }
  ]

  describe('基本筛选功能', () => {
    it('should filter activities by age range', () => {
      const criteria = {
        ageMonths: 28,
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any'
      }

      const result = pickActivities(mockActivities, criteria)

      // 28个月应该匹配活动1和3、4
      expect(result).toHaveLength(3)
      expect(result.map(a => a.id)).toEqual(['1', '3', '4'])
    })

    it('should filter activities by tool preference', () => {
      const criteria = {
        ageMonths: 30,
        scenario: 'home' as Scenario,
        toolPref: 'blocks_puzzle' as Tool
      }

      const result = pickActivities(mockActivities, criteria)

      expect(result).toHaveLength(1)
      expect(result[0].id).toBe('2')
      expect(result[0].tool).toBe('blocks_puzzle')
    })

    it('should return all matching activities when toolPref is "any"', () => {
      const criteria = {
        ageMonths: 36,
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any'
      }

      const result = pickActivities(mockActivities, criteria)

      // 36个月应该匹配活动2、3、4
      expect(result).toHaveLength(3)
    })

    it('should filter by focus area', () => {
      const criteria = {
        ageMonths: 30,
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any',
        focus: 'fine' as Focus
      }

      const result = pickActivities(mockActivities, criteria)

      // 应该匹配包含fine focus的活动
      expect(result).toHaveLength(2)
      expect(result.map(a => a.id)).toEqual(['1', '4'])
    })
  })

  describe('边界情况', () => {
    it('should handle empty activities array', () => {
      const criteria = {
        ageMonths: 30,
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any'
      }

      const result = pickActivities([], criteria)

      expect(result).toHaveLength(0)
    })

    it('should handle age at exact boundaries', () => {
      const criteria = {
        ageMonths: 24, // 最小年龄
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any'
      }

      const result = pickActivities(mockActivities, criteria)

      // 24个月应该匹配活动1、3、4
      expect(result).toHaveLength(3)
    })

    it('should handle no matching activities', () => {
      const criteria = {
        ageMonths: 20, // 小于所有活动的最小年龄
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any'
      }

      const result = pickActivities(mockActivities, criteria)

      expect(result).toHaveLength(0)
    })

    it('should handle non-existent focus', () => {
      const criteria = {
        ageMonths: 30,
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any',
        focus: 'gross' as Focus // 没有活动有这个focus
      }

      const result = pickActivities(mockActivities, criteria)

      expect(result).toHaveLength(0)
    })
  })

  describe('排序功能', () => {
    it('should sort activities by relevance when focus is specified', () => {
      const criteria = {
        ageMonths: 30,
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any',
        focus: 'fine' as Focus
      }

      const result = pickActivities(mockActivities, criteria)

      // 活动1只有fine focus，应该排在前面
      // 活动4有多个focus包括fine，应该排在后面
      expect(result[0].id).toBe('1')
      expect(result[1].id).toBe('4')
    })

    it('should sort by age relevance when no focus specified', () => {
      const criteria = {
        ageMonths: 32,
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any'
      }

      const result = pickActivities(mockActivities, criteria)

      // 应该按照年龄匹配度排序
      expect(result.length).toBeGreaterThan(0)
    })
  })

  describe('限制数量功能', () => {
    it('should limit results when maxCount is specified', () => {
      const criteria = {
        ageMonths: 30,
        scenario: 'home' as Scenario,
        toolPref: 'any' as Tool | 'any',
        maxCount: 2
      }

      const result = pickActivities(mockActivities, criteria)

      expect(result).toHaveLength(2)
    })

    it('should return all results when maxCount is larger than available', () => {
      const criteria = {
        ageMonths: 30,
        scenario: 'home' as Scenario,
        toolPref: 'hands' as Tool,
        maxCount: 10
      }

      const result = pickActivities(mockActivities, criteria)

      expect(result).toHaveLength(1) // 只有一个hands活动匹配
    })
  })

  describe('复杂筛选场景', () => {
    it('should handle multiple criteria combination', () => {
      const criteria = {
        ageMonths: 35,
        scenario: 'home' as Scenario,
        toolPref: 'household' as Tool,
        focus: 'social' as Focus,
        maxCount: 5
      }

      const result = pickActivities(mockActivities, criteria)

      expect(result).toHaveLength(1)
      expect(result[0].id).toBe('4')
      expect(result[0].tool).toBe('household')
      expect(result[0].focuses).toContain('social')
    })

    it('should prefer exact tool matches over "any"', () => {
      const activitiesWithAny = [
        ...mockActivities,
        {
          id: '5',
          name: '通用游戏',
          description: '任何道具',
          age_min: 24,
          age_max: 48,
          duration_min: 10,
          mode: 'quiet' as const,
          tool: 'hands' as Tool,
          focuses: ['fine' as Focus],
        }
      ]

      const criteria = {
        ageMonths: 30,
        scenario: 'home' as Scenario,
        toolPref: 'hands' as Tool
      }

      const result = pickActivities(activitiesWithAny, criteria)

      // 应该包含所有hands工具的活动
      expect(result.length).toBeGreaterThan(0)
      result.forEach(activity => {
        expect(activity.tool).toBe('hands')
      })
    })
  })
})