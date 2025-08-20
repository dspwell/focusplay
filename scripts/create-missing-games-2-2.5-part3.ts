// 2-2.5岁年龄段缺失游戏补充 - 第三部分

const missingGames_2_2_5_part3 = [

  // ===== 户外场景剩余缺失游戏 =====
  
  // 1. 户外 + 图书/图片卡 + 精细动作
  {
    id: 'missing-2-2-5-025',
    name: '自然配对小书',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '在户外环境中通过翻看图书并寻找对应自然物品，锻炼精细动作。',
    materials: '自然物品图片书，小篮子。',
    steps: [
      '翻书寻找：让孩子翻书找到树叶图片',
      '精细翻页：练习轻柔地翻书页不撕坏',
      '细致观察：仔细看图片上树叶的形状和颜色',
      '对比配对：找到相似的真实树叶进行对比'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择硬纸板材质的图书',
      '从最容易辨认的物品开始',
      '鼓励孩子慢慢翻页，锻炼精细动作',
      '及时表扬孩子的细心观察'
    ]
  },

  // 2. 户外 + 图书/图片卡 + 语言沟通
  {
    id: 'missing-2-2-5-026',
    name: '大自然说话书',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '在户外通过图书引导语言表达，学习描述自然环境。',
    materials: '大自然主题图书。',
    steps: [
      '共读自然书：和孩子一起看关于大自然的图书',
      '指认命名：指着图片说"这是花"、"这是鸟"',
      '现实对照：将书中内容与周围环境联系',
      '简单描述：鼓励孩子说"红红的花"、"小小的鸟"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择与当前环境相符的图书',
      '用简单清晰的语言引导',
      '重复重要词汇帮助记忆',
      '营造轻松的户外阅读体验'
    ]
  },

  // 3. 户外 + 图书/图片卡 + 逻辑认知
  {
    id: 'missing-2-2-5-027',
    name: '自然分类小专家',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '通过图书学习简单分类概念，认识自然物品的不同类别。',
    materials: '分类图片卡（花朵类、叶子类、石头类）。',
    steps: [
      '观察分类：看图片卡上不同类型的自然物品',
      '概念学习：学习"这些都是叶子"、"这些都是花"',
      '实物分类：在户外找相应的物品进行分类',
      '验证理解：检查孩子是否理解分类概念'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '从最简单的二分类开始',
      '使用明显特征进行分类',
      '鼓励孩子主动尝试分类',
      '及时纠正和引导分类错误'
    ]
  },

  // 4. 户外 + 图书/图片卡 + 大肢体动作
  {
    id: 'missing-2-2-5-028',
    name: '跟着图书去探险',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '根据图书内容进行户外探索活动，锻炼大肢体运动能力。',
    materials: '探险主题图书。',
    steps: [
      '阅读准备：看图书中小动物探险的故事',
      '模仿行动：学小兔跳跃寻找"胡萝卜"',
      '探索移动：像书中角色一样走、跑、跳',
      '完成任务：按照书中提示完成简单探索任务'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '确保户外环境安全',
      '动作幅度适合小年龄段',
      '随时关注孩子的安全',
      '将故事情节与动作结合'
    ]
  },

  // 5. 户外 + 图书/图片卡 + 社交情感
  {
    id: 'missing-2-2-5-029',
    name: '分享自然故事',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '在户外通过分享图书培养社交能力和关爱自然的情感。',
    materials: '关于小动物友谊的图书。',
    steps: [
      '共读友谊：阅读关于小动物友谊的温暖故事',
      '情感共鸣：引导孩子理解"小动物也需要朋友"',
      '关爱表达：对看到的小动物表示关爱',
      '分享快乐：将图书故事分享给其他小朋友'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择温馨有爱的故事内容',
      '引导孩子产生同理心',
      '鼓励与其他孩子分享',
      '培养爱护自然的意识'
    ]
  },

  // 6. 户外 + 家居物品 + 语言沟通
  {
    id: 'missing-2-2-5-030',
    name: '户外小广播',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'household',
    focus: 'language',
    core_goal: '用简单的家居物品在户外进行语言表达游戏。',
    materials: '小喇叭玩具或纸卷筒。',
    steps: [
      '制作话筒：用纸卷筒做成简易"话筒"',
      '户外播报：用"话筒"描述看到的景物',
      '声音游戏：学习调节说话的音量',
      '分享发现：向家人"播报"户外的新发现'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '控制音量，不影响他人',
      '鼓励孩子大胆表达',
      '引导使用简单句子描述',
      '营造播报的仪式感'
    ]
  },

  // 7. 户外 + 家居物品 + 社交情感
  {
    id: 'missing-2-2-5-031',
    name: '户外野餐分享',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'household',
    focus: 'social',
    core_goal: '通过户外野餐活动培养分享意识和社交礼仪。',
    materials: '小餐具，野餐垫，小食物。',
    steps: [
      '准备野餐：一起铺野餐垫，摆放小餐具',
      '分享食物：将小食物分给家人和朋友',
      '礼貌用餐：学习说"请"、"谢谢"等礼貌用语',
      '收拾整理：一起收拾野餐用品'
    ],
    duration: 4,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '选择安全卫生的食物',
      '强调分享的快乐',
      '教授基本用餐礼仪',
      '培养保护环境的意识'
    ]
  },

  // ===== 等待时场景剩余缺失游戏 =====
  
  // 8. 等待时 + 图书/图片卡 + 精细动作
  {
    id: 'missing-2-2-5-032',
    name: '小手翻书练习',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '在等待时间通过翻书练习锻炼手指精细操作能力。',
    materials: '厚页图书或布书。',
    steps: [
      '正确握书：教孩子如何正确拿书',
      '翻页练习：练习用手指轻柔地翻页',
      '页面定位：学习翻到指定的页面',
      '书签使用：尝试使用简单的书签'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择不易撕坏的厚页书',
      '在等待时保持安静',
      '耐心指导正确的翻书方法',
      '表扬每一次成功的操作'
    ]
  },

  // 9. 等待时 + 图书/图片卡 + 语言沟通
  {
    id: 'missing-2-2-5-033',
    name: '安静故事时光',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '在等待期间通过看图书进行安静的语言交流。',
    materials: '几本简单的图画书。',
    steps: [
      '选择图书：让孩子选择想看的图书',
      '安静翻阅：小声地一起看图片',
      '轻声交流：用很轻的声音描述图片内容',
      '想象延伸：猜猜图片中会发生什么'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '保持音量适合等待场合',
      '选择孩子喜欢的图书主题',
      '通过表情和手势辅助交流',
      '培养安静等待的好习惯'
    ]
  },

  // 10. 等待时 + 家居物品 + 精细动作
  {
    id: 'missing-2-2-5-034',
    name: '小物件整理游戏',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'household',
    focus: 'fine',
    core_goal: '通过整理小物件锻炼手指精细动作和分类能力。',
    materials: '小盒子，安全的小物件（大扣子、小积木等）。',
    steps: [
      '物件准备：准备几种不同的小物件',
      '精细抓取：用手指仔细抓取每个小物件',
      '分类摆放：将相同的物件放在一起',
      '整理收纳：将物件整齐地放回盒子中'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '确保所有物件安全，避免误食',
      '在等待时保持安静',
      '鼓励孩子慢慢仔细操作',
      '准备收纳盒方便整理'
    ]
  },

  // 11. 等待时 + 家居物品 + 语言沟通
  {
    id: 'missing-2-2-5-035',
    name: '小物件讲故事',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'household',
    focus: 'language',
    core_goal: '用随身携带的小物件编故事，发展想象力和语言表达。',
    materials: '几个有趣的小物件（小玩偶、小车等）。',
    steps: [
      '选择主角：选一个小物件作为故事主角',
      '开始故事：简单地说"从前有一个..."',
      '情节发展：引导孩子说小主角发生了什么',
      '故事结尾：一起想个温馨的结尾'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '故事要简单，适合小年龄',
      '保持声音轻柔不影响他人',
      '鼓励孩子发挥想象力',
      '可以重复几个简单的故事情节'
    ]
  },

  // 12. 等待时 + 家居物品 + 逻辑认知
  {
    id: 'missing-2-2-5-036',
    name: '小物件找规律',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'household',
    focus: 'cognition',
    core_goal: '通过小物件的排列游戏发展逻辑思维和规律认知。',
    materials: '不同颜色或形状的小物件。',
    steps: [
      '排列展示：将物件按颜色或大小排成一排',
      '观察规律：引导孩子观察排列的规律',
      '模仿排列：让孩子尝试按同样的规律排列',
      '创造规律：鼓励孩子创造自己的排列方式'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '从最简单的二元规律开始',
      '用明显的特征差异',
      '耐心等待孩子理解',
      '及时表扬孩子的尝试'
    ]
  }

];

console.log('=== 2-2.5岁年龄段缺失游戏补充 - 第三部分 ===');
console.log(`已创建 ${missingGames_2_2_5_part3.length} 个补充游戏\n`);

// 按场景统计
const byScene = missingGames_2_2_5_part3.reduce((acc, game) => {
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

// 按道具统计
const byProps = missingGames_2_2_5_part3.reduce((acc, game) => {
  acc[game.props] = (acc[game.props] || 0) + 1;
  return acc;
}, {});

console.log('\n按道具分布:');
Object.entries(byProps).forEach(([prop, count]) => {
  const propNames = {
    'hands': '仅用手',
    'paper': '纸笔类',
    'blocks_puzzle': '积木/拼图',
    'books_pictures': '图书/图片卡',
    'household': '家居物品'
  };
  console.log(`  ${propNames[prop]}: ${count}个`);
});

console.log('\n游戏列表:');
missingGames_2_2_5_part3.forEach((game, index) => {
  const sceneNames = {
    'home': '居家',
    'outdoor': '户外',
    'waiting': '等待时',
    'bedtime': '睡前',
    'travel': '旅途中'
  };
  const propNames = {
    'hands': '仅用手',
    'paper': '纸笔类',
    'blocks_puzzle': '积木/拼图',
    'books_pictures': '图书/图片卡',
    'household': '家居物品'
  };
  const focusNames = {
    'fine': '精细动作',
    'language': '语言沟通',
    'cognition': '逻辑认知',
    'gross': '大肢体动作',
    'social': '社交情感'
  };
  
  console.log(`${index + 1}. ${game.name}`);
  console.log(`   条件: ${game.age_range}岁 + ${sceneNames[game.scene]} + ${propNames[game.props]} + ${focusNames[game.focus]}`);
  console.log(`   时长: ${game.duration}分钟, 难度: ${game.difficulty}星`);
  console.log('');
});

export { missingGames_2_2_5_part3 };