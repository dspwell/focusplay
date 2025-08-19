// 第七批补充游戏：3-4岁 blocks_puzzle 缺失组合

const batch7Games = [
  
  // ===== 3-4岁 + blocks_puzzle 缺失组合 =====
  
  // 1. 3-4岁 + home + fine
  {
    id: 'missing-063',
    name: '家庭积木建筑师',
    age_range: '3-4',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '通过复杂的积木建筑活动锻炼精细动作和空间规划能力，培养建筑设计思维。',
    materials: '建筑积木20-25块，设计图纸，小工具。',
    steps: [
      '设计规划（精细动作）：根据图纸进行详细的建筑设计',
      '精确拼装：按照设计进行精确的积木拼装',
      '细节完善（手眼协调）：对建筑细节进行精细调整',
      '结构测试：测试建筑的稳定性和功能性'
    ],
    duration: 30,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '图纸详细：使用适合3-4岁的详细建筑图纸',
      '工具安全：提供安全的小工具辅助建造',
      '耐心指导：给予充分的技术指导和支持',
      '成就展示：完成后展示建筑作品'
    ]
  },

  // 2. 3-4岁 + home + gross
  {
    id: 'missing-064',
    name: '家庭积木体能训练',
    age_range: '3-4',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '利用积木进行家庭体能训练，锻炼大肢体协调能力和运动技能。',
    materials: '运动积木15-20块，计时器，奖励贴纸。',
    steps: [
      '力量训练（大肢体发展）：用积木进行举重和搬运训练',
      '平衡挑战：进行各种平衡和协调性挑战',
      '速度练习（运动协调）：进行积木传递和整理的速度练习',
      '体能测试：完成综合体能测试，记录进步'
    ],
    duration: 25,
    difficulty: 4,
    activity_type: 'active',
    tips: [
      '安全第一：确保家中训练环境安全',
      '循序渐进：根据孩子能力逐步增加难度',
      '趣味性：保持训练的趣味性和挑战性',
      '休息充分：注意训练间隔和休息'
    ]
  },

  // 3. 3-4岁 + home + social
  {
    id: 'missing-065',
    name: '家庭积木议会',
    age_range: '3-4',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '通过积木议会活动培养领导力和协商能力，学习民主决策和团队合作。',
    materials: '议会积木12-15块，议事规则卡，投票箱。',
    steps: [
      '议题提出（社交领导）：提出关于积木建设的议题',
      '观点表达：每个成员表达自己的观点和建议',
      '协商讨论（社交技能）：通过讨论寻找共识',
      '民主投票：通过投票做出最终决定'
    ],
    duration: 20,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '规则清晰：建立清晰的议事规则',
      '平等参与：确保每个人都有发言机会',
      '尊重差异：教育孩子尊重不同观点',
      '决策执行：共同执行民主决策的结果'
    ]
  },

  // 4. 3-4岁 + outdoor + fine
  {
    id: 'missing-066',
    name: '户外积木工艺大师',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '在户外环境中进行高难度的积木工艺制作，锻炼精细动作和环境适应能力。',
    materials: '精密积木15-18块，防风罩，精细工具。',
    steps: [
      '环境适应（精细动作）：适应户外环境进行精细操作',
      '工艺制作：制作复杂精美的积木工艺品',
      '细节雕琢（手眼协调）：对工艺品进行精细雕琢',
      '作品保护：学会在户外环境中保护精细作品'
    ],
    duration: 25,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '环境准备：准备防风和稳定的操作环境',
      '工具精密：提供适合精细操作的工具',
      '耐心指导：户外精细操作需要更多耐心',
      '作品保存：教孩子如何保存户外作品'
    ]
  },

  // 5. 3-4岁 + outdoor + language
  {
    id: 'missing-067',
    name: '户外积木演讲家',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '在户外环境中进行积木主题演讲，发展公共演讲能力和语言表达技巧。',
    materials: '演讲积木8-10块，小话筒，演讲台。',
    steps: [
      '演讲准备（语言发展）：准备关于积木的演讲内容',
      '公众表达：在户外向观众进行正式演讲',
      '互动问答（沟通技能）：回答观众提出的问题',
      '演讲总结：对演讲进行总结和反思'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '内容准备：帮助孩子准备适当的演讲内容',
      '信心建立：建立孩子的演讲信心',
      '表达技巧：指导基本的演讲技巧',
      '鼓励支持：给予充分的鼓励和支持'
    ]
  },

  // 6. 3-4岁 + outdoor + cognition
  {
    id: 'missing-068',
    name: '户外积木实验室',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '建立户外积木实验室，进行科学实验和观察，发展科学思维和探索能力。',
    materials: '实验积木10-12块，测量工具，记录表。',
    steps: [
      '实验设计（认知发展）：设计关于积木的科学实验',
      '数据收集：系统收集实验数据和观察结果',
      '分析思考（逻辑思维）：分析实验结果，寻找规律',
      '结论报告：撰写简单的实验报告'
    ],
    duration: 30,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '实验安全：确保所有实验安全可行',
      '方法指导：指导科学的实验方法',
      '思维培养：培养科学思维和逻辑分析',
      '记录习惯：培养记录和总结的习惯'
    ]
  },

  // 7. 3-4岁 + outdoor + social
  {
    id: 'missing-069',
    name: '户外积木社区',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '建立户外积木社区，培养社区意识和公民责任感，发展高级社交技能。',
    materials: '社区积木20-25块，规则牌，管理工具。',
    steps: [
      '社区规划（社交组织）：共同规划积木社区的布局',
      '角色分工：分配不同的社区角色和责任',
      '合作建设（团队协作）：共同建设和维护积木社区',
      '社区管理：学习基本的社区管理和冲突解决'
    ],
    duration: 35,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '规则制定：共同制定社区规则',
      '责任分担：教育孩子承担社区责任',
      '合作精神：培养合作和互助精神',
      '冲突解决：学习和平解决冲突的方法'
    ]
  },

  // 8. 3-4岁 + waiting + fine
  {
    id: 'missing-070',
    name: '等待积木艺术家',
    age_range: '3-4',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '在等待时间进行积木艺术创作，锻炼精细动作和艺术审美能力。',
    materials: '艺术积木6-8块，设计本，彩笔。',
    steps: [
      '艺术构思（精细动作）：在设计本上构思艺术作品',
      '精细创作：进行精细的积木艺术创作',
      '细节完善（手眼协调）：对艺术作品进行细节完善',
      '作品展示：向他人展示和介绍艺术作品'
    ],
    duration: 20,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '创意鼓励：鼓励孩子发挥创意和想象',
      '技法指导：指导基本的艺术创作技法',
      '审美培养：培养孩子的艺术审美能力',
      '作品保护：教孩子保护自己的艺术作品'
    ]
  },

  // 9. 3-4岁 + waiting + language
  {
    id: 'missing-071',
    name: '等待积木播报员',
    age_range: '3-4',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '模拟新闻播报员，用积木作为道具进行新闻播报，发展语言表达和信息传达能力。',
    materials: '新闻积木4-6块，播报稿，小话筒。',
    steps: [
      '新闻采集（语言发展）：收集关于积木的"新闻"信息',
      '稿件编写：编写简单的新闻播报稿',
      '播报实践（表达技能）：进行正式的新闻播报',
      '观众互动：与观众进行新闻相关的互动'
    ],
    duration: 12,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '内容简单：选择适合孩子理解的新闻内容',
      '表达训练：训练清晰的语言表达',
      '信心建立：建立孩子的播报信心',
      '专业感：营造专业的播报氛围'
    ]
  },

  // 10. 3-4岁 + waiting + social
  {
    id: 'missing-072',
    name: '等待积木外交官',
    age_range: '3-4',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '模拟外交官角色，通过积木外交活动学习国际交往和协商技巧。',
    materials: '外交积木6-8块，国旗卡片，协议书。',
    steps: [
      '外交准备（社交技能）：准备外交会谈的议题和策略',
      '友好交流：与其他"国家"进行友好的外交交流',
      '协商谈判（沟通技巧）：就积木贸易等议题进行协商',
      '协议签署：签署友好合作协议'
    ],
    duration: 18,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '角色理解：帮助孩子理解外交官的角色',
      '礼仪教育：教授基本的外交礼仪',
      '和平理念：强调和平合作的重要性',
      '文化尊重：培养对不同文化的尊重'
    ]
  }

];

console.log('=== 第七批补充游戏总览 ===');
console.log(`总计 ${batch7Games.length} 个补充游戏\n`);

// 按年龄段统计
const byAge = batch7Games.reduce((acc, game) => {
  acc[game.age_range] = (acc[game.age_range] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('按年龄段统计:');
Object.entries(byAge).forEach(([age, count]) => {
  console.log(`  ${age}岁: ${count}个游戏`);
});

// 按场景统计
const byScene = batch7Games.reduce((acc, game) => {
  acc[game.scene] = (acc[game.scene] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按场景统计:');
Object.entries(byScene).forEach(([scene, count]) => {
  console.log(`  ${scene}: ${count}个游戏`);
});

// 按发展重点统计
const byFocus = batch7Games.reduce((acc, game) => {
  acc[game.focus] = (acc[game.focus] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按发展重点统计:');
Object.entries(byFocus).forEach(([focus, count]) => {
  console.log(`  ${focus}: ${count}个游戏`);
});

console.log('\n游戏列表:');
batch7Games.forEach((game, index) => {
  console.log(`${index + 1}. ${game.name} (${game.age_range}岁, ${game.scene}, ${game.props}, ${game.focus})`);
});

export { batch7Games };