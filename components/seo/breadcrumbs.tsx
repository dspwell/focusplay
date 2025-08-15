'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { generateBreadcrumbStructuredData } from '@/lib/seo'
import StructuredData from './structured-data'

export interface BreadcrumbItem {
  name: string
  url: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // 总是包含首页
  const allItems = [
    { name: 'FocusPlay', url: '/' },
    ...items
  ]

  // 生成结构化数据
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(allItems)

  return (
    <>
      <StructuredData data={breadcrumbStructuredData} type="breadcrumb" />
      
      <nav 
        aria-label="面包屑导航" 
        className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`}
      >
        <ol className="flex items-center space-x-1">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
              )}
              
              {item.current || index === allItems.length - 1 ? (
                <span 
                  className="font-medium text-gray-900"
                  aria-current="page"
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" />
                  ) : (
                    item.name
                  )}
                </span>
              ) : (
                <Link 
                  href={item.url}
                  className="hover:text-blue-600 transition-colors"
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" />
                  ) : (
                    item.name
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs