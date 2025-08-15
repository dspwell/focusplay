-- Create games table for storing game data from gameDatabase.ts
-- This replaces the hardcoded game database with a proper Supabase table

CREATE TABLE IF NOT EXISTS games (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    age_range VARCHAR NOT NULL CHECK (age_range IN ('2-2.5', '2.5-3', '3-4')),
    scene VARCHAR NOT NULL CHECK (scene IN ('home', 'outdoor', 'waiting', 'bedtime', 'travel')),
    props VARCHAR NOT NULL CHECK (props IN ('hands', 'paper', 'blocks_puzzle', 'books_pictures', 'household')),
    focus VARCHAR NOT NULL CHECK (focus IN ('fine', 'language', 'cognition', 'gross', 'social')),
    core_goal TEXT NOT NULL,
    materials TEXT NOT NULL,
    steps TEXT[] NOT NULL,
    tips TEXT[] NOT NULL,
    safety_notes TEXT DEFAULT NULL,
    extensions TEXT DEFAULT NULL,
    duration INTEGER NOT NULL CHECK (duration > 0),
    difficulty INTEGER NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
    activity_type VARCHAR NOT NULL CHECK (activity_type IN ('quiet', 'active')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_games_age_range ON games(age_range);
CREATE INDEX IF NOT EXISTS idx_games_scene ON games(scene);
CREATE INDEX IF NOT EXISTS idx_games_props ON games(props);
CREATE INDEX IF NOT EXISTS idx_games_focus ON games(focus);
CREATE INDEX IF NOT EXISTS idx_games_difficulty ON games(difficulty);
CREATE INDEX IF NOT EXISTS idx_games_activity_type ON games(activity_type);
CREATE INDEX IF NOT EXISTS idx_games_duration ON games(duration);

-- Create composite indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_games_age_scene_props ON games(age_range, scene, props);
CREATE INDEX IF NOT EXISTS idx_games_age_focus ON games(age_range, focus);
CREATE INDEX IF NOT EXISTS idx_games_scene_focus ON games(scene, focus);

-- Add row level security (RLS)
ALTER TABLE games ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all users to read games (since this is reference data)
CREATE POLICY "Allow read access for all users" ON games
    FOR SELECT USING (true);

-- Create policy to restrict insert/update/delete to authenticated users only
CREATE POLICY "Allow insert/update/delete for authenticated users" ON games
    FOR ALL USING (auth.uid() IS NOT NULL);

-- Add trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_games_updated_at BEFORE UPDATE ON games
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();