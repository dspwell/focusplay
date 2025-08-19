// 预览：旅途中场景的游戏设计

const travelGames = [
  // 2-2.5岁年龄段
  {
    id: 'travel-hands-001',
    name: '窗外找色彩',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'hands', 
    focus: 'cognition',
    core_goal: '通过观察窗外景色，训练专注力和颜色认知能力',
    materials: '无需道具，利用窗外景色',
    steps: [
      '家长指着窗外一个红色物体说"红色"',
      '引导孩子寻找窗外其他红色的东西',
      '每找到一个就给予鼓励和表扬',
      '逐渐加入蓝色、黄色等其他颜色'
    ],
    duration: 5,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '选择明显易识别的颜色开始，如红色校车、蓝色天空',
      '保持声音轻柔，不影响其他乘客',
      '如果孩子注意力分散，可以轻抚他的手臂重新吸引注意',
      '每次游戏时间不宜过长，避免孩子疲劳'
    ]
  },

  {
    id: 'travel-paper-001', 
    name: '简易涂鸦本',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'paper',
    focus: 'fine', 
    core_goal: '锻炼手部精细动作，培养创造力和专注力',
    materials: '纸张和彩色笔（粗头、安全）',
    steps: [
      '准备几张白纸和2-3支粗头彩笔',
      '让孩子自由涂鸦，不限制内容',
      '适时询问"这是什么？"引导表达',
      '完成后一起欣赏作品，给予肯定'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择粗头、可水洗的彩笔，避免弄脏衣物',
      '准备湿巾随时清洁小手',
      '不要过度指导，让孩子自由创作',
      '可以准备小夹子固定纸张，防止滑动'
    ]
  },

  // 2.5-3岁年龄段
  {
    id: 'travel-hands-002',
    name: '手指小剧场',
    age_range: '2.5-3',
    scene: 'travel', 
    props: 'hands',
    focus: 'language',
    core_goal: '通过手指游戏发展语言能力和想象力，保持专注',
    materials: '双手',
    steps: [
      '用手指做兔子耳朵，说"小兔子蹦蹦跳"',
      '做小鸟飞翔动作，配上"小鸟飞呀飞"',
      '让孩子模仿手势和语言',
      '逐渐加入更多小动物角色'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '动作要简单明了，便于孩子模仿',
      '配合生动的表情和语调',
      '鼓励孩子自己创造新的手指角色',
      '控制音量，保持安静的旅行环境'
    ]
  },

  {
    id: 'travel-household-001',
    name: '神奇小背包',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'household',
    focus: 'cognition',
    core_goal: '通过触觉游戏训练感知能力和专注力',
    materials: '小袋子和3-4个安全小物品（钥匙、小瓶子等）',
    steps: [
      '将小物品放入不透明袋子中',
      '让孩子伸手摸一个物品',
      '引导孩子猜测"这是什么？"',
      '取出验证，猜对了就表扬'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '选择形状差异明显的安全物品',
      '确保所有物品都是圆滑无尖角的',
      '可以先让孩子看一遍物品再开始游戏',
      '根据孩子反应调整物品数量'
    ]
  },

  // 3-4岁年龄段
  {
    id: 'travel-paper-002',
    name: '故事接龙画',
    age_range: '3-4',
    scene: 'travel',
    props: 'paper',
    focus: 'language',
    core_goal: '结合绘画和语言表达，发展创造力和叙述能力',
    materials: '纸张、彩笔、简单贴纸',
    steps: [
      '家长在纸上画一个简单图形（如圆圈）',
      '问孩子"这可以是什么？"',
      '根据孩子想法继续添加元素',
      '一起编一个关于这幅画的小故事'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '从简单图形开始，激发想象力',
      '耐心听取孩子的想法，不要急于纠正',
      '可以用贴纸增加趣味性',
      '适时提问引导故事发展'
    ]
  },

  {
    id: 'travel-hands-003',
    name: '数字小侦探',
    age_range: '3-4', 
    scene: 'travel',
    props: 'hands',
    focus: 'cognition',
    core_goal: '通过观察和计数锻炼数学思维和专注力',
    materials: '无需道具',
    steps: [
      '让孩子数窗外经过的红色汽车',
      '数到5辆后换成蓝色汽车',
      '可以用手指帮助计数',
      '设定小目标，如"找到3辆卡车"'
    ],
    duration: 12,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '从小数字开始，逐渐增加难度',
      '可以同时练习颜色和数字概念',
      '如果车辆太少，可以改数其他物品',
      '用夸张的语调增加游戏乐趣'
    ]
  }
];

console.log('旅途中场景游戏预览：');
console.log('总计', travelGames.length, '个游戏');
console.log('');

travelGames.forEach((game, index) => {
  console.log(`${index + 1}. ${game.name} (${game.age_range}岁)`);
  console.log(`   场景: ${game.scene}, 道具: ${game.props}, 重点: ${game.focus}`);
  console.log(`   目标: ${game.core_goal}`);
  console.log(`   时长: ${game.duration}分钟, 难度: ${game.difficulty}/5`);
  console.log('');
});