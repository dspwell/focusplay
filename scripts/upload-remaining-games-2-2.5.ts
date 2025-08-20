import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { allRemainingGames } from './create-remaining-games-2-2.5';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function uploadRemainingGames() {
  console.log('=== 上传2-2.5岁年龄段剩余缺失游戏到数据库 ===\n');
  
  console.log(`总共准备上传 ${allRemainingGames.length} 个剩余游戏\n`);
  
  try {
    // 转换游戏数据格式，添加缺失字段
    const gamesToUpload = allRemainingGames.map((game) => ({
      ...game,
      name: game.name,
      safety_notes: '游戏过程中需要成人陪伴和监护，确保孩子在安全环境中进行活动。',
      extensions: '可以根据孩子的发展情况适当调整游戏难度和持续时间。',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }));
    
    console.log('开始批量插入剩余游戏...\n');
    
    // 批量插入游戏
    const { data, error } = await supabase
      .from('games')
      .insert(gamesToUpload)
      .select();
    
    if (error) {
      console.error('上传失败:', error);
      return;
    }
    
    console.log(`✅ 成功上传 ${data?.length || 0} 个剩余游戏!\n`);
    
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
    
    // 验证最终覆盖情况
    console.log('\n=== 验证2-2.5岁最终覆盖情况 ===');
    
    let coveredCombinations = 0;
    let totalCombinations = 0;
    
    const ageRanges = ['2-2.5'];
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
    
    console.log(`2-2.5岁年龄段最终覆盖情况: ${coveredCombinations}/${totalCombinations} (${(coveredCombinations/totalCombinations*100).toFixed(1)}%)`);
    
    // 计算改善幅度
    const previousCoverage = 98; // 之前上传36个游戏后的覆盖数
    const improvement = coveredCombinations - previousCoverage;
    console.log(`本次改善: +${improvement}个组合 (从${previousCoverage}/125提升至${coveredCombinations}/125)`);
    
    console.log('\n🎉 2-2.5岁年龄段剩余游戏补充完成！');
    console.log('🔥 2-2.5岁年龄段已实现近乎完整覆盖！');
    console.log('✨ 可以开始下一个年龄段的游戏补充了！');
    
  } catch (error) {
    console.error('上传过程中发生错误:', error);
  }
}

// 运行上传
uploadRemainingGames().catch(console.error);