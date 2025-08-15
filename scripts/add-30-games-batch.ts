import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

// Load environment variables
config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const games = [
  {
    id: 'ear-detective-001',
    name: '耳朵小侦探：寻找盒子里的秘密',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '锻炼听觉分辨能力、注意力和对声音与物体的因果联想。',
    materials: '2-3个不透明的、带盖的小盒子（或小塑料瓶），以及能发出不同声音的小物件（例如：几粒豆子、一个小铃铛、一团纸）。',
    steps: [
      '兴趣引导：家长先把一个装有铃铛的盒子拿到孩子面前，神秘地说："宝宝听，这个盒子里藏着一个小秘密哦。"然后摇晃盒子，发出声音。',
      '建立联系：打开盒子，向孩子展示里面的铃铛，再次摇晃，让他看到是铃铛发出的声音。说："原来秘密是小铃铛呀！"',
      '分辨挑战：家长在孩子面前，将铃铛和豆子分别装进两个一模一样的盒子里。然后将两个盒子都递给孩子，问："宝宝，哪个盒子里住着小铃铛呀？你摇一摇听听看。"',
      '验证与鼓励：无论孩子选得对不对，都打开盒子和他一起验证结果。选对了就热情地表扬："宝宝真厉害，耳朵真灵！"选错了也鼓励："没关系，这个是豆子的声音，我们再听听另一个。"'
    ],
    tips: [
      '难度调整：初期只用一个盒子，让孩子建立"摇晃-出声"的因果关系。熟练后，可以增加到2-3个盒子进行分辨。',
      '观察要点：观察孩子是随意摇晃，还是会有意识地将盒子拿到耳边仔细倾听。观察他能否将特定的声音和特定的物品稳定地联系起来。',
      '安全须知：确保盒内的小物件足够大，不会造成误食风险。游戏必须在家长全程一对一监护下进行，结束后立刻收好。'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保盒内小物件足够大，防止误食。需要家长全程监护。',
    extensions: '可以在家里寻找更多能发出声音的东西，比如钥匙串、装水的瓶子等，变成一个"寻找声音"的家庭大冒险。'
  },
  {
    id: 'hand-adventure-002',
    name: '小手探险队：穿越神奇山洞',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼手眼协调、手腕的灵活性以及控制小肌肉的能力。',
    materials: '一卷卫生纸或厨房用纸的纸筒，几根比较硬的毛根（扭扭棒）或吸管。',
    steps: [
      '场景设定：家长将纸筒立在桌上，对孩子说："看，这是一个黑乎乎的山洞，我们让小虫子（指着毛根）从里面钻过去，好不好？"',
      '动作示范：家长拿起一根毛根，用缓慢的动作，一手扶着纸筒，另一手将毛根从纸筒的一端穿到另一端，直到它"露头"。可以配音："小虫子，钻呀钻，呀！出来啦！"',
      '孩子操作：把毛根和纸筒交给孩子，鼓励他自己尝试。家长可以在一旁扶着纸筒，让孩子专注于"穿"的动作。',
      '重复练习：准备多根不同颜色的毛根，让孩子反复练习。每成功一次，都把穿过去的毛根收集起来，最后可以一起欣赏"胜利品"。'
    ],
    tips: [
      '难度调整：如果孩子觉得困难，可以选择更短、更硬的材料，或者换一个洞更大的物体。对于熟练的孩子，可以换成更细的绳子，并尝试在纸筒上打孔让他进行"缝纫"。',
      '观察要点：观察孩子是用哪只手进行主导操作，以及他如何调整手腕和手指的角度来完成"穿"的动作。',
      '安全须知：确保毛根或吸管的末端没有尖锐部分，防止戳伤孩子。'
    ],
    duration: 5,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保毛根或吸管末端无尖锐部分。',
    extensions: '可以在纸筒上涂上颜色，或者贴上贴纸，把它变成一个"喂怪兽"的游戏，毛根就是喂给怪兽的面条。'
  },
  {
    id: 'helper-delivery-003',
    name: '小帮手快递员：听指令送东西',
    age_range: '2-2.5',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼听觉记忆、理解并执行一步指令的能力。',
    materials: '无，利用家里的常见物品即可。',
    steps: [
      '游戏开始：家长用充满期待的语气对孩子说："我们来玩一个跑腿游戏，妈妈需要一个超级小帮手！"',
      '发出指令：发出一个清晰、简单的一步指令。例如："宝宝，可以帮妈妈把你的小皮球拿过来吗？"同时可以用手指一下皮球的方向。',
      '等待执行：给孩子一些时间去理解和执行。不要催促，让他自己处理信息。',
      '正向反馈：当孩子完成任务后，无论他拿来的对不对，都要给予大量的表扬和身体接触（拥抱、摸头）。如果拿错了，就温和地纠正："谢谢宝宝，这个是积木，我们一起去拿那个圆圆的皮球好不好？"'
    ],
    tips: [
      '指令的清晰度：确保指令是具体的、单一的。避免说"把那个给我"这种模糊的指令，也不要说"把球拿来再把书放好"这种两步指令。',
      '增加趣味性：可以假装自己非常需要那个东西，比如"哎呀，妈妈好渴，宝宝能把你的小水杯拿来给我喝一口水吗？"',
      '观察要点：观察孩子是否能将物品名称（皮球）和实际物体对应起来，以及他完成指令的意愿和专注度。'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: null,
    extensions: '熟练后，可以尝试在指令中加入形容词，比如"把那个红色的积木拿过来"，为后续更复杂的指令做准备。'
  },
  {
    id: 'hide-seek-bear-004',
    name: '躲猫猫大冒险：找找小熊藏哪了',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '建立物体恒存性的概念，并通过寻找和发现的惊喜感增进亲子互动。',
    materials: '一条小毯子或毛巾，一个孩子喜欢的玩具（比如小熊）。',
    steps: [
      '引起注意：家长先拿着小熊和孩子玩一会儿，让他对小熊产生关注。',
      '开始躲藏：在孩子注视下，用非常缓慢的动作，将小熊的一部分用毯子盖住，问："咦，小熊的脚不见了？"',
      '完全盖住：然后，将小熊完全用毯子盖住，用夸张的语气问："呀！小熊不见了！小熊在哪里呀？"',
      '鼓励寻找：引导孩子用手去把毯子掀开。当小熊"出现"时，家长要表现出非常惊喜的样子："找到啦！原来小熊在这里！"'
    ],
    tips: [
      '从部分到整体：一定要从盖住一部分开始，让孩子理解"被遮住"不等于"消失"，这是建立物体恒存性的关键。',
      '保持互动：这是一个情感交流大于技能训练的游戏。家长的惊喜表情和声音是吸引孩子玩下去的最大动力。',
      '角色互换：可以让孩子来藏玩具，家长来找，增加他的参与感和主动性。'
    ],
    duration: 5,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: '熟悉后，可以把玩具藏在更容易找到的地方，比如半露在枕头后面，让孩子在房间里进行小范围的"寻宝"。'
  },
  {
    id: 'build-tower-005',
    name: '盖高楼挑战：谁的积木塔最高',
    age_range: '2-2.5',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'fine',
    core_goal: '锻炼手部稳定性和初步的空间感知能力。',
    materials: '3-5块大颗粒积木。',
    steps: [
      '家长和孩子一起坐在地毯或平稳的地面上。',
      '家长拿出积木，说："我们来盖高楼吧！"',
      '家长先放一块积木在地上，然后引导孩子在上面叠放第二块。',
      '轮流向上叠放，看谁能把积木叠得更高而不倒。',
      '当塔倒下时，用有趣的方式回应，比如"哇！大楼倒啦！我们再来一次！"'
    ],
    tips: [
      '选择底部平整、大小一致的积木，更容易成功。',
      '这个年龄段的孩子能叠起2-4块积木就已经非常棒了，重点是参与的过程。',
      '不要强求孩子一定要叠得很高，享受搭建和推倒的乐趣更重要。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保积木足够大，不会造成误食风险。',
    extensions: null
  },
  {
    id: 'sound-detective-006',
    name: '声音大侦探：听听看是什么',
    age_range: '2-2.5',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '锻炼听觉注意力和声音辨别能力。',
    materials: '家里的任何能发出独特声音的物品（例如：钥匙串、空的塑料瓶里放几粒米、揉搓一个塑料袋）。',
    steps: [
      '家长先让孩子闭上眼睛（如果孩子不愿意，可以用手轻轻帮他遮住眼睛）。',
      '在孩子听不到的地方，选择一样物品并发出声音（例如：摇晃钥匙串）。',
      '问孩子："宝宝听，这是什么声音呀？"',
      '让孩子睁开眼睛，并把发出声音的物品展示给他看，告诉他："这是钥匙的声音。"',
      '重复几次，可以使用不同的物品发出声音。'
    ],
    tips: [
      '选择声音差异明显且生活中常见的物品，更容易辨认。',
      '游戏初期，可以在孩子面前发出声音，让他建立声音和物品的联系，之后再增加难度。',
      '全程保持游戏的趣味性，用夸张的表情和语气吸引孩子。'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保物品安全，无小零件脱落风险。',
    extensions: null
  },
  // 继续添加更多游戏...
]

async function addBatchGames() {
  try {
    console.log('开始批量添加30个游戏...')

    // 先检查数据库中已存在的游戏
    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])
    
    console.log(`数据库中已有 ${existingGames?.length || 0} 个游戏`)

    // 过滤出不重复的游戏
    const newGames = games.filter(game => {
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

    // 批量插入新游戏
    const { data, error } = await supabase
      .from('games')
      .insert(newGames)
      .select('id, name')

    if (error) {
      console.error('批量插入游戏时出错:', error)
      return
    }

    console.log(`✅ 成功添加 ${data.length} 个游戏！`)
    console.log('添加的游戏:')
    data.forEach((game, index) => {
      console.log(`${index + 1}. ${game.name}`)
    })

  } catch (error) {
    console.error('脚本执行出错：', error)
  }
}

// 运行脚本
if (require.main === module) {
  addBatchGames()
    .then(() => {
      console.log('批量添加脚本执行完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('批量添加脚本执行失败：', error)
      process.exit(1)
    })
}