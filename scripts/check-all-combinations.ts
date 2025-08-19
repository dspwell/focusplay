import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

// 定义所有维度
const dimensions = {
  ageRanges: ['2-2.5', '2.5-3', '3-4'],
  scenes: ['home', 'outdoor', 'waiting', 'bedtime', 'travel'],
  props: ['hands', 'paper', 'blocks_puzzle', 'books_pictures', 'household'],
  focuses: ['fine', 'language', 'cognition', 'gross', 'social']
};

interface MissingCombination {
  age_range: string;
  scene: string;
  props: string;
  focus: string;
  count: number;
}

async function checkAllCombinations() {
  console.log('=== 全面检查游戏覆盖情况 ===\n');
  
  const missingCombinations: MissingCombination[] = [];
  let totalCombinations = 0;
  let coveredCombinations = 0;
  
  // 检查每个可能的组合
  for (const ageRange of dimensions.ageRanges) {
    for (const scene of dimensions.scenes) {
      for (const props of dimensions.props) {
        for (const focus of dimensions.focuses) {
          totalCombinations++;
          
          const { count } = await supabase
            .from('games')
            .select('*', { count: 'exact' })
            .eq('age_range', ageRange)
            .eq('scene', scene)
            .eq('props', props)
            .eq('focus', focus);
          
          if (count === 0) {
            missingCombinations.push({
              age_range: ageRange,
              scene: scene,
              props: props,
              focus: focus,
              count: 0
            });
          } else {
            coveredCombinations++;
          }
        }
      }
    }
  }
  
  console.log(`总组合数: ${totalCombinations}`);
  console.log(`已覆盖组合: ${coveredCombinations}`);
  console.log(`缺失组合: ${missingCombinations.length}`);
  console.log(`覆盖率: ${((coveredCombinations / totalCombinations) * 100).toFixed(1)}%\n`);
  
  if (missingCombinations.length > 0) {
    console.log('=== 缺失的组合 ===');
    
    // 按场景分组显示
    const groupedByScene = missingCombinations.reduce((acc, combo) => {
      if (!acc[combo.scene]) acc[combo.scene] = [];
      acc[combo.scene].push(combo);
      return acc;
    }, {} as Record<string, MissingCombination[]>);
    
    Object.entries(groupedByScene).forEach(([scene, combos]) => {
      console.log(`\n${scene.toUpperCase()} 场景缺失 ${combos.length} 个组合:`);
      combos.forEach(combo => {
        console.log(`  - ${combo.age_range}岁 + ${combo.props} + ${combo.focus}`);
      });
    });
    
    // 统计分析
    console.log('\n=== 缺失统计分析 ===');
    
    const sceneStats = missingCombinations.reduce((acc, combo) => {
      acc[combo.scene] = (acc[combo.scene] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    console.log('\n按场景统计缺失数量:');
    Object.entries(sceneStats).forEach(([scene, count]) => {
      console.log(`  ${scene}: ${count}个缺失`);
    });
    
    const propsStats = missingCombinations.reduce((acc, combo) => {
      acc[combo.props] = (acc[combo.props] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    console.log('\n按道具统计缺失数量:');
    Object.entries(propsStats).forEach(([props, count]) => {
      console.log(`  ${props}: ${count}个缺失`);
    });
    
    const focusStats = missingCombinations.reduce((acc, combo) => {
      acc[combo.focus] = (acc[combo.focus] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    console.log('\n按发展重点统计缺失数量:');
    Object.entries(focusStats).forEach(([focus, count]) => {
      console.log(`  ${focus}: ${count}个缺失`);
    });
  } else {
    console.log('🎉 恭喜！所有组合都已覆盖！');
  }
  
  return missingCombinations;
}

async function checkDimensionCoverage() {
  console.log('\n=== 各维度单独覆盖检查 ===\n');
  
  // 检查年龄段覆盖
  console.log('年龄段覆盖情况:');
  for (const age of dimensions.ageRanges) {
    const { count } = await supabase.from('games').select('*', { count: 'exact' }).eq('age_range', age);
    console.log(`  ${age}岁: ${count}个游戏`);
  }
  
  // 检查场景覆盖
  console.log('\n场景覆盖情况:');
  for (const scene of dimensions.scenes) {
    const { count } = await supabase.from('games').select('*', { count: 'exact' }).eq('scene', scene);
    console.log(`  ${scene}: ${count}个游戏`);
  }
  
  // 检查道具覆盖
  console.log('\n道具覆盖情况:');
  for (const props of dimensions.props) {
    const { count } = await supabase.from('games').select('*', { count: 'exact' }).eq('props', props);
    console.log(`  ${props}: ${count}个游戏`);
  }
  
  // 检查发展重点覆盖
  console.log('\n发展重点覆盖情况:');
  for (const focus of dimensions.focuses) {
    const { count } = await supabase.from('games').select('*', { count: 'exact' }).eq('focus', focus);
    console.log(`  ${focus}: ${count}个游戏`);
  }
}

// 运行检查
async function runFullCheck() {
  await checkDimensionCoverage();
  const missingCombinations = await checkAllCombinations();
  
  if (missingCombinations.length > 0) {
    console.log(`\n需要创建 ${missingCombinations.length} 个新游戏来填补缺失的组合。`);
  }
  
  return missingCombinations;
}

export { runFullCheck, dimensions };

// 如果直接运行此文件
if (require.main === module) {
  runFullCheck().catch(console.error);
}