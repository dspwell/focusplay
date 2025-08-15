import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ErrorBoundary } from "@/components/error-boundary"
import { Toaster } from "sonner"
import { GlobalLoadingIndicator } from "@/components/global-loading-indicator"
import { AuthProvider } from "@/lib/auth-context"
import { generateStructuredData } from "@/lib/seo"
import { WebVitals } from "@/components/performance/web-vitals"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: "FocusPlay - 幼儿专注力发展平台",
    template: "%s | FocusPlay"
  },
  description: "专业的2-4岁幼儿专注力发展评估与训练平台，提供个性化游戏推荐和科学训练计划。基于科学研究，帮助家长培养孩子的专注力、认知能力和社交技能。",
  keywords: ["幼儿专注力", "儿童发展", "专注力训练", "亲子游戏", "早教", "2-4岁幼儿", "认知发展", "精细动作", "大动作", "语言能力", "社交能力", "情感发展"],
  authors: [{ name: "FocusPlay Team" }],
  creator: "FocusPlay",
  publisher: "FocusPlay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://focusplay.com'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
    },
  },
  openGraph: {
    title: "FocusPlay - 幼儿专注力发展平台",
    description: "专业的2-4岁幼儿专注力发展评估与训练平台，提供个性化游戏推荐和科学训练计划",
    url: '/',
    siteName: 'FocusPlay',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FocusPlay - 幼儿专注力发展平台',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FocusPlay - 幼儿专注力发展平台",
    description: "专业的2-4岁幼儿专注力发展评估与训练平台，提供个性化游戏推荐和科学训练计划",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_SITE_VERIFICATION,
    other: {
      'baidu-site-verification': [process.env.BAIDU_SITE_VERIFICATION || ''],
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteStructuredData = generateStructuredData('website')
  const organizationStructuredData = generateStructuredData('organization')

  return (
    <html lang="zh-CN" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <ErrorBoundary>
          <AuthProvider>
            <WebVitals />
            <GlobalLoadingIndicator />
            {children}
            <Toaster
              position="top-right"
              expand={false}
              richColors
              closeButton
              toastOptions={{
                duration: 5000,
              }}
            />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
