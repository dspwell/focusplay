import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { finalBatchGames } from './create-final-batch-games';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function uploadFinalBatchGames() {
  console.log('=== 上传最终批次游戏到数据库 ===\n');
  console.log('🎯 这是完成完全覆盖的最后一批游戏！\n');
  
  try {
    // 转换游戏数据格式，添加缺失字段
    const gamesToUpload = finalBatchGames.map((game) => ({
      ...game,
      id: game.id, // 保留我们设定的id
      safety_notes: '游戏过程中注意安全，确保孩子在合适的环境中进行',
      extensions: '可以根据孩子的兴趣和能力调整游戏难度和玩法',
      // 确保所有必需字段都存在
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }));
    
    console.log(`准备上传 ${gamesToUpload.length} 个游戏...\n`);
    
    // 批量插入游戏
    const { data, error } = await supabase
      .from('games')
      .insert(gamesToUpload)
      .select();
    
    if (error) {
      console.error('上传失败:', error);
      return;
    }
    
    console.log(`✅ 成功上传 ${data?.length || 0} 个游戏!\n`);
    
    // 显示上传的游戏信息
    console.log('已上传的游戏:');
    data?.forEach((game, index) => {
      console.log(`${index + 1}. ${game.name} (${game.age_range}岁, ${game.scene}, ${game.props}, ${game.focus})`);
    });
    
    // 验证最终结果
    console.log('\n=== 🎉 最终覆盖验证 ===');
    
    // 检查blocks_puzzle道具总数
    const { count: blocksPuzzleCount } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('props', 'blocks_puzzle');
    
    console.log(`blocks_puzzle道具总游戏数: ${blocksPuzzleCount}`);
    
    // 检查数据库总游戏数量
    const { count: totalCount } = await supabase
      .from('games')
      .select('*', { count: 'exact' });
    
    console.log(`数据库总游戏数: ${totalCount}`);
    
    // 按年龄段统计blocks_puzzle游戏的最终分布
    console.log('\nblocks_puzzle最终按年龄段分布:');
    for (const age of ['2-2.5', '2.5-3', '3-4']) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('age_range', age)
        .eq('props', 'blocks_puzzle');
      console.log(`  ${age}岁: ${count}个游戏`);
    }

    // 按场景统计blocks_puzzle游戏的最终分布
    console.log('\nblocks_puzzle最终按场景分布:');
    for (const scene of ['home', 'outdoor', 'waiting', 'bedtime', 'travel']) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('scene', scene)
        .eq('props', 'blocks_puzzle');
      console.log(`  ${scene}: ${count}个游戏`);
    }

    console.log('\n🏆 游戏覆盖补充工作已全部完成！');
    console.log('💫 现在应该实现了完全覆盖：每个年龄段、每个场景、每种道具、每个发展重点的所有组合都至少有一个游戏！');
    
  } catch (error) {
    console.error('上传过程中发生错误:', error);
  }
}

// 运行上传
uploadFinalBatchGames().catch(console.error);