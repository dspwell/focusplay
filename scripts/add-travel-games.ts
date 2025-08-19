import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const travelGames = [
  {
    id: 'travel-001',
    name: '窗外找色彩',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'hands',
    focus: 'cognition',
    core_goal: '通过观察窗外景色提升专注力和观察能力',
    materials: '无需道具',
    steps: ['指着窗外某种颜色的物品', '让孩子找到同样颜色的其他东西', '每找到一个就表扬孩子', '逐渐增加要找的颜色数量'],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: ['选择明显的颜色如红色、蓝色开始', '保持游戏轻松愉快']
  },
  {
    id: 'travel-002', 
    name: '手指小剧场',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'hands',
    focus: 'fine',
    core_goal: '锻炼手指精细动作和想象力',
    materials: '双手',
    steps: ['用手指做小动物形状', '编简单的小故事', '让孩子模仿动作', '一起创造新的手指角色'],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: ['动作要简单易学', '故事内容要生动有趣']
  },
  {
    id: 'travel-003',
    name: '数字小游戏', 
    age_range: '3-4',
    scene: 'travel',
    props: 'hands',
    focus: 'cognition',
    core_goal: '练习数数和基础数学概念',
    materials: '无需道具',
    steps: ['数窗外经过的车辆', '数特定颜色的物品', '简单的加减法游戏', '用手指表示数字'],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet', 
    tips: ['从小数字开始', '结合实际物品进行计数']
  },
  {
    id: 'travel-004',
    name: '折纸小工艺',
    age_range: '2.5-3', 
    scene: 'travel',
    props: 'paper',
    focus: 'fine',
    core_goal: '锻炼手部精细动作和创造力',
    materials: '彩纸或普通纸张',
    steps: ['准备几张彩纸', '示范简单的折叠方法', '协助孩子完成折纸', '一起欣赏作品'],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    tips: ['选择简单的折纸形状', '耐心指导每个步骤']
  }
];

async function addTravelGames() {
  console.log('开始添加旅途游戏...');
  
  for (const game of travelGames) {
    const { error } = await supabase
      .from('games')
      .insert([game]);
    
    if (error) {
      console.error(`添加游戏 ${game.name} 失败:`, error);
    } else {
      console.log(`✅ 成功添加游戏: ${game.name}`);
    }
  }
  
  console.log('旅途游戏添加完成！');
}

addTravelGames().catch(console.error);