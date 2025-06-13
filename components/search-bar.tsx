import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <section className="bg-[#f8f9fa] border-b border-gray-200 py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium mb-4">원하시는 서비스를 검색하세요</h2>
          <div className="relative w-full max-w-2xl">
            <div className="flex">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="찾으시는 서비스를 입력하세요"
                  className="w-full py-3 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1a6fb3]"
                />
              </div>
              <Button className="rounded-l-none bg-[#1a6fb3] hover:bg-[#155a94]">
                <Search className="h-5 w-5 mr-2" />
                검색
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
