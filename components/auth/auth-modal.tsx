'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react'
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
  const { signIn, signUp } = useAuth()
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