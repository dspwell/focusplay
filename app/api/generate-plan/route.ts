import { NextRequest } from "next/server"
import { createClient } from "@/lib/supabase"
import { pickActivities } from "@/lib/pickactivities"
import { Activity } from "@/lib/types"
import { withErrorHandling, successResponse, validateRequestBody, handleSupabaseError } from "@/lib/api-response"
import { createError } from "@/lib/errors"
import { z } from "zod"

export const runtime = 'nodejs';

// 请求体验证 schema
const generatePlanSchema = z.object({
  email: z.string().email('邮箱格式不正确'),
  ageMonths: z.number().int('年龄必须为整数').min(24, '年龄不能小于24个月').max(48, '年龄不能大于48个月'),
  scenario: z.enum(['home', 'outdoor', 'waiting', 'bedtime', 'travel'], { errorMap: () => ({ message: '场景参数无效' }) }),
  toolPref: z.union([z.enum(['hands', 'paper', 'blocks_puzzle', 'books_pictures', 'household']), z.literal('any')], { errorMap: () => ({ message: '道具偏好参数无效' }) }),
  focus: z.enum(['fine', 'language', 'cognition', 'gross', 'social']).optional()
})


async function generatePlanHandler(request: NextRequest) {
  // 验证请求体
  const body = await validateRequestBody(request, (data) => {
    const result = generatePlanSchema.safeParse(data)
    if (!result.success) {
      throw createError.validation(
        result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', '),
        { errors: result.error.errors }
      )
    }
    return result.data
  })

  const { email, ageMonths, scenario, toolPref, focus } = body
  const supabase = createClient()

  // Create the plan
  const { data: plan, error: planError } = await supabase
    .from('plans')
    .insert({
      email,
      age_months: ageMonths,
      scenario,
      tool_pref: toolPref,
      focus: focus || null
    })
    .select()
    .single()

  if (planError) {
    throw handleSupabaseError(planError)
  }

  if (!plan) {
    throw createError.api('计划创建失败')
  }

  // Fetch all activities
  const { data: activities, error: activitiesError } = await supabase
    .from('activities')
    .select('*')

  if (activitiesError) {
    throw handleSupabaseError(activitiesError)
  }

  if (!activities || activities.length === 0) {
    throw createError.notFound('活动数据')
  }

  // Generate 14 days of activities
  const planItems = []
  for (let day = 1; day <= 14; day++) {
    const selectedActivities = pickActivities(
      activities as Activity[],
      ageMonths,
      scenario,
      toolPref,
      focus
    )

    if (selectedActivities.length === 0) {
      throw createError.api(`第${day}天活动选择失败，没有找到合适的活动`, {
        day,
        criteria: { ageMonths, scenario, toolPref, focus }
      })
    }

    for (const activity of selectedActivities) {
      planItems.push({
        plan_id: plan.id,
        day,
        activity_id: activity.id
      })
    }
  }

  // Insert plan items
  const { error: itemsError } = await supabase
    .from('plan_items')
    .insert(planItems)

  if (itemsError) {
    throw handleSupabaseError(itemsError)
  }

  return successResponse({
    planId: plan.id,
    totalDays: 14,
    totalActivities: planItems.length
  }, 201)
}

export const POST = withErrorHandling(generatePlanHandler)
