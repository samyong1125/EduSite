import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, BookOpen, Star } from "lucide-react"

// 임시 데이터
const courses = [
  {
    id: 1,
    title: "웹 개발 기초",
    description: "HTML, CSS, JavaScript를 활용한 웹 개발 입문 과정",
    category: "IT/개발",
    duration: "20시간",
    lessons: "15개 강의",
    rating: "4.8",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "농산물 마케팅 전략",
    description: "지역 농산물의 효과적인 마케팅 및 판로 개척 방법",
    category: "마케팅",
    duration: "15시간",
    lessons: "12개 강의",
    rating: "4.7",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "관광 서비스 실무",
    description: "지역 관광 산업에서 필요한 서비스 실무 교육",
    category: "서비스",
    duration: "18시간",
    lessons: "14개 강의",
    rating: "4.9",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "창업 기초 과정",
    description: "지역 기반 소규모 창업을 위한 기초 지식과 실무",
    category: "창업",
    duration: "25시간",
    lessons: "20개 강의",
    rating: "4.6",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function FeaturedCourses() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">추천 교육 과정</h2>
          <p className="text-muted-foreground mt-2">
            국가직무능력표준(NCS) 기반의 다양한 직업 교육 콘텐츠를 만나보세요
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/courses">모든 강의 보기</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col h-full overflow-hidden">
            <div className="aspect-[2/1] relative">
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover w-full h-full" />
              <Badge className="absolute top-2 right-2">{course.category}</Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>{course.lessons}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/courses/${course.id}`}>강의 보기</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
