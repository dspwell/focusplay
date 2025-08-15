import type { Metadata } from 'next'

export interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noIndex?: boolean
}

const defaultConfig = {
  siteName: 'FocusPlay',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://focusplay.com',
  defaultTitle: 'FocusPlay - 幼儿专注力发展平台',
  defaultDescription: '专业的2-4岁幼儿专注力发展评估与训练平台，提供个性化游戏推荐和科学训练计划',
  defaultImage: '/og-image.png',
  twitterHandle: '@focusplay',
  author: 'FocusPlay Team',
  keywords: ['幼儿专注力', '儿童发展', '专注力训练', '亲子游戏', '早教', '2-4岁幼儿', '认知发展']
}

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title,
    description = defaultConfig.defaultDescription,
    keywords = [],
    image = defaultConfig.defaultImage,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author = defaultConfig.author,
    section,
    tags = [],
    noIndex = false
  } = config

  const fullTitle = title 
    ? `${title} | ${defaultConfig.siteName}`
    : defaultConfig.defaultTitle

  const fullUrl = url ? `${defaultConfig.baseUrl}${url}` : defaultConfig.baseUrl
  const fullImage = image.startsWith('http') ? image : `${defaultConfig.baseUrl}${image}`

  const allKeywords = [...defaultConfig.keywords, ...keywords]

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: author }],
    creator: defaultConfig.siteName,
    publisher: defaultConfig.siteName,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    metadataBase: new URL(defaultConfig.baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultConfig.siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || defaultConfig.defaultTitle,
        },
      ],
      locale: 'zh_CN',
      type: type as any,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: defaultConfig.twitterHandle,
      images: [fullImage],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_SITE_VERIFICATION,
      yahoo: process.env.YAHOO_SITE_VERIFICATION,
      other: {
        'baidu-site-verification': [process.env.BAIDU_SITE_VERIFICATION || ''],
      },
    },
  }
}

export function generateStructuredData(type: 'website' | 'organization' | 'article' | 'product', data: any = {}) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  switch (type) {
    case 'website':
      return {
        ...baseStructuredData,
        name: defaultConfig.siteName,
        description: defaultConfig.defaultDescription,
        url: defaultConfig.baseUrl,
        inLanguage: 'zh-CN',
        copyrightYear: new Date().getFullYear(),
        author: {
          '@type': 'Organization',
          name: defaultConfig.siteName,
        },
        ...data,
      }

    case 'organization':
      return {
        ...baseStructuredData,
        name: defaultConfig.siteName,
        description: defaultConfig.defaultDescription,
        url: defaultConfig.baseUrl,
        logo: `${defaultConfig.baseUrl}/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: '客服',
          availableLanguage: ['Chinese'],
        },
        ...data,
      }

    case 'article':
      return {
        ...baseStructuredData,
        headline: data.title,
        description: data.description,
        image: data.image ? `${defaultConfig.baseUrl}${data.image}` : defaultConfig.defaultImage,
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        author: {
          '@type': 'Person',
          name: data.author || defaultConfig.author,
        },
        publisher: {
          '@type': 'Organization',
          name: defaultConfig.siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${defaultConfig.baseUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url ? `${defaultConfig.baseUrl}${data.url}` : defaultConfig.baseUrl,
        },
        ...data,
      }

    case 'product':
      return {
        ...baseStructuredData,
        name: data.name,
        description: data.description,
        image: data.image ? `${defaultConfig.baseUrl}${data.image}` : defaultConfig.defaultImage,
        brand: {
          '@type': 'Brand',
          name: defaultConfig.siteName,
        },
        aggregateRating: data.rating && {
          '@type': 'AggregateRating',
          ratingValue: data.rating.value,
          reviewCount: data.rating.count,
        },
        offers: data.offers && {
          '@type': 'Offer',
          price: data.offers.price || '0',
          priceCurrency: 'CNY',
          availability: 'https://schema.org/InStock',
        },
        ...data,
      }

    default:
      return baseStructuredData
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${defaultConfig.baseUrl}${item.url}`,
    })),
  }
}

// 游戏相关的结构化数据
export function generateGameStructuredData(game: any) {
  return generateStructuredData('product', {
    name: game.name,
    description: game.description,
    category: '幼儿游戏',
    audience: {
      '@type': 'Audience',
      audienceType: '幼儿',
      suggestedMinAge: Math.floor(game.age_min / 12),
      suggestedMaxAge: Math.floor(game.age_max / 12),
    },
    educationalLevel: '学前教育',
    learningResourceType: '互动游戏',
    interactivityType: 'active',
    typicalAgeRange: `${game.age_min}-${game.age_max}个月`,
    timeRequired: `PT${game.duration_min || 15}M`,
    difficulty: game.difficulty,
    keywords: game.focuses?.join(', '),
  })
}

export default {
  generateMetadata,
  generateStructuredData,
  generateBreadcrumbStructuredData,
  generateGameStructuredData,
  defaultConfig,
}