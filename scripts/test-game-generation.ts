import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function testGameGeneration() {
  console.log('=== 测试游戏生成功能 ===\n');

  // 测试用户提到的特定组合
  console.log('1. 测试用户提到的问题组合：');
  console.log('条件: 2-2.5岁 + 居家 + 纸笔类 + 智能推荐 (无focus筛选)\n');

  const { data: games1, error: error1 } = await supabase
    .from('games')
    .select('id, name, age_range, scene, props, focus, duration')
    .eq('age_range', '2-2.5')
    .eq('scene', 'home')
    .eq('props', 'paper');

  if (error1) {
    console.error('❌ 查询失败:', error1);
    return;
  }

  console.log(`找到 ${games1?.length || 0} 个匹配的游戏:`);
  games1?.slice(0, 5).forEach((game, index) => {
    console.log(`  ${index + 1}. ${game.name}`);
    console.log(`     - focus: ${game.focus}, duration: ${game.duration}分钟`);
  });

  if (games1 && games1.length > 5) {
    console.log(`     ... 还有 ${games1.length - 5} 个游戏`);
  }
  console.log('');

  // 测试有具体focus的组合
  console.log('2. 测试有具体focus的组合：');
  console.log('条件: 2-2.5岁 + 居家 + 纸笔类 + fine\n');

  const { data: games2, error: error2 } = await supabase
    .from('games')
    .select('id, name, age_range, scene, props, focus, duration')
    .eq('age_range', '2-2.5')
    .eq('scene', 'home')
    .eq('props', 'paper')
    .eq('focus', 'fine');

  if (error2) {
    console.error('❌ 查询失败:', error2);
  } else {
    console.log(`找到 ${games2?.length || 0} 个匹配的游戏:`);
    games2?.forEach((game, index) => {
      console.log(`  ${index + 1}. ${game.name} (${game.duration}分钟)`);
    });
  }
  console.log('');

  // 测试API调用
  console.log('3. 测试实际API调用：');
  
  const testCases = [
    {
      name: '用户问题组合',
      body: {
        age_range: '2-2.5',
        scene: 'home', 
        props: 'paper'
        // focus 不传，代表智能推荐
      }
    },
    {
      name: '有focus的组合',
      body: {
        age_range: '2-2.5',
        scene: 'home',
        props: 'paper',
        focus: 'fine'
      }
    },
    {
      name: '其他年龄段测试',
      body: {
        age_range: '3-4',
        scene: 'home',
        props: 'paper',
        focus: 'cognition'
      }
    }
  ];

  for (const testCase of testCases) {
    console.log(`\n${testCase.name}:`);
    console.log(`请求参数:`, testCase.body);
    
    try {
      const response = await fetch('http://localhost:3000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testCase.body),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.log(`❌ API调用失败 (${response.status}): ${errorText}`);
        continue;
      }

      const data = await response.json();
      if (data.success && data.data) {
        console.log(`✅ API调用成功`);
        console.log(`   游戏: ${data.data.game_name}`);
        console.log(`   时长: ${data.data.duration_min}分钟`);
        console.log(`   难度: ${data.data.difficulty_star}/5`);
      } else {
        console.log(`❌ API返回格式错误:`, data);
      }
    } catch (error) {
      console.log(`❌ API调用异常:`, error);
    }
  }

  console.log('\n=== 游戏时长验证 ===');
  console.log('检查是否还有duration > 8分钟的游戏...\n');

  const { count: longDurationCount } = await supabase
    .from('games')
    .select('*', { count: 'exact' })
    .gt('duration', 8);

  console.log(`duration > 8分钟的游戏数量: ${longDurationCount}`);

  // 检查duration分布
  const durations = [3, 4, 5, 6, 7, 8];
  for (const duration of durations) {
    const { count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .eq('duration', duration);
    console.log(`${duration}分钟的游戏: ${count}个`);
  }

  console.log('\n🎉 游戏生成功能测试完成！');
}

// 运行测试
testGameGeneration().catch(console.error);