'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  data: any
  type?: 'organization' | 'website' | 'article' | 'product' | 'breadcrumb'
}

export function StructuredData({ data, type = 'website' }: StructuredDataProps) {
  useEffect(() => {
    // 动态插入结构化数据到页面
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    script.id = `structured-data-${type}`
    
    // 移除已存在的相同类型的结构化数据
    const existingScript = document.getElementById(`structured-data-${type}`)
    if (existingScript) {
      existingScript.remove()
    }
    
    document.head.appendChild(script)
    
    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type}`)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [data, type])

  return null
}

export default StructuredData