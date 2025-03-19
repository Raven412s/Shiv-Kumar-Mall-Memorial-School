import { menuItems } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from '../ui/separator'

export const Menu = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      {menuItems.map((i) => (
        <div key={i.title}>
          <div className="flex items-center gap-3 justify-center lg:justify-start my-2">
            {i.icon}
            <span className='text-center lg:block hidden font-light text-accent-foreground'>{i.title}</span>
          </div>
          <Separator className='w-full'/>
          <div className="py-4 flex flex-col lg:gap-2 gap-4">
            {i.linkItems.map((Item) => (
              <div key={Item.label} className="relative group flex justify-center lg:justify-start">
                <Link href={Item.href} className='flex gap-2 items-center'>
                  <Item.Icon className='size-4'/>
                  <span className='hidden lg:block text-sm'>{Item.label}</span>
                </Link>
                {/* Hidden label that appears on hover */}
                <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {Item.label}
                </span>
              </div>
            ))}
          </div>
          <Separator className='w-full'/>
        </div>
      ))}
    </div>
  )
}
