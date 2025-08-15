import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const outdoorGames = [
  {
    id: 'ball-hole-019',
    name: '小球进洞：怪兽喂食大作战',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'gross',
    core_goal: '锻炼手眼协调，以及将物体准确放入目标容器的能力。',
    materials: '一个纸箱，在侧面挖一个大小适中的洞；几个小皮球或绒球。',
    steps: [
      '游戏设定：将纸箱（"小怪兽的嘴巴"）放在地上，对孩子说："这个小怪兽肚子饿了，我们把这些球球（食物）喂给它吃吧！"',
      '示范推球：家长坐在地上，将一个小球沿着地面，用手推向纸箱的洞口。',
      '孩子尝试：让孩子也坐在离洞口不远的地方，自己尝试用手推球或滚球，让球进入洞里。',
      '庆祝成功：每当一个球成功进洞，都可以一起欢呼："小怪兽吃到东西啦！"'
    ],
    tips: [
      '距离由近到远：初期让孩子离洞口非常近，保证成功率。熟练后再逐渐拉开距离。',
      '锻炼目标感：游戏需要孩子有意识地将球推向一个明确的目标。',
      '力度与方向：孩子需要不断调整自己推球的力气和方向，才能成功。',
      '多种玩法：除了用手推，还可以尝试用脚踢。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保球的大小适中，无误食风险。',
    extensions: null
  },
  {
    id: 'smell-game-020',
    name: '闻一闻：猜猜这是什么味道',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '通过嗅觉感知不同的气味，并将气味与特定物品联系起来。',
    materials: '几种气味鲜明、安全的物品，如一个橘子、一瓣蒜、一块香皂、一杯牛奶。',
    steps: [
      '游戏引入：对孩子说："我们来玩一个用鼻子闻味道的游戏。"',
      '逐一嗅闻：家长先拿起橘子，让孩子闻一闻，然后告诉他："这是橘子的味道，香香的。"',
      '体验不同气味：依次让孩子闻其他物品的味道，并用简单的词汇描述（如香皂是"香的"，蒜是"有点冲的"）。',
      '蒙眼竞猜（可选）：对于接受度高的孩子，可以让他闭上眼睛，再闻一次，猜猜是什么东西的味道。'
    ],
    tips: [
      '安全第一：确保所有物品都是安全、无毒的，避免使用刺激性过强的物品。',
      '开发嗅觉：嗅觉是人类重要的感官之一，这个游戏能有意识地锻炼和开发孩子的嗅觉能力。',
      '丰富词汇：帮助孩子学习描述气味的词汇。',
      '建立记忆链接：气味和记忆有很强的关联，通过嗅闻，能加深孩子对这些物品的印象。'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保所有物品安全无毒，避免刺激性物品。',
    extensions: null
  },
  {
    id: 'build-together-021',
    name: '一起盖个家：积木合作挑战',
    age_range: '2-2.5',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'social',
    core_goal: '学习轮流和合作的初步概念，体验共同完成一件事情的乐趣。',
    materials: '一堆大颗粒积木。',
    steps: [
      '设定目标：家长说："我们一起来盖一个全世界最高的房子吧！"',
      '建立规则："我们轮流来，一次只放一块。先是我……"',
      '轮流搭建：家长放一块，然后清晰地告诉孩子："好了，轮到你了！"孩子放完后，家长再说："现在又轮到我啦！"',
      '共同庆祝：无论房子搭了多高，只要倒塌了，就一起用夸张的语气说："哇！倒啦！"然后开心地笑，再重新开始。'
    ],
    tips: [
      '明确的语言提示："轮到我"、"轮到你"是这个游戏的核心语言，需要反复、清晰地强调。',
      '不强调结果：重点是"轮流"这个过程，而不是搭出的房子有多好。',
      '处理"抢先"：当孩子在不属于他的回合伸手时，温和地握住他的手，并重申规则："等等哦，现在是妈妈的时间。"'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保积木大小适中，无误食风险。',
    extensions: null
  },
  {
    id: 'leaf-collector-022',
    name: '捡树叶小帮手：秋日收集任务',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼大肢体动作（弯腰、下蹲）和听从简单指令的能力。',
    materials: '户外安全的场地和落叶。',
    steps: [
      '家长指着地上的落叶，对孩子说："宝宝看，好多漂亮的树叶呀，我们把它捡起来好不好？"',
      '家长先示范，弯腰捡起一片树叶，放进自己的口袋或一个小袋子里。',
      '鼓励孩子也去捡，家长可以发出更具体的指令："去捡一片大大的树叶。"或者"捡一片黄色的树叶。"',
      '和孩子一起欣赏捡来的树叶，摸一摸，看一看。'
    ],
    tips: [
      '确保场地安全，没有尖锐石子或其他危险品。',
      '重点是让孩子动起来，享受探索自然的乐趣，不必强求他捡特定形状或颜色的叶子。',
      '可以把这个活动变成一个有始有终的任务，比如"我们一起捡5片树叶就回家"。'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'active',
    safety_notes: '确保场地安全，无尖锐物或危险品。',
    extensions: null
  },
  {
    id: 'follow-walk-023',
    name: '跟屁虫走路：模仿大作战',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼模仿能力、平衡感和身体协调性。',
    materials: '无。',
    steps: [
      '家长对孩子说："来，当我的小尾巴，我怎么走，你就怎么走。"',
      '家长开始用不同的方式走路，比如大步走、小碎步走、像企鹅一样摇摆着走。',
      '边走边回头看，鼓励孩子模仿自己的动作。',
      '用有趣的语言描述动作："看，妈妈在学大象，咚、咚、咚。"'
    ],
    tips: [
      '选择平坦开阔的草地或空地，避免在有车辆或太多行人的地方玩。',
      '动作要慢，幅度要大，方便孩子观察和模仿。',
      '这是一个消耗精力的好游戏，适合在户外活动时穿插进行。'
    ],
    duration: 8,
    difficulty: 1,
    activity_type: 'active',
    safety_notes: '选择安全平坦的场地，远离车辆和人群。',
    extensions: null
  },
  {
    id: 'straight-line-024',
    name: '小脚走直线：平衡力挑战',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼身体平衡能力、协调性以及对空间路径的初步感知。',
    materials: '在安全平坦的地面上，用粉笔画一条直线，或利用地砖的接缝、花坛的边缘作为"路线"。',
    steps: [
      '任务引入：家长指着地上的线，对孩子说："这是一条神奇的小路，我们来当小火车，沿着轨道开，好不好？"',
      '动作示范：家长先做示范，双臂向两侧平举以保持平衡，像走钢丝一样，一只脚接着另一只脚，尽量踩在线上往前走。可以一边走一边发出"呜——哐当哐当"的火车声。',
      '鼓励尝试：牵着孩子的一只手，鼓励他也站到"小路"上，帮助他迈出第一步。说："宝宝也来试试，小脚丫要踩在线上哦。"',
      '独立行走：当孩子熟悉后，尝试让他自己独立走几步。家长可以在终点张开双臂等着他，给他一个明确的目标。'
    ],
    tips: [
      '安全为先：确保选择的"路线"是安全的，旁边没有障碍物或台阶。如果利用花坛边缘，高度不应超过5厘米。',
      '降低难度：对于初学者，路线可以画得粗一些。家长可以双手都牵着孩子走，给他足够多的安全感。',
      '观察要点：观察孩子是如何用他的手臂和身体来保持平衡的，观察他的脚是否能有意识地寻找那条线。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保路线安全，旁边无障碍物。如利用花坛边缘，高度不超过5厘米。',
    extensions: '熟练之后，可以尝试走曲线，或者在路线上设置小小的"障碍物"（比如一片树叶），让孩子跨过去，增加趣味性和挑战性。'
  }
]

async function addOutdoorGames() {
  try {
    console.log('开始添加户外游戏...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = outdoorGames.filter(game => {
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
  addOutdoorGames()
    .then(() => {
      console.log('户外游戏添加完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}