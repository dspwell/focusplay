import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { getRandomGameFromDatabase } from "@/lib/gameservice"

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const RequestSchema = z.object({
  age_range: z.string(),
  scene: z.string(),
  props: z.string(),
  focus: z.string().optional(),
})

const GameDataSchema = z.object({
  game_name: z.string(),
  goals: z.array(z.string()).max(3),
  materials: z.string(),
  duration_min: z.number().min(3).max(8), // Updated to allow a wider range
  difficulty_star: z.number().min(1).max(5),
  activity_type: z.union([z.literal("quiet"), z.literal("active")]),
  steps: z.array(z.string()).min(3).max(5),
  tips: z.array(z.string()).min(2).max(4),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("收到的请求参数:", body) // 添加调试日志
    
    const { age_range, scene, props, focus } = RequestSchema.parse(body)
    console.log("解析后的参数:", { age_range, scene, props, focus }) // 添加调试日志

    // 从Supabase数据库中查找匹配的游戏  
    // 注意：getRandomGameFromDatabase的第一个参数叫ageRange，所以我们传入age_range但它内部会转换为ageRange
    const matchedGame = await getRandomGameFromDatabase(age_range, scene, props, focus === "none" ? undefined : focus)
    console.log("匹配到的游戏:", matchedGame) // 添加调试日志
    
    if (!matchedGame) {
      console.log("没有找到匹配的游戏") // 添加调试日志
      return NextResponse.json({ 
        success: false,
        error: "No matching games found for the selected criteria" 
      }, { status: 404 })
    }

    // 将游戏数据转换为前端期望的格式
    const gameData = {
      game_name: matchedGame.name,
      goals: [matchedGame.core_goal], // 核心目标作为主要目标
      materials: matchedGame.materials,
      duration_min: matchedGame.duration as number,
      difficulty_star: matchedGame.difficulty,
      activity_type: matchedGame.activity_type,
      steps: matchedGame.steps,
      tips: matchedGame.tips && matchedGame.tips.length > 0 
        ? matchedGame.tips 
        : ["游戏过程中注意安全，确保孩子在合适的环境中进行", "鼓励孩子尝试，给予积极的反馈和支持"], // 提供默认tips
    }

    console.log("转换后的游戏数据:", gameData) // 添加调试日志

    // 验证数据格式
    const validatedData = GameDataSchema.parse(gameData)
    return NextResponse.json({
      success: true,
      data: validatedData
    })

  } catch (error) {
    console.error("API Error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false,
        error: "Validation failed", 
        details: error.errors 
      }, { status: 400 })
    }

    return NextResponse.json({ 
      success: false,
      error: "Internal server error" 
    }, { status: 500 })
  }
}
