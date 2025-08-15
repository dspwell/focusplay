import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const games230to250 = [
  {
    id: 'crab-beach-walk-230',
    name: '🦀🏖️ 小螃蟹横着走：沙滩巡游赛',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼四肢的协调性、核心力量和逆向运动能力。',
    materials: '一片开阔的活动空间。',
    steps: [
      '示范动作：家长演示"螃蟹走"的姿势：坐在地上，双手在身后撑地，双脚踩地，然后将臀部抬起，使身体悬空。',
      '开始行走：用手和脚协调发力，横着向一侧移动。',
      '孩子模仿：鼓励孩子也做出同样的姿势并尝试移动。',
      '螃蟹比赛：可以设定一个终点，和孩子比赛谁的"螃蟹"走得快。'
    ],
    tips: [
      '锻炼核心和上肢力量：这个动作对孩子的核心腹部、背部以及手臂的支撑力量是很好的锻炼。',
      '身体协调性挑战：这是一种不常见的、手脚并用的逆向运动模式，对身体的协调性是很大的挑战。',
      '充满乐趣：笨拙又滑稽的螃蟹走，能带来很多欢笑。',
      '安全提示：确保地面防滑，没有障碍物。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保地面防滑，没有障碍物。',
    extensions: null
  },
  {
    id: 'compliment-spark-station-231',
    name: '💥💖 夸夸火花站：温暖能量场',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'social',
    core_goal: '学习发现和赞美他人的优点，并学习欣然接受他人的赞美，提升自信心和家庭凝聚力。',
    materials: '至少三位家庭成员。',
    steps: [
      '围坐一圈：所有家庭成员围坐在一起。',
      '选定"主角"：先选定一位家庭成员（比如孩子）作为今天被"优点轰炸"的主角。',
      '轮流赞美：从主角身边的人开始，轮流说出主角的一个优点。优点要具体，例如："我喜欢宝宝，因为他今天主动帮我拿了拖鞋。""我喜欢宝宝，因为他的笑声很好听。"',
      '主角的回应：主角在听取所有赞美后，需要对大家说"谢谢"。然后，再换下一位成员当"主角"。'
    ],
    tips: [
      '学习赞美：教会孩子如何发现别人身上具体的、积极的闪光点。',
      '提升自信：被家人用具体的语言肯定，能极大地提升孩子的自信心和自我价值感。',
      '学习接受赞美：教会孩子在被赞美时，大方地说"谢谢"，而不是害羞或否认。',
      '营造积极家庭氛围：这是一个能创造出极强积极能量场的家庭活动。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'shadow-friend-finder-232',
    name: '🌞👥 影子找朋友：迷路的小剪影',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'cognition',
    core_goal: '锻炼根据物体的轮廓进行匹配的能力，发展图形识别和抽象思维。',
    materials: '一张纸的一边画着几个物体的彩色实体图，另一边画着它们对应的黑色剪影，顺序打乱。',
    steps: [
      '任务说明：对孩子说："每个小动物都想找到自己的影子，但是影子都跑乱了，我们帮它们连线，找到自己的影子吧。"',
      '示范配对：家长先指着一个实体图（如小兔子），然后在另一边的剪影中找到兔子的轮廓，用笔在它们之间画一条连线。',
      '孩子操作：让孩子自己尝试为剩下的物体进行配对连线。'
    ],
    tips: [
      '锻炼图形识别能力：孩子需要忽略颜色和内部细节，只根据物体的外部轮廓来进行判断。',
      '从简单到复杂：初期的配对，物体的轮廓差异要非常大。熟练后，可以增加轮廓较为相似的干扰项。',
      '专注力训练：在多个剪影中寻找正确的那一个，需要很好的视觉搜索和专注力。',
      '自制卡片：可以用孩子熟悉的玩具来描画剪影，制作专属的配对卡。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'opposite-theater-233',
    name: '↔️🗣️ 反着来剧场：小脑筋倒着转',
    age_range: '3-4',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼大脑的抑制控制功能和逆向思维，将反义词概念应用到行动中。',
    materials: '无。',
    steps: [
      '讲解规则："我们来玩一个反着做的游戏。我说一个指令，你不能照着做，而是要做和它完全相反的动作。"',
      '开始游戏：家长说："请你站起来。"孩子需要做出"坐下"的动作。家长说："请你张开嘴巴。"孩子需要"闭上嘴巴"。',
      '快速指令：家长可以快速地、连续地发出指令，如"向前走"（孩子后退）、"举起你的左手"（孩子举右手或放下左手）、"大声笑"（孩子保持安静）。',
      '角色互换：让孩子来发指令，你来做相反的动作。'
    ],
    tips: [
      '大脑的"刹车"训练：这个游戏要求孩子抑制住"直接模仿"的本能冲动，先思考"相反的是什么"，再行动，是对大脑执行功能的绝佳训练。',
      '充满乐趣：游戏充满了因反应不过来而出错的笑料，非常有趣。',
      '巩固反义词：是在行动中巩固反义词概念的最好方式。',
      '随时可玩：不需要任何道具，随时随地可以开始。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'shoelace-training-234',
    name: '👟🎀 小鞋带穿穿队：系蝴蝶训练营',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '学习交叉穿鞋带的动作顺序，锻炼双手的灵活性和协调性。',
    materials: '一块画着鞋子形状、并打了孔的硬纸板，一根鞋带。',
    steps: [
      '准备工作：家长先将鞋带穿好最下面的一行。',
      '示范交叉：家长拿起一端的鞋带，演示如何将它交叉穿入另一边上面的孔里。',
      '孩子尝试：让孩子模仿，穿另一端的鞋带。',
      '交替向上：和孩子一起，一左一右，交替地将鞋带向上穿好。'
    ],
    tips: [
      '生活自理技能：这是孩子学习自己系鞋带非常重要的第一步。',
      '顺序与规律：交叉穿鞋带是一个有固定规律和顺序的活动。',
      '手眼协调：需要将细细的鞋带头，准确地穿入小小的孔中。',
      '耐心培养：这是一个需要极大耐心的精细活动。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'kangaroo-home-race-235',
    name: '🦘🏁 袋鼠妈妈回家路：蹦蹦冲刺赛',
    age_range: '3-4',
    scene: 'outdoor',
    props: 'household',
    focus: 'gross',
    core_goal: '锻炼双脚并拢连续跳跃的能力，以及核心力量和身体协调性。',
    materials: '一个结实的布袋或一个旧枕套。',
    steps: [
      '角色扮演：让孩子将双脚套进布袋里，双手抓住袋口，说："我们现在是袋鼠妈妈，要去接袋鼠宝宝回家啦！"',
      '开始跳跃：鼓励孩子用双脚并拢的方式，向前连续跳跃。',
      '设定终点：在不远处设定一个终点，和他比赛谁先跳到。'
    ],
    tips: [
      '安全第一：必须在平坦、柔软的草地上进行，周围不能有障碍物。',
      '锻炼核心力量：在袋子里保持平衡并向前跳跃，需要很强的核心腹部和大腿力量。',
      '充满乐趣：笨拙又努力的袋鼠跳，能带来无穷的乐趣。',
      '亲子竞赛：家长也可以用一个大袋子，和孩子一起比赛。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '必须在平坦、柔软的草地上进行，周围不能有障碍物。',
    extensions: null
  },
  {
    id: 'star-wish-pavilion-236',
    name: '🌟🗯️ 小星星许愿亭：悄悄说心事',
    age_range: '3-4',
    scene: 'bedtime',
    props: 'hands',
    focus: 'social',
    core_goal: '学习用语言表达自己内心的愿望和期待，增进亲子之间的理解。',
    materials: '无。',
    steps: [
      '引入话题：睡前，家长说："我们来玩一个许愿游戏，每个人都说一个自己最近的、小小的愿望。"',
      '家长示范：家长先说一个自己的愿望，比如："我希望这个周末能和你一起去公园野餐。"',
      '孩子分享：鼓励孩子也说出他的愿望，他可能会说"我想要一个奥特曼玩具"或者"我想明天还去坐小火车"。',
      '倾听与尊重：认真倾听孩子的愿望，并给予尊重和理解。可以和他一起讨论如何能实现这个愿望。'
    ],
    tips: [
      '了解孩子的内心：愿望是通向孩子内心世界最直接的窗口。',
      '区分愿望与现实：这是一个讨论"愿望"和"现实"的好机会。有些愿望可以努力实现，有些可能暂时无法实现。',
      '建立信任：当孩子愿意与你分享他最真实的愿望时，说明你们之间建立了深厚的信任关系。',
      '共同的期待：分享愿望能为家庭创造共同的期待和目标。'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'strongman-warehouse-237',
    name: '⚖️📦 小力士搬仓库：轻重排队赛',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '通过亲手掂量，感知物体的重量差异，并进行排序。',
    materials: '3-4个外观相同但重量差异巨大的瓶子（可以在里面分别装入棉花、水、沙子），或几块大小不同、材质相同的积木。',
    steps: [
      '引入概念：家长拿出最轻和最重的两个瓶子，让孩子两只手一边一个掂一掂，问他："你觉得哪个更重？"',
      '命名概念：告诉他"重"和"轻"的概念。',
      '排序任务：将所有瓶子打乱，对孩子说："我们来帮它们排队，从最轻的排到最重的。"',
      '孩子操作：让孩子通过两两比较、掂量的方式，最终将所有瓶子按重量顺序排列好。'
    ],
    tips: [
      '排除视觉干扰：使用外观相同的瓶子，能迫使孩子完全依靠"重量感"这一单一维度来进行判断。',
      '锻炼感知觉：这是对孩子手臂肌肉感知能力的精细训练。',
      '科学思维：排序的过程，是严谨的逻辑思维过程。',
      '生活应用：可以在帮妈妈拿东西时，让他感受一下"这袋苹果比那袋橘子重"。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'three-word-magic-box-238',
    name: '📚🎲 三词魔法盒：脑洞串串烧',
    age_range: '3-4',
    scene: 'waiting',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼在有限的元素下，进行逻辑串联和想象创造的能力。',
    materials: '无。',
    steps: [
      '给出三个词：家长给出三个完全不相关的词语，比如"小猪"、"月亮"、"冰淇淋"。',
      '示范编故事：家长先用这三个词，编一个非常简短、但逻辑通顺的小故事："有一只小猪，它坐着火箭飞到了月亮上，发现整个月亮都是用冰淇淋做的！"',
      '孩子尝试：换一组新的词，鼓励孩子也来编一个。'
    ],
    tips: [
      '激发创造性联想：将不相关的元素，通过想象力强行联系在一起，是创造力的核心。',
      '锻炼语言组织能力：孩子需要将零散的词语，组织成一个有基本情节的句子或故事。',
      '从两个词开始：如果三个词太难，就先从两个词开始。',
      '幽默与乐趣：这个游戏能创造出无数荒诞又有趣的故事。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'clay-workshop-239',
    name: '🧱🎨 彩泥小工坊：泥巴变变变',
    age_range: '3-4',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '学习使用简单工具在软性材料上进行刻画，锻炼手部精细控制。',
    materials: '彩泥，一些安全的"雕塑工具"，如一根牙签（需磨平尖端）、一把塑料餐刀、一个瓶盖。',
    steps: [
      '准备"泥胚"：先和孩子一起把彩泥做成一个比较大的形状，比如一个"大饼"或一个"土豆"。',
      '示范刻画：家长用牙签，在"大饼"上刻画出眼睛和嘴巴。',
      '孩子创作：鼓励孩子也用各种工具，在彩泥上进行刻画、按压、切割，创造出他想要的图案和纹理。'
    ],
    tips: [
      '工具的延伸：让孩子学习，工具是我们手的延伸，可以帮助我们完成更精细的工作。',
      '三维创作：从平面的绘画，进阶到立体的雕塑，能极大地发展孩子的空间感和创造力。',
      '安全第一：确保所有工具都是安全的，没有锋利的边缘。',
      '专注与艺术：这是一个能让孩子高度专注、沉浸在艺术创作中的安静活动。'
    ],
    duration: 20,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保所有工具都是安全的，没有锋利的边缘。',
    extensions: null
  },
  {
    id: 'home-explorer-bureau-240',
    name: '🏠🗺️ 家家探险局：我的小地图',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'cognition',
    core_goal: '学习用图形符号来代表真实的空间布局，发展空间认知和归属感。',
    materials: '一张大白纸，彩笔。',
    steps: [
      '确定范围：对孩子说："我们来画一张我们家的地图吧！"',
      '绘制布局：家长先画一个大的长方形代表整个家，然后在里面画出几个小方块，代表客厅、卧室、厨房等。',
      '添加家具：和孩子一起，在他的卧室方块里，画上他的小床；在客厅里，画上沙发和电视。',
      '标注"你在这里"：最后，可以画一个小人，代表孩子现在的位置，并和他讨论从他的房间到厨房需要怎么走。'
    ],
    tips: [
      '空间认知：这是将孩子熟悉的、立体的家，转化为抽象的、平面的地图的过程，对空间认知能力是极大的提升。',
      '符号化思维：帮助孩子理解，"一个方块"可以"代表"一张床，这是符号化思维的启蒙。',
      '家庭归属感：共同绘制家庭地图，能增强孩子对"家"这个整体概念的认知和归属感。',
      '生活应用：可以在地图上玩"藏宝游戏"，比如在地图的"沙发"位置画个叉，让他去真实的沙发寻找宝藏。'
    ],
    duration: 25,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'sponge-building-241',
    name: '🧽🏗️ 海绵搭搭乐：软绵摩天楼',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '体验用非常规、柔软的物品进行堆叠，锻炼手眼协调和平衡感知。',
    materials: '几块干燥、干净、大小不一的厨房海绵。',
    steps: [
      '引入材料：将海绵展示给孩子，让他捏一捏，感受其柔软、轻盈的特性。',
      '任务说明：对孩子说："我们来玩一个特别的盖房子游戏，看看这些软绵绵的砖块能盖多高。"',
      '示范堆叠：家长先将最大的一块海绵放在最下面，然后小心地将另一块叠在上面。',
      '孩子挑战：鼓励孩子自己尝试。他会发现，因为海绵很轻且不平整，堆叠起来需要比积木更多的专注和平衡技巧。'
    ],
    tips: [
      '安全无声：海绵倒塌时完全没有声音，也不会砸伤孩子，是一个非常安全、适合反复失败和尝试的游戏。',
      '锻炼手部感知：孩子需要用手感知海绵的重心，才能成功地将它们叠起来。',
      '科学启蒙：让他直观地感受到"底座大更稳固"的物理原则。',
      '拓展玩法：可以在洗澡时玩湿海绵的堆叠，体验不同的重量和质感。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'rolling-down-hill-242',
    name: '🌿🌀 小滚滚下山：草坡过山车',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '体验身体滚动的乐趣，提供强烈的前庭系统刺激，发展空间感。',
    materials: '一片干净、平缓、没有障碍物的草地斜坡。',
    steps: [
      '安全检查：家长先仔细检查斜坡，确保没有石头、树枝或其他危险品。',
      '示范滚动：家长先自己像一根滚木一样，从斜坡上滚下去，并表现出非常开心的样子。',
      '孩子尝试：让孩子也躺在斜坡顶端，家长可以在下方保护，鼓励他自己侧身滚动下来。',
      '亲子共滚：可以抱着孩子一起滚下来，分享这种天旋地转的快乐。'
    ],
    tips: [
      '安全第一：坡度一定要非常缓。家长必须在下方做好保护，防止孩子滚得太快或撞到东西。',
      '前庭刺激：身体的滚动和旋转，是对前庭系统（负责平衡和空间感）最强烈的刺激之一，对感官统合非常有益。',
      '建立勇气：这是一个能锻炼孩子勇气和冒险精神的绝佳活动。',
      '天气选择：选择天气晴朗、草地干燥的日子进行。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '坡度一定要非常缓。家长必须在下方做好保护。',
    extensions: null
  },
  {
    id: 'doll-checkup-station-243',
    name: '🧸🩺 娃娃体检站：找找眼鼻口',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'language',
    core_goal: '在第三方对象上进行身体部位的指认，巩固认知。',
    materials: '一个有清晰五官和四肢的娃娃。',
    steps: [
      '游戏开始：家长抱着娃娃，问孩子："我们来看看娃娃的身体吧。娃娃的眼睛在哪里呀？"',
      '孩子指认：引导孩子在娃娃的脸上指出眼睛。',
      '持续提问：依次提问娃娃的其他身体部位：鼻子、嘴巴、耳朵、手、脚。',
      '对比与联想：在指认娃娃的部位后，可以再让孩子指认一下自己对应的部位，说："娃娃有鼻子，宝宝也有鼻子。"'
    ],
    tips: [
      '对象转移：从认识自己的身体，转移到认识"他人"（娃娃）的身体，是认知能力的一小步提升。',
      '安全的环境：在一个没有压力的游戏环境中，孩子更愿意进行指认和回答。',
      '增加互动：可以假装给娃娃"洗脸"，一边洗一边说出部位的名称。',
      '词汇巩固：这是对身体部位词汇的反复巩固和应用。'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'piggy-restaurant-244',
    name: '🐷🥇 小猪餐厅开饭啦：金币咔啦啦',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼将扁平物体准确塞入狭窄缝隙的手眼协调能力。',
    materials: '一个小猪存钱罐，一些尺寸较大的安全"硬币"（如大的纽扣、棋子或玩具币）。',
    steps: [
      '情景设定：对孩子说："看，这只小猪肚子饿了，它最喜欢吃金币了，我们来喂它吧！"',
      '示范投币：家长拿起一枚"金币"，演示如何将它对准存钱罐的投币口，然后塞进去，可以配上"叮当"的声音。',
      '孩子操作：把"金币"交给孩子，让他自己尝试。',
      '取出与重复：喂完后，可以打开存钱罐的盖子，把所有"金币"倒出来，再玩一次。'
    ],
    tips: [
      '安全第一：确保"硬币"足够大，绝对没有误食风险。全程监护。',
      '锻炼手腕和手指：孩子需要调整手腕的角度，并用手指的力量，才能成功地将硬币塞进去。',
      '因果关系：让他理解"塞进去-听到声音-东西不见了-打开后又有了"这一连串的因果关系。',
      '专注力培养：反复进行这个简单的动作，能很好地培养孩子的持续性注意力。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保"硬币"足够大，绝对没有误食风险。',
    extensions: null
  },
  {
    id: 'color-matching-base-245',
    name: '🎨🔍 颜色找搭档：对对碰基地',
    age_range: '2.5-3',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '在有干扰项的情况下，根据颜色进行精确配对。',
    materials: '两套完全相同的彩色积木或卡片。',
    steps: [
      '布置场地：家长先从一套积木中，拿出红、黄、蓝三块，分开放好，作为"基地"。',
      '任务说明：将另一套所有积木（包含多种颜色）交给孩子，说："请你帮这三块积木，在你的积木堆里，找到和它们颜色一模一样的好朋友。"',
      '孩子寻找与配对：孩子需要在众多积木中，找出红色、黄色、蓝色的三块，并分别与"基地"的积木进行配对。',
      '增加难度：逐渐增加"基地"的颜色种类。'
    ],
    tips: [
      '锻炼视觉扫描：孩子需要在杂乱的背景中，有目标地去扫描和寻找特定颜色的物体。',
      '巩固颜色认知：通过反复的配对，巩固对基本颜色的认知。',
      '一一对应：这是对数学概念"一一对应"的直观理解。',
      '生活延伸：可以让孩子帮你配对袜子，或者在绘本中找出所有相同颜色的东西。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'treasure-adventure-246',
    name: '🗺️👣 寻宝大冒险：奇怪路挑战',
    age_range: '2.5-3',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '练习不同的行走姿态，锻炼身体的协调性和平衡感。',
    materials: '一片安全的开阔地。',
    steps: [
      '游戏引入：对孩子说："我们是去寻宝的探险家，路上会遇到各种奇怪的路，要用不同的方法才能走过去哦！"',
      '挑战"巨人路"："第一关是巨人路！"家长示范踮起脚尖，小心翼翼地向前走。',
      '挑战"矮人路"："第二关是矮人路！"家长示范弯下膝盖，像小矮人一样半蹲着走。',
      '挑战"螃蟹路"："第三关是螃蟹路！"家长示范横着向一侧走。'
    ],
    tips: [
      '身体控制：不同的行走姿态，需要调动身体不同的肌肉群，并进行精确控制。',
      '充满想象：角色扮演和情景设定能让简单的"走路"变得充满乐趣。',
      '鼓励创造：鼓励孩子自己发明新的"走路"方式，比如"大象路"（跺脚走）、"小蛇路"（S形路线走）。',
      '全身运动：这是一个很好的全身性协调运动。'
    ],
    duration: 20,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'whats-happening-detective-247',
    name: '👀❓ 发生了啥侦探社：现场复原',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'language',
    core_goal: '观察一个场景的前后变化，并用简单的语言描述出来。',
    materials: '几个玩具，比如一个小人、一辆车、一块积木。',
    steps: [
      '布置初始场景：家长先用玩具布置一个简单的场景，比如"小人站在积木旁边"，然后让孩子仔细观察。',
      '制造变化：让孩子闭上眼睛，家长迅速改变场景中的一个元素，比如把小人从"站着"变成"躺下"。',
      '观察与描述：让孩子睁开眼睛，问他："看，发生了什么变化？"引导他说出"小人摔倒了"。',
      '变换情景：可以制造各种变化，比如"小汽车开走了"、"积木被拿走了一块"等。'
    ],
    tips: [
      '锻炼观察力和记忆力：孩子需要记住初始场景的样子，才能发现其中的变化。',
      '推动语言发展：这个游戏迫使孩子不仅仅是命名物体，而是要去描述一个"事件"或"状态的改变"。',
      '从一个变化开始：初期只改变场景中的一个元素。',
      '角色互换：让孩子来制造变化，你来描述，更能激发他的参与感。'
    ],
    duration: 15,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'little-courier-248',
    name: '🧺🚚 小快递员出勤：任务运输站',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '学习在接受任务后，保持注意力直到任务完成，培养责任感。',
    materials: '无，利用家务场景。',
    steps: [
      '分配明确任务：家长在做饭或整理时，可以给孩子分配一个非常具体、单一的任务。例如："宝宝，你能帮妈妈把那个土豆，从菜篮里拿到厨房水池边吗？"',
      '孩子执行：孩子需要拿着土豆，从一个房间走到另一个房间，完成这个"运输"任务。',
      '给予感谢和肯定：任务完成后，要给予非常具体和真诚的感谢："太谢谢你了！你帮了妈妈一个大忙！"',
      '持续委派：在日常生活中，有意识地让孩子参与进来，让他负责一些力所能及的小事。'
    ],
    tips: [
      '任务要具体：任务必须是孩子能完全理解和独立完成的。',
      '培养任务意识：让他学习"接受任务 -> 执行任务 -> 完成任务"的完整闭环。',
      '提升家庭参与感：让孩子感觉到自己是家庭中一个有贡献的、重要的成员。',
      '建立自信：每一次成功地完成"妈妈交代的任务"，都是对他自信心的极大提升。'
    ],
    duration: 5,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'snowflake-factory-249',
    name: '❄️✂️ 雪花工厂：折折剪剪开',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '学习对称折叠和沿线裁剪，并通过最终展开的惊喜，激发空间想象力。',
    materials: '几张正方形的薄纸，一把儿童安全剪刀。',
    steps: [
      '对称折叠：家长先教孩子将正方形的纸，进行两次对角折，变成一个小的三角形。',
      '绘制与裁剪：家长可以在折好的三角形的两条直角边上，画一些简单的弧线或小三角，然后让孩子沿着画好的线进行裁剪。',
      '见证奇迹：剪好后，引导孩子小心翼翼地、一层一层地将纸打开。',
      '欣赏与创造：和孩子一起欣赏展开后出现的、独一无二的、对称的雪花图案，并鼓励他自己尝试设计和裁剪新的图案。'
    ],
    tips: [
      '空间想象力的飞跃：孩子需要在大脑中想象，剪掉的一小块，在展开后会变成什么样的镂空图案，这是对空间想象力的巨大挑战。',
      '安全使用剪刀：再次强调安全规则，全程监护。',
      '从简单图形开始：初期只在边缘剪一两个小缺口即可。',
      '艺术与数学的结合：雪花剪纸是"对称"这一数学概念最美的艺术体现。'
    ],
    duration: 20,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '使用儿童安全剪刀，全程监护。',
    extensions: null
  },
  {
    id: 'rule-maze-bureau-250',
    name: '🧠🧩 规则迷宫局：按令通行',
    age_range: '3-4',
    scene: 'home',
    props: 'paper',
    focus: 'cognition',
    core_goal: '学习根据规则（而非视觉通路）来走迷宫，锻炼逻辑判断和规则遵守能力。',
    materials: '纸和笔。家长画一个由格子组成的迷宫，每个格子里有一个图形（如圆形或方形）。',
    steps: [
      '讲解规则：设定一个规则，比如："我们是小兔子，只能跳圆形的石头过河，不能踩方形的石头。"',
      '开始挑战：孩子需要从起点出发，用笔画出一条只经过"圆形"格子的路线，最终到达终点。',
      '变换规则：可以不断变换规则，比如"只能走颜色是红色的格子"或者"只能按照红-蓝-红-蓝的顺序跳格子"。'
    ],
    tips: [
      '从视觉到逻辑：这种迷宫不再是"看路"，而是需要根据"规则"来判断下一步能走哪里，对逻辑思维的要求更高。',
      '锻炼抑制控制：孩子需要抑制住走捷径的冲动，严格遵守既定规则。',
      '规则多样化：规则可以千变万化，能衍生出无数种玩法。',
      '专注力挑战：孩子需要时刻记住本轮的"通行规则"，是对注意力和工作记忆的挑战。'
    ],
    duration: 15,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  }
]

async function addGames230to250() {
  try {
    console.log('开始添加游戏230-250...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = games230to250.filter(game => {
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
  addGames230to250()
    .then(() => {
      console.log('游戏230-250添加完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}