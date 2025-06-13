import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, Filter, Calendar, MapPin, Clock, Star, Briefcase } from "lucide-react"

// 임시 검색 결과 데이터
const searchResults = {
  competitions: [
    {
      id: 1,
      title: "지역 청년 해커톤",
      description: "지역 문제 해결을 위한 아이디어와 프로토타입을 개발하는 대회",
      category: "해커톤",
      location: "부산",
      date: "2025년 7월 15일",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: 2,
      title: "농촌 게임잼",
      description: "농촌 지역 활성화를 주제로 한 게임 개발 대회",
      category: "게임잼",
      location: "전라남도",
      date: "2025년 8월 5일",
      image: "/placeholder.svg?height=100&width=180",
    },
  ],
  courses: [
    {
      id: 1,
      title: "웹 개발 기초",
      description: "HTML, CSS, JavaScript를 활용한 웹 개발 입문 과정",
      category: "IT/개발",
      duration: "20시간",
      rating: "4.8",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: 4,
      title: "창업 기초 과정",
      description: "지역 기반 소규모 창업을 위한 기초 지식과 실무",
      category: "창업",
      duration: "25시간",
      rating: "4.6",
      image: "/placeholder.svg?height=100&width=180",
    },
  ],
  activities: [
    {
      id: 1,
      title: "지역 기업 인턴십 프로그램",
      description: "지역 우수 기업에서 실무 경험을 쌓을 수 있는 인턴십 프로그램",
      category: "인턴십",
      location: "경상북도",
      period: "2025년 7월 ~ 8월 (8주)",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: 2,
      title: "농촌 체험 봉사활동",
      description: "농촌 지역 활성화를 위한 봉사활동 및 문화 교류 프로그램",
      category: "봉사활동",
      location: "전라남도",
      period: "2025년 8월 1일 ~ 8월 7일 (1주)",
      image: "/placeholder.svg?height=100&width=180",
    },
  ],
  notices: [
    {
      id: 1,
      title: "2025년 지역 균형 발전 교육 지원 사업 공고",
      date: "2025.06.10",
      category: "공지",
    },
    {
      id: 2,
      title: "제3회 지역 청년 해커톤 참가자 모집",
      date: "2025.06.08",
      category: "행사",
    },
  ],
}

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || ""
  const totalResults =
    searchResults.competitions.length +
    searchResults.courses.length +
    searchResults.activities.length +
    searchResults.notices.length

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* 페이지 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="text-2xl font-bold mb-2">검색 결과</h1>
          <p className="text-gray-500">
            <span className="text-[#1a6fb3] font-medium">"{query}"</span>에 대한 검색 결과 {totalResults}건을
            찾았습니다.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {/* 검색 및 필터 */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="검색어를 입력하세요" className="pl-9" defaultValue={query} />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="카테고리" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="competitions">대회/공모전</SelectItem>
                  <SelectItem value="courses">교육과정</SelectItem>
                  <SelectItem value="activities">대외활동</SelectItem>
                  <SelectItem value="notices">공지사항</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button className="bg-[#1a6fb3] hover:bg-[#155a94]">검색</Button>
            </div>
          </div>
        </div>

        {/* 탭 메뉴 */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="all">전체 ({totalResults})</TabsTrigger>
            <TabsTrigger value="competitions">대회/공모전 ({searchResults.competitions.length})</TabsTrigger>
            <TabsTrigger value="courses">교육과정 ({searchResults.courses.length})</TabsTrigger>
            <TabsTrigger value="activities">대외활동 ({searchResults.activities.length})</TabsTrigger>
            <TabsTrigger value="notices">공지사항 ({searchResults.notices.length})</TabsTrigger>
          </TabsList>

          {/* 전체 탭 */}
          <TabsContent value="all" className="mt-4 space-y-6">
            {/* 대회/공모전 섹션 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold">대회/공모전</h2>
                <Link href="/civil-services" className="text-sm text-[#1a6fb3] hover:underline">
                  더보기
                </Link>
              </div>
              <div className="space-y-4">
                {searchResults.competitions.map((item) => (
                  <CompetitionSearchResult key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* 교육과정 섹션 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold">교육과정</h2>
                <Link href="/policies" className="text-sm text-[#1a6fb3] hover:underline">
                  더보기
                </Link>
              </div>
              <div className="space-y-4">
                {searchResults.courses.map((item) => (
                  <CourseSearchResult key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* 대외활동 섹션 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold">대외활동</h2>
                <Link href="/education" className="text-sm text-[#1a6fb3] hover:underline">
                  더보기
                </Link>
              </div>
              <div className="space-y-4">
                {searchResults.activities.map((item) => (
                  <ActivitySearchResult key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* 공지사항 섹션 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold">공지사항</h2>
                <Link href="/notices" className="text-sm text-[#1a6fb3] hover:underline">
                  더보기
                </Link>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">분류</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">제목</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">등록일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.notices.map((notice) => (
                      <tr key={notice.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{notice.category}</span>
                        </td>
                        <td className="px-4 py-3">
                          <Link href={`/notices/${notice.id}`} className="text-sm hover:text-[#1a6fb3] hover:underline">
                            {notice.title}
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">{notice.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* 대회/공모전 탭 */}
          <TabsContent value="competitions" className="mt-4">
            <div className="space-y-4">
              {searchResults.competitions.map((item) => (
                <CompetitionSearchResult key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          {/* 교육과정 탭 */}
          <TabsContent value="courses" className="mt-4">
            <div className="space-y-4">
              {searchResults.courses.map((item) => (
                <CourseSearchResult key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          {/* 대외활동 탭 */}
          <TabsContent value="activities" className="mt-4">
            <div className="space-y-4">
              {searchResults.activities.map((item) => (
                <ActivitySearchResult key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          {/* 공지사항 탭 */}
          <TabsContent value="notices" className="mt-4">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">분류</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">제목</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">등록일</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.notices.map((notice) => (
                    <tr key={notice.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{notice.category}</span>
                      </td>
                      <td className="px-4 py-3">
                        <Link href={`/notices/${notice.id}`} className="text-sm hover:text-[#1a6fb3] hover:underline">
                          {notice.title}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">{notice.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// 대회/공모전 검색 결과 컴포넌트
function CompetitionSearchResult({ item }: { item: any }) {
  return (
    <Card>
      <CardContent className="p-0">
        <Link href={`/competitions/${item.id}`} className="flex hover:bg-gray-50 transition-colors">
          <div className="w-[180px] h-[100px] flex-shrink-0">
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-[#1a6fb3]">{item.category}</Badge>
            </div>
            <h3 className="font-medium mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-1 mb-2">{item.description}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}

// 교육과정 검색 결과 컴포넌트
function CourseSearchResult({ item }: { item: any }) {
  return (
    <Card>
      <CardContent className="p-0">
        <Link href={`/courses/${item.id}`} className="flex hover:bg-gray-50 transition-colors">
          <div className="w-[180px] h-[100px] flex-shrink-0">
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-[#1a6fb3]">{item.category}</Badge>
            </div>
            <h3 className="font-medium mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-1 mb-2">{item.description}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{item.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}

// 대외활동 검색 결과 컴포넌트
function ActivitySearchResult({ item }: { item: any }) {
  return (
    <Card>
      <CardContent className="p-0">
        <Link href={`/activities/${item.id}`} className="flex hover:bg-gray-50 transition-colors">
          <div className="w-[180px] h-[100px] flex-shrink-0">
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-[#1a6fb3]">{item.category}</Badge>
            </div>
            <h3 className="font-medium mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-1 mb-2">{item.description}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Briefcase className="h-3 w-3" />
                <span>{item.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}
