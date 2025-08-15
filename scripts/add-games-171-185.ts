import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const games171to185 = [
  {
    id: 'poker-organizer-171',
    name: '扑克小管家：花色大搬家（客厅分类台）',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'cognition',
    core_goal: '学习根据多个维度（颜色、花色、数字）进行分类，发展高级归类能力。',
    materials: '一副扑克牌。',
    steps: [
      '按颜色分类：先进行最简单的二分法。对孩子说："我们把所有红色的牌放在这边，所有黑色的牌放在那边。"',
      '按花色分类：熟练后，增加难度。拿出四张不同花色的牌（红桃、方块、黑桃、梅花）作为"家"，让孩子将所有牌按花色进行四分类。',
      '按数字分类（挑战）：对于能力强的孩子，可以尝试按数字进行分类，比如"我们把所有数字是"3"的牌都找出来"。'
    ],
    tips: [
      '从简到繁：一定要遵循"颜色 -> 花色 -> 数字"的难度递增顺序。',
      '专注与耐心：将54张牌全部分类完毕，需要极大的专注和耐心。',
      '抽象符号认知：扑克牌上的花色和数字都是抽象符号，这个游戏能很好地促进孩子的符号识别能力。',
      '多种玩法：分类好的扑克牌，还可以用来玩"比大小"、"找朋友配对"等其他游戏。'
    ],
    duration: 20,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'emotion-actor-172',
    name: '情绪小演员：表情猜猜乐（家庭剧场）',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'social',
    core_goal: '学习用面部表情和肢体语言来表达和识别不同的情绪。',
    materials: '无。',
    steps: [
      '指定情绪：家长说："我们来当演员，现在请你表演"开心"。"',
      '孩子表演：孩子需要用自己的面部表情（微笑）和身体动作（蹦跳、拍手）来表现"开心"。',
      '反向竞猜：换家长来表演，比如做出皱着眉头、跺脚的样子，让孩子来猜"你现在是什么心情呀？"（生气）。',
      '讨论情绪：可以讨论更复杂的情绪，比如"紧张"、"骄傲"、"害羞"，并和孩子一起探讨这些情绪下，我们的身体和表情会是怎样的。'
    ],
    tips: [
      '非语言沟通：让孩子明白，除了语言，我们的身体和表情也在"说话"。',
      '情绪识别：学习识别他人的面部表情和肢体语言，是情商发展的关键。',
      '情绪管理基础：能准确地识别和命名自己的情绪，是进行情绪管理的第一步。',
      '安全地表达：在游戏中，可以安全地、夸张地去表现那些在日常中不被鼓励的"负面情绪"（如生气），有助于情绪的疏导。'
    ],
    duration: 12,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'number-connect-173',
    name: '数字点点连：藏图大揭秘（小画桌）',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '按照数字顺序连接点，锻炼运笔的精确控制和对数字序列的理解。',
    materials: '纸和笔，或儿童连线画练习册。',
    steps: [
      '准备画纸：家长在纸上画好一些带数字编号的点，这些点可以构成一个简单的图形。',
      '任务说明："这些点点里藏着一个秘密，我们需要按照从小到大的顺序，从1开始，把它们连起来，才能发现秘密哦！"',
      '开始连线：引导孩子找到数字"1"，然后找到"2"，用笔在它们之间画一条线。再从"2"找到"3"，画一条线……',
      '揭晓与涂色：当所有点都连接完毕，一个完整的图形（如小船、星星）出现后，可以和孩子一起给它涂上颜色。'
    ],
    tips: [
      '数字范围：初期的连线画，数字范围应在1-10之内。',
      '锻炼手眼协调：眼睛需要找到下一个目标数字，手需要精确地将线画到那个点上。',
      '数字顺序的巩固：这是在有趣的游戏中，反复练习数数和巩固数字顺序的绝佳方式。',
      '预见性：玩得多了，孩子会开始根据点的布局，去猜测最终可能会出现什么图形，锻炼预见性。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'no-yes-game-174',
    name: '不能说"是"的问答赛（等候站）',
    age_range: '3-4',
    scene: 'waiting',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼语言的否定句式和逻辑判断能力。',
    materials: '无。',
    steps: [
      '讲解规则："我们来玩一个"不说"是"的游戏。我问你问题，你的回答里，不能出现"是"或"对"，但意思要表达正确。"',
      '开始提问：家长问一个简单的是非题，比如："天空是蓝色的吗？"',
      '孩子回答：孩子不能回答"是"，他需要换一种方式来肯定，比如回答"天空当然是蓝色的"或者"没错"。',
      '增加难度：可以问一些否定性的问题，比如"大象没有鼻子，对不对？"孩子需要回答"不对，大象有长长的鼻子！"'
    ],
    tips: [
      '锻炼语言灵活性：迫使孩子跳出最直接的回答模式，去寻找更丰富的、同义的表达方式。',
      '逻辑判断：孩子需要先在大脑里判断问题的对错，然后再组织语言进行回答。',
      '思维挑战：这个游戏对大脑的抑制控制功能是一个小小的挑战。',
      '趣味性：当孩子不小心说出"是"或"对"时，就算"输"了，这种小小的竞技性让游戏更有趣。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'hopscotch-175',
    name: '跳跳房子：单脚双脚大冒险（操场/院子）',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼单脚跳、双脚跳的交替协调能力和身体平衡感。',
    materials: '用粉笔在地上画一个经典的"跳房子"格子（可以简化）。',
    steps: [
      '讲解规则：和孩子一起商定每个格子的跳法，比如单个的格子用单脚跳，两个并排的格子用双脚分开跳。',
      '示范玩法：家长先完整地跳一遍，展示如何交替使用单脚和双脚。',
      '孩子挑战：让孩子自己尝试。',
      '增加投掷物：可以加入一个沙包或小石子，先把它扔进第一个格子里，跳的时候需要跳过那个格子，跳回来时再把它捡起来。'
    ],
    tips: [
      '经典游戏：跳房子是全世界儿童都喜爱的经典户外游戏。',
      '全身协调：游戏需要跳跃、平衡、弯腰、拾物等多种动作，能极好地锻炼全身的协调能力。',
      '运动规划：孩子需要提前规划好下一步是该用单脚还是双脚。',
      '社交游戏：可以和多个小朋友一起轮流玩，学习等待和遵守规则。'
    ],
    duration: 20,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保地面平整安全，游戏全程监护。',
    extensions: null
  },
  {
    id: 'love-handcraft-176',
    name: '爱心小手作：送Ta专属礼（家中手工坊）',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'social',
    core_goal: '学习思考他人的喜好，并通过亲手制作来表达关心和爱意。',
    materials: '一张卡纸，彩笔，贴纸，胶水等手工材料。',
    steps: [
      '确定对象：对孩子说："我们来给奶奶（或任何一位家人）做一个惊喜礼物吧！"',
      '思考喜好：问孩子："你觉得奶奶最喜欢什么颜色？最喜欢什么动物？"引导他从对方的角度出发去思考。',
      '动手制作：和孩子一起，用他选择的颜色和图案，制作一张独一无二的贺卡。',
      '写上祝福：孩子可以在卡片上画画，家长可以替他写上一句祝福的话，并让他签上自己的"大名"。'
    ],
    tips: [
      '换位思考的实践：这是将"思考他人感受"转化为具体行动的绝佳实践。',
      '给予的快乐：让孩子体验到，用心为别人准备礼物，是一件比收礼物更让人感到快乐和满足的事情。',
      '珍贵的礼物：孩子亲手制作的、充满心意的礼物，比任何昂贵的玩具都更珍贵。',
      '表达爱的方式：教会孩子用制作礼物这种有形的方式，来表达自己无形的爱。'
    ],
    duration: 25,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保手工工具安全使用。',
    extensions: null
  },
  {
    id: 'story-crossroads-177',
    name: '故事分叉口：你会怎么做？（枕边故事厅）',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'social',
    core_goal: '通过对故事情节的探讨，培养解决问题的能力和道德判断的初步萌芽。',
    materials: '一本有情节冲突或角色面临选择的绘本。',
    steps: [
      '共读故事：读到故事中主角面临一个困境或选择时，暂停下来。',
      '提出问题：问孩子："如果你是故事里的小主角，遇到这种事情，你会怎么办？"',
      '探讨不同选择：和孩子一起讨论几种不同的做法，以及每种做法可能会带来什么样的后果。',
      '比较与学习：听完孩子的想法后，再继续阅读，看看故事里的主角是怎么做的，并和他讨论"为什么他会那么做？""你觉得谁的办法更好？"'
    ],
    tips: [
      '培养解决问题的能力：让孩子在安全的故事环境中，预先演练如何面对各种问题。',
      '道德启蒙：故事是向孩子传递"诚实"、"勇敢"、"友善"等价值观的最佳载体。',
      '批判性思维：鼓励孩子去思考和评判故事角色的行为，而不是全盘接受。',
      '深度阅读：这种互动式的阅读，能让孩子对故事的理解更深刻，记忆也更持久。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'book-librarian-178',
    name: '图书小管家：排排队回家（家庭书架）',
    age_range: '3-4',
    scene: 'home',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '学习整理和分类图书，培养爱护书籍和物归原位的好习惯。',
    materials: '一堆散乱的绘本。',
    steps: [
      '分配任务：对孩子说："哎呀，图书馆的书都乱了，请你这位小小图书管理员，来帮忙整理一下，好吗？"',
      '分类整理：和孩子一起，根据一定的规则对图书进行分类。比如，可以按大小（大书放一层，小书放一层），或者按主题（关于汽车的书放一起，关于动物的书放一起）。',
      '物归原位：将分类好的书，整齐地插回书架上。',
      '建立借阅规则：整理好后，可以和他一起建立"图书馆"的规则："每次只能拿一本书，看完后要把它送回原来的家。"'
    ],
    tips: [
      '培养秩序感：整理和分类的过程，能极大地满足孩子对秩序感的内在需求。',
      '爱护书籍：在整理时，可以教孩子如何轻拿轻放，如果书有破损，可以和他一起用胶带"帮小书看病"。',
      '生活自理：这是培养孩子自己事情自己做、物归原位等良好生活习惯的绝佳机会。',
      '赋予责任感：让他成为家庭"图书馆"的负责人，能极大地提升他的责任感和自信心。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'nature-treasure-bingo-179',
    name: '自然寻宝Bingo（公园探险站）',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'paper',
    focus: 'cognition',
    core_goal: '带着明确的目标清单，在自然环境中进行系统性的观察和寻找。',
    materials: '一张画着九宫格的纸，每个格子里画一个需要寻找的自然物（如：一片黄色的树叶、一颗圆形的石子、一朵小花、一根羽毛、一片三叶草等）。',
    steps: [
      '准备Bingo卡：出门前，和孩子一起制作好"大自然Bingo卡"。',
      '开始游戏：到户外后，拿出卡片，对孩子说："我们来玩Bingo游戏，每找到卡片上的一种东西，我们就在格子里打一个勾，看看我们能不能把所有格子都打满！"',
      '对照寻找：孩子需要对照着卡片上的图形，在真实环境中去寻找对应的物品。',
      '完成与庆祝：每找到一样并打上勾，都给予鼓励。当所有格子都打满勾时，一起大喊"Bingo!"来庆祝胜利。'
    ],
    tips: [
      '提升观察的目的性：从漫无目的的闲逛，变为有目的、有系统的"寻宝"，能极大地提升观察的效率和专注度。',
      '图形与实物的匹配：锻炼孩子将二维图形与三维实物进行匹配的能力。',
      '增加户外活动的乐趣：让普通的公园散步，变成一场充满挑战和惊喜的探险。',
      '卡片可复用：可以将卡片塑封，用可擦写的白板笔来打勾，这样就可以反复使用。'
    ],
    duration: 30,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保寻找的物品都是安全的。',
    extensions: null
  },
  {
    id: 'doll-dressing-180',
    name: '娃娃穿穿穿：暖暖更安心（娃娃更衣间）',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '练习穿、脱、拉、扣等基本动作，发展生活自理的预备技能。',
    materials: '一个大小适中的娃娃，几件宽松、易穿脱的娃娃衣服（最好有魔术贴或大纽扣）。',
    steps: [
      '情景导入：对孩子说："天气变冷了，娃娃会着凉的，我们帮它穿上衣服吧。"',
      '示范与分解：家长先拿起一件衣服，将动作分解，比如"先让娃娃的头钻过领口，再把一只胳膊伸进袖子里……"',
      '孩子尝试：让孩子自己尝试。他可能需要帮忙把袖口撑开，或者对准扣眼。',
      '练习脱衣服：穿好后，再练习如何把衣服脱下来。'
    ],
    tips: [
      '选择合适的衣物：娃娃的衣服一定要比娃娃本身大一些，开口要宽松，扣子要大，这样更容易成功。',
      '生活自理的演练：这是孩子学习自己穿脱衣服最安全、最没有压力的"演练场"。',
      '锻炼双手协作：穿衣服需要两只手非常紧密地配合。',
      '培养爱心：在为娃娃穿衣的过程中，也培养了孩子的爱心和责任感。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保娃娃和衣物安全。',
    extensions: null
  },
  {
    id: 'texture-printer-181',
    name: '小小拓印家：纹理魔术秀（彩泥实验台）',
    age_range: '2-2.5',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '通过按压，观察不同物体留下的独特纹理，锻炼手部力量。',
    materials: '一块压平的彩泥，以及各种有纹理的物品（如：一个玩具车的轮子、一把钥匙、一个叉子、一片树叶）。',
    steps: [
      '准备"画布"：将彩泥在桌上压成一块平整的"画布"。',
      '示范印花：家长拿起玩具车轮，在彩泥上用力滚一下，然后拿开，让孩子观察留下的车辙印。',
      '孩子探索：鼓励孩子用不同的"印章"，在彩泥上按压，创造出各种各样的纹理。',
      '竞猜游戏：家长可以在一块新的彩泥上印好几个印记，然后让孩子猜猜，每个印记分别是用什么东西印出来的。'
    ],
    tips: [
      '触觉与视觉的连接：让孩子将物品本身的触感和它留下的视觉印记联系起来。',
      '科学观察：这是一个简单的"形态拓印"实验，能培养孩子的观察力和对细节的关注。',
      '力度感知：孩子需要自己探索用多大的力气，才能压出最清晰的图案。',
      '创意无限：家里任何有纹理的安全物品，都可以成为这个游戏的"印章"。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保彩泥安全无毒，所有物品安全。',
    extensions: null
  },
  {
    id: 'footprint-trail-182',
    name: '留下小脚印：地面印记画（沙地/雪地）',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '理解身体动作与所留痕迹之间的因果关系，探索身体运动。',
    materials: '一片安全的沙地、雪地或湿润的土地。',
    steps: [
      '发现脚印：家长先在地上用力踩一下，然后指着留下的脚印，对孩子说："看！我留下了一个脚印！"',
      '孩子尝试：鼓励孩子也在地上踩出自己的小脚印。',
      '比较与观察：和孩子一起比较大人和小孩脚印的大小。',
      '创造痕迹：鼓励孩子用不同的方式移动，并观察留下的不同痕迹，比如跳跃、倒退走、画圈走。'
    ],
    tips: [
      '安全第一：确保地面安全，没有尖锐物。',
      '科学启蒙：这是对"力"和"形态"最直观的物理启蒙。',
      '身体认知：帮助孩子更好地感知自己的身体和动作。',
      '其他痕迹：还可以用手印、用树枝画画等，探索更多创造痕迹的方式。'
    ],
    duration: 15,
    difficulty: 1,
    activity_type: 'active',
    safety_notes: '确保地面安全，没有尖锐物。',
    extensions: null
  },
  {
    id: 'cup-magic-183',
    name: '杯子魔术：零食去哪儿了（餐桌魔术台）',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '巩固物体恒存性，并通过多重遮蔽增加寻找的难度。',
    materials: '三个不透明的杯子或小碗，一颗孩子喜欢的小零食（如小饼干）。',
    steps: [
      '展示宝物：让孩子看清楚你把小饼干放在了其中一个杯子下面。',
      '乾坤大挪移：在孩子的注视下，用非常缓慢的速度，将三个杯子互相交换位置。',
      '开始竞猜：停下来后，问孩子："宝宝，小饼干现在藏在哪个杯子下面呀？"',
      '揭晓答案：让孩子自己掀开他选择的杯子，无论对错，最终都把饼干奖励给他。'
    ],
    tips: [
      '视觉追踪：这个游戏需要孩子用眼睛紧紧地盯住那个藏有饼干的杯子，是极好的视觉追踪练习。',
      '从慢到快：初期交换位置的速度一定要非常慢，让孩子能跟上。',
      '增加杯子数量：熟练后，可以增加到四个杯子。',
      '保持趣味：家长可以配上紧张有趣的音效，增加游戏的戏剧性。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保零食安全，无误食风险。',
    extensions: null
  },
  {
    id: 'family-band-184',
    name: '家庭敲敲乐团（客厅音乐角）',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '探索不同物体发出的声音，体验敲击的乐趣和节奏感。',
    materials: '各种安全的、能发出不同声音的"乐器"，如塑料瓶、小锅盖、积木、铁盒等；两根筷子或小木棍作为"鼓槌"。',
    steps: [
      '布置乐队：将所有"乐器"摆在孩子面前。',
      '自由探索：先让孩子用"鼓槌"自由地敲击每一样东西，感受它们发出的不同声音。',
      '节奏模仿：家长先用鼓槌敲出一个非常简单的节奏，比如"咚-咚-咚咚咚"，然后鼓励孩子模仿。',
      '即兴演奏：可以播放一段音乐，和孩子一起，跟着音乐的节奏进行即兴的打击乐演奏。'
    ],
    tips: [
      '听觉分辨：帮助孩子分辨不同材质发出的声音（金属声、塑料声、木头声）。',
      '节奏感启蒙：这是培养孩子节奏感最直接、最有趣的方式。',
      '情绪宣泄：敲敲打打是孩子宣泄情绪的一种非常安全和有效的方式。',
      '安全提示：确保所有"乐器"都是安全的，不会被敲碎。'
    ],
    duration: 15,
    difficulty: 1,
    activity_type: 'active',
    safety_notes: '确保所有"乐器"都是安全的，不会被敲碎。',
    extensions: null
  },
  {
    id: 'blow-painting-185',
    name: '吹吹画：风的画笔（桌面画室）',
    age_range: '2-2.5',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '体验用吹气的方式进行艺术创作，锻炼口腔肌肉。',
    materials: '一张纸，一些较稀的、安全无毒的颜料，一根吸管。',
    steps: [
      '滴上颜料：在纸上滴几滴不同颜色的颜料。',
      '开始吹画：鼓励孩子用吸管对着颜料吹气，观察颜料在纸上散开形成的随机图案。',
      '命名作品：和孩子一起欣赏吹出的图案，并为它命名，比如"看，这像一朵烟花！"'
    ],
    tips: [
      '安全第一：必须强调是"吹"而不是"吸"，全程监护。',
      '口腔锻炼：对语言发展迟缓的孩子，这是一个很好的口腔肌肉功能锻炼。',
      '接受随机性：这是一个结果不可控的游戏，能帮助孩子学会欣赏随机和意外之美。'
    ],
    duration: 12,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '必须强调是"吹"而不是"吸"，全程监护。确保颜料安全无毒。',
    extensions: null
  }
]

async function addGames171to185() {
  try {
    console.log('开始添加游戏171-185...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = games171to185.filter(game => {
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
  addGames171to185()
    .then(() => {
      console.log('游戏171-185添加完成')
      console.log('🎉 所有35个游戏（151-185）添加完成！')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}