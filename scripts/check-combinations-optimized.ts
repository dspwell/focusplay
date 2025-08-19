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

async function checkCriticalCombinations() {
  console.log('=== 检查关键组合的游戏覆盖情况 ===\n');
  
  const missingCombinations = [];
  
  // 重点检查一些关键组合
  const criticalCombinations = [
    // blocks_puzzle 道具的所有组合（这个道具游戏最少）
    ...dimensions.ageRanges.flatMap(age => 
      dimensions.scenes.flatMap(scene =>
        dimensions.focuses.map(focus => ({
          age_range: age,
          scene: scene,
          props: 'blocks_puzzle',
          focus: focus
        }))
      )
    ),
    // bedtime 场景的一些关键组合
    ...dimensions.ageRanges.flatMap(age => 
      dimensions.props.flatMap(props =>
        ['social', 'fine'].map(focus => ({
          age_range: age,
          scene: 'bedtime',
          props: props,
          focus: focus
        }))
      )
    )
  ];
  
  console.log(`检查 ${criticalCombinations.length} 个关键组合...\n`);
  
  let checkedCount = 0;
  for (const combo of criticalCombinations) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('age_range', combo.age_range)
      .eq('scene', combo.scene)
      .eq('props', combo.props)
      .eq('focus', combo.focus);
    
    if (count === 0) {
      missingCombinations.push(combo);
    }
    
    checkedCount++;
    if (checkedCount % 20 === 0) {
      console.log(`已检查 ${checkedCount}/${criticalCombinations.length} 个组合...`);
    }
  }
  
  console.log(`\n发现 ${missingCombinations.length} 个缺失的关键组合:`);
  
  if (missingCombinations.length > 0) {
    // 按道具分组显示
    const groupedByProps = missingCombinations.reduce((acc, combo) => {
      if (!acc[combo.props]) acc[combo.props] = [];
      acc[combo.props].push(combo);
      return acc;
    }, {} as Record<string, any[]>);
    
    Object.entries(groupedByProps).forEach(([props, combos]) => {
      console.log(`\n${props.toUpperCase()} 道具缺失 ${combos.length} 个组合:`);
      combos.slice(0, 10).forEach(combo => { // 只显示前10个
        console.log(`  - ${combo.age_range}岁 + ${combo.scene} + ${combo.focus}`);
      });
      if (combos.length > 10) {
        console.log(`  ... 还有 ${combos.length - 10} 个组合`);
      }
    });
  }
  
  return missingCombinations;
}

async function findMostNeededGames() {
  console.log('\n=== 寻找最需要补充的游戏类型 ===\n');
  
  // 检查每个道具在每个场景下的覆盖情况
  for (const props of dimensions.props) {
    console.log(`${props.toUpperCase()} 道具在各场景的分布:`);
    
    for (const scene of dimensions.scenes) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('props', props)
        .eq('scene', scene);
      
      console.log(`  ${scene}: ${count}个游戏`);
    }
    console.log('');
  }
  
  // 检查每个发展重点在每个场景下的覆盖情况
  console.log('各发展重点在不同场景的分布:');
  for (const focus of dimensions.focuses) {
    console.log(`\n${focus.toUpperCase()} 发展重点:`);
    
    for (const scene of dimensions.scenes) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('focus', focus)
        .eq('scene', scene);
      
      console.log(`  ${scene}: ${count}个游戏`);
    }
  }
}

// 专门检查blocks_puzzle道具的情况
async function checkBlocksPuzzleGames() {
  console.log('\n=== 检查 blocks_puzzle 道具游戏分布 ===\n');
  
  const { data: blockGames } = await supabase
    .from('games')
    .select('age_range, scene, focus')
    .eq('props', 'blocks_puzzle');
  
  console.log(`blocks_puzzle 道具总游戏数: ${blockGames?.length || 0}`);
  
  if (blockGames && blockGames.length > 0) {
    console.log('\n现有分布:');
    blockGames.forEach((game, index) => {
      console.log(`${index + 1}. ${game.age_range}岁 + ${game.scene} + ${game.focus}`);
    });
    
    // 分析缺失的组合
    console.log('\nblocks_puzzle 道具缺失的场景组合:');
    for (const scene of dimensions.scenes) {
      const sceneGames = blockGames.filter(g => g.scene === scene);
      if (sceneGames.length === 0) {
        console.log(`  ❌ ${scene} 场景: 0个游戏`);
      } else {
        console.log(`  ✅ ${scene} 场景: ${sceneGames.length}个游戏`);
      }
    }
  }
}

async function runOptimizedCheck() {
  await findMostNeededGames();
  await checkBlocksPuzzleGames();
  const missingCombinations = await checkCriticalCombinations();
  
  return missingCombinations;
}

// 运行检查
runOptimizedCheck().catch(console.error);