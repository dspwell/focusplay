import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '@/lib/api/middleware'

export const runtime = 'nodejs';

// 导入游戏数据（管理员）
const importGamesHandler = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 验证管理员权限
  const { data: { session }, error: authError } = await supabase.auth.getSession()
  if (authError || !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { data: profile, error: profileError } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', session.user.id)
    .single()

  if (profileError || !profile || !['admin', 'super_admin'].includes(profile.role)) {
    return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 })
  }

  try {
    const body = await req.json()
    const { games, mode = 'create' } = body // mode: 'create' | 'update' | 'upsert'

    if (!games || !Array.isArray(games)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid games data. Expected array of games.' 
      }, { status: 400 })
    }

    const results = {
      success: 0,
      errors: 0,
      details: [] as any[]
    }

    for (const game of games) {
      try {
        // 验证必需字段
        if (!game.name || !game.description || !game.scenario || !game.tool) {
          results.errors++
          results.details.push({
            game: game.name || 'Unknown',
            error: 'Missing required fields: name, description, scenario, tool'
          })
          continue
        }

        // 验证数据类型和范围
        if (game.age_min && (game.age_min < 24 || game.age_min > 48)) {
          results.errors++
          results.details.push({
            game: game.name,
            error: 'age_min must be between 24-48'
          })
          continue
        }

        if (game.age_max && (game.age_max < 24 || game.age_max > 48)) {
          results.errors++
          results.details.push({
            game: game.name,
            error: 'age_max must be between 24-48'
          })
          continue
        }

        if (game.difficulty && (game.difficulty < 1 || game.difficulty > 5)) {
          results.errors++
          results.details.push({
            game: game.name,
            error: 'difficulty must be between 1-5'
          })
          continue
        }

        // 准备游戏数据
        const gameData = {
          name: game.name,
          description: game.description,
          age_min: game.age_min || 24,
          age_max: game.age_max || 48,
          difficulty: game.difficulty || 1,
          scenario: game.scenario,
          tool: game.tool,
          focuses: game.focuses || [],
          steps: game.steps || [],
          safety_notes: game.safety_notes || null,
          materials: game.materials || [],
          tags: game.tags || [],
          is_active: game.is_active !== false,
          created_by: session.user.id
        }

        let result
        if (mode === 'update' && game.id) {
          // 更新现有游戏
          result = await supabase
            .from('games')
            .update(gameData)
            .eq('id', game.id)
            .select('id, name')
            .single()
        } else if (mode === 'upsert' && game.id) {
          // 先尝试更新，如果不存在则创建
          const { data: existing } = await supabase
            .from('games')
            .select('id')
            .eq('id', game.id)
            .single()

          if (existing) {
            result = await supabase
              .from('games')
              .update(gameData)
              .eq('id', game.id)
              .select('id, name')
              .single()
          } else {
            result = await supabase
              .from('games')
              .insert(gameData)
              .select('id, name')
              .single()
          }
        } else {
          // 创建新游戏
          result = await supabase
            .from('games')
            .insert(gameData)
            .select('id, name')
            .single()
        }

        if (result.error) {
          results.errors++
          results.details.push({
            game: game.name,
            error: result.error.message
          })
        } else {
          results.success++
          results.details.push({
            game: game.name,
            action: mode === 'create' ? 'created' : mode === 'update' ? 'updated' : 'upserted',
            id: result.data.id
          })
        }

      } catch (error) {
        results.errors++
        results.details.push({
          game: game.name || 'Unknown',
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    // 记录导入操作
    await supabase
      .from('usage_analytics')
      .insert({
        user_id: session.user.id,
        event_type: 'admin_data_import',
        event_data: {
          table: 'games',
          mode,
          total_records: games.length,
          success_count: results.success,
          error_count: results.errors
        }
      })

    return NextResponse.json({
      success: true,
      data: {
        summary: {
          total: games.length,
          success: results.success,
          errors: results.errors
        },
        details: results.details
      }
    })

  } catch (error) {
    console.error('Error in import games:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

export const POST = withErrorHandling(importGamesHandler)