// 第四批补充游戏：bedtime场景其他道具 + 更多blocks_puzzle组合

const batch4Games = [
  
  // ===== bedtime场景其他道具缺失组合 =====
  
  // 1. 2-2.5岁 + bedtime + paper + social
  {
    id: 'missing-033',
    name: '睡前纸画分享',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'paper',
    focus: 'social',
    core_goal: '通过睡前纸画分享活动，培养分享意识和表达能力，增进亲子情感连接。',
    materials: '白纸1张，安全彩笔2支，小夜灯。',
    steps: [
      '共同创作（社交发展）：家长和孩子一起在纸上画简单图案',
      '作品分享：孩子向家长介绍自己画的内容',
      '情感表达（社交练习）：通过画作表达今天的心情和感受',
      '温馨收藏：将画作贴在床头，作为美好回忆'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '情感温暖：营造温馨的分享氛围',
      '积极回应：对孩子的表达给予积极反馈',
      '引导交流：适当引导孩子表达想法',
      '时间控制：避免过度兴奋影响睡眠'
    ]
  },

  // 2. 2.5-3岁 + bedtime + paper + social
  {
    id: 'missing-034',
    name: '睡前画信寄托',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'paper',
    focus: 'social',
    core_goal: '通过画信活动培养表达情感和关爱他人的能力，增强社交情感技能。',
    materials: '信纸1张，彩笔3支，小信封。',
    steps: [
      '画信创作（社交表达）：画一幅画"寄给"喜欢的人',
      '情感表达：在画中表达对家人朋友的关爱',
      '分享讲述（社交练习）：讲述想要传达的情感',
      '装信仪式：将画作装入信封，放在床头'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '情感引导：引导孩子思考对他人的关爱',
      '表达鼓励：鼓励孩子表达内心想法',
      '仪式感：增加装信的仪式感',
      '温馨氛围：保持温暖安静的氛围'
    ]
  },

  // 3. 2.5-3岁 + bedtime + paper + fine
  {
    id: 'missing-035',
    name: '睡前纸艺精工',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'paper',
    focus: 'fine',
    core_goal: '通过精细的纸艺活动锻炼手指精细动作，在安静的环境中为入睡做准备。',
    materials: '彩纸2张，安全剪刀，胶棒。',
    steps: [
      '纸张折叠（精细动作）：学习简单的纸张折叠技巧',
      '精细撕纸：用手指精细地撕出小形状',
      '粘贴练习（手眼协调）：将小纸片精确粘贴到指定位置',
      '作品整理：将完成的作品小心地放好'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '动作轻柔：所有操作都要轻柔安静',
      '安全工具：使用儿童安全剪刀',
      '精细指导：耐心指导精细动作技巧',
      '适度挑战：根据孩子能力调整难度'
    ]
  },

  // 4. 3-4岁 + bedtime + paper + social
  {
    id: 'missing-036',
    name: '睡前纸偶剧场',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'paper',
    focus: 'social',
    core_goal: '通过纸偶表演培养角色扮演和社交表达能力，增进亲子互动。',
    materials: '卡纸3张，彩笔，小木棍。',
    steps: [
      '纸偶制作（创意表达）：制作简单的纸偶角色',
      '角色设定：为每个纸偶设计性格和故事',
      '互动表演（社交练习）：和家长一起进行纸偶对话',
      '故事收尾：用表演为一天画下温馨句号'
    ],
    duration: 18,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '角色丰富：创造不同性格的角色',
      '互动鼓励：鼓励孩子主动参与对话',
      '情节温馨：选择适合睡前的温馨情节',
      '时间掌控：注意控制活动时间'
    ]
  },

  // 5. 3-4岁 + bedtime + paper + fine
  {
    id: 'missing-037',
    name: '睡前纸雕工坊',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'paper',
    focus: 'fine',
    core_goal: '通过精细纸雕活动锻炼手指精细动作和创造力，培养专注力和审美能力。',
    materials: '厚卡纸1张，安全刻刀，垫板。',
    steps: [
      '设计规划（精细动作）：在纸上画出简单的设计图案',
      '精细雕刻：用安全刻刀小心地刻出形状',
      '细节修饰（手眼协调）：对雕刻边缘进行精细修饰',
      '作品展示：将完成的作品立起来展示'
    ],
    duration: 20,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '工具安全：严格监督工具使用',
      '设计简单：选择适合的简单图案',
      '耐心指导：给予充分的技术指导',
      '成就感：完成后给予充分认可'
    ]
  },

  // ===== 其他道具bedtime缺失组合 =====

  // 6. 2-2.5岁 + bedtime + books_pictures + social
  {
    id: 'missing-038',
    name: '睡前图书分享',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过睡前图书分享活动，培养分享意识和表达能力，增进亲子情感连接。',
    materials: '图画书1本，小抱枕。',
    steps: [
      '书本选择（社交启蒙）：让孩子选择想要分享的图书',
      '图片指认：指着图片和家长一起讨论内容',
      '情感分享（社交表达）：分享对故事角色的喜好',
      '温馨结束：抱着书本一起感受温馨时光'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '书籍温馨：选择温暖治愈的睡前故事',
      '互动引导：引导孩子主动表达想法',
      '情感连接：通过共读增进亲子感情',
      '自然过渡：自然过渡到睡眠时间'
    ]
  },

  // 7. 2-2.5岁 + bedtime + books_pictures + fine
  {
    id: 'missing-039',
    name: '睡前翻书游戏',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '通过精细的翻书动作锻炼手指灵活性，培养对书籍的喜爱和专注力。',
    materials: '厚页绘本1本，小夜灯。',
    steps: [
      '轻柔翻页（精细动作）：教孩子用拇指和食指轻柔翻页',
      '页面探索：用手指轻抚书页，感受纸张质感',
      '精细指认（手眼协调）：用小手指精确指向图片细节',
      '书本合拢：学习轻柔地合上书本'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '翻页技巧：耐心教授正确翻页方法',
      '力度控制：教孩子控制手部力度',
      '书籍保护：培养爱护书籍的习惯',
      '专注引导：引导孩子专注于精细动作'
    ]
  },

  // 8. 2.5-3岁 + bedtime + books_pictures + fine
  {
    id: 'missing-040',
    name: '睡前点读时光',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '通过精细的点读动作锻炼手指协调性，结合视觉专注训练。',
    materials: '点读绘本1本，点读笔。',
    steps: [
      '精确点触（精细动作）：用点读笔精确点击图片',
      '手势控制：练习稳定握笔和精确指向',
      '页面导航（手眼协调）：在页面间精确寻找目标',
      '工具收纳：小心收好点读笔和书本'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '握笔正确：指导正确的握笔姿势',
      '精度训练：从大目标到小目标逐步练习',
      '音量控制：调节合适的音量',
      '视力保护：注意保护孩子视力'
    ]
  },

  // ===== 继续blocks_puzzle其他年龄段组合 =====

  // 9. 2.5-3岁 + travel + gross
  {
    id: 'missing-041',
    name: '旅途积木健身',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '在旅途有限空间中通过积木进行大肢体运动，释放身体能量，锻炼协调性。',
    materials: '轻便积木6-8块，小毯子。',
    steps: [
      '积木举重（大肢体发展）：双手举起积木进行"举重"练习',
      '平衡挑战：一手拿积木保持身体平衡',
      '传递游戏（协调训练）：在有限空间内传递积木',
      '拉伸放松：抱着积木做简单拉伸动作'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '空间安全：确保周围空间安全',
      '动作适度：控制运动幅度避免影响他人',
      '积木轻便：选择重量适宜的积木',
      '及时调整：根据交通工具调整动作'
    ]
  },

  // 10. 2.5-3岁 + travel + social
  {
    id: 'missing-042',
    name: '旅途积木交友',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '在旅途中通过积木分享培养社交技能，学习与陌生人友好交往。',
    materials: '彩色积木8-10块，小袋子。',
    steps: [
      '友好展示（社交启蒙）：主动向其他乘客展示积木',
      '礼貌分享：学习礼貌地邀请别人一起玩',
      '合作游戏（社交练习）：和其他孩子合作搭建',
      '感谢告别：游戏结束后礼貌地感谢和告别'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '社交引导：家长适时引导社交行为',
      '礼貌用语：强调基本礼貌用语的使用',
      '安全意识：教育孩子与陌生人交往的安全',
      '适时结束：控制好游戏时间和强度'
    ]
  }

];

console.log('=== 第四批补充游戏总览 ===');
console.log(`总计 ${batch4Games.length} 个补充游戏\n`);

// 按年龄段统计
const byAge = batch4Games.reduce((acc, game) => {
  acc[game.age_range] = (acc[game.age_range] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('按年龄段统计:');
Object.entries(byAge).forEach(([age, count]) => {
  console.log(`  ${age}岁: ${count}个游戏`);
});

// 按场景统计
const byScene = batch4Games.reduce((acc, game) => {
  acc[game.scene] = (acc[game.scene] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按场景统计:');
Object.entries(byScene).forEach(([scene, count]) => {
  console.log(`  ${scene}: ${count}个游戏`);
});

// 按道具统计
const byProps = batch4Games.reduce((acc, game) => {
  acc[game.props] = (acc[game.props] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按道具统计:');
Object.entries(byProps).forEach(([props, count]) => {
  console.log(`  ${props}: ${count}个游戏`);
});

// 按发展重点统计
const byFocus = batch4Games.reduce((acc, game) => {
  acc[game.focus] = (acc[game.focus] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按发展重点统计:');
Object.entries(byFocus).forEach(([focus, count]) => {
  console.log(`  ${focus}: ${count}个游戏`);
});

console.log('\n游戏列表:');
batch4Games.forEach((game, index) => {
  console.log(`${index + 1}. ${game.name} (${game.age_range}岁, ${game.scene}, ${game.props}, ${game.focus})`);
});

export { batch4Games };