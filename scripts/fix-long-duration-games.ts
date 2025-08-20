import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function fixLongDurationGames() {
  console.log('=== 修复duration > 8分钟的游戏 ===\n');

  // 首先获取所有超过8分钟的游戏
  const { data: longGames, error: fetchError } = await supabase
    .from('games')
    .select('id, name, age_range, duration')
    .gt('duration', 8);

  if (fetchError) {
    console.error('查询错误:', fetchError);
    return;
  }

  console.log(`找到 ${longGames?.length || 0} 个需要修复的游戏\n`);

  if (!longGames || longGames.length === 0) {
    console.log('没有需要修复的游戏');
    return;
  }

  // 根据年龄段和原时长来确定合适的新时长
  function getAppropriateLength(ageRange: string, originalDuration: number): number {
    // 根据用户反馈，超过5分钟就很难坚持
    // 我们设定一个更保守的策略：
    // 2-2.5岁：3-4分钟（注意力最短）
    // 2.5-3岁：3-5分钟
    // 3-4岁：4-5分钟（稍微长一些）
    
    if (ageRange === '2-2.5') {
      return Math.min(4, Math.max(3, Math.floor(originalDuration * 0.4))); // 大幅缩短到3-4分钟
    } else if (ageRange === '2.5-3') {
      return Math.min(5, Math.max(3, Math.floor(originalDuration * 0.5))); // 缩短到3-5分钟
    } else { // 3-4岁
      return Math.min(5, Math.max(4, Math.floor(originalDuration * 0.6))); // 缩短到4-5分钟
    }
  }

  let successCount = 0;
  let errorCount = 0;

  console.log('开始批量更新游戏时长...\n');

  for (const game of longGames) {
    const newDuration = getAppropriateLength(game.age_range, game.duration);
    
    console.log(`更新: ${game.name}`);
    console.log(`  年龄: ${game.age_range}岁`);
    console.log(`  原时长: ${game.duration}分钟 -> 新时长: ${newDuration}分钟`);

    const { error: updateError } = await supabase
      .from('games')
      .update({ duration: newDuration })
      .eq('id', game.id);

    if (updateError) {
      console.log(`  ❌ 更新失败: ${updateError.message}`);
      errorCount++;
    } else {
      console.log(`  ✅ 更新成功`);
      successCount++;
    }
    console.log('');
  }

  console.log('=== 更新结果汇总 ===');
  console.log(`成功更新: ${successCount} 个游戏`);
  console.log(`更新失败: ${errorCount} 个游戏`);

  // 验证结果：检查还有多少个duration > 8的游戏
  const { count: remainingCount } = await supabase
    .from('games')
    .select('*', { count: 'exact' })
    .gt('duration', 8);

  console.log(`\n验证结果: 还有 ${remainingCount} 个游戏duration > 8分钟`);

  // 检查duration分布
  console.log('\n=== 更新后的时长分布 ===');
  for (let duration = 3; duration <= 8; duration++) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('duration', duration);
    console.log(`${duration}分钟: ${count} 个游戏`);
  }

  console.log('\n🎉 所有游戏时长已调整为适合幼儿注意力的合理范围！');
}

// 运行修复
fixLongDurationGames().catch(console.error);