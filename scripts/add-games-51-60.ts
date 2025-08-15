import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const games51to60 = [
  {
    id: 'music-freeze-051',
    name: '音乐木头人：听到音乐就跳舞',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'gross',
    core_goal: '锻炼身体控制能力、听觉注意力以及对"开始"和"停止"指令的快速反应。',
    materials: '一个可以播放音乐并随时暂停的音响设备（手机即可）。',
    steps: [
      '游戏规则：家长解释游戏规则："当音乐响起时，我们就要跳舞。当音乐停止时，我们就要像木头人一样，一动不动。"',
      '开始游戏：播放一首节奏欢快的儿歌，家长和孩子一起随着音乐自由舞动。',
      '突然暂停：在音乐播放过程中，家长突然按下暂停键，并立刻摆出一个"木头人"的姿势，保持不动。',
      '检查"木头人"：看看孩子是否也能快速停下来。如果他还在动，可以轻声提醒："木头人不能动哦。"',
      '继续游戏：几秒钟后，重新播放音乐，继续跳舞。'
    ],
    tips: [
      '音乐选择：选择节奏明确、孩子喜欢的歌曲，避免过于激烈或过于柔和的音乐。',
      '暂停时机：暂停的时机要随机，有时长一点，有时短一点，这样才有趣味性。',
      '身体控制：这个游戏是对身体控制能力的极佳锻炼，观察孩子从"动"到"静"的转换速度。',
      '家长示范：家长的示范非常重要，要夸张地展示什么是"完全不动"的木头人状态。'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保活动空间宽敞，避免碰撞。',
    extensions: null
  },
  {
    id: 'copy-sounds-052',
    name: '声音复印机：你说我学',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼听觉记忆、发音模仿以及对声调、节奏的感知能力。',
    materials: '无。',
    steps: [
      '游戏开始：家长对孩子说："我们来玩声音复印机的游戏，我发出什么声音，你就跟着学。"',
      '简单音效：家长先发出简单的动物叫声，如"汪汪汪"、"喵喵喵"，让孩子跟着学。',
      '节奏变化：尝试改变声音的节奏，比如"汪——汪——汪"（慢节奏）或者"汪汪汪汪汪"（快节奏）。',
      '音调变化：用高低不同的音调说同一个词，比如用很高的声音说"hello"，再用很低的声音说"hello"。',
      '复杂组合：当孩子熟练后，可以组合两个声音，如"汪汪，喵喵"。'
    ],
    tips: [
      '由简到难：从单个音节开始，逐渐增加到多音节和复杂节奏。',
      '耐心等待：给孩子足够的时间来模仿，不要着急。',
      '夸张表达：家长的发音要清晰、夸张，便于孩子观察和模仿。',
      '角色互换：当孩子熟练后，让他当"原版"，家长当"复印机"，这会激发他的创造力。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'pattern-dance-053',
    name: '跟着节拍做：模式舞蹈家',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'gross',
    core_goal: '理解和执行简单的动作序列，锻炼记忆力和身体协调性。',
    materials: '无。',
    steps: [
      '建立简单模式：家长示范一个两步的动作模式，比如"拍手，跺脚"。重复几遍让孩子观察。',
      '口令配合：一边做动作，一边说出来："拍手，跺脚，拍手，跺脚。"',
      '邀请参与：对孩子说："现在我们一起来，拍手，跺脚。"',
      '确保同步：开始时可能需要握着孩子的手，帮助他跟上节奏。',
      '增加复杂度：熟练后可以尝试三步模式，如"拍手，跺脚，转圈"。'
    ],
    tips: [
      '节奏稳定：保持非常稳定的节奏，不要忽快忽慢。',
      '视觉辅助：配合手势或用道具（如彩带）来帮助孩子理解模式。',
      '重复练习：新模式需要多次重复，直到孩子能独立完成。',
      '观察学习：观察孩子是从动作还是从声音中学习模式，这能帮助你调整教学方式。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: '确保活动空间足够，避免碰撞。',
    extensions: null
  },
  {
    id: 'big-small-sort-054',
    name: '大小分拣员：谁大谁小一眼看',
    age_range: '2.5-3',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '学习根据"大小"这一维度对物品进行分类，理解相对大小的概念。',
    materials: '一些大小差异明显的同类物品，如大小不同的球、积木或盒子。两个标识清楚的容器。',
    steps: [
      '建立分类标准：拿出一个大球和一个小球，告诉孩子："这是大球，这是小球。"',
      '设置分拣区：准备两个篮子，一个贴上大球的图片，一个贴上小球的图片，分别标记为"大球的家"和"小球的家"。',
      '示范分拣：家长先拿起一个球，说："这是一个大球，它要回大球的家。"然后放入对应的篮子。',
      '孩子操作：让孩子选择一个球，引导他判断："这是大球还是小球？"然后让他放入相应的篮子。',
      '完成检验：所有球分完后，一起检查每个篮子，确认分类是否正确。'
    ],
    tips: [
      '大小对比要明显：初期使用的物品大小差异要非常明显，避免中等大小的物品。',
      '一致性原则：使用同一类物品（如都是球），避免不同形状和颜色的干扰。',
      '语言强化：重复使用"大"和"小"的概念，帮助孩子建立词汇联系。',
      '相对概念：可以引入相对性概念，比如"这个球比那个球大"。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保物品大小适中，无误食风险。',
    extensions: null
  },
  {
    id: 'mirror-me-055',
    name: '照镜子游戏：我做什么你做什么',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'social',
    core_goal: '锻炼观察力、模仿能力和社会互动技能，理解"轮流"的概念。',
    materials: '无。',
    steps: [
      '游戏设置：家长和孩子面对面坐着或站着，告诉孩子："我们来玩照镜子的游戏，你是我的镜子。"',
      '慢动作开始：家长非常缓慢地做一个简单动作，比如举起右手，让孩子跟着做同样的动作。',
      '持续模仿：继续做慢动作，如摸头、拍肚子、伸舌头等，确保孩子能跟上。',
      '增加难度：逐渐加快动作速度，或做稍微复杂一点的动作组合。',
      '角色交换：让孩子当"镜子的主人"，家长当"镜子"，跟着孩子的动作。'
    ],
    tips: [
      '动作要慢：所有动作都要比平时慢很多，给孩子充分的观察和反应时间。',
      '面部表情：不仅要模仿动作，还要模仿面部表情，这增加了游戏的趣味性。',
      '鼓励创造：当孩子当主人时，鼓励他创造自己的动作，不要限制他的想象力。',
      '观察同步性：注意孩子是否能与你的动作保持同步，这反映了他的注意力和协调能力。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'water-transfer-056',
    name: '小水手运水：勺子舀水接力赛',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼手腕控制、手眼协调以及使用工具的精细动作技能。',
    materials: '两个碗（一个装水，一个空着），一个适合孩子抓握的勺子，毛巾准备在旁边。',
    steps: [
      '任务说明：指着装水的碗说："这里的小鱼需要搬到新家去，我们用勺子帮它们搬家吧。"',
      '示范舀水：家长示范如何用勺子舀起水，慢慢移动到另一个碗上方，然后倾倒进去。',
      '孩子尝试：让孩子用勺子尝试舀水。初期可以让他舀得满一些，随着熟练度提高再要求控制水量。',
      '观察技巧：观察孩子是如何控制勺子的角度，如何避免在移动过程中洒水。',
      '完成任务：当大部分水都转移过去后，一起庆祝任务完成。'
    ],
    tips: [
      '选择合适的勺子：勺子不要太大，手柄要适合孩子的小手抓握。',
      '水量适中：初期不要放太多水，避免溅湿衣服造成不适。',
      '防滑措施：在桌子上铺一块毛巾，防止碗滑动，也方便清理。',
      '耐心引导：洒水是正常的学习过程，不要因为孩子洒水而中断游戏。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '准备毛巾防滑和清理。使用温水，避免过热或过冷。',
    extensions: null
  },
  {
    id: 'story-acting-057',
    name: '故事表演家：用身体讲故事',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '将语言和动作结合，通过身体表演增强对故事的理解和记忆。',
    materials: '一个简单的故事，最好是孩子熟悉的，如《小兔子跳跳跳》。',
    steps: [
      '故事准备：选择一个动作性强的简单故事，家长先完整讲述一遍。',
      '分解动作：将故事中的关键动作提取出来，如"小兔子跳跳跳"就做跳跃动作。',
      '边讲边演：重新讲述故事，每到动作部分，家长和孩子一起做相应的动作。',
      '孩子主导：让孩子尝试自己讲故事（即使只是几个词），并做出相应动作。',
      '创新表演：鼓励孩子为故事添加新的动作或改编情节。'
    ],
    tips: [
      '故事要短：选择情节简单、篇幅较短的故事，避免孩子失去兴趣。',
      '动作夸张：所有动作都要做得夸张一些，这样更有趣也更容易记忆。',
      '重复练习：同一个故事可以表演多次，每次都可能有新的发现。',
      '鼓励表达：不要纠正孩子的"错误"表演，鼓励他的创造性表达。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保活动空间安全，避免过于激烈的动作。',
    extensions: null
  },
  {
    id: 'emotion-faces-058',
    name: '表情包大师：开心生气一起学',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'social',
    core_goal: '认识和表达基本情绪，学习通过面部表情理解他人的感受。',
    materials: '无，或者准备一些表情卡片作为辅助。',
    steps: [
      '情绪介绍：家长做出明显的开心表情，说："看，这是开心的脸。"让孩子观察。',
      '模仿练习：让孩子也做出开心的表情，可以说："我们一起来开心一下。"',
      '新情绪学习：介绍其他基本情绪，如生气、伤心，每个情绪都要有明显的面部特征。',
      '情绪识别：家长做出某种表情，让孩子猜是什么情绪。',
      '情境结合：结合具体情境讲解，如"当我们得到喜欢的玩具时，我们会开心"。'
    ],
    tips: [
      '表情要夸张：所有表情都要做得很夸张，便于孩子识别和模仿。',
      '从基本情绪开始：重点学习开心、生气、伤心这三种基本情绪。',
      '正面为主：多练习开心的表情，避免过度强调负面情绪。',
      '情境教学：结合日常生活情境来教学，让孩子理解情绪产生的原因。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'counting-collector-059',
    name: '数数收集家：一个两个数清楚',
    age_range: '2.5-3',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '学习1-5的数数，理解数量和数字的对应关系。',
    materials: '一些相同的小物品，如积木、豆子或玩具车，一个收集容器。',
    steps: [
      '数数示范：家长拿出3个积木，一个一个地数："一个、两个、三个，一共三个积木。"',
      '孩子跟数：让孩子用手指点着积木，跟家长一起数："一、二、三。"',
      '收集任务：给孩子一个任务："请你收集两个积木放到盒子里。"观察他是否能准确收集。',
      '验证数量：一起数一数盒子里的积木："一个、两个，对了，是两个。"',
      '逐渐增加：从1开始，逐渐增加到2、3、4、5，每次都要验证数量的准确性。'
    ],
    tips: [
      '从小数目开始：从1-3开始，熟练后再增加到5。',
      '手指辅助：鼓励孩子用手指点着物品数数，这有助于建立数量概念。',
      '实物操作：使用真实的物品进行数数，比抽象的数字学习更有效。',
      '重复验证：每次数完都要验证总数，强化数量和数词的对应关系。'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保小物品安全，无误食风险。',
    extensions: null
  },
  {
    id: 'texture-explorer-060',
    name: '触感探险家：摸摸这是什么',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'cognition',
    core_goal: '通过触觉感知不同材质，丰富感官体验，并学习描述性词汇。',
    materials: '几种触感不同的安全物品，如光滑的勺子、粗糙的砂纸、柔软的毛巾、硬的积木。',
    steps: [
      '触感介绍：拿出光滑的勺子，让孩子摸一摸，说："这个勺子摸起来很光滑。"',
      '对比体验：再拿出粗糙的砂纸，让孩子感受，说："这个砂纸摸起来很粗糙。"',
      '盲摸游戏：让孩子闭上眼睛或蒙上眼，通过触摸来猜测是什么物品。',
      '词汇学习：教孩子使用"光滑"、"粗糙"、"软"、"硬"等描述性词汇。',
      '分类活动：将物品按触感分类，如把所有光滑的放在一起。'
    ],
    tips: [
      '安全第一：确保所有用于触摸的物品都是安全的，没有尖锐边缘。',
      '对比明显：选择触感差异很大的物品，便于孩子区分。',
      '语言丰富：除了基本的触感词汇，还可以教一些温度词汇，如"凉"、"温"。',
      '鼓励表达：鼓励孩子用自己的话来描述触感，不一定要用标准词汇。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保所有物品安全，无尖锐边缘或危险材质。',
    extensions: null
  }
]

async function addGames51to60() {
  try {
    console.log('开始添加游戏51-60...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = games51to60.filter(game => {
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
  addGames51to60()
    .then(() => {
      console.log('游戏51-60添加完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}