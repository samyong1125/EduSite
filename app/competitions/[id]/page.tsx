import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Award,
  Building,
  Share2,
  Heart,
  MessageSquare,
  ChevronLeft,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

// 임시 데이터
const competition = {
  id: 1,
  title: "지역 청년 해커톤",
  description:
    "지역 문제 해결을 위한 아이디어와 프로토타입을 개발하는 대회로, 지역 사회의 다양한 문제를 기술을 통해 해결하는 방안을 모색합니다. 참가자들은 팀을 구성하여 48시간 동안 집중적으로 아이디어를 발전시키고 프로토타입을 개발하게 됩니다.",
  category: "해커톤",
  location: "부산 벡스코 제1전시장",
  date: "2025년 7월 15일 ~ 7월 17일",
  participants: "120명 (30팀)",
  deadline: "2025년 6월 30일",
  prize: "총 상금 3,000만원",
  organizer: "부산광역시",
  contact: "hackathon@busan.go.kr / 051-123-4567",
  website: "https://busan-hackathon.kr",
  image: "/placeholder.svg?height=400&width=800",
  status: "접수중",
  views: 1245,
  likes: 89,
  isLiked: false,
  schedule: [
    {
      title: "참가 신청",
      date: "2025년 6월 1일 ~ 6월 30일",
    },
    {
      title: "참가자 발표",
      date: "2025년 7월 5일",
    },
    {
      title: "오리엔테이션",
      date: "2025년 7월 14일",
    },
    {
      title: "해커톤 진행",
      date: "2025년 7월 15일 ~ 7월 17일",
    },
    {
      title: "결과 발표 및 시상식",
      date: "2025년 7월 17일",
    },
  ],
  eligibility: "부산 지역 거주 또는 재학 중인 만 19세 ~ 39세 청년",
  benefits: [
    "대상(1팀): 1,000만원",
    "금상(2팀): 각 500만원",
    "은상(3팀): 각 300만원",
    "동상(4팀): 각 100만원",
    "부산시장상 수여",
    "우수 팀 창업 지원 프로그램 연계",
  ],
  requirements: [
    "지역 문제 해결을 위한 창의적인 아이디어",
    "실현 가능한 프로토타입 개발",
    "팀 구성: 3~5명",
    "개발, 디자인, 기획 등 다양한 역할 포함 권장",
  ],
  materials: [
    {
      title: "참가 신청서",
      type: "문서",
      link: "/files/application-form.docx",
    },
    {
      title: "개인정보 수집 동의서",
      type: "문서",
      link: "/files/privacy-agreement.pdf",
    },
    {
      title: "행사 안내 브로슈어",
      type: "문서",
      link: "/files/event-brochure.pdf",
    },
  ],
  faqs: [
    {
      question: "팀원을 모두 구성하지 못했는데 지원할 수 있나요?",
      answer:
        "네, 가능합니다. 개인으로 신청하시면 오리엔테이션 날 팀 빌딩 시간이 있어 다른 참가자들과 팀을 구성할 수 있습니다.",
    },
    {
      question: "부산 거주자가 아니어도 참가할 수 있나요?",
      answer:
        "부산 지역 거주자가 아니더라도 부산 소재 대학교에 재학 중이거나, 팀원 중 50% 이상이 부산 거주자인 경우 참가 가능합니다.",
    },
    {
      question: "숙박과 식사는 제공되나요?",
      answer: "해커톤 기간 동안 행사장 내 간이 숙박 공간과 식사가 제공됩니다.",
    },
  ],
  comments: [
    {
      id: 1,
      user: {
        name: "김지원",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "작년에 참가했었는데 정말 좋은 경험이었습니다. 올해도 꼭 참가하고 싶네요!",
      date: "2025.06.05",
    },
    {
      id: 2,
      user: {
        name: "이민수",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "부산 외 지역 거주자도 참가 가능한가요?",
      date: "2025.06.07",
    },
    {
      id: 3,
      user: {
        name: "관리자",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "이민수님, 부산 지역 거주자가 아니더라도 부산 소재 대학교에 재학 중이거나, 팀원 중 50% 이상이 부산 거주자인 경우 참가 가능합니다.",
      date: "2025.06.07",
      isAdmin: true,
    },
  ],
}

export default function CompetitionDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* 페이지 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/civil-services" className="flex items-center gap-1 hover:text-[#1a6fb3]">
              <ChevronLeft className="h-4 w-4" />
              대회·공모전 목록으로 돌아가기
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-[#1a6fb3]">{competition.category}</Badge>
                <Badge
                  className={
                    competition.status === "접수중"
                      ? "bg-green-500"
                      : competition.status === "접수예정"
                        ? "bg-yellow-500"
                        : "bg-gray-500"
                  }
                >
                  {competition.status}
                </Badge>
              </div>
              <h1 className="text-2xl font-bold">{competition.title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>찜하기</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                <span>공유하기</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽 컨텐츠 영역 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 대회 이미지 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <img
                src={competition.image || "/placeholder.svg"}
                alt={competition.title}
                className="w-full aspect-[2/1] object-cover"
              />
            </div>

            {/* 탭 메뉴 */}
            <Tabs defaultValue="info" className="bg-white rounded-lg border border-gray-200">
              <TabsList className="border-b border-gray-200 w-full rounded-t-lg rounded-b-none p-0">
                <TabsTrigger
                  value="info"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  대회 정보
                </TabsTrigger>
                <TabsTrigger
                  value="schedule"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  일정 및 참가 자격
                </TabsTrigger>
                <TabsTrigger
                  value="faq"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  자주 묻는 질문
                </TabsTrigger>
              </TabsList>

              {/* 대회 정보 탭 */}
              <TabsContent value="info" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold mb-3">대회 소개</h2>
                    <p className="text-gray-700 whitespace-pre-line">{competition.description}</p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold mb-3">참가 요건</h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {competition.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold mb-3">시상 내역</h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {competition.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold mb-3">제출 자료</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {competition.materials.map((material, index) => (
                        <Link
                          key={index}
                          href={material.link}
                          className="flex items-center gap-2 p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                        >
                          <FileText className="h-5 w-5 text-[#1a6fb3]" />
                          <span>{material.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 일정 및 참가 자격 탭 */}
              <TabsContent value="schedule" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold mb-3">대회 일정</h2>
                    <ol className="relative border-l border-gray-200 ml-3 space-y-6">
                      {competition.schedule.map((item, index) => (
                        <li key={index} className="mb-6 ml-6">
                          <span className="absolute flex items-center justify-center w-6 h-6 bg-[#1a6fb3] rounded-full -left-3 ring-8 ring-white">
                            <span className="text-white text-xs">{index + 1}</span>
                          </span>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold mb-3">참가 자격</h2>
                    <p className="text-gray-700">{competition.eligibility}</p>
                  </div>
                </div>
              </TabsContent>

              {/* 자주 묻는 질문 탭 */}
              <TabsContent value="faq" className="p-6">
                <div className="space-y-6">
                  <h2 className="text-lg font-bold mb-3">자주 묻는 질문</h2>
                  <div className="space-y-4">
                    {competition.faqs.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                        <div className="bg-gray-50 p-4 font-medium flex items-start gap-2">
                          <span className="text-[#1a6fb3] font-bold">Q.</span>
                          <span>{faq.question}</span>
                        </div>
                        <div className="p-4 flex items-start gap-2">
                          <span className="text-[#1a6fb3] font-bold">A.</span>
                          <span>{faq.answer}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* 댓글 영역 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-bold mb-4">댓글 {competition.comments.length}</h2>

              {/* 댓글 입력 */}
              <div className="mb-6">
                <textarea
                  placeholder="댓글을 입력하세요"
                  className="w-full border border-gray-200 rounded-md p-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#1a6fb3]"
                ></textarea>
                <div className="flex justify-end mt-2">
                  <Button className="bg-[#1a6fb3] hover:bg-[#155a94]">댓글 작성</Button>
                </div>
              </div>

              {/* 댓글 목록 */}
              <div className="space-y-4">
                {competition.comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                          <AvatarFallback>{comment.user.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <span className="font-medium text-sm">
                            {comment.user.name}
                            {comment.isAdmin && (
                              <Badge className="ml-1 bg-[#1a6fb3]" variant="secondary">
                                관리자
                              </Badge>
                            )}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm pl-10">{comment.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽 사이드바 */}
          <div className="space-y-6">
            {/* 대회 정보 요약 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">대회 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">대회 일자</p>
                    <p className="text-sm text-gray-500">{competition.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">장소</p>
                    <p className="text-sm text-gray-500">{competition.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">참가 인원</p>
                    <p className="text-sm text-gray-500">{competition.participants}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">접수 마감</p>
                    <p className="text-sm text-gray-500">{competition.deadline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">시상 내역</p>
                    <p className="text-sm text-gray-500">{competition.prize}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">주최/주관</p>
                    <p className="text-sm text-gray-500">{competition.organizer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 신청하기 카드 */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">접수 중</span>
                    </div>
                    <div className="text-sm text-gray-500">D-20</div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#1a6fb3] h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>참가 신청률</span>
                    <span className="font-medium">65%</span>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <AlertCircle className="h-4 w-4" />
                    <span>신청 마감일: {competition.deadline}</span>
                  </div>

                  <Button className="w-full bg-[#1a6fb3] hover:bg-[#155a94]">신청하기</Button>

                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{competition.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{competition.comments.length}</span>
                    </div>
                    <div className="flex items-center gap-1">
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
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>{competition.views}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 문의하기 카드 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">문의하기</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-500">대회 관련 문의사항은 아래 연락처로 문의해주세요.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
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
                      className="h-4 w-4 text-[#1a6fb3]"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>051-123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
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
                      className="h-4 w-4 text-[#1a6fb3]"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>hackathon@busan.go.kr</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
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
                      className="h-4 w-4 text-[#1a6fb3]"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <a href={competition.website} className="text-[#1a6fb3] hover:underline">
                      {competition.website}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 관련 대회 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">관련 대회</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/competitions/2" className="flex gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors">
                    <img
                      src="/placeholder.svg?height=60&width=80"
                      alt="농촌 게임잼"
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-sm">농촌 게임잼</p>
                      <p className="text-xs text-gray-500">2025년 8월 5일</p>
                    </div>
                  </Link>
                  <Link href="/competitions/3" className="flex gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors">
                    <img
                      src="/placeholder.svg?height=60&width=80"
                      alt="지역 스포츠 경진대회"
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-sm">지역 스포츠 경진대회</p>
                      <p className="text-xs text-gray-500">2025년 9월 20일</p>
                    </div>
                  </Link>
                  <Link href="/competitions/4" className="flex gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors">
                    <img
                      src="/placeholder.svg?height=60&width=80"
                      alt="지방 창업 아이디어 경진대회"
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-sm">지방 창업 아이디어 경진대회</p>
                      <p className="text-xs text-gray-500">2025년 10월 10일</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
