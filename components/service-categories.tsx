import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "대회/행사",
    icon: "/placeholder.svg?height=60&width=60",
    color: "bg-blue-100",
    href: "/competitions",
  },
  {
    id: 2,
    name: "직업체험",
    icon: "/placeholder.svg?height=60&width=60",
    color: "bg-green-100",
    href: "/job-experiences",
  },
  {
    id: 3,
    name: "교육과정",
    icon: "/placeholder.svg?height=60&width=60",
    color: "bg-yellow-100",
    href: "/courses",
  },
  {
    id: 4,
    name: "AI 추천",
    icon: "/placeholder.svg?height=60&width=60",
    color: "bg-purple-100",
    href: "/recommendations",
  },
  {
    id: 5,
    name: "지원사업",
    icon: "/placeholder.svg?height=60&width=60",
    color: "bg-red-100",
    href: "/support-programs",
  },
  {
    id: 6,
    name: "취업정보",
    icon: "/placeholder.svg?height=60&width=60",
    color: "bg-indigo-100",
    href: "/job-info",
  },
  {
    id: 7,
    name: "지역정보",
    icon: "/placeholder.svg?height=60&width=60",
    color: "bg-orange-100",
    href: "/regional-info",
  },
  {
    id: 8,
    name: "마이페이지",
    icon: "/placeholder.svg?height=60&width=60",
    color: "bg-teal-100",
    href: "/mypage",
  },
]

export default function ServiceCategories() {
  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="container px-4 md:px-6">
        <h2 className="text-xl font-bold mb-6">자주 찾는 서비스</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={category.href} className="flex flex-col items-center group">
              <div
                className={`${category.color} rounded-full w-14 h-14 flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow`}
              >
                <img src={category.icon || "/placeholder.svg"} alt={category.name} className="w-8 h-8" />
              </div>
              <span className="text-sm text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
