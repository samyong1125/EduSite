import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Calendar, Clock, BarChart, BookOpen, Briefcase, Award } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">마이페이지</h1>
            <p className="text-sm text-gray-500 mt-1">홍길동님, 안녕하세요. 나의 활동과 추천 정보를 확인하세요.</p>
          </div>
          <Button asChild className="bg-[#1a6fb3] hover:bg-[#155a94]">
            <Link href="/recommendations">맞춤 추천 보기</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Award className="h-4 w-4 text-[#1a6fb3]" />
                참여 중인 대회
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-gray-500">진행률</span>
                <span className="text-xs font-medium">75%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 mt-1 rounded-full overflow-hidden">
                <div className="bg-[#1a6fb3] h-full rounded-full" style={{ width: "75%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#1a6fb3]" />
                수강 중인 강의
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-gray-500">진행률</span>
                <span className="text-xs font-medium">42%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 mt-1 rounded-full overflow-hidden">
                <div className="bg-[#1a6fb3] h-full rounded-full" style={{ width: "42%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-[#1a6fb3]" />
                직업 체험
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-gray-500">진행률</span>
                <span className="text-xs font-medium">30%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 mt-1 rounded-full overflow-hidden">
                <div className="bg-[#1a6fb3] h-full rounded-full" style={{ width: "30%" }}></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="activities" className="mb-6">
          <TabsList className="bg-white border border-gray-200 p-1 mb-4">
            <TabsTrigger value="activities" className="data-[state=active]:bg-[#1a6fb3] data-[state=active]:text-white">
              활동 현황
            </TabsTrigger>
            <TabsTrigger
              value="recommendations"
              className="data-[state=active]:bg-[#1a6fb3] data-[state=active]:text-white"
            >
              맞춤 추천
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-[#1a6fb3] data-[state=active]:text-white">
              증명서/확인서
            </TabsTrigger>
          </TabsList>

          <TabsContent value="activities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#1a6fb3]" />
                    <span>참여 중인 대회</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    <li className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">지역 청년 해커톤</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>2025.07.15</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild className="text-xs h-7">
                          <Link href="/competitions/1">상세보기</Link>
                        </Button>
                      </div>
                    </li>
                    <li className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">지방 창업 아이디어 경진대회</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>2025.10.10</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild className="text-xs h-7">
                          <Link href="/competitions/4">상세보기</Link>
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#1a6fb3]" />
                    <span>수강 중인 강의</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    <li className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">웹 개발 기초</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Clock className="h-3 w-3" />
                            <span>진행률: 65%</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild className="text-xs h-7">
                          <Link href="/courses/1">계속하기</Link>
                        </Button>
                      </div>
                    </li>
                    <li className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">창업 기초 과정</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Clock className="h-3 w-3" />
                            <span>진행률: 30%</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild className="text-xs h-7">
                          <Link href="/courses/4">계속하기</Link>
                        </Button>
                      </div>
                    </li>
                    <li className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">농산물 마케팅 전략</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Clock className="h-3 w-3" />
                            <span>진행률: 20%</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild className="text-xs h-7">
                          <Link href="/courses/2">계속하기</Link>
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-[#1a6fb3]" />
                    <span>직업 체험</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    <li className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">지역 IT 스타트업 체험</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>2025.07.20 ~ 2025.08.10</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild className="text-xs h-7">
                          <Link href="/job-experiences/1">상세보기</Link>
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-[#1a6fb3]" />
                    <span>학습 통계</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium">주간 학습 시간</span>
                        <span className="text-xs">12시간 30분</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-[#1a6fb3] h-full rounded-full" style={{ width: "62%" }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">목표: 20시간 (62% 달성)</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium">완료한 강의</span>
                        <span className="text-xs">8개</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-[#1a6fb3] h-full rounded-full" style={{ width: "40%" }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">목표: 20개 (40% 달성)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommendations">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#1a6fb3]" />
                    <span>추천 대회</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    <li className="p-4">
                      <p className="font-medium text-sm">농촌 게임잼</p>
                      <p className="text-xs text-gray-500 mt-1 mb-2">
                        웹 개발 기초 강의를 수강 중이신 것을 고려한 추천입니다.
                      </p>
                      <Button size="sm" className="text-xs h-7 bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                        <Link href="/competitions/2">자세히 보기</Link>
                      </Button>
                    </li>
                    <li className="p-4">
                      <p className="font-medium text-sm">지역 스포츠 경진대회</p>
                      <p className="text-xs text-gray-500 mt-1 mb-2">관심사에 맞는 추천 대회입니다.</p>
                      <Button size="sm" className="text-xs h-7 bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                        <Link href="/competitions/3">자세히 보기</Link>
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#1a6fb3]" />
                    <span>추천 강의</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    <li className="p-4">
                      <p className="font-medium text-sm">관광 서비스 실무</p>
                      <p className="text-xs text-gray-500 mt-1 mb-2">지역 특성과 관심사를 고려한 추천 강의입니다.</p>
                      <Button size="sm" className="text-xs h-7 bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                        <Link href="/courses/3">강의 보기</Link>
                      </Button>
                    </li>
                    <li className="p-4">
                      <p className="font-medium text-sm">웹 개발 심화</p>
                      <p className="text-xs text-gray-500 mt-1 mb-2">현재 수강 중인 웹 개발 기초의 후속 강의입니다.</p>
                      <Button size="sm" className="text-xs h-7 bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                        <Link href="/courses/5">강의 보기</Link>
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-[#1a6fb3]" />
                    <span>추천 직업 체험</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    <li className="p-4">
                      <p className="font-medium text-sm">지역 농산물 마케팅 체험</p>
                      <p className="text-xs text-gray-500 mt-1 mb-2">
                        농산물 마케팅 전략 강의와 연계된 실무 체험입니다.
                      </p>
                      <Button size="sm" className="text-xs h-7 bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                        <Link href="/job-experiences/2">자세히 보기</Link>
                      </Button>
                    </li>
                    <li className="p-4">
                      <p className="font-medium text-sm">지역 관광 안내 체험</p>
                      <p className="text-xs text-gray-500 mt-1 mb-2">지역 특성을 고려한 추천 체험입니다.</p>
                      <Button size="sm" className="text-xs h-7 bg-[#1a6fb3] hover:bg-[#155a94]" asChild>
                        <Link href="/job-experiences/3">자세히 보기</Link>
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#1a6fb3]" />
                    <span>발급 가능 증명서</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    <li className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">교육 이수 확인서</p>
                          <p className="text-xs text-gray-500 mt-1">
                            완료한 교육 과정에 대한 이수 확인서를 발급합니다.
                          </p>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs h-7">
                          발급
                        </Button>
                      </div>
                    </li>
                    <li className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">대회 참가 확인서</p>
                          <p className="text-xs text-gray-500 mt-1">참가한 대회 및 행사에 대한 확인서를 발급합니다.</p>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs h-7">
                          발급
                        </Button>
                      </div>
                    </li>
                    <li className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">직업 체험 확인서</p>
                          <p className="text-xs text-gray-500 mt-1">참여한 직업 체험에 대한 확인서를 발급합니다.</p>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs h-7">
                          발급
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 border-b">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#1a6fb3]" />
                    <span>발급 내역</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    <li className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">웹 개발 기초 수료증</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>발급일: 2025.05.15</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs h-7">
                          다운로드
                        </Button>
                      </div>
                    </li>
                    <li className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">지역 해커톤 참가 인증서</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>발급일: 2025.04.20</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs h-7">
                          다운로드
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
