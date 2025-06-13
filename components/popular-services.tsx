import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const popularServices = [
  {
    id: 1,
    title: "지역 청년 해커톤",
    category: "대회/행사",
    date: "2025.07.15",
    location: "부산",
    image: "/placeholder.svg?height=160&width=280",
    href: "/competitions/1",
    isNew: true,
  },
  {
    id: 2,
    title: "웹 개발 기초 과정",
    category: "교육과정",
    date: "상시",
    location: "온라인",
    image: "/placeholder.svg?height=160&width=280",
    href: "/courses/1",
    isNew: false,
  },
  {
    id: 3,
    title: "지역 IT 스타트업 체험",
    category: "직업체험",
    date: "2025.07.20",
    location: "대전",
    image: "/placeholder.svg?height=160&width=280",
    href: "/job-experiences/1",
    isNew: true,
  },
  {
    id: 4,
    title: "농산물 마케팅 전략",
    category: "교육과정",
    date: "상시",
    location: "온라인",
    image: "/placeholder.svg?height=160&width=280",
    href: "/courses/2",
    isNew: false,
  },
]

export default function PopularServices() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {popularServices.map((service) => (
        <Link key={service.id} href={service.href}>
          <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-40 object-cover" />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-white text-gray-700">
                  {service.category}
                </Badge>
              </div>
              {service.isNew && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-red-500">NEW</Badge>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2 line-clamp-2">{service.title}</h3>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{service.date}</span>
                <span>{service.location}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
