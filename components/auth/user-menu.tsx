'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { 
  User, 
  Settings, 
  LogOut, 
  Baby,
  BarChart3,
  Crown,
  Shield
} from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useRole } from '../../hooks/use-admin'
import { useErrorHandler } from '../../hooks/use-error-handler'
import { AuthModal } from './auth-modal'

export function UserMenu() {
  const { user, profile, signOut } = useAuth()
  const { isAdmin } = useRole()
  const { handleAsyncOperation } = useErrorHandler()
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleSignOut = async () => {
    await handleAsyncOperation(
      () => signOut(),
      '退出登录'
    )
  }

  // 获取用户头像文字
  const getAvatarText = () => {
    if (profile?.display_name) {
      return profile.display_name.charAt(0).toUpperCase()
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase()
    }
    return 'U'
  }

  // 未登录状态
  if (!user) {
    return (
      <>
        <Button
          variant="outline"
          onClick={() => setShowAuthModal(true)}
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          登录
        </Button>
        <AuthModal 
          open={showAuthModal}
          onOpenChange={setShowAuthModal}
          defaultTab="signin"
        />
      </>
    )
  }

  // 已登录状态
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage 
              src={profile?.avatar_url || ''} 
              alt={profile?.display_name || '用户头像'} 
            />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
              {getAvatarText()}
            </AvatarFallback>
          </Avatar>
          
          {/* 会员等级指示器 */}
          {profile?.subscription_status === 'premium' && (
            <Crown className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500" />
          )}
          {isAdmin && (
            <Shield className="absolute -top-1 -right-1 h-4 w-4 text-red-500" />
          )}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {profile?.display_name || '用户'}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
            <div className="flex items-center gap-2 mt-2">
              {profile?.subscription_status === 'premium' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                  <Crown className="h-3 w-3" />
                  高级会员
                </span>
              )}
              {profile?.role === 'admin' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                  <Shield className="h-3 w-3" />
                  管理员
                </span>
              )}
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild>
          <a href="/dashboard" className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>个人中心</span>
          </a>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <a href="/children" className="cursor-pointer">
            <Baby className="mr-2 h-4 w-4" />
            <span>孩子档案</span>
          </a>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <a href="/progress" className="cursor-pointer">
            <BarChart3 className="mr-2 h-4 w-4" />
            <span>成长报告</span>
          </a>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <a href="/settings" className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>设置</span>
          </a>
        </DropdownMenuItem>
        
        {isAdmin && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="/admin" className="cursor-pointer">
                <Shield className="mr-2 h-4 w-4" />
                <span>管理后台</span>
              </a>
            </DropdownMenuItem>
          </>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          className="text-red-600 focus:text-red-600 focus:bg-red-50"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>退出登录</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// 简化的登录按钮组件
export function LoginButton({ 
  children, 
  variant = "default",
  size = "default"
}: {
  children?: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}) {
  const { user } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  if (user) return null

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setShowAuthModal(true)}
        className={variant === "ghost" ? "text-gray-600 hover:text-gray-800" : ""}
      >
        {children || '登录'}
      </Button>
      <AuthModal 
        open={showAuthModal}
        onOpenChange={setShowAuthModal}
        defaultTab="signin"
      />
    </>
  )
}

// 注册按钮组件
export function RegisterButton({ 
  children, 
  variant = "default",
  size = "default"
}: {
  children?: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}) {
  const { user } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  if (user) return null

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setShowAuthModal(true)}
        className={variant === "outline" ? "border-blue-600 text-blue-600 hover:bg-blue-50" : ""}
      >
        {children || '注册'}
      </Button>
      <AuthModal 
        open={showAuthModal}
        onOpenChange={setShowAuthModal}
        defaultTab="signup"
      />
    </>
  )
}