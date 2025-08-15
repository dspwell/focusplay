import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function verifyTable() {
  console.log('Verifying games table...')
  
  try {
    // Try to select from games table
    const { data, error, count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
      .limit(1)
      
    if (error) {
      console.error('Error accessing games table:', error)
      
      // Try raw SQL query instead
      console.log('Trying raw SQL query...')
      const { data: sqlData, error: sqlError } = await supabase
        .rpc('exec_sql', { sql: 'SELECT COUNT(*) FROM games;' })
        
      if (sqlError) {
        console.error('Raw SQL also failed:', sqlError)
      } else {
        console.log('Raw SQL result:', sqlData)
      }
    } else {
      console.log('✅ Games table exists!')
      console.log(`Current row count: ${count}`)
      if (data && data.length > 0) {
        console.log('Sample data:', data[0])
      }
    }
    
  } catch (error) {
    console.error('Exception:', error)
  }
}

if (require.main === module) {
  verifyTable()
    .then(() => {
      console.log('Verification completed!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Verification failed:', error)
      process.exit(1)
    })
}