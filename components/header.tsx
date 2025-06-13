"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useFontSize } from "@/hooks/use-font-size"

const mainNavigation = [
  { name: "대회·공모전", href: "/civil-services" },
  { name: "대외활동", href: "/education" },
  { name: "교육정보", href: "/policies" },
  { name: "마이페이지", href: "/mypage" },
]

export default function Header() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { currentFontSize, changeFontSize, fontSizeOptions } = useFontSize()

  return (
    <header className="bg-white">
      {/* 상단 헤더 */}
      <div className="container px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">메뉴 열기</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px]">
                <div className="flex flex-col gap-6 py-6">
                  <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                    <img src="/placeholder.svg?height=40&width=40" alt="로고" className="h-10 w-10" />
                    지역균형24
                  </Link>
                  <nav className="flex flex-col gap-1">
                    {mainNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100",
                          pathname === item.href && "bg-gray-100 font-medium",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* 모바일 화면에서 화면 크기 설정 */}
                  <div className="border-t pt-4">
                    <h3 className="px-3 text-sm font-medium mb-2">화면 크기 설정</h3>
                    <div className="space-y-1">
                      {fontSizeOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => changeFontSize(option.value)}
                          className={cn(
                            "flex items-center justify-between w-full px-3 py-2 text-sm rounded-md",
                            currentFontSize === option.value ? "bg-gray-100 font-medium" : "hover:bg-gray-50",
                          )}
                        >
                          <span>{option.label}</span>
                          {currentFontSize === option.value && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2">
              <img src="/placeholder.svg?height=40&width=40" alt="로고" className="h-10 w-10" />
              <span className="font-bold text-lg text-[#1a6fb3]">{"ASDF"}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-4 text-sm">
              <Link href="/support" className="text-gray-600 hover:text-gray-900">
                이용안내
              </Link>
              <span className="text-gray-300">|</span>
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <span>화면크기</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block z-10 pt-1">
                  <div className="absolute h-2 w-full top-[-8px]"></div>
                  {fontSizeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => changeFontSize(option.value)}
                      className="flex items-center justify-between w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      <span>{option.label}</span>
                      {currentFontSize === option.value && <Check className="h-4 w-4" />}
                    </button>
                  ))}
                </div>
              </div>
              <span className="text-gray-300">|</span>
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <span>Language</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block z-10 pt-1">
                  <div className="absolute h-2 w-full top-[-8px]"></div>
                  <Link href="?lang=ko" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    한국어
                  </Link>
                  <Link href="?lang=en" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    English
                  </Link>
                </div>
              </div>
              <span className="text-gray-300">|</span>
              {isLoggedIn ? (
                <Link href="/mypage" className="text-gray-600 hover:text-gray-900">
                  마이페이지
                </Link>
              ) : (
                <Link href="/login" className="text-gray-600 hover:text-gray-900">
                  로그인
                </Link>
              )}
            </div>

            <Button variant="ghost" size="icon" className="text-gray-700 md:hidden">
              <User className="h-5 w-5" />
              <span className="sr-only">사용자</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="border-y border-gray-200 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-3 text-gray-700 hover:text-[#1a6fb3] hover:border-b-2 hover:border-[#1a6fb3] -mb-[1px]",
                  pathname === item.href && "text-[#1a6fb3] border-b-2 border-[#1a6fb3] font-medium",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
