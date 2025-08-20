import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function getAllCombinationsStats() {
  console.log('=== 所有375个四维组合条件统计 ===\n');

  const ageRanges = ['2-2.5', '2.5-3', '3-4'];
  const scenes = ['home', 'outdoor', 'waiting', 'bedtime', 'travel'];
  const props = ['hands', 'paper', 'blocks_puzzle', 'books_pictures', 'household'];
  const focuses = ['fine', 'language', 'cognition', 'gross', 'social'];

  const sceneNames = {
    'home': '居家',
    'outdoor': '户外',
    'waiting': '等待时',
    'bedtime': '睡前',
    'travel': '旅途中'
  };

  const propNames = {
    'hands': '仅用手',
    'paper': '纸笔类',
    'blocks_puzzle': '积木/拼图',
    'books_pictures': '图书/图片卡',
    'household': '家居物品'
  };

  const focusNames = {
    'fine': '精细动作',
    'language': '语言沟通',
    'cognition': '逻辑认知',
    'gross': '大肢体动作',
    'social': '社交情感'
  };

  let totalCombinations = 0;
  let coveredCombinations = 0;
  let emptyCombinations = 0;
  
  console.log('格式: [年龄段] + [场景] + [道具] + [发展重点] = 游戏数量\n');
  
  for (const age of ageRanges) {
    console.log(`\n🎂 ========== ${age}岁年龄段 ==========`);
    
    for (const scene of scenes) {
      console.log(`\n📍 ${sceneNames[scene]}场景:`);
      
      for (const prop of props) {
        console.log(`\n  🎯 ${propNames[prop]}道具:`);
        
        for (const focus of focuses) {
          totalCombinations++;
          
          const { count, error } = await supabase
            .from('games')
            .select('*', { count: 'exact' })
            .eq('age_range', age)
            .eq('scene', scene)
            .eq('props', prop)
            .eq('focus', focus);

          if (error) {
            console.log(`    ❌ 查询错误 ${focusNames[focus]}: ${error.message}`);
            continue;
          }

          const gameCount = count || 0;
          
          if (gameCount > 0) {
            coveredCombinations++;
            console.log(`    ✅ ${focusNames[focus]}: ${gameCount}个游戏`);
          } else {
            emptyCombinations++;
            console.log(`    ❌ ${focusNames[focus]}: 0个游戏 (缺失)`);
          }
        }
      }
    }
  }

  console.log('\n\n=== 总体统计汇总 ===');
  console.log(`📊 总组合数: ${totalCombinations}个`);
  console.log(`✅ 已覆盖组合: ${coveredCombinations}个 (${(coveredCombinations/totalCombinations*100).toFixed(1)}%)`);
  console.log(`❌ 空白组合: ${emptyCombinations}个 (${(emptyCombinations/totalCombinations*100).toFixed(1)}%)`);

  // 按年龄段统计覆盖情况
  console.log('\n=== 按年龄段覆盖情况 ===');
  for (const age of ageRanges) {
    let ageTotal = 0;
    let ageCovered = 0;
    
    for (const scene of scenes) {
      for (const prop of props) {
        for (const focus of focuses) {
          ageTotal++;
          
          const { count } = await supabase
            .from('games')
            .select('*', { count: 'exact' })
            .eq('age_range', age)
            .eq('scene', scene)
            .eq('props', prop)
            .eq('focus', focus);

          if (count && count > 0) {
            ageCovered++;
          }
        }
      }
    }
    
    console.log(`${age}岁: ${ageCovered}/${ageTotal} (${(ageCovered/ageTotal*100).toFixed(1)}%)`);
  }

  // 按场景统计覆盖情况
  console.log('\n=== 按场景覆盖情况 ===');
  for (const scene of scenes) {
    let sceneTotal = 0;
    let sceneCovered = 0;
    
    for (const age of ageRanges) {
      for (const prop of props) {
        for (const focus of focuses) {
          sceneTotal++;
          
          const { count } = await supabase
            .from('games')
            .select('*', { count: 'exact' })
            .eq('age_range', age)
            .eq('scene', scene)
            .eq('props', prop)
            .eq('focus', focus);

          if (count && count > 0) {
            sceneCovered++;
          }
        }
      }
    }
    
    console.log(`${sceneNames[scene]}: ${sceneCovered}/${sceneTotal} (${(sceneCovered/sceneTotal*100).toFixed(1)}%)`);
  }

  // 按道具统计覆盖情况
  console.log('\n=== 按道具覆盖情况 ===');
  for (const prop of props) {
    let propTotal = 0;
    let propCovered = 0;
    
    for (const age of ageRanges) {
      for (const scene of scenes) {
        for (const focus of focuses) {
          propTotal++;
          
          const { count } = await supabase
            .from('games')
            .select('*', { count: 'exact' })
            .eq('age_range', age)
            .eq('scene', scene)
            .eq('props', prop)
            .eq('focus', focus);

          if (count && count > 0) {
            propCovered++;
          }
        }
      }
    }
    
    console.log(`${propNames[prop]}: ${propCovered}/${propTotal} (${(propCovered/propTotal*100).toFixed(1)}%)`);
  }

  // 按发展重点统计覆盖情况
  console.log('\n=== 按发展重点覆盖情况 ===');
  for (const focus of focuses) {
    let focusTotal = 0;
    let focusCovered = 0;
    
    for (const age of ageRanges) {
      for (const scene of scenes) {
        for (const prop of props) {
          focusTotal++;
          
          const { count } = await supabase
            .from('games')
            .select('*', { count: 'exact' })
            .eq('age_range', age)
            .eq('scene', scene)
            .eq('props', prop)
            .eq('focus', focus);

          if (count && count > 0) {
            focusCovered++;
          }
        }
      }
    }
    
    console.log(`${focusNames[focus]}: ${focusCovered}/${focusTotal} (${(focusCovered/focusTotal*100).toFixed(1)}%)`);
  }

  console.log('\n🎉 全部375个组合条件统计完成！');
}

// 运行统计
getAllCombinationsStats().catch(console.error);