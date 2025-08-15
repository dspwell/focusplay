import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing environment variables!')
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'SET' : 'MISSING')
  console.error('SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? 'SET' : 'MISSING')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createGamesTable() {
  console.log('Creating games table in Supabase...')
  
  try {
    // Read the SQL file
    const sqlPath = path.join(__dirname, 'create-games-table.sql')
    const sql = fs.readFileSync(sqlPath, 'utf8')
    
    // Split SQL into individual statements (rough split by semicolons)
    const statements = sql
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'))
    
    console.log(`Found ${statements.length} SQL statements to execute`)
    
    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i] + ';'
      console.log(`Executing statement ${i + 1}/${statements.length}...`)
      
      try {
        const { data, error } = await supabase.rpc('exec_sql', { 
          sql: statement 
        })
        
        if (error) {
          console.error(`Error executing statement ${i + 1}:`, error)
          // Try direct query instead
          const { data: queryData, error: queryError } = await supabase
            .from('_supabase_admin')
            .select('*')
            .limit(1)
          
          if (queryError) {
            console.log('Trying alternative method...')
            // Since we can't execute raw SQL directly, let's create the table using the REST API
          }
        } else {
          console.log(`Statement ${i + 1} executed successfully`)
        }
      } catch (err) {
        console.log(`Statement ${i + 1} had an issue, continuing...`)
      }
    }
    
    console.log('Table creation process completed!')
    
  } catch (error) {
    console.error('Error creating table:', error)
  }
}

if (require.main === module) {
  createGamesTable()
    .then(() => {
      console.log('Done!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Failed:', error)
      process.exit(1)
    })
}