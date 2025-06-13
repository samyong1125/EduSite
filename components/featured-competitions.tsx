import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin, Users } from "lucide-react"

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
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "농촌 게임잼",
    description: "농촌 지역 활성화를 주제로 한 게임 개발 대회",
    category: "게임잼",
    location: "전라남도",
    date: "2025년 8월 5일",
    participants: "80명",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "지역 스포츠 경진대회",
    description: "지역 청소년들을 위한 다양한 스포츠 종목 경진대회",
    category: "스포츠",
    location: "강원도",
    date: "2025년 9월 20일",
    participants: "200명",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "지방 창업 아이디어 경진대회",
    description: "지역 경제 활성화를 위한 창업 아이디어 발표 대회",
    category: "창업",
    location: "대구",
    date: "2025년 10월 10일",
    participants: "150명",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function FeaturedCompetitions() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">추천 대회 및 행사</h2>
          <p className="text-muted-foreground mt-2">지역에서 참여할 수 있는 다양한 대회와 행사를 만나보세요</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/competitions">모든 대회 보기</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {competitions.map((competition) => (
          <Card key={competition.id} className="flex flex-col h-full overflow-hidden">
            <div className="aspect-[2/1] relative">
              <img
                src={competition.image || "/placeholder.svg"}
                alt={competition.title}
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-2 right-2">{competition.category}</Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{competition.title}</CardTitle>
              <CardDescription className="line-clamp-2">{competition.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{competition.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{competition.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{competition.participants}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/competitions/${competition.id}`}>자세히 보기</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
