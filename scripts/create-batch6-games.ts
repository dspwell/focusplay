// 第六批补充游戏：2.5-3岁 blocks_puzzle 缺失组合

const batch6Games = [
  
  // ===== 2.5-3岁 + blocks_puzzle 缺失组合 =====
  
  // 1. 2.5-3岁 + home + social
  {
    id: 'missing-053',
    name: '家庭积木分享会',
    age_range: '2.5-3',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '通过积木分享活动培养社交技能和合作意识，学习轮流、分享等社交概念。',
    materials: '彩色积木12-15块，分享盒。',
    steps: [
      '积木介绍（社交启蒙）：向家人介绍每个积木的特点',
      '轮流搭建：建立轮流使用积木的规则',
      '合作项目（合作技能）：和家人一起完成一个大作品',
      '成果分享：一起欣赏作品，分享制作感受'
    ],
    duration: 18,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '规则明确：建立清晰的分享和轮流规则',
      '耐心引导：2.5-3岁孩子社交技能在发展中',
      '积极鼓励：对分享行为给予及时表扬',
      '冲突处理：教孩子如何处理意见分歧'
    ]
  },

  // 2. 2.5-3岁 + outdoor + fine
  {
    id: 'missing-054',
    name: '户外积木精工坊',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '在户外环境中进行精细的积木操作，锻炼手指灵活性和环境适应能力。',
    materials: '精细积木8-10块，户外垫子，收纳盒。',
    steps: [
      '精细拼装（精细动作）：在户外环境中进行精确的积木拼装',
      '细节调整：适应户外环境，调整拼装的精确度',
      '稳定搭建（手眼协调）：在略有风力的环境中保持积木稳定',
      '作品保护：学会在户外环境中保护精细作品'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '环境选择：选择相对平静的户外环境',
      '工具准备：准备防风措施和稳定垫子',
      '耐心指导：户外精细操作需要更多耐心',
      '安全第一：确保操作环境安全无障碍'
    ]
  },

  // 3. 2.5-3岁 + outdoor + language
  {
    id: 'missing-055',
    name: '户外积木解说员',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '结合户外环境进行积木解说，发展语言表达能力和环境观察力。',
    materials: '积木10-12块，小话筒，户外观察卡。',
    steps: [
      '环境描述（语言发展）：用语言描述户外环境特点',
      '积木解说：详细解说积木的特征和用途',
      '情景结合（表达练习）：将积木与户外景物联系起来描述',
      '观众互动：回答"观众"的提问，练习对话'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '词汇丰富：引导使用与自然相关的词汇',
      '声音控制：在户外环境中练习适当的音量',
      '观察引导：引导孩子观察并描述周围环境',
      '表达鼓励：鼓励孩子大胆表达想法'
    ]
  },

  // 4. 2.5-3岁 + outdoor + cognition
  {
    id: 'missing-056',
    name: '户外积木科学家',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '通过户外积木实验培养观察力和逻辑思维，发展科学探索的兴趣。',
    materials: '实验积木6-8块，测量工具，记录纸。',
    steps: [
      '观察实验（认知发展）：观察积木在不同表面上的稳定性',
      '比较分析：比较积木在室内外环境中的不同表现',
      '规律发现（逻辑思维）：发现影响积木稳定的因素',
      '结论记录：用简单方式记录观察结果'
    ],
    duration: 20,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '实验简单：选择适合2.5-3岁理解的简单实验',
      '安全操作：确保所有实验操作安全',
      '耐心观察：给孩子充分时间观察和思考',
      '结论引导：适当引导孩子得出简单结论'
    ]
  },

  // 5. 2.5-3岁 + outdoor + gross
  {
    id: 'missing-057',
    name: '户外积木运动员',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '利用户外空间进行积木大肢体运动，锻炼身体协调性和运动技能。',
    materials: '运动积木10-15块，标记圆锥，计时器。',
    steps: [
      '积木搬运（大肢体发展）：进行各种方式的积木搬运比赛',
      '投掷练习：向指定目标投掷积木，锻炼手臂协调',
      '障碍跨越（平衡协调）：跨越或绕过积木设置的障碍',
      '团队接力：进行简单的积木传递接力游戏'
    ],
    duration: 20,
    difficulty: 3,
    activity_type: 'active',
    tips: [
      '空间充足：确保有足够的户外活动空间',
      '安全距离：保持安全的活动距离',
      '积木选择：使用适合户外运动的轻便积木',
      '适度运动：根据孩子体力调整运动强度'
    ]
  },

  // 6. 2.5-3岁 + outdoor + social
  {
    id: 'missing-058',
    name: '户外积木社交圈',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '在户外环境中通过积木活动培养社交技能，学习与他人合作和交流。',
    materials: '社交积木15-20块，野餐毯，分享袋。',
    steps: [
      '社交介绍（社交启蒙）：主动向其他小朋友介绍自己的积木',
      '邀请合作：学习邀请别人一起搭建积木',
      '分享游戏（社交技能）：主动分享积木给其他孩子',
      '友谊建立：通过积木活动建立新的友谊'
    ],
    duration: 25,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '社交引导：家长适时提供社交指导',
      '冲突预防：教孩子如何避免和解决冲突',
      '礼貌用语：强化使用礼貌用语',
      '友谊鼓励：鼓励孩子主动结交新朋友'
    ]
  },

  // 7. 2.5-3岁 + waiting + fine
  {
    id: 'missing-059',
    name: '等待积木工程师',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '在等待时间进行精细的积木工程活动，锻炼手指精细动作和专注力。',
    materials: '迷你工程积木6-8块，小工具，设计图。',
    steps: [
      '图纸理解（精细动作）：仔细观察简单的搭建图纸',
      '精确搭建：按照图纸进行精确的积木拼装',
      '细节完善（手眼协调）：对搭建细节进行精细调整',
      '质量检查：检查搭建质量，确保结构稳定'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '图纸简化：使用适合2.5-3岁理解的简单图纸',
      '空间限制：适应等待场所的空间限制',
      '声音控制：保持安静不影响他人',
      '专注培养：鼓励孩子专注完成工程'
    ]
  },

  // 8. 2.5-3岁 + waiting + language
  {
    id: 'missing-060',
    name: '等待积木故事家',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '在等待时间通过积木编故事培养语言表达能力和创造性思维。',
    materials: '故事积木4-6块，故事卡片，小本子。',
    steps: [
      '角色设定（语言发展）：为每个积木设定角色和性格',
      '情节创编：编创简单有趣的故事情节',
      '对话练习（表达技能）：练习角色间的对话',
      '故事分享：向家人分享创编的故事'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '故事简单：适合2.5-3岁理解和表达的故事',
      '想象鼓励：鼓励孩子发挥想象力',
      '语言指导：适当指导语言表达技巧',
      '耐心倾听：给孩子充分的表达时间'
    ]
  },

  // 9. 2.5-3岁 + waiting + social
  {
    id: 'missing-061',
    name: '等待积木礼仪课',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '在等待环境中通过积木活动学习基本社交礼仪和公共场所行为规范。',
    materials: '礼仪积木5-6块，行为卡片。',
    steps: [
      '礼貌用语（社交礼仪）：练习"请"、"谢谢"、"对不起"等用语',
      '分享练习：在公共场所练习与他人分享积木',
      '排队游戏（社交规则）：用积木练习排队等候的概念',
      '公德意识：学习在公共场所保持安静和整洁'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '礼仪强化：重点强化基本礼貌用语',
      '行为示范：家长做好行为示范',
      '规则解释：用简单语言解释公共场所规则',
      '正面引导：用正面方式引导正确行为'
    ]
  },

  // 10. 2.5-3岁 + bedtime + language
  {
    id: 'missing-062',
    name: '睡前积木诗人',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '通过睡前积木诗歌活动发展语言节奏感和表达能力，营造温馨的睡前氛围。',
    materials: '音律积木3-4块，儿歌卡片，小铃铛。',
    steps: [
      '节奏感知（语言发展）：用积木敲击简单的节奏',
      '儿歌配乐：为熟悉的儿歌配上积木音律',
      '诗歌创编（创意表达）：用积木启发创编简单诗句',
      '温馨朗诵：轻声朗诵诗歌，准备入睡'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '音量轻柔：保持轻柔的音量',
      '节奏简单：选择简单易学的节奏',
      '语言美感：培养对语言美感的感知',
      '情感温馨：营造温馨的睡前情感氛围'
    ]
  }

];

console.log('=== 第六批补充游戏总览 ===');
console.log(`总计 ${batch6Games.length} 个补充游戏\n`);

// 按年龄段统计
const byAge = batch6Games.reduce((acc, game) => {
  acc[game.age_range] = (acc[game.age_range] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('按年龄段统计:');
Object.entries(byAge).forEach(([age, count]) => {
  console.log(`  ${age}岁: ${count}个游戏`);
});

// 按场景统计
const byScene = batch6Games.reduce((acc, game) => {
  acc[game.scene] = (acc[game.scene] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按场景统计:');
Object.entries(byScene).forEach(([scene, count]) => {
  console.log(`  ${scene}: ${count}个游戏`);
});

// 按发展重点统计
const byFocus = batch6Games.reduce((acc, game) => {
  acc[game.focus] = (acc[game.focus] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按发展重点统计:');
Object.entries(byFocus).forEach(([focus, count]) => {
  console.log(`  ${focus}: ${count}个游戏`);
});

console.log('\n游戏列表:');
batch6Games.forEach((game, index) => {
  console.log(`${index + 1}. ${game.name} (${game.age_range}岁, ${game.scene}, ${game.props}, ${game.focus})`);
});

export { batch6Games };