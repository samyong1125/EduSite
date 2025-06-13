import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import {
  BookOpen,
  Clock,
  Star,
  ChevronLeft,
  Share2,
  Heart,
  MessageSquare,
  Play,
  Download,
  FileText,
  Award,
  Users,
  BarChart,
} from "lucide-react"

// 임시 데이터
const course = {
  id: 1,
  title: "웹 개발 기초",
  description:
    "HTML, CSS, JavaScript를 활용한 웹 개발 입문 과정으로, 웹 개발의 기초 개념부터 실제 웹사이트 제작까지 단계별로 학습합니다. 이 과정을 통해 웹 개발의 핵심 기술을 이해하고 간단한 웹사이트를 직접 제작할 수 있는 능력을 기를 수 있습니다.",
  category: "IT/개발",
  duration: "20시간",
  lessons: "15개 강의",
  level: "입문",
  rating: "4.8",
  reviews: 256,
  students: "1,245명",
  instructor: {
    name: "김민수",
    title: "프론트엔드 개발자",
    bio: "10년 경력의 웹 개발자로, 다양한 기업 프로젝트와 교육 경험을 보유하고 있습니다. 복잡한 개념을 쉽게 설명하는 강의 스타일로 호평을 받고 있습니다.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  image: "/placeholder.svg?height=400&width=800",
  price: "무료",
  status: "수강 가능",
  isEnrolled: false,
  progress: 0,
  views: 3456,
  likes: 245,
  isLiked: false,
  lastUpdated: "2025년 5월 15일",
  certificate: true,
  prerequisites: "기본적인 컴퓨터 활용 능력",
  targetAudience: ["웹 개발에 관심 있는 초보자", "프로그래밍을 처음 시작하는 분", "디지털 직무 전환을 준비하는 분"],
  skills: ["HTML", "CSS", "JavaScript", "반응형 웹 디자인", "웹 접근성"],
  curriculum: [
    {
      title: "섹션 1: 웹 개발 소개",
      lessons: [
        {
          id: 1,
          title: "웹 개발의 이해",
          duration: "25분",
          type: "동영상",
          isFree: true,
        },
        {
          id: 2,
          title: "웹 개발 환경 설정",
          duration: "40분",
          type: "동영상",
          isFree: true,
        },
        {
          id: 3,
          title: "첫 번째 웹 페이지 만들기",
          duration: "35분",
          type: "실습",
          isFree: false,
        },
      ],
    },
    {
      title: "섹션 2: HTML 기초",
      lessons: [
        {
          id: 4,
          title: "HTML 구조와 문법",
          duration: "30분",
          type: "동영상",
          isFree: false,
        },
        {
          id: 5,
          title: "텍스트 요소와 링크",
          duration: "45분",
          type: "동영상",
          isFree: false,
        },
        {
          id: 6,
          title: "이미지와 멀티미디어",
          duration: "35분",
          type: "동영상",
          isFree: false,
        },
        {
          id: 7,
          title: "테이블과 폼",
          duration: "50분",
          type: "실습",
          isFree: false,
        },
      ],
    },
    {
      title: "섹션 3: CSS 기초",
      lessons: [
        {
          id: 8,
          title: "CSS 소개와 문법",
          duration: "30분",
          type: "동영상",
          isFree: false,
        },
        {
          id: 9,
          title: "색상과 배경",
          duration: "25분",
          type: "동영상",
          isFree: false,
        },
        {
          id: 10,
          title: "박스 모델",
          duration: "40분",
          type: "동영상",
          isFree: false,
        },
        {
          id: 11,
          title: "레이아웃과 포지셔닝",
          duration: "55분",
          type: "실습",
          isFree: false,
        },
      ],
    },
    {
      title: "섹션 4: JavaScript 기초",
      lessons: [
        {
          id: 12,
          title: "JavaScript 소개",
          duration: "35분",
          type: "동영상",
          isFree: false,
        },
        {
          id: 13,
          title: "변수와 데이터 타입",
          duration: "45분",
          type: "동영상",
          isFree: false,
        },
        {
          id: 14,
          title: "함수와 이벤트",
          duration: "50분",
          type: "동영상",
          isFree: false,
        },
        {
          id: 15,
          title: "최종 프로젝트: 반응형 웹사이트 만들기",
          duration: "120분",
          type: "프로젝트",
          isFree: false,
        },
      ],
    },
  ],
  materials: [
    {
      title: "강의 교안",
      type: "PDF",
      size: "15MB",
      link: "/files/web-dev-basics.pdf",
    },
    {
      title: "실습 소스코드",
      type: "ZIP",
      size: "5MB",
      link: "/files/practice-code.zip",
    },
    {
      title: "참고 자료",
      type: "PDF",
      size: "8MB",
      link: "/files/references.pdf",
    },
  ],
  reviews: [
    {
      id: 1,
      user: {
        name: "이지원",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      content:
        "초보자도 쉽게 이해할 수 있게 설명해주셔서 정말 좋았습니다. 실습 위주의 강의라 직접 해보면서 배울 수 있어요.",
      date: "2025.05.20",
    },
    {
      id: 2,
      user: {
        name: "박서연",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 4,
      content:
        "전반적으로 만족스러운 강의입니다. 다만 JavaScript 부분이 조금 빠르게 진행되어 초보자는 여러 번 반복해서 들어야 할 것 같아요.",
      date: "2025.05.15",
    },
    {
      id: 3,
      user: {
        name: "김준호",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      content:
        "강사님의 설명이 정말 명확하고 이해하기 쉬웠습니다. 실무에서 바로 적용할 수 있는 팁들도 많이 알려주셔서 유익했어요.",
      date: "2025.05.10",
    },
  ],
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* 페이지 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/policies" className="flex items-center gap-1 hover:text-[#1a6fb3]">
              <ChevronLeft className="h-4 w-4" />
              교육정보 목록으로 돌아가기
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-[#1a6fb3]">{course.category}</Badge>
                <Badge className="bg-gray-500">{course.level}</Badge>
                {course.price === "무료" && <Badge className="bg-green-500">무료</Badge>}
              </div>
              <h1 className="text-2xl font-bold">{course.title}</h1>
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
            {/* 강의 소개 영상 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    className="rounded-full w-16 h-16 bg-white/80 hover:bg-white text-[#1a6fb3] hover:text-[#155a94]"
                    size="icon"
                  >
                    <Play className="h-8 w-8 fill-current" />
                    <span className="sr-only">강의 미리보기</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* 탭 메뉴 */}
            <Tabs defaultValue="info" className="bg-white rounded-lg border border-gray-200">
              <TabsList className="border-b border-gray-200 w-full rounded-t-lg rounded-b-none p-0">
                <TabsTrigger
                  value="info"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  강의 소개
                </TabsTrigger>
                <TabsTrigger
                  value="curriculum"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  커리큘럼
                </TabsTrigger>
                <TabsTrigger
                  value="instructor"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  강사 소개
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#1a6fb3] data-[state=active]:shadow-none py-3 px-4"
                >
                  수강평
                </TabsTrigger>
              </TabsList>

              {/* 강의 소개 탭 */}
              <TabsContent value="info" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold mb-3">강의 소개</h2>
                    <p className="text-gray-700 whitespace-pre-line">{course.description}</p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold mb-3">배울 수 있는 기술</h2>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold mb-3">수강 대상</h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {course.targetAudience.map((audience, index) => (
                        <li key={index}>{audience}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold mb-3">선수 지식</h2>
                    <p className="text-gray-700">{course.prerequisites}</p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold mb-3">강의 자료</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.materials.map((material, index) => (
                        <Link
                          key={index}
                          href={material.link}
                          className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-[#1a6fb3]" />
                            <span>{material.title}</span>
                            <Badge variant="outline" className="ml-2">
                              {material.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-gray-500">{material.size}</span>
                            <Download className="h-4 w-4 text-gray-500" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 커리큘럼 탭 */}
              <TabsContent value="curriculum" className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">커리큘럼</h2>
                    <div className="text-sm text-gray-500">
                      총 {course.curriculum.reduce((acc, section) => acc + section.lessons.length, 0)}개 강의 •{" "}
                      {course.duration}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {course.curriculum.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border border-gray-200 rounded-md overflow-hidden">
                        <div className="bg-gray-50 p-4 font-medium">
                          {section.title}{" "}
                          <span className="text-sm text-gray-500">({section.lessons.length}개 강의)</span>
                        </div>
                        <div className="divide-y divide-gray-100">
                          {section.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                  {lesson.type === "동영상" ? (
                                    <Play className="h-4 w-4 text-[#1a6fb3]" />
                                  ) : lesson.type === "실습" ? (
                                    <FileText className="h-4 w-4 text-[#1a6fb3]" />
                                  ) : (
                                    <Award className="h-4 w-4 text-[#1a6fb3]" />
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium">{lesson.title}</p>
                                  <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span>{lesson.type}</span>
                                    <span>•</span>
                                    <span>{lesson.duration}</span>
                                  </div>
                                </div>
                              </div>
                              {lesson.isFree ? (
                                <Button size="sm" variant="outline" className="text-xs h-7">
                                  미리보기
                                </Button>
                              ) : (
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
                                  className="h-5 w-5 text-gray-400"
                                >
                                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* 강사 소개 탭 */}
              <TabsContent value="instructor" className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                    <AvatarFallback>{course.instructor.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-bold">{course.instructor.name}</h2>
                      <p className="text-gray-500">{course.instructor.title}</p>
                    </div>
                    <p className="text-gray-700">{course.instructor.bio}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-[#1a6fb3]" />
                        <div>
                          <p className="text-sm font-medium">강의</p>
                          <p className="text-sm text-gray-500">12개</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-[#1a6fb3]" />
                        <div>
                          <p className="text-sm font-medium">수강생</p>
                          <p className="text-sm text-gray-500">3,500명+</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-[#1a6fb3]" />
                        <div>
                          <p className="text-sm font-medium">평점</p>
                          <p className="text-sm text-gray-500">4.9/5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 수강평 탭 */}
              <TabsContent value="reviews" className="p-6">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-4xl font-bold text-[#1a6fb3]">{course.rating}</div>
                      <div className="flex items-center gap-1 my-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= Math.floor(Number.parseFloat(course.rating))
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">{course.reviews} 수강평</div>
                    </div>

                    <div className="flex-grow w-full">
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center gap-2">
                            <div className="text-sm text-gray-500 w-6">{rating}점</div>
                            <Progress
                              value={rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}
                              className="h-2"
                            />
                            <div className="text-sm text-gray-500 w-8">
                              {rating === 5
                                ? "70%"
                                : rating === 4
                                  ? "20%"
                                  : rating === 3
                                    ? "7%"
                                    : rating === 2
                                      ? "2%"
                                      : "1%"}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold">수강평</h3>
                    {course.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                              <AvatarFallback>{review.user.name.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-sm">{review.user.name}</span>
                          </div>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 text-sm">{review.content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline">더 많은 수강평 보기</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* 오른쪽 사이드바 */}
          <div className="space-y-6">
            {/* 수강신청 카드 */}
            <Card className="sticky top-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      {course.price === "무료" ? (
                        "무료"
                      ) : (
                        <>
                          {course.price}
                          <span className="text-sm font-normal text-gray-500 ml-1">원</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">총 {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{course.lessons}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{course.level} 난이도</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{course.students} 수강 중</span>
                    </div>
                    {course.certificate && (
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">수료증 발급</span>
                      </div>
                    )}
                  </div>

                  <Button className="w-full bg-[#1a6fb3] hover:bg-[#155a94]">
                    {course.isEnrolled ? "학습 계속하기" : "수강 신청하기"}
                  </Button>

                  {course.isEnrolled && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>학습 진행률</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{course.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{course.reviews}</span>
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
                      <span>{course.views}</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 text-center">최근 업데이트: {course.lastUpdated}</div>
                </div>
              </CardContent>
            </Card>

            {/* 관련 강의 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">관련 강의</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/courses/2" className="flex gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors">
                    <img
                      src="/placeholder.svg?height=60&width=80"
                      alt="농산물 마케팅 전략"
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-sm">농산물 마케팅 전략</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-500">4.7</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="/courses/3" className="flex gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors">
                    <img
                      src="/placeholder.svg?height=60&width=80"
                      alt="관광 서비스 실무"
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-sm">관광 서비스 실무</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-500">4.9</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="/courses/4" className="flex gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors">
                    <img
                      src="/placeholder.svg?height=60&width=80"
                      alt="창업 기초 과정"
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-sm">창업 기초 과정</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-500">4.6</span>
                      </div>
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
