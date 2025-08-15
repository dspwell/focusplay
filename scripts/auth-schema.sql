-- 用户认证系统数据库架构
-- 基于 Supabase Auth 的用户管理系统

-- 1. 用户档案表 (扩展 auth.users)
CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    display_name VARCHAR(100),
    avatar_url TEXT,
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin', 'super_admin')),
    
    -- 家长信息
    parent_name VARCHAR(100),
    phone VARCHAR(20),
    
    -- 订阅和偏好
    subscription_status VARCHAR(20) DEFAULT 'free' CHECK (subscription_status IN ('free', 'premium', 'family')),
    subscription_expires_at TIMESTAMPTZ,
    preferred_language VARCHAR(10) DEFAULT 'zh-CN',
    notification_enabled BOOLEAN DEFAULT true,
    
    -- 元数据
    onboarding_completed BOOLEAN DEFAULT false,
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 孩子档案表
CREATE TABLE IF NOT EXISTS children_profiles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    parent_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE NOT NULL,
    
    -- 基本信息
    name VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')),
    avatar_url TEXT,
    
    -- 发展偏好 (从评估中获得)
    preferred_scenarios TEXT[] DEFAULT '{}', -- 偏好场景
    preferred_tools TEXT[] DEFAULT '{}',     -- 偏好道具
    development_focuses TEXT[] DEFAULT '{}', -- 发展重点
    difficulty_preference INTEGER DEFAULT 3 CHECK (difficulty_preference BETWEEN 1 AND 5),
    
    -- 元数据
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 用户计划表 (增强版)
ALTER TABLE plans DROP CONSTRAINT IF EXISTS plans_email_key;
ALTER TABLE plans 
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS child_id UUID REFERENCES children_profiles(id) ON DELETE SET NULL,
    ADD COLUMN IF NOT EXISTS plan_name VARCHAR(100) DEFAULT '专注力训练计划',
    ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('draft', 'active', 'completed', 'paused')),
    ADD COLUMN IF NOT EXISTS completion_rate DECIMAL(5,2) DEFAULT 0,
    ADD COLUMN IF NOT EXISTS started_at TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS completed_at TIMESTAMPTZ;

-- 4. 游戏会话记录表
CREATE TABLE IF NOT EXISTS game_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE NOT NULL,
    child_id UUID REFERENCES children_profiles(id) ON DELETE CASCADE,
    game_id VARCHAR NOT NULL, -- 关联到 games 表
    plan_id UUID REFERENCES plans(id) ON DELETE SET NULL,
    
    -- 会话信息
    session_date DATE NOT NULL DEFAULT CURRENT_DATE,
    duration_minutes INTEGER, -- 实际游戏时长
    status VARCHAR(20) DEFAULT 'completed' CHECK (status IN ('started', 'paused', 'completed', 'skipped')),
    
    -- 评价和反馈
    difficulty_rating INTEGER CHECK (difficulty_rating BETWEEN 1 AND 5),
    engagement_rating INTEGER CHECK (engagement_rating BETWEEN 1 AND 5),
    parent_notes TEXT,
    
    -- 元数据
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. 用户使用统计表
CREATE TABLE IF NOT EXISTS usage_analytics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE NOT NULL,
    
    -- 统计数据
    event_type VARCHAR(50) NOT NULL, -- login, game_start, game_complete, plan_create, etc.
    event_data JSONB,
    session_id VARCHAR(100),
    
    -- 设备和环境信息
    user_agent TEXT,
    ip_address INET,
    device_type VARCHAR(20),
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. 系统通知表
CREATE TABLE IF NOT EXISTS notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE NOT NULL,
    
    -- 通知内容
    type VARCHAR(50) NOT NULL, -- welcome, plan_reminder, achievement, system, etc.
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    action_url TEXT,
    
    -- 状态
    is_read BOOLEAN DEFAULT false,
    is_sent BOOLEAN DEFAULT false,
    send_at TIMESTAMPTZ DEFAULT NOW(),
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_user_profiles_role ON user_profiles(role);
CREATE INDEX IF NOT EXISTS idx_children_profiles_parent_id ON children_profiles(parent_id);
CREATE INDEX IF NOT EXISTS idx_plans_user_id ON plans(user_id);
CREATE INDEX IF NOT EXISTS idx_plans_child_id ON plans(child_id);
CREATE INDEX IF NOT EXISTS idx_plans_status ON plans(status);
CREATE INDEX IF NOT EXISTS idx_game_sessions_user_id ON game_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_game_sessions_child_id ON game_sessions(child_id);
CREATE INDEX IF NOT EXISTS idx_game_sessions_date ON game_sessions(session_date);
CREATE INDEX IF NOT EXISTS idx_usage_analytics_user_id ON usage_analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_analytics_event_type ON usage_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);

-- 启用 Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE children_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- RLS 策略
-- 用户档案：只能访问自己的档案
CREATE POLICY "Users can view own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON user_profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- 孩子档案：只能访问自己孩子的档案
CREATE POLICY "Parents can manage own children" ON children_profiles
    FOR ALL USING (parent_id = auth.uid());

-- 计划：只能访问自己的计划
CREATE POLICY "Users can manage own plans" ON plans
    FOR ALL USING (user_id = auth.uid());

-- 游戏会话：只能访问自己的会话记录
CREATE POLICY "Users can manage own game sessions" ON game_sessions
    FOR ALL USING (user_id = auth.uid());

-- 使用分析：只能访问自己的数据
CREATE POLICY "Users can view own analytics" ON usage_analytics
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "System can insert analytics" ON usage_analytics
    FOR INSERT WITH CHECK (true);

-- 通知：只能访问发给自己的通知
CREATE POLICY "Users can manage own notifications" ON notifications
    FOR ALL USING (user_id = auth.uid());

-- 管理员策略
CREATE POLICY "Admins can view all profiles" ON user_profiles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
        )
    );

CREATE POLICY "Super admins can manage all profiles" ON user_profiles
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE id = auth.uid() AND role = 'super_admin'
        )
    );

-- 触发器：自动更新 updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_profiles_updated_at 
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_children_profiles_updated_at 
    BEFORE UPDATE ON children_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plans_updated_at 
    BEFORE UPDATE ON plans
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_game_sessions_updated_at 
    BEFORE UPDATE ON game_sessions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 函数：获取用户统计信息
CREATE OR REPLACE FUNCTION get_user_stats(user_uuid UUID)
RETURNS JSON AS $$
DECLARE
    result JSON;
BEGIN
    SELECT json_build_object(
        'total_plans', (SELECT COUNT(*) FROM plans WHERE user_id = user_uuid),
        'completed_plans', (SELECT COUNT(*) FROM plans WHERE user_id = user_uuid AND status = 'completed'),
        'total_sessions', (SELECT COUNT(*) FROM game_sessions WHERE user_id = user_uuid),
        'total_play_time', (SELECT COALESCE(SUM(duration_minutes), 0) FROM game_sessions WHERE user_id = user_uuid),
        'children_count', (SELECT COUNT(*) FROM children_profiles WHERE parent_id = user_uuid),
        'avg_engagement', (SELECT ROUND(AVG(engagement_rating), 2) FROM game_sessions WHERE user_id = user_uuid AND engagement_rating IS NOT NULL)
    ) INTO result;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;