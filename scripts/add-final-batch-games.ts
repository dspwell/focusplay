import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const finalBatchGames = [
  {
    id: 'rolling-ball-013',
    name: '滚滚小皮球：你来我往真好玩',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'gross',
    core_goal: '锻炼手部向前推送的动作，以及对物体滚动轨迹的初步观察。',
    materials: '一个皮球或任何可以滚动的球。',
    steps: [
      '准备姿势：家长和孩子面对面坐在地上，双腿分开。',
      '开始滚球：家长用双手，将球沿着地面，平稳地滚向孩子。',
      '孩子接球：鼓励孩子用手去接住或挡住滚过来的球。',
      '滚球回去：引导孩子也用同样的方式，将球滚回给家长。'
    ],
    tips: [
      '地面要平整：选择平整的地面，能让球的滚动轨迹更稳定。',
      '练习手眼协调：孩子需要用眼睛判断球的来向，并指挥手去拦截。',
      '轮流与合作：这是一个需要两个人配合才能玩下去的游戏，能培养初步的合作意识。',
      '力度控制：孩子需要学习用多大的力气，才能让球正好滚到对方那里，而不是滚跑。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保球的大小适中，无锐利边缘。',
    extensions: null
  },
  {
    id: 'music-painter-014',
    name: '音乐小画家：用画笔跳舞',
    age_range: '2-2.5',
    scene: 'home',
    props: 'paper',
    focus: 'cognition',
    core_goal: '将听觉感受（音乐）通过肢体动作（涂鸦）表达出来，进行情绪抒发。',
    materials: '一张大纸铺在地上，几支安全无毒的蜡笔，一段音乐。',
    steps: [
      '播放音乐：先播放一段节奏欢快的音乐。',
      '自由涂鸦：鼓励孩子随着音乐的节奏，在纸上自由地画出线条和色块。',
      '更换音乐：切换成一段节奏舒缓、轻柔的音乐。',
      '感受变化：引导孩子感受音乐情绪的变化，并观察他的涂鸦是否也随之变得更平缓、更轻柔。'
    ],
    tips: [
      '不设限制：这是一个纯粹的感官和情绪表达活动，不要对孩子画了什么做任何评判。',
      '身体参与：鼓励孩子一边画一边跟着音乐摇摆身体。',
      '情绪的出口：绘画是孩子表达内在情绪的绝佳出口，特别是对于语言能力还不够强的孩子。',
      '选择合适的音乐：音乐的类型可以多样化，古典、民谣、儿歌都可以尝试。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保蜡笔无毒，纸张足够大。',
    extensions: null
  },
  {
    id: 'bean-scooping-015',
    name: '舀豆子小厨师：勺子训练营',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼使用勺子从容器中舀取固体的协调动作。',
    materials: '两个碗，一把勺子，一些尺寸较大的豆子或干的通心粉。',
    steps: [
      '准备工作：一个碗装满豆子，另一个碗是空的。',
      '任务说明：对孩子说："我们来当小厨师，把这个碗里的豆子，用勺子舀到那个碗里去吧。"',
      '示范动作：家长演示如何握住勺子，伸进碗里，舀起豆子，然后平稳地移动到空碗上方，手腕一斜，将豆子倒进去。',
      '孩子操作：让孩子自己尝试。他可能会洒得到处都是，这是练习的必经过程。'
    ],
    tips: [
      '安全第一：必须在家长一对一监护下进行，确保孩子不会将豆子放入口中。游戏结束后立刻收好。',
      '选择合适的工具：勺子的凹槽要深一些，更容易舀起。豆子要大，不容易从勺子里掉出来。',
      '生活自理基础：这是孩子学习自己用勺子吃饭非常重要的前置练习。',
      '允许不完美：关注孩子"舀"和"倒"的动作本身，而不是他洒了多少。'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '全程监护，确保豆子不被误食。游戏结束立即收好。',
    extensions: null
  },
  {
    id: 'train-tunnel-016',
    name: '小火车穿隧道：爬爬乐探险',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'gross',
    core_goal: '锻炼四肢协调的爬行能力和对狭小空间的好奇心。',
    materials: '一个大的、两端开口的纸箱，或者用一条毯子搭在两把椅子之间，形成一个"隧道"。',
    steps: [
      '搭建隧道：和孩子一起搭建好"隧道"。',
      '游戏引入：家长在隧道的一端，对另一端的孩子说："宝宝，快看，这里有个山洞！我们来当小火车，从里面开过去吧！"',
      '示范与引诱：家长可以先从隧道爬过去，或者在隧道的另一端用一个有趣的玩具"引诱"孩子爬过来。',
      '孩子爬行：鼓励孩子自己爬过隧道。'
    ],
    tips: [
      '空间探索：钻、爬狭小的空间，能给孩子带来独特的空间感和安全感。',
      '身体认知：孩子需要了解自己身体的宽度和高度，才能判断自己是否能通过。',
      '建立勇气：成功地从一个"黑暗"的隧道爬出来，能极大地增强孩子的勇气。',
      '安全提示：确保"隧道"是稳固的，不会在使用中倒塌。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保隧道结构稳固，不会倒塌。',
    extensions: null
  },
  {
    id: 'zipper-train-017',
    name: '拉链小火车：咔嚓咔嚓开起来',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '练习捏住并拉动拉链头的精细动作。',
    materials: '一件有粗大拉链的衣服、一个笔袋或一个小背包。',
    steps: [
      '游戏引入：家长指着拉链说："看，这是一条小火车的轨道，这个（指着拉链头）就是小火车。"',
      '示范操作：家长捏住拉链头，缓慢地沿着"轨道"从一端拉到另一端，发出"呜——咔嚓咔嚓"的声音。',
      '孩子尝试：让孩子自己尝试捏住拉链头，并向前或向后拉动。',
      '打开与关闭：练习"拉开"（打开）和"拉上"（关闭）这两个相反的动作。'
    ],
    tips: [
      '选择合适的拉链：拉链必须是顺滑、不卡顿的，拉链头要足够大，方便孩子抓握。',
      '锻炼前三指捏合：捏住小小的拉链头，对锻炼拇指、食指、中指的捏合能力非常有益。',
      '生活自理：这是孩子学习自己穿衣服、整理书包非常重要的基础技能。',
      '给予辅助：初期，家长可以帮忙把拉链的起始端对齐，让孩子只负责"拉"的动作。'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保拉链顺滑，无卡顿。',
    extensions: null
  },
  {
    id: 'bubble-painter-018',
    name: '泡泡印画师：吹出彩色图案',
    age_range: '2-2.5',
    scene: 'home',
    props: 'paper',
    focus: 'cognition',
    core_goal: '通过吹气制造泡泡，观察泡泡的形状和颜色，体验一种新颖的艺术创作方式。',
    materials: '一个杯子，装入少量水和几滴儿童安全洗手液，一根吸管，一张深色卡纸。',
    steps: [
      '制造泡泡：家长先向孩子演示，将吸管一头放进肥皂水里，然后从另一头缓慢地、持续地向里吹气，直到杯口冒出很多漂亮的泡泡。',
      '"盖章"：然后，迅速地将深色卡纸盖在泡泡堆上，轻轻一按再拿开，纸上就留下了美丽的泡泡印记。',
      '孩子尝试：让孩子自己尝试向水里吹气制造泡泡。',
      '欣赏作品：和孩子一起欣赏纸上由一个个圆形组成的、独一无二的"泡泡画"。'
    ],
    tips: [
      '安全第一：必须反复向孩子强调，是向吸管里"吹气"，而不是"吸水"。家长需全程严密监护。',
      '口腔肌肉训练：持续地吹气，能很好地锻炼口腔肌肉的耐力。',
      '科学观察：这是一个观察"表面张力"和"光线折射"（泡泡的彩色）的有趣科学实验。',
      '艺术美感：泡泡印记的图案是随机而美丽的，能给孩子带来很高的艺术成就感。'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '强调只能吹气不能吸水，家长全程监护。',
    extensions: null
  }
]

async function addFinalBatchGames() {
  try {
    console.log('开始添加最后一批游戏...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = finalBatchGames.filter(game => {
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
  addFinalBatchGames()
    .then(() => {
      console.log('最后一批游戏添加完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}