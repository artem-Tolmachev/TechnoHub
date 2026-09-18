import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {

  return (
    <header className='w-full bg-black flex items-center justify-center pt-4 pb-4'>
        <div className='w-full pr-4 pl-4 cursor-pointer max-w-[320px] md:max-w-none md:w-[656px] xl:w-[992px]'>
            <Link href="/">
              <Image
                  src="/images/articles/logo.svg"
                  alt="Логотип"
                  width={200}
                  height={100}
              />
            </Link>
        </div>
    </header>
  )
}
