import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://focusplay.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/assessment`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/progress`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/children`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // 动态添加计划页面
    // 注意: 在实际应用中，您可能需要从数据库获取所有活跃的计划ID
    // {
    //   url: `${baseUrl}/plan/[id]`,
    //   lastModified: currentDate,
    //   changeFrequency: 'weekly',
    //   priority: 0.6,
    // },
  ]
}

// 为了生成动态sitemap，我们可以创建一个额外的函数
export async function generateDynamicSitemap(): Promise<MetadataRoute.Sitemap> {
  // 这里可以从数据库获取动态内容
  // const plans = await getActivePlans()
  // const games = await getPublicGames()
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/assessment`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/progress`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/children`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // 如果有动态内容，可以这样添加:
  // const dynamicPages = plans.map(plan => ({
  //   url: `${baseUrl}/plan/${plan.id}`,
  //   lastModified: new Date(plan.updated_at),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  return staticPages
}