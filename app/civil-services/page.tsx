import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Calendar, MapPin, Users, Search, Filter } from "lucide-react"

// 임시 데이터
const competitions = [
  {
    id: 1,
    title: "지역 청년 해커톤",
    description: "지역 문제 해결을 위한 아이디어와 프로토타입을 개발하는 대회",
    category: "해커톤",
    location: "부산",
    date: "2025년 7월 15일",
    participants: "120명",
    deadline: "2025년 6월 30일",
    prize: "총 상금 3,000만원",
    organizer: "부산광역시",
    image: "/placeholder.svg?height=200&width=400",
    isNew: true,
  },
  {
    id: 2,
    title: "농촌 게임잼",
    description: "농촌 지역 활성화를 주제로 한 게임 개발 대회",
    category: "게임잼",
    location: "전라남도",
    date: "2025년 8월 5일",
    participants: "80명",
    deadline: "2025년 7월 20일",
    prize: "총 상금 2,000만원",
    organizer: "전라남도청",
    image: "/placeholder.svg?height=200&width=400",
    isNew: true,
  },
  {
    id: 3,
    title: "지역 스포츠 경진대회",
    description: "지역 청소년들을 위한 다양한 스포츠 종목 경진대회",
    category: "스포츠",
    location: "강원도",
    date: "2025년 9월 20일",
    participants: "200명",
    deadline: "2025년 9월 1일",
    prize: "총 상금 1,500만원",
    organizer: "강원도청",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
  },
  {
    id: 4,
    title: "지방 창업 아이디어 경진대회",
    description: "지역 경제 활성화를 위한 창업 아이디어 발표 대회",
    category: "창업",
    location: "대구",
    date: "2025년 10월 10일",
    participants: "150명",
    deadline: "2025년 9월 25일",
    prize: "총 상금 5,000만원",
    organizer: "대구광역시",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
  },
  {
    id: 5,
    title: "지역 문화 콘텐츠 공모전",
    description: "지역 문화를 알리는 다양한 콘텐츠 제작 공모전",
    category: "콘텐츠",
    location: "전주",
    date: "2025년 11월 15일",
    participants: "100명",
    deadline: "2025년 10월 30일",
    prize: "총 상금 2,500만원",
    organizer: "전라북도청",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
  },
  {
    id: 6,
    title: "지역 관광 아이디어 공모전",
    description: "지역 관광 활성화를 위한 창의적인 아이디어 공모",
    category: "관광",
    location: "제주",
    date: "2025년 12월 5일",
    participants: "90명",
    deadline: "2025년 11월 20일",
    prize: "총 상금 3,500만원",
    organizer: "제주특별자치도",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
  },
]

export default function CompetitionsPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* 페이지 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="text-2xl font-bold mb-2">대회·공모전</h1>
          <p className="text-gray-500">지역에서 개최되는 다양한 대회와 공모전 정보를 확인하고 참여하세요.</p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {/* 검색 및 필터 */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="대회명, 주최기관 등으로 검색" className="pl-9" />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="지역" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="seoul">서울</SelectItem>
                  <SelectItem value="busan">부산</SelectItem>
                  <SelectItem value="daegu">대구</SelectItem>
                  <SelectItem value="jeju">제주</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="카테고리" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="hackathon">해커톤</SelectItem>
                  <SelectItem value="startup">창업</SelectItem>
                  <SelectItem value="content">콘텐츠</SelectItem>
                  <SelectItem value="sports">스포츠</SelectItem>
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
            <TabsTrigger value="ongoing">진행중</TabsTrigger>
            <TabsTrigger value="upcoming">예정</TabsTrigger>
            <TabsTrigger value="closed">마감</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.map((competition) => (
                <CompetitionCard key={competition.id} competition={competition} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ongoing" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.slice(0, 3).map((competition) => (
                <CompetitionCard key={competition.id} competition={competition} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.slice(3, 5).map((competition) => (
                <CompetitionCard key={competition.id} competition={competition} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="closed" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.slice(5, 6).map((competition) => (
                <CompetitionCard key={competition.id} competition={competition} />
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

function CompetitionCard({ competition }: { competition: any }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-[2/1] relative">
        <img
          src={competition.image || "/placeholder.svg"}
          alt={competition.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <Badge className="bg-[#1a6fb3]">{competition.category}</Badge>
          {competition.isNew && <Badge className="bg-red-500">NEW</Badge>}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{competition.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-2 text-sm">
        <p className="text-gray-500 line-clamp-2">{competition.description}</p>
        <div className="flex items-center gap-2 text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{competition.date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>{competition.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Users className="h-4 w-4" />
          <span>{competition.participants}</span>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            주최: {competition.organizer} | 접수마감: {competition.deadline}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full bg-[#1a6fb3] hover:bg-[#155a94]">
          <Link href={`/competitions/${competition.id}`}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
