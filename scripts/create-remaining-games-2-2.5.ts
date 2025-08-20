// 2-2.5岁年龄段剩余缺失游戏补充 - 最后27个

const remainingGames_2_2_5 = [

  // ===== 居家场景剩余缺失游戏 =====
  
  // 1. 居家 + 图书/图片卡 + 大肢体动作
  {
    id: 'remaining-2-2-5-001',
    name: '图书健身操',
    age_range: '2-2.5',
    scene: 'home',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '通过模仿图书中的动物动作进行大肢体运动，锻炼身体协调性。',
    materials: '动物图书，空旷的室内空间。',
    steps: [
      '翻看图书：一起看动物图书，观察不同动物的样子',
      '模仿动作：学小鸟飞翔，张开手臂挥动',
      '动物体操：学小兔跳跃，学小熊走路',
      '自由表演：让孩子选择最喜欢的动物进行模仿'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '确保室内空间足够活动',
      '动作幅度适合小年龄段',
      '可以配合动物叫声增加趣味',
      '鼓励孩子大胆表现'
    ]
  },

  // 2. 居家 + 图书/图片卡 + 社交情感
  {
    id: 'remaining-2-2-5-002',
    name: '图书分享小天使',
    age_range: '2-2.5',
    scene: 'home',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过与家人分享图书培养分享意识和亲情表达能力。',
    materials: '温馨的图书，舒适的阅读角落。',
    steps: [
      '选择图书：让孩子选择想要分享的图书',
      '介绍内容：用简单话语介绍图书中的内容',
      '情感表达：说"这个故事很温暖"、"我喜欢这个"',
      '传递温暖：把图书递给家人，说"给你看"'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '营造温馨的家庭氛围',
      '鼓励孩子主动分享',
      '家人要积极响应孩子的分享',
      '重点培养分享的快乐感受'
    ]
  },

  // ===== 户外场景剩余缺失游戏 =====
  
  // 3. 户外 + 纸笔类 + 语言沟通
  {
    id: 'remaining-2-2-5-003',
    name: '户外小画家说说画',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'paper',
    focus: 'language',
    core_goal: '在户外边画边说，通过描述绘画内容发展语言表达能力。',
    materials: '画板，蜡笔，小凳子。',
    steps: [
      '户外写生：在户外找个舒适的地方坐下画画',
      '边画边说：画的时候说"我画太阳"、"这是绿色的草"',
      '描述颜色：学会说出不同颜色的名称',
      '分享作品：向其他人介绍自己的户外画作'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择风不大的户外环境',
      '准备便携的绘画工具',
      '鼓励孩子描述所见所画',
      '可以拍照记录孩子的创作过程'
    ]
  },

  // 4. 户外 + 纸笔类 + 逻辑认知
  {
    id: 'remaining-2-2-5-004',
    name: '户外寻宝地图',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'paper',
    focus: 'cognition',
    core_goal: '通过制作简单地图和寻找目标，发展空间认知和逻辑思维。',
    materials: '纸张，彩笔，小贴纸。',
    steps: [
      '画简单地图：在纸上画出要寻找的物品（树、花、石头）',
      '标记位置：用贴纸标记这些物品的大概位置',
      '按图寻找：拿着"地图"去寻找相应的物品',
      '核对验证：找到后在地图上打勾表示完成'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '地图要极其简单，符合认知水平',
      '先从2-3个目标开始',
      '及时给予寻找成功的鼓励',
      '可以重复玩多次增强记忆'
    ]
  },

  // 5. 户外 + 纸笔类 + 大肢体动作
  {
    id: 'remaining-2-2-5-005',
    name: '纸飞机大冒险',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'paper',
    focus: 'gross',
    core_goal: '通过制作纸飞机并进行投掷游戏锻炼大肢体协调能力。',
    materials: '彩纸，开阔的户外空间。',
    steps: [
      '制作纸飞机：家长帮助折简单的纸飞机',
      '投掷练习：学习用手臂投掷纸飞机',
      '追逐游戏：跑去捡回落地的纸飞机',
      '距离挑战：尝试让纸飞机飞得更远'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '选择无风或微风的天气',
      '确保周围没有危险物品',
      '教授正确的投掷姿势',
      '可以制作多个纸飞机增加乐趣'
    ]
  },

  // 6. 户外 + 纸笔类 + 社交情感
  {
    id: 'remaining-2-2-5-006',
    name: '户外邀请函',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'paper',
    focus: 'social',
    core_goal: '制作简单邀请函邀请他人参与户外活动，培养社交主动性。',
    materials: '彩纸，蜡笔，贴纸。',
    steps: [
      '制作邀请函：在纸上画简单的图案做邀请函',
      '表达邀请：学会说"请你来和我一起玩"',
      '递送邀请：主动将邀请函递给其他小朋友',
      '一起游戏：邀请成功后一起进行户外游戏'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '鼓励孩子主动与人交往',
      '教授基本的邀请礼貌用语',
      '家长可以适当协助但不代替',
      '培养孩子的社交自信心'
    ]
  },

  // ===== 等待时场景剩余缺失游戏 =====
  
  // 7. 等待时 + 图书/图片卡 + 逻辑认知
  {
    id: 'remaining-2-2-5-007',
    name: '图片排排队',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '通过图片排序游戏发展逻辑思维和序列认知能力。',
    materials: '3-4张有序图片卡（如小动物成长过程）。',
    steps: [
      '观察图片：仔细看每张图片的内容',
      '理解顺序：家长解释图片的先后关系',
      '排列练习：让孩子尝试按顺序排列图片',
      '验证结果：检查排列是否正确，给予鼓励'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择顺序关系明显的图片',
      '从最简单的2-3张开始',
      '在等待时保持安静',
      '耐心引导孩子思考'
    ]
  },

  // 8. 等待时 + 图书/图片卡 + 大肢体动作
  {
    id: 'remaining-2-2-5-008',
    name: '静悄悄体操',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '参照图片做安静的肢体动作，在有限空间内进行适度运动。',
    materials: '动作图片卡（伸展、转头等安静动作）。',
    steps: [
      '观看图片：看图片中示范的安静动作',
      '模仿动作：学习轻柔的伸展和转动',
      '控制幅度：动作要小幅度，不影响他人',
      '放松身体：通过动作缓解等待时的不适'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '所有动作都要轻柔安静',
      '动作幅度要适合等待空间',
      '可以重复几个简单动作',
      '帮助孩子放松紧张情绪'
    ]
  },

  // 9. 等待时 + 图书/图片卡 + 社交情感
  {
    id: 'remaining-2-2-5-009',
    name: '图片情感小老师',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过图片学习识别情感表情，培养同理心和情感认知。',
    materials: '表情图片卡（开心、难过、生气等）。',
    steps: [
      '认识表情：看图片中不同的表情',
      '学习命名：学会说"开心"、"难过"等词汇',
      '模仿表情：尝试做出相同的表情',
      '情感关怀：问"如果有人难过，我们怎么办？"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '从最基本的开心、难过开始',
      '引导孩子体验不同情感',
      '培养对他人情感的关注',
      '保持轻柔的交流音量'
    ]
  },

  // 10. 等待时 + 家居物品 + 大肢体动作
  {
    id: 'remaining-2-2-5-010',
    name: '小物件舒展操',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'household',
    focus: 'gross',
    core_goal: '用随身小物件做舒展运动，在等待时活动身体。',
    materials: '小毛巾或手绢。',
    steps: [
      '准备物件：拿出小毛巾或手绢',
      '上肢运动：拉着毛巾做手臂伸展',
      '轻柔摆动：轻轻摆动毛巾，身体跟随',
      '收纳整理：运动结束后整齐收好物品'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '动作要轻柔不影响他人',
      '选择柔软安全的物品',
      '运动幅度要适中',
      '可以当作等待时的放松活动'
    ]
  },

  // ===== 睡前场景剩余缺失游戏 =====
  
  // 11. 睡前 + 纸笔类 + 逻辑认知
  {
    id: 'remaining-2-2-5-011',
    name: '睡前图形配对',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'paper',
    focus: 'cognition',
    core_goal: '通过简单的图形配对游戏发展认知能力，为入睡做准备。',
    materials: '带有简单图形的纸卡。',
    steps: [
      '观察图形：看纸上的圆形、方形等简单图形',
      '寻找相同：找出相同形状的图形',
      '配对连线：用手指连接相同的图形',
      '安静收尾：配对完成后安静准备睡觉'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '选择简单易识别的图形',
      '保持安静温柔的氛围',
      '不要过于复杂以免兴奋',
      '配对成功后及时表扬'
    ]
  },

  // 12. 睡前 + 纸笔类 + 大肢体动作
  {
    id: 'remaining-2-2-5-012',
    name: '纸巾轻柔操',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'paper',
    focus: 'gross',
    core_goal: '用纸巾做轻柔的放松运动，帮助身体为入睡做准备。',
    materials: '柔软的纸巾或薄纸。',
    steps: [
      '准备纸巾：拿一张柔软的纸巾',
      '轻柔挥动：像羽毛一样轻柔地挥动纸巾',
      '身体摆动：身体跟随纸巾轻柔摆动',
      '放松躺下：最后放下纸巾，安静躺下'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '所有动作都要轻柔缓慢',
      '营造安静舒缓的氛围',
      '可以配合轻柔的音乐',
      '重点在于放松而非运动'
    ]
  },

  // 13. 睡前 + 图书/图片卡 + 逻辑认知
  {
    id: 'remaining-2-2-5-013',
    name: '睡前数数小书',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '通过数数图书发展数概念，在安静氛围中进行认知活动。',
    materials: '简单的数字图书或图片卡。',
    steps: [
      '翻看数书：安静地翻看数字图书',
      '数数练习：数图片中的小动物或物品',
      '数字认知：学习1、2、3等简单数字',
      '安静结束：数完后安静地合上书'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择图片清晰简单的数书',
      '数数要轻声细语',
      '从1-3开始，逐步增加',
      '营造温馨的睡前学习氛围'
    ]
  },

  // 14. 睡前 + 图书/图片卡 + 大肢体动作
  {
    id: 'remaining-2-2-5-014',
    name: '睡前瑜伽小书',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '参照图书做简单的睡前放松动作，为入睡做身体准备。',
    materials: '睡前瑜伽图片书。',
    steps: [
      '观看图书：看书中的放松动作图片',
      '模仿动作：学习简单的伸展和放松动作',
      '深呼吸：配合深呼吸进行放松',
      '准备入睡：动作结束后安静准备睡觉'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '选择非常轻柔的动作',
      '重点在于放松而非锻炼',
      '可以配合舒缓的背景音乐',
      '营造平静的睡前氛围'
    ]
  },

  // 15. 睡前 + 家居物品 + 语言沟通
  {
    id: 'remaining-2-2-5-015',
    name: '小枕头说悄悄话',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'household',
    focus: 'language',
    core_goal: '通过与小枕头说悄悄话培养语言表达和亲密情感。',
    materials: '柔软的小枕头或毛绒玩具。',
    steps: [
      '抱紧枕头：抱着小枕头或毛绒玩具',
      '说悄悄话：轻声对枕头说今天的开心事',
      '表达情感：说"我爱你"、"晚安"等温暖话语',
      '一起入睡：抱着枕头准备安静入睡'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '营造安全温暖的氛围',
      '鼓励孩子表达真实情感',
      '声音要轻柔如悄悄话',
      '培养睡前感恩的习惯'
    ]
  },

  // 16. 睡前 + 家居物品 + 大肢体动作
  {
    id: 'remaining-2-2-5-016',
    name: '抱抱熊放松操',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'household',
    focus: 'gross',
    core_goal: '抱着毛绒玩具做放松动作，通过拥抱获得安全感。',
    materials: '毛绒玩具或小枕头。',
    steps: [
      '选择伙伴：选一个最喜欢的毛绒玩具',
      '拥抱摇摆：抱着玩具轻轻左右摇摆',
      '一起伸展：抱着玩具做轻柔的伸展动作',
      '安心入睡：最后抱着玩具安静躺下'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '动作要非常轻柔',
      '重点在于获得安全感',
      '可以哼唱轻柔的摇篮曲',
      '帮助孩子放松紧张情绪'
    ]
  }

];

// 继续剩余的11个游戏...
const remainingGames_2_2_5_part2 = [

  // ===== 旅途中场景剩余缺失游戏 =====
  
  // 17. 旅途中 + 纸笔类 + 逻辑认知
  {
    id: 'remaining-2-2-5-017',
    name: '旅途连连看',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'paper',
    focus: 'cognition',
    core_goal: '在旅途中通过简单的连线游戏发展认知和配对能力。',
    materials: '连线图纸，蜡笔。',
    steps: [
      '观察图案：看纸上需要连线的简单图案',
      '寻找关联：找出有关联的图案（如苹果和苹果树）',
      '画线连接：用蜡笔画线连接相关的图案',
      '验证结果：检查连线是否正确'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择关联明显的图案',
      '在移动环境中保持稳定',
      '准备便于固定的画板',
      '及时鼓励孩子的尝试'
    ]
  },

  // 18. 旅途中 + 纸笔类 + 大肢体动作
  {
    id: 'remaining-2-2-5-018',
    name: '座位小体操',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'paper',
    focus: 'gross',
    core_goal: '用纸张辅助在座位上做适度的身体运动，缓解旅途疲劳。',
    materials: '几张彩纸。',
    steps: [
      '纸张准备：拿几张彩色纸张',
      '上肢运动：举起纸张做手臂运动',
      '扭腰转身：在座位上轻柔地转动身体',
      '腿部活动：抬抬腿，动动脚'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '动作幅度要适合座位空间',
      '不要影响其他乘客',
      '动作要轻柔安全',
      '可以重复几次缓解疲劳'
    ]
  },

  // 19. 旅途中 + 纸笔类 + 社交情感
  {
    id: 'remaining-2-2-5-019',
    name: '旅途友谊卡',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'paper',
    focus: 'social',
    core_goal: '制作简单的友谊卡片送给同行的人，培养社交和分享精神。',
    materials: '彩纸，蜡笔，贴纸。',
    steps: [
      '制作卡片：在纸上画简单的图案做友谊卡',
      '装饰卡片：用贴纸装饰让卡片更美丽',
      '表达心意：说"这是给你的礼物"',
      '赠送卡片：将卡片送给家人或同行的朋友'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '鼓励孩子主动表达善意',
      '教授基本的赠礼礼仪',
      '接受者要表现出感激',
      '培养孩子的分享精神'
    ]
  },

  // 20. 旅途中 + 图书/图片卡 + 精细动作
  {
    id: 'remaining-2-2-5-020',
    name: '旅途翻书小达人',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '在旅途颠簸中练习稳定翻书，锻炼精细动作控制能力。',
    materials: '结实的厚页图书。',
    steps: [
      '稳定握书：在移动环境中学习稳定拿书',
      '小心翻页：更加仔细地翻动书页',
      '定位寻找：翻到指定的页面或图片',
      '保护图书：学会在旅途中保护好图书'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择不易损坏的厚页书',
      '在相对稳定的时候进行',
      '鼓励孩子慢慢操作',
      '培养爱护图书的意识'
    ]
  },

  // 21. 旅途中 + 图书/图片卡 + 语言沟通
  {
    id: 'remaining-2-2-5-021',
    name: '旅途小播音员',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '看图书并用小声音为同行者"播报"内容，发展语言表达。',
    materials: '有趣的图画书。',
    steps: [
      '观看图书：仔细观看图书中的内容',
      '小声播报：用很轻的声音描述图片内容',
      '简单解说：试着解释图片中发生的事情',
      '互动交流：邀请家人一起看图书'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '声音要轻，不影响他人',
      '鼓励孩子勇敢表达',
      '选择内容丰富的图书',
      '可以重复描述加深印象'
    ]
  },

  // 22. 旅途中 + 图书/图片卡 + 大肢体动作
  {
    id: 'remaining-2-2-5-022',
    name: '看图做动作',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '根据图书中的动作图片在座位上做相应动作，活动身体。',
    materials: '动作示范图书。',
    steps: [
      '翻看图书：看书中各种简单的动作示范',
      '选择动作：选择适合在座位上做的动作',
      '模仿练习：在有限空间内模仿动作',
      '创新改编：根据空间限制改编动作'
    ],
    duration: 3,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '选择适合狭小空间的动作',
      '动作幅度要控制',
      '确保不影响其他乘客',
      '可以重复几个简单动作'
    ]
  },

  // 23. 旅途中 + 图书/图片卡 + 社交情感
  {
    id: 'remaining-2-2-5-023',
    name: '旅途温暖故事',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过分享温暖的图书故事培养同理心和关爱他人的情感。',
    materials: '温馨的情感主题图书。',
    steps: [
      '共读图书：和家人一起安静地看温馨图书',
      '理解情感：学习理解书中角色的情感',
      '表达关爱：说"小动物需要朋友"等话语',
      '传递温暖：给同行的人分享温暖的感受'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择温馨有爱的故事内容',
      '引导孩子感受他人的情感',
      '培养同理心和关爱意识',
      '保持轻柔的交流氛围'
    ]
  },

  // 24. 旅途中 + 家居物品 + 精细动作
  {
    id: 'remaining-2-2-5-024',
    name: '旅途小收纳师',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'household',
    focus: 'fine',
    core_goal: '整理和收纳随身小物品，在旅途中锻炼精细动作能力。',
    materials: '小收纳袋，一些安全小物件。',
    steps: [
      '取出物品：从收纳袋中取出小物件',
      '精细操作：仔细地拿起每个小物件',
      '分类整理：将相似的物件放在一起',
      '重新收纳：小心地将物品放回袋中'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择安全无害的小物件',
      '在旅途中防止物品掉落',
      '鼓励孩子慢慢仔细操作',
      '培养整理收纳的好习惯'
    ]
  },

  // 25. 旅途中 + 家居物品 + 语言沟通
  {
    id: 'remaining-2-2-5-025',
    name: '旅途小电话',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'household',
    focus: 'language',
    core_goal: '用随身物品做"电话"进行对话游戏，发展语言交流能力。',
    materials: '小盒子或玩具电话。',
    steps: [
      '准备电话：用小盒子或玩具当作电话',
      '拨打电话：模仿打电话的动作',
      '对话练习：说"喂，你好"、"我在旅行"',
      '分享见闻：通过"电话"分享旅途见到的事物'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '控制声音不影响他人',
      '鼓励孩子模仿电话对话',
      '可以和家人轮流"打电话"',
      '培养礼貌的通话习惯'
    ]
  },

  // 26. 旅途中 + 家居物品 + 大肢体动作
  {
    id: 'remaining-2-2-5-026',
    name: '旅途按摩小助手',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'household',
    focus: 'gross',
    core_goal: '用小毛巾等物品为家人做简单按摩，活动手臂和身体。',
    materials: '小毛巾或软布。',
    steps: [
      '准备毛巾：拿出柔软的小毛巾',
      '按摩动作：学习轻柔的按摩手法',
      '为人服务：为家人轻轻按摩肩膀或手臂',
      '互相按摩：让家人也为自己按摩'
    ],
    duration: 4,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '动作要轻柔，不能用力',
      '培养关爱他人的意识',
      '在旅途中缓解疲劳',
      '教授基本的按摩常识'
    ]
  },

  // 27. 旅途中 + 家居物品 + 社交情感
  {
    id: 'remaining-2-2-5-027',
    name: '旅途分享小包包',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'household',
    focus: 'social',
    core_goal: '准备小包包装着要分享的物品，在旅途中与他人分享。',
    materials: '小袋子，一些可分享的小物品（贴纸、小零食等）。',
    steps: [
      '准备分享包：在小袋子里装一些可以分享的物品',
      '主动分享：主动询问"你想要吗？"',
      '礼貌赠送：学会说"给你"、"不客气"',
      '感受快乐：体验分享带来的快乐感受'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '选择适合分享的安全物品',
      '鼓励孩子主动分享',
      '教授分享的礼貌用语',
      '让孩子体验分享的快乐'
    ]
  }

];

// 合并所有剩余游戏
const allRemainingGames = [...remainingGames_2_2_5, ...remainingGames_2_2_5_part2];

console.log('=== 2-2.5岁年龄段剩余游戏补充完成 ===');
console.log(`总共创建 ${allRemainingGames.length} 个剩余游戏\n`);

// 按场景统计
const byScene = allRemainingGames.reduce((acc, game) => {
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

export { allRemainingGames };