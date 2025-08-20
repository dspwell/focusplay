// 2.5-3岁年龄段缺失游戏补充 - 第三批 (最后21个游戏)

const missingGames_2_5_3_batch3 = [

  // ===== 睡前场景剩余缺失游戏 =====
  
  // 44. 睡前 + 图书/图片卡 + 语言沟通
  {
    id: 'missing-2-5-3-044',
    name: '睡前温柔故事',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '通过轻声讲述图书故事培养语言表达，营造安眠氛围。',
    materials: '温馨的睡前故事书。',
    steps: [
      '选择故事：选一本温馨安静的睡前故事',
      '轻声阅读：用很轻很温柔的声音读故事',
      '简单复述：让孩子轻声复述故事内容',
      '温馨结束：说\"故事里的小动物也要睡觉了\"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择平和不刺激的故事内容',
      '声音要轻柔有助入眠',
      '可以重复读孩子喜欢的故事',
      '营造安全温馨的睡前时光'
    ]
  },

  // 45. 睡前 + 图书/图片卡 + 逻辑认知
  {
    id: 'missing-2-5-3-045',
    name: '睡前数数书',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '通过睡前数数图书发展数概念，在安静中进行认知活动。',
    materials: '数数主题的图画书。',
    steps: [
      '翻看数书：安静地翻看数数主题的图书',
      '轻声数数：跟随图书轻声数小动物或物品',
      '简单比较：比较\"哪里的更多\"、\"哪里的更少\"',
      '安静合书：数完后轻轻合上书准备睡觉'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择画面简洁的数数书',
      '数数声音要轻柔',
      '不要进行过于复杂的运算',
      '重点是在安静中培养数感'
    ]
  },

  // 46. 睡前 + 图书/图片卡 + 大肢体动作
  {
    id: 'missing-2-5-3-046',
    name: '睡前瑜伽图谱',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '参照图片做简单的睡前放松动作，为安眠做身体准备。',
    materials: '儿童睡前瑜伽图片。',
    steps: [
      '观看图片：看图片中的睡前放松动作',
      '模仿练习：跟随图片做简单的伸展动作',
      '深呼吸：配合图片指导进行深呼吸',
      '放松入睡：动作完成后安静地准备入睡'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '选择极其轻柔的放松动作',
      '所有动作都要缓慢进行',
      '重点在于放松而非锻炼',
      '可以配合舒缓的背景音乐'
    ]
  },

  // 47. 睡前 + 家居物品 + 语言沟通
  {
    id: 'missing-2-5-3-047',
    name: '毛绒伙伴聊天',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'household',
    focus: 'language',
    core_goal: '与毛绒玩具进行睡前对话，发展语言表达和情感安抚。',
    materials: '毛绒玩具或小枕头。',
    steps: [
      '选择伙伴：选择最喜欢的毛绒玩具作为聊天对象',
      '轻声对话：轻声对玩具说今天的经历',
      '表达感情：说\"我们是好朋友\"等温馨话语',
      '一起入睡：抱着毛绒伙伴准备一起睡觉'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '营造温馨安全的睡前氛围',
      '鼓励孩子表达真实情感',
      '声音要像悄悄话一样轻柔',
      '帮助孩子获得安全感'
    ]
  },

  // 48. 睡前 + 家居物品 + 逻辑认知
  {
    id: 'missing-2-5-3-048',
    name: '睡前物品配对',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'household',
    focus: 'cognition',
    core_goal: '通过配对睡前用品发展逻辑思维，建立睡前准备概念。',
    materials: '睡前用品（牙刷配牙膏、枕头配被子等）。',
    steps: [
      '观察用品：看各种睡前准备用品',
      '理解配对：理解哪些物品是配套使用的',
      '动手配对：将相关的物品放在一起',
      '准备就绪：检查睡前用品是否都准备好了'
    ],
    duration: 3,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择孩子熟悉的日常用品',
      '强调物品间的逻辑关系',
      '培养睡前准备的好习惯',
      '可以成为每晚的固定程序'
    ]
  },

  // 49. 睡前 + 家居物品 + 大肢体动作
  {
    id: 'missing-2-5-3-049',
    name: '抱枕放松操',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'household',
    focus: 'gross',
    core_goal: '抱着枕头进行睡前放松运动，获得安全感和身体放松。',
    materials: '抱枕或毛绒玩具。',
    steps: [
      '拥抱抱枕：紧紧拥抱柔软的抱枕',
      '左右摇摆：抱着抱枕轻柔地左右摇摆',
      '深呼吸：抱着抱枕进行深呼吸放松',
      '安心入睡：最终抱着抱枕安心入睡'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '所有动作都要轻柔舒缓',
      '重点是获得安全感而非运动',
      '可以哼唱轻柔的摇篮曲',
      '帮助孩子克服睡前焦虑'
    ]
  },

  // ===== 旅途中场景缺失游戏 =====
  
  // 50. 旅途中 + 仅用手 + 精细动作
  {
    id: 'missing-2-5-3-050',
    name: '旅途手指编织',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'hands',
    focus: 'fine',
    core_goal: '在旅途中进行手指精细操作游戏，锻炼手指灵活性。',
    materials: '长绳或毛线，手指。',
    steps: [
      '绳索准备：准备一根适合的长绳',
      '手指操作：学习简单的手指绳索游戏',
      '编织练习：尝试用手指做简单编织动作',
      '作品展示：向同行者展示手指编织成果'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '确保绳索安全，长度适中',
      '在移动环境中要小心操作',
      '从最简单的动作开始',
      '培养在旅途中的耐心和专注'
    ]
  },

  // 51. 旅途中 + 仅用手 + 大肢体动作
  {
    id: 'missing-2-5-3-051',
    name: '座位健身操',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'hands',
    focus: 'gross',
    core_goal: '在旅途座位上进行适度运动，缓解长时间坐着的不适。',
    materials: '座椅空间。',
    steps: [
      '手臂运动：在座位上进行手臂的伸展运动',
      '肩膀活动：轻柔地转动肩膀缓解僵硬',
      '腿部运动：在座位允许的范围内活动腿部',
      '放松休息：运动完毕后放松休息'
    ],
    duration: 4,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '所有动作都要在座位范围内',
      '不要影响其他乘客',
      '动作要轻柔安全',
      '帮助缓解旅途疲劳'
    ]
  },

  // 52. 旅途中 + 仅用手 + 社交情感
  {
    id: 'missing-2-5-3-052',
    name: '旅途手势交流',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'hands',
    focus: 'social',
    core_goal: '学习用手势与同行者交流，培养非语言沟通能力。',
    materials: '双手。',
    steps: [
      '学习手势：学习简单的交流手势(你好、谢谢等)',
      '练习表达：用手势表达基本的需求和情感',
      '互动交流：与家人用手势进行简单对话',
      '感受理解：体验不用语言也能交流的乐趣'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '教授简单易懂的手势',
      '在旅途中可以安静进行',
      '培养多样化的沟通方式',
      '增进与家人的默契'
    ]
  },

  // 53. 旅途中 + 纸笔类 + 语言沟通
  {
    id: 'missing-2-5-3-053',
    name: '旅行见闻记录',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'paper',
    focus: 'language',
    core_goal: '记录和描述旅行见闻，发展观察力和语言表达能力。',
    materials: '小本子，彩笔。',
    steps: [
      '观察窗外：仔细观察旅途中看到的景物',
      '简单记录：用画画或符号记录看到的内容',
      '语言描述：用话语描述记录的内容',
      '分享交流：与同行者分享自己的观察发现'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '鼓励孩子主动观察',
      '不要求画得准确，重点是表达',
      '引导使用丰富的描述词汇',
      '培养记录和分享的习惯'
    ]
  },

  // 54. 旅途中 + 纸笔类 + 逻辑认知
  {
    id: 'missing-2-5-3-054',
    name: '旅途计数游戏',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'paper',
    focus: 'cognition',
    core_goal: '在旅途中进行计数观察，发展数概念和逻辑思维。',
    materials: '计数记录纸，蜡笔。',
    steps: [
      '选择目标：选择要计数的对象(红色车、大树等)',
      '观察计数：看到目标对象时进行计数',
      '记录结果：在纸上用符号记录计数结果',
      '比较分析：比较不同对象的数量多少'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择容易识别的计数对象',
      '从小数量开始，逐步增加',
      '可以设置计数游戏的小目标',
      '培养持续观察和计数的耐心'
    ]
  },

  // 55. 旅途中 + 纸笔类 + 大肢体动作
  {
    id: 'missing-2-5-3-055',
    name: '纸张座位操',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'paper',
    focus: 'gross',
    core_goal: '利用纸张在座位上进行身体运动，缓解旅途中的身体不适。',
    materials: '几张纸。',
    steps: [
      '纸张准备：准备几张轻便的纸',
      '挥舞运动：在座位上挥舞纸张进行手臂运动',
      '身体协调：配合纸张运动进行身体摆动',
      '收纳休息：运动结束后收好纸张休息'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '动作范围要适合座位空间',
      '不要影响其他乘客',
      '可以重复进行缓解疲劳',
      '选择不易撕破的纸张'
    ]
  },

  // 56. 旅途中 + 纸笔类 + 社交情感
  {
    id: 'missing-2-5-3-056',
    name: '旅途祝福卡',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'paper',
    focus: 'social',
    core_goal: '制作祝福卡片送给同行者，培养关爱他人的情感。',
    materials: '小卡片，彩笔。',
    steps: [
      '制作卡片：在小卡片上画简单的图案',
      '写下祝福：画或写简单的祝福内容',
      '表达心意：对收卡人说\"这是我的祝福\"',
      '传递温暖：将卡片送给同行的家人朋友'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '引导孩子表达美好的祝愿',
      '不要求制作技巧，重点是心意',
      '教授赠送的礼貌用语',
      '培养关爱他人的情感'
    ]
  },

  // 57. 旅途中 + 图书/图片卡 + 精细动作
  {
    id: 'missing-2-5-3-057',
    name: '旅途翻书挑战',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '在移动环境中稳定翻书，锻炼精细动作的控制能力。',
    materials: '结实的厚页图书。',
    steps: [
      '稳定持书：在移动的交通工具中稳定拿书',
      '精准翻页：更加小心地翻动每一页',
      '寻找目标：翻到指定的页面或图片',
      '保护图书：在旅途环境中保护好图书'
    ],
    duration: 4,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '选择不易损坏的结实图书',
      '在相对稳定的时间段进行',
      '鼓励孩子更加仔细的操作',
      '培养在不同环境中的适应能力'
    ]
  },

  // 58. 旅途中 + 图书/图片卡 + 逻辑认知
  {
    id: 'missing-2-5-3-058',
    name: '旅途图片分类',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '将图书中的内容进行分类，发展逻辑思维和分类能力。',
    materials: '内容丰富的图画书。',
    steps: [
      '观察图片：仔细观察图书中的各种图片',
      '发现特征：发现图片中物品的不同特征',
      '进行分类：将相似的物品归为一类',
      '解释分类：说明为什么这样分类'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '从最明显的特征开始分类',
      '鼓励孩子说出分类的理由',
      '可以有多种不同的分类方法',
      '培养逻辑分析的能力'
    ]
  },

  // 59. 旅途中 + 图书/图片卡 + 大肢体动作
  {
    id: 'missing-2-5-3-059',
    name: '图片动作模拟',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '根据图片在有限空间内模拟动作，锻炼身体协调能力。',
    materials: '动作丰富的图画书。',
    steps: [
      '选择动作：从图书中选择适合模仿的动作',
      '分析可行性：判断哪些动作适合在座位上做',
      '小幅模仿：在有限空间内进行小幅度模仿',
      '创意改编：根据空间限制创意改编动作'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '选择适合狭小空间的动作',
      '确保不影响其他乘客',
      '鼓励创意改编动作',
      '可以与家人一起参与'
    ]
  },

  // 60. 旅途中 + 图书/图片卡 + 社交情感
  {
    id: 'missing-2-5-3-060',
    name: '旅途故事分享',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '与同行者分享图书故事，培养分享精神和交流能力。',
    materials: '有趣的故事图书。',
    steps: [
      '选择故事：选择一个喜欢的故事',
      '简单复述：用自己的话简单复述故事',
      '分享感受：说出\"我觉得这个故事很...\"',
      '邀请互动：邀请他人也分享故事或感受'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择孩子熟悉喜欢的故事',
      '鼓励用自己的语言表达',
      '保持适合旅途的交流音量',
      '培养主动分享的社交能力'
    ]
  },

  // 61. 旅途中 + 家居物品 + 精细动作
  {
    id: 'missing-2-5-3-061',
    name: '旅途精细整理',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'household',
    focus: 'fine',
    core_goal: '在旅途中整理小物品，锻炼精细动作和组织能力。',
    materials: '旅行收纳包，各种小物品。',
    steps: [
      '物品倾倒：小心地将收纳包中的物品倾倒出来',
      '精细分拣：仔细分拣不同类型的小物品',
      '有序排列：将物品按一定规律排列整齐',
      '重新收纳：将所有物品有序地收纳回包中'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '确保所有物品安全，不易丢失',
      '在旅途中要特别小心物品掉落',
      '鼓励孩子慢慢仔细进行',
      '培养旅行中的自理能力'
    ]
  },

  // 62. 旅途中 + 家居物品 + 语言沟通
  {
    id: 'missing-2-5-3-062',
    name: '旅途物品介绍',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'household',
    focus: 'language',
    core_goal: '介绍旅行中携带的物品，发展语言描述和表达能力。',
    materials: '各种旅行用品。',
    steps: [
      '选择物品：选择一个有趣的旅行用品',
      '观察特征：仔细观察物品的特点',
      '详细介绍：用语言介绍物品的用途和特征',
      '互动问答：回答他人关于物品的问题'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '鼓励使用丰富的描述性词汇',
      '可以讲述物品的来历或用途',
      '培养观察和表达的能力',
      '保持适合旅途的交流音量'
    ]
  },

  // 63. 旅途中 + 家居物品 + 社交情感
  {
    id: 'missing-2-5-3-063',
    name: '旅途关怀包',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'household',
    focus: 'social',
    core_goal: '准备关怀小物品照顾同行者，培养关爱他人的品质。',
    materials: '小毛巾，湿巾，小零食等关怀用品。',
    steps: [
      '观察需要：观察同行者是否有需要帮助的地方',
      '选择物品：从关怀包中选择合适的物品',
      '主动提供：主动询问\"你需要吗？\"',
      '贴心服务：帮助他人使用物品或提供照顾'
    ],
    duration: 4,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '培养观察他人需要的敏感性',
      '教授关怀他人的表达方式',
      '选择安全适用的关怀物品',
      '让孩子体验助人的快乐'
    ]
  }

];

console.log('=== 2.5-3岁年龄段缺失游戏补充 - 第三批 ===');
console.log(`已创建 ${missingGames_2_5_3_batch3.length} 个补充游戏\n`);

// 按场景统计
const byScene = missingGames_2_5_3_batch3.reduce((acc, game) => {
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

export { missingGames_2_5_3_batch3 };