import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://focusplay.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/*',
          '/api/*',
          '/dashboard/*',
          '/progress/*',
          '/children/*',
          '/plan/*',
          '/auth/*',
          '/_next/*',
          '/private/*',
          '/temp/*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/*',
          '/api/*',
          '/dashboard/*',
          '/progress/*',
          '/children/*',
          '/plan/*',
          '/auth/*',
          '/_next/*',
          '/private/*',
          '/temp/*',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/*',
          '/api/*',
          '/dashboard/*',
          '/progress/*',
          '/children/*',
          '/plan/*',
          '/auth/*',
          '/_next/*',
          '/private/*',
          '/temp/*',
        ],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: [
          '/admin/*',
          '/api/*',
          '/dashboard/*',
          '/progress/*',
          '/children/*',
          '/plan/*',
          '/auth/*',
          '/_next/*',
          '/private/*',
          '/temp/*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}