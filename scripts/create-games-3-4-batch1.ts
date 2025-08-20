// 3-4岁年龄段缺失游戏补充 - 第一批 (25个游戏)

const missingGames_3_4_batch1 = [

  // ===== 居家场景缺失游戏 =====
  
  // 1. 居家 + 仅用手 + 精细动作
  {
    id: 'missing-3-4-001',
    name: '魔术手指达人',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过复杂的手指游戏和魔术锻炼精细动作和手眼协调能力。',
    materials: '双手，可选小道具（硬币、小球）。',
    steps: [
      '基础训练：练习独立控制每个手指的弯曲伸展',
      '手指魔术：学会简单的手指魔术技巧',
      '精细操作：练习用手指夹取微小物品',
      '创意表演：设计自己的手指魔术表演'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '从简单动作逐步提高难度',
      '鼓励孩子练习手指独立性',
      '可以配合音乐增加趣味性',
      '培养专注力和耐心'
    ]
  },

  // 2. 居家 + 纸笔类 + 大肢体动作
  {
    id: 'missing-3-4-002',
    name: '纸张体能训练营',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'gross',
    core_goal: '利用纸张设计体能训练课程，锻炼大肢体运动和身体协调。',
    materials: '大张纸，彩笔，胶带。',
    steps: [
      '设计课程：在纸上画出不同的运动项目',
      '制作道具：用纸制作训练用的标志和道具',
      '执行训练：按照设计进行跳跃、平衡等训练',
      '记录成果：在纸上记录训练成果和进步'
    ],
    duration: 6,
    difficulty: 3,
    activity_type: 'active',
    tips: [
      '确保训练动作安全适宜',
      '可以设计循序渐进的难度',
      '鼓励孩子参与课程设计',
      '培养自主锻炼的意识'
    ]
  },

  // 3. 居家 + 图书/图片卡 + 精细动作
  {
    id: 'missing-3-4-003',
    name: '立体书制作师',
    age_range: '3-4',
    scene: 'home',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '制作简单的立体书，锻炼精细动作和空间想象能力。',
    materials: '卡纸，安全剪刀，胶棒。',
    steps: [
      '设计构思：设计立体书的主题和内容',
      '精细制作：小心剪切和粘贴立体元素',
      '组装调试：精确组装立体机关',
      '完善装饰：添加精美的装饰细节'
    ],
    duration: 8,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '成人需要协助使用剪刀等工具',
      '从简单的立体结构开始',
      '强调动手操作的精确性',
      '可以分多次完成复杂作品'
    ]
  },

  // 4. 居家 + 图书/图片卡 + 大肢体动作
  {
    id: 'missing-3-4-004',
    name: '故事舞台剧导演',
    age_range: '3-4',
    scene: 'home',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '根据故事内容编排舞台剧，锻炼大肢体表现力和创造力。',
    materials: '故事书，简单道具，表演空间。',
    steps: [
      '研读剧本：深入理解故事情节和角色特点',
      '编排动作：为每个情节设计相应的动作',
      '排练表演：反复练习动作和情节衔接',
      '正式演出：完整表演整个故事剧'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'active',
    tips: [
      '选择情节丰富、适合表演的故事',
      '鼓励孩子创造性地诠释角色',
      '可以邀请家人观看表演',
      '培养表演自信和表达能力'
    ]
  },

  // 5. 居家 + 图书/图片卡 + 社交情感
  {
    id: 'missing-3-4-005',
    name: '情感图书治疗师',
    age_range: '3-4',
    scene: 'home',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过情感主题图书进行角色扮演，培养同理心和情感智商。',
    materials: '情感教育图书，角色道具。',
    steps: [
      '情感识别：识别书中角色的各种情感状态',
      '原因分析：分析角色产生情感的原因',
      '角色体验：扮演不同角色体验其情感',
      '解决方案：讨论如何帮助角色解决情感问题'
    ],
    duration: 6,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '选择情感表达丰富的优质图书',
      '引导孩子深入理解他人情感',
      '鼓励表达自己的真实感受',
      '培养解决情感问题的能力'
    ]
  },

  // ===== 户外场景缺失游戏 =====
  
  // 6. 户外 + 仅用手 + 语言沟通
  {
    id: 'missing-3-4-006',
    name: '自然解说大师',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'hands',
    focus: 'language',
    core_goal: '用手势配合语言详细解说户外自然现象，发展表达能力。',
    materials: '户外自然环境。',
    steps: [
      '观察发现：仔细观察自然环境的各种现象',
      '手势辅助：用手势辅助描述观察到的现象',
      '详细解说：用丰富的词汇详细解说自然知识',
      '互动问答：与听众进行知识问答互动'
    ],
    duration: 6,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '鼓励使用科学词汇和专业术语',
      '培养观察细致和表达准确的能力',
      '可以提前学习相关自然知识',
      '锻炼公众表达的自信心'
    ]
  },

  // 7. 户外 + 纸笔类 + 精细动作
  {
    id: 'missing-3-4-007',
    name: '户外精密制图员',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'paper',
    focus: 'fine',
    core_goal: '在户外环境中进行精密绘图和测量，锻炼精细动作和观察力。',
    materials: '绘图板，精细笔，尺子，放大镜。',
    steps: [
      '精确观察：用放大镜仔细观察自然物体的细节',
      '测量记录：用尺子测量并记录物体的尺寸',
      '精密绘制：尽可能准确地绘制观察对象',
      '标注说明：为绘图添加详细的文字标注'
    ],
    duration: 7,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '提供专业的绘图工具',
      '教授基本的测量和绘图技巧',
      '鼓励追求精确性和细致性',
      '可以制作自然观察手册'
    ]
  },

  // 8. 户外 + 纸笔类 + 语言沟通
  {
    id: 'missing-3-4-008',
    name: '户外新闻记者',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'paper',
    focus: 'language',
    core_goal: '像记者一样记录和报道户外见闻，发展语言组织和表达能力。',
    materials: '采访本，笔，"记者证"。',
    steps: [
      '寻找新闻：在户外寻找有趣的"新闻事件"',
      '采访记录：采访相关"当事人"(家人朋友)并记录',
      '撰写报道：组织语言撰写新闻报道',
      '发布播报：向其他人播报自己的新闻报道'
    ],
    duration: 7,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '教授基本的采访和记录技巧',
      '鼓励使用丰富的描述性语言',
      '培养客观记录和准确表达的能力',
      '可以制作家庭户外新闻报'
    ]
  },

  // 9. 户外 + 纸笔类 + 大肢体动作
  {
    id: 'missing-3-4-009',
    name: '户外运动赛事策划',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'paper',
    focus: 'gross',
    core_goal: '策划和组织户外运动比赛，锻炼组织能力和运动技能。',
    materials: '策划表，彩笔，运动道具标记。',
    steps: [
      '赛事策划：在纸上设计各种运动比赛项目',
      '场地布置：用纸制作标志布置比赛场地',
      '组织比赛：担任裁判组织和主持比赛',
      '颁奖总结：制作奖状并进行比赛总结'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'active',
    tips: [
      '设计适合年龄和能力的运动项目',
      '培养组织和领导能力',
      '强调公平竞争和团队精神',
      '可以邀请其他孩子参与'
    ]
  },

  // 10. 户外 + 纸笔类 + 社交情感
  {
    id: 'missing-3-4-010',
    name: '户外友谊信使',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'paper',
    focus: 'social',
    core_goal: '制作和传递友谊信件，培养社交能力和友谊维护技能。',
    materials: '信纸，彩笔，信封，装饰贴纸。',
    steps: [
      '朋友分析：分析与朋友的友谊状况和需要',
      '写信表达：写信表达友谊、感谢或关心',
      '精心装饰：用心装饰信件使其更美观',
      '亲自传递：亲自将信件送达朋友手中'
    ],
    duration: 6,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '教授写信的基本格式和礼貌用语',
      '鼓励真诚表达内心感受',
      '培养维护友谊的主动意识',
      '可以建立长期的书信友谊'
    ]
  },

  // 11. 户外 + 图书/图片卡 + 精细动作
  {
    id: 'missing-3-4-011',
    name: '野外标本制作专家',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '制作专业级自然标本，锻炼精细操作和科学观察能力。',
    materials: '标本夹，标签纸，放大镜，镊子。',
    steps: [
      '精选标本：根据图鉴精心选择制作标本的材料',
      '精细处理：用镊子等工具精细处理标本',
      '专业制作：按照标准流程制作标本',
      '详细标注：制作详细的标本说明标签'
    ],
    duration: 8,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '教授科学的标本制作方法',
      '强调保护自然环境的重要性',
      '培养科学研究的严谨态度',
      '可以建立个人标本收藏'
    ]
  },

  // 12. 户外 + 图书/图片卡 + 语言沟通
  {
    id: 'missing-3-4-012',
    name: '自然科普讲师',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '结合图书知识为他人讲解自然科学，发展专业表达能力。',
    materials: '自然科普书，教学道具。',
    steps: [
      '深入学习：深入学习图书中的自然科学知识',
      '准备教具：准备相应的教学道具和示例',
      '组织讲解：有条理地向他人讲解科学知识',
      '互动答疑：回答听众的提问并进行讨论'
    ],
    duration: 8,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '选择孩子感兴趣的科普主题',
      '鼓励使用专业科学术语',
      '培养教学和分享知识的能力',
      '可以录制科普小视频'
    ]
  },

  // 13. 户外 + 图书/图片卡 + 逻辑认知
  {
    id: 'missing-3-4-013',
    name: '生态系统分析师',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '分析户外生态系统的相互关系，发展逻辑思维和系统思考能力。',
    materials: '生态图鉴，分析图表，记录本。',
    steps: [
      '系统观察：观察生态环境中各种生物的相互关系',
      '对比分析：对比图书知识与实际观察的差异',
      '关系梳理：梳理生物之间的食物链和依存关系',
      '规律总结：总结生态系统运行的基本规律'
    ],
    duration: 8,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '引导孩子进行系统性思考',
      '培养科学分析和推理能力',
      '可以制作生态关系图表',
      '鼓励提出科学假设和验证'
    ]
  },

  // 14. 户外 + 图书/图片卡 + 大肢体动作
  {
    id: 'missing-3-4-014',
    name: '自然模拟表演团',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '模拟自然现象进行大型表演，锻炼肢体表现力和协调能力。',
    materials: '自然现象图片，表演道具。',
    steps: [
      '现象研究：深入研究各种自然现象的特征',
      '动作设计：设计模拟自然现象的肢体动作',
      '团队排练：与其他人合作排练集体表演',
      '完整演出：进行完整的自然现象模拟表演'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'active',
    tips: [
      '选择适合肢体表现的自然现象',
      '鼓励创造性的动作设计',
      '培养团队合作和协调能力',
      '可以邀请观众欣赏表演'
    ]
  },

  // 15. 户外 + 图书/图片卡 + 社交情感
  {
    id: 'missing-3-4-015',
    name: '环保行动组织者',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '组织环保行动，培养环保意识和社会责任感。',
    materials: '环保主题图书，行动计划表。',
    steps: [
      '问题识别：识别户外环境中的环保问题',
      '方案制定：制定具体的环保行动方案',
      '团队组织：组织他人参与环保行动',
      '行动执行：带领团队执行环保行动计划'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '选择孩子能够参与的环保行动',
      '培养社会责任感和领导能力',
      '强调集体行动的重要性',
      '可以制作环保宣传材料'
    ]
  },

  // 16. 户外 + 家居物品 + 精细动作
  {
    id: 'missing-3-4-016',
    name: '户外精密工程师',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'household',
    focus: 'fine',
    core_goal: '用家居物品进行精密建构工程，锻炼精细操作和工程思维。',
    materials: '各种家居小物件，连接材料，工具。',
    steps: [
      '工程设计：设计要建造的精密工程项目',
      '材料选择：精心选择合适的建构材料',
      '精密组装：进行精确的组装和连接工作',
      '功能测试：测试工程的功能性和稳定性'
    ],
    duration: 8,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '确保所有材料安全可用',
      '鼓励解决建构过程中的技术问题',
      '培养工程思维和问题解决能力',
      '可以展示和解释工程原理'
    ]
  },

  // 17. 户外 + 家居物品 + 语言沟通
  {
    id: 'missing-3-4-017',
    name: '户外生活体验师',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'household',
    focus: 'language',
    core_goal: '用家居物品模拟户外生活，通过体验发展描述和交流能力。',
    materials: '野餐用具，帐篷道具，生活用品。',
    steps: [
      '情境设置：用家居物品布置户外生活情境',
      '体验活动：进行各种户外生活体验活动',
      '详细描述：详细描述体验过程和感受',
      '经验分享：与他人分享户外生活的经验'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '营造真实的户外生活氛围',
      '鼓励详细描述体验过程',
      '培养生活自理和适应能力',
      '可以制作户外生活指南'
    ]
  },

  // ===== 等待时场景缺失游戏 =====
  
  // 18. 等待时 + 仅用手 + 精细动作
  {
    id: 'missing-3-4-018',
    name: '手指协奏曲大师',
    age_range: '3-4',
    scene: 'waiting',
    props: 'hands',
    focus: 'fine',
    core_goal: '进行复杂的手指协调训练，锻炼高级精细动作控制能力。',
    materials: '双手。',
    steps: [
      '基础训练：练习各种复杂的手指独立运动',
      '协调练习：练习双手不同节奏的协调动作',
      '速度训练：在保持准确性的基础上提高速度',
      '创意表演：创造独特的手指协奏表演'
    ],
    duration: 5,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '在等待时保持安静不影响他人',
      '从简单动作逐步提高复杂度',
      '培养精细动作的持续性和稳定性',
      '可以配合无声的音乐节拍'
    ]
  },

  // 19. 等待时 + 仅用手 + 大肢体动作
  {
    id: 'missing-3-4-019',
    name: '等待时健身达人',
    age_range: '3-4',
    scene: 'waiting',
    props: 'hands',
    focus: 'gross',
    core_goal: '在等待时进行适度的身体锻炼，保持身体活力和健康。',
    materials: '座椅或站立空间。',
    steps: [
      '热身准备：进行轻柔的热身准备活动',
      '上肢训练：进行手臂和肩部的力量训练',
      '核心训练：在座位上进行腹部和背部训练',
      '放松恢复：进行拉伸和放松恢复活动'
    ],
    duration: 6,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '所有动作都要适合等待场合',
      '不要影响周围其他人',
      '强度适中，避免过度疲劳',
      '培养主动锻炼的健康意识'
    ]
  },

  // 20. 等待时 + 纸笔类 + 语言沟通
  {
    id: 'missing-3-4-020',
    name: '等待时小作家',
    age_range: '3-4',
    scene: 'waiting',
    props: 'paper',
    focus: 'language',
    core_goal: '在等待时创作文字作品，发展写作和语言组织能力。',
    materials: '笔记本，笔。',
    steps: [
      '主题构思：根据当前情境构思写作主题',
      '文字创作：进行诗歌、故事或日记的创作',
      '语言润色：修改和完善文字表达',
      '作品分享：与他人分享自己的文字作品'
    ],
    duration: 6,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '鼓励自由创作不拘泥于形式',
      '培养观察生活和表达感受的能力',
      '可以创作等待时的心情和感受',
      '保持安静适合等待环境'
    ]
  },

  // 21. 等待时 + 纸笔类 + 社交情感
  {
    id: 'missing-3-4-021',
    name: '情感日志记录员',
    age_range: '3-4',
    scene: 'waiting',
    props: 'paper',
    focus: 'social',
    core_goal: '记录和分析自己的情感变化，培养情感自我认知能力。',
    materials: '情感日志本，彩笔。',
    steps: [
      '情感识别：识别当前的情感状态和强度',
      '原因分析：分析产生这种情感的原因',
      '记录表达：用文字和图画记录情感体验',
      '反思总结：反思情感管理和调节的方法'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '鼓励诚实面对和表达真实情感',
      '培养情感自我认知和管理能力',
      '可以用颜色和符号辅助记录',
      '适合在安静等待时进行'
    ]
  },

  // 22. 等待时 + 图书/图片卡 + 精细动作
  {
    id: 'missing-3-4-022',
    name: '图片精修艺术家',
    age_range: '3-4',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '对图片进行精细的艺术加工，锻炼精细动作和艺术创造力。',
    materials: '图片，精细笔，装饰材料。',
    steps: [
      '图片分析：仔细分析图片的构图和色彩',
      '创意设计：设计对图片的艺术改造方案',
      '精细加工：进行细致的绘画和装饰工作',
      '作品完善：完善细节，形成艺术作品'
    ],
    duration: 6,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '选择适合改造的图片素材',
      '提供精细的绘画工具',
      '培养艺术审美和创造能力',
      '在等待时保持安静创作'
    ]
  },

  // 23. 等待时 + 图书/图片卡 + 逻辑认知
  {
    id: 'missing-3-4-023',
    name: '图片逻辑分析师',
    age_range: '3-4',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '分析图片中的逻辑关系和规律，发展逻辑思维和推理能力。',
    materials: '逻辑思维图片卡，记录本。',
    steps: [
      '深入观察：仔细观察图片中的各种元素',
      '关系发现：发现图片元素之间的逻辑关系',
      '规律总结：总结图片中反映的规律和模式',
      '推理验证：进行逻辑推理并验证结论'
    ],
    duration: 6,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '选择具有逻辑性的图片内容',
      '引导孩子进行深度思考',
      '培养科学的推理方法',
      '可以制作逻辑分析报告'
    ]
  },

  // 24. 等待时 + 图书/图片卡 + 大肢体动作
  {
    id: 'missing-3-4-024',
    name: '静态瑜伽大师',
    age_range: '3-4',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '参照图片进行适合等待时的静态瑜伽练习，增强身体柔韧性。',
    materials: '瑜伽动作图片卡。',
    steps: [
      '动作学习：学习图片中展示的瑜伽动作',
      '姿势练习：练习各种静态瑜伽姿势',
      '呼吸配合：学习配合瑜伽的呼吸方法',
      '冥想放松：进行简单的冥想和放松练习'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '选择适合小空间的瑜伽动作',
      '强调动作的轻柔和安静',
      '培养身心协调和自我调节能力',
      '不要影响周围其他人'
    ]
  },

  // 25. 等待时 + 图书/图片卡 + 社交情感
  {
    id: 'missing-3-4-025',
    name: '同理心培养师',
    age_range: '3-4',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过分析图片中的人物情感培养同理心和社交理解能力。',
    materials: '情感表达图片，分析记录本。',
    steps: [
      '情感识别：识别图片中人物的情感状态',
      '情境分析：分析导致情感产生的情境因素',
      '感受体验：想象自己处于相同情境的感受',
      '关爱思考：思考如何关爱和帮助他人'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '选择情感表达明显的图片',
      '引导孩子深入理解他人感受',
      '培养关爱他人的情感品质',
      '适合在安静等待时进行'
    ]
  }

];

console.log('=== 3-4岁年龄段缺失游戏补充 - 第一批 ===');
console.log(`已创建 ${missingGames_3_4_batch1.length} 个补充游戏\n`);

// 按场景统计
const byScene = missingGames_3_4_batch1.reduce((acc, game) => {
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

export { missingGames_3_4_batch1 };