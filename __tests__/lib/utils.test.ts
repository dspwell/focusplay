import { cn } from '@/lib/utils'

describe('Utils', () => {
  describe('cn function', () => {
    it('should merge class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2')
    })

    it('should handle conditional classes', () => {
      expect(cn('class1', true && 'class2', false && 'class3'))
        .toBe('class1 class2')
    })

    it('should handle undefined and null values', () => {
      expect(cn('class1', undefined, null, 'class2'))
        .toBe('class1 class2')
    })

    it('should merge Tailwind classes correctly', () => {
      expect(cn('bg-red-500', 'bg-blue-500'))
        .toBe('bg-blue-500')
    })

    it('should handle empty input', () => {
      expect(cn()).toBe('')
    })

    it('should handle arrays', () => {
      expect(cn(['class1', 'class2'], 'class3'))
        .toBe('class1 class2 class3')
    })

    it('should handle objects', () => {
      expect(cn({
        'class1': true,
        'class2': false,
        'class3': true
      })).toBe('class1 class3')
    })
  })
})