import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create client with different options
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  db: {
    schema: 'public'
  },
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Simple test game
const testGame = {
  id: "direct-test-01",
  name: "测试游戏",
  age_range: "2-2.5",
  scene: "home",
  props: "household", 
  focus: "cognition",
  core_goal: "测试数据库连接",
  materials: "测试材料",
  steps: ["步骤1", "步骤2", "步骤3"],
  tips: ["提示1", "提示2"],
  safety_notes: "安全提示",
  extensions: "扩展内容",
  duration: 5,
  difficulty: 2,
  activity_type: "quiet"
}

async function directInsert() {
  console.log('Attempting direct insert...')
  console.log('Supabase URL:', supabaseUrl)
  
  try {
    // First try a simple operation
    console.log('Testing basic connection...')
    
    // Try using raw SQL through RPC if available
    const { data: versionData, error: versionError } = await supabase
      .rpc('version')
      
    if (versionError) {
      console.log('RPC version test failed:', versionError.message)
    } else {
      console.log('RPC version test successful')
    }
    
    // Try direct insert
    console.log('Attempting insert...')
    const { data, error } = await supabase
      .from('games')
      .insert([testGame])
      .select()

    if (error) {
      console.error('Insert failed:', error)
      
      // Maybe the table needs to be refreshed in the API
      console.log('Trying upsert instead...')
      const { data: upsertData, error: upsertError } = await supabase
        .from('games')
        .upsert([testGame], { onConflict: 'id' })
        .select()
        
      if (upsertError) {
        console.error('Upsert also failed:', upsertError)
        
        // Let's try a different approach - check if we can access the table at all
        console.log('Checking table accessibility...')
        const { count, error: countError } = await supabase
          .from('games')
          .select('*', { count: 'exact', head: true })
          
        if (countError) {
          console.error('Count query failed:', countError)
          
          // Try a completely different client configuration
          console.log('Trying alternative client configuration...')
          const altClient = createClient(supabaseUrl, supabaseServiceKey, {
            auth: {
              persistSession: false,
              autoRefreshToken: false
            }
          })
          
          const { data: altData, error: altError } = await altClient
            .from('games')
            .select('count')
            .limit(1)
            
          if (altError) {
            console.error('Alternative client also failed:', altError)
          } else {
            console.log('Alternative client successful!')
          }
          
        } else {
          console.log(`Table accessible, current count: ${count}`)
        }
      } else {
        console.log('Upsert successful:', upsertData)
      }
    } else {
      console.log('Insert successful:', data)
    }
    
  } catch (error) {
    console.error('Exception:', error)
  }
}

if (require.main === module) {
  directInsert()
    .then(() => {
      console.log('Direct insert test completed!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Direct insert failed:', error)
      process.exit(1)
    })
}