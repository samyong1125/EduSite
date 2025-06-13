import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Search, MessageSquare, Phone, Mail, Clock, User, MapPin } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

// 임시 데이터 - FAQ
const faqs = [
  {
    id: 1,
    question: "회원가입은 어떻게 하나요?",
    answer:
      "홈페이지 우측 상단의 '로그인' 버튼을 클릭한 후 회원가입 페이지로 이동하여 필요한 정보를 입력하시면 됩니다. 회원가입 시 본인 인증이 필요합니다.",
    category: "회원정보",
  },
  {
    id: 2,
    question: "대회 참가 신청은 어떻게 하나요?",
    answer:
      "대회·공모전 페이지에서 원하는 대회를 선택한 후 상세 페이지에서 '참가 신청' 버튼을 클릭하여 신청할 수 있습니다. 대회별로 필요한 서류나 정보가 다를 수 있으니 상세 내용을 확인해주세요.",
    category: "대회/공모전",
  },
  {
    id: 3,
    question: "교육 콘텐츠는 어떻게 이용하나요?",
    answer:
      "교육정보 페이지에서 원하는 강의를 선택한 후 수강 신청을 하시면 됩니다. 무료 강의와 유료 강의가 있으며, 유료 강의의 경우 결제 후 이용 가능합니다.",
    category: "교육정보",
  },
  {
    id: 4,
    question: "대외활동 참여 확인서는 어떻게 발급받나요?",
    answer:
      "마이페이지 > 증명서 발급 메뉴에서 참여한 대외활동에 대한 확인서를 발급받을 수 있습니다. 활동 종료 후 1-2주 이내에 발급이 가능합니다.",
    category: "증명서",
  },
  {
    id: 5,
    question: "비밀번호를 잊어버렸어요.",
    answer:
      "로그인 페이지에서 '비밀번호 찾기' 기능을 이용하시면 가입 시 등록한 이메일로 비밀번호 재설정 링크가 발송됩니다. 링크를 통해 새로운 비밀번호를 설정하실 수 있습니다.",
    category: "회원정보",
  },
  {
    id: 6,
    question: "교육 이수증은 어떻게 발급받나요?",
    answer:
      "강의 수강 완료 후 마이페이지 > 증명서 발급 메뉴에서 교육 이수증을 발급받을 수 있습니다. 모든 강의를 80% 이상 수강해야 이수증 발급이 가능합니다.",
    category: "증명서",
  },
]

// 임시 데이터 - 공지사항
const notices = [
  {
    id: 1,
    title: "2025년 지역 균형 발전 교육 지원 사업 공고",
    date: "2025.06.10",
    category: "공지",
    views: 1245,
  },
  {
    id: 2,
    title: "제3회 지역 청년 해커톤 참가자 모집",
    date: "2025.06.08",
    category: "행사",
    views: 987,
  },
  {
    id: 3,
    title: "농촌 지역 직업 체험 프로그램 안내",
    date: "2025.06.05",
    category: "안내",
    views: 756,
  },
  {
    id: 4,
    title: "온라인 교육 콘텐츠 이용 방법 안내",
    date: "2025.06.01",
    category: "안내",
    views: 1032,
  },
  {
    id: 5,
    title: "지역 균형 발전 플랫폼 이용자 설문조사",
    date: "2025.05.28",
    category: "참여",
    views: 543,
  },
]

export default function SupportPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* 페이지 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="text-2xl font-bold mb-2">마이페이지</h1>
          <p className="text-gray-500">
            자주 묻는 질문과 공지사항을 확인하고, 문의사항이 있으시면 문의하기를 이용해주세요.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {/* 탭 메뉴 */}
        <Tabs defaultValue="faq" className="mb-6">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="faq">자주 묻는 질문</TabsTrigger>
            <TabsTrigger value="notice">공지사항</TabsTrigger>
            <TabsTrigger value="inquiry">문의하기</TabsTrigger>
            <TabsTrigger value="contact">연락처</TabsTrigger>
          </TabsList>

          {/* FAQ 탭 */}
          <TabsContent value="faq" className="mt-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h2 className="text-xl font-bold">자주 묻는 질문</h2>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="질문 검색" className="pl-9" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Button variant="outline" className="justify-start">
                  전체
                </Button>
                <Button variant="outline" className="justify-start">
                  회원정보
                </Button>
                <Button variant="outline" className="justify-start">
                  대회/공모전
                </Button>
                <Button variant="outline" className="justify-start">
                  교육정보
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-start gap-2">
                        <span className="bg-[#1a6fb3] text-white text-xs px-2 py-1 rounded mt-0.5">{faq.category}</span>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-12 text-gray-600">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

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
          </TabsContent>

          {/* 공지사항 탭 */}
          <TabsContent value="notice" className="mt-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h2 className="text-xl font-bold">공지사항</h2>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="공지사항 검색" className="pl-9" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-y border-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">번호</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">분류</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">제목</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">등록일</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">조회수</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices.map((notice, index) => (
                      <tr key={notice.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-500">{notices.length - index}</td>
                        <td className="px-4 py-3">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{notice.category}</span>
                        </td>
                        <td className="px-4 py-3">
                          <Link href={`/notices/${notice.id}`} className="text-sm hover:text-[#1a6fb3] hover:underline">
                            {notice.title}
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">{notice.date}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{notice.views}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

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
          </TabsContent>

          {/* 문의하기 탭 */}
          <TabsContent value="inquiry" className="mt-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <h2 className="text-xl font-bold mb-6">문의하기</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <Input id="name" placeholder="이름을 입력하세요" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <Input id="email" type="email" placeholder="이메일을 입력하세요" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    연락처
                  </label>
                  <Input id="phone" placeholder="연락처를 입력하세요" />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    문의 유형 <span className="text-red-500">*</span>
                  </label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="문의 유형을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">일반 문의</SelectItem>
                      <SelectItem value="technical">기술 지원</SelectItem>
                      <SelectItem value="suggestion">제안/건의</SelectItem>
                      <SelectItem value="complaint">불만/신고</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  제목 <span className="text-red-500">*</span>
                </label>
                <Input id="subject" placeholder="제목을 입력하세요" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  내용 <span className="text-red-500">*</span>
                </label>
                <Textarea id="message" placeholder="문의 내용을 입력하세요" rows={6} />
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#1a6fb3] focus:ring-[#1a6fb3]"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="px-8 bg-[#1a6fb3] hover:bg-[#155a94]">문의하기</Button>
              </div>
            </div>
          </TabsContent>

          {/* 연락처 탭 */}
          <TabsContent value="contact" className="mt-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <h2 className="text-xl font-bold mb-6">연락처</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-[#1a6fb3]" />
                      전화 문의
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-bold">010-7143-5219</p>
                    <p className="text-sm text-gray-500 mt-2">
                      평일 09:00 - 18:00
                      <br />
                      (점심시간 12:00 - 13:00)
                      <br />
                      주말 및 공휴일 휴무
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-[#1a6fb3]" />
                      이메일 문의
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-bold">support@example.com</p>
                    <p className="text-sm text-gray-500 mt-2">
                      24시간 접수 가능
                      <br />
                      영업일 기준 1-2일 내 답변
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-[#1a6fb3]" />
                      실시간 채팅
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-bold">채팅 상담</p>
                    <p className="text-sm text-gray-500 mt-2">
                      평일 09:00 - 18:00
                      <br />
                      빠른 응답이 필요하신 경우
                      <br />
                      채팅 상담을 이용해주세요.
                    </p>
                    <Button className="mt-4 w-full bg-[#1a6fb3] hover:bg-[#155a94]">채팅 시작하기</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold mb-4">찾아오시는 길</h3>
                <div className="aspect-[16/9] bg-gray-200 mb-4 rounded-lg">
                  {/* 지도가 들어갈 자리 */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">지도 영역</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                    <div>
                      <p className="font-medium">대구 달서구 월배로 11길 33 110동 1301호 침대 앞 책상</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                    <div>
                      <p className="font-medium">운영시간</p>
                      <p className="text-sm text-gray-500">평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <User className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                    <div>
                      <p className="font-medium">담당자</p>
                      <p className="text-sm text-gray-500">고객지원팀 김지원 매니저</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
