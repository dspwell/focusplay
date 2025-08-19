// 第三批补充游戏：继续blocks_puzzle缺失组合

const batch3Games = [
  
  // ===== blocks_puzzle 2-2.5岁缺失组合继续补充 =====
  
  // 1. 2-2.5岁 + waiting + cognition (已有，但可能需要更多)
  {
    id: 'missing-023',
    name: '等待积木认知',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '在等待时间通过积木认知游戏，发展观察能力和基础认知技能，保持安静专注。',
    materials: '形状积木4-5块，认知卡片。',
    steps: [
      '形状识别（认知发展）：让孩子观察积木形状，说出"圆形"、"方形"',
      '颜色区分：引导孩子按颜色分类积木',
      '大小比较（认知训练）：比较积木的大小，学习"大"、"小"概念',
      '记忆游戏：藏起一块积木，让孩子说出少了什么'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '概念简单：使用2-2.5岁能理解的基础概念',
      '重复练习：多次重复认知要点',
      '耐心指导：给孩子充分时间思考',
      '积极鼓励：对每个正确回答都要表扬'
    ]
  },

  // 2. 2-2.5岁 + waiting + gross
  {
    id: 'missing-024',
    name: '等待积木体操',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '在等待场合用积木进行轻微大肢体运动，发展身体协调性，同时保持环境安静。',
    materials: '轻便积木6-8块，小毯子。',
    steps: [
      '积木抱举（大肢体发展）：让孩子抱着积木，慢慢举过头顶',
      '左右传递：坐着将积木从左手传到右手，再传回来',
      '脚踢练习（协调训练）：轻轻用脚尖碰触地上的积木',
      '身体摇摆：抱着积木轻轻左右摇摆身体'
    ],
    duration: 6,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '动作轻柔：所有动作都要轻缓，不影响他人',
      '空间控制：确保动作范围在座位附近',
      '安全注意：避免积木掉落产生噪音',
      '适度运动：根据孩子状态调整运动量'
    ]
  },

  // 3. 2-2.5岁 + waiting + social
  {
    id: 'missing-025',
    name: '等待积木交友',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '在等待环境中通过积木分享培养社交技能，学习与他人互动和分享的基本概念。',
    materials: '彩色积木6-8块，小布袋。',
    steps: [
      '积木介绍（社交启蒙）：向旁边的人展示自己的积木',
      '礼貌分享：练习说"请"、"谢谢"，分享积木给别人',
      '轮流游戏（社交规则）：建立简单的轮流规则',
      '友好交流：鼓励孩子与他人进行简单交流'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '社交引导：2-2.5岁社交能力有限，需要大人引导',
      '礼貌用语：重点教授基本礼貌用语',
      '冲突预防：及时介入防止争抢',
      '正面强化：对分享行为给予积极反馈'
    ]
  },

  // 4. 2-2.5岁 + bedtime + language
  {
    id: 'missing-026',
    name: '睡前积木故事会',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '在睡前通过积木编故事活动，发展语言表达能力，营造安静温馨的睡前氛围。',
    materials: '动物形状积木3-4个，小夜灯。',
    steps: [
      '角色命名（语言发展）：给每个积木动物起名字',
      '简单故事：用积木表演简单的睡前故事',
      '情感表达（语言练习）：让孩子说出积木的"心情"',
      '晚安仪式：和积木们一起说晚安'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '语调轻柔：保持温和安静的语调',
      '故事简单：适合2-2.5岁理解的简单情节',
      '时间控制：严格控制时间，不影响睡眠',
      '情感温暖：营造温馨的睡前氛围'
    ]
  },

  // 5. 2-2.5岁 + bedtime + cognition
  {
    id: 'missing-027',
    name: '睡前积木整理',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '通过睡前整理积木活动，发展分类和排序认知能力，培养整理习惯和秩序感。',
    materials: '积木4-6块，分格收纳盒。',
    steps: [
      '颜色分类（认知训练）：将积木按颜色放入不同格子',
      '大小排序：按从大到小的顺序排列积木',
      '形状配对（认知发展）：将相同形状的积木放在一起',
      '收纳习惯：养成睡前整理玩具的好习惯'
    ],
    duration: 6,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '操作简单：选择容易区分的颜色和形状',
      '习惯培养：将整理作为睡前固定程序',
      '耐心指导：给孩子足够时间完成分类',
      '成就感：完成后给予充分表扬'
    ]
  },

  // 6. 2-2.5岁 + bedtime + gross
  {
    id: 'missing-028',
    name: '睡前积木拉伸',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '通过积木道具进行睡前轻柔的大肢体拉伸活动，放松身体肌肉，为入睡做准备。',
    materials: '软质积木2-3块，瑜伽垫。',
    steps: [
      '抱块拉伸（大肢体发展）：抱着积木做简单的手臂拉伸',
      '腿部伸展：坐着将积木放在脚边，练习伸腿够积木',
      '身体摇摆（放松运动）：抱积木轻轻左右摇摆身体',
      '深呼吸：抱着积木做深呼吸放松练习'
    ],
    duration: 5,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '动作轻柔：所有动作都要轻缓舒缓',
      '时间短暂：避免过度运动影响睡眠',
      '材质安全：使用软质积木避免碰伤',
      '放松目的：重点在于放松而非锻炼'
    ]
  },

  // 7. 2-2.5岁 + bedtime + social
  {
    id: 'missing-029',
    name: '睡前积木陪伴',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '通过积木陪伴游戏培养情感连接和安全感，为独立入睡建立积极的情感基础。',
    materials: '软质积木1-2个，小毯子。',
    steps: [
      '积木朋友（情感发展）：选择一个积木作为睡觉的好朋友',
      '照顾游戏：给积木朋友"盖被子"，表现关爱',
      '情感交流（社交练习）：和积木朋友分享今天的心情',
      '一起入睡：将积木朋友放在枕边一起睡觉'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '情感温暖：营造温馨的情感氛围',
      '安全陪伴：积木可以作为过渡性客体',
      '习惯建立：可以成为固定的睡前仪式',
      '材质安全：确保积木适合放在床上'
    ]
  },

  // 8. 2-2.5岁 + travel + fine
  {
    id: 'missing-030',
    name: '旅途积木工艺',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '在旅途中通过精细的积木操作活动，锻炼手指灵活性和专注力，打发旅行时间。',
    materials: '迷你积木4-5块，旅行收纳盒。',
    steps: [
      '精细取放（精细动作）：小心地从盒子里取出和放入积木',
      '细致拼接：在有限空间内精确拼接积木',
      '手指练习（手眼协调）：用不同手指触摸积木的各个面',
      '整理收纳：旅途结束时整齐收好所有积木'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '空间适应：选择适合车内或飞机上使用的小积木',
      '防丢失：使用有盖的收纳盒防止积木掉落',
      '材质轻便：选择轻便易携带的材质',
      '安全固定：确保积木在移动中不会飞出'
    ]
  },

  // 9. 2-2.5岁 + travel + language
  {
    id: 'missing-031',
    name: '旅途积木导游',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '在旅途中通过积木角色扮演发展语言表达能力，学习旅行相关词汇和表达方式。',
    materials: '彩色积木4-6块，旅行图片。',
    steps: [
      '旅行描述（语言发展）：用积木代表旅行中看到的景物',
      '角色对话：让积木"旅行者"互相对话',
      '方向词汇（语言学习）：学习"前面"、"后面"等方向词',
      '旅行故事：编一个关于积木旅行的简单故事'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '词汇简单：使用适合2-2.5岁的基础旅行词汇',
      '情景结合：结合真实旅行情景进行语言练习',
      '互动引导：家长积极参与对话引导',
      '重复练习：多次重复新学的词汇'
    ]
  },

  // 10. 2-2.5岁 + travel + cognition
  {
    id: 'missing-032',
    name: '旅途积木观察家',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '在旅途中通过积木观察和模拟游戏，发展认知能力和空间感知，增强对环境的理解。',
    materials: '不同形状积木5-6块，观察卡片。',
    steps: [
      '形状模拟（认知训练）：用积木模拟窗外看到的建筑形状',
      '颜色匹配：找到与外界景物颜色相同的积木',
      '排列组合（空间认知）：按照看到的顺序排列积木',
      '记忆游戏：记住刚才看到的积木排列'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '观察引导：引导孩子观察窗外景物',
      '简化模拟：选择容易识别的形状进行模拟',
      '认知启发：通过比较发展认知能力',
      '安全注意：确保不影响行车安全'
    ]
  }

];

console.log('=== 第三批补充游戏总览 ===');
console.log(`总计 ${batch3Games.length} 个补充游戏\n`);

// 按年龄段统计
const byAge = batch3Games.reduce((acc, game) => {
  acc[game.age_range] = (acc[game.age_range] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('按年龄段统计:');
Object.entries(byAge).forEach(([age, count]) => {
  console.log(`  ${age}岁: ${count}个游戏`);
});

// 按场景统计
const byScene = batch3Games.reduce((acc, game) => {
  acc[game.scene] = (acc[game.scene] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按场景统计:');
Object.entries(byScene).forEach(([scene, count]) => {
  console.log(`  ${scene}: ${count}个游戏`);
});

// 按发展重点统计
const byFocus = batch3Games.reduce((acc, game) => {
  acc[game.focus] = (acc[game.focus] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按发展重点统计:');
Object.entries(byFocus).forEach(([focus, count]) => {
  console.log(`  ${focus}: ${count}个游戏`);
});

console.log('\n游戏列表:');
batch3Games.forEach((game, index) => {
  console.log(`${index + 1}. ${game.name} (${game.age_range}岁, ${game.scene}, ${game.props}, ${game.focus})`);
});

export { batch3Games };