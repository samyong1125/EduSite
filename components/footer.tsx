import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/placeholder.svg?height=40&width=40" alt="로고" className="h-10 w-10 invert" />
              <span className="font-bold text-lg">지역균형24</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              지방에 거주하는 학생 및 구직자들에게 교육과 실무 경험의 기회를 제공하여 지역 간 교육 격차와 취업 불균형을
              해소하는 플랫폼입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3 text-gray-100">이용안내</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/terms" className="hover:text-white">
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="hover:text-white">
                    저작권정책
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="hover:text-white">
                    웹접근성정책
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-gray-100">서비스</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/competitions" className="hover:text-white">
                    대회 및 경진 행사
                  </Link>
                </li>
                <li>
                  <Link href="/job-experiences" className="hover:text-white">
                    직업 체험 기회
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-white">
                    직업 교육 콘텐츠
                  </Link>
                </li>
                <li>
                  <Link href="/recommendations" className="hover:text-white">
                    맞춤형 추천
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-gray-100">고객센터</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/faq" className="hover:text-white">
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    문의하기
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-white">
                    의견제안
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p>(우)30116 세종특별자치시 한누리대로 411, 지역균형24 운영팀 | 대표전화: 044-123-4567</p>
              <p>© {new Date().getFullYear()} 지역균형24. All rights reserved.</p>
            </div>
            <div>
              <img src="/placeholder.svg?height=40&width=120" alt="웹 접근성 인증마크" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
