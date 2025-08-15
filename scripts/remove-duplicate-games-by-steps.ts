import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

interface Game {
  id: string
  name: string
  steps: string[]
  created_at: string
}

// 标准化游戏步骤，用于比较
function normalizeSteps(steps: string[]): string {
  return steps
    .map(step => step.replace(/\s+/g, ' ').trim()) // 标准化空白字符
    .join('|||') // 用特殊分隔符连接
    .toLowerCase() // 转为小写比较
}

async function removeDuplicateGamesBySteps() {
  try {
    console.log('开始根据游戏步骤内容查找和删除重复游戏...')

    // 获取所有游戏的steps内容
    const { data: allGames, error: fetchError } = await supabase
      .from('games')
      .select('id, name, steps, created_at')
      .order('created_at', { ascending: true }) // 按创建时间排序，早创建的在前

    if (fetchError) {
      console.error('获取游戏数据失败:', fetchError)
      return
    }

    if (!allGames || allGames.length === 0) {
      console.log('数据库中没有游戏数据')
      return
    }

    console.log(`数据库中共有 ${allGames.length} 个游戏`)

    // 用于存储已见过的步骤和对应的游戏
    const seenSteps = new Map<string, Game>()
    const duplicateGames: Game[] = []

    // 遍历所有游戏，查找重复的步骤内容
    for (const game of allGames) {
      const normalizedSteps = normalizeSteps(game.steps || [])
      
      if (seenSteps.has(normalizedSteps)) {
        // 找到重复的步骤内容
        const existingGame = seenSteps.get(normalizedSteps)!
        
        // 比较创建时间，保留更新的游戏
        const currentGameTime = new Date(game.created_at).getTime()
        const existingGameTime = new Date(existingGame.created_at).getTime()
        
        if (currentGameTime > existingGameTime) {
          // 当前游戏更新，删除旧的，保留新的
          duplicateGames.push(existingGame)
          seenSteps.set(normalizedSteps, game)
          console.log(`发现重复: "${existingGame.name}" (旧) vs "${game.name}" (新) - 将删除旧的`)
        } else {
          // 旧游戏更新，删除当前的
          duplicateGames.push(game)
          console.log(`发现重复: "${game.name}" (旧) vs "${existingGame.name}" (新) - 将删除旧的`)
        }
      } else {
        // 首次见到这个步骤内容
        seenSteps.set(normalizedSteps, game)
      }
    }

    console.log(`\n找到 ${duplicateGames.length} 个重复游戏需要删除`)

    if (duplicateGames.length === 0) {
      console.log('没有发现重复的游戏步骤')
      return
    }

    // 显示将要删除的游戏
    console.log('\n将要删除的重复游戏:')
    duplicateGames.forEach((game, index) => {
      console.log(`${index + 1}. ${game.name} (ID: ${game.id}, 创建时间: ${game.created_at})`)
    })

    // 批量删除重复游戏
    const gameIdsToDelete = duplicateGames.map(game => game.id)
    
    const { error: deleteError } = await supabase
      .from('games')
      .delete()
      .in('id', gameIdsToDelete)

    if (deleteError) {
      console.error('删除重复游戏失败:', deleteError)
      return
    }

    console.log(`\n✅ 成功删除 ${duplicateGames.length} 个重复游戏！`)
    
    // 获取最终游戏数量
    const { count: finalCount, error: countError } = await supabase
      .from('games')
      .select('id', { count: 'exact' })

    if (!countError) {
      console.log(`数据库中现在共有 ${finalCount} 个游戏`)
    }

    console.log('\n🎯 重复游戏清理完成！')

  } catch (error) {
    console.error('脚本执行出错：', error)
  }
}

if (require.main === module) {
  removeDuplicateGamesBySteps()
    .then(() => {
      console.log('重复游戏清理脚本执行完成')
      process.exit(0)
    })
    .catch((error) => {
      console.error('脚本执行失败：', error)
      process.exit(1)
    })
}