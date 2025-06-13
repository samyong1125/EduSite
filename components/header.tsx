"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const mainNavigation = [
  { name: "대회·공모전", href: "/civil-services" },
  { name: "대외활동", href: "/education" },
  { name: "교육정보", href: "/policies" },
  { name: "마이페이지", href: "/support" },
]

export default function Header() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2">
              <img src="/placeholder.svg?height=40&width=40" alt="로고" className="h-10 w-10" />
              <span className="font-bold text-lg text-[#1a6fb3]">지역균형24</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-4 text-sm">
              <Link href="/help" className="text-gray-600 hover:text-gray-900">
                이용안내
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/sitemap" className="text-gray-600 hover:text-gray-900">
                사이트맵
              </Link>
              <span className="text-gray-300">|</span>
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <span>Language</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block z-10">
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
