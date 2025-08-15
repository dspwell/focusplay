-- Add new columns to existing tables

-- Update activities table
ALTER TABLE activities 
ADD COLUMN IF NOT EXISTS tool text CHECK (tool IN ('hands','paper','blocks_puzzle','books_pictures','household')),
ADD COLUMN IF NOT EXISTS focuses text[] DEFAULT '{}';

-- Update plans table  
ALTER TABLE plans
ADD COLUMN IF NOT EXISTS scenario text,
ADD COLUMN IF NOT EXISTS tool_pref text,
ADD COLUMN IF NOT EXISTS focus text;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_activities_tool ON activities(tool);
CREATE INDEX IF NOT EXISTS idx_activities_focuses ON activities USING GIN(focuses);
CREATE INDEX IF NOT EXISTS idx_plans_scenario ON plans(scenario);

-- Insert sample activities if table is empty
INSERT INTO activities (name, description, age_min, age_max, duration_min, mode, tool, focuses, safety_notes) VALUES
('手指画画', '用手指蘸颜料在纸上画画，发展精细动作和创造力', 24, 48, 5, 'quiet', 'paper', '{"fine","cognition"}', 'large_pieces'),
('积木搭建', '用大块积木搭建简单结构，训练空间认知', 30, 48, 8, 'quiet', 'blocks_puzzle', '{"fine","cognition"}', 'large_pieces'),
('图书阅读', '亲子共读图画书，发展语言和认知能力', 24, 48, 10, 'quiet', 'books_pictures', '{"language","cognition"}', ''),
('手势游戏', '学习简单手势和动作，发展大肢体协调', 24, 48, 5, 'active', 'hands', '{"gross","social"}', ''),
('分类游戏', '将家居物品按颜色或形状分类', 30, 48, 6, 'quiet', 'household', '{"cognition","fine"}', ''),
('纸飞机制作', '折纸飞机并试飞，训练精细动作', 36, 48, 7, 'quiet', 'paper', '{"fine","cognition"}', ''),
('拼图游戏', '完成适龄拼图，发展问题解决能力', 30, 48, 8, 'quiet', 'blocks_puzzle', '{"cognition","fine"}', 'large_pieces'),
('故事表演', '根据图书内容进行角色扮演', 30, 48, 10, 'active', 'books_pictures', '{"language","social"}', ''),
('手指操', '跟随音乐做手指运动，发展精细动作', 24, 48, 4, 'quiet', 'hands', '{"fine","gross"}', ''),
('物品配对', '将相似的家居物品进行配对', 24, 48, 5, 'quiet', 'household', '{"cognition","fine"}', '')
ON CONFLICT (name) DO NOTHING;
