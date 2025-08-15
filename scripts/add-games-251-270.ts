import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const games251to270 = [
  {
    id: 'blind-explorer-team-251',
    name: '🙈🐘 盲眼探险队：摸摸大秘密',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '理解"整体"与"部分"的关系，学习通过整合多方信息来形成全面认知。',
    materials: '一条蒙眼布，一个较大的、特征丰富的物体（比如一个毛绒大象、爸爸的身体）。',
    steps: [
      '游戏引入：给孩子讲"盲人摸象"的成语故事。',
      '开始摸象：将孩子的眼睛蒙上，引导他去触摸"大象"（比如爸爸）的某一个部位。',
      '描述部分：让他描述自己摸到的感觉和形状，并猜测这是什么。比如摸到腿，他可能会说"我摸到了一个又粗又圆的柱子"。',
      '整合信息：让家里其他成员也来"摸象"，并描述自己摸到的部位。最后，摘下眼罩，让孩子看到物体的全貌，并和他讨论："为什么刚才每个人说的都不一样？因为我们都只摸到了一部分。"'
    ],
    tips: [
      '培养全局观：让孩子直观地理解"片面"和"全面"的区别。',
      '锻炼触觉描述：孩子需要用丰富的语言，来描述他看不见但摸得到的感觉。',
      '倾听他人：游戏需要认真倾听每个人的描述，并尝试在大脑中将这些碎片化的信息整合起来。',
      '家庭同乐：这是一个非常有趣的家庭集体游戏。'
    ],
    duration: 20,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'family-broadcaster-252',
    name: '🗞️🎤 家庭小主播：今天发生了…',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '学习有条理地、有顺序地向他人复述一件刚刚发生的事情。',
    materials: '无。',
    steps: [
      '设定情景：比如，爸爸刚下班回家。妈妈可以对孩子说："宝宝，你来当家里的小小新闻官，去跟爸爸报道一下，今天下午我们都做了什么好玩的事情。"',
      '组织语言：孩子需要在大脑中回忆下午的经历，并尝试将它们组织成语言。',
      '进行"报道"：孩子向爸爸进行复述。',
      '鼓励与补充：爸爸妈妈要认真倾听，并给予鼓励。如果孩子有遗漏，可以提示他："你是不是忘了我们还吃了冰淇淋呀？"'
    ],
    tips: [
      '锻炼叙事能力：这是对叙事能力的直接锻炼，即"在什么时间、和谁、做了什么事、结果怎么样"。',
      '提升记忆与逻辑：孩子需要按时间顺序来整理自己的记忆。',
      '增强表达自信：当家人都认真地听他"报道"时，能极大地增强他的表达自信。',
      '家庭沟通：这是一个非常好的增进家庭成员之间信息同步和情感交流的日常活动。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'body-radio-station-253',
    name: '🤫🕺 身体小电台：无声大剧场',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'social',
    core_goal: '学习识别和理解非语言的身体信号（Body Language）。',
    materials: '无。',
    steps: [
      '情景表演：家长不说话，只用身体动作和表情来表演一个情景。比如，双手抱在胸前、皱着眉头、跺着脚。',
      '孩子解读：问孩子："你看看妈妈，猜猜我现在是什么心情？"（生气）。',
      '变换情景：家长可以表演各种情景，比如抱着胳膊发抖（冷）、不停地看手表（着急）、抱着肚子（肚子疼）。',
      '角色互换：让孩子也来表演，你来解读他的"身体悄悄话"。'
    ],
    tips: [
      '情商教育：能够读懂他人的"身体语言"，是高情商的重要表现。',
      '非语言表达：也鼓励孩子用身体来表达那些他可能说不出口的感受。',
      '提升观察力：锻炼孩子对他人细微表情和姿态的观察能力。',
      '安全提示：这是一个在安全环境中，学习识别"危险信号"（如别人生气的表情）的好机会。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'traffic-carnival-city-254',
    name: '🚦🏎️ 交通狂欢城：信号冲冲冲',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'blocks_puzzle',
    focus: 'gross',
    core_goal: '在集体活动中，练习根据信号改变运动方向和速度，锻炼反应能力和规则遵守。',
    materials: '几个不同颜色的圆圈卡片（或直接用口令），一片开阔地。',
    steps: [
      '角色分配：所有参与者都是"小汽车"，家长是"交通指挥员"。',
      '讲解规则："大家可以在场地上随便开，但是要听我的指令。看到绿色圆圈，就全速前进；看到黄色圆圈，就要像慢动作一样慢慢开；看到红色圆圈，就要立刻刹车停住！"',
      '开始游戏：指挥员举起不同颜色的卡片，所有"小汽车"需要根据信号做出反应。',
      '增加指令：可以增加更多指令，比如"听到喇叭声就要倒车"、"看到蓝色就要去加油站（指定地点）"。'
    ],
    tips: [
      '锻炼大脑执行功能：游戏需要大脑在运动中，不断地接收新指令，并快速做出反应（加速、减速、停止、转向），是极好的大脑执行功能训练。',
      '集体规则：在集体中，需要注意避让其他"车辆"，培养空间感知和安全意识。',
      '趣味性强：这是一个能让所有孩子都兴奋起来的集体暖场游戏。',
      '消耗体力：能极大地满足孩子的运动需求。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保场地安全，避免碰撞。',
    extensions: null
  },
  {
    id: 'bedside-press-conference-255',
    name: '🛏️📰 枕边发布会：今天我来讲',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼围绕一个主题进行提问和回答的能力，并对一天的活动进行复盘。',
    materials: '无。',
    steps: [
      '角色分配：孩子是今天的新闻"主角"，爸爸妈妈是"记者"。',
      '开始提问：记者们开始就"今天"这个主题进行提问。例如："请问，您今天在幼儿园，吃得最满意的一道菜是什么？""请问，今天下午玩滑滑梯的时候，您的心情是怎样的？"',
      '主角回答：孩子需要就记者的问题进行回答。',
      '轮换角色：第二天，可以换爸爸或妈妈当"主角"，孩子来当"记者"。'
    ],
    tips: [
      '有趣的复盘：用新闻发布会的形式，能让一天活动的回顾变得充满仪式感和趣味性。',
      '锻炼提问能力：当孩子是"记者"时，能锻炼他提出具体、有内容的问题的能力。',
      '提升表达自信：作为全场唯一的"主角"，能极大地满足孩子的表现欲，提升他的语言表达自信。',
      '增进了解：家长可以通过这个游戏，了解到很多孩子在幼儿园或你看不到的场合发生的具体细节和感受。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'number-treasure-map-256',
    name: '🔢🕵️ 数字藏宝图：找找"5"在哪里',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'cognition',
    core_goal: '在众多干扰项中，准确识别并找出所有指定的数字符号。',
    materials: '一副扑克牌（只使用数字牌）。',
    steps: [
      '发布任务：对孩子说："我们是数字侦探，今天的任务是，从这些牌里，找出所有数字是5的牌。"',
      '示范寻找：家长先从牌堆里翻找，找到一张"5"，指给孩子看："看，我找到了一个5！"',
      '孩子寻宝：让孩子自己在牌堆里翻找，每找到一张"5"，就把它挑出来，放在一边。',
      '核对与点数：找完后，和孩子一起数一数，总共找到了几张"5"（一共4张），并确认是否都找对了。'
    ],
    tips: [
      '从少量牌开始：初期可以只用10-15张牌，降低寻找的难度。',
      '锻炼视觉搜索：孩子需要在相似的、杂乱的卡牌中，准确地捕获目标信息。',
      '数字识别巩固：这是在游戏中反复巩固数字符号识别能力的绝佳方式。',
      '变换目标：可以轮流寻找不同的数字，保持游戏的新鲜感。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'dot-painting-artist-257',
    name: '🖌️🔴 点点画派：棉签小画家',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '学习用点画的方式进行艺术创作，锻炼前三指的精细抓握和控制。',
    materials: '几根棉签，一些水彩颜料，一张画纸。',
    steps: [
      '准备"画笔"：棉签就是我们的"画笔"。',
      '示范点画：家长先在纸上画一个简单的轮廓（如苹果），然后用棉签蘸取红色颜料，在苹果轮廓内，用"点-抬起-点-抬起"的方式，点出很多小圆点来填充颜色。',
      '孩子创作：让孩子自己尝试用点画的方式，为不同的区域填充颜色。',
      '自由创作：鼓励孩子直接用棉签点画，创作一幅属于他自己的点彩画。'
    ],
    tips: [
      '锻炼三指抓握：像握笔一样握住细细的棉签，是对标准三指抓握姿势的很好练习。',
      '控制力度：孩子需要学习用合适的力度去"点"，才能创造出不大不小的漂亮圆点。',
      '艺术风格体验：让孩子体验一种不同于涂抹的、独特的艺术风格（点彩派）。',
      '清洁方便：棉签是一次性的，用完即弃，非常方便。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '使用安全无毒颜料。',
    extensions: null
  },
  {
    id: 'tumbler-academy-258',
    name: '🤸‍♂️🔔 小不倒翁学院：咕噜噜训练',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼核心腹部力量和身体的协调控制能力。',
    materials: '一张柔软的地毯或床上。',
    steps: [
      '准备姿势：让孩子坐在地上，双腿弯曲，双手抱住膝盖，身体向后蜷缩成一团。',
      '开始摇摆：引导孩子身体向后躺，利用身体的弧度，再自然地弹回坐姿，像一个不倒翁一样。',
      '家长辅助：初期，家长可以在他身后轻轻地推一下，帮他启动；在他弹回时，在身前轻轻地接一下，给他安全感。',
      '反复练习：鼓励孩子反复进行这个摇摆的动作。'
    ],
    tips: [
      '核心力量训练：这个动作需要强大的核心腹肌力量才能完成。',
      '身体的本体感：摇摆和滚动的过程，能给孩子的身体带来强烈的本体感和前庭刺激。',
      '安全第一：确保地面柔软，身后没有障碍物。',
      '充满乐趣：像不倒翁一样摇来晃去，本身就非常有趣。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保地面柔软，身后没有障碍物。',
    extensions: null
  },
  {
    id: 'magic-wand-imagination-259',
    name: '✨🪄 魔法棒想象屋：变变变大作战',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '激发无限的想象力，并用语言来描述自己的创造和愿望。',
    materials: '一根小木棍或一根手指当作"魔法棒"。',
    steps: [
      '游戏引入：家长拿起"魔法棒"，对孩子说："这是一根神奇的魔法棒，它可以把任何东西变成你想要的样子！我们先来试试。"',
      '家长示范：家长用魔法棒指着一张椅子，说："我要把椅子变成一头大象！"',
      '孩子想象：把魔法棒交给孩子，问他："你想把什么东西变成什么呀？"',
      '连续创造：鼓励孩子挥舞魔法棒，将房间里的各种东西都变成奇妙的、不存在的物体，并描述出来。'
    ],
    tips: [
      '想象力是核心：这个游戏没有任何限制，旨在让孩子的想象力自由飞翔。',
      '语言表达：鼓励孩子用丰富的语言去描述他"变"出来的新东西是什么样子的。',
      '愿望的投射：孩子想"变"出来的东西，往往是他内心愿望的一种投射。',
      '积极肯定：对孩子的每一个"魔法"都给予惊叹和赞赏。'
    ],
    duration: 15,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'comfort-station-260',
    name: '🐻💞 安慰站营业中：抱抱小伙伴',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '在角色扮演中，练习识别他人的悲伤情绪，并尝试做出安慰行为。',
    materials: '一个毛绒玩具。',
    steps: [
      '设定情景：家长拿起毛绒玩具（比如小熊），用悲伤的语气替它说话："呜呜呜，我找不到我的妈妈了，我好难过。"',
      '提出问题：家长问孩子："宝宝，你看小熊哭了，它好伤心，我们应该怎么办呀？"',
      '引导安慰行为：引导孩子做出具体的安慰行为，比如"我们可以给小熊一个拥抱吗？""你可以轻轻地拍拍它吗？""我们可以跟它说别哭了吗？"',
      '给予反馈：当孩子做出安慰行为后，家长要立刻用开心的语气替小熊说："谢谢你，宝宝，我现在感觉好多了！"'
    ],
    tips: [
      '同理心实践：这是将"感受他人情绪"转化为"做出安慰行动"的直接演练。',
      '提供具体方案：教给孩子在面对他人悲伤时，可以采取的几种有效的安慰方法。',
      '安全的演练场：在游戏中，孩子可以毫无压力地练习这些重要的社交技能。',
      '角色互换：让孩子扮演伤心的角色，家长来示范如何安慰他。'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'more-or-less-judge-261',
    name: '👀⚖️ 多还是少：豆豆快速判官',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '培养对数量的直观感受（数感），并进行"多"与"少"的快速判断。',
    materials: '一些豆子或任何其他小颗粒物。',
    steps: [
      '准备两堆：家长在桌上分出两堆豆子，确保一堆明显比另一堆多很多（比如5颗和20颗）。',
      '提出问题：对孩子说："我们来玩一个火眼金睛的游戏，不许数，你用眼睛看，猜一猜，哪一堆豆子更多呀？"',
      '孩子判断：让孩子用手指出来。',
      '验证答案：和孩子一起，通过一颗一颗地点数，来验证他的判断是否正确。'
    ],
    tips: [
      '数感培养："数感"是一种对数量的直观、快速的感知能力，是数学思维的重要基础。',
      '差异要明显：初期的数量差异一定要非常大，便于孩子判断。',
      '验证的重要性："数数"的验证过程，既能给出正确答案，又能反过来巩固他的点数能力。',
      '生活应用：可以在吃葡萄或饼干时，随时进行这个游戏。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保豆子安全，避免误食。',
    extensions: null
  },
  {
    id: 'cap-racing-262',
    name: '🧴🏁 盖子竞速赛：旋转小手腕',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼手腕旋转的灵活性和双手协作的熟练度。',
    materials: '几个干净的、大小不同的塑料瓶。',
    steps: [
      '准备工作：家长先将所有瓶盖都拧松一点点。',
      '比赛开始：对孩子说："我们来比赛，看谁先把所有瓶盖都拧开！"',
      '拧开与拧上：拧开后，再进行"把所有瓶盖都拧回去"的比赛。'
    ],
    tips: [
      '双手协作：一手固定瓶身，一手旋转瓶盖，需要两只手完美配合。',
      '锻炼手腕力量：旋转的动作能很好地锻炼孩子的手腕力量和灵活性。',
      '增加趣味性："比赛"的形式能极大地激发孩子的参与热情。',
      '安全提示：确保瓶子和瓶盖都是干净的，没有残留液体。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保瓶子和瓶盖都是干净的。',
    extensions: null
  },
  {
    id: 'three-legged-monster-263',
    name: '🦶🤝 三脚怪巡游：并肩小步走',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'household',
    focus: 'gross',
    core_goal: '学习与他人协调步伐和节奏，体验合作运动的乐趣。',
    materials: '一根长布条或一条丝巾。',
    steps: [
      '准备工作：家长和孩子并排站立，用布条将两人相邻的脚踝（如家长的右脚踝和孩子的左脚踝）绑在一起。',
      '讲解规则："我们现在变成一个有三条腿的怪兽了，需要一起喊口令才能走好路。"',
      '开始行走：家长搂着孩子的肩膀，开始喊口令："先迈中间的腿（被绑在一起的腿），再迈外面的腿！"',
      '协调步伐：和孩子一起，慢慢地、有节奏地向前走。'
    ],
    tips: [
      '沟通与协作：这是对团队协作和沟通能力的终极考验。',
      '身体协调：孩子需要学习去感知和配合另一个人的运动节奏。',
      '充满欢笑：游戏过程中会因为不协调而跌跌撞撞，充满了欢笑。',
      '安全第一：在平坦的草地上进行，步伐要慢，防止摔倒。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '在平坦的草地上进行，步伐要慢，防止摔倒。',
    extensions: null
  },
  {
    id: 'sound-detective-recording-264',
    name: '🔊❓ 声音侦探社·录音篇',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'language',
    core_goal: '在没有视觉提示的情况下，仅凭声音辨别日常生活中常见的事件。',
    materials: '用手机提前录下几种生活中常见的声音（如：冲马桶的声音、门铃声、电话铃声、烧水壶烧开的声音）。',
    steps: [
      '游戏开始：对孩子说："我们来玩一个听声音猜谜的游戏。"',
      '播放声音：播放第一段录音，比如冲马桶的声音。',
      '孩子竞猜：问孩子："你猜，这是什么声音呀？"',
      '揭晓答案与讨论：孩子猜出后，可以和他讨论"我们什么时候会听到这个声音？"'
    ],
    tips: [
      '听觉专注力：孩子需要排除环境干扰，将注意力完全集中在录音上。',
      '听觉记忆与联想：他需要在大脑中搜索自己的"声音数据库"，将听到的声音与生活中的某个场景或物品进行匹配。',
      '声音要典型：选择的录音一定要是具有典型特征的、孩子熟悉的声音。',
      '拓展玩法：可以录下家里不同成员（爸爸、奶奶）的声音，让他猜猜是谁在说话。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'exchange-meeting-265',
    name: '🔄🎁 交换小会客：友好交易所',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '在角色扮演中，学习如何有礼貌地向他人提出交换请求，并练习协商。',
    materials: '两个孩子都比较喜欢的玩具。',
    steps: [
      '情景设定：家长和孩子一人拿一个玩具。家长扮演孩子，表现出很想玩孩子手中玩具的样子。',
      '错误示范：家长先做一个错误示范，直接伸手去抢，然后问孩子："我这样做，你开心吗？"',
      '正确示范：然后，家长再做一个正确示范，说："宝宝，你手里的那个小汽车看起来真好玩，我能用我的积木和你交换玩一会儿吗？"',
      '练习协商：引导孩子做出回应，他可以同意，也可以不同意。如果不同意，可以继续协商，比如"那我们轮流玩，好吗？"'
    ],
    tips: [
      '提供语言范本：游戏的核心是为孩子提供具体、可操作的社交语言范本。',
      '尊重对方的"不"：教会孩子，提出请求后，对方有权利拒绝，我们要尊重对方的选择。',
      '双赢思维：引导孩子思考，如何能找到一个"我们俩都能开心"的解决方案。',
      '真实情景的预演：这是为孩子在幼儿园等集体环境中，解决玩具纷争做的最好预演。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'day-night-sorting-266',
    name: '🌞🌜 白天夜晚分分看：活动归队',
    age_range: '2.5-3',
    scene: 'home',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '理解白天和黑夜的基本特征，并能将日常活动与之对应分类。',
    materials: '一张大纸，中间画一条线。准备一些代表不同活动的图片卡片（如：起床、吃饭、去公园玩、洗澡、睡觉）。',
    steps: [
      '建立分类区：在大纸的一边画一个太阳（代表白天），另一边画一个月亮（代表黑夜）。',
      '任务说明：对孩子说："我们来看看这些卡片上的事情，哪些是白天做的，哪些是晚上做的。"',
      '示范分类：家长拿起"去公园玩"的卡片，说："我们是白天去公园玩。"然后把它贴在太阳那边。再拿起"睡觉"的卡片，贴在月亮那边。',
      '孩子操作：让孩子将剩下的卡片，逐一进行分类。'
    ],
    tips: [
      '时间概念启蒙：这是孩子对"时间"这一宏大概念最早的、最粗略的二分法认知。',
      '生活经验的梳理：帮助孩子梳理和巩固自己一天的生活流程。',
      '讨论与解释：在分类时，可以和他讨论"为什么我们不在晚上去公园玩呀？"（因为天黑了，看不见了）。',
      '自制卡片：用孩子自己活动的照片来制作卡片，会更有代入感。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'tweezers-lab-267',
    name: '🗜️🫘 小夹子实验室：豆豆搬家',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '学习使用镊子等延伸工具，进行高精度的抓取和放置。',
    materials: '一个儿童安全镊子，一些大的豆子或绒球，两个碗。',
    steps: [
      '学习使用工具：先教孩子如何正确地握持和使用镊子。',
      '开始夹取：让他尝试用镊子，从一个碗里夹起一颗豆子。',
      '精确放置：夹起后，再平稳地移动到另一个碗里，松开镊子，将豆子放下。',
      '分类挑战：可以在碗里混入两种颜色的豆子，让他用镊子将它们分类到不同的碗里。'
    ],
    tips: [
      '安全第一：必须在家长一对一监护下进行，防止孩子将豆子放入口中。镊子必须是儿童专用的、头是圆钝的。',
      '手部控制的极致挑战：使用镊子需要手指非常精细的力度控制和高度的手眼协调，是精细动作的极好训练。',
      '耐心和专注：这个活动需要极大的耐心，对培养孩子的专注力非常有益。',
      '生活应用：这是未来学习使用筷子的重要前置练习。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '必须在家长一对一监护下进行，防止孩子将豆子放入口中。',
    extensions: null
  },
  {
    id: 'wheelbarrow-team-268',
    name: '🛒💪 手推小车队：双手旅行',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼上肢、肩部和核心的支撑力量。',
    materials: '一片柔软、开阔的地面。',
    steps: [
      '准备姿势：让孩子趴在地上，用双手将上半身撑起。',
      '抬起双腿：家长在孩子身后，轻轻地抬起他的双腿。',
      '开始行走：鼓励孩子用双手的力量，像小车一样向前"行走"。',
      '设定距离：从很短的距离开始，比如向前走2-3步，然后慢慢增加。'
    ],
    tips: [
      '安全第一：家长抬起孩子双腿的位置，应该在他的大腿或臀部，而不是脚踝，这样更稳定、更安全。地面必须柔软。',
      '上肢力量训练：这是锻炼孩子上肢力量和肩胛带稳定性的黄金动作。',
      '核心力量：保持身体在行走中不塌陷，需要强大的核心力量。',
      '循序渐进：一定要根据孩子的能力，从最短的距离开始，绝不勉强。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '家长抬起孩子双腿的位置应该在大腿或臀部，地面必须柔软。',
    extensions: null
  },
  {
    id: 'memory-flash-269',
    name: '📖🔍 记忆闪现：画面找不同',
    age_range: '3-4',
    scene: 'waiting',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '锻炼视觉的瞬间记忆和对画面细节的快速捕捉能力。',
    materials: '一本画面丰富的绘本。',
    steps: [
      '快速观察：翻开一页，对孩子说："我们来玩一个记忆挑战，我只给你看5秒钟，你要尽量记住这上面有什么。"',
      '合上书本：5秒后，合上书。',
      '开始提问：问一个关于画面细节的具体问题，比如："刚才那页里，小猫的脖子上有没有戴铃铛？"或者"画里的太阳是什么颜色的？"',
      '验证答案：孩子回答后，再翻开书，一起验证答案。'
    ],
    tips: [
      '锻炼瞬间记忆：与可以长时间观察的记忆游戏不同，这个游戏专门锻炼"一瞥之间"的瞬间记忆能力。',
      '问题要具体：提问要针对画面中一个非常具体的、非主题性的细节。',
      '从长时到短时：观察时间可以从10秒，逐渐缩短到5秒、3秒。',
      '轮流出题：让孩子也来给你出题，他需要先自己记住一个细节，然后再考你，这对他的记忆和表达是双重锻炼。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'living-room-cinema-270',
    name: '🎬🍿 客厅影院变变变：买票进场',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'social',
    core_goal: '通过完整的仪式感，体验一项正式的家庭娱乐活动，学习在特定场合的社交规则。',
    materials: '纸和笔，爆米花或零食，电视或投影仪。',
    steps: [
      '制作电影票：和孩子一起，用纸和笔制作几张"电影票"，上面可以画上座位号。',
      '布置影院：拉上窗帘，关上灯，营造电影院的氛围。',
      '检票入场：家长扮演检票员，孩子需要拿着"电影票"才能"入场"，并找到自己的"座位"。',
      '观影与分享：和孩子一起，一边吃着爆米花，一边观看一部适合他年龄的动画短片或电影。结束后，可以一起讨论最喜欢哪个角色或情节。'
    ],
    tips: [
      '仪式感的重要性：完整的仪式感，能让一件普通的事情（看电视）变得特别、值得期待和回味。',
      '学习公共场合规则：可以在"电影院"里建立规则，比如"不能大声说话"、"不能随便走动"，是对公共场合礼仪的预演。',
      '家庭凝聚力：这是一个能创造温暖、美好家庭回忆的绝佳活动。',
      '内容选择：电影内容必须是积极、正面的，时长要符合孩子的年龄特点。'
    ],
    duration: 30,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  }
]

async function addGames251to270() {
  try {
    console.log('开始添加游戏251-270...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = games251to270.filter(game => {
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
  addGames251to270()
    .then(() => {
      console.log('游戏251-270添加完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}