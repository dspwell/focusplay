import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { batch7Games } from './create-batch7-games';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function uploadBatch7Games() {
  console.log('=== 上传第七批补充游戏到数据库 ===\n');
  
  try {
    // 转换游戏数据格式，添加缺失字段
    const gamesToUpload = batch7Games.map((game) => ({
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
    
    // 验证上传结果
    console.log('\n=== 验证上传结果 ===');
    
    // 检查3-4岁blocks_puzzle游戏数量
    const { count: age3to4BlocksCount } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('age_range', '3-4')
      .eq('props', 'blocks_puzzle');
    
    console.log(`3-4岁blocks_puzzle游戏数: ${age3to4BlocksCount}`);
    
    // 检查blocks_puzzle道具总数
    const { count: blocksPuzzleCount } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('props', 'blocks_puzzle');
    
    console.log(`blocks_puzzle道具总游戏数: ${blocksPuzzleCount}`);
    
    // 检查总游戏数量
    const { count: totalCount } = await supabase
      .from('games')
      .select('*', { count: 'exact' });
    
    console.log(`数据库总游戏数: ${totalCount}`);
    
    // 按年龄段统计blocks_puzzle游戏
    console.log('\nblocks_puzzle按年龄段分布:');
    for (const age of ['2-2.5', '2.5-3', '3-4']) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('age_range', age)
        .eq('props', 'blocks_puzzle');
      console.log(`  ${age}岁: ${count}个游戏`);
    }
    
  } catch (error) {
    console.error('上传过程中发生错误:', error);
  }
}

// 运行上传
uploadBatch7Games().catch(console.error);