import Link from "next/link";

export default function Navbar() {
  return(
    <div className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">청소년부 회계관리</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-x-10">
            <Link href='/incom' className="text-gray-700 hover:text-gray-500">수입기록</Link>
            <Link href='/spending' className="text-gray-700 hover:text-gray-500">지출기록</Link>
            <Link href='/calculate' className="text-gray-700 hover:text-gray-500">정산</Link>
            <Link href='/budget' className="text-gray-700 hover:text-gray-500">예산</Link>
            <Link href='/category' className="text-gray-700 hover:text-gray-500">항목코드</Link>
            <Link href='/notice' className="text-gray-700 hover:text-gray-500">공지사항</Link>
            <Link href='/management' className="text-gray-700 hover:text-gray-500">관리</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
  )
}