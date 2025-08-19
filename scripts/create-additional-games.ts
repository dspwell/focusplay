// 继续补充缺失的关键游戏组合

const additionalGames = [
  
  // ===== blocks_puzzle 道具优先补充 =====
  
  // 1. 2-2.5岁 + home + language
  {
    id: 'missing-013',
    name: '积木说话课',
    age_range: '2-2.5',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '通过积木搭建游戏发展语言表达能力，学习形状、颜色词汇，培养基础沟通技巧。',
    materials: '大块彩色积木6-8块，颜色卡片。',
    steps: [
      '积木认知（语言发展）：引导孩子说出每个积木的颜色和形状，如"红色方块"',
      '搭建描述：孩子搭建时，鼓励他描述自己在做什么，如"我放红块"',
      '简单对话（沟通练习）：用积木角色扮演，让积木"说话"，如"你好，我是蓝色积木"',
      '成果分享：完成搭建后，让孩子用简单语言介绍自己的作品'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '语言简单：使用2-3个字的短句，适合2-2.5岁语言发展水平',
      '重复练习：多次重复颜色和形状词汇，加深记忆',
      '耐心倾听：给孩子足够时间表达，不要急于纠正',
      '积极回应：对孩子的每个表达都给予积极反馈'
    ]
  },

  // 2. 2-2.5岁 + home + cognition  
  {
    id: 'missing-014',
    name: '积木配对游戏',
    age_range: '2-2.5',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '通过积木配对和分类活动，发展认知能力和逻辑思维，培养观察力和分析能力。',
    materials: '形状相同的积木若干对，分类盒。',
    steps: [
      '配对展示（认知训练）：家长先示范相同形状积木的配对过程',
      '孩子操作：让孩子找到相同形状的积木，进行配对练习',
      '颜色分类（逻辑思维）：将积木按颜色分组，培养分类概念',
      '规律发现：尝试按颜色或形状排列积木，发现简单规律'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '循序渐进：从2对开始，逐渐增加配对数量',
      '操作简单：确保积木形状差异明显，便于区分',
      '及时鼓励：每次成功配对都要给予表扬',
      '重复练习：多次练习以巩固认知概念'
    ]
  },

  // 3. 2-2.5岁 + home + gross
  {
    id: 'missing-015',
    name: '积木投篮手',
    age_range: '2-2.5',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '通过积木投掷游戏锻炼大肢体协调能力和手臂力量，发展空间距离感和目标准确性。',
    materials: '软质积木5-6块，大收纳盒或篮子。',
    steps: [
      '目标设置（大肢体发展）：在地上放置篮子，距离孩子约1米远',
      '投掷示范：家长示范如何双手举起积木，向篮子投掷',
      '孩子练习（协调训练）：让孩子尝试投掷积木到篮子里',
      '距离调整：根据孩子能力调整投掷距离，增加成功体验'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '安全第一：使用软质积木，避免砸伤风险',
      '距离适宜：初始距离不要太远，保证孩子能够成功',
      '双手投掷：鼓励孩子用双手投掷，锻炼协调性',
      '捡拾练习：让孩子自己捡起积木，增加运动量'
    ]
  },

  // 4. 2-2.5岁 + outdoor + fine
  {
    id: 'missing-016',
    name: '户外积木叠叠乐',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '在户外环境中通过精细的积木叠叠活动，锻炼手指精细动作和手眼协调能力。',
    materials: '防水大块积木4-6块，野餐垫。',
    steps: [
      '垫子准备（精细动作）：在户外铺好野餐垫，创造平整操作空间',
      '精细叠叠：教孩子小心地将积木一块块叠高',
      '稳定调整（手眼协调）：当积木不稳时，指导孩子如何小心调整',
      '倒塌重建：积木倒塌后，鼓励孩子重新尝试搭建'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '材质选择：使用防水、易清洁的户外专用积木',
      '风力考虑：选择无风或微风的环境进行活动',
      '安全区域：确保周围环境安全，无尖锐物品',
      '清洁及时：活动后及时清洁积木和小手'
    ]
  },

  // 5. 2-2.5岁 + outdoor + language
  {
    id: 'missing-017',
    name: '户外积木探索说',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '结合户外环境和积木游戏，发展语言表达能力，学习自然相关词汇和空间方位概念。',
    materials: '户外积木6-8块，自然图片卡。',
    steps: [
      '环境描述（语言发展）：鼓励孩子用简单词汇描述户外环境',
      '积木模拟：用积木搭建户外看到的物体，如树、石头',
      '方位练习（空间语言）：学习"上面"、"下面"、"旁边"等方位词',
      '自然词汇：结合实物教授自然相关词汇，如花、草、天空'
    ],
    duration: 12,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '词汇简单：选择适合2-2.5岁的基础词汇',
      '实物结合：将积木搭建与周围实物联系',
      '重复强化：多次重复新学的词汇',
      '耐心引导：给孩子充分时间观察和表达'
    ]
  },

  // 6. 2-2.5岁 + outdoor + gross
  {
    id: 'missing-018',
    name: '户外积木运动场',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '利用户外空间和积木道具，进行大肢体运动游戏，锻炼身体协调性和平衡能力。',
    materials: '大型软质积木8-10块，标记线。',
    steps: [
      '积木搬运（大肢体发展）：让孩子抱着积木从一处搬到另一处',
      '跨越练习：将积木排成一排，让孩子跨越过去',
      '平衡行走（协调训练）：手抱积木在直线上缓慢行走',
      '投掷收集：将积木投向指定区域，然后跑去收集'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'active',
    tips: [
      '安全距离：确保活动区域足够宽敞，无障碍物',
      '适量运动：根据孩子体力调整运动强度',
      '积木轻便：选择轻便的积木，避免过重',
      '及时休息：注意观察孩子是否需要休息'
    ]
  },

  // 7. 2-2.5岁 + outdoor + social
  {
    id: 'missing-019',
    name: '户外积木分享圈',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '通过户外积木分享活动，培养社交技能和合作意识，学习分享和轮流的概念。',
    materials: '彩色积木10-12块，野餐毯。',
    steps: [
      '积木介绍（社交启蒙）：让孩子向其他小朋友或家长介绍自己的积木',
      '轮流搭建：建立轮流使用积木的规则，培养等待能力',
      '合作搭建（合作意识）：鼓励孩子和小伙伴一起完成一个作品',
      '成果分享：大家一起欣赏作品，练习表达和倾听'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '耐心引导：2-2.5岁孩子社交能力有限，需要耐心引导',
      '冲突预防：提前设立简单规则，预防争抢',
      '积极示范：家长示范分享和合作行为',
      '及时表扬：对分享和合作行为给予及时表扬'
    ]
  },

  // 8. 2-2.5岁 + waiting + fine
  {
    id: 'missing-020',
    name: '等待积木手工',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '在等待场合通过安静的积木精细操作，锻炼手指灵活性，保持专注和耐心。',
    materials: '小型积木4-5块，收纳袋。',
    steps: [
      '积木取出（精细动作）：让孩子小心地从袋子里取出每个积木',
      '精细拼接：引导孩子将积木精确地拼接在一起',
      '形状调整（手眼协调）：调整积木的方向和位置，使其稳固',
      '整理收纳：游戏结束后，让孩子一个个放回袋子'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '声音控制：提醒孩子轻拿轻放，保持安静',
      '空间有限：选择适合小空间操作的迷你积木',
      '安全材质：确保积木无小零件，避免误吞',
      '专注培养：鼓励孩子专注于手中的积木，培养耐心'
    ]
  },

  // 9. 2-2.5岁 + waiting + language
  {
    id: 'missing-021',
    name: '等待积木故事',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '在等待时间里通过积木编故事活动，发展语言表达能力和想象力，保持安静和专注。',
    materials: '动物形状积木3-4个，故事卡片。',
    steps: [
      '角色介绍（语言发展）：让孩子说出每个积木动物的名字',
      '简单故事：家长开头，让孩子接着说故事，如"小猫想要..."',
      '动作表演（表达练习）：用积木表演故事情节',
      '故事结尾：鼓励孩子为故事想一个简单的结尾'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '故事简单：适合2-2.5岁的简单故事情节',
      '引导为主：主要由家长引导，孩子跟随',
      '音量控制：保持低声音量，不影响他人',
      '想象鼓励：鼓励孩子的天马行空想象'
    ]
  },

  // 10. 2-2.5岁 + waiting + gross (已有一个，再补充不同年龄段)
  {
    id: 'missing-022',
    name: '等待积木微运动',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '在等待环境中进行轻微的大肢体运动，通过积木道具锻炼身体协调性，释放身体能量。',
    materials: '轻便积木4-6块，小盒子。',
    steps: [
      '积木传递（大肢体协调）：让孩子用不同方式传递积木，如举过头顶',
      '身体摆动：抱着积木轻轻摆动身体，模仿走路',
      '腿部运动（平衡练习）：坐着时用脚轻轻踢积木盒',
      '手臂伸展：抱着积木做简单的手臂伸展运动'
    ],
    duration: 6,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '动作轻微：所有动作都要轻缓，不影响环境',
      '空间意识：确保动作不会碰到周围的人',
      '安全第一：避免积木掉落造成噪音',
      '适度运动：根据等待环境调整运动幅度'
    ]
  }

];

console.log('=== 第二批补充游戏总览 ===');
console.log(`总计 ${additionalGames.length} 个补充游戏\n`);

// 按年龄段统计
const byAge = additionalGames.reduce((acc, game) => {
  acc[game.age_range] = (acc[game.age_range] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('按年龄段统计:');
Object.entries(byAge).forEach(([age, count]) => {
  console.log(`  ${age}岁: ${count}个游戏`);
});

// 按场景统计
const byScene = additionalGames.reduce((acc, game) => {
  acc[game.scene] = (acc[game.scene] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按场景统计:');
Object.entries(byScene).forEach(([scene, count]) => {
  console.log(`  ${scene}: ${count}个游戏`);
});

// 按发展重点统计
const byFocus = additionalGames.reduce((acc, game) => {
  acc[game.focus] = (acc[game.focus] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按发展重点统计:');
Object.entries(byFocus).forEach(([focus, count]) => {
  console.log(`  ${focus}: ${count}个游戏`);
});

console.log('\n游戏列表:');
additionalGames.forEach((game, index) => {
  console.log(`${index + 1}. ${game.name} (${game.age_range}岁, ${game.scene}, ${game.props}, ${game.focus})`);
});

export { additionalGames };