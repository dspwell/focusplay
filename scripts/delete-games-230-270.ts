import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

// 游戏230-270的ID列表
const gameIdsToDelete = [
  // 225-250的游戏ID
  'long-jump-champion-225',
  'mood-weather-bottle-226',
  'touch-memory-bag-227',
  'cause-effect-chain-228',
  'bean-mosaic-229',
  'crab-walk-challenge-230',
  'compliment-rain-231',
  'emotion-bingo-232',
  'shadow-matching-233',
  'car-slope-experiment-234',
  'finger-maze-235',
  'sound-radar-236',
  'color-relay-237',
  'desktop-bulldozer-238',
  'little-mailman-239',
  'shadow-mirror-exercise-240',
  'priority-sorting-241',
  'napkin-folding-242',
  'rainbow-salad-chef-243',
  'shape-hopscotch-244',
  'footprint-detective-245',
  'balloon-volleyball-246',
  'word-judge-247',
  'magnetic-house-248',
  'flashlight-theater-249',
  'savings-jar-250',
  // 251-270的游戏ID
  'shape-rotation-match-251',
  'straw-ball-blowing-252',
  'pattern-copy-master-253',
  'laundry-basket-basketball-254',
  'height-comparison-255',
  'table-waiter-256',
  'rhythm-stepping-257',
  'route-memory-258',
  'laundry-sorting-259',
  'ice-rescue-team-260',
  'mystery-package-261',
  'ladybug-dots-262',
  'traffic-light-game-263',
  'leaf-printing-264',
  'spot-the-difference-265',
  'foot-measuring-266',
  'story-tea-shop-267',
  'shape-fishing-268',
  'lullaby-puppet-show-269',
  'wind-experiment-270'
]

async function deleteGames230to270() {
  try {
    console.log(`开始删除游戏230-270（共${gameIdsToDelete.length}个游戏）...`)

    // 首先检查这些游戏是否存在
    const { data: existingGames, error: checkError } = await supabase
      .from('games')
      .select('id, name')
      .in('id', gameIdsToDelete)

    if (checkError) {
      console.error('检查游戏时出错:', checkError)
      return
    }

    console.log(`找到 ${existingGames?.length || 0} 个需要删除的游戏`)
    
    if (existingGames && existingGames.length > 0) {
      console.log('将要删除的游戏:')
      existingGames.forEach((game, index) => {
        console.log(`${index + 1}. ${game.name} (${game.id})`)
      })

      // 执行删除
      const { error: deleteError } = await supabase
        .from('games')
        .delete()
        .in('id', gameIdsToDelete)

      if (deleteError) {
        console.error('删除游戏时出错:', deleteError)
        return
      }

      console.log(`✅ 成功删除 ${existingGames.length} 个游戏！`)
    } else {
      console.log('没有找到需要删除的游戏')
    }

    // 检查删除后的总游戏数
    const { count, error: countError } = await supabase
      .from('games')
      .select('*', { count: 'exact', head: true })

    if (countError) {
      console.error('统计游戏数量时出错:', countError)
    } else {
      console.log(`删除后数据库中共有 ${count} 个游戏`)
    }

  } catch (error) {
    console.error('脚本执行出错：', error)
  }
}

if (require.main === module) {
  deleteGames230to270()
    .then(() => {
      console.log('游戏230-270删除完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}