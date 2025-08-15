import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const last6Games = [
  {
    id: 'ant-moving-025',
    name: '蚂蚁搬家：铲子搬运大比拼',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼使用工具（小铲子）的能力，以及手眼协调性。',
    materials: '一个小桶和一把小铲子，一个安全的沙坑或土地。',
    steps: [
      '情景设定：家长指着沙堆，对孩子说："我们是勤劳的小蚂蚁，要把这些粮食（沙子）搬回我们的家（小桶）里去。"',
      '示范铲沙：家长演示如何握住铲子，将沙子铲起来，然后小心地移动到小桶上方，再把手腕一翻，让沙子落入桶中。',
      '孩子操作：把铲子交给孩子，鼓励他自己尝试。初期他可能会洒得到处都是，这是非常正常的学习过程。',
      '庆祝成果：当桶里装满沙子时，可以和孩子一起欣赏"劳动成果"，并给予他高度赞扬："看！我们把家装满了！你真是个能干的小蚂蚁！"'
    ],
    tips: [
      '选择合适的工具：确保铲子和桶的边缘是圆滑的，没有锐利部分，大小适合孩子的小手。',
      '关注过程而非结果：游戏的重点是"铲"和"运"的动作练习，而不是真的装满多少沙子。允许孩子自由探索，哪怕他只是在拍打沙子。',
      '安全与卫生：游戏结束后，要及时帮孩子洗手。注意不要让孩子扬起沙子，避免进入眼睛。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '确保工具边缘圆滑，及时清洁，避免沙子进入眼睛。',
    extensions: '可以用沙子堆个小城堡，或者在沙子上用手指画画，提供多种感官体验。'
  },
  {
    id: 'shadow-chase-026',
    name: '追影子游戏：影子捉迷藏',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '锻炼跑、追等大肌肉运动技能，理解光和影子的初步因果关系。',
    materials: '一个晴朗有太阳的日子，一片开阔安全的空地。',
    steps: [
      '发现影子：家长先带孩子在阳光下走动，指着地上的影子说："宝宝快看，你有一个小尾巴，它一直跟着你呢！这是你的影子。"',
      '游戏开始：家长用脚去踩自己的影子，然后用夸张的动作去追孩子的影子，说："我要抓住你的影子啦！"',
      '鼓励互动：引导孩子也来踩家长的影子，或者追逐自己的影子。',
      '动作变换：可以通过变换姿势来改变影子的形状，比如举起手、跳跃等，让孩子观察影子的有趣变化。'
    ],
    tips: [
      '选择合适的时间：上午或下午，当太阳角度较低，影子比较长的时候，游戏效果最好。避免在正午阳光强烈时长时间玩耍。',
      '安全第一：确保游戏场地平坦，没有障碍物，远离车道。',
      '认知启蒙：这是向孩子介绍"光"和"影子"这两个自然现象的绝佳机会，虽然他可能无法完全理解，但感性的体验是最重要的。',
      '体力消耗：这是一个非常好的户外"放电"游戏，能有效满足孩子旺盛的活动需求。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '选择平坦安全场地，避免正午强光时长时间游戏。',
    extensions: null
  },
  {
    id: 'nature-sorter-027',
    name: '自然分类员：叶子和石头分家',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'cognition',
    core_goal: '理解"相同"和"不同"的初步概念，并根据物品的物理属性进行简单分类。',
    materials: '在地上画两个圈，或用两个小篮子。',
    steps: [
      '收集材料：和孩子一起在地上捡拾一些特征明显的自然物，比如几片树叶和几颗小石子。',
      '建立"家"：指着一个圈说："这是所有树叶宝宝的家。"指着另一个圈说："这是所有石头宝宝的家。"',
      '示范分类：家长先拿起一片树叶，放进"树叶之家"。再拿起一颗石头，放进"石头之家"。',
      '孩子操作：将剩下的物品交给孩子，鼓励他将它们送回各自的"家"。'
    ],
    tips: [
      '选择差异大的物品：初期的分类，物品特征差异一定要非常大，比如树叶（轻、薄、绿色）和石头（重、厚、灰色）。',
      '语言强化：在分类时，反复强调物品的名称和属性："这是一片树叶，它要去树叶的家。"',
      '简单任务：每次只进行两种物品的分类，避免信息过载。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保收集的自然物安全，无尖锐边缘。',
    extensions: '这个游戏的核心逻辑可以延伸到收拾玩具，比如"把所有的小汽车放进这个箱子，所有积木放进那个箱子。"'
  },
  {
    id: 'barefoot-walk-028',
    name: '小脚丫探险：赤脚走不同路',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'gross',
    core_goal: '通过体验不同地面的触感，丰富感官输入，锻炼脚部的平衡和适应能力。',
    materials: '一个有多种安全地面的户外环境，如草地、塑胶跑道、沙地、光滑的石板路。',
    steps: [
      '脱掉鞋袜：在确保安全和卫生的前提下，让孩子光着脚丫。',
      '探索草地：先引导孩子在柔软的草地上走一走，问他："宝宝，踩在草地上是什么感觉呀？是不是软软的、有点痒？"',
      '体验不同路面：依次带孩子去体验不同材质的路面，比如塑胶跑道的弹性、石板路的光滑和温度。',
      '语言描述：每体验一种，家长都用丰富的词汇帮助孩子描述他的感受。'
    ],
    tips: [
      '安全第一：必须仔细检查地面，确保没有玻璃碴、尖锐石子等危险物品。',
      '足部刺激：光脚接触不同质感的地面，是对足底神经非常好的刺激，有助于促进感官统合和身体平衡能力的发展。',
      '尊重孩子的感受：如果孩子对某种路面感到抗拒（比如觉得沙子烫或草地痒），不要强迫，可以先由家长抱着他感受。',
      '亲近自然：这是让孩子用最直接的方式亲近和感受大自然的好方法。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'active',
    safety_notes: '仔细检查地面安全，无危险物品。尊重孩子感受，不强迫。',
    extensions: null
  },
  {
    id: 'outdoor-vocabulary-029',
    name: '看见什么说什么：户外词汇探险',
    age_range: '2-2.5',
    scene: 'outdoor',
    props: 'hands',
    focus: 'language',
    core_goal: '将视觉所见与语言词汇进行链接，丰富名词词汇量。',
    materials: '无。',
    steps: [
      '游戏开始：在散步时，家长指着一样东西，用清晰、简单的词语说出它的名字："看，树。"',
      '等待模仿：停顿一下，看着孩子，鼓励他也跟着说"树"。',
      '持续进行：不断地指向视野里的新事物："汽车"、"小狗"、"花"、"房子"。',
      '反向提问：当孩子能说一些词后，可以指着一样东西问他："宝宝，这是什么呀？"'
    ],
    tips: [
      '词汇要精准：使用最基础、最核心的词汇，避免复杂的修饰。',
      '一对一对应：指着一样东西，只说一个名字，建立清晰的对应关系。',
      '利用兴趣：从孩子感兴趣的东西开始，如果他喜欢汽车，就多说几种车的名字。',
      '语调要肯定：用肯定、清晰的语调，就像在陈述一个事实，而不是考试。'
    ],
    duration: 10,
    difficulty: 1,
    activity_type: 'active',
    safety_notes: '选择安全的户外环境，远离危险区域。',
    extensions: null
  },
  {
    id: 'water-reflection-030',
    name: '倒影游戏：水里的"另一个我"',
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
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '水边活动必须时刻抓紧孩子的手，确保绝对安全。',
    extensions: null
  }
]

async function addLast6Games() {
  try {
    console.log('开始添加最后6个游戏...')

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

    const newGames = last6Games.filter(game => {
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

    console.log(`🎉 成功添加 ${data.length} 个游戏！`)
    console.log('最后添加的游戏:')
    data.forEach((game, index) => {
      console.log(`${index + 1}. ${game.name}`)
    })
    
    console.log('\n🎯 30个游戏全部添加完成！')

  } catch (error) {
    console.error('脚本执行出错：', error)
  }
}

if (require.main === module) {
  addLast6Games()
    .then(() => {
      console.log('所有30个游戏添加完成！')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}