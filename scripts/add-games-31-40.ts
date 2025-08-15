import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const games31to40 = [
  {
    id: 'bird-feeder-031',
    name: '小小喂鸟官：撒撒看，小鸟吃饭啦',
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
    duration: 10,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保远离小鸟，不追赶惊吓。游戏后及时洗手。',
    extensions: null
  },
  {
    id: 'sticker-hunt-032',
    name: '贴纸寻位记：贴到哪里好？',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'paper',
    focus: 'fine',
    core_goal: '锻炼手指的精细操作能力（撕、贴）、手眼协调以及对身体部位的认知。',
    materials: '一张孩子喜欢的贴纸（最好是边缘清晰、容易撕下的款式）。',
    steps: [
      '展示与引导：家长拿出一张贴纸，吸引孩子的注意："看，妈妈有一个漂亮的贴纸！你想把它贴在哪里呢？"',
      '辅助撕下：家长先帮孩子把贴纸的边缘揭起一角，方便他用小手捏住并把它从底纸上撕下来。这个"撕"的动作本身就是很好的精细动作练习。',
      '指定位置：家长发出指令："我们把贴纸贴在手背上，好不好？"然后伸出自己的手背做示范。',
      '孩子操作：引导孩子将贴纸准确地贴在自己的手背上。成功后，一起欣赏，并表扬他："哇，你的手背上有了一个新朋友！"',
      '变换位置：可以继续玩，把新的贴纸贴在胳膊上、衣服上、或者家长的手指上。'
    ],
    tips: [
      '选择合适的贴纸：选择尺寸稍大、背胶粘性适中的泡泡贴或海绵贴，对小手来说更容易操作。避免使用太小或太薄的纸质贴纸。',
      '耐心等待：孩子在撕和贴的过程中可能会比较慢，或者贴得歪歪扭扭，家长要给予足够的耐心和鼓励。',
      '安全提示：提醒孩子贴纸不能放进嘴巴里，并且不要贴在脸部，尤其是眼睛、鼻子和嘴巴附近。游戏结束后，帮助孩子把贴纸撕下并扔进垃圾桶。',
      '认知拓展：在贴的过程中，可以不断强化对身体部位的认知，比如："这是你的小手"，"这是妈妈的胳膊"。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '贴纸不能入口，不贴脸部。游戏结束后及时清理。',
    extensions: null
  },
  {
    id: 'color-detective-033',
    name: '颜色小侦探：我看到了……',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'hands',
    focus: 'cognition',
    core_goal: '锻炼颜色识别、观察力和听觉注意力，将注意力从"无聊的等待"转移到"有趣的环境探索"上。',
    materials: '无，利用周围环境即可。',
    steps: [
      '引起兴趣：家长小声地、神秘地对孩子说："我们来玩一个眼睛的魔法游戏吧。"',
      '游戏开始：家长说："我的眼睛，看到了一个……红色的东西。"然后用眼神和不明显的手势示意周围的某个红色物体（比如一个红色的椅子、别人衣服上的红色图案）。',
      '鼓励寻找：引导孩子用眼睛在周围环境中搜索，找到红色的东西并用手指出来。',
      '确认与赞美：当孩子找到后，给予肯定："宝宝真棒，你找到了！这把椅子是红色的。"',
      '轮换角色：可以换一种颜色继续，或者鼓励孩子说出一种颜色，让家长来找，增加互动性。'
    ],
    tips: [
      '保持安静：这是在公共场合的游戏，全程需要用较小的音量进行，找到物体后用手指即可，无需大声喊叫。',
      '选择明显目标：初期选择大块的、纯色的、距离孩子较近的物体作为目标，降低难度。',
      '灵活性：这个游戏随时可以被中断，比如医生叫到号或者餐厅上菜了，可以立刻停止，非常适合碎片化的等待时间。',
      '认知链接：找到物品后，可以多说一句关于物品的话，比如找到红色的消防栓，可以说"消防栓是帮我们灭火的哦"，潜移默化地增加认知。'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '在公共场所保持安静，不打扰他人。',
    extensions: null
  },
  {
    id: 'finger-family-034',
    name: '手指一家人：念童谣做动作',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼手指的灵活性、语言模仿能力，并通过念诵童谣安抚情绪。',
    materials: '无，只需要家长的手和声音。',
    steps: [
      '准备动作：家长先将自己的手握成拳头。',
      '念诵童谣：开始念诵经典童谣，并配合相应的手指动作。例如："大拇指是爸爸，（伸出大拇指）爸爸开汽车，嘀嘀嘀！（大拇指弯曲几下）"',
      '继续演绎："食指是妈妈，（伸出食指）妈妈织毛衣，嚓嚓嚓！（食指和中指做剪刀状开合）"以此类推，演绎完所有手指。',
      '鼓励模仿：引导孩子也伸出自己的小手，尝试跟着家长的口令和动作进行模仿。'
    ],
    tips: [
      '节奏与韵律：念诵童谣时，语调要富有韵律感和趣味性，更能吸引孩子的注意力。',
      '动作简化：孩子可能无法做出标准的手指动作，家长可以握着他的小手，帮他伸出对应手指，重点在于参与和听的过程。',
      '内容改编：可以根据孩子的喜好，将童谣内容改编成他熟悉的事物，比如"大拇指是奥特曼，咻咻咻！"',
      '情感安抚：有韵律的童谣和轻柔的肢体接触，对缓解孩子在陌生环境中的焦虑情绪非常有效。'
    ],
    duration: 5,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'crawling-bug-035',
    name: '点点虫爬呀爬：痒痒乐',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'hands',
    focus: 'social',
    core_goal: '通过身体接触和预判的惊喜感，进行亲子互动，缓解紧张或不耐烦的情绪。',
    materials: '无。',
    steps: [
      '游戏预告：家长伸出自己的食指，当作"点点虫"，对孩子说："看，一只小虫子要出动啦，它要去你身上散步了哦。"',
      '开始"爬行"：家长的食指从孩子的脚开始，慢慢地、一下一下地向上"爬"，一边爬一边念："点点虫，爬呀爬，爬上宝宝的小脚丫。"',
      '继续向上："爬过宝宝的小膝盖……爬过宝宝的小肚皮……"',
      '制造高潮：快到脖子或腋下等怕痒的部位时，可以放慢速度，用期待的眼神看着孩子，然后快速地轻轻挠一下，制造惊喜和欢笑。'
    ],
    tips: [
      '观察反应：注意观察孩子的表情，确保他是在享受这个游戏。如果孩子表现出不喜欢或抗拒，应立即停止。',
      '力度控制：所有的触摸都应该是轻柔的，挠痒也应该是温柔的，避免孩子感到不适。',
      '建立信任：这个游戏包含大量的身体接触和情感交流，有助于在公共场合巩固孩子的安全感和亲子依恋。',
      '随时可玩：无论是在排队、候车、候诊，只要孩子坐在怀里，就可以立即开始这个游戏，是绝佳的"救场"活动。'
    ],
    duration: 3,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: '确保孩子舒适，如有抗拒立即停止。',
    extensions: null
  },
  {
    id: 'pocket-artist-036',
    name: '口袋小画家：便利贴涂鸦',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'paper',
    focus: 'fine',
    core_goal: '在小空间内进行涂鸦，练习手腕的控制和抓握。',
    materials: '一本小号的便利贴（即时贴），一支粗头蜡笔。',
    steps: [
      '提供材料：将便利贴和蜡笔递给孩子。',
      '自由涂鸦：让孩子在小小的纸张上自由地画点和线。',
      '"撕"的乐趣：画完一张后，教他如何捏住一角，把这张便利贴撕下来。这个动作本身就是很好的精细动作练习。',
      '展示作品：可以将撕下来的"大作"贴在妈妈的手背上或衣服上，作为小小的勋章。'
    ],
    tips: [
      '便携性：便利贴和一支蜡笔是绝佳的"等待神器"，几乎不占空间。',
      '有限空间：在有限的小纸张上涂鸦，能促使孩子更好地控制自己手腕的动作范围。',
      '安全第一：蜡笔比水彩笔更适合在外面使用，不易弄脏环境。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '蜡笔无毒，便利贴不入口。',
    extensions: null
  },
  {
    id: 'knock-knock-037',
    name: '咚咚，有人在吗：身体部位敲敲门',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'hands',
    focus: 'language',
    core_goal: '认知并命名身体部位，并通过问答互动进行语言练习。',
    materials: '无。',
    steps: [
      '游戏开始：家长用手指轻轻地敲敲孩子的额头，像敲门一样，问："咚咚咚，请问这是宝宝的小脑袋吗？"',
      '等待回应：引导孩子回答"是"。',
      '变换部位：家长继续敲击其他身体部位："咚咚咚，请问这是宝宝的小鼻子吗？""咚咚咚，请问这是宝宝的小膝盖吗？"',
      '角色互换：让孩子也来敲你的身体部位，并提问，你来回答。'
    ],
    tips: [
      '增加趣味性：可以故意敲错，比如敲着他的脚，却问"这是你的小手吗？"，看他如何"纠正"你。',
      '轻柔接触：所有的"敲门"动作都必须是象征性的、非常轻柔的。',
      '重复与巩固：通过反复的游戏，巩固孩子对身体部位的认知和命名。',
      '亲子互动：这是一个充满身体接触和欢笑的游戏，能有效安抚等待时的焦躁。'
    ],
    duration: 5,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: '动作轻柔，不造成不适。',
    extensions: null
  },
  {
    id: 'guess-which-hand-038',
    name: '猜猜在哪只手：小宝物躲猫猫',
    age_range: '2-2.5',
    scene: 'waiting',
    props: 'household',
    focus: 'social',
    core_goal: '锻炼视觉追踪和注意力，并通过简单的竞猜游戏进行亲子互动。',
    materials: '任何一个能藏在手心里的小物件，如一个小瓶盖、一块小积木。',
    steps: [
      '展示宝物：向孩子展示手中的"宝物"，让他看清楚。',
      '藏匿过程：家长双手合十，或在背后，将"宝物"悄悄地换到其中一只手里。',
      '伸出拳头：将两个握紧的拳头伸到孩子面前。',
      '开始竞猜：用期待的眼神问他："猜一猜，宝物在哪只手里呀？"让孩子用手指或拍打的方式选择。'
    ],
    tips: [
      '动作要慢：藏匿的过程可以稍微放慢，甚至让他能看到一点点破绽，重点是互动的乐趣。',
      '夸张的反应：无论孩子猜对猜错，家长都要给出夸张的反应，猜对了就"哇！你好厉害！"，猜错了就"呀，在这里呢！我们再来一次！"',
      '建立物体恒存性：这个游戏也是对"物体恒存性"概念的巩固，让他知道东西虽然看不见了，但依然存在。',
      '即时互动：这是最经典、最有效的"口袋游戏"之一，几乎可以在任何等待的场合瞬间开始。'
    ],
    duration: 5,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: '确保小物件安全，无误食风险。',
    extensions: null
  },
  {
    id: 'moon-goodnight-039',
    name: '月亮晚安：和万物轻声说晚安',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'books_pictures',
    focus: 'language',
    core_goal: '营造安静的睡前氛围，通过重复性的语言和指物认知，帮助孩子平复情绪，准备入睡。',
    materials: '一本内容简单、画面柔和的睡前主题绘本（例如《晚安，大猩猩》或《晚安，月亮》）。',
    steps: [
      '环境准备：调暗房间的灯光，家长和孩子一起舒服地靠在床上。',
      '轻柔阅读：家长用非常轻柔、缓慢的语调，逐页阅读绘本。',
      '指物说晚安：每看到画面中的一个事物，家长就用手指着它，并替孩子跟它说"晚安"。例如，指着画面中的小兔子说："小兔子，晚安。"指着窗外的月亮说："月亮，晚安。"',
      '鼓励参与：引导孩子也用他的小手指着画面，并模仿着说"晚安"。如果他不愿意说，家长就继续轻声地、有条不紊地进行下去。'
    ],
    tips: [
      '选择合适的绘本：避免选择情节过于刺激、色彩过于鲜艳的绘本。画面简洁、内容温馨、语言重复是最佳选择。',
      '建立仪式感：将"共读一本晚安绘本"固定为睡前的最后一个环节，能形成强大的睡前仪式，帮助孩子建立睡眠联想。',
      '不要强迫：睡前游戏的目标是放松，而不是学习。不要强求孩子认全所有东西或跟读，享受这个温馨的共读时刻最重要。',
      '声音是关键：家长平稳、单调、催眠般的语调，是这个游戏成功与否的关键。'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'gentle-boat-040',
    name: '轻拍小船：摇呀摇入睡',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'hands',
    focus: 'social',
    core_goal: '通过有节奏的轻柔拍抚和哼唱，给孩子提供身体上的舒适感和心理上的安全感，帮助其放松入睡。',
    materials: '无。',
    steps: [
      '舒适躺姿：让孩子以一个舒服的姿势躺在床上。',
      '开始拍抚：家长坐在床边，将手掌轻轻放在孩子的背部或臀部。',
      '有节奏地轻拍：开始非常缓慢地、有节奏地轻拍，力度要非常轻，好像在安抚一个受惊的小动物。节奏最好和缓慢的心跳保持一致。',
      '配合哼唱：同时，用嘴巴发出非常轻微的"嗯……"或"哦……"的哼唱声，或者一首非常简单的摇篮曲。声音不需要大，能让孩子感受到胸腔的共鸣即可。'
    ],
    tips: [
      '一致性很重要：保持拍抚和哼唱的节奏从始至终高度一致、平稳、不间断，这会给孩子带来极大的确定性和安全感。',
      '观察身体语言：观察孩子的身体是否从紧绷逐渐变得柔软、呼吸是否变得深沉，这些都是放松下来的信号。',
      '耐心与持久：这个游戏可能需要持续5-10分钟，家长需要有足够的耐心。这也是一种让家长自己平静下来的过程。',
      '逐渐减弱：当孩子即将入睡时，可以逐渐减慢拍抚的频率、减弱哼唱的音量，直到完全停止，帮助他平稳过渡到睡眠状态。'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  }
]

async function addGames31to40() {
  try {
    console.log('开始添加游戏31-40...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = games31to40.filter(game => {
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
  addGames31to40()
    .then(() => {
      console.log('游戏31-40添加完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}