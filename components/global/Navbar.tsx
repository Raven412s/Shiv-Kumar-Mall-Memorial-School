import { SearchIcon } from 'lucide-react'
import { LuMessageCircleMore } from "react-icons/lu";
import { GiMegaphone } from "react-icons/gi";
import React from 'react'
import { Input } from '../ui/input'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-sidebar-primary-foreground text-sidebar-accent-foreground p-4 h-full'>
        {/*  SEARCH BAR */}
        <div className="hidden md:flex items-center justify-between w-[28%] lg:w-[35%] rounded-full h-10 bg-white border border-foreground px-2 overflow-hidden">
            <SearchIcon/>
            <Input placeholder='Search...' className='bg-transparent shadow-none rounded-none w-[90%] border-none focus:outline-none focus:ring-0 focus:border-none '/>
        </div>

        {/*  USER BUTTON & OTHER ICONS */}
        <div className="flex items-center justify-between gap-7 h-full">
            <div className="flex items-center justify-center gap-4">
                <span className='relative group flex justify-center lg:justify-start'>
                    <Link href={"#"} className='flex  items-center'>
                        <LuMessageCircleMore className='size-7' />
                        <span className='sr-only'>Natifications</span>
                    </Link>
                     {/* Hidden label that appears on hover */}
                    <span className="absolute top-full -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Notifications
                    </span>
                </span>
                <span className='relative group flex justify-center lg:justify-start'>
                    <Link href={"#"} className='flex  items-center'>
                        <GiMegaphone className='size-7' />
                        <span className='rounded-full absolute size-5 text-xs -top-3 -right-3 flex items-center justify-center bg-gradient-to-br from0% from-sky-200 via-40% via-sky-400 to-100% to-sky-700 text-stone-50 font-medium text-center '>1</span>
                        <span className='sr-only'>Announcements</span>
                    </Link>
                     {/* Hidden label that appears on hover */}
                    <span className="absolute top-full -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Announcements
                    </span>
                </span>
            </div>
            <div className="flex items-center h-full">
                {/* User Info */}
                <div className="w-[69%] flex flex-col items-end">
                    <span className="w-max text-sm font-medium truncate">
                    {/* USER NAME */}
                    User Name
                    </span>
                    <span className="w-max text-xs font-normal truncate">
                    {/* USER ROLE */}
                    User Role
                    </span>
                </div>

                {/* Separator */}
                <Separator orientation="vertical" className="bg-foreground mx-2 w-2" />

                {/* User Profile */}
                <div className="w-[29%] flex justify-center">
                    <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                </div>
        </div>
    </div>
  )
}
