import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const quickLinks = [
  {
    id: 1,
    title: "자주 묻는 질문",
    href: "/faq",
    icon: "/placeholder.svg?height=24&width=24",
  },
  {
    id: 2,
    title: "교육 신청 방법",
    href: "/guide/education",
    icon: "/placeholder.svg?height=24&width=24",
  },
  {
    id: 3,
    title: "직업 체험 신청",
    href: "/job-experiences/apply",
    icon: "/placeholder.svg?height=24&width=24",
  },
  {
    id: 4,
    title: "지원금 안내",
    href: "/support/funding",
    icon: "/placeholder.svg?height=24&width=24",
  },
]

export default function QuickMenu() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">빠른 메뉴</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="flex flex-col items-center p-3 border rounded-md hover:bg-gray-50 transition-colors"
            >
              <img src={link.icon || "/placeholder.svg"} alt="" className="w-6 h-6 mb-2" />
              <span className="text-xs text-center">{link.title}</span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
