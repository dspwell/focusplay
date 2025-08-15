import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const games61to65 = [
  {
    id: 'button-match-061',
    name: '纽扣配对师：找到我的好朋友',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼观察力、比较能力和精细动作，学习根据属性进行配对。',
    materials: '几对相同的纽扣（或其他小物件），颜色、大小、形状各不相同。',
    steps: [
      '展示配对：拿出一对完全相同的纽扣，告诉孩子："这两个纽扣是一样的，它们是好朋友。"',
      '混合分散：将所有纽扣混在一起，散放在桌面上。',
      '寻找配对：给孩子一个纽扣，让他在一堆纽扣中找到它的好朋友（相同的纽扣）。',
      '验证配对：找到后，将两个纽扣放在一起比较，确认它们确实是一样的。',
      '继续配对：重复这个过程，直到所有纽扣都找到了自己的好朋友。'
    ],
    tips: [
      '差异要明显：选择特征差异明显的纽扣，便于孩子区分。',
      '从简单开始：最初只使用2-3对纽扣，随着能力提升再增加数量。',
      '多角度观察：鼓励孩子从颜色、大小、形状等多个角度观察和比较。',
      '安全考虑：确保纽扣大小适中，不会造成误食风险。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保纽扣大小适中，全程监护避免误食。',
    extensions: null
  },
  {
    id: 'weather-reporter-062',
    name: '小小天气预报员：今天天气怎么样',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '观察和描述天气现象，学习天气相关词汇，培养对自然的关注。',
    materials: '无，只需要一扇窗户。',
    steps: [
      '观察天气：带孩子到窗边，一起看外面的天气。',
      '描述现象：家长先描述看到的天气："今天是晴天，太阳出来了。"或"今天在下雨，地面湿湿的。"',
      '学习词汇：教孩子基本的天气词汇：晴天、雨天、阴天、多云。',
      '模仿表达：让孩子尝试说出今天的天气情况。',
      '每日习惯：将观察天气变成每天的小习惯，增强孩子对环境的感知力。'
    ],
    tips: [
      '简化词汇：使用最简单直观的天气词汇，避免复杂的气象术语。',
      '结合感受：不仅看天气，还要说感受，如"今天很暖和"、"今天很冷"。',
      '身体语言：用手势和表情来辅助说明天气，如用手遮眼表示太阳很亮。',
      '持续观察：一天中可以多次观察，让孩子发现天气的变化。'
    ],
    duration: 5,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'puppet-theater-063',
    name: '手偶小剧场：让玩具开口说话',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '通过角色扮演发展想象力、语言表达和社交技能。',
    materials: '几个简单的手偶，或用袜子自制手偶。',
    steps: [
      '介绍角色：给每个手偶起名字并介绍它们的特点，如"这是小熊贝贝，它很喜欢吃蜂蜜。"',
      '简单对话：让手偶和孩子对话，如手偶说："你好，我是贝贝，你叫什么名字呀？"',
      '鼓励互动：引导孩子回应手偶，或让孩子操作另一个手偶进行对话。',
      '编演故事：用手偶演出简单的故事情节，如两个手偶一起去散步。',
      '角色扮演：让孩子选择自己喜欢的手偶角色进行扮演。'
    ],
    tips: [
      '声音变化：为不同的手偶使用不同的声音，帮助孩子区分角色。',
      '情节简单：故事情节要简单易懂，贴近孩子的日常生活。',
      '互动性强：多让孩子参与，而不是只让他观看。',
      '情感表达：通过手偶表达不同情绪，帮助孩子理解和学习情感表达。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'obstacle-crawl-064',
    name: '小小探险家：钻山洞过草地',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'gross',
    core_goal: '锻炼大肢体动作、空间感知和解决问题的能力。',
    materials: '椅子、沙发垫、毯子等家具，创建简单的障碍路线。',
    steps: [
      '设计路线：用家具创建一个简单的障碍路线，如椅子下面钻过去、沙发垫上爬过去。',
      '示范动作：家长先示范如何通过每个障碍，如"我们要钻过这个山洞（椅子下面）"。',
      '分段练习：让孩子一段一段地练习，每通过一个障碍就给予鼓励。',
      '完整挑战：当孩子熟练后，让他完整地走完整个路线。',
      '增加趣味：可以编个小故事，如"小探险家要去寻找宝藏"。'
    ],
    tips: [
      '安全第一：确保所有障碍都是安全的，没有尖锐边角或不稳定的结构。',
      '难度适中：障碍高度和难度要适合孩子的能力，避免过于困难造成挫败感。',
      '鼓励尝试：即使孩子没有完美完成，也要鼓励他的尝试。',
      '灵活调整：根据孩子的表现随时调整障碍的难度。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保所有障碍安全稳固，无尖锐边角。监护过程中避免碰撞。',
    extensions: null
  },
  {
    id: 'memory-box-065',
    name: '记忆宝盒：藏了什么不见了',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '锻炼视觉记忆、注意力和观察力。',
    materials: '一个盒子或布，3-4个孩子熟悉的小物品。',
    steps: [
      '展示物品：将3个小物品（如小汽车、积木、勺子）放在孩子面前，让他仔细看。',
      '记忆时间：告诉孩子："记住这些东西，等一下我要考考你。"给他充分时间观察。',
      '藏起物品：用盒子或布将物品盖住，或让孩子闭上眼睛。',
      '取走一个：悄悄取走其中一个物品。',
      '猜测游戏：打开盒子或让孩子睁眼，问他："少了什么东西？"'
    ],
    tips: [
      '物品要熟悉：使用孩子非常熟悉的日常物品，便于记忆和识别。',
      '数量从少到多：开始时只用2-3个物品，随着能力提升再增加。',
      '给足时间：让孩子有充分的时间观察和记忆，不要着急。',
      '正向反馈：即使答错了也要鼓励，重点是参与过程而不是正确答案。'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保物品安全无误食风险。',
    extensions: null
  }
]

async function addGames61to65() {
  try {
    console.log('开始添加游戏61-65...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = games61to65.filter(game => {
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
  addGames61to65()
    .then(() => {
      console.log('游戏61-65添加完成')
      console.log('🎉 所有35个游戏（31-65）添加完成！')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}