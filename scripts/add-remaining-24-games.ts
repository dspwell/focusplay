import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const remainingGames = [
  {
    id: 'feed-animals-007',
    name: '喂小动物吃饭：填饱肚子任务',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼手眼协调能力和将物体放入容器的精细动作。',
    materials: '一个开口的瓶子或盒子（当作小动物的嘴巴），一些大颗粒的积木或棉花球（当作食物）。',
    steps: [
      '家长在瓶子或盒子上画一个简单的动物脸，指着开口说："看，小兔子的嘴巴饿啦，我们来喂它吃东西吧。"',
      '家长先做示范，拿起一个"食物"（积木），准确地投进"嘴巴"里。',
      '把"食物"给孩子，鼓励他模仿家长的动作，将"食物"一个个投进去。',
      '每当孩子成功投进一个，都给予及时的鼓励："宝宝真棒！小兔子吃到东西啦！"'
    ],
    tips: [
      '安全第一：确保使用的"食物"足够大，不会有误食风险。',
      '容器的开口大小要适中，太小了孩子容易有挫败感，太大了挑战性不足。',
      '如果孩子感到困难，家长可以握着他的手，辅助他完成几次。'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保食物道具足够大，防止误食。',
    extensions: null
  },
  {
    id: 'book-treasure-008',
    name: '书中寻宝：找到图片里的宝宝',
    age_range: '2-2.5',
    scene: 'home',
    props: 'books_pictures',
    focus: 'cognition',
    core_goal: '锻炼视觉搜索能力和对常见事物的认知。',
    materials: '内容简单、图片清晰的绘本。',
    steps: [
      '家长和孩子一起翻开绘本的一页。',
      '家长指向一个明显的物品，问："宝宝在哪里？"或者"小汽车在哪里？"',
      '给孩子一些时间，让他用眼睛在画面中寻找，并用手指出来。',
      '当孩子指对时，给予热情的肯定："对啦！宝宝在这里！宝宝找到了！"',
      '可以从孩子最熟悉的物品开始，如奶瓶、小球、小狗等。'
    ],
    tips: [
      '选择背景简单、主体突出的绘本，降低寻找难度。',
      '如果孩子找不到，家长可以用手指着目标，并把他的小手引到目标上，帮助他成功。',
      '将寻找和声音模仿结合起来，找到小狗时就一起"汪汪"叫，增加趣味性。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'water-master-009',
    name: '小小倒水师：水杯传送大作战',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼手腕的控制能力、手眼协调，并初步理解"满"和"空"的概念。',
    materials: '两个大小、形状不同的安全塑料杯或小桶，一个装有少量水的盆。',
    steps: [
      '场地准备：在浴缸里、或铺好防水垫的地板上进行。',
      '示范倒水：家长拿起一个装了水的杯子，缓慢地、稳定地将水倒入另一个空杯子，尽量不洒出来。',
      '孩子尝试：让孩子自己尝试用小杯子舀水，然后倒入大杯子。',
      '自由探索：鼓励孩子在几个容器之间来回倒水，观察水流，感受水的特性。'
    ],
    tips: [
      '允许混乱：玩水游戏一定会弄湿，这是游戏的一部分。家长需要有心理准备，并做好防护工作。',
      '水量控制：初期只在盆里放少量水，方便孩子操作，也易于清理。',
      '科学启蒙：这是孩子感知"流体"和"量"的最初体验。',
      '安全第一：确保水温适中，地面防滑，全程家长陪同。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保水温适中，防滑措施到位，家长全程陪同。',
    extensions: null
  },
  {
    id: 'tape-hunter-010',
    name: '胶带小猎人：抓住地上的"虫虫"',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼手指捏取和撕下的动作，体验不同粘性的触感。',
    materials: '一卷粘性较低的、彩色的和纸胶带。',
    steps: [
      '准备场地：家长先撕下几段胶带，贴在光滑的地板上、桌面上或孩子的玩具上。',
      '发布任务：对孩子说："看，有好多小虫子（胶带）爬到我们的地上了，我们把它们抓起来吧！"',
      '示范撕取：家长用手指，将胶带的一头抠起来，然后完整地撕下来。',
      '孩子操作：鼓励孩子也用他的小手指去寻找胶带的边缘，并尝试把它撕下来。'
    ],
    tips: [
      '选择合适的胶带：必须使用和纸胶带或美纹纸胶带，这类胶带粘性低、易撕取、不留痕。切勿使用透明胶带或强力胶带。',
      '锻炼指尖感觉："抠起胶带边缘"这个动作，对孩子指尖的触觉和力量要求很高。',
      '感官探索：孩子会很着迷于胶带"粘"和"不粘"这两种状态的转换。',
      '安全提示：撕下来的胶带要及时收好，防止孩子放入口中或粘在头发上。'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '及时收好撕下的胶带，防止误食或粘连。',
    extensions: null
  },
  {
    id: 'spoon-balance-011',
    name: '厨房运豆豆：勺子平衡挑战',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'gross',
    core_goal: '锻炼使用工具（勺子）行走时的身体平衡和手部稳定。',
    materials: '一把大勺子，一些大的豆子或绒球，两个碗。',
    steps: [
      '设定起点和终点：在房间的两头各放一个碗，一个装满豆子（起点），一个是空的（终点）。',
      '任务说明：对孩子说："我们来当小厨师，用这个大勺子，把豆子从这个碗运到那个碗里去。"',
      '示范操作：家长先用勺子舀起几颗豆子，然后身体保持平稳，慢慢地走到终点，将豆子倒入空碗。',
      '孩子尝试：让孩子自己尝试。他需要在行走的过程中，时刻注意保持勺子的平稳。'
    ],
    tips: [
      '选择大号工具：勺子要大，豆子也要大，这样更容易成功。',
      '允许失败：中途豆子洒出来是必然的。家长要用轻松的态度对待，鼓励孩子把洒的豆子捡起来，再试一次。',
      '锻炼核心稳定性：为了不让豆子洒出来，孩子需要收紧核心，放慢脚步，这是对身体控制能力的极好锻炼。',
      '手眼协调：眼睛需要同时关注路况和勺子里的豆子。'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保豆子足够大，全程监护防止误食。',
    extensions: null
  },
  {
    id: 'doll-care-012',
    name: '照顾娃娃：小小保姆的一天',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '通过模仿照顾行为，培养同理心和角色扮演的初步能力。',
    materials: '一个娃娃或毛绒玩具，一个小碗，一把小勺子。',
    steps: [
      '情景设定：家长抱着娃娃，对孩子说："宝宝你看，娃娃肚子饿了，它想吃饭了。我们来喂它，好不好？"',
      '准备"食物"：在小碗里放一些想象中的"食物"，比如空气或者一个小积木。',
      '示范喂食：家长先用小勺子舀起"食物"，送到娃娃的嘴边，并发出"啊——"的声音，模仿喂食。',
      '孩子操作：把碗和勺子交给孩子，让他来给娃娃喂饭。'
    ],
    tips: [
      '模仿生活：孩子天生喜欢模仿大人的行为，这个游戏满足了他们模仿"照顾者"的愿望。',
      '同理心萌芽：在照顾娃娃的过程中，孩子学习去关心比自己"弱小"的对象。',
      '生活自理的预演：喂娃娃吃饭，也是对他自己学习独立吃饭的一种预演和巩固。',
      '语言配合：在游戏中加入"宝宝真棒"、"娃娃吃得真香"等语言，增加游戏的真实感。'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  // 继续添加剩余游戏...
]

async function addRemainingGames() {
  try {
    console.log('开始添加剩余24个游戏...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = remainingGames.filter(game => {
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
  addRemainingGames()
    .then(() => {
      console.log('添加剩余游戏脚本执行完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}