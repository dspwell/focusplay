import { NextRequest, NextResponse } from "next/server"
import { createClient } from "../@/lib/supabase"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()

    // Fetch plan
    const { data: plan, error: planError } = await supabase
      .from('plans')
      .select('*')
      .eq('id', params.id)
      .single()

    if (planError) {
      return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
    }

    // Fetch plan items with activities
    const { data: planItems, error: itemsError } = await supabase
      .from('plan_items')
      .select(`
        *,
        activity:activities(*)
      `)
      .eq('plan_id', params.id)
      .order('day', { ascending: true })

    if (itemsError) {
      console.error('Error fetching plan items:', itemsError)
      return NextResponse.json({ error: 'Failed to fetch plan items' }, { status: 500 })
    }

    return NextResponse.json({ plan, planItems })
  } catch (error) {
    console.error('Error in plan API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
