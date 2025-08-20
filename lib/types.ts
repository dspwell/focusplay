export type Scenario = 'home' | 'outdoor' | 'waiting' | 'bedtime' | 'travel'
export type Tool = 'hands' | 'paper' | 'blocks_puzzle' | 'books_pictures' | 'household'
export type Focus = 'fine' | 'language' | 'cognition' | 'gross' | 'social' | undefined
export type ActivityMode = 'quiet' | 'active'

// 认证相关类型
export type UserRole = 'user' | 'admin' | 'super_admin'
export type SubscriptionStatus = 'free' | 'premium' | 'family'
export type PlanStatus = 'draft' | 'active' | 'completed' | 'paused'
export type SessionStatus = 'started' | 'paused' | 'completed' | 'skipped'
export type GameSessionStatus = 'active' | 'paused' | 'completed' | 'abandoned'
export type Gender = 'male' | 'female' | 'other'
export type NotificationType = 'welcome' | 'plan_reminder' | 'achievement' | 'system'
export type FeedbackType = 'difficulty' | 'engagement' | 'bug_report' | 'suggestion'
export type RecommendationType = 'next_game' | 'difficulty_adjustment' | 'focus_area' | 'break_reminder'
export type AchievementType = 'first_game' | 'streak_3' | 'streak_7' | 'perfect_score' | 'focused_learner'

export interface Activity {
  id: string
  name: string
  description: string
  age_min: number
  age_max: number
  duration_min: number
  mode: ActivityMode
  tool: Tool
  focuses: Focus[]
  safety_notes?: string
}

// 用户相关接口
export interface UserProfile {
  id: string
  email: string
  display_name?: string
  avatar_url?: string
  role: UserRole
  parent_name?: string
  phone?: string
  subscription_status: SubscriptionStatus
  subscription_expires_at?: string
  preferred_language: string
  notification_enabled: boolean
  onboarding_completed: boolean
  last_active_at: string
  created_at: string
  updated_at: string
}

export interface ChildProfile {
  id: string
  parent_id: string
  name: string
  birth_date: string
  gender?: Gender
  avatar_url?: string
  preferred_scenarios: Scenario[]
  preferred_tools: Tool[]
  development_focuses: Focus[]
  difficulty_preference: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Plan {
  id: string
  email?: string // 兼容旧版本
  user_id?: string
  child_id?: string
  plan_name: string
  age_months: number
  scenario: Scenario
  tool_pref: Tool | 'any'
  focus?: Focus
  status: PlanStatus
  completion_rate: number
  started_at?: string
  completed_at?: string
  created_at: string
  updated_at?: string
}

export interface PlanItem {
  id: string
  plan_id: string
  day: number
  activity_id: string
  activity: Activity
}

export interface GameSession {
  id: string
  user_id: string
  child_id?: string
  game_id: string
  plan_id?: string
  session_date: string
  duration_minutes?: number
  status: SessionStatus
  difficulty_rating?: number
  engagement_rating?: number
  parent_notes?: string
  created_at: string
  updated_at: string
}

export interface UserNotification {
  id: string
  user_id: string
  type: NotificationType
  title: string
  message: string
  action_url?: string
  is_read: boolean
  is_sent: boolean
  send_at: string
  created_at: string
}

export interface UserStats {
  total_plans: number
  completed_plans: number
  total_sessions: number
  total_play_time: number
  children_count: number
  avg_engagement: number
}

// 认证上下文类型
export interface AuthUser {
  id: string
  email?: string
  user_metadata?: {
    display_name?: string
    avatar_url?: string
  }
}

export interface AuthContextType {
  user: AuthUser | null
  profile: UserProfile | null
  children: ChildProfile[]
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName?: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>
  refreshProfile: () => Promise<void>
}

// 游戏记录和进度追踪相关接口
export interface GameSession {
  id: string
  user_id: string
  child_id?: string
  plan_id: string
  game_id: number
  
  // 会话基本信息
  started_at: string
  completed_at?: string
  duration_seconds: number
  status: GameSessionStatus
  
  // 游戏表现数据
  completion_percentage: number
  correct_answers: number
  total_attempts: number
  accuracy_percentage: number
  
  // 参与度和难度评估
  engagement_score?: number
  difficulty_rating?: number
  parent_notes?: string
  
  // 详细交互数据
  interaction_data: Record<string, any>
  
  created_at: string
  updated_at: string
}

export interface GameStepProgress {
  id: string
  session_id: string
  step_number: number
  step_description?: string
  
  // 步骤状态
  started_at: string
  completed_at?: string
  is_completed: boolean
  attempts_count: number
  
  // 表现数据
  time_spent_seconds: number
  success_rate?: number
  hints_used: number
  
  // 详细数据
  step_data: Record<string, any>
  
  created_at: string
}

export interface UserProgressSummary {
  id: string
  user_id: string
  child_id?: string
  
  // 整体统计
  total_sessions: number
  total_play_time_minutes: number
  total_games_completed: number
  
  // 能力发展追踪
  fine_motor_progress: number
  language_progress: number
  cognition_progress: number
  gross_motor_progress: number
  social_progress: number
  
  // 最近表现
  avg_engagement_score?: number
  avg_completion_rate?: number
  current_streak_days: number
  last_played_at?: string
  
  // 推荐调整
  recommended_difficulty?: number
  next_focus_areas: string[]
  
  last_calculated_at: string
  created_at: string
  updated_at: string
}

export interface Achievement {
  id: string
  user_id: string
  child_id?: string
  
  // 成就信息
  achievement_type: AchievementType
  achievement_name: string
  description?: string
  icon_name?: string
  
  // 获得信息
  earned_at: string
  criteria_met: Record<string, any>
  
  created_at: string
}

export interface GameFeedback {
  id: string
  session_id: string
  user_id: string
  
  // 反馈内容
  feedback_type: FeedbackType
  rating?: number
  comment?: string
  
  // 上下文信息
  game_context: Record<string, any>
  
  created_at: string
}

export interface LearningRecommendation {
  id: string
  user_id: string
  child_id?: string
  
  // 推荐内容
  recommendation_type: RecommendationType
  title: string
  description?: string
  priority_score: number
  
  // 推荐逻辑
  based_on_data: Record<string, any>
  target_skills: string[]
  estimated_duration_minutes?: number
  
  // 状态管理
  status: 'pending' | 'viewed' | 'accepted' | 'dismissed'
  expires_at?: string
  
  created_at: string
  updated_at: string
}

// 游戏统计相关接口
export interface UserStats {
  total_plans: number
  total_play_time: number
  avg_engagement: number
  children_count: number
  current_streak: number
  total_achievements: number
}

export interface ProgressData {
  skills: {
    fine_motor: number
    language: number
    cognition: number
    gross_motor: number
    social: number
  }
  trend: {
    engagement: Array<{ date: string; score: number }>
    accuracy: Array<{ date: string; percentage: number }>
    play_time: Array<{ date: string; minutes: number }>
  }
}

// API 请求和响应接口
export interface StartGameSessionRequest {
  plan_id: string
  game_id: number
  child_id?: string
}

export interface UpdateGameSessionRequest {
  completion_percentage?: number
  correct_answers?: number
  total_attempts?: number
  engagement_score?: number
  difficulty_rating?: number
  parent_notes?: string
  interaction_data?: Record<string, any>
}

export interface CompleteGameSessionRequest {
  engagement_score: number
  difficulty_rating?: number
  parent_notes?: string
  final_interaction_data?: Record<string, any>
}

export interface GameSessionResponse {
  session: GameSession
  step_progress?: GameStepProgress[]
  recommendations?: LearningRecommendation[]
}
