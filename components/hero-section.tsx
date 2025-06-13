"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, MapPin, Users, Award } from "lucide-react"
// Make sure the import is correct
import { useMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const isMobile = useMobile()
  const [userType, setUserType] = useState<"student" | "jobseeker" | "business">("student")

  return (
    <section className="relative">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/10 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              <span>지역 균형 발전을 위한 교육 플랫폼</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              지역에 상관없이 <br className="hidden sm:inline" />
              <span className="text-primary">동등한 기회</span>를 제공합니다
            </h1>

            <p className="text-muted-foreground text-lg max-w-[600px]">
              교육과 실무 경험의 기회를 통해 지역 간 교육 격차와 취업 불균형을 해소하고, 지방 인재들의 성장을
              지원합니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                variant={userType === "student" ? "default" : "outline"}
                onClick={() => setUserType("student")}
                className="rounded-full"
              >
                학생
              </Button>
              <Button
                variant={userType === "jobseeker" ? "default" : "outline"}
                onClick={() => setUserType("jobseeker")}
                className="rounded-full"
              >
                구직자
              </Button>
              <Button
                variant={userType === "business" ? "default" : "outline"}
                onClick={() => setUserType("business")}
                className="rounded-full"
              >
                기업/자영업자
              </Button>
            </div>

            {userType === "student" && (
              <p className="text-sm md:text-base">
                다양한 대회와 교육 콘텐츠로 실력을 키우고, AI 맞춤 추천으로 최적의 학습 경로를 찾아보세요.
              </p>
            )}

            {userType === "jobseeker" && (
              <p className="text-sm md:text-base">
                실무 경험과 직업 교육으로 취업 경쟁력을 높이고, 지역 기업과의 연결 기회를 얻으세요.
              </p>
            )}

            {userType === "business" && (
              <p className="text-sm md:text-base">
                미래 인재를 육성하고 인력난 해소에 기여하며, 지역 경제 활성화에 동참하세요.
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/register">
                  시작하기 <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">더 알아보기</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>전국 17개 시도 지원</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>10,000+ 사용자</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>500+ 교육 콘텐츠</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-xl">
            <div className="aspect-video relative rounded-lg overflow-hidden border shadow-lg">
              <img
                src="/placeholder.svg?height=720&width=1280"
                alt="지역 균형 발전 교육 플랫폼"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
