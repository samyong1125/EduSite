import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, Filter, BookOpen, Clock, Star } from "lucide-react"

// 임시 데이터
const courses = [
  {
    id: 1,
    title: "웹 개발 기초",
    description: "HTML, CSS, JavaScript를 활용한 웹 개발 입문 과정",
    category: "IT/개발",
    duration: "20시간",
    lessons: "15개 강의",
    level: "입문",
    rating: "4.8",
    students: "1,245명",
    instructor: "김민수",
    image: "/placeholder.svg?height=200&width=400",
    isNew: true,
    isFree: false,
  },
  {
    id: 2,
    title: "농산물 마케팅 전략",
    description: "지역 농산물의 효과적인 마케팅 및 판로 개척 방법",
    category: "마케팅",
    duration: "15시간",
    lessons: "12개 강의",
    level: "중급",
    rating: "4.7",
    students: "856명",
    instructor: "이지원",
    image: "/placeholder.svg?height=200&width=400",
    isNew: true,
    isFree: false,
  },
  {
    id: 3,
    title: "관광 서비스 실무",
    description: "지역 관광 산업에서 필요한 서비스 실무 교육",
    category: "서비스",
    duration: "18시간",
    lessons: "14개 강의",
    level: "중급",
    rating: "4.9",
    students: "723명",
    instructor: "박서연",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
    isFree: true,
  },
  {
    id: 4,
    title: "창업 기초 과정",
    description: "지역 기반 소규모 창업을 위한 기초 지식과 실무",
    category: "창업",
    duration: "25시간",
    lessons: "20개 강의",
    level: "입문",
    rating: "4.6",
    students: "1,567명",
    instructor: "최준호",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
    isFree: false,
  },
  {
    id: 5,
    title: "지역 특산품 개발",
    description: "지역 특산품 개발 및 상품화 전략",
    category: "제품개발",
    duration: "16시간",
    lessons: "13개 강의",
    level: "고급",
    rating: "4.5",
    students: "432명",
    instructor: "정다영",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
    isFree: true,
  },
  {
    id: 6,
    title: "지역 축제 기획",
    description: "성공적인 지역 축제 기획 및 운영 노하우",
    category: "기획",
    duration: "22시간",
    lessons: "18개 강의",
    level: "중급",
    rating: "4.7",
    students: "678명",
    instructor: "한지민",
    image: "/placeholder.svg?height=200&width=400",
    isNew: false,
    isFree: false,
  },
]

export default function CoursesPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* 페이지 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="text-2xl font-bold mb-2">교육정보</h1>
          <p className="text-gray-500">국가직무능력표준(NCS) 기반의 다양한 직업 교육 콘텐츠를 만나보세요.</p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {/* 검색 및 필터 */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="강의명, 강사명 등으로 검색" className="pl-9" />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="카테고리" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="it">IT/개발</SelectItem>
                  <SelectItem value="marketing">마케팅</SelectItem>
                  <SelectItem value="service">서비스</SelectItem>
                  <SelectItem value="startup">창업</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="난이도" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="beginner">입문</SelectItem>
                  <SelectItem value="intermediate">중급</SelectItem>
                  <SelectItem value="advanced">고급</SelectItem>
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
            <TabsTrigger value="popular">인기 강의</TabsTrigger>
            <TabsTrigger value="new">신규 강의</TabsTrigger>
            <TabsTrigger value="free">무료 강의</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter((course) => course.isNew)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="free" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter((course) => course.isFree)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
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

function CourseCard({ course }: { course: any }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-[2/1] relative">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover w-full h-full" />
        <div className="absolute top-2 right-2 flex gap-1">
          <Badge className="bg-[#1a6fb3]">{course.category}</Badge>
          {course.isNew && <Badge className="bg-red-500">NEW</Badge>}
          {course.isFree && <Badge className="bg-green-500">무료</Badge>}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-2 text-sm">
        <p className="text-gray-500 line-clamp-2">{course.description}</p>
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="h-4 w-4" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <BookOpen className="h-4 w-4" />
          <span>{course.lessons}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>
            {course.rating} ({course.students} 수강)
          </span>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            강사: {course.instructor} | 난이도: {course.level}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full bg-[#1a6fb3] hover:bg-[#155a94]">
          <Link href={`/courses/${course.id}`}>강의 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
