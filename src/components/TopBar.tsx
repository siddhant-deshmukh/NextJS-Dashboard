'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Calender from './Calender'
import { NavBarModal } from './NavBar'
import Link from 'next/link'

export default function TopBar({ title }: {
  title?: string
}) {
  const [moddleToggle, setModalToggle] = useState<boolean>(false)

  return (
    <div className='sticky top-0 z-20 w-full bg-white flex items-center justify-between py-1.5 md:py-5 px-5  md:space-x-5'>
      <div className='block xl:hidden'>
        {
          moddleToggle &&
          <NavBarModal setModalToggle={setModalToggle} />
        }
      </div>

      <div className='flex items-center w-full justify-between'>
        {
          !title &&
          <>
            {/* Search bar */}
            <div className='w-48 xs:w-full max-w-96 md:w-96 bg-[#FCFCFD] border border-gray-300 rounded-3xl'>
              <div className='flex px-2 items-center py-2 md:py-3 md:px-4 space-x-3'>
                <img className='w-[17px] md:w-[24px] aspect-square' src="/search.svg" width={24} height={24} alt="search icon" />
                <input className='outline-none text-xs md:text-sm' type="text" placeholder='search' />
              </div>
            </div>

            {/* Calender */}
            <div className='hidden xl:block'>
              <Calender />
            </div>
          </>
        }
        {
          title &&
          <div className='flex space-x-5 sm:space-x-10 items-center'>
            <Link href={'/'} className='w-8 h-8 rounded-md flex items-center justify-center '>
              <img src="/left-arrow.svg" className='w-6 h-3' />
            </Link>
            <h1 className='text-lg sm:text-xl md:text-3xl  font-bold'>
              {title}
            </h1>
          </div>
        }
      </div>
      {/* User button */}
      <button
        onClick={() => { setModalToggle(true) }}

        className='w-11 p-1 ml-2 xl:ml-2 rounded-full md:w-72 md:rounded-lg md:px-2.5 md:py-1.5 bg-[#FCFCFD] border-gray-300 flex items-center justify-between md:justify-between border'>
        <div className=' md:flex items-center justify-center md:justify-normal'>
          <div className='w-9 aspect-square'>
            <Image src={'/avatar.png'} alt='avatar logo' width={52} height={52} className='object-cover rounded-full md:rounded-md' />
          </div>
          <div className='text-left hidden md:block ml-0 md:ml-2'>
            <h4 className='text-[10px]'>Welcome back,</h4>
            <h2 className='text-base font-medium'>Akshita Patel</h2>
          </div>
        </div>
        <Image className='hidden md:block' src={'/down-arrow.svg'} alt="" width={24} height={24} />
      </button>
    </div>
  )
}
