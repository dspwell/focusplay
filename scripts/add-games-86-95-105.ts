import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const gamesSet2 = [
  {
    id: 'memory-chess-board-081',
    name: '记忆棋盘：放哪儿来着？',
    age_range: '3-4',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '锻炼视觉记忆和空间位置记忆。',
    materials: '在一张纸上画一个九宫格，准备几个不同颜色或形状的小积木。',
    steps: [
      '摆放棋子：家长先在九宫格的其中2-3个格子里，摆上不同的小积木。',
      '记忆时间：让孩子仔细观察并记住每个积木的位置，大约15-20秒。',
      '清空棋盘：将所有积木拿走。',
      '复原棋盘：把积木交给孩子，让他凭记忆，将积木重新放回原来的位置。'
    ],
    tips: [
      '难度递增：从2个积木开始，孩子成功后增加到3个、4个。',
      '语言辅助记忆：在记忆时，可以鼓励孩子用语言描述："红色的在最上面中间，蓝色的在最左边下面。"',
      '增加干扰：对于能力强的孩子，在记忆和复原之间，可以让他做一个其他任务（比如唱一首歌），来考验他的长时记忆。',
      '错误分析：如果孩子放错了，可以和他一起讨论是颜色记错了，还是位置记错了。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保积木大小适中，无误食风险。',
    extensions: null
  },
  {
    id: 'wonderful-uses-082',
    name: '"奇妙的用途"：一物多玩',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'language',
    core_goal: '锻炼发散性思维和想象力，打破思维定势。',
    materials: '任何一件日常物品，比如一个杯子。',
    steps: [
      '提出问题：家长拿起杯子，问孩子："宝宝，我们都知道杯子可以用来喝水，对不对？"',
      '头脑风暴："那我们来开动脑筋想一想，除了喝水，它假装可以用来做什么呢？"',
      '家长示范：家长先示范，把杯子当帽子戴在头上，说"它可以当帽子"；或者把它当望远镜，说"它可以当望远镜"。',
      '孩子想象：鼓励孩子也想出杯子的"奇妙用途"，比如当小鼓敲、当城堡、给娃娃当浴缸等等。'
    ],
    tips: [
      '不设限：无论孩子说出多么天马行空的想法，都要给予肯定和赞赏。这是创造力最重要的养料。',
      '举一反三：可以用任何物品来玩这个游戏，一把梳子、一个衣架、一本书……',
      '激发幽默：这个游戏通常会引出很多有趣可笑的想法，能创造轻松愉快的亲子氛围。',
      '逆向思维：还可以反过来玩，家长说"我想找一个可以当帽子的东西"，让孩子在房间里寻找。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'family-role-day-083',
    name: '家庭角色日：今天你来当妈妈',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'social',
    core_goal: '通过深度的角色互换，体验不同家庭角色的职责和感受，培养同理心。',
    materials: '无。',
    steps: [
      '宣布活动：家长宣布："今天下午是我们的家庭角色日！现在，你来当妈妈，我来当宝宝。"',
      '彻底的角色扮演：孩子需要模仿"妈妈"的口吻和行为，比如对"宝宝"（家长）说："宝宝，该喝水了。"或者"你不要乱丢玩具。"',
      '家长的配合：家长需要全身心地投入扮演"孩子"，可以调皮、可以撒娇，让"妈妈"（孩子）来处理。',
      '讨论感受：游戏结束后，一定要有一个讨论环节，问孩子："你觉得当妈妈辛苦吗？哪件事最难？"也分享你当"宝宝"的感受。'
    ],
    tips: [
      '换位思考：这是最直接的换位思考练习，能让孩子深刻体会到父母的日常。',
      '解决问题的机会：当"妈妈"（孩子）不知道如何处理"宝宝"（家长）的调皮行为时，正是家长引导他学习如何解决问题的好时机。',
      '尊重与理解：这个游戏能极大地增进亲子之间的互相理解和尊重。',
      '固定活动：可以把这个活动固定下来，比如每周六下午，成为家庭的特色亲子时光。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'pathfinding-ant-084',
    name: '寻路小蚂蚁：走出小迷宫',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '锻炼运笔的规划性和避开障碍的控制能力。',
    materials: '纸和笔。',
    steps: [
      '绘制迷宫：家长在纸上画一个非常简单的迷宫：一个起点（画一只小蚂蚁），一个终点（画一块糖果），中间只有一两条"死胡同"。',
      '下达任务：对孩子说："小蚂蚁想去吃糖果，但是路上有些墙壁挡住了它，我们帮它找到正确的路吧！"',
      '手指探路：先让孩子用手指在迷宫上"走"一遍，找出通路。',
      '运笔走迷宫：然后再让他用笔，画出小蚂蚁的行进路线，要求笔迹不能碰到"墙壁"。'
    ],
    tips: [
      '迷宫由简到繁：初期迷宫要极其简单，只有一个转角或一个岔路。随着孩子能力的提升，再增加复杂性。',
      '锻炼视觉追踪和规划：孩子需要用眼睛预判路线，然后指挥手去执行，这是高级的认知活动。',
      '允许试错：如果走进了死胡同，教他"原路返回"，再尝试另一条路，培养解决问题的能力。',
      '专注力训练：走迷宫需要高度的注意力集中，是非常好的专注力训练工具。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'natural-artist-085',
    name: '自然艺术家：把大地当画布',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'hands',
    focus: 'fine',
    core_goal: '利用自然材料进行艺术创作，锻炼想象力、审美和手部精细操作。',
    materials: '无，就地取材。',
    steps: [
      '收集材料：和孩子一起在安全的草地上收集创作材料，比如不同颜色的落叶、小花瓣、小石子、短树枝等。',
      '设置主题：找一块平整的地面，对孩子说："我们用这些大自然的宝贝，来拼一个笑脸，好不好？"',
      '分工合作：家长可以用石子摆出脸的轮廓，然后引导孩子用树叶来做头发，用花瓣来做嘴巴，用两颗颜色不一样的小石子做眼睛。',
      '欣赏与命名：完成后，和孩子一起退后几步，欣赏这个独一无二的大地艺术品，并为它拍张照片留念。'
    ],
    tips: [
      '激发创意：除了笑脸，还可以拼凑小汽车、蝴蝶、太阳等各种图案。可以完全由孩子主导，他想拼什么就拼什么。',
      '感官体验：让孩子充分感受不同材料的质感、形状和颜色。',
      '尊重自然：提醒孩子只使用已经掉落在地上的材料，不采摘生长中的植物。',
      '短暂的美好：告诉孩子，我们的作品留在这里，风一吹也许就没了，但我们一起创作的快乐会留在心里。培养对短暂事物的美好感受。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保收集的材料安全，无尖锐边缘。',
    extensions: null
  },
  {
    id: 'number-relay-086',
    name: '数字接龙：快嘴快脑接着来',
    age_range: '3-4',
    scene: 'waiting',
    props: 'hands',
    focus: 'cognition',
    core_goal: '锻炼对数字顺序的熟练度和快速反应能力。',
    materials: '无。',
    steps: [
      '讲解规则："我们来玩一个数字接龙游戏，我说一个数字，你就要说它后面的那个数字，看谁接得快！"',
      '正向数数：家长说："1"，孩子需要接"2"。家长："4"，孩子接"5"。',
      '增加难度：可以增加连续接龙的数量，"我说1，你说到5。"',
      '逆向数数：对于能力强的孩子，可以尝试从10开始倒着数："我说10"，孩子需要接"9"。'
    ],
    tips: [
      '控制范围：初期只在1-10的范围内进行。',
      '节奏要快：这个游戏的乐趣在于快速的你来我往，能很好地锻炼注意力的集中。',
      '结合手指：在说数字的同时，可以伸出对应数量的手指，用视觉辅助听觉。',
      '随时可玩：这是在等电梯、等红绿灯等极短碎片化时间里，非常有效的益智小游戏。'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'hello-tree-friend-087',
    name: '你好，大树朋友：抱一抱打个招呼',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'hands',
    focus: 'social',
    core_goal: '培养对自然的热爱和亲近感，学习用友善的方式与环境互动。',
    materials: '无。',
    steps: [
      '游戏引入：散步时，家长指着一棵大树，用拟人的口吻说："看，这棵大树爷爷在这里站了好久啦，我们去跟它打个招呼吧。"',
      '示范互动：家长走到树前，轻轻地摸着树皮说："大树爷爷，你好呀！"',
      '鼓励孩子：鼓励孩子也去摸一摸、抱一抱大树，感受它的粗糙和坚实。',
      '拓展对象：可以跟路边的小花、小草、小石头都打招呼，把整个大自然都当作可以交流的朋友。'
    ],
    tips: [
      '万物有灵：用拟人化的方式，帮助孩子建立"万物有灵"的感受，培养他们对生命的敬畏之心。',
      '感官链接：鼓励孩子用触摸、嗅闻等多种感官去感受自然。',
      '温柔对待：在互动中，要向孩子示范如何温柔地对待植物，不拉拽，不攀折。',
      '情感表达：这是教孩子向世界表达善意和喜爱的简单方式。'
    ],
    duration: 8,
    difficulty: 1,
    activity_type: 'active',
    safety_notes: '确保安全的自然环境，远离有毒植物。',
    extensions: null
  },
  {
    id: 'vegetable-washing-helper-088',
    name: '洗菜小帮手：小手搓呀搓',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼手部清洗、揉搓的动作，并通过参与家务劳动，培养责任感和归属感。',
    materials: '一个盆，一些水，以及适合清洗的蔬菜（如西红柿、黄瓜、青椒）。',
    steps: [
      '邀请参与：在准备晚饭时，对孩子说："宝宝，你想当妈妈的小帮手，我们一起来洗菜，好吗？"',
      '分配任务：给孩子一个装了少量水的盆，并给他一两个西红柿。',
      '示范动作：家长演示如何用手在水中轻轻地揉搓蔬菜的表面。',
      '共同劳动：和孩子一起清洗，他洗他的，你洗你的。完成后，要郑重地感谢他的帮助："谢谢你，帮妈妈做了这么重要的工作！"'
    ],
    tips: [
      '安全第一：确保孩子站在稳固的小凳子上，水盆里的水不要太多，防止泼洒滑倒。只让他清洗安全的、不易损坏的块状蔬菜。',
      '过程导向：他可能洗不干净，可能会玩水，这都没关系。重点是让他体验"参与"和"被需要"的感觉。',
      '建立责任感：让他明白，自己也是家庭的一员，需要为家庭事务贡献一份力量。',
      '提升自信："我帮妈妈洗菜了"会成为他可以骄傲地向家人宣布的成就。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保孩子站在稳固的小凳子上，水量适中防止泼洒。',
    extensions: null
  },
  {
    id: 'branch-length-comparison-089',
    name: '树枝比长短：对齐来比较',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'hands',
    focus: 'cognition',
    core_goal: '理解"长"和"短"的相对概念，并学习比较的方法。',
    materials: '在地上捡拾几根长度差异明显的树枝。',
    steps: [
      '引入概念：家长先拿出两根长度差异巨大的树枝，问孩子："宝宝看，这两根树枝，你觉得它们一样吗？"',
      '学习比较方法：家长将两根树枝的一端对齐，并排放在地上，让孩子能清晰地看到另一端的长度差异。',
      '命名概念：指着长的那根说："这根是长的。"指着短的那根说："这根是短的。"',
      '孩子判断：拿出新的两根树枝，让孩子自己用"一端对齐"的方法来比较，并说出哪根长、哪根短。'
    ],
    tips: [
      '差异要明显：初期的比较物，长度差异一定要非常明显，便于孩子判断。',
      '对齐是关键：教会孩子"比较长短需要先对齐一端"这个科学的比较方法。',
      '拓展到其他物品：可以在家比较两支笔、两条毛巾的长短。',
      '引入"最"：对于3岁的孩子，可以拿出三根树枝，让他找出"最长"和"最短"的。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保树枝安全，无尖锐断面。',
    extensions: null
  },
  {
    id: 'silent-whisper-090',
    name: '无声的悄悄话：看口型猜词',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼视觉的专注力和对口型变化的细微观察能力。',
    materials: '无。',
    steps: [
      '游戏介绍：对孩子说："我们来玩一个特别安静的游戏，我只动嘴巴，不出声音，你来猜猜我说的是什么词。"',
      '示范口型：家长面对孩子，用非常夸张、缓慢、清晰的口型，无声地说一个简单的词，比如"苹果"。',
      '孩子竞猜：孩子通过观察口型来猜词。',
      '角色互换：让孩子也来做口型，你来猜。'
    ],
    tips: [
      '选择口型差异大的词：从那些口型变化非常明显的词开始，比如"爸爸"（baba，嘴巴开合两次）、"鱼"（yu，嘴巴噘起来）。',
      '视觉专注力：这个游戏要求孩子高度集中注意力，捕捉家长嘴唇的每一个细微变化。',
      '增加趣味性：可以用来猜他好朋友的名字，或者他喜欢的动画角色的名字。',
      '沟通的多样性：让孩子了解，除了声音，面部表情和口型也是沟通的重要部分。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'hug-ritual-091',
    name: '拥抱仪式：晚安抱一抱',
    age_range: '2.5-3',
    scene: 'bedtime',
    props: 'hands',
    focus: 'social',
    core_goal: '通过固定的睡前仪式，表达爱意，建立家庭成员间的情感链接和安全感。',
    materials: '无。',
    steps: [
      '发起仪式：对孩子说："睡觉时间到了，我们要开始我们的晚安拥抱仪式啦！"',
      '拥抱家人：带着孩子，先给在场的每一位家人一个大大的、温暖的拥抱，并说"晚安"。',
      '拥抱玩具：然后，去拥抱他最喜欢的几个毛绒玩具，也对它们说"晚安"。',
      '最后的拥抱：最后，家长给孩子一个最长、最温暖的拥抱，告诉他"爸爸妈妈爱你"，然后把他放上床。'
    ],
    tips: [
      '一致性与可预测性：每天都坚持做同样的仪式，这种可预测性会给孩子带来巨大的安全感。',
      '高质量的拥抱：拥抱时要投入，让孩子感受到你的爱和温暖，而不仅仅是走形式。',
      '爱的表达：这是教孩子如何用肢体语言和言语来直接表达爱意的最好方式。',
      '专属仪式：每个家庭都可以创造自己独特的拥抱仪式，比如加上"碰碰鼻子"、"亲亲额头"等环节。'
    ],
    duration: 8,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'golden-rooster-standing-092',
    name: '金鸡独立：单脚小勇士',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼单脚站立的平衡能力和身体的本体感觉。',
    materials: '无。',
    steps: [
      '示范动作：家长先做示范，抬起一只脚，双臂可以向两侧平举保持平衡。',
      '孩子尝试：鼓励孩子也来尝试。初期他可能会摇摇晃晃，只能坚持一两秒。',
      '计时比赛：和孩子一起数数，看谁能站得更久。',
      '变换姿势：熟练后，可以尝试在单脚站立时做一些其他动作，比如闭上眼睛（难度极高）、或者用手去摸抬起的那只脚。'
    ],
    tips: [
      '扶持辅助：初期可以让孩子扶着墙壁或家长的手来练习。',
      '安全场地：确保周围没有障碍物，以免摔倒时磕碰。',
      '发展里程碑：单脚站立是儿童大运动发展的一个重要里程碑，标志着他的平衡能力和身体控制能力达到了一个新的水平。',
      '左右脚轮换：一定要让孩子练习双脚轮换站立，促进身体的均衡发展。'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保周围没有障碍物，以免摔倒时磕碰。',
    extensions: null
  },
  {
    id: 'story-repair-worker-093',
    name: '故事修理匠：顺序修一修',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'cognition',
    core_goal: '锻炼对事物逻辑顺序的敏感度和纠错能力。',
    materials: '无。',
    steps: [
      '故意讲错：家长开始讲一个孩子非常熟悉的故事或日常流程，但故意说错其中的逻辑顺序。例如："早上，宝宝先穿好鞋子，然后刷牙，最后才起床。"',
      '等待"纠错"：家长用正常的语气讲，观察孩子是否能发现其中的"不对劲"。',
      '鼓励质疑：如果孩子露出困惑的表情，家长可以停下来问："咦，我说的对吗？是不是哪里有点奇怪？"鼓励他说出错误的地方。',
      '一起修正：和孩子一起把故事的顺序修正过来："哦，对，应该是先起床，再刷牙，最后出门前才穿鞋子！"'
    ],
    tips: [
      '选择熟悉内容：必须选择孩子烂熟于心的故事或流程（如《三只小猪》、每天的穿衣顺序），他才能发现错误。',
      '培养批判性思维：这个游戏鼓励孩子不要盲从权威，要根据自己的知识和逻辑去判断信息的对错，是批判性思维的萌芽。',
      '增加趣味性：家长可以假装自己"记性不好"，非常需要孩子的帮助来"修理"这个故事。',
      '难度提升：可以故意说错故事中的关键细节，比如"小红帽去看望她的奶奶，带了一篮子胡萝卜"。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'if-then-reasoning-094',
    name: '如果……那么……：小小推理家',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼假设和推理的语言逻辑能力，理解简单的因果关系。',
    materials: '无。',
    steps: [
      '提出假设：家长提出一个天马行空的假设。例如："如果我们都长了翅膀，那么会怎么样？"',
      '引导推理：引导孩子根据这个假设进行推理。他可能会说："我们就可以飞到天上去！"',
      '连续追问：家长继续追问："那如果我们能飞，还需不需要坐汽车呀？""我们会在哪里睡觉呢？会不会睡在树上？"',
      '变换主题：不断变换假设的主题，比如"如果所有东西都变成软的"、"如果小狗会说话"。'
    ],
    tips: [
      '开放性：这是一个完全开放的游戏，没有任何标准答案，旨在激发想象和逻辑。',
      '锻炼思维的连贯性：引导孩子基于上一个推理，进行下一步的联想，锻炼思维的链条。',
      '哲学启蒙：这种"思想实验"是哲学思考的雏形，非常有价值。',
      '从现实到幻想：可以从比较贴近现实的假设开始，比如"如果今天下雨，我们出门要带什么？"'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'paper-folding-corner-095',
    name: '折纸角：对齐—压痕—展开',
    age_range: '3-4',
    scene: 'waiting',
    props: 'paper',
    focus: 'fine',
    core_goal: '学习将纸张的边角对齐并压出折痕的精确动作。',
    materials: '几张正方形的、稍有硬度的纸。',
    steps: [
      '示范对折：家长拿一张纸，对孩子说："你看，我要让这张纸变个魔术。"然后拿起一个角，缓慢地、准确地和它的对角重合。',
      '压出折痕：对齐后，用另一只手的手指，从中间开始，用力地向两边压出一条清晰的折痕。打开后，一个三角形就出现了。',
      '孩子尝试：给孩子一张新纸，让他自己尝试。',
      '连续对折：可以继续将三角形对折成更小的三角形。'
    ],
    tips: [
      '"对齐"是关键：帮助孩子理解"角对角"、"边对边"的对齐概念，这是折纸的基础。',
      '锻炼双手协作：折纸需要一只手固定，另一只手移动和按压，是极好的双手协作练习。',
      '从简单开始：只需练习最基础的对角折和对边折即可。',
      '艺术美感：让孩子感受一张平面的纸，通过折叠就能产生立体变化的奇妙。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保纸张边缘光滑，无割伤风险。',
    extensions: null
  },
  {
    id: 'feather-blowing-105',
    name: '吹羽毛：一口气让它飞',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼口腔肌肉，学习控制呼气的力度和方向。',
    materials: '几根干净、柔软的羽毛。',
    steps: [
      '游戏引入：家长将一根羽毛放在手心，对孩子说："看，一根漂亮的小羽毛，我们来跟它玩个游戏。"',
      '示范吹气：家长轻轻地对着羽毛吹一口气，让它飞起来。',
      '孩子尝试：把羽毛放在孩子的手心，鼓励他也来吹。',
      '桌上比赛：可以把羽毛放在桌子上，和孩子一起把它从桌子的一边吹到另一边，看谁吹得远。'
    ],
    tips: [
      '口腔肌肉训练："吹"这个动作能很好地锻炼孩子的唇部、面颊和舌头的肌肉，对语言发展有益。',
      '力度控制：孩子需要学习是用"呼"的长气流，还是用"噗"的短促气流，来达到不同的效果。',
      '安全卫生：确保羽毛是干净的，或者用纸巾、棉花球等轻盈的物品代替。',
      '避免吸入：提醒孩子是用嘴巴向外吹气，而不是用鼻子吸气。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保羽毛干净卫生，避免吸入。',
    extensions: null
  }
]

async function addGamesSet2() {
  try {
    console.log('开始添加游戏86-95和105...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = gamesSet2.filter(game => {
      const isDuplicateId = existingGameIds.has(game.id)
      const isDuplicateName = existingGameNames.has(game.name)
      
      if (isDuplicateId || isDuplicateName) {
        console.log(`跳过重复游戏: ${game.name}`)
        return false
      }
      return true
    })

    console.log(`准备添加 ${newGames.length} 个新游戏`)

    if (newGames.length === 0) {
      console.log('没有新游戏需要添加')
      return
    }

    const { data, error } = await supabase
      .from('games')
      .insert(newGames)
      .select('id, name')

    if (error) {
      console.error('批量插入游戏时出错:', error)
      return
    }

    console.log(`✅ 成功添加 ${data.length} 个游戏！`)
    console.log('新添加的游戏:')
    data.forEach((game, index) => {
      console.log(`${index + 1}. ${game.name}`)
    })

  } catch (error) {
    console.error('脚本执行出错：', error)
  }
}

if (require.main === module) {
  addGamesSet2()
    .then(() => {
      console.log('游戏86-95和105添加完成')
      console.log('🎉 所有新游戏添加完成！')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}