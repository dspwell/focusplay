'use client'

import { useEffect } from 'react'

export function WebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // 监控Core Web Vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry)
        getFID(onPerfEntry)
        getFCP(onPerfEntry)
        getLCP(onPerfEntry)
        getTTFB(onPerfEntry)
      }).catch(err => {
        console.warn('Failed to load web-vitals:', err)
      })
    }
  }, [])

  return null
}

function onPerfEntry(metric: any) {
  // 在生产环境中，您可以将这些数据发送到分析服务
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric)
  }

  // 示例：发送到Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }

  // 示例：发送到自定义分析端点
  if (process.env.NEXT_PUBLIC_ANALYTICS_URL) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        id: metric.id,
        navigationType: metric.navigationType,
        timestamp: Date.now(),
        url: window.location.pathname,
      }),
    }).catch(err => {
      console.warn('Failed to send analytics:', err)
    })
  }
}

export default WebVitals