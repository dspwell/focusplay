import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const games206to225 = [
  {
    id: 'yes-no-detective-206',
    name: '我猜我猜：是或不是大侦探（等候谜语站）',
    age_range: '3-4',
    scene: 'waiting',
    props: 'hands',
    focus: 'language',
    core_goal: '学习通过提问来收集信息，并根据线索进行逻辑推理和排除。',
    materials: '无。',
    steps: [
      '设定谜底：家长在心里想一个孩子非常熟悉的东西，比如"小狗"。',
      '讲解规则："我在心里想了一个东西，你可以问我关于它的问题，但我只会回答"是"或"不是"，看你能不能猜出来。"',
      '孩子提问：孩子开始提问。他可能会问："它是吃的吗？"（不是）；"它会叫吗？"（是）；"它有四条腿吗？"（是）。',
      '逻辑排除：家长可以引导他思考："哦，它会叫，还有四条腿，那它可能是什么呢？"帮助他一步步缩小范围，最终猜出答案。'
    ],
    tips: [
      '教他如何提问：这个游戏的精髓在于提问的质量。可以教孩子从大范围开始问，比如"是动物吗？"，再问细节特征。',
      '锻炼推理能力：孩子需要整合所有"是"和"不是"的线索，在大脑中进行信息处理和逻辑排除。',
      '角色互换：一定要让孩子想谜底，你来提问。这能锻炼他清晰地回答"是"与"不是"的能力。',
      '专注的对话：这是一个需要高度专注、你来我往的对话游戏，非常适合在等待时进行。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'route-copy-207',
    name: '路线复制器：一步不差走一遍（空地记忆道）',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'hands',
    focus: 'cognition',
    core_goal: '锻炼短时空间记忆和对动作序列的精确模仿。',
    materials: '一片空地。',
    steps: [
      '示范路线：家长先走一小段简单的路线，比如"向前走3步，然后向右转，再向前走2步。"',
      '下达任务：走完后，回到起点，对孩子说："你看清楚了吗？现在请你把我刚才走的路线，一模一样地走一遍。"',
      '孩子复制：孩子凭记忆，尝试复制出家长的行进路线。',
      '核对与纠正：家长在一旁观察，并给予提示："嗯，前3步走对了，然后我是向哪边转的呀？"'
    ],
    tips: [
      '从短到长：初期的路线序列要非常短，比如只有两步。随着孩子记忆能力的增强，再逐渐加长。',
      '语言标记：家长在走的时候，可以一边走一边用语言描述自己的动作，帮助孩子记忆。',
      '空间方位感：这是对"前后左右"等空间方位概念的实际应用和巩固。',
      '锻炼观察力：孩子需要非常专注地观察家长的每一个动作细节，才能成功复制。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保场地平整安全。',
    extensions: null
  },
  {
    id: 'word-association-208',
    name: '词语接龙龙：想到哪里说哪里（语文游乐场）',
    age_range: '3-4',
    scene: 'waiting',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼思维的联想能力和语言的流畅性。',
    materials: '无。',
    steps: [
      '讲解规则："我们来玩一个联想游戏。我说一个词，你根据我的词，说一个你能想到的、和它有关系的新词。"',
      '开始接龙：家长说："天空。"',
      '孩子联想：孩子可能会想到"云"、"蓝色"、"飞机"等等，任何合理的联想都可以。假设他回答"云"。',
      '继续接龙：家长再根据"云"，说一个新词，比如"下雨"。然后轮到孩子根据"下雨"进行联想。'
    ],
    tips: [
      '鼓励自由联想：不要限制孩子的答案，只要他能说出自己的理由，就是合理的。',
      '锻炼思维广度：这个游戏能很好地反映出孩子大脑中知识网络的连接情况。',
      '快速反应：游戏的乐趣在于快速的联想和接龙。',
      '亲子话题：这是了解孩子内心世界和知识储备的绝佳窗口。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'daily-best-209',
    name: '一天中的"最"：枕边小回顾（晚安电台）',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'hands',
    focus: 'social',
    core_goal: '学习梳理和表达一天中更复杂的情感和经历，发展自我认知。',
    materials: '无。',
    steps: [
      '睡前谈话：关灯后，家长问："宝宝，我们来聊聊天。你觉得今天发生的，最让你开心的一件事是什么？"',
      '分享"最开心"：听孩子分享后，家长也分享自己最开心的事。',
      '分享"小挑战"：接着问："那今天有没有哪件事，让你觉得有点难、或者有点挑战呢？"',
      '共情与支持：认真倾听孩子的"挑战"，并给予理解和支持："哦，原来搭那个积木那么难，但你没有放弃，最后还是成功了，你真了不起！"'
    ],
    tips: [
      '安全的分享环境：创造一个让孩子感觉无论说什么都会被接纳和理解的安全氛围。',
      '认知情绪：帮助孩子认识到，一天中既有开心的时刻，也有"有挑战"的时刻，这都是正常的。',
      '培养抗挫折能力：通过复盘"有挑战"的事件，并肯定他的努力，能帮助他建立面对困难的信心。',
      '增进亲子关系：这是非常高质量的亲子深度交流。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'body-printer-rolling-210',
    name: '身体打印机：滚滚到终点（客厅滚动道）',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼身体的滚动、平衡和空间感知能力。',
    materials: '一片柔软的地毯或草地。',
    steps: [
      '游戏设定：对孩子说："我们的身体现在是一台打印机，这张地毯是白纸，我们要从这头'打印'到那头去。"',
      '示范滚动：家长先示范，身体绷直，双臂可以举过头顶，然后像一根滚木一样，从地毯的一端，通过连续的侧身滚动，移动到另一端。',
      '孩子尝试：鼓励孩子也来尝试。',
      '花样打印：可以增加难度，比如要求在滚动时，身体不能弯曲，或者尝试"蛋式滚动"（抱住膝盖像一个蛋一样滚动）。'
    ],
    tips: [
      '前庭刺激：身体的滚动能给前庭系统带来强烈的刺激，有助于发展平衡感和空间感。',
      '核心力量：保持身体绷直滚动，需要很好的核心力量。',
      '安全场地：确保地面柔软，周围没有障碍物。',
      '充满乐趣：这个游戏非常有趣，能让孩子在欢笑中锻炼身体。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保地面柔软，周围没有障碍物。',
    extensions: null
  },
  {
    id: 'water-reflection-211',
    name: '倒影小镜子：水面变魔法（池塘观察站）',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'cognition',
    core_goal: '观察水中的倒影，初步理解"反射"的现象。',
    materials: '一个平静的小水坑或湖边。',
    steps: [
      '发现倒影：带孩子到水边，指着水中的倒影，用惊喜的语气说："宝宝快看，水里还有一个你！"',
      '互动观察：鼓励孩子对着水面挥挥手、做鬼脸，并观察水中的"自己"也做着同样的动作。',
      '物品倒影：可以将一片树叶或一个玩具放在水边，让孩子观察它们的倒影。',
      '讨论与命名：和孩子一起讨论这个有趣的现象，并告诉他这个水里的影子叫做"倒影"。'
    ],
    tips: [
      '安全第一：在水边活动，家长必须时刻抓紧孩子的手，确保绝对安全。',
      '选择平静水面：水面越平静，倒影越清晰。',
      '科学启蒙：这是对"光线反射"这一物理现象最直观、最诗意的启蒙。',
      '激发好奇心："水里为什么会有我？"这个问题能在孩子心中种下科学探索的种子。'
    ],
    duration: 15,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: '在水边活动，家长必须时刻抓紧孩子的手，确保绝对安全。',
    extensions: null
  },
  {
    id: 'bird-restaurant-212',
    name: '小鸟餐厅：远远地请用餐（公园友好角）',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'household',
    focus: 'gross',
    core_goal: '练习"撒"和"抛"的精细大动作，并学习与小动物友好相处。',
    materials: '一些安全的小鸟食物，如撕成小块的面包屑。',
    steps: [
      '寻找小鸟：找到有鸽子或麻雀等性情温和的鸟类聚集的地方。',
      '任务说明：对孩子说："看，小鸟们肚子饿了，我们来喂它们吃点东西吧。"',
      '示范动作：家长先抓起一小把面包屑，手臂向前挥动，将面包屑撒向小鸟的方向。',
      '孩子尝试：让孩子也抓起一小把，模仿"撒"的动作。'
    ],
    tips: [
      '尊重动物：教会孩子要远远地、轻轻地把食物撒过去，而不是追赶或惊吓小鸟。',
      '锻炼手部动作："抓起一把"和"松开手撒出去"是很好的手部精细大动作练习。',
      '观察与等待：和孩子一起安静地观察小鸟飞过来吃东西的样子，培养耐心。',
      '卫生提示：结束后要及时用湿巾或清水洗手。'
    ],
    duration: 20,
    difficulty: 1,
    activity_type: 'active',
    safety_notes: '结束后要及时用湿巾或清水洗手。',
    extensions: null
  },
  {
    id: 'wall-scribbling-213',
    name: '涂鸦墙墙墙：大手臂画世界（家里艺术墙）',
    age_range: '2-2.5',
    scene: 'home',
    props: 'paper',
    focus: 'gross',
    core_goal: '在垂直平面上进行涂鸦，锻炼肩部和手臂的大肌肉力量与稳定性。',
    materials: '一张大白纸（用胶带贴在墙上或门上），几支粗蜡笔。',
    steps: [
      '建立"画墙"：和孩子一起把大白纸贴好，告诉他："这是我们专属的涂鸦墙，可以在上面尽情画画！"',
      '站立作画：鼓励孩子站着，用大幅度的动作在纸上涂鸦。',
      '模仿画线：家长可以先画一些简单的长直线和曲线，让孩子模仿。',
      '自由表达：让孩子自由发挥，把整个手臂都动起来。'
    ],
    tips: [
      '垂直面的好处：在垂直面上画画，能更好地锻炼肩胛带的稳定性和手臂力量，为未来在桌面上进行精细书写打下基础。',
      '保护墙面：确保纸张足够大，或者在周围铺上报纸，保护墙面。',
      '大肌肉到小肌肉：这是儿童绘画发展从大肌肉参与到小肌肉精细控制的必经阶段。',
      '鼓励表达：欣赏并命名孩子的每一幅"大作"。'
    ],
    duration: 20,
    difficulty: 1,
    activity_type: 'active',
    safety_notes: '确保纸张足够大，或者在周围铺上报纸，保护墙面。',
    extensions: null
  },
  {
    id: 'bubble-chase-214',
    name: '泡泡追追追：风里抓星星（草地泡泡场）',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'household',
    focus: 'gross',
    core_goal: '锻炼视觉追踪、跑动和手眼协调能力。',
    materials: '泡泡水和泡泡棒。',
    steps: [
      '吹出泡泡：家长吹出漫天的泡泡。',
      '发布任务：对孩子说："快看！好多泡泡！我们去抓住它们！"',
      '追逐与拍打：鼓励孩子跑向泡泡，并尝试用手去拍破它们。',
      '变换玩法：可以让他尝试用脚踩破落在地上的泡泡。'
    ],
    tips: [
      '安全第一：选择平坦开阔的草地，避免孩子在追逐中摔倒。',
      '视觉追踪练习：漫天飞舞、轨迹不定的泡泡，是极好的视觉追踪目标。',
      '全身运动：跑、跳、伸手、抬头，能让孩子全身都得到锻炼。',
      '简单有效：这是最简单、最能带来纯粹快乐的户外活动之一。'
    ],
    duration: 15,
    difficulty: 1,
    activity_type: 'active',
    safety_notes: '选择平坦开阔的草地，避免孩子在追逐中摔倒。',
    extensions: null
  },
  {
    id: 'little-cleaner-215',
    name: '小小清洁工：把家变亮亮（家务练习站）',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '通过模仿家务劳动，培养初步的责任感和物归原位的习惯。',
    materials: '一块小抹布或一个儿童尺寸的玩具扫帚。',
    steps: [
      '邀请参与：家长在打扫卫生时，可以给孩子一块干抹布，说："宝宝，你来当妈妈的小帮手，把你的小桌子擦干净，好吗？"',
      '示范动作：家长演示擦桌子的动作。',
      '孩子模仿：让孩子自己去擦拭他能够到的、安全的家具表面。',
      '玩具归位：游戏结束后，引导他把散落的玩具"送回家"（放回玩具箱），这也是清洁工作的一部分。'
    ],
    tips: [
      '过程大于结果：孩子可能擦不干净，甚至越擦越乱，重点是让他体验"参与"和"负责"的过程。',
      '赋予价值感：让他感觉到，他的劳动对家庭是有贡献的。',
      '生活自理：这是培养良好生活习惯的开始。',
      '具体的指令：指令要具体，比如"我们把这个积木放进箱子里"，而不是模糊的"把玩具收拾好"。'
    ],
    duration: 15,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'clay-snail-216',
    name: '橡皮泥蜗牛：卷卷壳工坊（手指精灵屋）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '练习将长条状物体卷起来的精细动作，锻炼双手协作。',
    materials: '彩泥。',
    steps: [
      '搓长条：先和孩子一起，将一块彩泥在桌上搓成一根长长的"面条"。',
      '示范卷曲：家长拿起"面条"的一端，向内慢慢地、紧实地卷起来，形成一个螺旋形，说："看，我们来做一个蜗牛的壳。"',
      '孩子尝试：给孩子一根新的"面条"，让他自己尝试卷。',
      '完成作品：卷好"壳"之后，可以再搓一个小条，安在下面当蜗牛的身体，一个完整的蜗牛就做好了。'
    ],
    tips: [
      '双手协作：卷的动作需要一只手固定中心，另一只手进行缠绕，对双手协作要求很高。',
      '锻炼指尖控制：需要用指尖的力量和灵活性来控制卷曲的弧度和松紧。',
      '主题拓展：卷起来的形状可以是"棒棒糖"、"蚊香"或者"太阳"。',
      '耐心培养：这是一个需要静下心来慢慢完成的活动。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保彩泥安全无毒。',
    extensions: null
  },
  {
    id: 'carpet-fishing-217',
    name: '地毯小鱼塘：磁力钓钓乐（专注力码头）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'gross',
    core_goal: '锻炼手眼协调、手臂的稳定性和对目标的瞄准能力。',
    materials: '玩具磁力钓鱼竿和几条小鱼。',
    steps: [
      '布置"池塘"：将所有小鱼散落在地毯上。',
      '任务说明：对孩子说："我们今天来比赛钓鱼，看谁钓得又快又多！"',
      '示范钓鱼：家长演示如何握住鱼竿，将带有磁铁的"鱼饵"慢慢地、稳定地靠近小鱼嘴巴上的磁铁，直到它们"吸"在一起。',
      '孩子操作：让孩子自己尝试。'
    ],
    tips: [
      '锻炼稳定性：孩子需要控制住手臂的晃动，才能成功地让两块磁铁相吸。',
      '专注力训练："钓鱼"需要孩子在一段时间内，将注意力高度集中在鱼竿和目标鱼上。',
      '数数练习：每钓上一条鱼，都可以和他一起数数。',
      '轮流比赛：可以和孩子轮流钓，或者规定时间内看谁钓得多，增加竞技性。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'material-detective-218',
    name: '这是什么做的？材质小侦探（客厅实验台）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '学习根据"材质"这一属性对物品进行分类。',
    materials: '几样由不同单一材质制成的物品，如一个木头积木、一个塑料杯子、一本纸质书、一件金属勺子。',
    steps: [
      '引入材质概念：家长拿起木头积木，敲一敲，说："这是'木头'做的。"再拿起塑料杯子，说："这是'塑料'做的。"',
      '建立"家"：将积木和杯子分开放，作为"木头之家"和"塑料之家"。',
      '开始分类：家长再拿起一样新的木制玩具，问孩子："你看，它也是木头做的，它应该去哪个家呀？"',
      '孩子操作：鼓励孩子将其他物品（如纸板书、塑料玩具）也送回各自的"材质之家"。'
    ],
    tips: [
      '从两种材质开始：初期只区分两种对比鲜明的材质，如木头和塑料。',
      '多感官分辨：引导孩子通过看、摸、敲等多种方式来分辨不同材质。',
      '抽象归类：理解"积木和勺子虽然用途和形状都不同，但它们都是木头做的"是抽象归类能力的一大步。',
      '生活观察：鼓励孩子在生活中，也去发现和分辨不同物品的材质。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'whisper-relay-219',
    name: '传话咬耳朵：悄悄话快递（客厅电台）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼听觉短时记忆和准确的语言复述能力。',
    materials: '至少三位家庭成员。',
    steps: [
      '游戏开始：大家坐成一排或一圈。第一个人（家长）凑到第二个人（孩子）耳边，用悄悄话的形式，说一个非常简短的句子，比如"宝宝爱吃苹果"。',
      '开始传递：孩子需要再凑到第三个人（另一位家长）耳边，将他听到的悄悄话复述出来。',
      '揭晓答案：最后一个人大声说出他听到的内容，然后第一个人公布原始的句子，看看在传递过程中有没有发生变化。',
      '轮换顺序：轮换说悄悄话的起始人。'
    ],
    tips: [
      '句子要简短：对于初学者，传递的句子必须非常简短，最好是3-4个字。',
      '听觉专注力：为了听清悄悄话，孩子需要高度集中他的听觉注意力。',
      '记忆与复述：游戏的核心是"记住听到的内容"并"准确地复述出来"。',
      '增加趣味性：传递过程中发生的"走样"和"变形"，是这个游戏最大的乐趣来源。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'thank-you-sorry-220',
    name: '谢谢你，对不起：礼貌小剧场（玩偶舞台）',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '在情景剧中，学习在恰当的场合使用"谢谢"和"对不起"。',
    materials: '几个毛绒玩具。',
    steps: [
      '"谢谢"情景：家长操控一只小熊，递给另一只小兔一个"胡萝卜"（一个小积木）。然后引导孩子："小兔收到了礼物，应该说什么呀？"（谢谢）。',
      '"对不起"情景：家长操控小熊在走路时不小心踩到了小兔的脚。引导孩子："小熊应该怎么说？"（对不起）；"小兔应该怎么回答？"（没关系）。',
      '孩子主导：让孩子来导演一出情景剧，并有意识地在剧中安排需要说"谢谢"和"对不起"的情节。',
      '轮流练习：更换玩偶角色，反复练习两种礼貌用语的使用场景。'
    ],
    tips: [
      '情景化学习：在具体的情景中学习社交礼仪，比空洞的说教有效得多。',
      '明确适用场景：帮助孩子理解，"得到帮助或礼物时"要说谢谢，"给别人带来麻烦时"要说对不起。',
      '情绪与语言的连接：将"开心、感激"的情绪和"谢谢"联系起来，将"内疚、抱歉"的情绪和"对不起"联系起来。',
      '家长的榜样作用：家长在日常生活中，也要经常、真诚地对孩子和家人使用这些礼貌用语。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'coin-sorting-221',
    name: '硬币分分分：小眼睛找不同（餐桌研究所）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '根据大小、颜色、图案等细微差别，对相似物品进行分类。',
    materials: '一些不同面值的真实硬币（确保干净），几个小盘子。',
    steps: [
      '观察与比较：先拿出两种差异最大的硬币（比如一元和一角），和孩子一起讨论它们的不同之处（大小、颜色、图案、厚薄）。',
      '开始分类：将一小堆混杂的硬币倒在桌上，对孩子说："我们把所有'一元'的硬币放在这个盘子里，所有'一角'的放在那个盘子里。"',
      '孩子操作：让孩子自己根据特征进行分类。',
      '增加难度：熟练后，可以加入"五角"的硬币，进行三分类。'
    ],
    tips: [
      '安全卫生：游戏前后必须彻底洗手。全程监护，防止孩子将硬币放入口中。',
      '精细观察力：分辨不同硬币之间的细微差别，对观察力的要求很高。',
      '财商启蒙：这是孩子认识真实货币的第一次接触。',
      '生活应用：可以在购物后，让孩子帮忙整理钱包里的硬币。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '游戏前后必须彻底洗手。全程监护，防止孩子将硬币放入口中。',
    extensions: null
  },
  {
    id: 'collaborative-drawing-222',
    name: '合作大画布：一起画花园（地上画画垫）',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'social',
    core_goal: '学习在同一个空间内与他人合作，协商分工，共同完成一件作品。',
    materials: '一张大画纸，一套彩笔。',
    steps: [
      '确定主题：和孩子一起商量："我们今天一起来画一个大花园，好不好？"',
      '协商分工："那你想画什么？我想画太阳和云。你可以画花和草。"',
      '开始创作：两人在同一张画纸上，同时开始画自己负责的部分。',
      '欣赏与融合：画的过程中，可能会出现"你的云飘到我的太阳上了"这种情况，引导孩子协商解决，并欣赏最终融合在一起的、独一无二的合作画。'
    ],
    tips: [
      '学习协商："我们画什么？""你画哪部分，我画哪部分？"这些都是非常重要的社交协商练习。',
      '尊重他人空间：在同一张纸上画画，需要学习尊重对方的创作空间。',
      '接受与融合：学习接受他人的想法和创作，并将其与自己的融合在一起。',
      '共同的成就感："这是'我们'一起画的"，能带来比个人创作更强的集体荣誉感。'
    ],
    duration: 25,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'chopsticks-practice-223',
    name: '筷子夹夹乐：小手功夫课（餐桌训练营）',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '学习使用筷子的基本方法，锻炼手指的高度协调和力量。',
    materials: '一双儿童学习筷，一些容易夹取的大块物品（如积木、棉花球、切成大块的水果）。',
    steps: [
      '学习握筷：家长先教孩子如何正确地握住学习筷。',
      '夹取练习：先从最大、最容易的棉花球开始，让孩子尝试用筷子将它夹起，并移动到另一个碗里。',
      '增加难度：熟练后，可以换成稍有重量的积木，或者表面光滑的水果块。',
      '用餐实战：当孩子掌握基本技巧后，可以在吃饭时，鼓励他尝试用学习筷夹一些大块的、容易夹的菜。'
    ],
    tips: [
      '从学习筷开始：儿童学习筷通常有指环辅助，能帮助孩子更快地掌握正确姿势。',
      '极高的协调性要求：使用筷子需要五根手指以一种非常复杂的方式协同运动，是最高级的精细动作之一。',
      '耐心与鼓励：孩子在学习过程中会遇到很大困难，家长需要给予极大的耐心和持续的鼓励。',
      '文化传承：使用筷子也是一种文化的传承。'
    ],
    duration: 20,
    difficulty: 4,
    activity_type: 'quiet',
    safety_notes: '确保筷子头部钝化，避免戳伤。',
    extensions: null
  },
  {
    id: 'animal-baby-matching-224',
    name: '我是谁的宝宝？动物亲子配对（沙发图卡台）',
    age_range: '3-4',
    scene: 'home',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '学习动物和其幼崽的对应关系，丰富词汇量。',
    materials: '一些动物妈妈和动物宝宝的配对卡片（如：母鸡和小鸡，狗和狗崽，猫和猫崽）。',
    steps: [
      '引入概念：家长拿出"母鸡"和"小鸡"的卡片，说："这是鸡妈妈，这是鸡宝宝，它们是一家人。"',
      '配对游戏：将所有卡片打乱，让孩子进行"动物妈妈找宝宝"的配对游戏。',
      '学习名称：在配对时，教给孩子不同动物幼崽的专属名称，比如"小狗的宝宝叫'狗崽'"，"马的宝宝叫'马驹'"。',
      '反向提问：家长可以说："我想找一找'小鸭子'的妈妈，你知道是谁吗？"'
    ],
    tips: [
      '知识性：这是一个知识性很强的游戏，能增加孩子的生物学常识。',
      '词汇扩展：帮助孩子学习更多关于动物的词汇。',
      '生活观察：可以在动物园或农场里，和孩子一起真实地观察动物和它们的宝宝。',
      '亲情教育：游戏本身也传递了"妈妈和宝宝"之间亲密的亲情关系。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'long-jump-champion-225',
    name: '跳远小冠军：一跃更远（户外起跳线）',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '挑战立定跳远的最大距离，锻炼腿部爆发力和落地缓冲能力。',
    materials: '一片平坦安全的场地，可以用一根绳子或粉笔做起跳线。',
    steps: [
      '热身运动：先和孩子一起做一些简单的热身，如原地跳、高抬腿。',
      '示范标准动作：家长示范标准的立定跳远动作：双脚与肩同宽，屈膝下蹲，双臂后摆，然后用力向前上方跳出，落地时屈膝缓冲。',
      '孩子挑战：让孩子从起跳线开始，用力向前跳。',
      '记录与超越：孩子跳出后，可以在他的落脚点做一个标记。然后鼓励他下一次尝试"跳得比这个标记更远一点"，挑战自我。'
    ],
    tips: [
      '安全第一：确保场地平坦、无障碍物，落地时不会滑倒。',
      '强调落地缓冲：一定要教孩子落地时膝盖要弯曲，用以缓冲对膝盖的冲击。',
      '激发好胜心："超越自己"能极大地激发孩子的好胜心和运动潜能。',
      '全身性爆发力：立定跳远是锻炼全身爆发力的黄金动作。'
    ],
    duration: 20,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保场地平坦、无障碍物，落地时不会滑倒。强调落地缓冲技巧。',
    extensions: null
  }
]

async function addGames206to225() {
  try {
    console.log('开始添加游戏206-225...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = games206to225.filter(game => {
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
  addGames206to225()
    .then(() => {
      console.log('游戏206-225添加完成')
      console.log('🎉 所有40个游戏（186-225）添加完成！')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}