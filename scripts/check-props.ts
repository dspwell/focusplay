import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkValidProps() {
  const { data } = await supabase.from('games').select('props, scene').limit(100)
  const uniqueProps = [...new Set(data?.map(g => g.props))].sort()
  const uniqueScenes = [...new Set(data?.map(g => g.scene))].sort()
  console.log('Valid props values:', uniqueProps)
  console.log('Valid scene values:', uniqueScenes)
}

checkValidProps()