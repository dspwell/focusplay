import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

const games41to50 = [
  {
    id: 'back-artist-041',
    name: '背上小画家：猜猜我画了什么',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'hands',
    focus: 'fine',
    core_goal: '通过背部的触觉刺激，让孩子在安静的状态下集中注意力，感受身体，帮助放松。',
    materials: '无。',
    steps: [
      '游戏邀请：让孩子趴在床上，家长用非常轻柔的声音说："宝宝，我要在你的背上变一个魔法，猜猜我画了什么？"',
      '开始"画画"：家长用一根手指，在孩子的背上非常缓慢地画一个极其简单的图形，比如一个圆形。一边画一边说："我画了一个圆圆的太阳。"',
      '变换图形：可以继续画一些简单的线条，比如从上到下画一条直线（"下雨啦"），或者画波浪线（"小蛇在散步"）。',
      '结束安抚：最后，用整个手掌，非常轻柔地、缓慢地抚摸孩子的整个背部，说："画完啦，现在我们让后背也好好睡觉吧。"'
    ],
    tips: [
      '触感是关键：动作一定要慢、要轻柔。手指的压力要均匀，避免太用力或弄痒孩子。',
      '不要期待答案：这个年龄段的孩子几乎不可能猜出你画了什么，游戏的重点是让他安静地感受背部的触觉输入，而不是猜谜。',
      '语言辅助：家长轻柔的语言描述，能帮助孩子将触觉和想象联系起来，增加游戏的趣味性和安抚效果。',
      '角色互换：如果孩子有兴趣，也可以让他在你的背上或手上"画画"，这是一个很好的互动。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'shadow-theater-042',
    name: '影子戏院：墙上的小剧场',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'household',
    focus: 'cognition',
    core_goal: '理解光、遮挡和影子之间的因果关系，激发好奇心。',
    materials: '一个手电筒，一堵白墙。',
    steps: [
      '环境准备：拉上窗帘，关上灯，让房间变暗。',
      '手影魔法：家长打开手电筒照在墙上，然后用自己的手在光线前做出各种手影，比如一只小狗、一只飞鸟。',
      '孩子探索：把孩子的小手也放到光线前，让他观察自己手的影子，以及手在动的时候影子的变化。',
      '物品影子：可以用各种玩具（比如恐龙、汽车）来做影子戏的主角，讲述一个简单的睡前故事。'
    ],
    tips: [
      '安全提示：不要让手电筒的光直射孩子的眼睛。',
      '激发想象：和孩子一起讨论影子像什么，鼓励他的想象力。',
      '建立因果：让他亲手操作，理解"手动影动"、"手不动影不动"、"手遮住光才有影子"这些简单的物理规律。',
      '安抚情绪：对于怕黑的孩子，这个游戏能让他觉得"黑暗"是一件有趣、可控的事情，从而降低恐惧。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '手电筒不直射眼睛。确保房间安全无障碍物。',
    extensions: null
  },
  {
    id: 'gentle-raindrops-043',
    name: '温柔小雨滴：滴答安抚曲',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'hands',
    focus: 'social',
    core_goal: '通过轻柔的触觉刺激，安抚情绪，帮助身体放松，为睡眠做准备。',
    materials: '无。',
    steps: [
      '情景导入：对躺好的孩子轻声说："宝宝，天要下雨啦，我们来感受一下温柔的小雨滴吧。"',
      '"下小雨"：家长伸出食指和中指，在孩子的胳膊上、腿上、背上，像雨点一样轻轻地、没有规律地弹跳。一边弹跳一边说："下小雨啦，滴答，滴答。"',
      '"下中雨"：用四根手指继续轻轻弹跳，说："雨下大了一点点。"',
      '"雨停了"：最后，用整个手掌，非常轻柔地、缓慢地抚摸刚才"下过雨"的身体部位，说："雨停了，太阳出来了，好温暖呀。"'
    ],
    tips: [
      '力度是关键：所有动作都必须是轻柔的、令人舒适的，而不是弄痒或拍打。',
      '节奏由快到慢：游戏可以从稍快节奏的"小雨"开始，到缓慢节奏的"大雨"，最后以最舒缓的"抚摸"结束，帮助孩子的情绪逐渐平静下来。',
      '专注触觉：这是一个让孩子将注意力从纷乱的思绪，集中到身体感受上的好方法。',
      '非语言交流：温柔的抚触是传递爱和安全感的最直接方式。'
    ],
    duration: 8,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'goodnight-sounds-044',
    name: '晚安，声音们：倾听与告别',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'hands',
    focus: 'language',
    core_goal: '通过主动倾听和命名，将环境中的声音从"干扰"变为"安抚"，帮助孩子平静下来。',
    materials: '无，只需要一个相对安静但仍有环境音的房间。',
    steps: [
      '安静倾听：关灯后，抱着孩子，轻声说："嘘，我们来听一听，现在都有谁还没有睡觉呀？"',
      '识别声音：家长先识别一个声音，并用拟人的方式命名它。例如，听到冰箱的嗡嗡声，就说：哦，我听到了，是冰箱在唱歌呢，我们跟它说冰箱，晚安。',
      '继续寻找：继续倾听，可能会听到窗外的风声、楼下的车声、空调的出风声。',
      '逐一告别：每识别一个声音，都和孩子一起跟它说"晚安"。'
    ],
    tips: [
      '化敌为友：这个游戏能巧妙地将那些可能干扰孩子睡眠的环境音，变成游戏的一部分，从而降低它们的干扰性。',
      '培养听觉敏锐度：锻炼孩子从环境背景音中，分辨出特定声音的能力。',
      '营造安全感：通过命名和告别，让孩子感觉周围的一切都是熟悉和可控的，从而建立安全感。',
      '平静的仪式：这个过程本身就是一个让大脑从兴奋转向平静的绝佳睡前仪式。'
    ],
    duration: 5,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'goodnight-body-045',
    name: '晚安，我的身体：从脚到头说晚安',
    age_range: '2-2.5',
    scene: 'bedtime',
    props: 'hands',
    focus: 'language',
    core_goal: '认知身体部位，并通过逐一告别的方式，让身体和情绪都平静下来。',
    materials: '无。',
    steps: [
      '游戏开始：让孩子舒服地躺好，家长轻声说："睡觉时间到了，我们让身体的每一个部分都好好睡觉吧。"',
      '逐一告别：家长轻轻地触摸孩子的某个身体部位，并跟它说晚安。例如，摸摸他的小脚丫，说："小脚丫，晚安。"',
      '继续向上：依次向上，触摸小腿、膝盖、小肚子、小手、胳膊、肩膀，并一一跟它们说晚安。',
      '最后仪式：最后，亲吻一下孩子的额头，说："小脑袋，晚安。宝宝，晚安。"'
    ],
    tips: [
      '轻柔触摸：温柔的抚触是传递爱和安全感的最佳方式。',
      '身体扫描：这个过程就像一个儿童版的"身体扫描"放松练习，能帮助孩子将注意力集中到身体感受上，从而放松下来。',
      '巩固认知：反复的命名，能极大地巩固孩子对自己身体部位的认知。',
      '固定的仪式：将其变成一个固定的、不可或缺的睡前仪式，对培养良好的睡眠习惯非常有帮助。'
    ],
    duration: 8,
    difficulty: 1,
    activity_type: 'quiet',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'captain-commands-046',
    name: '命令小船长：两步指令挑战',
    age_range: '2.5-3',
    scene: 'home',
    props: 'hands',
    focus: 'language',
    core_goal: '锻炼理解并执行"两步连续指令"的能力，提升听觉记忆和反应速度。',
    materials: '无。',
    steps: [
      '游戏设定：家长和孩子面对面，说："现在我们是海盗船上的船员，我是船长，要听我的命令哦！准备好了吗？"',
      '一步指令热身：先用一步指令开始："船长命令你……摸摸你的鼻子！"孩子完成后，给予夸奖。',
      '两步指令挑战：开始发出两步连续指令："船长命令你……先拍拍手，然后跳一下！"',
      '分解与提示：如果孩子只完成了第一步，家长可以提示："真棒！拍完手之后还要做什么呀？是不是要跳一下？"帮助他回忆并完成第二步。',
      '增加趣味：指令可以非常有趣，比如"先学小狗叫，然后摸摸你的脚"、"先转个圈，然后抱抱妈妈"。'
    ],
    tips: [
      '难度循序渐进：一定要从他能熟练完成的一步指令开始，建立信心后，再引入两步指令。',
      '指令的逻辑性：指令的两个动作之间最好有关联或符合逻辑，如果关联性不强，难度会更高。',
      '观察要点：重点观察孩子是只能记住第一个指令，还是能对第二个指令有印象。这是工作记忆发展的关键指标。',
      '角色扮演：熟练后，一定要让孩子当"小船长"，他来发指令，你来执行。这能极大地锻炼他的语言组织和表达能力。'
    ],
    duration: 8,
    difficulty: 3,
    activity_type: 'active',
    safety_notes: null,
    extensions: null
  },
  {
    id: 'dragon-drawing-047',
    name: '小手画长龙：一路画到终点',
    age_range: '2.5-3',
    scene: 'home',
    props: 'paper',
    focus: 'fine',
    core_goal: '锻炼手腕的稳定性和运笔的流畅性，练习画出连续的线条。',
    materials: '一张大白纸，一支粗一些的、好抓握的蜡笔或水彩笔。',
    steps: [
      '故事导入：家长在纸的一端画一个简单的龙头，对孩子说："看，这是一条饿肚子的小龙，它的身体不见了。我们帮它画一条长长的身体，好让它能找到食物吧！"',
      '起点和终点：在纸的另一端画一个它喜欢吃的"食物"，比如一个苹果。',
      '示范运笔：家长握住孩子的笔，或者用自己的笔做示范，从龙头开始，画出一条连续的曲线或直线，一直连接到"食物"。一边画一边说："小龙的身体，长呀，长呀，长呀……啊，吃到苹果啦！"',
      '孩子主导：让孩子自己尝试画出龙的身体。他画出的可能是断断续续的线，或者直接画到了纸外面，都不要紧。'
    ],
    tips: [
      '提供大空间：使用大一些的纸张，能让孩子不受限制地、用整个手臂的大幅度动作来画画，这有助于发展他肩部和肘部的稳定性。',
      '正确的握笔姿势：不必过分强求此阶段孩子使用标准的握笔姿势，自然的抓握即可，重点是体验运笔。',
      '游戏化命名：可以画各种线条，并给它们取名字：直线是"小火车轨道"，波浪线是"大海的波浪"，螺旋线是"蜗牛的房子"。',
      '材料选择：粗蜡笔或可水洗的水彩笔颜色鲜艳，且不需要太大的力气，非常适合这个年龄段的孩子。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '确保画笔无毒，提供足够大的纸张。',
    extensions: null
  },
  {
    id: 'color-station-048',
    name: '颜色分类站：乘客请上车',
    age_range: '2.5-3',
    scene: 'home',
    props: 'blocks_puzzle',
    focus: 'cognition',
    core_goal: '锻炼根据"颜色"这一单一维度进行分类的能力，强化颜色认知。',
    materials: '几种颜色（建议从红、黄、蓝三种基础色开始）的积木，以及几个与之颜色对应的盘子或小篮子。',
    steps: [
      '建立"车站"：将红色、黄色、蓝色的盘子分开放好，对孩子说："这是红色车站、黄色车站和蓝色车站。"',
      '任务说明：把所有颜色的积木混在一起，拿起一块红色的积木说："这是一个红色的积木乘客，它要去红色的车站，我们送它回家吧！"然后把它放进红色盘子里。',
      '孩子操作：鼓励孩子拿起一块积木，先问他："宝宝，这是什么颜色的呀？"然后引导他："那它应该去哪个车站呢？"',
      '持续分类：让孩子将所有的"乘客"都送回各自颜色的"车站"。'
    ],
    tips: [
      '从两种颜色开始：如果孩子对三种颜色感到困惑，就先从对比最强烈的两种颜色开始，比如红色和蓝色。',
      '保持纯粹性：在进行颜色分类时，尽量选择形状、大小都一样的物品，避免其他维度的干扰。当进行形状分类时，则尽量使用同一种颜色的物品。',
      '生活中的分类：这个游戏可以延伸到生活中，比如"我们把红色的草莓放在一起"，"我们把绿色的青菜放在一起"。',
      '观察策略：观察孩子在分类时是否需要先说出颜色再行动，或者他是否能够直接进行视觉匹配。'
    ],
    duration: 8,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保积木大小适中，无误食风险。',
    extensions: null
  },
  {
    id: 'family-mimic-049',
    name: '家庭模仿秀：我来当谁',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'social',
    core_goal: '锻炼观察力、模仿能力，并通过角色扮演理解家庭成员的日常活动。',
    materials: '一些代表家庭成员的标志性物品，如爸爸的眼镜、妈妈的围巾、宝宝自己的奶瓶。',
    steps: [
      '情景导入：家长拿起爸爸的眼镜戴上，压低声音说："我是爸爸，我在看报纸。"',
      '鼓励模仿：将眼镜递给孩子（或让他拿起自己的玩具眼镜），鼓励他也模仿爸爸看报纸的动作。',
      '角色变换：家长再拿起妈妈的围巾，说："我是妈妈，我要出门买菜啦！"并做出拎篮子的动作。',
      '孩子主导：轮到孩子时，问他："宝宝想当谁呀？"让他自己选择道具进行模仿，并鼓励他说出自己在做什么。'
    ],
    tips: [
      '选择安全道具：确保所有用于模仿的道具都是安全的，比如眼镜应选择没有镜片的镜框。',
      '夸张化表演：家长的表演越夸张、越有趣，孩子模仿的兴趣就越高。',
      '关注细节：观察孩子是否能抓住不同家庭成员最具代表性的动作或口头禅，这是他观察力细致入微的体现。',
      '游戏拓展：可以将模仿对象扩展到家里的宠物（学小猫走路、学小狗叫），或者孩子熟悉的动画角色。'
    ],
    duration: 10,
    difficulty: 2,
    activity_type: 'quiet',
    safety_notes: '确保道具安全，无锐利边缘或小零件。',
    extensions: null
  },
  {
    id: 'bean-transport-050',
    name: '豆子搬运工：小手捏捏放一放',
    age_range: '2.5-3',
    scene: 'home',
    props: 'household',
    focus: 'fine',
    core_goal: '锻炼手指捏取小物件的能力、手眼协调以及点数和配对的初步概念。',
    materials: '一个大碗，一个空的冰格或多个小瓶子，一些尺寸较大的豆子（如蚕豆、芸豆）。',
    steps: [
      '任务说明：对孩子说："我们是勤劳的搬运工，要把这些豆子粮食，从大仓库（大碗）运到小房间（冰格的每个格子）里去。"',
      '动作示范：家长用拇指和食指，捏起一颗豆子，准确地放进冰格的一个格子里。',
      '孩子操作：鼓励孩子用同样的方式，将豆子一颗一颗地运送到冰格里。',
      '加入规则：当孩子熟练后，可以增加规则："我们让每个小房间里都只住一颗豆子，好不好？"'
    ],
    tips: [
      '安全第一：此游戏必须在家长一对一、不间断的监护下进行，确保孩子不会将豆子放入口、鼻、耳中。游戏结束后，立刻将所有豆子收好。',
      '观察抓握方式：观察孩子是使用三指抓（拇指、食指、中指）还是已经能熟练地使用二指钳形抓（拇指、食指），这是精细动作发展的重要一步。',
      '工具升级：对于能力强的孩子，可以提供一个儿童安全镊子或勺子，让他尝试用工具来搬运豆子，增加挑战。',
      '认知结合：在搬运时，可以一起数数："一颗、两颗、三颗……"，在游戏中无缝融入数学启蒙。'
    ],
    duration: 10,
    difficulty: 3,
    activity_type: 'quiet',
    safety_notes: '全程监护，确保豆子不被误食。游戏结束立即收好所有豆子。',
    extensions: null
  }
]

async function addGames41to50() {
  try {
    console.log('开始添加游戏41-50...')

    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')

    if (checkError) {
      console.error('检查现有游戏时出错:', checkError)
      return
    }

    const existingGameIds = new Set(existingGames?.map(game => game.id) || [])
    const existingGameNames = new Set(existingGames?.map(game => game.name) || [])

    const newGames = games41to50.filter(game => {
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
  addGames41to50()
    .then(() => {
      console.log('游戏41-50添加完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}