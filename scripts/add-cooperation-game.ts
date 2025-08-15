import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

// Load environment variables
config()

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function addCooperationGame() {
  try {
    console.log('添加游戏：合作画...')

    // 准备游戏数据
    const gameData = {
      id: 'cooperation-painting-001',
      name: '合作画',
      age_range: '3-4',
      scene: 'home',
      props: 'paper',
      focus: 'social',
      core_goal: '学习在同一个空间内与他人合作，协商分工，共同完成一件作品。',
      materials: '一张大画纸，一套彩笔。',
      steps: [
        '确定主题：和孩子一起商量："我们今天一起来画一个大花园，好不好？"',
        '协商分工："那你想画什么？我想画太阳和云。你可以画花和草。"',
        '开始创作：两人在同一张画纸上，同时开始画自己负责的部分。',
        '欣赏与融合：画的过程中，可能会出现"你的云飘到我的太阳上了"这种情况，引导孩子协商解决，并欣赏最终融合在一起的、独一无二的合作画。'
      ],
      tips: [
        '学习协商："我们画什么？""你画哪部分，我画哪部分？"这些都是非常重要的社交协商练习。',
        '尊重他人空间：在同一张纸上画画，需要学习尊重对方的创作空间。',
        '接受与融合：学习接受他人的想法和创作，并将其与自己的融合在一起。',
        '共同的成就感："这是'我们'一起画的"，能带来比个人创作更强的集体荣誉感。'
      ],
      duration: 8, // 8分钟，适合3-4岁专注力
      difficulty: 3, // 中等难度，需要社交协商技巧
      activity_type: 'quiet',
      safety_notes: null,
      extensions: null
    }

    // 插入数据
    const { data, error } = await supabase
      .from('games')
      .insert(gameData)
      .select()

    if (error) {
      console.error('插入数据时发生错误：', error)
      return
    }

    console.log('✅ 游戏添加成功！')
    console.log('插入的数据：', data)

    // 验证插入
    const { data: verifyData, error: verifyError } = await supabase
      .from('games')
      .select('*')
      .eq('id', gameData.id)
      .single()

    if (verifyError) {
      console.error('验证数据时发生错误：', verifyError)
      return
    }

    console.log('✅ 数据验证成功！')
    console.log('游戏详情：')
    console.log(`- 名称：${verifyData.name}`)
    console.log(`- 年龄段：${verifyData.age_range}`)
    console.log(`- 场景：${verifyData.scene}`)
    console.log(`- 道具：${verifyData.props}`)
    console.log(`- 能力发展：${verifyData.focus}`)
    console.log(`- 时长：${verifyData.duration}分钟`)
    console.log(`- 难度：${verifyData.difficulty}/5`)
    console.log(`- 游戏步骤数：${verifyData.steps.length}`)
    console.log(`- 指导建议数：${verifyData.tips.length}`)

  } catch (error) {
    console.error('脚本执行出错：', error)
  }
}

// 运行脚本
if (require.main === module) {
  addCooperationGame()
    .then(() => {
      console.log('脚本执行完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}

export { addCooperationGame }