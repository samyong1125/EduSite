import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const links = [
  { id: 1, title: "교육 신청", href: "/education/apply", icon: "/placeholder.svg?height=24&width=24" },
  { id: 2, title: "직업 체험", href: "/job-experiences", icon: "/placeholder.svg?height=24&width=24" },
  { id: 3, title: "대회 참가", href: "/competitions", icon: "/placeholder.svg?height=24&width=24" },
  { id: 4, title: "증명서 발급", href: "/certificates", icon: "/placeholder.svg?height=24&width=24" },
]

export default function QuickLinks() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2 pt-3 px-4">
        <CardTitle className="text-sm font-medium">바로가기</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="grid grid-cols-2 gap-2">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="flex flex-col items-center justify-center p-2 border rounded-md hover:bg-gray-50 transition-colors"
            >
              <img src={link.icon || "/placeholder.svg"} alt="" className="w-5 h-5 mb-1" />
              <span className="text-xs">{link.title}</span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
