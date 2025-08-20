// 2.5-3岁年龄段缺失游戏补充 - 第二批 (21个游戏)

const missingGames_2_5_3_batch2 = [

  // ===== 户外场景剩余缺失游戏 =====
  
  // 22. 户外 + 家居物品 + 社交情感
  {
    id: 'missing-2-5-3-022',
    name: '户外分享集市',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'household',
    focus: 'social',
    core_goal: '通过分享家居物品培养慷慨精神和社交合作能力。',
    materials: '小玩具，零食，小用品等可分享物品。',
    steps: [
      '准备物品：整理想要分享的小物品',
      '设置分享区：在户外铺设分享区域',
      '主动分享：向其他小朋友介绍和分享物品',
      '感谢回应：学会说\"不客气\"和接受他人感谢'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '鼓励孩子主动与他人分享',
      '教授分享的基本礼仪',
      '让孩子体验给予的快乐',
      '培养团队合作的意识'
    ]
  },

  // ===== 等待时场景缺失游戏 =====
  
  // 23. 等待时 + 仅用手 + 精细动作
  {
    id: 'missing-2-5-3-023',
    name: '手影创意秀',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过手影游戏锻炼手指精细动作和创意表达能力。',
    materials: '光源（手机闪光灯），墙面或纸张。',
    steps: [
      '基础手影：学会做兔子、鸟儿等简单手影',
      '手指变化：练习不同手指的弯曲和伸展',
      '创意发挥：尝试创造自己的手影形状',
      '故事表演：用手影讲简单的小故事'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '在等待时保持安静不影响他人',
      '手指动作要精确才能形成清晰影像',
      '可以教授几个经典手影动作',
      '鼓励孩子发挥想象力创新'
    ]
  },

  // 24. 等待时 + 仅用手 + 逻辑认知
  {
    id: 'missing-2-5-3-024',
    name: '手指逻辑推理',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'hands',
    focus: 'cognition',
    core_goal: '通过手指游戏进行简单的逻辑推理和规律发现。',
    materials: '双手。',
    steps: [
      '规律展示：用手指做出简单规律(1根-2根-1根-2根)',
      '观察理解：让孩子观察并理解规律',
      '模仿练习：让孩子模仿展示的规律',
      '创新规律：鼓励孩子创造新的手指规律'
    ],
    duration: 4,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '从最简单的二元规律开始',
      '用明显的数量差异帮助理解',
      '耐心等待孩子理解规律概念',
      '及时表扬孩子的逻辑发现'
    ]
  },

  // 25. 等待时 + 仅用手 + 大肢体动作
  {
    id: 'missing-2-5-3-025',
    name: '安静伸展操',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'hands',
    focus: 'gross',
    core_goal: '在等待时进行轻微的身体运动，缓解等待带来的不适。',
    materials: '座椅或站立空间。',
    steps: [
      '手臂伸展：缓慢地上举和放下手臂',
      '肩部放松：轻柔地转动肩膀',
      '脖子活动：小幅度地转动脖子',
      '腿部运动：在座位上轻微活动腿部'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '所有动作都要轻柔不影响他人',
      '动作幅度要适合等待场所',
      '可以重复进行缓解身体紧张',
      '培养在约束环境中的自我调节能力'
    ]
  },

  // 26. 等待时 + 仅用手 + 社交情感
  {
    id: 'missing-2-5-3-026',
    name: '手语情感表达',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'hands',
    focus: 'social',
    core_goal: '学习用手势表达情感，培养非语言沟通能力。',
    materials: '双手。',
    steps: [
      '学习手势：学会用手表示\"爱\"、\"谢谢\"等情感',
      '情感表达：用手势向家人表达感情',
      '理解回应：理解他人的手势表达',
      '无声交流：尝试只用手势进行简单交流'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '教授简单易懂的手势动作',
      '在安静场合特别适用',
      '培养多样化的沟通方式',
      '增进亲子之间的默契'
    ]
  },

  // 27. 等待时 + 纸笔类 + 语言沟通
  {
    id: 'missing-2-5-3-027',
    name: '小小故事绘本',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'paper',
    focus: 'language',
    core_goal: '通过绘制简单图画并讲述故事发展语言表达能力。',
    materials: '小本子，蜡笔。',
    steps: [
      '画故事开头：画一个简单的故事开始场面',
      '编讲情节：用语言描述画中发生的事情',
      '添加内容：继续画和讲述故事发展',
      '完整表达：将整个故事完整地讲述一遍'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '不要求绘画技巧，重点是故事表达',
      '鼓励孩子发挥想象力',
      '适时提问帮助展开故事情节',
      '保持适合等待场合的音量'
    ]
  },

  // 28. 等待时 + 纸笔类 + 逻辑认知
  {
    id: 'missing-2-5-3-028',
    name: '数字连连看',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'paper',
    focus: 'cognition',
    core_goal: '通过连线游戏发展数序概念和逻辑思维能力。',
    materials: '预先准备的数字连线图。',
    steps: [
      '认识数字：看纸上的数字1、2、3等',
      '理解顺序：理解数字的先后顺序关系',
      '连线操作：按数字顺序用线连接',
      '图案发现：看连线后形成的图案是什么'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '从1-5的简单数序开始',
      '确保数字间距合适便于连线',
      '及时给予鼓励增强信心',
      '可以准备多张不同难度的图'
    ]
  },

  // 29. 等待时 + 纸笔类 + 大肢体动作
  {
    id: 'missing-2-5-3-029',
    name: '纸张健身操',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'paper',
    focus: 'gross',
    core_goal: '利用纸张进行适合等待场合的轻微身体运动。',
    materials: '几张纸。',
    steps: [
      '纸张挥舞：轻柔地挥舞纸张进行手臂运动',
      '身体摆动：跟随纸张的飘动轻微摆动身体',
      '高低变化：纸张上举下放带动身体伸展',
      '静止收纳：运动结束后安静收好纸张'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '动作要轻柔不影响周围环境',
      '可以配合深呼吸进行放松',
      '适合在座位上或小范围内进行',
      '帮助缓解等待时的身体紧张'
    ]
  },

  // 30. 等待时 + 纸笔类 + 社交情感
  {
    id: 'missing-2-5-3-030',
    name: '心愿小纸条',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'paper',
    focus: 'social',
    core_goal: '写下或画出心愿与他人分享，培养情感表达和分享意识。',
    materials: '小纸条，彩笔。',
    steps: [
      '想心愿：想一想自己的小心愿或祝福',
      '画心愿：用简单图画表达心愿内容',
      '折小纸条：将心愿折成小纸条',
      '分享心愿：与家人或朋友分享心愿内容'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '引导孩子表达积极美好的心愿',
      '可以是对他人的祝福',
      '培养关爱他人的情感',
      '让孩子体验分享的快乐'
    ]
  },

  // 31. 等待时 + 图书/图片卡 + 精细动作
  {
    id: 'missing-2-5-3-031',
    name: '图片拼图挑战',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '通过拼装简单图片锻炼手眼协调和精细动作能力。',
    materials: '简单的大片拼图(4-6片)。',
    steps: [
      '观察整图：先看完整图片了解目标样子',
      '分析形状：观察每个拼图片的形状特征',
      '尝试拼接：用手指精确地尝试拼接',
      '完成验证：拼完后检查是否与原图一致'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择片数少、图案简单的拼图',
      '在等待时要保持安静',
      '鼓励孩子耐心尝试',
      '及时给予帮助和鼓励'
    ]
  },

  // 32. 等待时 + 图书/图片卡 + 语言沟通
  {
    id: 'missing-2-5-3-032',
    name: '图片故事接龙',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '看图片编故事并与他人接龙，发展语言表达和想象力。',
    materials: '连续性图片卡。',
    steps: [
      '观看图片：仔细观察图片内容',
      '开始故事：用图片开始讲一个小故事',
      '传递接龙：让家人继续接着讲故事',
      '完整故事：一起完成完整的故事'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择情节简单连续的图片',
      '保持轻声交流适合等待场合',
      '鼓励想象力的发挥',
      '培养轮流交流的礼貌'
    ]
  },

  // 33. 等待时 + 图书/图片卡 + 大肢体动作
  {
    id: 'missing-2-5-3-033',
    name: '图片动作模仿',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'gross',
    core_goal: '根据图片进行适合等待场合的小幅度动作模仿。',
    materials: '动作示范图片卡。',
    steps: [
      '观察动作：看图片中示范的简单动作',
      '理解要求：理解在等待时动作要轻柔',
      '小幅模仿：在座位上进行小幅度的动作模仿',
      '静止结束：动作结束后安静坐好'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '选择适合狭小空间的动作',
      '强调动作要轻柔不影响他人',
      '可以重复几个简单动作',
      '帮助缓解等待时的身体不适'
    ]
  },

  // 34. 等待时 + 图书/图片卡 + 社交情感
  {
    id: 'missing-2-5-3-034',
    name: '情感图片分享',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过分享图片中的情感场景培养同理心和情感认知。',
    materials: '情感主题图片卡。',
    steps: [
      '观察情感：看图片中人物的不同情感表达',
      '识别命名：学会识别并命名\"开心\"、\"难过\"等情感',
      '感同身受：说\"如果是我也会这样\"',
      '关爱表达：讨论\"怎样让难过的人开心起来\"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择情感表达明显的图片',
      '引导孩子体验他人的情感',
      '培养关爱他人的意识',
      '适合安静等待的环境'
    ]
  },

  // 35. 等待时 + 家居物品 + 精细动作
  {
    id: 'missing-2-5-3-035',
    name: '小物整理专家',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'household',
    focus: 'fine',
    core_goal: '整理随身携带的小物品，锻炼精细动作和分类能力。',
    materials: '小收纳盒，各种安全小物件。',
    steps: [
      '倾倒物品：将收纳盒中的物品小心倾倒出来',
      '精细分拣：用手指精确地分拣不同类型的物品',
      '有序排列：将相同类型的物品整齐排列',
      '重新收纳：小心地将物品重新收纳到盒中'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '确保所有物品安全，大小合适',
      '在等待时保持安静操作',
      '鼓励孩子慢慢仔细进行',
      '培养整洁有序的好习惯'
    ]
  },

  // 36. 等待时 + 家居物品 + 语言沟通
  {
    id: 'missing-2-5-3-036',
    name: '物品小解说员',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'household',
    focus: 'language',
    core_goal: '介绍随身物品的特征和用途，发展语言表达能力。',
    materials: '几样有趣的小物品。',
    steps: [
      '选择物品：选一个感兴趣的小物品',
      '观察特征：仔细观察物品的颜色、形状等特征',
      '介绍功能：用简单语言说明物品的用途',
      '分享感受：说\"我喜欢它因为...\"'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '选择孩子熟悉的日常物品',
      '引导使用描述性词汇',
      '保持适合等待场合的音量',
      '鼓励完整句子表达'
    ]
  },

  // 37. 等待时 + 家居物品 + 大肢体动作
  {
    id: 'missing-2-5-3-037',
    name: '小物健身器',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'household',
    focus: 'gross',
    core_goal: '利用安全小物品进行适度的身体运动缓解等待不适。',
    materials: '小毛巾，软球等安全物品。',
    steps: [
      '物品准备：选择柔软安全的小物品',
      '上肢运动：举起放下物品进行手臂运动',
      '轻柔按摩：用软物品轻柔地按摩肩膀手臂',
      '收纳整理：运动结束后收好物品'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '确保所有动作轻柔不影响他人',
      '选择不会产生噪音的物品',
      '可以重复进行缓解身体紧张',
      '培养在约束环境中的自我调节'
    ]
  },

  // 38. 等待时 + 家居物品 + 社交情感
  {
    id: 'missing-2-5-3-038',
    name: '温暖分享盒',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'household',
    focus: 'social',
    core_goal: '准备温暖小物品与他人分享，培养关爱他人的情感。',
    materials: '小盒子，贴纸，小糖果等可分享物品。',
    steps: [
      '准备分享：在小盒中准备想要分享的物品',
      '选择对象：观察周围谁可能需要关爱',
      '主动分享：礼貌地询问\"你想要吗？\"',
      '感受快乐：体验给予他人带来的快乐感受'
    ],
    duration: 4,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '选择适合分享的安全物品',
      '教授礼貌的分享用语',
      '培养观察他人需要的能力',
      '让孩子体验助人的快乐'
    ]
  },

  // ===== 睡前场景缺失游戏 =====
  
  // 39. 睡前 + 仅用手 + 逻辑认知
  {
    id: 'missing-2-5-3-039',
    name: '睡前数数仪式',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'hands',
    focus: 'cognition',
    core_goal: '通过睡前手指数数培养数概念，建立安稳的睡前习惯。',
    materials: '双手。',
    steps: [
      '安静数数：用手指安静地从1数到10',
      '倒数练习：学习从5倒数到1',
      '分组数数：左手右手分别数数',
      '感谢数数：数今天的开心事情'
    ],
    duration: 3,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '营造安静舒缓的氛围',
      '数数速度要慢有助入睡',
      '可以配合深呼吸',
      '培养感恩的睡前习惯'
    ]
  },

  // 40. 睡前 + 仅用手 + 大肢体动作
  {
    id: 'missing-2-5-3-040',
    name: '月亮伸展操',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'hands',
    focus: 'gross',
    core_goal: '通过轻柔的睡前伸展运动放松身体，准备安眠。',
    materials: '床铺或地毯。',
    steps: [
      '月亮升起：慢慢举起双手模仿月亮升起',
      '星星闪烁：手指轻轻摆动如星星闪烁',
      '云朵飘动：手臂轻柔摆动如云朵飘动',
      '安静入睡：最后双手放下安静躺好'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '所有动作都要极其轻柔',
      '可以配合睡前音乐',
      '营造宁静的睡前氛围',
      '帮助孩子身心放松'
    ]
  },

  // 41. 睡前 + 纸笔类 + 语言沟通
  {
    id: 'missing-2-5-3-041',
    name: '睡前心愿日记',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'paper',
    focus: 'language',
    core_goal: '通过画画和讲述表达睡前心愿，发展语言表达能力。',
    materials: '小本子，彩笔。',
    steps: [
      '回顾一天：用简单话语回顾今天的经历',
      '画下心愿：画出明天想要做的事情',
      '表达愿望：用语言表达\"明天我想...\"',
      '温馨结束：说\"晚安\"准备入睡'
    ],
    duration: 4,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '保持轻声细语的睡前氛围',
      '引导积极美好的心愿表达',
      '可以成为每晚的固定仪式',
      '培养规划和表达的习惯'
    ]
  },

  // 42. 睡前 + 纸笔类 + 逻辑认知
  {
    id: 'missing-2-5-3-042',
    name: '睡前形状配对',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'paper',
    focus: 'cognition',
    core_goal: '通过简单形状配对游戏发展认知能力，为入睡做准备。',
    materials: '形状配对纸卡。',
    steps: [
      '观察形状：安静地观察不同的几何形状',
      '寻找相同：找出相同形状的配对',
      '轻声命名：轻声说出\"圆形\"、\"方形\"等',
      '收拾准备：游戏结束后收好准备睡觉'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '选择简单基础的几何形状',
      '保持安静温和的氛围',
      '不要让游戏过于刺激兴奋',
      '配对成功后给予轻柔的表扬'
    ]
  },

  // 43. 睡前 + 纸笔类 + 大肢体动作
  {
    id: 'missing-2-5-3-043',
    name: '纸巾舞蹈',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'paper',
    focus: 'gross',
    core_goal: '用纸巾进行轻柔舞蹈，通过优美动作放松身心。',
    materials: '柔软的纸巾或薄纱。',
    steps: [
      '轻握纸巾：轻柔地拿起纸巾',
      '优美摆动：像蝴蝶一样轻柔地摆动纸巾',
      '身体跟随：身体跟随纸巾进行轻柔摆动',
      '安静收尾：最后放下纸巾准备休息'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'active',
    tips: [
      '所有动作都要轻柔优美',
      '可以配合轻柔的音乐',
      '重点在放松而不是运动',
      '营造梦幻的睡前氛围'
    ]
  }

];

console.log('=== 2.5-3岁年龄段缺失游戏补充 - 第二批 ===');
console.log(`已创建 ${missingGames_2_5_3_batch2.length} 个补充游戏\n`);

// 按场景统计
const byScene = missingGames_2_5_3_batch2.reduce((acc, game) => {
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

export { missingGames_2_5_3_batch2 };