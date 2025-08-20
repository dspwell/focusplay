import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function checkMissing_3_4() {
  console.log('=== 检查3-4岁年龄段缺失组合 ===\n');

  const ageRanges = ['3-4'];
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

  let missingCombinations = [];
  let coveredCombinations = 0;
  let totalCombinations = 0;

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
          
          if (!count || count === 0) {
            missingCombinations.push({
              age,
              scene: sceneNames[scene],
              prop: propNames[prop], 
              focus: focusNames[focus],
              sceneKey: scene,
              propKey: prop,
              focusKey: focus
            });
          } else {
            coveredCombinations++;
          }
        }
      }
    }
  }

  console.log(`总体覆盖情况: ${coveredCombinations}/${totalCombinations} (${(coveredCombinations/totalCombinations*100).toFixed(1)}%)`);
  console.log(`找到 ${missingCombinations.length} 个缺失组合\n`);

  // 按场景统计缺失情况
  const missingByScene = missingCombinations.reduce((acc, combo) => {
    acc[combo.scene] = (acc[combo.scene] || 0) + 1;
    return acc;
  }, {});

  console.log('按场景统计缺失情况:');
  Object.entries(missingByScene).forEach(([scene, count]) => {
    console.log(`  ${scene}: ${count}个`);
  });

  // 按道具统计缺失情况
  const missingByProp = missingCombinations.reduce((acc, combo) => {
    acc[combo.prop] = (acc[combo.prop] || 0) + 1;
    return acc;
  }, {});

  console.log('\n按道具统计缺失情况:');
  Object.entries(missingByProp).forEach(([prop, count]) => {
    console.log(`  ${prop}: ${count}个`);
  });

  // 按发展重点统计缺失情况
  const missingByFocus = missingCombinations.reduce((acc, combo) => {
    acc[combo.focus] = (acc[combo.focus] || 0) + 1;
    return acc;
  }, {});

  console.log('\n按发展重点统计缺失情况:');
  Object.entries(missingByFocus).forEach(([focus, count]) => {
    console.log(`  ${focus}: ${count}个`);
  });

  console.log('\n缺失组合详细列表:');
  missingCombinations.forEach((combo, index) => {
    console.log(`${index + 1}. ${combo.age}岁 + ${combo.scene} + ${combo.prop} + ${combo.focus}`);
  });

  return missingCombinations;
}

checkMissing_3_4().catch(console.error);