import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function getComprehensiveGameStats() {
  console.log('=== 游戏数据库完整统计分析 ===\n');

  // 1. 总游戏数量
  const { count: totalCount } = await supabase
    .from('games')
    .select('*', { count: 'exact' });

  console.log(`📊 总游戏数量: ${totalCount}个\n`);

  // 2. 按年龄段统计
  console.log('🎂 按年龄段统计:');
  const ageRanges = ['2-2.5', '2.5-3', '3-4'];
  for (const age of ageRanges) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('age_range', age);
    console.log(`   ${age}岁: ${count}个游戏`);
  }
  console.log('');

  // 3. 按场景统计
  console.log('🏠 按场景统计:');
  const scenes = ['home', 'outdoor', 'waiting', 'bedtime', 'travel'];
  const sceneNames = {
    'home': '居家',
    'outdoor': '户外',
    'waiting': '等待时',
    'bedtime': '睡前',
    'travel': '旅途中'
  };
  for (const scene of scenes) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('scene', scene);
    console.log(`   ${sceneNames[scene]}: ${count}个游戏`);
  }
  console.log('');

  // 4. 按道具统计
  console.log('🎯 按道具统计:');
  const props = ['hands', 'paper', 'blocks_puzzle', 'books_pictures', 'household'];
  const propNames = {
    'hands': '仅用手',
    'paper': '纸笔类',
    'blocks_puzzle': '积木/拼图',
    'books_pictures': '图书/图片卡',
    'household': '家居物品'
  };
  for (const prop of props) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('props', prop);
    console.log(`   ${propNames[prop]}: ${count}个游戏`);
  }
  console.log('');

  // 5. 按发展重点统计
  console.log('🎯 按发展重点统计:');
  const focuses = ['fine', 'language', 'cognition', 'gross', 'social'];
  const focusNames = {
    'fine': '精细动作',
    'language': '语言沟通',
    'cognition': '逻辑认知',
    'gross': '大肢体动作',
    'social': '社交情感'
  };
  for (const focus of focuses) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('focus', focus);
    console.log(`   ${focusNames[focus]}: ${count}个游戏`);
  }
  console.log('');

  // 6. 按时长统计
  console.log('⏰ 按游戏时长统计:');
  for (let duration = 3; duration <= 8; duration++) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('duration', duration);
    console.log(`   ${duration}分钟: ${count}个游戏`);
  }
  console.log('');

  // 7. 按难度统计
  console.log('⭐ 按游戏难度统计:');
  for (let difficulty = 1; difficulty <= 5; difficulty++) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('difficulty', difficulty);
    console.log(`   ${difficulty}星难度: ${count}个游戏`);
  }
  console.log('');

  // 8. 按活动类型统计
  console.log('🏃‍♂️ 按活动类型统计:');
  const activityTypes = ['quiet', 'active'];
  const activityNames = {
    'quiet': '安静型',
    'active': '活跃型'
  };
  for (const type of activityTypes) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('activity_type', type);
    console.log(`   ${activityNames[type]}: ${count}个游戏`);
  }
  console.log('');

  // 9. 年龄段 × 场景 交叉统计
  console.log('📈 年龄段 × 场景 交叉统计:');
  console.log('     | 居家  | 户外  | 等待时 | 睡前  | 旅途中');
  console.log('-----|-------|-------|-------|-------|-------');
  
  for (const age of ageRanges) {
    let row = `${age.padEnd(4, ' ')} |`;
    for (const scene of scenes) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('age_range', age)
        .eq('scene', scene);
      row += ` ${count.toString().padStart(4, ' ')} |`;
    }
    console.log(row);
  }
  console.log('');

  // 10. 年龄段 × 道具 交叉统计
  console.log('📈 年龄段 × 道具 交叉统计:');
  console.log('     | 仅用手| 纸笔类| 积木  | 图书  | 家居物品');
  console.log('-----|-------|-------|-------|-------|--------');
  
  for (const age of ageRanges) {
    let row = `${age.padEnd(4, ' ')} |`;
    for (const prop of props) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('age_range', age)
        .eq('props', prop);
      row += ` ${count.toString().padStart(5, ' ')} |`;
    }
    console.log(row);
  }
  console.log('');

  // 11. 年龄段 × 发展重点 交叉统计
  console.log('📈 年龄段 × 发展重点 交叉统计:');
  console.log('     | 精细  | 语言  | 认知  | 大动作| 社交');
  console.log('-----|-------|-------|-------|-------|-------');
  
  for (const age of ageRanges) {
    let row = `${age.padEnd(4, ' ')} |`;
    for (const focus of focuses) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('age_range', age)
        .eq('focus', focus);
      row += ` ${count.toString().padStart(5, ' ')} |`;
    }
    console.log(row);
  }
  console.log('');

  // 12. 场景 × 道具 交叉统计
  console.log('📈 场景 × 道具 交叉统计:');
  console.log('     | 仅用手| 纸笔类| 积木  | 图书  | 家居物品');
  console.log('-----|-------|-------|-------|-------|--------');
  
  for (const scene of scenes) {
    let row = `${sceneNames[scene].padEnd(4, ' ')} |`;
    for (const prop of props) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('scene', scene)
        .eq('props', prop);
      row += ` ${count.toString().padStart(5, ' ')} |`;
    }
    console.log(row);
  }
  console.log('');

  // 13. 场景 × 发展重点 交叉统计
  console.log('📈 场景 × 发展重点 交叉统计:');
  console.log('     | 精细  | 语言  | 认知  | 大动作| 社交');
  console.log('-----|-------|-------|-------|-------|-------');
  
  for (const scene of scenes) {
    let row = `${sceneNames[scene].padEnd(4, ' ')} |`;
    for (const focus of focuses) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('scene', scene)
        .eq('focus', focus);
      row += ` ${count.toString().padStart(5, ' ')} |`;
    }
    console.log(row);
  }
  console.log('');

  // 14. 道具 × 发展重点 交叉统计
  console.log('📈 道具 × 发展重点 交叉统计:');
  console.log('        | 精细  | 语言  | 认知  | 大动作| 社交');
  console.log('--------|-------|-------|-------|-------|-------');
  
  for (const prop of props) {
    let row = `${propNames[prop].padEnd(7, ' ')} |`;
    for (const focus of focuses) {
      const { count } = await supabase
        .from('games')
        .select('*', { count: 'exact' })
        .eq('props', prop)
        .eq('focus', focus);
      row += ` ${count.toString().padStart(5, ' ')} |`;
    }
    console.log(row);
  }
  console.log('');

  // 15. 检查覆盖率
  console.log('🎯 覆盖率检查 (3×5×5×5 = 375个可能组合):');
  
  let coveredCombinations = 0;
  let missingCombinations = [];
  
  for (const age of ageRanges) {
    for (const scene of scenes) {
      for (const prop of props) {
        for (const focus of focuses) {
          const { count } = await supabase
            .from('games')
            .select('*', { count: 'exact' })
            .eq('age_range', age)
            .eq('scene', scene)
            .eq('props', prop)
            .eq('focus', focus);
          
          if (count && count > 0) {
            coveredCombinations++;
          } else {
            missingCombinations.push(`${age}+${scene}+${prop}+${focus}`);
          }
        }
      }
    }
  }
  
  console.log(`✅ 已覆盖组合: ${coveredCombinations}/375 (${(coveredCombinations/375*100).toFixed(1)}%)`);
  console.log(`❌ 缺失组合: ${missingCombinations.length}个`);
  
  if (missingCombinations.length > 0) {
    console.log('\n缺失的组合列表:');
    missingCombinations.forEach((combo, index) => {
      console.log(`${index + 1}. ${combo}`);
    });
  }

  console.log('\n🎉 统计分析完成！');
}

// 运行统计
getComprehensiveGameStats().catch(console.error);