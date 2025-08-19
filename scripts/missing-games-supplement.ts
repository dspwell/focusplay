// 补充缺失的关键游戏组合

const supplementGames = [
  
  // ===== blocks_puzzle 道具补充游戏 =====
  
  // 1. waiting + blocks_puzzle + cognition
  {
    id: 'missing-001',
    name: '口袋积木时光',
    age_range: '2.5-3',
    scene: 'waiting',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '通过携带式积木游戏，在等待时间里发展空间认知能力和问题解决能力，保持专注和安静。',
    materials: '小盒装积木或软质拼图块6-8块，便携收纳袋。',
    steps: [
      '积木展示（认知发展）：让孩子观察不同形状和颜色的积木，说出它们的特征',
      '简单搭建：引导孩子搭建简单的塔或桥，从2-3块开始',
      '形状配对（空间思维）：让孩子找到相同形状或颜色的积木进行配对',
      '创意构建：鼓励孩子自由创作，用积木搭建自己想象的物体'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '选择大块积木：确保积木足够大，避免吞咽风险',
      '控制数量：不超过10块积木，便于管理和收纳',
      '安静操作：提醒孩子轻拿轻放，不影响其他人',
      '及时收纳：游戏结束后一起收拾，培养整理习惯'
    ]
  },

  // 2. travel + blocks_puzzle + fine
  {
    id: 'missing-002',
    name: '旅途拼图师',
    age_range: '3-4',
    scene: 'travel',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '通过小块拼图和精细操作，在旅途中锻炼手指精细动作和专注力，培养耐心和观察力。',
    materials: '4-6片大块软质拼图，收纳盒。',
    steps: [
      '拼图观察（精细动作）：让孩子仔细观察拼图片的形状和图案细节',
      '边缘寻找：教孩子找到拼图的边缘片，作为搭建基础',
      '精确拼接（手眼协调）：引导孩子小心地将拼图片拼接在一起',
      '完成庆祝：拼图完成后一起欣赏作品，给孩子成就感'
    ],
    duration: 15,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '选择合适难度：3-4岁选择4-6片的大块拼图',
      '固定底板：准备一个平整的底板防止拼图滑动',
      '耐心指导：在孩子遇到困难时给予适当提示',
      '多次练习：可以反复拆开重新拼，增加练习机会'
    ]
  },

  // 3. bedtime + blocks_puzzle + fine
  {
    id: 'missing-003',
    name: '睡前积木盒',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '通过轻柔的积木操作活动，在睡前时光锻炼精细动作，同时营造安静平和的氛围，为入睡做准备。',
    materials: '柔软的布质积木4-5块，小收纳袋。',
    steps: [
      '轻柔触摸（精细动作）：让孩子用小手轻轻触摸软积木，感受不同的质感',
      '安静搭建：在床上或地毯上轻声搭建简单的小塔',
      '颜色识别（认知辅助）：在昏暗光线下识别积木的颜色，轻声说出来',
      '收纳入袋：游戏结束后将积木一个个放入袋子，准备睡觉'
    ],
    duration: 8,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '材质安全：选择柔软无毒的布质或泡沫积木',
      '光线适宜：保持昏暗舒适的灯光，营造睡前氛围',
      '声音轻柔：所有操作都要轻柔，避免兴奋过度',
      '时间控制：严格控制在8分钟内，不要影响睡眠时间'
    ]
  },

  // ===== bedtime 场景精细动作游戏补充 =====

  // 4. bedtime + paper + fine (2-2.5岁)
  {
    id: 'missing-004',
    name: '睡前小画家',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'paper',
    focus: 'fine',
    core_goal: '通过简单的绘画活动，在睡前锻炼手部精细动作，释放一天的情感，为安静入睡做准备。',
    materials: '白纸1-2张，粗头安全彩笔2支，湿巾。',
    steps: [
      '纸张准备（精细动作）：让孩子帮忙摊平纸张，选择喜欢的彩笔颜色',
      '自由涂鸦：在昏暗灯光下让孩子自由画画，不限制内容',
      '情感表达（心理舒缓）：轻声询问"今天开心吗？"让孩子画出心情',
      '作品收藏：将画作放在床头，告诉孩子明天还能看到'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '彩笔安全：使用可水洗的粗头彩笔，避免污染床品',
      '光线柔和：保持温暖昏暗的灯光，不要太亮',
      '情绪平和：用温柔的语调，避免让孩子过于兴奋',
      '时间控制：严格控制时间，不要影响正常睡眠'
    ]
  },

  // 5. bedtime + household + fine (2.5-3岁)
  {
    id: 'missing-005',
    name: '睡前整理小助手',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'household',
    focus: 'fine',
    core_goal: '通过整理小物品的活动，锻炼精细动作和责任感，同时建立睡前整理的好习惯。',
    materials: '小收纳盒，孩子的小物品（发卡、小玩具等）。',
    steps: [
      '物品分类（精细动作）：让孩子将散落的小物品按类型分类',
      '细致摆放：用小手将物品整齐地放入收纳盒的不同格子里',
      '盖子操作（手指协调）：练习开合收纳盒的盖子，锻炼手指力量',
      '位置摆放：将整理好的收纳盒放在固定位置，准备睡觉'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '物品安全：确保所有小物品都是安全的，无吞咽风险',
      '操作简单：选择容易开合的收纳盒，避免挫败感',
      '习惯培养：将此活动固定为睡前程序的一部分',
      '适度表扬：完成后给予适度表扬，但不要过于兴奋'
    ]
  },

  // 6. bedtime + books_pictures + fine (3-4岁)
  {
    id: 'missing-006',
    name: '睡前翻书时光',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'fine',
    core_goal: '通过轻柔的翻书动作，锻炼手指精细动作，同时通过安静的阅读活动为入睡营造平和氛围。',
    materials: '厚页绘本1-2本，小夜灯。',
    steps: [
      '轻柔翻页（精细动作）：教孩子用拇指和食指轻轻翻动书页',
      '细节观察：在昏暗光线下仔细观察图片的细节',
      '指向练习（手眼协调）：让孩子用手指指向图片中的不同物体',
      '轻声阅读：家长轻声读出图片内容，孩子安静倾听'
    ],
    duration: 12,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '书籍选择：选择内容温和、画面柔美的睡前故事书',
      '翻页技巧：耐心教导正确的翻页方法，避免撕破',
      '声音控制：保持轻柔的语调，营造安静氛围',
      '结束过渡：阅读结束后自然过渡到睡觉，不要突然中断'
    ]
  },

  // ===== waiting 场景大肢体动作游戏补充 =====

  // 7. waiting + hands + gross (2-2.5岁)
  {
    id: 'missing-007',
    name: '安静小体操',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'hands',
    focus: 'gross',
    core_goal: '通过简单的手臂和身体动作，在等待时释放身体能量，发展大肢体协调能力，同时保持安静不影响他人。',
    materials: '无需道具，利用身体动作。',
    steps: [
      '手臂伸展（大肢体发展）：教孩子慢慢举起双臂，像大树一样伸展',
      '肩膀转动：让孩子轻轻转动肩膀，放松肌肉',
      '脚尖练习（平衡协调）：在座位上练习踮脚尖和放下的动作',
      '深呼吸配合：配合深呼吸动作，帮助孩子放松身心'
    ],
    duration: 5,
    difficulty: 1,
    activity_type: 'quiet',
    tips: [
      '动作轻柔：所有动作都要轻柔缓慢，避免影响他人',
      '空间控制：确保孩子的动作不会碰到周围的人或物',
      '示范引导：家长先示范，让孩子跟着做',
      '适时停止：如果孩子开始兴奋，立即转为更安静的活动'
    ]
  },

  // 8. waiting + paper + gross (3-4岁)
  {
    id: 'missing-008',
    name: '纸张运动会',
    age_range: '3-4',
    scene: 'waiting',
    props: 'paper',
    focus: 'gross',
    core_goal: '利用纸张作为道具，进行安静的大肢体运动，在等待时间里锻炼身体协调能力和创造力。',
    materials: 'A4纸张2-3张，彩笔。',
    steps: [
      '纸飞机制作（手臂协调）：和孩子一起折简单的纸飞机',
      '投掷练习：在有限空间内进行轻柔的纸飞机投掷',
      '接住挑战（反应协调）：尝试用双手接住飞回来的纸飞机',
      '纸团投篮：将废纸揉成团，向指定目标进行投掷练习'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '空间意识：确保有足够安全的空间进行活动',
      '力度控制：教孩子控制投掷力度，避免打到他人',
      '声音控制：保持安静，避免大声喧哗',
      '清理整齐：活动结束后一起收拾纸张，保持环境整洁'
    ]
  },

  // ===== outdoor 场景精细动作游戏补充 =====

  // 9. outdoor + books_pictures + language (2.5-3岁)
  {
    id: 'missing-009',
    name: '户外自然图册',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '结合户外环境和图片教具，发展语言表达能力和自然观察力，丰富词汇量和表达能力。',
    materials: '自然主题图片册，放大镜，小收纳袋。',
    steps: [
      '图片对比（语言发展）：看图片册中的花朵，然后寻找周围真实的花朵',
      '特征描述：引导孩子用语言描述看到的自然物体的颜色、形状',
      '词汇学习（语言扩展）：学习新的自然词汇，如"花瓣"、"树叶"、"石头"',
      '故事创编：用观察到的自然元素编一个简单的小故事'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    tips: [
      '安全观察：提醒孩子不要采摘植物或触摸危险物品',
      '图片清晰：选择色彩鲜艳、特征明显的自然图片',
      '词汇适宜：选择适合2.5-3岁孩子理解的简单词汇',
      '保护环境：教育孩子爱护自然环境，不破坏植物'
    ]
  },

  // 10. outdoor + paper + fine (2-2.5岁)
  {
    id: 'missing-010',
    name: '户外拓印工坊',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'paper',
    focus: 'fine',
    core_goal: '通过户外拓印活动，锻炼手部精细动作和手眼协调能力，同时感受自然纹理，丰富感官体验。',
    materials: '白纸几张，蜡笔或铅笔，湿巾。',
    steps: [
      '纹理寻找（触觉发展）：带孩子寻找有纹理的表面，如树皮、石头',
      '纸张放置（精细动作）：帮助孩子将纸张平整地贴在纹理表面上',
      '拓印操作（手眼协调）：教孩子用蜡笔在纸上轻轻涂抹，显出纹理',
      '作品对比：将拓印作品与原物对比，观察相似之处'
    ],
    duration: 12,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '表面选择：选择安全、清洁的纹理表面进行拓印',
      '工具安全：使用儿童专用的安全蜡笔',
      '动作指导：示范正确的拓印手法和力度',
      '卫生清洁：活动后及时清洁小手，注意卫生'
    ]
  },

  // ===== 其他关键缺失组合补充 =====

  // 11. home + blocks_puzzle + language (3-4岁)
  {
    id: 'missing-011',
    name: '积木故事城',
    age_range: '3-4',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'language',
    core_goal: '通过积木搭建结合故事叙述，发展语言表达能力和创造力，培养逻辑思维和叙述技巧。',
    materials: '彩色积木15-20块，故事卡片。',
    steps: [
      '城市规划（语言发展）：和孩子讨论要建造什么样的城市或建筑',
      '边建边说：在搭建过程中鼓励孩子描述自己的想法和计划',
      '角色创造（想象表达）：为积木城市创造居民角色，编出他们的故事',
      '故事表演：用积木场景表演创编的故事，锻炼语言表达'
    ],
    duration: 20,
    difficulty: 4,
    activity_type: 'quiet',
    tips: [
      '鼓励表达：多用开放性问题引导孩子表达想法',
      '记录想法：可以用手机记录孩子的创意故事',
      '角色丰富：帮助孩子创造不同性格的角色',
      '逻辑引导：适当引导故事的逻辑性和完整性'
    ]
  },

  // 12. outdoor + blocks_puzzle + cognition (2-2.5岁)
  {
    id: 'missing-012',
    name: '户外积木探索',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '在户外环境中使用积木进行认知游戏，发展空间感知能力和环境适应能力，丰富户外游戏体验。',
    materials: '大块软质积木6-8块，防水垫。',
    steps: [
      '环境观察（认知发展）：让孩子观察户外环境，选择搭建积木的地点',
      '稳定搭建：在不平整的户外地面上练习搭建稳定的积木结构',
      '自然结合（空间认知）：尝试将积木与自然元素（石头、树枝）结合',
      '清理收纳：游戏结束后将积木清理干净并收好'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    tips: [
      '安全第一：选择平整安全的户外区域进行活动',
      '材质适宜：使用适合户外的防水、易清洁积木',
      '环境保护：教育孩子不要破坏自然环境',
      '清洁卫生：活动后及时清洗积木和小手'
    ]
  }

];

console.log('=== 补充游戏总览 ===');
console.log(`总计 ${supplementGames.length} 个补充游戏\n`);

// 按缺失类型统计
const byProps = supplementGames.reduce((acc, game) => {
  acc[game.props] = (acc[game.props] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('按道具类型统计:');
Object.entries(byProps).forEach(([props, count]) => {
  console.log(`  ${props}: ${count}个游戏`);
});

const byScene = supplementGames.reduce((acc, game) => {
  acc[game.scene] = (acc[game.scene] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按场景统计:');
Object.entries(byScene).forEach(([scene, count]) => {
  console.log(`  ${scene}: ${count}个游戏`);
});

const byFocus = supplementGames.reduce((acc, game) => {
  acc[game.focus] = (acc[game.focus] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

console.log('\n按发展重点统计:');
Object.entries(byFocus).forEach(([focus, count]) => {
  console.log(`  ${focus}: ${count}个游戏`);
});

console.log('\n游戏列表:');
supplementGames.forEach((game, index) => {
  console.log(`${index + 1}. ${game.name} (${game.age_range}岁, ${game.scene}, ${game.props}, ${game.focus})`);
});

export { supplementGames };