import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const notices = [
  { id: 1, title: "2025년 지역 균형 발전 교육 지원 사업 공고", date: "06.10", href: "/notices/1" },
  { id: 2, title: "제3회 지역 청년 해커톤 참가자 모집", date: "06.08", href: "/notices/2" },
  { id: 3, title: "농촌 지역 직업 체험 프로그램 안내", date: "06.05", href: "/notices/3" },
]

export default function NoticePreview() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">공지사항</CardTitle>
        <Link href="/notices" className="text-xs text-gray-500 hover:underline">
          더보기
        </Link>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-100">
          {notices.map((notice) => (
            <li key={notice.id}>
              <Link href={notice.href} className="flex justify-between items-center px-4 py-2 hover:bg-gray-50">
                <span className="text-xs line-clamp-1">{notice.title}</span>
                <span className="text-xs text-gray-500">{notice.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
