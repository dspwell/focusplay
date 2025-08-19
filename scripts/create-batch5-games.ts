// 第五批补充游戏：household、hands道具 + 更多blocks_puzzle组合

const batch5Games = [
  
  // ===== household道具bedtime缺失组合 =====
  
  // 1. 2-2.5岁 + bedtime + household + social
  {
    id: 'missing-043',
    name: '睡前家务小助手',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'household',
    focus: 'social',
    core_goal: '通过睡前简单家务活动培养责任感和合作意识，增进家庭成员间的情感连接。',
    materials: '小抹布，小水杯，玩具篮子。',
    steps: [
      '物品整理（社交合作）：和家长一起收拾房间的小物品',
      '分工合作：分配简单任务，如"你放玩具，我擦桌子"',
      '关爱表达（社交情感）：为家人准备睡前用品，如拖鞋',
      '感谢分享：互相感谢对方的帮助，培养感恩意识'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '任务简单：选择适合2-2.5岁的简单家务',
      '合作引导：重点培养合作而非完成任务',
      '情感表达：鼓励表达关爱和感谢',
      '安全注意：确保所有用品都是安全的'
    ]
  },

  // 2. 2-2.5岁 + bedtime + household + fine
  {
    id: 'missing-044',
    name: '睡前用品整理',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'household',
    focus: 'fine',
    core_goal: '通过整理睡前用品锻炼精细动作和分类能力，培养整洁习惯和生活自理技能。',
    materials: '睡前用品：毛巾、牙刷、小杯子、拖鞋等。',
    steps: [
      '物品分类（精细动作）：将睡前用品按类型分类摆放',
      '精细摆放：用小手将物品整齐地放在指定位置',
      '盖子操作（手指协调）：练习拧紧牙膏盖、杯子盖',
      '位置记忆：学习记住每样物品的固定位置'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '物品安全：确保所有物品适合孩子操作',
      '动作示范：耐心示范正确的整理方法',
      '习惯培养：将整理作为固定睡前程序',
      '适度表扬：完成后给予积极认可'
    ]
  },

  // 3. 2.5-3岁 + bedtime + household + social
  {
    id: 'missing-045',
    name: '睡前家庭关爱',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'household',
    focus: 'social',
    core_goal: '通过为家人准备睡前用品培养关爱他人的意识，发展社交情感和责任心。',
    materials: '家人的拖鞋、毛巾、水杯等。',
    steps: [
      '关爱准备（社交发展）：为每个家人准备睡前需要的物品',
      '服务意识：主动询问家人是否需要帮助',
      '情感表达（社交情感）：用行动表达对家人的关爱',
      '感恩分享：分享今天收到的关爱，表达感谢'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '关爱引导：引导孩子主动关心他人',
      '行动鼓励：鼓励用实际行动表达关爱',
      '情感交流：促进家庭成员间的情感交流',
      '习惯培养：培养关爱他人的良好习惯'
    ]
  },

  // 4. 3-4岁 + bedtime + household + social
  {
    id: 'missing-046',
    name: '睡前家庭会议',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'household',
    focus: 'social',
    core_goal: '通过睡前家庭会议培养表达能力和倾听技巧，增强家庭归属感和沟通能力。',
    materials: '小椅子，记录本，家庭照片。',
    steps: [
      '会议准备（社交组织）：帮助摆放椅子，创造会议氛围',
      '感受分享：分享今天的开心事和困难事',
      '倾听练习（社交技巧）：认真倾听其他家人的分享',
      '计划讨论：讨论明天的计划和期待'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '平等参与：确保每个人都有表达机会',
      '倾听培养：重点培养倾听他人的能力',
      '情感支持：给予孩子情感支持和理解',
      '时间控制：控制会议时间避免过晚'
    ]
  },

  // 5. 3-4岁 + bedtime + household + fine
  {
    id: 'missing-047',
    name: '睡前环境布置',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'household',
    focus: 'fine',
    core_goal: '通过精细的环境布置活动锻炼手指灵活性和空间规划能力，创造舒适的睡眠环境。',
    materials: '小台灯，抱枕，毯子，装饰品。',
    steps: [
      '灯光调节（精细动作）：调节台灯的亮度和角度',
      '物品摆放：精确摆放床头的装饰品和用品',
      '毯子整理（手眼协调）：将毯子整齐地铺好或折叠',
      '环境检查：检查房间环境是否舒适适宜'
    ],
    duration: 12,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '操作安全：确保电器操作安全',
      '美感培养：引导孩子注意环境美感',
      '精细指导：指导精确的摆放技巧',
      '成就感：让孩子为自己的布置感到自豪'
    ]
  },

  // ===== hands道具bedtime缺失组合 =====

  // 6. 2.5-3岁 + bedtime + hands + fine
  {
    id: 'missing-048',
    name: '睡前手指瑜伽',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过睡前手指瑜伽锻炼手指精细动作，同时放松身心为入睡做准备。',
    materials: '无需道具，仅用双手。',
    steps: [
      '手指伸展（精细动作）：缓慢地伸展每个手指',
      '手指操练：做简单的手指操，如开合、弯曲',
      '手掌按摩（放松练习）：轻柔地按摩手掌和手指',
      '深呼吸配合：配合深呼吸，让手指完全放松'
    ],
    duration: 6,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '动作轻柔：所有动作都要轻柔缓慢',
      '放松目的：重点在于放松而非锻炼',
      '呼吸配合：教孩子配合呼吸节奏',
      '睡前适宜：选择有助于睡眠的放松动作'
    ]
  },

  // 7. 3-4岁 + bedtime + hands + fine
  {
    id: 'missing-049',
    name: '睡前手影故事',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过手影游戏锻炼手指精细控制能力，创造温馨的睡前故事氛围。',
    materials: '小台灯或手电筒，白墙或床单。',
    steps: [
      '手影学习（精细动作）：学习制作简单的手影形状',
      '精确控制：练习精确控制手指位置和角度',
      '故事创编（创意表达）：用手影编创简单的睡前故事',
      '温馨结束：用手影表演温馨的结束场景'
    ],
    duration: 10,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '形状简单：选择适合3-4岁的简单手影',
      '光线柔和：使用柔和的光线避免刺眼',
      '故事温馨：选择适合睡前的温馨故事',
      '耐心指导：耐心指导手指位置调整'
    ]
  },

  // ===== 继续blocks_puzzle组合 =====

  // 8. 2.5-3岁 + home + fine
  {
    id: 'missing-050',
    name: '家庭积木工艺师',
    age_range: '2.5-3',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '通过精细的积木拼装活动锻炼手指灵活性和专注力，培养工艺制作的兴趣。',
    materials: '精细积木15-20块，拼装图纸。',
    steps: [
      '图纸观察（精细动作）：仔细观察拼装图纸的细节',
      '精确拼接：按照图纸精确地拼接每个积木',
      '细节调整（手眼协调）：调整积木间的精确对位',
      '作品完善：对完成的作品进行细节完善'
    ],
    duration: 20,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '图纸简单：选择适合2.5-3岁的简单图案',
      '耐心引导：给予充分的操作指导',
      '精度培养：逐步培养精确操作的习惯',
      '成就感：完成后展示作品增强成就感'
    ]
  },

  // 9. 2.5-3岁 + home + language  
  {
    id: 'missing-051',
    name: '家庭积木播音员',
    age_range: '2.5-3',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '通过积木解说活动发展语言表达能力，学习描述性词汇和表达技巧。',
    materials: '彩色积木10-12块，小话筒。',
    steps: [
      '作品介绍（语言发展）：用语言详细介绍自己的积木作品',
      '特征描述：描述积木的颜色、形状、大小等特征',
      '过程讲述（表达练习）：讲述搭建过程中的想法和感受',
      '观众互动：回答"观众"（家人）提出的问题'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '词汇丰富：引导使用丰富的描述词汇',
      '表达鼓励：鼓励大胆表达想法',
      '互动促进：通过提问促进语言表达',
      '耐心倾听：给孩子充分的表达时间'
    ]
  },

  // 10. 2.5-3岁 + home + gross
  {
    id: 'missing-052',
    name: '家庭积木运动会',
    age_range: '2.5-3',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '通过积木运动游戏锻炼大肢体协调能力和平衡感，在家中进行有趣的体能活动。',
    materials: '大型积木10-15块，垫子。',
    steps: [
      '积木搬运（大肢体发展）：用不同方式搬运积木到指定位置',
      '平衡挑战：头顶积木进行平衡行走',
      '投掷练习（协调训练）：将积木投向指定目标',
      '障碍跨越：跨越摆放的积木障碍'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'active',
    tips: [
      '安全第一：确保家中活动空间安全',
      '积木适宜：选择重量适中的积木',
      '循序渐进：从简单动作开始逐渐增加难度',
      '适度运动：根据室内空间调整运动强度'
    ]
  }

];

console.log('=== 第五批补充游戏总览 ===');
console.log(`总计 ${batch5Games.length} 个补充游戏\n`);

// 按年龄段统计
const byAge = batch5Games.reduce((acc, game) => {
  acc[game.age_range] = (acc[game.age_range] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('按年龄段统计:');
Object.entries(byAge).forEach(([age, count]) => {
  console.log(`  ${age}岁: ${count}个游戏`);
});

// 按场景统计
const byScene = batch5Games.reduce((acc, game) => {
  acc[game.scene] = (acc[game.scene] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按场景统计:');
Object.entries(byScene).forEach(([scene, count]) => {
  console.log(`  ${scene}: ${count}个游戏`);
});

// 按道具统计
const byProps = batch5Games.reduce((acc, game) => {
  acc[game.props] = (acc[game.props] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按道具统计:');
Object.entries(byProps).forEach(([props, count]) => {
  console.log(`  ${props}: ${count}个游戏`);
});

// 按发展重点统计
const byFocus = batch5Games.reduce((acc, game) => {
  acc[game.focus] = (acc[game.focus] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按发展重点统计:');
Object.entries(byFocus).forEach(([focus, count]) => {
  console.log(`  ${focus}: ${count}个游戏`);
});

console.log('\n游戏列表:');
batch5Games.forEach((game, index) => {
  console.log(`${index + 1}. ${game.name} (${game.age_range}岁, ${game.scene}, ${game.props}, ${game.focus})`);
});

export { batch5Games };