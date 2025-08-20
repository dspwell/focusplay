// 2-2.5岁年龄段缺失游戏补充

const missingGames_2_2_5 = [

  // ===== 居家场景缺失游戏 =====
  
  // 1. 居家 + 仅用手 + 精细动作
  {
    id: 'missing-2-2-5-001',
    name: '小手捏捏豆',
    age_range: '2-2.5',
    scene: 'home',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过手指捏取动作锻炼精细动作控制能力。',
    materials: '大豆或玉米粒（需成人监护避免误食），小碗。',
    steps: [
      '准备阶段：家长准备一小碗大豆，确保孩子不会放入嘴中',
      '示范动作：用拇指和食指捏起豆子，放入另一个小碗',
      '孩子操作：让孩子模仿，一颗一颗地捏豆子',
      '数数游戏：边捏边数"一颗、两颗"，增加趣味性'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '确保豆子大小适中，避免误食风险',
      '全程需要成人陪伴和监护',
      '从少量开始，避免孩子感到枯燥',
      '及时表扬孩子的每一次成功操作'
    ]
  },

  // 2. 居家 + 仅用手 + 逻辑认知
  {
    id: 'missing-2-2-5-002',
    name: '手指找朋友',
    age_range: '2-2.5',
    scene: 'home',
    props: 'hands',
    focus: 'cognition',
    core_goal: '通过手指游戏发展空间认知和配对概念。',
    materials: '双手即可。',
    steps: [
      '认识手指：先让孩子观察自己的十个手指',
      '左右对应：将左手和右手的相同手指碰在一起',
      '找朋友游戏：说出"拇指找拇指，食指找食指"',
      '变化玩法：让不同的手指互相"握手"'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '用简单的语言描述每个手指',
      '可以给手指起可爱的名字增加趣味',
      '鼓励孩子主动尝试配对',
      '适当时候可以加入简单的手指操'
    ]
  },

  // 3. 居家 + 仅用手 + 大肢体动作
  {
    id: 'missing-2-2-5-003',
    name: '小兔蹦蹦跳',
    age_range: '2-2.5',
    scene: 'home',
    props: 'hands',
    focus: 'gross',
    core_goal: '通过模仿小动物的动作发展大肢体运动能力。',
    materials: '空旷的室内空间。',
    steps: [
      '示范动作：家长做小兔子蹦跳的动作',
      '模仿学习：孩子跟着做双脚并拢的小跳跃',
      '添加手势：加上"小兔子的耳朵"手势动作',
      '自由表演：让孩子自由地做小兔子蹦跳'
    ],
    duration: 4,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '确保地面安全，避免滑倒',
      '动作幅度要适合孩子的能力',
      '可以配合儿歌增加趣味性',
      '鼓励孩子大胆表达和模仿'
    ]
  },

  // 4. 居家 + 纸笔类 + 语言沟通
  {
    id: 'missing-2-2-5-004',
    name: '涂涂说说画',
    age_range: '2-2.5',
    scene: 'home',
    props: 'paper',
    focus: 'language',
    core_goal: '通过涂鸦过程中的语言交流发展表达能力。',
    materials: '大纸张，粗蜡笔。',
    steps: [
      '自由涂鸦：让孩子在纸上随意涂画',
      '描述活动：引导孩子说"我在画圆圆"、"这是红色"',
      '简单对话：问"你画的是什么？"鼓励孩子回答',
      '共同创作：家长和孩子一起在纸上添加内容'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '不要求孩子画出具体形象',
      '重点在于语言表达而非绘画技巧',
      '多用鼓励性的词语回应孩子',
      '可以描述孩子画画时的动作过程'
    ]
  },

  // 5. 居家 + 纸笔类 + 大肢体动作
  {
    id: 'missing-2-2-5-005',
    name: '大纸地毯画',
    age_range: '2-2.5',
    scene: 'home',
    props: 'paper',
    focus: 'gross',
    core_goal: '在大纸张上爬行涂画，锻炼大肢体协调能力。',
    materials: '大张白纸或旧报纸，可水洗蜡笔。',
    steps: [
      '铺设纸张：在地面铺一大张纸',
      '爬行涂画：让孩子在纸上爬行的同时进行涂画',
      '变换姿势：尝试趴着、跪着等不同姿势画画',
      '全身参与：用整个身体在纸上留下"作品"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '选择可清洗的绘画材料',
      '确保地面平整安全',
      '可以准备湿纸巾随时清洁',
      '鼓励孩子自由探索不同的绘画方式'
    ]
  },

  // 6. 居家 + 纸笔类 + 社交情感
  {
    id: 'missing-2-2-5-006',
    name: '画给妈妈的爱',
    age_range: '2-2.5',
    scene: 'home',
    props: 'paper',
    focus: 'social',
    core_goal: '通过给家人画画表达爱意，培养关爱情感。',
    materials: '彩色纸，蜡笔。',
    steps: [
      '选择对象：问孩子"想给谁画一幅画？"',
      '表达爱意：边画边说"这是给妈妈的"，"妈妈会很开心"',
      '分享作品：画完后一起去给家人看',
      '传递温暖：看到家人高兴的反应，感受分享的快乐'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '重点在于情感表达而非绘画水平',
      '引导孩子用简单的话表达爱意',
      '家人要给予积极热情的回应',
      '可以把画作贴在显眼的地方'
    ]
  },

  // 7. 居家 + 图书/图片卡 + 精细动作
  {
    id: 'missing-2-2-5-007',
    name: '翻翻小书手',
    age_range: '2-2.5',
    scene: 'home',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '通过翻书动作锻炼手指精细操作能力。',
    materials: '厚页面的幼儿图书。',
    steps: [
      '示范翻页：家长慢慢示范如何轻柔地翻书页',
      '协助练习：帮助孩子的小手正确抓取书页边缘',
      '独立尝试：让孩子自己尝试翻页动作',
      '书页游戏：可以玩"翻到小猫在哪里"的寻找游戏'
    ],
    duration: 3,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择不容易撕坏的厚页图书',
      '耐心等待孩子完成翻页动作',
      '不要急于帮助，给孩子充分练习机会',
      '表扬每一次成功的翻页操作'
    ]
  },

  // 8. 居家 + 图书/图片卡 + 语言沟通
  {
    id: 'missing-2-2-5-008',
    name: '看图说话小能手',
    age_range: '2-2.5',
    scene: 'home',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '通过看图片说简单词汇发展语言表达能力。',
    materials: '色彩鲜艳的图片卡或图书。',
    steps: [
      '观察图片：指着图片问"这是什么？"',
      '模仿发音：孩子说出看到的物品名称',
      '扩展词汇：从单词扩展到"红色的苹果"等短语',
      '简单描述：引导孩子说"小猫在睡觉"等简单句子'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '从孩子熟悉的物品开始',
      '不强迫孩子必须开口说话',
      '多重复几遍给孩子模仿的机会',
      '用夸张的语音语调吸引孩子注意'
    ]
  },

  // ===== 户外场景缺失游戏 =====
  
  // 9. 户外 + 仅用手 + 精细动作
  {
    id: 'missing-2-2-5-009',
    name: '小手抓落叶',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过抓取自然物品锻炼手指精细动作。',
    materials: '户外的落叶、小石头等自然物品。',
    steps: [
      '寻找目标：和孩子一起寻找地上的落叶',
      '精确抓取：用手指小心地捡起一片叶子',
      '观察触摸：感受叶子的纹理和形状',
      '收集整理：将捡到的叶子放入小篮子中'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择干净安全的自然环境',
      '提醒孩子不要将物品放入嘴中',
      '鼓励孩子仔细观察自然物品的特征',
      '可以带回家制作自然手工艺品'
    ]
  },

  // 10. 户外 + 仅用手 + 社交情感
  {
    id: 'missing-2-2-5-010',
    name: '挥手说你好',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'social',
    core_goal: '通过挥手问候培养社交礼貌和与人交往的意识。',
    materials: '户外环境，遇到的路人或其他小朋友。',
    steps: [
      '示范问候：家长先向遇到的人挥手说"你好"',
      '鼓励模仿：引导孩子也挥手向别人问候',
      '礼貌回应：当别人回应时，教孩子礼貌地微笑',
      '感受温暖：体验与人友好交往的愉快感觉'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '不强迫害羞的孩子必须打招呼',
      '选择看起来友善的路人进行互动',
      '家长要起到良好的示范作用',
      '及时表扬孩子的主动社交行为'
    ]
  },

  // 11. 户外 + 图书/图片卡 + 精细动作
  {
    id: 'missing-2-2-5-011',
    name: '户外找图游戏',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '通过翻看图片卡并寻找对应实物锻炼精细动作。',
    materials: '自然物品图片卡（树叶、花朵、石头等）。',
    steps: [
      '出示图片：给孩子看一张树叶的图片卡',
      '翻找图片：让孩子在图片卡中翻找目标图片',
      '对照寻找：拿着图片卡在周围环境中寻找相同的物品',
      '指认配对：用手指指向找到的真实物品'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '图片卡要清晰易认',
      '从最容易找到的物品开始',
      '鼓励孩子仔细观察比较',
      '找到后要及时给予表扬和鼓励'
    ]
  },

  // 12. 户外 + 图书/图片卡 + 语言沟通
  {
    id: 'missing-2-2-5-012',
    name: '户外故事时光',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '在户外环境中通过看图说话发展语言能力。',
    materials: '便携式图书或图片卡。',
    steps: [
      '选择地点：找一个安静舒适的户外角落',
      '共读图书：和孩子一起看图片',
      '描述环境：将书中内容与周围环境联系起来',
      '互动交流：问"你看到什么？"鼓励孩子表达'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择与户外环境相关的图书',
      '利用真实环境增强理解',
      '鼓励孩子用简单词汇描述所见',
      '保持轻松愉快的阅读氛围'
    ]
  }

];

console.log('=== 2-2.5岁年龄段缺失游戏补充 ===');
console.log(`已创建 ${missingGames_2_2_5.length} 个补充游戏\n`);

// 按场景统计
const byScene = missingGames_2_2_5.reduce((acc, game) => {
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
const byProps = missingGames_2_2_5.reduce((acc, game) => {
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

// 按发展重点统计
const byFocus = missingGames_2_2_5.reduce((acc, game) => {
  acc[game.focus] = (acc[game.focus] || 0) + 1;
  return acc;
}, {});

console.log('\n按发展重点分布:');
Object.entries(byFocus).forEach(([focus, count]) => {
  const focusNames = {
    'fine': '精细动作',
    'language': '语言沟通',
    'cognition': '逻辑认知',
    'gross': '大肢体动作',
    'social': '社交情感'
  };
  console.log(`  ${focusNames[focus]}: ${count}个`);
});

console.log('\n游戏列表:');
missingGames_2_2_5.forEach((game, index) => {
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

export { missingGames_2_2_5 };