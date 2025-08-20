import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function findLongDurationGames() {
  console.log('=== 查找duration > 8分钟的游戏 ===\n');

  const { data: games, error } = await supabase
    .from('games')
    .select('id, name, age_range, scene, props, focus, duration')
    .gt('duration', 8)
    .order('duration', { ascending: false });

  if (error) {
    console.error('查询错误:', error);
    process.exit(1);
  }

  console.log(`找到 ${games?.length || 0} 个duration超过8分钟的游戏:\n`);

  games?.forEach((game, index) => {
    console.log(`${index + 1}. ${game.name}`);
    console.log(`   - ID: ${game.id}`);
    console.log(`   - 条件: ${game.age_range}岁 + ${game.scene} + ${game.props} + ${game.focus}`);
    console.log(`   - 当前时长: ${game.duration}分钟`);
    console.log('');
  });

  // 也检查一下正好8分钟的游戏作为参考
  console.log('=== 参考：正好8分钟的游戏 ===\n');
  const { data: eightMinGames } = await supabase
    .from('games')
    .select('id, name, duration')
    .eq('duration', 8)
    .limit(5);

  eightMinGames?.forEach((game, index) => {
    console.log(`${index + 1}. ${game.name} (${game.duration}分钟)`);
  });

  // 特别检查一下用户提到的几个游戏
  console.log('\n=== 检查用户提到的特定游戏 ===\n');
  const specificGames = [
    '音乐小画家：用画笔跳舞',
    '小小拓印家：纹理魔术秀', 
    '吹吹画：风的画笔'
  ];

  for (const gameName of specificGames) {
    const { data: game } = await supabase
      .from('games')
      .select('id, name, age_range, scene, props, focus, duration')
      .ilike('name', `%${gameName}%`)
      .single();

    if (game) {
      console.log(`${game.name}:`);
      console.log(`   - ID: ${game.id}`);
      console.log(`   - 条件: ${game.age_range}岁 + ${game.scene} + ${game.props} + ${game.focus}`);
      console.log(`   - 当前时长: ${game.duration}分钟`);
      console.log('');
    } else {
      console.log(`未找到游戏: ${gameName}`);
    }
  }

  return games;
}

// 运行查找
findLongDurationGames().catch(console.error);