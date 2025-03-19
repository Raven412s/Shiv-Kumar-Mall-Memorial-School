import { Menu } from '@/components/global/Menu'
import { Navbar } from '@/components/global/Navbar'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

const DashboardLayout = ({children}:PropsWithChildren) => {
  return (
    <div className={cn("h-screen flex ")}>
        {/* LEFT SECTION */}
        <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[15%] p-4 bg-sidebar-primary-foreground text-sidebar-accent-foreground border border-sidebar-primary flex flex-col justify-between">
            <Link href={"/"} className='flex gap-2 items-center justify-center lg:justify-start '>
                <Image src={"/logo.svg"} alt='logo' width={32} height={32}  />
                <span className='hidden lg:block font-bold'>School Name</span>
            </Link>
            <div className='h-[90%]'>
                <Menu />
            </div>
        </div>
        {/* RIGHT SECTION */}
        <div className="w-[85%] md:w-[92%] lg:w-[84%] xl:w-[85%] flex flex-col">
            <div className="h-[8%] border-y border-sidebar-primary">
                <Navbar/>
            </div>
            <div className="h-[92%] py-10 px-6">
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout
