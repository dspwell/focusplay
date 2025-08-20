// 2.5-3岁年龄段缺失游戏补充 - 第一批 (21个游戏)

const missingGames_2_5_3_batch1 = [

  // ===== 居家场景缺失游戏 =====
  
  // 1. 居家 + 仅用手 + 精细动作
  {
    id: 'missing-2-5-3-001',
    name: '小小理发师',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过模仿理发师的手部动作锻炼手指精细运动和手眼协调。',
    materials: '无需道具，仅用双手。',
    steps: [
      '洗手准备：模仿理发师洗手的动作',
      '剪刀手势：用食指和中指做剪刀的开合动作',
      '理发动作：在空中做剪发的精细手势',
      '整理造型：用手指轻轻\"整理\"头发造型'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '强调手指动作的精确性',
      '可以对着镜子练习增加趣味性',
      '鼓励孩子创造不同的手势动作',
      '培养手指独立运动的能力'
    ]
  },

  // 2. 居家 + 仅用手 + 逻辑认知
  {
    id: 'missing-2-5-3-002',
    name: '手指数字游戏',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'cognition',
    core_goal: '通过手指数数和简单运算发展数概念和逻辑思维能力。',
    materials: '双手，可选数字卡片辅助。',
    steps: [
      '基础数数：用手指从1数到10',
      '分组练习：一只手5个，两只手10个',
      '简单加法：2个手指+1个手指=3个手指',
      '减法练习：5个手指收起2个剩3个'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '从小数字开始，逐步增加',
      '用具体的手指帮助理解抽象数字',
      '重复练习加深数概念记忆',
      '可以结合生活情境进行数数'
    ]
  },

  // 3. 居家 + 纸笔类 + 大肢体动作
  {
    id: 'missing-2-5-3-003',
    name: '纸飞机投掷赛',
    age_range: '2.5-3',
    scene: 'home',
    props: 'paper',
    focus: 'gross',
    core_goal: '通过制作和投掷纸飞机锻炼手臂力量和身体协调性。',
    materials: '彩色纸张，室内开阔空间。',
    steps: [
      '制作飞机：在家长帮助下制作简单纸飞机',
      '投掷姿势：学习正确的投掷动作和姿势',
      '目标练习：设置目标点进行投掷练习',
      '距离挑战：尝试让纸飞机飞得更远'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '确保室内空间足够安全',
      '教授正确的投掷技巧',
      '可以设置不同难度的目标',
      '鼓励多次尝试和改进'
    ]
  },

  // 4. 居家 + 纸笔类 + 社交情感
  {
    id: 'missing-2-5-3-004',
    name: '感谢卡制作',
    age_range: '2.5-3',
    scene: 'home',
    props: 'paper',
    focus: 'social',
    core_goal: '通过制作感谢卡片培养感恩意识和关爱他人的情感。',
    materials: '卡纸，彩笔，贴纸。',
    steps: [
      '选择对象：想一想要感谢谁（爸爸、妈妈、老师）',
      '制作卡片：在卡纸上画简单图案',
      '表达感谢：说出\"谢谢您\"等感谢话语',
      '赠送卡片：亲手将卡片送给要感谢的人'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '引导孩子思考值得感谢的事情',
      '不要求绘画技巧，重点是情感表达',
      '教授基本的感谢礼仪',
      '让孩子体验给予的快乐'
    ]
  },

  // 5. 居家 + 图书/图片卡 + 精细动作
  {
    id: 'missing-2-5-3-005',
    name: '图书修补小医生',
    age_range: '2.5-3',
    scene: 'home',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '通过模仿修补图书锻炼精细动作，培养爱护书籍的意识。',
    materials: '旧图书，胶带，小剪刀（成人使用）。',
    steps: [
      '检查图书：仔细查看图书是否有破损',
      '撕胶带：练习撕下合适长度的胶带',
      '精准贴合：将胶带准确贴到破损位置',
      '抚平整理：用手指轻柔地抚平胶带'
    ],
    duration: 4,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '选择安全的修补材料',
      '成人协助处理需要剪刀的环节',
      '强调动作的精确性和耐心',
      '培养保护物品的责任感'
    ]
  },

  // 6. 居家 + 图书/图片卡 + 语言沟通
  {
    id: 'missing-2-5-3-006',
    name: '故事续编小作家',
    age_range: '2.5-3',
    scene: 'home',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '通过看图书续编故事发展想象力和语言表达能力。',
    materials: '故事图书，录音设备（可选）。',
    steps: [
      '阅读开头：一起读故事的前半部分',
      '停止阅读：在关键情节处停下',
      '想象续编：让孩子想象\"然后会发生什么？\"',
      '语言表达：鼓励孩子用语言讲述续编的故事'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择情节简单易懂的故事',
      '耐心倾听孩子的想象',
      '适时提问帮助孩子展开思路',
      '可以录音记录孩子的创作'
    ]
  },

  // 7. 居家 + 图书/图片卡 + 大肢体动作
  {
    id: 'missing-2-5-3-007',
    name: '故事情景模拟',
    age_range: '2.5-3',
    scene: 'home',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '通过模拟图书中的情景进行角色扮演，锻炼大肢体动作。',
    materials: '动作丰富的故事书。',
    steps: [
      '选择角色：从故事中选择喜欢的角色',
      '模拟动作：学习角色的典型动作和姿势',
      '情景再现：按照故事情节进行表演',
      '创意发挥：添加自己的创意动作'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '选择动作明显的故事角色',
      '确保家中有足够的活动空间',
      '鼓励孩子大胆表现',
      '可以全家一起参与表演'
    ]
  },

  // 8. 居家 + 图书/图片卡 + 社交情感
  {
    id: 'missing-2-5-3-008',
    name: '情感识别小老师',
    age_range: '2.5-3',
    scene: 'home',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过图书中的人物表情学习识别和表达情感。',
    materials: '表情丰富的图画书。',
    steps: [
      '观察表情：仔细看图书中人物的表情',
      '识别情感：学会说\"开心\"、\"难过\"、\"生气\"等',
      '模仿表情：尝试做出同样的表情',
      '情感交流：分享\"我什么时候也会这样\"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '从基本情感开始教授',
      '结合孩子的生活经验',
      '鼓励孩子表达真实感受',
      '培养理解他人情感的能力'
    ]
  },

  // ===== 户外场景缺失游戏 =====
  
  // 9. 户外 + 仅用手 + 精细动作
  {
    id: 'missing-2-5-3-009',
    name: '自然小收集家',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过精细地采集和整理自然物品锻炼手指灵活性。',
    materials: '小收集袋，户外自然环境。',
    steps: [
      '寻找物品：用眼睛寻找小花瓣、叶子等',
      '精细采集：用手指小心地采集自然物品',
      '分类整理：按大小或颜色将收集品分类',
      '精心保存：将物品轻柔地放入收集袋中'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '教授正确的采集方法，不损害植物',
      '强调动作要轻柔精确',
      '引导观察物品的细微差别',
      '培养对自然的尊重和保护意识'
    ]
  },

  // 10. 户外 + 仅用手 + 语言沟通
  {
    id: 'missing-2-5-3-010',
    name: '自然解说员',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'hands',
    focus: 'language',
    core_goal: '通过用手指指认并描述户外事物发展观察和语言能力。',
    materials: '户外自然环境。',
    steps: [
      '指认物品：用手指指向看到的自然物品',
      '命名描述：说出\"这是树\"、\"绿色的叶子\"',
      '特征观察：描述\"粗糙的树皮\"、\"软软的草\"',
      '情感表达：说\"我喜欢这朵花\"等个人感受'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '鼓励孩子主动观察和发现',
      '教授丰富的描述性词汇',
      '耐心回答孩子的好奇提问',
      '将观察与语言表达结合'
    ]
  },

  // 11. 户外 + 纸笔类 + 精细动作
  {
    id: 'missing-2-5-3-011',
    name: '户外写生小画家',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'paper',
    focus: 'fine',
    core_goal: '在户外环境中进行写生绘画，锻炼精细动作和观察能力。',
    materials: '画板，蜡笔，小凳子。',
    steps: [
      '选择对象：选择一个喜欢的自然景物',
      '仔细观察：观察对象的形状、颜色等特征',
      '精细绘制：用蜡笔小心地描绘观察到的内容',
      '细节添加：为画作添加更多观察到的细节'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '选择适合写生的天气和环境',
      '不要求画得准确，重点是观察和尝试',
      '准备便携的绘画工具',
      '鼓励孩子表达对自然的感受'
    ]
  },

  // 12. 户外 + 纸笔类 + 语言沟通
  {
    id: 'missing-2-5-3-012',
    name: '户外日记小记者',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'paper',
    focus: 'language',
    core_goal: '通过绘画和口述记录户外见闻，发展语言表达能力。',
    materials: '小本子，蜡笔。',
    steps: [
      '观察记录：画出看到的有趣事物',
      '口述内容：描述画的内容\"我看到了...\"',
      '添加情节：讲述观察时发生的有趣事情',
      '分享交流：回家后与家人分享户外见闻'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '鼓励孩子主动观察和记录',
      '不强求绘画技巧，重点是表达',
      '引导孩子用完整句子描述',
      '培养记录和分享的习惯'
    ]
  },

  // 13. 户外 + 纸笔类 + 逻辑认知
  {
    id: 'missing-2-5-3-013',
    name: '自然规律探索',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'paper',
    focus: 'cognition',
    core_goal: '通过观察和记录自然现象培养逻辑思维和认知能力。',
    materials: '观察记录表，蜡笔。',
    steps: [
      '观察现象：观察云朵移动、叶子飘落等自然现象',
      '寻找规律：发现\"风大时叶子飘得快\"等规律',
      '记录发现：在纸上用简单符号记录观察结果',
      '验证推理：再次观察验证发现的规律是否正确'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '选择明显易观察的自然现象',
      '用简单的因果关系引导思考',
      '鼓励孩子提出自己的想法',
      '培养科学观察的初步意识'
    ]
  },

  // 14. 户外 + 纸笔类 + 大肢体动作
  {
    id: 'missing-2-5-3-014',
    name: '户外障碍图设计',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'paper',
    focus: 'gross',
    core_goal: '设计和执行简单的户外运动路线，锻炼大肢体协调能力。',
    materials: '大纸张，彩笔，户外空间。',
    steps: [
      '设计路线：在纸上画简单的运动路线图',
      '标记动作：画出跳、跑、爬等动作符号',
      '实际体验：按照设计的路线进行运动',
      '调整改进：根据体验调整和改善路线设计'
    ],
    duration: 6,
    difficulty: 3,
    activity_type: 'active',
    tips: [
      '确保设计的运动路线安全可行',
      '动作要适合孩子的能力水平',
      '鼓励孩子参与设计过程',
      '将计划与实际行动相结合'
    ]
  },

  // 15. 户外 + 纸笔类 + 社交情感
  {
    id: 'missing-2-5-3-015',
    name: '户外友谊纪念册',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'paper',
    focus: 'social',
    core_goal: '制作友谊纪念册记录与朋友的户外时光，培养友谊意识。',
    materials: '小册子，彩笔，贴纸。',
    steps: [
      '邀请朋友：邀请朋友一起制作纪念册',
      '共同创作：一起画出户外游戏的场景',
      '记录友谊：写下或画出\"我们是好朋友\"',
      '互赠纪念：制作完成后互相赠送纪念册'
    ],
    duration: 6,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '鼓励孩子主动与他人合作',
      '引导分享和协商的行为',
      '记录友谊的美好时刻',
      '培养珍惜友情的情感'
    ]
  },

  // 16. 户外 + 图书/图片卡 + 精细动作
  {
    id: 'missing-2-5-3-016',
    name: '自然标本制作',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '参照图片制作简单自然标本，锻炼精细操作能力。',
    materials: '自然图鉴，收集袋，标签纸。',
    steps: [
      '对照图鉴：对照图片寻找相应的自然物品',
      '精细采集：小心采集完整的叶子或花朵',
      '仔细整理：将标本轻放在图书页面中',
      '标签制作：为标本制作简单的名称标签'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '教授正确的标本保存方法',
      '强调保护自然环境的重要性',
      '培养仔细观察的科学态度',
      '可以制作家庭自然收藏'
    ]
  },

  // 17. 户外 + 图书/图片卡 + 逻辑认知
  {
    id: 'missing-2-5-3-017',
    name: '自然配对专家',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '通过图片与实物配对培养观察力和逻辑分析能力。',
    materials: '自然物品图片卡。',
    steps: [
      '展示图片：给孩子看各种自然物品的图片',
      '寻找对应：在户外环境中寻找与图片相符的实物',
      '仔细对比：比较图片与实物的相同和不同之处',
      '分类整理：将配对成功的物品进行分类'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择特征明显易识别的物品',
      '引导孩子仔细观察细节差异',
      '鼓励独立思考和判断',
      '培养逻辑推理的初步能力'
    ]
  },

  // 18. 户外 + 图书/图片卡 + 大肢体动作
  {
    id: 'missing-2-5-3-018',
    name: '动物模仿大赛',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '模仿图书中的动物动作进行户外运动，锻炼大肢体协调。',
    materials: '动物图片卡或图书。',
    steps: [
      '选择动物：从图片中选择喜欢的动物',
      '学习动作：观察动物的典型动作特征',
      '模仿练习：在户外空地上模仿动物动作',
      '动作比赛：与朋友比赛谁模仿得最像'
    ],
    duration: 6,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '选择动作明显特征突出的动物',
      '确保户外活动空间安全',
      '鼓励创意和夸张的表演',
      '适时给予表扬和鼓励'
    ]
  },

  // 19. 户外 + 图书/图片卡 + 社交情感
  {
    id: 'missing-2-5-3-019',
    name: '自然护卫队',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过环保主题图书培养保护自然的责任感和合作精神。',
    materials: '环保主题图书。',
    steps: [
      '阅读故事：一起读关于保护自然的图书',
      '理解意义：理解保护环境对小动物的重要性',
      '制定计划：讨论可以为保护自然做什么',
      '共同行动：一起清理垃圾或保护小植物'
    ],
    duration: 6,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择适合年龄的环保主题内容',
      '引导孩子从小事做起',
      '培养团队合作精神',
      '让孩子体验帮助他人的快乐'
    ]
  },

  // 20. 户外 + 家居物品 + 精细动作
  {
    id: 'missing-2-5-3-020',
    name: '户外小工程师',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'household',
    focus: 'fine',
    core_goal: '用家居小物品在户外进行精细建构，锻炼手指灵活性。',
    materials: '小盒子，绳子，小夹子等安全家居物品。',
    steps: [
      '材料准备：整理带来的各种小工具',
      '设计构思：想一想要建造什么',
      '精细建构：用小物品进行精确的组装',
      '功能测试：测试建构作品是否达到预期功能'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '确保所有物品安全无害',
      '鼓励孩子的创意想法',
      '培养解决问题的能力',
      '可以与其他孩子合作完成'
    ]
  },

  // 21. 户外 + 家居物品 + 语言沟通
  {
    id: 'missing-2-5-3-021',
    name: '户外小商店',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'household',
    focus: 'language',
    core_goal: '用家居物品模拟开商店，通过买卖游戏发展语言交流能力。',
    materials: '小篮子，各种安全的\"商品\"(玩具等)。',
    steps: [
      '布置商店：用家居物品布置简单的\"商店\"',
      '商品介绍：学会介绍\"商品\"的特点',
      '交易对话：练习\"您好，要买什么？\"等对话',
      '礼貌服务：学会说\"谢谢光临\"等礼貌用语'
    ],
    duration: 6,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '鼓励孩子主动与\"顾客\"交流',
      '教授基本的商业礼貌用语',
      '可以与其他孩子轮流扮演角色',
      '培养服务他人的意识'
    ]
  }

];

console.log('=== 2.5-3岁年龄段缺失游戏补充 - 第一批 ===');
console.log(`已创建 ${missingGames_2_5_3_batch1.length} 个补充游戏\n`);

// 按场景统计
const byScene = missingGames_2_5_3_batch1.reduce((acc, game) => {
  acc[game.scene] = (acc[game.scene] || 0) + 1;
  return acc;
}, {});

console.log('按场景分布:');
Object.entries(byScene).forEach(([scene, count]) => {
  const sceneNames = {
    'home': '居家',
    'outdoor': '户外',
    'waiting': '等待时',
    'bedtime': '睡前',
    'travel': '旅途中'
  };
  console.log(`  ${sceneNames[scene]}: ${count}个`);
});

export { missingGames_2_5_3_batch1 };