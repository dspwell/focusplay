import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { supplementGames } from './missing-games-supplement';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function uploadSupplementGames() {
  console.log('=== 上传补充游戏到数据库 ===\n');
  
  try {
    // 转换游戏数据格式，保留id并添加缺失字段
    const gamesToUpload = supplementGames.map((game, index) => ({
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
    
    // 检查blocks_puzzle道具的游戏数量
    const { count: blocksPuzzleCount } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('props', 'blocks_puzzle');
    
    console.log(`blocks_puzzle道具总游戏数: ${blocksPuzzleCount}`);
    
    // 检查bedtime场景的精细动作游戏
    const { count: bedtimeFineCount } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('scene', 'bedtime')
      .eq('focus', 'fine');
    
    console.log(`bedtime场景精细动作游戏数: ${bedtimeFineCount}`);
    
    // 检查waiting场景的大肢体动作游戏
    const { count: waitingGrossCount } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('scene', 'waiting')
      .eq('focus', 'gross');
    
    console.log(`waiting场景大肢体动作游戏数: ${waitingGrossCount}`);
    
  } catch (error) {
    console.error('上传过程中发生错误:', error);
  }
}

// 运行上传
uploadSupplementGames().catch(console.error);