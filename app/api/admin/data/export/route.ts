import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { withErrorHandling } from '../../@/lib/api/middleware'

// 导出数据（管理员）
const exportDataHandler = async (req: NextRequest) => {
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

  const searchParams = req.nextUrl.searchParams
  const table = searchParams.get('table') || 'games'
  const format = searchParams.get('format') || 'json'

  try {
    let data = null
    let filename = ''

    switch (table) {
      case 'games':
        const { data: games, error: gamesError } = await supabase
          .from('games')
          .select('*')
          .order('created_at', { ascending: false })

        if (gamesError) throw gamesError
        data = games
        filename = `games_export_${new Date().toISOString().split('T')[0]}`
        break

      case 'users':
        if (profile.role !== 'super_admin') {
          return NextResponse.json({ 
            success: false, 
            error: 'Only super administrators can export user data' 
          }, { status: 403 })
        }

        const { data: users, error: usersError } = await supabase
          .from('user_profiles')
          .select('id, email, display_name, role, subscription_status, created_at, last_active_at')
          .order('created_at', { ascending: false })

        if (usersError) throw usersError
        data = users
        filename = `users_export_${new Date().toISOString().split('T')[0]}`
        break

      case 'sessions':
        const { data: sessions, error: sessionsError } = await supabase
          .from('game_sessions')
          .select(`
            id,
            user_id,
            game_id,
            started_at,
            completed_at,
            duration_seconds,
            status,
            completion_percentage,
            engagement_score,
            accuracy_percentage,
            games(name),
            user_profiles(email)
          `)
          .order('started_at', { ascending: false })
          .limit(10000) // 限制导出数量

        if (sessionsError) throw sessionsError
        data = sessions
        filename = `sessions_export_${new Date().toISOString().split('T')[0]}`
        break

      default:
        return NextResponse.json({ 
          success: false, 
          error: 'Invalid table specified' 
        }, { status: 400 })
    }

    if (!data) {
      return NextResponse.json({ 
        success: false, 
        error: 'No data to export' 
      }, { status: 404 })
    }

    // 记录导出操作
    await supabase
      .from('usage_analytics')
      .insert({
        user_id: session.user.id,
        event_type: 'admin_data_export',
        event_data: {
          table,
          format,
          record_count: data.length
        }
      })

    if (format === 'csv') {
      // 转换为CSV格式
      if (data.length === 0) {
        return new NextResponse('No data available', {
          headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="${filename}.csv"`
          }
        })
      }

      const headers = Object.keys(data[0])
      const csvContent = [
        headers.join(','),
        ...data.map(row => 
          headers.map(header => {
            const value = row[header]
            if (value === null || value === undefined) return ''
            if (typeof value === 'object') return JSON.stringify(value)
            if (typeof value === 'string' && value.includes(',')) return `"${value}"`
            return value
          }).join(',')
        )
      ].join('\n')

      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="${filename}.csv"`
        }
      })
    } else {
      // 返回JSON格式
      return new NextResponse(JSON.stringify(data, null, 2), {
        headers: {
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="${filename}.json"`
        }
      })
    }

  } catch (error) {
    console.error('Error in export data:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

export const GET = withErrorHandling(exportDataHandler)