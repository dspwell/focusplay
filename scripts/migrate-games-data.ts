import { createClient } from '@supabase/supabase-js'
import { GAMES_DATABASE } from './gamedatabase''
import * as dotenv from 'dotenv'
import * as path from 'path'

// Load environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env.local') })

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role key for admin operations

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing environment variables!')
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'SET' : 'MISSING')
  console.error('SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? 'SET' : 'MISSING')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

interface DatabaseGame {
  id: string
  name: string
  age_range: string
  scene: string
  props: string
  focus: string
  core_goal: string
  materials: string
  steps: string[]
  tips: string[]
  safety_notes?: string
  extensions?: string
  duration: number
  difficulty: number
  activity_type: string
}

async function migrateGamesToDatabase() {
  console.log('Starting game data migration...')
  console.log(`Found ${GAMES_DATABASE.length} games to migrate`)

  // Transform hardcoded game data to database format
  const gamesToInsert: DatabaseGame[] = GAMES_DATABASE.map(game => ({
    id: game.id,
    name: game.name,
    age_range: game.ageRange,
    scene: game.scene,
    props: game.props,
    focus: game.focus,
    core_goal: game.coreGoal,
    materials: game.materials,
    steps: game.steps || [],
    tips: game.tips || [],
    safety_notes: game.safetyNotes || null,
    extensions: game.extensions || null,
    duration: game.duration,
    difficulty: game.difficulty,
    activity_type: game.activityType
  }))

  // Batch insert games in chunks of 100 to avoid request size limits
  const chunkSize = 100
  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < gamesToInsert.length; i += chunkSize) {
    const chunk = gamesToInsert.slice(i, i + chunkSize)
    
    console.log(`Inserting chunk ${Math.floor(i / chunkSize) + 1}/${Math.ceil(gamesToInsert.length / chunkSize)}`)
    
    try {
      const { data, error } = await supabase
        .from('games')
        .upsert(chunk, { 
          onConflict: 'id',
          ignoreDuplicates: false 
        })

      if (error) {
        console.error(`Error inserting chunk starting at index ${i}:`, error)
        errorCount += chunk.length
      } else {
        console.log(`Successfully inserted ${chunk.length} games`)
        successCount += chunk.length
      }
    } catch (err) {
      console.error(`Exception inserting chunk starting at index ${i}:`, err)
      errorCount += chunk.length
    }
  }

  console.log('\n=== Migration Summary ===')
  console.log(`Total games processed: ${GAMES_DATABASE.length}`)
  console.log(`Successfully migrated: ${successCount}`)
  console.log(`Errors: ${errorCount}`)

  // Verify migration by counting total games in database
  try {
    const { count, error } = await supabase
      .from('games')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error verifying migration:', error)
    } else {
      console.log(`Total games in database after migration: ${count}`)
    }
  } catch (err) {
    console.error('Exception verifying migration:', err)
  }
}

// Run migration if this script is called directly
if (require.main === module) {
  migrateGamesToDatabase()
    .then(() => {
      console.log('Migration completed!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Migration failed:', error)
      process.exit(1)
    })
}

export { migrateGamesToDatabase }