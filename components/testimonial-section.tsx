import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

// 임시 데이터
const testimonials = [
  {
    id: 1,
    name: "김지원",
    role: "경북 안동 거주, 대학생",
    content:
      "지방에 살면서 좋은 대회나 교육 기회를 찾기 어려웠는데, 이 플랫폼을 통해 해커톤에 참가하고 실력을 인정받아 인턴십까지 얻게 되었습니다.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "이민수",
    role: "전남 순천 거주, 취업준비생",
    content:
      "온라인 교육과 지역 기업 직업 체험을 통해 실무 경험을 쌓을 수 있었고, 덕분에 지역 IT 기업에 취업할 수 있었습니다.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "박서연",
    role: "강원 원주 거주, 소상공인",
    content:
      "플랫폼을 통해 열정 있는 청년들과 함께 일할 기회를 얻었고, 그들의 신선한 아이디어로 가게 운영에 많은 도움을 받았습니다.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  return (
    <section className="container px-4 md:px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight mb-2">성공 사례</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">플랫폼을 통해 성장한 사용자들의 이야기를 들어보세요</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="flex flex-col h-full">
            <CardHeader className="pb-0">
              <Quote className="h-8 w-8 text-primary/40 mb-2" />
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="italic text-muted-foreground">"{testimonial.content}"</p>
            </CardContent>
            <CardFooter className="flex items-center gap-4 pt-4 border-t">
              <Avatar>
                <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
