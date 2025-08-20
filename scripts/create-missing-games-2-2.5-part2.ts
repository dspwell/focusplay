// 2-2.5岁年龄段缺失游戏补充 - 第二部分

const missingGames_2_2_5_part2 = [

  // ===== 等待时场景缺失游戏 =====
  
  // 1. 等待时 + 仅用手 + 精细动作
  {
    id: 'missing-2-2-5-013',
    name: '小手变魔术',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过手指精细动作游戏消磨等待时间，锻炼手指灵活性。',
    materials: '双手即可。',
    steps: [
      '手指操练：做简单的手指弯曲伸展动作',
      '模仿小动物：用手指做小鸟飞、小兔跳等动作',
      '手指计数：用手指头一个一个地点数',
      '变化手形：尝试做不同的手部造型'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '动作要简单易学，适合小年龄',
      '可以编成小儿歌配合动作',
      '在等待时保持安静不影响他人',
      '鼓励孩子创造自己的手指动作'
    ]
  },

  // 2. 等待时 + 纸笔类 + 语言沟通
  {
    id: 'missing-2-2-5-014',
    name: '涂鸦小故事',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'paper',
    focus: 'language',
    core_goal: '通过简单涂鸦配合语言表达，发展想象力和语言能力。',
    materials: '小本子，蜡笔。',
    steps: [
      '自由涂鸦：让孩子在纸上随意画线条',
      '编故事：问孩子"你画的是什么呀？"',
      '添加情节：引导孩子说"然后呢？"，继续编故事',
      '分享快乐：将涂鸦故事分享给家人'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '不要求画得像，重点是语言表达',
      '耐心倾听孩子的想象描述',
      '适当提问帮助孩子扩展故事',
      '保持安静，适合等待场合'
    ]
  },

  // 3. 等待时 + 纸笔类 + 逻辑认知
  {
    id: 'missing-2-2-5-015',
    name: '找不同小侦探',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'paper',
    focus: 'cognition',
    core_goal: '通过观察纸上简单图案培养观察力和认知能力。',
    materials: '预先准备的简单找不同图片。',
    steps: [
      '观察图片：给孩子看两幅几乎相同的简单图片',
      '寻找差异：引导孩子找出不同之处',
      '指出位置：让孩子用手指指出发现的不同',
      '验证答案：确认孩子找到的答案是否正确'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '差异要明显，适合2岁孩子的认知水平',
      '从1-2个差异开始，逐渐增加',
      '给孩子充分时间观察和思考',
      '及时表扬孩子的发现'
    ]
  },

  // 4. 等待时 + 纸笔类 + 大肢体动作
  {
    id: 'missing-2-2-5-016',
    name: '纸片小体操',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'paper',
    focus: 'gross',
    core_goal: '用纸张辅助做简单肢体运动，在有限空间内活动身体。',
    materials: '几张白纸或彩纸。',
    steps: [
      '纸张准备：给孩子几张纸',
      '挥舞动作：像挥舞小旗帜一样舞动纸张',
      '身体摇摆：拿着纸张跟随节拍摇摆身体',
      '纸片游戏：将纸轻抛接住，训练手眼协调'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '动作幅度要适中，不影响周围人',
      '选择不易撕破的纸张',
      '注意安全，避免纸张划伤',
      '可以配合轻柔的音乐节拍'
    ]
  },

  // 5. 等待时 + 纸笔类 + 社交情感
  {
    id: 'missing-2-2-5-017',
    name: '画心情娃娃',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'paper',
    focus: 'social',
    core_goal: '通过画简单表情培养情感认知和表达能力。',
    materials: '纸张，蜡笔。',
    steps: [
      '画圆脸：先画一个大圆作为脸',
      '添加表情：画上眼睛、嘴巴表示开心或难过',
      '情感交流：问孩子"娃娃现在心情怎么样？"',
      '共情体验：引导孩子说"我也很开心"等感受'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '从最简单的笑脸和哭脸开始',
      '帮助孩子理解不同情绪',
      '鼓励孩子表达自己的感受',
      '可以画家人的不同表情'
    ]
  },

  // ===== 睡前场景缺失游戏 =====
  
  // 6. 睡前 + 仅用手 + 逻辑认知
  {
    id: 'missing-2-2-5-018',
    name: '手指数星星',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'hands',
    focus: 'cognition',
    core_goal: '通过手指数数游戏发展数概念和逻辑思维。',
    materials: '双手，可选配星星贴纸。',
    steps: [
      '伸出手指：一个手指一个手指地伸出来',
      '数数练习：从1数到5，每伸一个手指数一个数',
      '星星想象：每个手指想象成一颗小星星',
      '睡前祝愿：收起手指时说"星星要睡觉了"'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '数数速度要慢，让孩子跟上',
      '可以在手指上贴星星贴纸增加趣味',
      '营造安静温馨的睡前氛围',
      '适合作为睡前安抚活动'
    ]
  },

  // 7. 睡前 + 仅用手 + 大肢体动作
  {
    id: 'missing-2-2-5-019',
    name: '晚安伸展操',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'hands',
    focus: 'gross',
    core_goal: '通过轻柔的伸展动作放松身体，为入睡做准备。',
    materials: '舒适的床铺或地毯。',
    steps: [
      '举手伸展：慢慢举起双手向上伸展',
      '左右摇摆：轻柔地左右摇摆身体',
      '深呼吸：配合手臂动作做深呼吸',
      '放松躺下：最后轻轻躺下准备睡觉'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '所有动作都要轻柔缓慢',
      '营造安静舒缓的环境',
      '可以配合轻柔的音乐',
      '帮助孩子放松身心准备入睡'
    ]
  },

  // 8. 睡前 + 纸笔类 + 语言沟通
  {
    id: 'missing-2-2-5-020',
    name: '睡前涂鸦日记',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'paper',
    focus: 'language',
    core_goal: '通过简单涂鸦回顾一天，培养表达和记忆能力。',
    materials: '小本子，蜡笔。',
    steps: [
      '回忆一天：问孩子"今天做了什么开心的事？"',
      '简单涂画：让孩子画出印象最深的事情',
      '语言描述：引导孩子用简单词汇描述画的内容',
      '温馨结束：说"明天又是新的一天"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '不要求画得准确，重点是回忆和表达',
      '耐心倾听孩子的描述',
      '营造温馨的睡前交流氛围',
      '可以成为每晚的固定仪式'
    ]
  },

  // ===== 旅途中场景缺失游戏 =====
  
  // 9. 旅途中 + 仅用手 + 精细动作
  {
    id: 'missing-2-2-5-021',
    name: '旅途小手工',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'hands',
    focus: 'fine',
    core_goal: '在旅途中用手指做简单操作，锻炼精细动作能力。',
    materials: '几个安全的小物件（如大纽扣、大珠子）。',
    steps: [
      '物品准备：准备几个大小适中的安全物件',
      '抓握练习：让孩子练习抓握不同形状的物品',
      '排列游戏：将物品排成一排',
      '收纳整理：游戏结束后收回小袋子中'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '确保所有物件安全，避免误食',
      '大小要适合小手抓握',
      '在旅途中保持安静',
      '准备一个小袋子方便收纳'
    ]
  },

  // 10. 旅途中 + 仅用手 + 语言沟通
  {
    id: 'missing-2-2-5-022',
    name: '旅途见闻说',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'hands',
    focus: 'language',
    core_goal: '通过用手指着窗外景物并描述，发展观察和语言能力。',
    materials: '车窗外的景物。',
    steps: [
      '观察窗外：引导孩子看向窗外',
      '手指指认：用手指指向看到的事物',
      '简单命名：说出看到的"汽车"、"树"等',
      '描述特征：尝试说"红色的车"、"高高的树"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择孩子熟悉的物品开始',
      '语言要简单清晰',
      '及时回应和鼓励孩子的表达',
      '可以重复加深孩子的印象'
    ]
  },

  // 11. 旅途中 + 仅用手 + 社交情感
  {
    id: 'missing-2-2-5-023',
    name: '旅途关爱时光',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'hands',
    focus: 'social',
    core_goal: '在旅途中通过肢体接触表达关爱，增进亲子情感。',
    materials: '家人的陪伴。',
    steps: [
      '温柔抚摸：轻轻抚摸孩子的小手',
      '互相拥抱：在座位上轻柔地拥抱',
      '爱的表达：说"爸爸妈妈爱你"',
      '回应引导：引导孩子也表达爱意'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '动作要轻柔温和',
      '注意不影响其他乘客',
      '营造温馨的亲子时光',
      '让孩子感受到被爱和安全感'
    ]
  },

  // 12. 旅途中 + 纸笔类 + 语言沟通
  {
    id: 'missing-2-2-5-024',
    name: '旅途涂鸦记',
    age_range: '2-2.5',
    scene: 'travel',
    props: 'paper',
    focus: 'language',
    core_goal: '通过在旅途中涂鸦并描述，记录旅行见闻和感受。',
    materials: '小画板或纸本，蜡笔。',
    steps: [
      '观察记录：看到有趣的事物时简单画下来',
      '涂鸦表达：用涂鸦表示自己的感受',
      '语言描述：说出画的是什么',
      '分享快乐：和家人分享自己的"作品"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '提供稳定的绘画支撑',
      '选择不易滚动的绘画工具',
      '鼓励孩子自由表达',
      '重点在语言交流而非绘画技巧'
    ]
  }

];

console.log('=== 2-2.5岁年龄段缺失游戏补充 - 第二部分 ===');
console.log(`已创建 ${missingGames_2_2_5_part2.length} 个补充游戏\n`);

// 按场景统计
const byScene = missingGames_2_2_5_part2.reduce((acc, game) => {
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

console.log('\n游戏列表:');
missingGames_2_2_5_part2.forEach((game, index) => {
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

export { missingGames_2_2_5_part2 };