import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { MapPin, Search, Filter, Clock, Award } from "lucide-react"

// 임시 데이터
const activities = [
  {
    id: 1,
    title: "지역 기업 인턴십 프로그램",
    description: "지역 우수 기업에서 실무 경험을 쌓을 수 있는 인턴십 프로그램",
    category: "인턴십",
    location: "경상북도",
    period: "2025년 7월 ~ 8월 (8주)",
    participants: "30명",
    deadline: "2025년 6월 15일",
    benefits: "월 150만원 지원금",
    organizer: "경상북도청",
    image: "/placeholder.svg?height=200&width=400",
    isNew: true,
  },
  {
    id: 2,
    title: "농촌 체험 봉사활동",
    description: "농촌 지역 활성화를 위한 봉사활동 및 문화 교류 프로그램",
    category: "봉사활동",
    location: "전라남도",
    period: "2025년 8월 1일 ~ 8월 7일 (1주)",
    participants: "50명",
    deadline: "2025년 7월 10일",
    benefits: "봉사활동 인증서 발급",
    organizer: "전라남도청",
    image: "/placeholder.svg?height=200&width=400",
    isNew: true,
  },
  {
    id: 3,
    title: "지역 문화유산 탐방단",
    description: "지역 문화유산을 탐방하고 홍보하는 청년 탐방단 활동",
    category: "탐방",
    location: "경주",
    period: "2025년 9월 ~ 10월 (격주 토요일)",
    participants: "20명",
    deadline: "2025년 8월 20일",
    benefits: "활동비 지원, 수료증 발급",
    organizer: "문화재청",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
  },
  {
    id: 4,
    title: "지역 청년 멘토링 프로그램",
    description: "지역 출신 성공한 선배들과의 멘토링 프로그램",
    category: "멘토링",
    location: "온라인/오프라인",
    period: "2025년 9월 ~ 12월 (4개월)",
    participants: "100명",
    deadline: "2025년 8월 30일",
    benefits: "네트워킹 기회 제공",
    organizer: "교육부",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
  },
  {
    id: 5,
    title: "지역 관광 서포터즈",
    description: "지역 관광지를 홍보하는 SNS 서포터즈 활동",
    category: "서포터즈",
    location: "전국",
    period: "2025년 10월 ~ 2026년 3월 (6개월)",
    participants: "50명",
    deadline: "2025년 9월 15일",
    benefits: "활동비 지원, 우수 활동자 시상",
    organizer: "한국관광공사",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
  },
  {
    id: 6,
    title: "지역 축제 기획단",
    description: "지역 축제 기획 및 운영에 참여하는 활동",
    category: "기획단",
    location: "강원도",
    period: "2025년 11월 ~ 2026년 2월 (4개월)",
    participants: "30명",
    deadline: "2025년 10월 10일",
    benefits: "활동비 지원, 기획 경험 제공",
    organizer: "강원도청",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
  },
]

export default function ActivitiesPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* 페이지 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="text-2xl font-bold mb-2">대외활동</h1>
          <p className="text-gray-500">다양한 대외활동 프로그램을 통해 실무 경험을 쌓고 역량을 키워보세요.</p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {/* 검색 및 필터 */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="프로그램명, 주최기관 등으로 검색" className="pl-9" />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="지역" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="seoul">서울</SelectItem>
                  <SelectItem value="gyeongbuk">경상북도</SelectItem>
                  <SelectItem value="jeonnam">전라남도</SelectItem>
                  <SelectItem value="gangwon">강원도</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="카테고리" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="internship">인턴십</SelectItem>
                  <SelectItem value="volunteer">봉사활동</SelectItem>
                  <SelectItem value="mentoring">멘토링</SelectItem>
                  <SelectItem value="supporters">서포터즈</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* 탭 메뉴 */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="all">전체</TabsTrigger>
            <TabsTrigger value="recruiting">모집중</TabsTrigger>
            <TabsTrigger value="upcoming">모집예정</TabsTrigger>
            <TabsTrigger value="closed">모집마감</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recruiting" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.slice(0, 3).map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.slice(3, 5).map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="closed" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.slice(5, 6).map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* 페이지네이션 */}
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-1">
            <Button variant="outline" size="icon" disabled>
              <span className="sr-only">이전 페이지</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button variant="outline" size="sm" className="bg-[#1a6fb3] text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              4
            </Button>
            <Button variant="outline" size="sm">
              5
            </Button>
            <Button variant="outline" size="icon">
              <span className="sr-only">다음 페이지</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  )
}

function ActivityCard({ activity }: { activity: any }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-[2/1] relative">
        <img src={activity.image || "/placeholder.svg"} alt={activity.title} className="object-cover w-full h-full" />
        <div className="absolute top-2 right-2 flex gap-1">
          <Badge className="bg-[#1a6fb3]">{activity.category}</Badge>
          {activity.isNew && <Badge className="bg-red-500">NEW</Badge>}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{activity.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-2 text-sm">
        <p className="text-gray-500 line-clamp-2">{activity.description}</p>
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="h-4 w-4" />
          <span>{activity.period}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>{activity.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Award className="h-4 w-4" />
          <span>{activity.benefits}</span>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            주최: {activity.organizer} | 접수마감: {activity.deadline}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full bg-[#1a6fb3] hover:bg-[#155a94]">
          <Link href={`/activities/${activity.id}`}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
