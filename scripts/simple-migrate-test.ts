import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// 简单的测试游戏数据
const testGames = [
  {
    id: "test-game-01",
    name: "神秘的声音盒子",
    age_range: "2-2.5",
    scene: "home",
    props: "household", 
    focus: "cognition",
    core_goal: "锻炼听觉分辨能力、注意力和对声音与物体的因果联想",
    materials: "2-3个不透明的、带盖的小盒子，以及能发出不同声音的小物件",
    steps: [
      "兴趣引导：家长先把一个装有铃铛的盒子拿到孩子面前，神秘地摇晃盒子", 
      "建立联系：打开盒子，向孩子展示里面的铃铛，再次摇晃",
      "分辨挑战：将铃铛和豆子分别装进两个一模一样的盒子里",
      "验证与鼓励：无论孩子选得对不对，都打开盒子和他一起验证结果"
    ],
    tips: [
      "难度调整：初期只用一个盒子，让孩子建立摇晃-出声的因果关系",
      "观察要点：观察孩子是否会有意识地将盒子拿到耳边仔细倾听"
    ],
    safety_notes: "确保盒内的小物件足够大，不会造成误食风险",
    extensions: "可以在家里寻找更多能发出声音的东西，比如钥匙串等",
    duration: 5,
    difficulty: 2,
    activity_type: "quiet"
  },
  {
    id: "test-game-02", 
    name: "小手穿山洞",
    age_range: "2-2.5",
    scene: "home",
    props: "household",
    focus: "fine",
    core_goal: "锻炼手眼协调、手腕的灵活性以及控制小肌肉的能力",
    materials: "一卷卫生纸或厨房用纸的纸筒，几根比较硬的毛根或吸管",
    steps: [
      "场景设定：家长将纸筒立在桌上，介绍山洞游戏",
      "动作示范：家长用缓慢的动作，将毛根从纸筒的一端穿到另一端", 
      "孩子操作：把毛根和纸筒交给孩子，鼓励他自己尝试",
      "重复练习：准备多根不同颜色的毛根，让孩子反复练习"
    ],
    tips: [
      "难度调整：如果孩子觉得困难，可以选择更短、更硬的材料",
      "观察要点：观察孩子如何调整手腕和手指的角度来完成穿的动作"
    ],
    safety_notes: "确保毛根或吸管的末端没有尖锐部分",
    extensions: "可以在纸筒上涂上颜色，变成一个喂怪兽的游戏",
    duration: 4,
    difficulty: 3,
    activity_type: "quiet"
  }
]

async function testMigration() {
  console.log('Testing migration with simple games...')
  
  try {
    // 首先测试连接
    const { data: testConnection, error: connectionError } = await supabase
      .from('games')
      .select('count')
      .limit(1)
      
    if (connectionError) {
      console.log('Connection test result:', connectionError.message)
      
      if (connectionError.message.includes('relation "games" does not exist')) {
        console.log('Games table does not exist. Creating table first...')
        
        // 尝试创建表的最小版本
        const createTableQuery = `
          CREATE TABLE IF NOT EXISTS games (
            id VARCHAR PRIMARY KEY,
            name VARCHAR NOT NULL,
            age_range VARCHAR NOT NULL,
            scene VARCHAR NOT NULL,
            props VARCHAR NOT NULL,
            focus VARCHAR NOT NULL,
            core_goal TEXT NOT NULL,
            materials TEXT NOT NULL,
            steps TEXT[] NOT NULL,
            tips TEXT[] NOT NULL,
            safety_notes TEXT,
            extensions TEXT,
            duration INTEGER NOT NULL,
            difficulty INTEGER NOT NULL,
            activity_type VARCHAR NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
          );
        `
        
        console.log('Creating table...')
        // 注意：Supabase客户端可能不支持直接执行DDL，需要在Supabase控制台手动执行
        console.log('Please execute this SQL in your Supabase SQL editor:')
        console.log(createTableQuery)
        
        return
      }
    } else {
      console.log('Successfully connected to Supabase!')
    }
    
    // 插入测试数据
    console.log('Inserting test games...')
    const { data, error } = await supabase
      .from('games')
      .upsert(testGames, { 
        onConflict: 'id',
        ignoreDuplicates: false 
      })

    if (error) {
      console.error('Error inserting test games:', error)
    } else {
      console.log('Successfully inserted test games!')
      
      // 验证数据
      const { data: games, error: selectError } = await supabase
        .from('games')
        .select('*')
        .limit(5)
        
      if (selectError) {
        console.error('Error selecting games:', selectError)
      } else {
        console.log(`Found ${games?.length || 0} games in database`)
        if (games && games.length > 0) {
          console.log('Sample game:', games[0].name)
        }
      }
    }
    
  } catch (error) {
    console.error('Migration test failed:', error)
  }
}

if (require.main === module) {
  testMigration()
    .then(() => {
      console.log('Test completed!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Test failed:', error)
      process.exit(1)
    })
}