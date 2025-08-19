// 最终批次补充游戏：完成剩余的22个blocks_puzzle缺失组合

const finalBatchGames = [
  
  // ===== 剩余22个 blocks_puzzle 缺失组合 =====
  
  // 1. 2-2.5岁 + travel + gross
  {
    id: 'missing-073',
    name: '旅途积木体操',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '在旅途有限空间中通过积木进行安全的大肢体运动，释放身体能量，保持身体活力。',
    materials: '轻便积木4-6块，小毯子。',
    steps: [
      '座位运动（大肢体发展）：在座位上进行安全的手臂和腿部运动',
      '积木举重：用双手举起积木进行简单的"举重"练习',
      '身体摇摆（协调训练）：抱着积木轻轻摇摆身体',
      '伸展放松：用积木辅助进行简单的身体伸展'
    ],
    duration: 6,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '安全第一：确保所有动作都在安全范围内',
      '空间有限：适应旅途有限的活动空间',
      '音量控制：避免影响其他乘客',
      '适度运动：根据旅途时间调整运动量'
    ]
  },

  // 2. 2-2.5岁 + travel + social
  {
    id: 'missing-074',
    name: '旅途积木小使者',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '在旅途中通过积木成为友善的小使者，学习基本的社交礼仪和友好交往。',
    materials: '友善积木3-4块，礼貌卡片。',
    steps: [
      '友好展示（社交启蒙）：向邻座友好地展示积木',
      '礼貌用语：练习说"你好"、"谢谢"等礼貌用语',
      '分享体验（社交练习）：主动邀请别人一起观看积木',
      '告别礼仪：旅途结束时礼貌地告别'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '礼仪指导：重点教授基本社交礼仪',
      '安全交往：教育与陌生人交往的安全原则',
      '音量适宜：保持合适的交谈音量',
      '家长陪伴：全程在家长陪伴下进行'
    ]
  },

  // 3. 2.5-3岁 + bedtime + cognition
  {
    id: 'missing-075',
    name: '睡前积木思维家',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '通过睡前积木思维训练发展逻辑思维和问题解决能力，在安静环境中锻炼认知技能。',
    materials: '思维积木4-5块，简单谜题卡。',
    steps: [
      '模式识别（认知发展）：识别积木的颜色和形状模式',
      '逻辑推理：根据规律推测下一个积木应该是什么',
      '问题解决（思维训练）：解决简单的积木排列问题',
      '总结思考：回顾今天学到的新知识'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '难度适宜：选择适合2.5-3岁的思维挑战',
      '耐心引导：给孩子充分时间思考',
      '鼓励尝试：鼓励孩子尝试不同方法',
      '温馨氛围：保持轻松温馨的学习氛围'
    ]
  },

  // 4. 2.5-3岁 + bedtime + gross
  {
    id: 'missing-076',
    name: '睡前积木柔体操',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '通过积木辅助的柔体操运动，在睡前进行轻柔的大肢体放松活动，为入睡做准备。',
    materials: '柔软积木2-3块，瑜伽垫。',
    steps: [
      '柔和拉伸（大肢体发展）：抱着积木进行轻柔的身体拉伸',
      '平衡练习：单脚站立时手持积木保持平衡',
      '呼吸配合（协调训练）：配合深呼吸进行柔缓动作',
      '全身放松：最后抱着积木进行全身放松'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'active',
    tips: [
      '动作轻柔：所有动作都要轻柔缓慢',
      '放松为主：重点在于放松而非锻炼',
      '呼吸配合：教孩子配合正确的呼吸',
      '安全环境：确保活动环境安全舒适'
    ]
  },

  // 5. 2.5-3岁 + bedtime + social
  {
    id: 'missing-077',
    name: '睡前积木感恩时光',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '通过积木感恩活动培养感恩意识和情感表达能力，增进家庭情感连接。',
    materials: '感恩积木3-4块，心愿卡。',
    steps: [
      '感恩表达（社交情感）：用积木代表今天感恩的人和事',
      '情感分享：向家人表达感谢和关爱',
      '祝福传递（社交练习）：为家人送上美好祝福',
      '爱的抱抱：最后与家人进行温馨拥抱'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '情感引导：引导孩子表达真实情感',
      '感恩教育：培养感恩的心态和习惯',
      '家庭和谐：促进家庭成员间的情感交流',
      '温馨氛围：营造温馨的家庭氛围'
    ]
  },

  // 6. 2.5-3岁 + travel + fine
  {
    id: 'missing-078',
    name: '旅途积木匠人',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '在旅途中进行精细的积木工艺制作，锻炼手指精细动作和专注力。',
    materials: '精细积木6-8块，旅行工具包。',
    steps: [
      '工艺设计（精细动作）：在旅途中设计要制作的工艺品',
      '精细制作：进行需要精细操作的积木拼装',
      '细节完善（手眼协调）：对工艺品进行精细调整',
      '作品保存：小心保存旅途中的精美作品'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '工具齐全：准备适合旅途的精细工具',
      '稳定操作：在移动环境中保持操作稳定',
      '作品保护：防止旅途颠簸损坏作品',
      '耐心指导：旅途精细操作需要更多耐心'
    ]
  },

  // 7. 2.5-3岁 + travel + language
  {
    id: 'missing-079',
    name: '旅途积木导览员',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '在旅途中担任积木导览员，发展语言描述能力和地理认知。',
    materials: '地图积木5-6块，旅行指南。',
    steps: [
      '路线介绍（语言发展）：用积木和语言介绍旅行路线',
      '景点描述：描述沿途看到的景物和建筑',
      '文化介绍（表达练习）：介绍不同地方的文化特色',
      '旅行总结：总结旅行中的见闻和感受'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '词汇丰富：学习与旅行相关的词汇',
      '观察引导：引导孩子观察旅途景物',
      '表达鼓励：鼓励孩子大胆描述所见',
      '知识拓展：适当拓展地理和文化知识'
    ]
  },

  // 8. 2.5-3岁 + travel + cognition
  {
    id: 'missing-080',
    name: '旅途积木地理家',
    age_range: '2.5-3',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '通过旅途积木地理学习发展空间认知和地理思维能力。',
    materials: '地理积木6-8块，简易地图。',
    steps: [
      '方向认知（认知发展）：用积木学习东南西北方向',
      '距离概念：理解远近、高低等空间概念',
      '地图阅读（空间思维）：尝试阅读简单的旅行地图',
      '位置记忆：记住重要地点的相对位置'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '概念简化：使用适合2.5-3岁的简单概念',
      '实物结合：结合实际旅途景观学习',
      '记忆技巧：使用有趣的方法帮助记忆',
      '循序渐进：从简单概念逐步深入'
    ]
  },

  // 9. 3-4岁 + waiting + cognition
  {
    id: 'missing-081',
    name: '等待积木逻辑师',
    age_range: '3-4',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '在等待时间进行积木逻辑训练，发展逻辑思维和推理能力。',
    materials: '逻辑积木6-8块，思维卡片。',
    steps: [
      '逻辑推理（认知发展）：根据规律推理积木排列顺序',
      '因果关系：理解积木搭建中的因果关系',
      '问题分析（逻辑思维）：分析和解决复杂的积木难题',
      '策略制定：制定解决问题的策略和步骤'
    ],
    duration: 18,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '挑战适度：提供适合3-4岁的逻辑挑战',
      '思维引导：引导孩子进行逻辑思考',
      '耐心解答：耐心回答孩子的疑问',
      '成就鼓励：对逻辑思维的进步给予鼓励'
    ]
  },

  // 10. 3-4岁 + waiting + gross
  {
    id: 'missing-082',
    name: '等待积木健身教练',
    age_range: '3-4',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '在等待环境中担任积木健身教练，设计和指导大肢体运动。',
    materials: '健身积木8-10块，运动计划表。',
    steps: [
      '运动设计（大肢体发展）：设计适合等待场所的运动方案',
      '动作示范：示范各种积木辅助的运动动作',
      '指导练习（协调训练）：指导他人进行运动练习',
      '效果评估：评估运动效果，调整运动计划'
    ],
    duration: 12,
    difficulty: 4,
    activity_type: 'active',
    tips: [
      '空间适应：设计适合有限空间的运动',
      '安全指导：确保所有运动动作安全',
      '音量控制：保持适当的指导音量',
      '示范清晰：提供清晰的动作示范'
    ]
  },

  // 继续其他组合...

  // 11. 3-4岁 + waiting + social
  {
    id: 'missing-083',
    name: '等待积木社交大使',
    age_range: '3-4',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '在等待环境中担任积木社交大使，促进不同人群间的友好交流。',
    materials: '社交积木6-8块，交流卡片。',
    steps: [
      '主动交流（社交技能）：主动与其他等待者进行友好交流',
      '文化交流：通过积木分享不同的文化背景',
      '友谊桥梁（社交促进）：帮助不同的人建立友谊',
      '和谐维护：维护等待环境的和谐氛围'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '主动性：鼓励孩子主动进行社交',
      '文化敏感：培养对不同文化的敏感性',
      '冲突调解：学习简单的冲突调解技巧',
      '公共礼仪：强化公共场所的行为礼仪'
    ]
  },

  // 12. 3-4岁 + bedtime + cognition
  {
    id: 'missing-084',
    name: '睡前积木哲学家',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '通过睡前哲学思考发展深层思维能力，在安静环境中探索生活的意义。',
    materials: '哲思积木3-4块，思考卡片。',
    steps: [
      '生活思考（认知发展）：思考关于生活的简单哲学问题',
      '价值探索：探索什么是重要的、有意义的',
      '智慧分享（深度思维）：分享自己的小智慧和感悟',
      '未来憧憬：憧憬美好的未来和梦想'
    ],
    duration: 12,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '问题适龄：选择适合3-4岁理解的哲学问题',
      '思维启发：启发孩子进行深入思考',
      '智慧鼓励：鼓励孩子表达自己的智慧',
      '梦想支持：支持孩子的美好梦想'
    ]
  },

  // 13. 3-4岁 + bedtime + gross
  {
    id: 'missing-085',
    name: '睡前积木瑜伽师',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '通过积木瑜伽练习进行睡前大肢体放松，为优质睡眠做身心准备。',
    materials: '瑜伽积木2-3块，瑜伽垫，轻音乐。',
    steps: [
      '瑜伽准备（大肢体发展）：用积木辅助进行瑜伽姿势',
      '平衡体式：进行需要平衡的瑜伽动作',
      '拉伸放松（协调训练）：全身拉伸和肌肉放松',
      '冥想结束：最后进行简单的冥想放松'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'active',
    tips: [
      '动作轻柔：所有瑜伽动作都要轻柔',
      '呼吸配合：教孩子配合正确呼吸',
      '安全姿势：确保所有姿势适合儿童',
      '放松效果：重点在于放松身心'
    ]
  },

  // 14. 3-4岁 + bedtime + social
  {
    id: 'missing-086',
    name: '睡前积木祈愿会',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '通过积木祈愿活动培养感恩心和关爱意识，增进家庭情感纽带。',
    materials: '祈愿积木4-5块，心愿灯，感恩日记。',
    steps: [
      '感恩祈愿（社交情感）：为家人朋友送上美好祝愿',
      '爱心表达：表达对重要的人的关爱',
      '善意传递（社交品德）：传递善意和正能量',
      '温馨结束：在温馨氛围中结束一天'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '情感真诚：引导孩子表达真诚情感',
      '感恩教育：培养感恩的心态',
      '家庭温馨：营造温馨的家庭氛围',
      '正能量：传播积极正面的能量'
    ]
  },

  // 15. 3-4岁 + bedtime + fine
  {
    id: 'missing-087',
    name: '睡前积木微雕家',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '通过精细的积木微雕工艺锻炼手指精细动作，在安静环境中培养专注力。',
    materials: '微雕积木6-8块，精细工具，放大镜。',
    steps: [
      '设计构思（精细动作）：设计精美的微雕作品',
      '精细雕刻：进行需要极高精细度的雕刻',
      '细节完善（手眼协调）：完善作品的每个细节',
      '作品鉴赏：欣赏完成的精美微雕作品'
    ],
    duration: 20,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '工具安全：确保精细工具使用安全',
      '照明充足：提供充足但柔和的照明',
      '耐心指导：给予充分的技术指导',
      '成就感：让孩子为精美作品感到自豪'
    ]
  },

  // 16. 3-4岁 + bedtime + language
  {
    id: 'missing-088',
    name: '睡前积木诗社',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '通过积木诗歌创作发展语言艺术能力，在睡前营造文学的美妙氛围。',
    materials: '诗韵积木4-5块，诗歌本，小铃铛。',
    steps: [
      '诗歌灵感（语言发展）：从积木中获取诗歌创作灵感',
      '韵律练习：练习诗歌的韵律和节奏',
      '创作表达（语言艺术）：创作属于自己的小诗',
      '诗歌朗诵：优美地朗诵创作的诗歌'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '韵律简单：选择适合儿童的简单韵律',
      '想象启发：启发孩子的诗歌想象力',
      '语言美感：培养对语言美感的感知',
      '艺术氛围：营造浓厚的艺术氛围'
    ]
  },

  // 17. 3-4岁 + travel + fine
  {
    id: 'missing-089',
    name: '旅途积木珠宝师',
    age_range: '3-4',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '在旅途中制作积木珠宝工艺品，锻炼极精细的手指操作技能。',
    materials: '珠宝积木8-10块，精细工具包，珠宝盒。',
    steps: [
      '珠宝设计（精细动作）：设计精美的积木珠宝作品',
      '精密制作：进行需要极高精度的制作过程',
      '装饰完善（手眼协调）：为珠宝添加精美装饰',
      '成品展示：展示完成的精美珠宝作品'
    ],
    duration: 25,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '工艺精湛：追求高质量的工艺标准',
      '工具齐备：准备完整的精细工具',
      '稳定环境：在旅途中创造稳定操作环境',
      '艺术价值：强调作品的艺术价值'
    ]
  },

  // 18. 3-4岁 + travel + language
  {
    id: 'missing-090',
    name: '旅途积木文学家',
    age_range: '3-4',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '在旅途中进行积木文学创作，发展高级语言表达和文学创造能力。',
    materials: '文学积木6-8块，创作本，录音设备。',
    steps: [
      '文学构思（语言发展）：构思以积木为主题的文学作品',
      '创作实践：进行诗歌、故事等文学创作',
      '语言润色（表达技巧）：对作品进行语言润色',
      '作品发表：向他人展示和朗读文学作品'
    ],
    duration: 20,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '文学启蒙：启发孩子的文学兴趣',
      '创作自由：给予充分的创作自由',
      '语言指导：提供适当的语言技巧指导',
      '作品珍藏：珍藏孩子的文学处女作'
    ]
  },

  // 19. 3-4岁 + travel + cognition
  {
    id: 'missing-091',
    name: '旅途积木哲学家',
    age_range: '3-4',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '在旅途中进行积木哲学思辨，发展抽象思维和哲学认知能力。',
    materials: '哲学积木5-6块，思辨卡片，记录本。',
    steps: [
      '哲学思考（认知发展）：思考关于存在和意义的问题',
      '逻辑推理：进行复杂的逻辑推理和分析',
      '抽象思维（高级认知）：发展抽象和概括思维',
      '智慧总结：总结旅途中获得的人生智慧'
    ],
    duration: 18,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '问题适度：选择适合儿童的哲学问题',
      '思维启发：启发孩子的深度思考',
      '耐心引导：耐心引导抽象思维发展',
      '智慧记录：记录孩子的珍贵智慧'
    ]
  },

  // 20. 3-4岁 + travel + gross
  {
    id: 'missing-092',
    name: '旅途积木运动家',
    age_range: '3-4',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '在旅途中设计和执行积木运动方案，发展运动规划和执行能力。',
    materials: '运动积木10-12块，运动计划表，计时器。',
    steps: [
      '运动策划（大肢体发展）：制定完整的旅途运动计划',
      '动作创新：创新设计新的运动动作',
      '训练执行（协调训练）：严格按计划执行训练',
      '效果评估：评估运动效果和身体变化'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'active',
    tips: [
      '计划详细：制定详细的运动计划',
      '创新鼓励：鼓励运动动作的创新',
      '安全第一：确保所有运动安全可行',
      '效果跟踪：跟踪运动效果和进步'
    ]
  },

  // 21. 3-4岁 + travel + social
  {
    id: 'missing-093',
    name: '旅途积木外交家',
    age_range: '3-4',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '在旅途中担任积木外交家，发展高级社交技能和跨文化交流能力。',
    materials: '外交积木8-10块，文化交流卡，友谊护照。',
    steps: [
      '文化交流（社交技能）：与不同文化背景的人交流',
      '外交礼仪：学习和实践高级社交礼仪',
      '友谊建立（跨文化社交）：建立跨文化的友谊',
      '和平使命：传播和平友好的理念'
    ],
    duration: 20,
    difficulty: 5,
    activity_type: 'quiet',
    tips: [
      '文化敏感：培养对不同文化的敏感性',
      '礼仪教育：教授高级社交礼仪',
      '友谊珍惜：珍惜建立的珍贵友谊',
      '和平理念：传播和平友好的价值观'
    ]
  },

  // 22. 2.5-3岁 + waiting + cognition
  {
    id: 'missing-094',
    name: '等待积木数学家',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '在等待时间进行积木数学学习，发展数学思维和逻辑能力。',
    materials: '数学积木6-8块，数字卡片，计算板。',
    steps: [
      '数字认知（认知发展）：用积木学习数字和数量概念',
      '简单运算：进行基础的加减运算练习',
      '几何认知（空间思维）：学习基本的几何形状概念',
      '规律发现：发现数学中的有趣规律'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '概念具体：使用具体的积木帮助理解抽象概念',
      '循序渐进：从简单概念逐步深入',
      '趣味性：保持数学学习的趣味性',
      '应用性：结合生活实际应用数学知识'
    ]
  }

];

console.log('=== 最终批次补充游戏总览 ===');
console.log(`总计 ${finalBatchGames.length} 个补充游戏\n`);

// 按年龄段统计
const byAge = finalBatchGames.reduce((acc, game) => {
  acc[game.age_range] = (acc[game.age_range] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('按年龄段统计:');
Object.entries(byAge).forEach(([age, count]) => {
  console.log(`  ${age}岁: ${count}个游戏`);
});

// 按场景统计
const byScene = finalBatchGames.reduce((acc, game) => {
  acc[game.scene] = (acc[game.scene] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按场景统计:');
Object.entries(byScene).forEach(([scene, count]) => {
  console.log(`  ${scene}: ${count}个游戏`);
});

// 按发展重点统计
const byFocus = finalBatchGames.reduce((acc, game) => {
  acc[game.focus] = (acc[game.focus] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按发展重点统计:');
Object.entries(byFocus).forEach(([focus, count]) => {
  console.log(`  ${focus}: ${count}个游戏`);
});

console.log('\n游戏列表:');
finalBatchGames.forEach((game, index) => {
  console.log(`${index + 1}. ${game.name} (${game.age_range}岁, ${game.scene}, ${game.props}, ${game.focus})`);
});

export { finalBatchGames };