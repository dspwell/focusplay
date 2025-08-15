import { Activity, Scenario, Tool, Focus, ActivityMode } from './types'

export const SCENARIO_RULES = {
  home: { 
    allow: new Set(['hands', 'paper', 'blocks_puzzle', 'books_pictures', 'household']), 
    quietOnly: false, 
    quietBias: 1.0, 
    maxDur: 10 
  },
  outdoor: { 
    allow: new Set(['hands', 'paper', 'blocks_puzzle', 'books_pictures', 'household']), 
    quietOnly: false, 
    quietBias: 0.8, 
    maxDur: 10, 
    requireActiveAtLeast: 1 
  },
  waiting: { 
    allow: new Set(['hands', 'paper', 'books_pictures']), 
    quietOnly: false, 
    quietBias: 1.2, 
    maxDur: 5 
  },
  bedtime: { 
    allow: new Set(['hands', 'paper', 'books_pictures']), 
    quietOnly: true, 
    quietBias: 1.8, 
    maxDur: 8 
  },
  travel: { 
    allow: new Set(['hands', 'paper', 'books_pictures']), 
    quietOnly: false, 
    quietBias: 1.6, 
    maxDur: 7 
  }
} as const

const RELATED_FOCUSES = {
  fine: ['cognition'],
  cognition: ['fine'],
  language: ['social'],
  social: ['language'],
  gross: []
} as const

const MODE_WEIGHT = {
  home: { quiet: 1.0, active: 1.0 },
  outdoor: { quiet: 0.7, active: 1.3 },
  waiting: { quiet: 1.2, active: 0.5 },
  bedtime: { quiet: 2.0, active: 0 },
  travel: { quiet: 1.6, active: 0.4 }
} as const

// Safety rules for age groups
function applySafetyRules(activities: Activity[], ageMonths: number, scenario: Scenario): Activity[] {
  return activities.filter(activity => {
    // Age range check
    if (ageMonths < activity.age_min || ageMonths > activity.age_max) {
      return false
    }

    // Under 36 months: no small particles or magnetic pieces
    if (ageMonths < 36) {
      if (activity.safety_notes?.includes('small_particles') || 
          activity.safety_notes?.includes('magnetic_pieces')) {
        return false
      }
      // blocks_puzzle only large pieces for under 36 months
      if (activity.tool === 'blocks_puzzle' && 
          !activity.safety_notes?.includes('large_pieces')) {
        return false
      }
    }

    // Bedtime: all quiet, duration <= 8
    if (scenario === 'bedtime') {
      if (activity.mode !== 'quiet' || activity.duration_min > 8) {
        return false
      }
    }

    // Waiting/travel: duration <= 5-7, no messy activities
    if (scenario === 'waiting' || scenario === 'travel') {
      if (activity.duration_min > (scenario === 'waiting' ? 5 : 7)) {
        return false
      }
      if (activity.safety_notes?.includes('messy') || 
          activity.safety_notes?.includes('scattered')) {
        return false
      }
    }

    return true
  })
}

function scoreActivity(
  activity: Activity, 
  scenario: Scenario, 
  toolPref: Tool | 'any', 
  focus?: Focus
): number {
  let score = 1.0

  // Mode weight based on scenario
  const modeWeights = MODE_WEIGHT[scenario]
  score *= modeWeights[activity.mode]

  // Tool preference
  if (toolPref !== 'any' && activity.tool === toolPref) {
    score *= 1.5
  }

  // Focus match
  if (focus && activity.focuses.includes(focus)) {
    score *= 2.0
  } else if (focus && RELATED_FOCUSES[focus].some(related => activity.focuses.includes(related))) {
    score *= 1.3
  }

  return score
}

export function pickActivities(
  allActivities: Activity[],
  ageMonths: number,
  scenario: Scenario,
  toolPref: Tool | 'any',
  focus?: Focus
): Activity[] {
  const rules = SCENARIO_RULES[scenario]
  
  // Filter by age, scenario rules, and safety
  let candidates = allActivities.filter(activity => {
    // Tool allowed in scenario
    if (!rules.allow.has(activity.tool)) return false
    
    // Duration within limits
    if (activity.duration_min > rules.maxDur) return false
    
    return true
  })

  // Apply safety rules
  candidates = applySafetyRules(candidates, ageMonths, scenario)

  // If we have focus preference, try strict matching first
  const selected: Activity[] = []
  
  if (focus) {
    const strictMatches = candidates.filter(a => a.focuses.includes(focus))
    const relatedMatches = candidates.filter(a => 
      RELATED_FOCUSES[focus].some(related => a.focuses.includes(related))
    )
    
    // Combine and score
    const focusedCandidates = [...strictMatches, ...relatedMatches]
    candidates = focusedCandidates.length >= 3 ? focusedCandidates : candidates
  }

  // Score and sort activities
  const scoredActivities = candidates.map(activity => ({
    activity,
    score: scoreActivity(activity, scenario, toolPref, focus)
  })).sort((a, b) => b.score - a.score)

  // Select diverse activities (different modes and tools when possible)
  const usedModes = new Set<ActivityMode>()
  const usedTools = new Set<Tool>()
  
  for (const { activity } of scoredActivities) {
    if (selected.length >= 3) break
    
    // Prefer diversity in modes and tools
    const modeUsed = usedModes.has(activity.mode)
    const toolUsed = usedTools.has(activity.tool)
    
    if (selected.length < 2 || (!modeUsed && !toolUsed) || selected.length === 2) {
      selected.push(activity)
      usedModes.add(activity.mode)
      usedTools.add(activity.tool)
    }
  }

  // Ensure outdoor has at least 1 active if required
  if (scenario === 'outdoor' && rules.requireActiveAtLeast) {
    const hasActive = selected.some(a => a.mode === 'active')
    if (!hasActive) {
      const activeCandidate = scoredActivities.find(({ activity }) => 
        activity.mode === 'active' && !selected.includes(activity)
      )
      if (activeCandidate) {
        selected[selected.length - 1] = activeCandidate.activity
      }
    }
  }

  // Fill with placeholder activities if needed
  while (selected.length < 3) {
    selected.push(createPlaceholderActivity(scenario, toolPref, focus, selected.length))
  }

  return selected
}

function createPlaceholderActivity(
  scenario: Scenario, 
  toolPref: Tool | 'any', 
  focus?: Focus, 
  index: number
): Activity {
  const rules = SCENARIO_RULES[scenario]
  const allowedTools = Array.from(rules.allow)
  const tool = toolPref !== 'any' ? toolPref : allowedTools[index % allowedTools.length]
  const mode = rules.quietOnly ? 'quiet' : (index % 2 === 0 ? 'quiet' : 'active')
  
  return {
    id: `placeholder-${scenario}-${index}`,
    name: `${scenario === 'travel' ? '旅途' : scenario === 'bedtime' ? '睡前' : ''}专注力活动 ${index + 1}`,
    description: `适合${scenario}场景的专注力训练活动`,
    age_min: 24,
    age_max: 48,
    duration_min: Math.min(rules.maxDur, 5),
    mode,
    tool,
    focuses: focus ? [focus] : ['cognition']
  }
}
