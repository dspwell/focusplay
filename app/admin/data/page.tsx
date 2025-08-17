'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Download, 
  Upload, 
  FileText, 
  Database,
  ArrowLeft,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import { useRequireAdmin } from '../../../hooks/use-admin'
import { PageWrapper } from '../../../components/page-loading'
import { Loader2 } from 'lucide-react'
import { useErrorHandler } from '../../../hooks/use-error-handler'
import { toast } from 'sonner'
import Link from 'next/link'

export default function DataManagementPage() {
  const { isAdmin, loading: authLoading } = useRequireAdmin()
  const { handleAsyncOperation } = useErrorHandler()
  const [exportLoading, setExportLoading] = useState(false)
  const [importLoading, setImportLoading] = useState(false)
  const [importData, setImportData] = useState('')
  const [importResults, setImportResults] = useState<any>(null)

  // 导出数据
  const handleExport = async (table: string, format: string) => {
    setExportLoading(true)
    
    await handleAsyncOperation(async () => {
      const searchParams = new URLSearchParams({ table, format })
      const response = await fetch(`/api/admin/data/export?${searchParams}`)
      
      if (!response.ok) {
        throw new Error('Export failed')
      }

      // 创建下载链接
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      
      const contentDisposition = response.headers.get('content-disposition')
      const filename = contentDisposition 
        ? contentDisposition.split('filename=')[1]?.replace(/"/g, '')
        : `${table}_export.${format}`
      
      a.download = filename
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      
      toast.success('数据导出成功！')
    }, '导出数据')
    
    setExportLoading(false)
  }

  // 导入游戏数据
  const handleImport = async (mode: string) => {
    if (!importData.trim()) {
      toast.error('请输入要导入的数据')
      return
    }

    setImportLoading(true)
    
    await handleAsyncOperation(async () => {
      let games
      try {
        games = JSON.parse(importData)
      } catch (error) {
        throw new Error('JSON格式错误，请检查数据格式')
      }

      const response = await fetch('/api/admin/data/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ games, mode })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Import failed')
      }

      const result = await response.json()
      setImportResults(result.data)
      
      const { summary } = result.data
      toast.success(`导入完成！成功: ${summary.success}, 失败: ${summary.errors}`)
    }, '导入数据')
    
    setImportLoading(false)
  }

  if (authLoading) {
    return <Loader2 className="h-5 w-5 animate-spin" />
  }

  if (!isAdmin) {
    return null
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* 页面标题 */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link href="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  返回管理后台
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">数据管理</h1>
                <p className="text-gray-600">导入导出系统数据</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 数据导出 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  数据导出
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">游戏数据</h3>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => handleExport('games', 'json')}
                        disabled={exportLoading}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        JSON
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleExport('games', 'csv')}
                        disabled={exportLoading}
                      >
                        <Database className="h-4 w-4 mr-2" />
                        CSV
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">游戏会话数据</h3>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => handleExport('sessions', 'json')}
                        disabled={exportLoading}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        JSON
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleExport('sessions', 'csv')}
                        disabled={exportLoading}
                      >
                        <Database className="h-4 w-4 mr-2" />
                        CSV
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">用户数据（仅超级管理员）</h3>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => handleExport('users', 'json')}
                        disabled={exportLoading}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        JSON
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleExport('users', 'csv')}
                        disabled={exportLoading}
                      >
                        <Database className="h-4 w-4 mr-2" />
                        CSV
                      </Button>
                    </div>
                  </div>
                </div>

                {exportLoading && (
                  <div className="flex items-center justify-center py-4">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span className="ml-2">正在导出...</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 数据导入 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  游戏数据导入
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="import-data">JSON数据</Label>
                    <Textarea
                      id="import-data"
                      placeholder="粘贴游戏JSON数据..."
                      value={importData}
                      onChange={(e) => setImportData(e.target.value)}
                      rows={10}
                      className="font-mono text-sm"
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleImport('create')}
                      disabled={importLoading || !importData.trim()}
                    >
                      {importLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : '创建新游戏'}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleImport('upsert')}
                      disabled={importLoading || !importData.trim()}
                    >
                      更新或创建
                    </Button>
                  </div>

                  <div className="text-sm text-gray-600 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">导入说明：</p>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li>"创建新游戏"：只创建新游戏，如果游戏已存在会报错</li>
                          <li>"更新或创建"：如果游戏存在则更新，不存在则创建</li>
                          <li>必需字段：name, description, scenario, tool</li>
                          <li>年龄范围：24-48个月，难度：1-5级</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 导入结果 */}
          {importResults && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  导入结果
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* 摘要 */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{importResults.summary.total}</div>
                      <div className="text-sm text-blue-600">总计</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{importResults.summary.success}</div>
                      <div className="text-sm text-green-600">成功</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">{importResults.summary.errors}</div>
                      <div className="text-sm text-red-600">失败</div>
                    </div>
                  </div>

                  {/* 详细结果 */}
                  {importResults.details.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-3">详细结果</h3>
                      <div className="max-h-60 overflow-y-auto border rounded-lg">
                        {importResults.details.map((detail: any, index: number) => (
                          <div 
                            key={index} 
                            className={`p-3 border-b last:border-b-0 ${
                              detail.error ? 'bg-red-50' : 'bg-green-50'
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <span className="font-medium">{detail.game}</span>
                              {detail.error ? (
                                <span className="text-red-600 text-sm">{detail.error}</span>
                              ) : (
                                <span className="text-green-600 text-sm">
                                  {detail.action} (ID: {detail.id})
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    variant="outline"
                    onClick={() => setImportResults(null)}
                  >
                    关闭结果
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}