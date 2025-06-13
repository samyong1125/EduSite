"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex items-center justify-center py-12">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <img src="/placeholder.svg?height=40&width=40" alt="로고" className="h-10 w-10" />
          <span className="font-bold text-lg text-[#1a6fb3]">지역균형24</span>
        </Link>

        <Tabs defaultValue="login" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">로그인</TabsTrigger>
            <TabsTrigger value="register">회원가입</TabsTrigger>
          </TabsList>

          {/* 로그인 탭 */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>로그인</CardTitle>
                <CardDescription>아이디와 비밀번호를 입력하여 로그인하세요.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">아이디(이메일)</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">비밀번호</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">{showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded border-gray-300 text-[#1a6fb3] focus:ring-[#1a6fb3]"
                    />
                    <Label htmlFor="remember" className="text-sm font-normal">
                      아이디 저장
                    </Label>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <Link href="/find-id" className="text-gray-500 hover:text-gray-900">
                      아이디 찾기
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/find-password" className="text-gray-500 hover:text-gray-900">
                      비밀번호 찾기
                    </Link>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full bg-[#1a6fb3] hover:bg-[#155a94]">로그인</Button>
                <div className="relative w-full">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-gray-500">간편 로그인</span>
                  </div>
                </div>
                <div className="flex gap-4 justify-center">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg?height=24&width=24" alt="카카오 로그인" className="h-6 w-6" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg?height=24&width=24" alt="네이버 로그인" className="h-6 w-6" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg?height=24&width=24" alt="구글 로그인" className="h-6 w-6" />
                  </button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* 회원가입 탭 */}
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>회원가입</CardTitle>
                <CardDescription>지역균형24 서비스 이용을 위한 회원가입을 진행합니다.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email">이메일</Label>
                  <div className="flex gap-2">
                    <Input id="register-email" type="email" placeholder="example@email.com" className="flex-1" />
                    <Button variant="outline">중복확인</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">비밀번호</Label>
                  <Input id="register-password" type="password" placeholder="••••••••" />
                  <p className="text-xs text-gray-500">영문, 숫자, 특수문자 조합 8-20자리</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password-confirm">비밀번호 확인</Label>
                  <Input id="register-password-confirm" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-name">이름</Label>
                  <Input id="register-name" placeholder="이름을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-phone">휴대폰 번호</Label>
                  <div className="flex gap-2">
                    <Input id="register-phone" placeholder="'-' 없이 입력" className="flex-1" />
                    <Button variant="outline">인증요청</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="verification-code">인증번호</Label>
                  <div className="flex gap-2">
                    <Input id="verification-code" placeholder="인증번호 입력" className="flex-1" />
                    <Button variant="outline">확인</Button>
                  </div>
                  <p className="text-xs text-gray-500">인증번호가 발송되었습니다. 3분 내에 입력해주세요.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 rounded border-gray-300 text-[#1a6fb3] focus:ring-[#1a6fb3]"
                    />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      <span className="text-[#1a6fb3] font-medium">[필수]</span> 이용약관 동의
                    </Label>
                    <Button variant="link" className="h-auto p-0 text-xs">
                      보기
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="h-4 w-4 rounded border-gray-300 text-[#1a6fb3] focus:ring-[#1a6fb3]"
                    />
                    <Label htmlFor="privacy" className="text-sm font-normal">
                      <span className="text-[#1a6fb3] font-medium">[필수]</span> 개인정보 수집 및 이용 동의
                    </Label>
                    <Button variant="link" className="h-auto p-0 text-xs">
                      보기
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="marketing"
                      className="h-4 w-4 rounded border-gray-300 text-[#1a6fb3] focus:ring-[#1a6fb3]"
                    />
                    <Label htmlFor="marketing" className="text-sm font-normal">
                      <span className="text-gray-500">[선택]</span> 마케팅 정보 수신 동의
                    </Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#1a6fb3] hover:bg-[#155a94]">회원가입</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
