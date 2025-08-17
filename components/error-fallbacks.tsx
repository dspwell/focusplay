import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  AlertCircle, 
  RefreshCw, 
  Home, 
  Wifi, 
  WifiOff,
  ServerCrash,
  FileX,
  Clock
} from 'lucide-react'

interface ErrorFallbackProps {
  error?: Error
  resetError: () => void
}

// 通用错误回退组件
export function GeneralErrorFallback({ error, resetError }: ErrorFallbackProps) {
  const getErrorInfo = () => {
    if (!error) return { type: 'unknown', icon: AlertCircle, title: '未知错误' }
    
    const message = error.message.toLowerCase()
    
    if (message.includes('network') || message.includes('fetch')) {
      return {
        type: 'network',
        icon: WifiOff,
        title: '网络连接失败',
        description: '请检查您的网络连接并重试'
      }
    }
    
    if (message.includes('timeout')) {
      return {
        type: 'timeout',
        icon: Clock,
        title: '请求超时',
        description: '服务器响应时间过长，请稍后重试'
      }
    }
    
    if (message.includes('not found') || message.includes('404')) {
      return {
        type: 'notFound',
        icon: FileX,
        title: '内容未找到',
        description: '您要查找的内容不存在或已被移除'
      }
    }
    
    if (message.includes('server') || message.includes('500')) {
      return {
        type: 'server',
        icon: ServerCrash,
        title: '服务器错误',
        description: '服务器暂时无法处理您的请求，请稍后重试'
      }
    }
    
    return {
      type: 'unknown',
      icon: AlertCircle,
      title: '发生了错误',
      description: '抱歉，应用遇到了意外问题'
    }
  }

  const errorInfo = getErrorInfo()
  const Icon = errorInfo.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Icon className="h-16 w-16 text-red-500" />
          </div>
          <CardTitle className="text-2xl text-gray-800">
            {errorInfo.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-gray-600">
            {errorInfo.description}
          </p>

          {process.env.NODE_ENV === 'development' && error && (
            <div className="text-left bg-gray-100 p-4 rounded-lg text-sm">
              <p className="font-semibold text-red-600 mb-2">错误详情（开发环境）:</p>
              <p className="text-gray-800 break-all">{error.message}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={resetError} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              重试
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="flex items-center gap-2"
            >
              刷新页面
            </Button>
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              返回首页
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// 网络错误专用回退组件
export function NetworkErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <WifiOff className="h-16 w-16 text-blue-500" />
          </div>
          <CardTitle className="text-xl text-gray-800">
            网络连接失败
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-gray-600">
            无法连接到服务器，请检查您的网络连接状态。
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">解决方案：</h4>
            <ul className="text-sm text-blue-700 space-y-1 text-left">
              <li>• 检查 WiFi 或移动数据连接</li>
              <li>• 尝试刷新页面</li>
              <li>• 稍后重试</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Button onClick={resetError} className="flex items-center gap-2">
              <Wifi className="h-4 w-4" />
              重新连接
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              刷新页面
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// 404 页面未找到错误
export function NotFoundErrorFallback({ resetError }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <FileX className="h-16 w-16 text-gray-500" />
          </div>
          <CardTitle className="text-xl text-gray-800">
            页面未找到
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-gray-600">
            抱歉，您要访问的页面不存在或已被移除。
          </p>

          <div className="flex flex-col gap-3">
            <Button onClick={() => window.history.back()} variant="outline">
              返回上页
            </Button>
            <Button onClick={() => window.location.href = '/'} className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              回到首页
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// 服务器错误回退组件
export function ServerErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <ServerCrash className="h-16 w-16 text-yellow-500" />
          </div>
          <CardTitle className="text-xl text-gray-800">
            服务器暂时无法访问
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-gray-600">
            我们的服务器正在维护中，请稍后重试。
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              如果问题持续存在，请联系我们的技术支持团队。
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button onClick={resetError} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              重试
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              返回首页
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// 组件级错误边界（更小的错误处理）
export function InlineErrorFallback({ 
  error, 
  resetError, 
  title = '加载失败',
  compact = false 
}: ErrorFallbackProps & { 
  title?: string
  compact?: boolean 
}) {
  if (compact) {
    return (
      <div className="flex items-center justify-center p-4 border border-red-200 bg-red-50 rounded-lg">
        <div className="text-center space-y-2">
          <AlertCircle className="h-8 w-8 text-red-500 mx-auto" />
          <p className="text-sm text-red-700">{title}</p>
          <Button size="sm" variant="outline" onClick={resetError}>
            重试
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Card className="border-red-200">
      <CardContent className="p-6 text-center space-y-4">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">内容无法加载，请稍后重试</p>
        </div>
        <Button size="sm" onClick={resetError} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          重新加载
        </Button>
      </CardContent>
    </Card>
  )
}