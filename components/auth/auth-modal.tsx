'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useErrorHandler } from '../../hooks/use-error-handler'
import { useSimpleLoading } from '../../hooks/use-loading'
import { LoadingSpinner } from '../ui/loading'
import { toast } from 'sonner'

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultTab?: 'signin' | 'signup'
}

export function AuthModal({ open, onOpenChange, defaultTab = 'signin' }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [showPassword, setShowPassword] = useState(false)
  const { signIn, signUp, signInWithGoogle } = useAuth()
  const { handleAsyncOperation } = useErrorHandler()
  const { loading, withLoading } = useSimpleLoading()

  // 登录表单状态
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  })

  // 注册表单状态
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  })

  // 验证邮箱格式
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // 处理登录
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(signInForm.email)) {
      toast.error('请输入有效的邮箱地址')
      return
    }

    if (signInForm.password.length < 6) {
      toast.error('密码至少需要6个字符')
      return
    }

    await withLoading(async () => {
      await signIn(signInForm.email, signInForm.password)
      onOpenChange(false)
      // 重置表单
      setSignInForm({ email: '', password: '' })
    })
  }

  // 处理注册
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(signUpForm.email)) {
      toast.error('请输入有效的邮箱地址')
      return
    }

    if (signUpForm.password.length < 6) {
      toast.error('密码至少需要6个字符')
      return
    }

    if (signUpForm.password !== signUpForm.confirmPassword) {
      toast.error('两次输入的密码不匹配')
      return
    }

    if (signUpForm.displayName.trim().length === 0) {
      toast.error('请输入您的姓名')
      return
    }

    await withLoading(async () => {
      await signUp(
        signUpForm.email, 
        signUpForm.password, 
        signUpForm.displayName.trim()
      )
      onOpenChange(false)
      // 重置表单
      setSignUpForm({ email: '', password: '', confirmPassword: '', displayName: '' })
    })
  }

  // 处理谷歌登录
  const handleGoogleSignIn = async () => {
    await withLoading(async () => {
      await signInWithGoogle()
      // 注意：OAuth 登录会重定向，所以这里不需要关闭模态框
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            欢迎来到 FocusPlay
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">登录</TabsTrigger>
            <TabsTrigger value="signup">注册</TabsTrigger>
          </TabsList>

          {/* 登录表单 */}
          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email">邮箱地址</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="输入您的邮箱"
                    className="pl-10"
                    value={signInForm.email}
                    onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signin-password">密码</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signin-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="输入您的密码"
                    className="pl-10 pr-10"
                    value={signInForm.password}
                    onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    登录中...
                  </>
                ) : (
                  '登录'
                )}
              </Button>
            </form>

            {/* 分隔线 */}
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">或者</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Google 登录按钮 */}
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {loading ? '登录中...' : '使用 Google 登录'}
            </Button>

            <div className="text-center text-sm text-gray-600">
              还没有账户？
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 ml-1 font-medium"
                onClick={() => setActiveTab('signup')}
              >
                立即注册
              </button>
            </div>
          </TabsContent>

          {/* 注册表单 */}
          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">姓名</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="输入您的姓名"
                    className="pl-10"
                    value={signUpForm.displayName}
                    onChange={(e) => setSignUpForm({ ...signUpForm, displayName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email">邮箱地址</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="输入您的邮箱"
                    className="pl-10"
                    value={signUpForm.email}
                    onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">密码</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signup-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="至少6个字符"
                    className="pl-10 pr-10"
                    value={signUpForm.password}
                    onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-confirm">确认密码</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signup-confirm"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="再次输入密码"
                    className="pl-10"
                    value={signUpForm.confirmPassword}
                    onChange={(e) => setSignUpForm({ ...signUpForm, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    注册中...
                  </>
                ) : (
                  '注册账户'
                )}
              </Button>
            </form>

            {/* 分隔线 */}
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">或者</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Google 登录按钮 */}
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {loading ? '注册中...' : '使用 Google 注册'}
            </Button>

            <div className="text-center text-sm text-gray-600">
              已有账户？
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 ml-1 font-medium"
                onClick={() => setActiveTab('signin')}
              >
                立即登录
              </button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-xs text-center text-gray-500 mt-4">
          注册即表示您同意我们的
          <a href="/terms" className="text-blue-600 hover:text-blue-700 mx-1">服务条款</a>
          和
          <a href="/privacy" className="text-blue-600 hover:text-blue-700 ml-1">隐私政策</a>
        </div>
      </DialogContent>
    </Dialog>
  )
}