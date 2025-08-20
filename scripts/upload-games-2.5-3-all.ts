import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { missingGames_2_5_3_batch1 } from './create-games-2.5-3-batch1';
import { missingGames_2_5_3_batch2 } from './create-games-2.5-3-batch2';
import { missingGames_2_5_3_batch3 } from './create-games-2.5-3-batch3';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function uploadGames_2_5_3() {
  console.log('=== 上传2.5-3岁年龄段缺失游戏到数据库 ===\n');
  
  // 合并所有三批游戏
  const allGames_2_5_3 = [
    ...missingGames_2_5_3_batch1,
    ...missingGames_2_5_3_batch2,
    ...missingGames_2_5_3_batch3
  ];
  
  console.log(`总共准备上传 ${allGames_2_5_3.length} 个游戏\n`);
  
  // 显示每批游戏数量
  console.log('批次分布:');
  console.log(`  第一批: ${missingGames_2_5_3_batch1.length}个游戏`);
  console.log(`  第二批: ${missingGames_2_5_3_batch2.length}个游戏`);
  console.log(`  第三批: ${missingGames_2_5_3_batch3.length}个游戏\n`);
  
  try {
    // 转换游戏数据格式，添加缺失字段
    const gamesToUpload = allGames_2_5_3.map((game) => ({
      ...game,
      name: game.name,
      safety_notes: '游戏过程中需要成人陪伴和监护，确保孩子在安全环境中进行活动。',
      extensions: '可以根据孩子的发展情况适当调整游戏难度和持续时间。',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }));
    
    console.log('开始批量插入2.5-3岁游戏...\n');
    
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
    
    // 按场景统计上传结果
    const uploadedByScene = data?.reduce((acc, game) => {
      acc[game.scene] = (acc[game.scene] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const sceneNames = {
      'home': '居家',
      'outdoor': '户外',
      'waiting': '等待时',
      'bedtime': '睡前',
      'travel': '旅途中'
    };
    
    console.log('按场景统计上传结果:');
    Object.entries(uploadedByScene || {}).forEach(([scene, count]) => {
      console.log(`  ${sceneNames[scene]}: ${count}个游戏`);
    });
    
    // 按道具统计上传结果
    const uploadedByProps = data?.reduce((acc, game) => {
      acc[game.props] = (acc[game.props] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const propNames = {
      'hands': '仅用手',
      'paper': '纸笔类',
      'blocks_puzzle': '积木/拼图',
      'books_pictures': '图书/图片卡',
      'household': '家居物品'
    };
    
    console.log('\n按道具统计上传结果:');
    Object.entries(uploadedByProps || {}).forEach(([prop, count]) => {
      console.log(`  ${propNames[prop]}: ${count}个游戏`);
    });
    
    // 按发展重点统计上传结果
    const uploadedByFocus = data?.reduce((acc, game) => {
      acc[game.focus] = (acc[game.focus] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const focusNames = {
      'fine': '精细动作',
      'language': '语言沟通',
      'cognition': '逻辑认知',
      'gross': '大肢体动作',
      'social': '社交情感'
    };
    
    console.log('\n按发展重点统计上传结果:');
    Object.entries(uploadedByFocus || {}).forEach(([focus, count]) => {
      console.log(`  ${focusNames[focus]}: ${count}个游戏`);
    });
    
    // 验证上传后的覆盖情况
    console.log('\n=== 验证2.5-3岁覆盖情况改善 ===');
    
    let coveredCombinations = 0;
    let totalCombinations = 0;
    
    const ageRanges = ['2.5-3'];
    const scenes = ['home', 'outdoor', 'waiting', 'bedtime', 'travel'];
    const props = ['hands', 'paper', 'blocks_puzzle', 'books_pictures', 'household'];
    const focuses = ['fine', 'language', 'cognition', 'gross', 'social'];
    
    for (const age of ageRanges) {
      for (const scene of scenes) {
        for (const prop of props) {
          for (const focus of focuses) {
            totalCombinations++;
            
            const { count } = await supabase
              .from('games')
              .select('*', { count: 'exact' })
              .eq('age_range', age)
              .eq('scene', scene)
              .eq('props', prop)
              .eq('focus', focus);
            
            if (count && count > 0) {
              coveredCombinations++;
            }
          }
        }
      }
    }
    
    const previousCoverage = 62; // 之前的覆盖数量 (49.6%)
    const improvement = coveredCombinations - previousCoverage;
    
    console.log(`2.5-3岁年龄段覆盖情况: ${coveredCombinations}/${totalCombinations} (${(coveredCombinations/totalCombinations*100).toFixed(1)}%)`);
    console.log(`本次改善: +${improvement}个组合 (从${previousCoverage}/125提升至${coveredCombinations}/125)`);
    console.log(`覆盖率提升: ${(previousCoverage/totalCombinations*100).toFixed(1)}% → ${(coveredCombinations/totalCombinations*100).toFixed(1)}%`);
    
    console.log('\n🎉 2.5-3岁年龄段缺失游戏补充完成！');
    console.log('🚀 2.5-3岁年龄段覆盖率大幅提升！');
    console.log('✨ 可以继续下一个年龄段的游戏补充了！');
    
  } catch (error) {
    console.error('上传过程中发生错误:', error);
  }
}

// 运行上传
uploadGames_2_5_3().catch(console.error);