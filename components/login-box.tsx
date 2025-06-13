import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { User } from "lucide-react"

export default function LoginBox() {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
            <User className="h-8 w-8 text-gray-400" />
          </div>
          <p className="text-sm text-center mb-4">
            로그인하시면 맞춤형 서비스를
            <br />
            이용하실 수 있습니다.
          </p>
          <div className="flex gap-2 w-full">
            <Button className="flex-1 bg-[#1a6fb3] hover:bg-[#155a94]" size="sm" asChild>
              <Link href="/login">로그인</Link>
            </Button>
            <Button variant="outline" className="flex-1" size="sm" asChild>
              <Link href="/register">회원가입</Link>
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
            <Link href="/find-id" className="hover:underline">
              아이디 찾기
            </Link>
            <span>|</span>
            <Link href="/find-password" className="hover:underline">
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
