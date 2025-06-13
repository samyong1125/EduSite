import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Calendar,
  BookOpen,
  Briefcase,
  Award,
  FileText,
  Settings,
  Bell,
  LogOut,
  User,
  Mail,
  Phone,
  MapPin,
  Pencil,
} from "lucide-react"

export default function MyPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* 페이지 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">마이페이지</h1>
              <p className="text-gray-500">나의 활동과 정보를 관리할 수 있습니다.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Bell className="h-4 w-4" />
                <span>알림</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Settings className="h-4 w-4" />
                <span>설정</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <LogOut className="h-4 w-4" />
                <span>로그아웃</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* 왼쪽 사이드바 - 프로필 */}
          <div className="space-y-6">
            {/* 프로필 카드 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="홍길동" />
                    <AvatarFallback>홍</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">홍길동</h2>
                  <p className="text-sm text-gray-500 mb-4">대구광역시 거주</p>
                  <Button className="w-full bg-[#1a6fb3] hover:bg-[#155a94]">프로필 수정</Button>
                </div>
              </CardContent>
            </Card>

            {/* 내 정보 카드 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>내 정보</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <User className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">이름</p>
                    <p className="text-sm text-gray-500">홍길동</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">이메일</p>
                    <p className="text-sm text-gray-500">hong@example.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">연락처</p>
                    <p className="text-sm text-gray-500">010-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-[#1a6fb3] mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">주소</p>
                    <p className="text-sm text-gray-500">대구광역시 달서구</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 내 활동 요약 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">활동 요약</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">참여 대회</span>
                    <span className="text-sm font-medium">2개</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">수강 강의</span>
                    <span className="text-sm font-medium">3개</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">대외활동</span>
                    <span className="text-sm font-medium">1개</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 오른쪽 메인 컨텐츠 */}
          <div className="lg:col-span-3 space-y-6">
            {/* 탭 메뉴 */}
            <Tabs defaultValue="activities" className="bg-white rounded-lg border border-gray-200">
              <TabsList className="border-b border-gray-200 w-full rounded-t-lg rounded-b-none p-0">
                <TabsTrigger
                  value="activities"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  활동 현황
                </TabsTrigger>
                <TabsTrigger
                  value="recommendations"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  맞춤 추천
                </TabsTrigger>
                <TabsTrigger
                  value="certificates"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  증명서/확인서
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  계정 설정
                </TabsTrigger>
              </TabsList>

              {/* 활동 현황 탭 */}
              <TabsContent value="activities" className="p-6">
                <div className="space-y-6">
                  {/* 참여 중인 대회 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">참여 중인 대회</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-0">
                          <Link href="/competitions/1" className="flex hover:bg-gray-50 transition-colors">
                            <div className="w-[120px] h-[80px] flex-shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=120"
                                alt="지역 청년 해커톤"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-3 flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-[#1a6fb3]">해커톤</Badge>
                                <Badge className="bg-green-500">진행중</Badge>
                              </div>
                              <h3 className="font-medium text-sm mb-1">지역 청년 해커톤</h3>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Calendar className="h-3 w-3" />
                                <span>2025.07.15</span>
                              </div>
                            </div>
                          </Link>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-0">
                          <Link href="/competitions/4" className="flex hover:bg-gray-50 transition-colors">
                            <div className="w-[120px] h-[80px] flex-shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=120"
                                alt="지방 창업 아이디어 경진대회"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-3 flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-[#1a6fb3]">창업</Badge>
                                <Badge className="bg-yellow-500">준비중</Badge>
                              </div>
                              <h3 className="font-medium text-sm mb-1">지방 창업 아이디어 경진대회</h3>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Calendar className="h-3 w-3" />
                                <span>2025.10.10</span>
                              </div>
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* 수강 중인 강의 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">수강 중인 강의</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-0">
                          <Link href="/courses/1" className="flex hover:bg-gray-50 transition-colors">
                            <div className="w-[120px] h-[80px] flex-shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=120"
                                alt="웹 개발 기초"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-3 flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-[#1a6fb3]">IT/개발</Badge>
                              </div>
                              <h3 className="font-medium text-sm mb-1">웹 개발 기초</h3>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">진행률: 65%</span>
                                <Button size="sm" variant="outline" className="h-7 text-xs">
                                  계속하기
                                </Button>
                              </div>
                            </div>
                          </Link>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-0">
                          <Link href="/courses/4" className="flex hover:bg-gray-50 transition-colors">
                            <div className="w-[120px] h-[80px] flex-shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=120"
                                alt="창업 기초 과정"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-3 flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-[#1a6fb3]">창업</Badge>
                              </div>
                              <h3 className="font-medium text-sm mb-1">창업 기초 과정</h3>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">진행률: 30%</span>
                                <Button size="sm" variant="outline" className="h-7 text-xs">
                                  계속하기
                                </Button>
                              </div>
                            </div>
                          </Link>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-0">
                          <Link href="/courses/2" className="flex hover:bg-gray-50 transition-colors">
                            <div className="w-[120px] h-[80px] flex-shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=120"
                                alt="농산물 마케팅 전략"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-3 flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-[#1a6fb3]">마케팅</Badge>
                              </div>
                              <h3 className="font-medium text-sm mb-1">농산물 마케팅 전략</h3>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">진행률: 20%</span>
                                <Button size="sm" variant="outline" className="h-7 text-xs">
                                  계속하기
                                </Button>
                              </div>
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* 참여 중인 대외활동 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">참여 중인 대외활동</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-0">
                          <Link href="/activities/1" className="flex hover:bg-gray-50 transition-colors">
                            <div className="w-[120px] h-[80px] flex-shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=120"
                                alt="지역 IT 스타트업 체험"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-3 flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-[#1a6fb3]">인턴십</Badge>
                                <Badge className="bg-green-500">진행중</Badge>
                              </div>
                              <h3 className="font-medium text-sm mb-1">지역 IT 스타트업 체험</h3>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Calendar className="h-3 w-3" />
                                <span>2025.07.20 ~ 2025.08.10</span>
                              </div>
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* 학습 통계 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">학습 통계</h2>
                    <Card>
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">주간 학습 시간</span>
                              <span className="text-sm">12시간 30분</span>
                            </div>
                            <Progress value={62} className="h-2" />
                            <p className="text-xs text-gray-500">목표: 20시간 (62% 달성)</p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">완료한 강의</span>
                              <span className="text-sm">8개</span>
                            </div>
                            <Progress value={40} className="h-2" />
                            <p className="text-xs text-gray-500">목표: 20개 (40% 달성)</p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">획득한 수료증</span>
                              <span className="text-sm">2개</span>
                            </div>
                            <Progress value={20} className="h-2" />
                            <p className="text-xs text-gray-500">목표: 10개 (20% 달성)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* 맞춤 추천 탭 */}
              <TabsContent value="recommendations" className="p-6">
                <div className="space-y-6">
                  {/* 추천 대회 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">추천 대회</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <Award className="h-5 w-5 text-[#1a6fb3]" />
                            </div>
                            <div>
                              <h3 className="font-medium">농촌 게임잼</h3>
                              <p className="text-xs text-gray-500">전라남도 | 2025년 8월 5일</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">
                            웹 개발 기초 강의를 수강 중이신 것을 고려한 추천입니다.
                          </p>
                          <Button size="sm" className="w-full bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                            <Link href="/competitions/2">자세히 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <Award className="h-5 w-5 text-[#1a6fb3]" />
                            </div>
                            <div>
                              <h3 className="font-medium">지역 스포츠 경진대회</h3>
                              <p className="text-xs text-gray-500">강원도 | 2025년 9월 20일</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">관심사에 맞는 추천 대회입니다.</p>
                          <Button size="sm" className="w-full bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                            <Link href="/competitions/3">자세히 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* 추천 강의 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">추천 강의</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-[#1a6fb3]" />
                            </div>
                            <div>
                              <h3 className="font-medium">관광 서비스 실무</h3>
                              <p className="text-xs text-gray-500">18시간 | 14개 강의</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">지역 특성과 관심사를 고려한 추천 강의입니다.</p>
                          <Button size="sm" className="w-full bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                            <Link href="/courses/3">강의 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-[#1a6fb3]" />
                            </div>
                            <div>
                              <h3 className="font-medium">웹 개발 심화</h3>
                              <p className="text-xs text-gray-500">25시간 | 18개 강의</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">현재 수강 중인 웹 개발 기초의 후속 강의입니다.</p>
                          <Button size="sm" className="w-full bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                            <Link href="/courses/5">강의 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* 추천 대외활동 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">추천 대외활동</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <Briefcase className="h-5 w-5 text-[#1a6fb3]" />
                            </div>
                            <div>
                              <h3 className="font-medium">지역 농산물 마케팅 체험</h3>
                              <p className="text-xs text-gray-500">전라남도 | 2025년 8월 15일 ~ 8월 30일</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">
                            농산물 마케팅 전략 강의와 연계된 실무 체험입니다.
                          </p>
                          <Button size="sm" className="w-full bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                            <Link href="/activities/2">자세히 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <Briefcase className="h-5 w-5 text-[#1a6fb3]" />
                            </div>
                            <div>
                              <h3 className="font-medium">지역 관광 안내 체험</h3>
                              <p className="text-xs text-gray-500">강원도 | 2025년 9월 5일 ~ 9월 20일</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">지역 특성을 고려한 추천 체험입니다.</p>
                          <Button size="sm" className="w-full bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                            <Link href="/activities/3">자세히 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 증명서/확인서 탭 */}
              <TabsContent value="certificates" className="p-6">
                <div className="space-y-6">
                  {/* 발급 가능 증명서 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">발급 가능 증명서</h2>
                    <Card>
                      <CardContent className="p-0">
                        <div className="divide-y divide-gray-100">
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <FileText className="h-5 w-5 text-[#1a6fb3]" />
                              </div>
                              <div>
                                <h3 className="font-medium">교육 이수 확인서</h3>
                                <p className="text-xs text-gray-500">
                                  완료한 교육 과정에 대한 이수 확인서를 발급합니다.
                                </p>
                              </div>
                            </div>
                            <Button variant="outline">발급</Button>
                          </div>

                          <div className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <FileText className="h-5 w-5 text-[#1a6fb3]" />
                              </div>
                              <div>
                                <h3 className="font-medium">대회 참가 확인서</h3>
                                <p className="text-xs text-gray-500">참가한 대회 및 행사에 대한 확인서를 발급합니다.</p>
                              </div>
                            </div>
                            <Button variant="outline">발급</Button>
                          </div>

                          <div className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <FileText className="h-5 w-5 text-[#1a6fb3]" />
                              </div>
                              <div>
                                <h3 className="font-medium">직업 체험 확인서</h3>
                                <p className="text-xs text-gray-500">참여한 직업 체험에 대한 확인서를 발급합니다.</p>
                              </div>
                            </div>
                            <Button variant="outline">발급</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 발급 내역 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">발급 내역</h2>
                    <Card>
                      <CardContent className="p-0">
                        <div className="divide-y divide-gray-100">
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <FileText className="h-5 w-5 text-[#1a6fb3]" />
                              </div>
                              <div>
                                <h3 className="font-medium">웹 개발 기초 수료증</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <Calendar className="h-3 w-3" />
                                  <span>발급일: 2025.05.15</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="outline">다운로드</Button>
                          </div>

                          <div className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <FileText className="h-5 w-5 text-[#1a6fb3]" />
                              </div>
                              <div>
                                <h3 className="font-medium">지역 해커톤 참가 인증서</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <Calendar className="h-3 w-3" />
                                  <span>발급일: 2025.04.20</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="outline">다운로드</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* 계정 설정 탭 */}
              <TabsContent value="settings" className="p-6">
                <div className="space-y-6">
                  {/* 계정 정보 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">계정 정보</h2>
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                            <Input value="hong@example.com" disabled />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">가입일</label>
                            <Input value="2025년 1월 15일" disabled />
                          </div>
                        </div>
                        <Button variant="outline">이메일 변경</Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 비밀번호 변경 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">비밀번호 변경</h2>
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">현재 비밀번호</label>
                            <Input type="password" placeholder="현재 비밀번호 입력" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">새 비밀번호</label>
                            <Input type="password" placeholder="새 비밀번호 입력" />
                            <p className="text-xs text-gray-500 mt-1">영문, 숫자, 특수문자 조합 8-20자리</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">새 비밀번호 확인</label>
                            <Input type="password" placeholder="새 비밀번호 다시 입력" />
                          </div>
                        </div>
                        <Button className="bg-[#1a6fb3] hover:bg-[#155a94]">비밀번호 변경</Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 알림 설정 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">알림 설정</h2>
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">이메일 알림</p>
                              <p className="text-sm text-gray-500">새로운 대회, 강의 등의 정보를 이메일로 받습니다.</p>
                            </div>
                            <div className="flex items-center h-6">
                              <input
                                id="email-notifications"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-[#1a6fb3] focus:ring-[#1a6fb3]"
                                defaultChecked
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">SMS 알림</p>
                              <p className="text-sm text-gray-500">중요 알림을 SMS로 받습니다.</p>
                            </div>
                            <div className="flex items-center h-6">
                              <input
                                id="sms-notifications"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-[#1a6fb3] focus:ring-[#1a6fb3]"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">마케팅 정보</p>
                              <p className="text-sm text-gray-500">프로모션 및 마케팅 정보를 받습니다.</p>
                            </div>
                            <div className="flex items-center h-6">
                              <input
                                id="marketing-notifications"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-[#1a6fb3] focus:ring-[#1a6fb3]"
                              />
                            </div>
                          </div>
                        </div>
                        <Button className="bg-[#1a6fb3] hover:bg-[#155a94]">설정 저장</Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 회원 탈퇴 */}
                  <div>
                    <h2 className="text-lg font-bold mb-4">회원 탈퇴</h2>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-500 mb-4">
                          회원 탈퇴 시 모든 개인정보와 활동 내역이 삭제되며, 복구할 수 없습니다.
                        </p>
                        <Button variant="destructive">회원 탈퇴</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
