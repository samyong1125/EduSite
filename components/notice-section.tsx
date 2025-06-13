import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const notices = [
  {
    id: 1,
    title: "2025년 지역 균형 발전 교육 지원 사업 공고",
    date: "2025.06.10",
    category: "공지",
    href: "/notices/1",
  },
  {
    id: 2,
    title: "제3회 지역 청년 해커톤 참가자 모집",
    date: "2025.06.08",
    category: "행사",
    href: "/notices/2",
  },
  {
    id: 3,
    title: "농촌 지역 직업 체험 프로그램 안내",
    date: "2025.06.05",
    category: "안내",
    href: "/notices/3",
  },
  {
    id: 4,
    title: "온라인 교육 콘텐츠 이용 방법 안내",
    date: "2025.06.01",
    category: "안내",
    href: "/notices/4",
  },
  {
    id: 5,
    title: "지역 균형 발전 플랫폼 이용자 설문조사",
    date: "2025.05.28",
    category: "참여",
    href: "/notices/5",
  },
]

const news = [
  {
    id: 1,
    title: "지역 균형 발전 교육 플랫폼, 사용자 1만명 돌파",
    date: "2025.06.09",
    href: "/news/1",
  },
  {
    id: 2,
    title: "지방 청년들의 취업률, 플랫폼 이용 후 30% 상승",
    date: "2025.06.07",
    href: "/news/2",
  },
  {
    id: 3,
    title: "교육부, 지역 균형 발전 교육에 500억 추가 지원",
    date: "2025.06.03",
    href: "/news/3",
  },
  {
    id: 4,
    title: "AI 기반 맞춤형 교육 추천 서비스 호평",
    date: "2025.05.30",
    href: "/news/4",
  },
  {
    id: 5,
    title: "지역 기업과 교육기관 연계 프로그램 확대",
    date: "2025.05.25",
    href: "/news/5",
  },
]

export default function NoticeSection() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <Tabs defaultValue="notice">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <TabsList className="grid w-[200px] grid-cols-2">
            <TabsTrigger value="notice">공지사항</TabsTrigger>
            <TabsTrigger value="news">보도자료</TabsTrigger>
          </TabsList>
          <Link href="/notices" className="text-xs text-gray-500 hover:underline">
            더보기
          </Link>
        </div>

        <TabsContent value="notice" className="p-0">
          <ul className="divide-y divide-gray-100">
            {notices.map((notice) => (
              <li key={notice.id}>
                <Link href={notice.href} className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">{notice.category}</span>
                    <span className="text-sm line-clamp-1">{notice.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">{notice.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="news" className="p-0">
          <ul className="divide-y divide-gray-100">
            {news.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
                  <span className="text-sm line-clamp-1">{item.title}</span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}
