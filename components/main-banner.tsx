"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Swiper 스타일 import
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const banners = [
  {
    id: 1,
    title: "새로운 지역균형24를 만나보세요",
    description: "지역 균형 발전을 위한 교육과 경험 제공 플랫폼",
    image: "/placeholder.svg?height=400&width=800",
    color: "bg-[#e7f4fd]",
  },
  {
    id: 2,
    title: "지역 인재 양성 프로그램",
    description: "지방 거주 학생들을 위한 특별 교육 프로그램",
    image: "/placeholder.svg?height=400&width=800",
    color: "bg-[#e8f3eb]",
  },
  {
    id: 3,
    title: "직업 체험 기회 확대",
    description: "지역 기업과 함께하는 실무 경험 프로그램",
    image: "/placeholder.svg?height=400&width=800",
    color: "bg-[#f0ebf8]",
  },
]

export default function MainBanner() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className="relative rounded-lg overflow-hidden h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "w-1.5 h-1.5 rounded-full bg-gray-300 inline-block mx-0.5",
          bulletActiveClass: "!bg-[#1a6fb3]",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="slide"
        speed={500}
        loop={true}
        className="h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className={`${banner.color}`}>
            <div className="relative h-full">
              <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-center">
                <div>
                  <h1 className="text-lg md:text-xl font-bold mb-1 text-white drop-shadow-sm">{banner.title}</h1>
                  <p className="text-xs text-white text-opacity-90 mb-2 drop-shadow-sm">{banner.description}</p>
                  <Button size="sm" className="bg-[#1a6fb3] hover:bg-[#155a94] text-xs h-7 px-2">
                    자세히 보기
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 이전 디자인의 네비게이션 버튼 */}
      <button
        className={`swiper-button-prev absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-0.5 shadow-md transition-opacity duration-300 z-10 w-5 h-5 flex items-center justify-center ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        aria-label="이전 배너"
      >
        <ChevronLeft className="h-3 w-3" />
      </button>
      <button
        className={`swiper-button-next absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-0.5 shadow-md transition-opacity duration-300 z-10 w-5 h-5 flex items-center justify-center ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        aria-label="다음 배너"
      >
        <ChevronRight className="h-3 w-3" />
      </button>

      {/* Swiper 기본 네비게이션 버튼 숨기기 */}
      <style jsx global>{`
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
      `}</style>

      {/* 커스텀 페이지네이션 */}
      <div className="swiper-pagination absolute bottom-1 left-0 right-0 flex justify-center gap-1 z-10"></div>
    </div>
  )
}
