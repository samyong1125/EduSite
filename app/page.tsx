import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Search } from "lucide-react"
import MainBanner from "@/components/main-banner"
import ServiceCategories from "@/components/service-categories"
import PopularServices from "@/components/popular-services"
import NoticeSection from "@/components/notice-section"
import QuickMenu from "@/components/quick-menu"
import QuickLinks from "@/components/quick-links"
import NoticePreview from "@/components/notice-preview"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 메인 배너와 오른쪽 콘텐츠 */}
      <section className="py-6 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* 왼쪽 영역 */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* 왼쪽 배너 */}
              <div className="h-[220px]">
                <MainBanner />
              </div>

              {/* 검색창 */}
              <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col items-center">
                  <h2 className="text-base font-medium mb-3">원하시는 서비스를 검색하세요</h2>
                  <div className="relative w-full">
                    <div className="flex">
                      <div className="relative flex-grow">
                        <input
                          type="text"
                          placeholder="찾으시는 서비스를 입력하세요"
                          className="w-full py-2 px-3 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1a6fb3]"
                        />
                      </div>
                      <Button size="sm" className="rounded-l-none bg-[#1a6fb3] hover:bg-[#155a94]">
                        <Search className="h-4 w-4 mr-1" />
                        검색
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽 콘텐츠 */}
            <div className="flex flex-col gap-4">
              <NoticePreview />
              <QuickLinks />
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 카테고리 */}
      <ServiceCategories />

      {/* 인기 서비스 */}
      <section className="py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">인기 서비스</h2>
            <Link href="/services" className="text-sm text-[#1a6fb3] hover:underline">
              전체보기
            </Link>
          </div>
          <PopularServices />
        </div>
      </section>

      {/* 공지사항 및 퀵메뉴 */}
      <section className="py-8 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <NoticeSection />
            </div>
            <div>
              <QuickMenu />
            </div>
          </div>
        </div>
      </section>

      {/* 배너 영역 */}
      <section className="py-6 bg-white border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center">
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">지역 균형 발전 정책 안내</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      지역 균형 발전을 위한 다양한 정책과 지원 사업을 확인하세요.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/policies">자세히 보기</Link>
                    </Button>
                  </div>
                  <div className="hidden md:block w-1/3 bg-blue-50 h-full">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="지역 균형 발전 정책"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center">
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">교육 지원 프로그램</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      지역 인재를 위한 다양한 교육 지원 프로그램을 확인하세요.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/education">자세히 보기</Link>
                    </Button>
                  </div>
                  <div className="hidden md:block w-1/3 bg-blue-50 h-full">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="교육 지원 프로그램"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
