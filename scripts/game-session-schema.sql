-- 游戏记录和进度追踪数据库结构
-- 扩展现有的 game_sessions 表并添加新的追踪功能

-- 增强 game_sessions 表
DROP TABLE IF EXISTS game_sessions CASCADE;
CREATE TABLE game_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    child_id UUID REFERENCES children_profiles(id) ON DELETE SET NULL,
    plan_id UUID REFERENCES plans(id) ON DELETE CASCADE NOT NULL,
    game_id INTEGER REFERENCES games(id) ON DELETE CASCADE NOT NULL,
    
    -- 会话基本信息
    started_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    completed_at TIMESTAMPTZ,
    duration_seconds INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'paused', 'completed', 'abandoned')),
    
    -- 游戏表现数据
    completion_percentage DECIMAL(5,2) DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
    correct_answers INTEGER DEFAULT 0,
    total_attempts INTEGER DEFAULT 0,
    accuracy_percentage DECIMAL(5,2) GENERATED ALWAYS AS (
        CASE 
            WHEN total_attempts > 0 THEN (correct_answers::DECIMAL / total_attempts) * 100
            ELSE 0
        END
    ) STORED,
    
    -- 参与度和难度评估
    engagement_score INTEGER CHECK (engagement_score >= 1 AND engagement_score <= 5),
    difficulty_rating INTEGER CHECK (difficulty_rating >= 1 AND difficulty_rating <= 5),
    parent_notes TEXT,
    
    -- 详细交互数据
    interaction_data JSONB DEFAULT '{}'::jsonb,
    
    -- 追踪字段
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 游戏步骤追踪表
CREATE TABLE game_step_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id UUID REFERENCES game_sessions(id) ON DELETE CASCADE NOT NULL,
    step_number INTEGER NOT NULL,
    step_description TEXT,
    
    -- 步骤状态
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    is_completed BOOLEAN DEFAULT FALSE,
    attempts_count INTEGER DEFAULT 0,
    
    -- 表现数据
    time_spent_seconds INTEGER DEFAULT 0,
    success_rate DECIMAL(5,2),
    hints_used INTEGER DEFAULT 0,
    
    -- 详细数据
    step_data JSONB DEFAULT '{}'::jsonb,
    
    -- 约束
    UNIQUE(session_id, step_number),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 用户进度汇总表
CREATE TABLE user_progress_summary (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    child_id UUID REFERENCES children_profiles(id) ON DELETE CASCADE,
    
    -- 整体统计
    total_sessions INTEGER DEFAULT 0,
    total_play_time_minutes INTEGER DEFAULT 0,
    total_games_completed INTEGER DEFAULT 0,
    
    -- 能力发展追踪
    fine_motor_progress DECIMAL(5,2) DEFAULT 0,
    language_progress DECIMAL(5,2) DEFAULT 0,
    cognition_progress DECIMAL(5,2) DEFAULT 0,
    gross_motor_progress DECIMAL(5,2) DEFAULT 0,
    social_progress DECIMAL(5,2) DEFAULT 0,
    
    -- 最近表现
    avg_engagement_score DECIMAL(3,2),
    avg_completion_rate DECIMAL(5,2),
    current_streak_days INTEGER DEFAULT 0,
    last_played_at TIMESTAMPTZ,
    
    -- 推荐调整
    recommended_difficulty INTEGER CHECK (recommended_difficulty >= 1 AND recommended_difficulty <= 5),
    next_focus_areas TEXT[],
    
    -- 追踪字段
    last_calculated_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- 确保每个孩子只有一条记录
    UNIQUE(user_id, child_id)
);

-- 成就和里程碑表
CREATE TABLE achievements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    child_id UUID REFERENCES children_profiles(id) ON DELETE CASCADE,
    
    -- 成就信息
    achievement_type VARCHAR(50) NOT NULL,
    achievement_name VARCHAR(100) NOT NULL,
    description TEXT,
    icon_name VARCHAR(50),
    
    -- 获得信息
    earned_at TIMESTAMPTZ DEFAULT NOW(),
    criteria_met JSONB,
    
    -- 元数据
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 游戏反馈表
CREATE TABLE game_feedback (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id UUID REFERENCES game_sessions(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    
    -- 反馈内容
    feedback_type VARCHAR(30) NOT NULL CHECK (feedback_type IN ('difficulty', 'engagement', 'bug_report', 'suggestion')),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    
    -- 上下文信息
    game_context JSONB,
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 学习路径推荐表
CREATE TABLE learning_recommendations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    child_id UUID REFERENCES children_profiles(id) ON DELETE CASCADE,
    
    -- 推荐内容
    recommendation_type VARCHAR(50) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    priority_score INTEGER DEFAULT 0,
    
    -- 推荐逻辑
    based_on_data JSONB,
    target_skills TEXT[],
    estimated_duration_minutes INTEGER,
    
    -- 状态管理
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'viewed', 'accepted', 'dismissed')),
    expires_at TIMESTAMPTZ,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 为游戏会话表创建索引
CREATE INDEX idx_game_sessions_user_id ON game_sessions(user_id);
CREATE INDEX idx_game_sessions_child_id ON game_sessions(child_id);
CREATE INDEX idx_game_sessions_plan_id ON game_sessions(plan_id);
CREATE INDEX idx_game_sessions_started_at ON game_sessions(started_at);
CREATE INDEX idx_game_sessions_status ON game_sessions(status);

-- 为步骤进度表创建索引
CREATE INDEX idx_game_step_progress_session_id ON game_step_progress(session_id);
CREATE INDEX idx_game_step_progress_completed ON game_step_progress(is_completed);

-- 为进度汇总表创建索引
CREATE INDEX idx_user_progress_summary_user_id ON user_progress_summary(user_id);
CREATE INDEX idx_user_progress_summary_child_id ON user_progress_summary(child_id);
CREATE INDEX idx_user_progress_summary_last_played ON user_progress_summary(last_played_at);

-- 为成就表创建索引
CREATE INDEX idx_achievements_user_id ON achievements(user_id);
CREATE INDEX idx_achievements_child_id ON achievements(child_id);
CREATE INDEX idx_achievements_type ON achievements(achievement_type);

-- 为反馈表创建索引
CREATE INDEX idx_game_feedback_session_id ON game_feedback(session_id);
CREATE INDEX idx_game_feedback_type ON game_feedback(feedback_type);

-- 为推荐表创建索引
CREATE INDEX idx_learning_recommendations_user_id ON learning_recommendations(user_id);
CREATE INDEX idx_learning_recommendations_child_id ON learning_recommendations(child_id);
CREATE INDEX idx_learning_recommendations_status ON learning_recommendations(status);

-- 自动更新 updated_at 字段的触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 为相关表添加触发器
CREATE TRIGGER update_game_sessions_updated_at 
    BEFORE UPDATE ON game_sessions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_progress_summary_updated_at 
    BEFORE UPDATE ON user_progress_summary 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_learning_recommendations_updated_at 
    BEFORE UPDATE ON learning_recommendations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) 策略

-- 游戏会话表的 RLS
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own game sessions" ON game_sessions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own game sessions" ON game_sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own game sessions" ON game_sessions
    FOR UPDATE USING (auth.uid() = user_id);

-- 游戏步骤进度表的 RLS
ALTER TABLE game_step_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own step progress" ON game_step_progress
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM game_sessions 
            WHERE game_sessions.id = game_step_progress.session_id 
            AND game_sessions.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can insert their own step progress" ON game_step_progress
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM game_sessions 
            WHERE game_sessions.id = game_step_progress.session_id 
            AND game_sessions.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can update their own step progress" ON game_step_progress
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM game_sessions 
            WHERE game_sessions.id = game_step_progress.session_id 
            AND game_sessions.user_id = auth.uid()
        )
    );

-- 用户进度汇总表的 RLS
ALTER TABLE user_progress_summary ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own progress summary" ON user_progress_summary
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress summary" ON user_progress_summary
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress summary" ON user_progress_summary
    FOR UPDATE USING (auth.uid() = user_id);

-- 成就表的 RLS
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own achievements" ON achievements
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own achievements" ON achievements
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 反馈表的 RLS
ALTER TABLE game_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own feedback" ON game_feedback
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own feedback" ON game_feedback
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 推荐表的 RLS
ALTER TABLE learning_recommendations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own recommendations" ON learning_recommendations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own recommendations" ON learning_recommendations
    FOR UPDATE USING (auth.uid() = user_id);

-- 管理员可以查看所有数据的策略
CREATE POLICY "Admins can view all game sessions" ON game_sessions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE user_profiles.id = auth.uid() 
            AND user_profiles.role IN ('admin', 'super_admin')
        )
    );

CREATE POLICY "Admins can view all progress summaries" ON user_progress_summary
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE user_profiles.id = auth.uid() 
            AND user_profiles.role IN ('admin', 'super_admin')
        )
    );

-- 初始化一些示例成就类型
INSERT INTO achievements (user_id, achievement_type, achievement_name, description, icon_name) VALUES 
(gen_random_uuid(), 'first_game', '初次体验', '完成第一个专注力游戏', 'star'),
(gen_random_uuid(), 'streak_3', '三日连击', '连续3天完成训练', 'fire'),
(gen_random_uuid(), 'streak_7', '一周坚持', '连续7天完成训练', 'award'),
(gen_random_uuid(), 'perfect_score', '完美表现', '在一次游戏中获得100%准确率', 'crown'),
(gen_random_uuid(), 'focused_learner', '专注学习者', '平均参与度达到4分以上', 'target')
ON CONFLICT DO NOTHING;

COMMENT ON TABLE game_sessions IS '游戏会话记录表，追踪每次游戏的详细表现';
COMMENT ON TABLE game_step_progress IS '游戏步骤进度表，记录游戏内各步骤的完成情况';
COMMENT ON TABLE user_progress_summary IS '用户进度汇总表，统计用户整体学习进展';
COMMENT ON TABLE achievements IS '成就表，记录用户获得的各种里程碑';
COMMENT ON TABLE game_feedback IS '游戏反馈表，收集用户对游戏体验的反馈';
COMMENT ON TABLE learning_recommendations IS '学习推荐表，基于数据分析生成个性化建议';