import { Inter } from 'next/font/google'

// 임시
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-screen grid grid-cols-5 items-center'>
      <div className='w-full flex justify-center'>
        <Link href='/login' className='w-24 h-8 bg-red-200 text-center items-center flex justify-center'>
          로그인 페이지
        </Link>
      </div>
      <div className='w-full flex justify-center'>
        <Link href='/' className='w-24 h-8 bg-red-200 text-center items-center flex justify-center'>
          페이지 1
        </Link>
      </div>
      <div className='w-full flex justify-center'>
        <Link href='/' className='w-24 h-8 bg-red-200 text-center items-center flex justify-center'>
          페이지 1
        </Link>
      </div>
      <div className='w-full flex justify-center'>
        <Link href='/' className='w-24 h-8 bg-red-200 text-center items-center flex justify-center'>
          페이지 1
        </Link>
      </div>
      <div className='w-full flex justify-center'>
        <Link href='/' className='w-24 h-8 bg-red-200 text-center items-center flex justify-center'>
          페이지 1
        </Link>
      </div>
    </div>
  )
}
