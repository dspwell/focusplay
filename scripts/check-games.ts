import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function checkGames() {
  // 检查游戏总数
  const { data: totalGames, count } = await supabase.from('games').select('*', { count: 'exact' });
  console.log('游戏总数:', count);

  // 检查各个条件组合的覆盖情况
  const conditions = [
    { age_range: '2.5-3', scene: 'outdoor', props: 'household' },
    { age_range: '2-2.5', scene: 'home', props: 'hands' },
    { age_range: '3-4', scene: 'waiting', props: 'paper' },
    { age_range: '2.5-3', scene: 'home', props: 'paper' },
    { age_range: '3-4', scene: 'outdoor', props: 'hands' }
  ];

  console.log('\n各条件组合的游戏数量:');
  for (const condition of conditions) {
    const { data, count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('age_range', condition.age_range)
      .eq('scene', condition.scene)
      .eq('props', condition.props);
    
    console.log(`${condition.age_range} + ${condition.scene} + ${condition.props}: ${count} 个游戏`);
  }

  // 检查各个属性的分布
  console.log('\n年龄段分布:');
  const ageRanges = ['2-2.5', '2.5-3', '3-4'];
  for (const age of ageRanges) {
    const { count } = await supabase.from('games').select('*', { count: 'exact' }).eq('age_range', age);
    console.log(`${age}: ${count} 个游戏`);
  }

  console.log('\n场景分布:');
  const scenes = ['home', 'outdoor', 'waiting', 'bedtime', 'travel'];
  for (const scene of scenes) {
    const { count } = await supabase.from('games').select('*', { count: 'exact' }).eq('scene', scene);
    console.log(`${scene}: ${count} 个游戏`);
  }

  console.log('\n道具分布:');
  const props = ['hands', 'paper', 'blocks_puzzle', 'books_pictures', 'household'];
  for (const prop of props) {
    const { count } = await supabase.from('games').select('*', { count: 'exact' }).eq('props', prop);
    console.log(`${prop}: ${count} 个游戏`);
  }
}

checkGames().catch(console.error);