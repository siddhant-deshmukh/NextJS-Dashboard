'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Calender from './Calender'
import { NavBarModal } from './NavBar'

export default function TopBar() {
  const [moddleToggle, setModalToggle] = useState<boolean>(false)


  return (
    <div className=' w-full bg-white flex items-center justify-between py-2 sm:py-5 px-2 sm:px-10 sm:space-x-10 rounded-lg'>
      <div className='block xl:hidden'>
        {
          moddleToggle &&
          <NavBarModal setModalToggle={setModalToggle} />
        }
      </div>

      <div className='flex items-center w-full justify-between'>
        {/* Search bar */}
        <div className='w-48 xs:w-full max-w-96 sm:w-96 bg-[#FCFCFD] border border-gray-300 rounded-3xl'>
          <div className='flex px-2 items-center py-1.5 sm:py-3 sm:px-4 space-x-3'>
            <img className='w-[17px] sm:w-[24px] aspect-square' src="/search.svg" width={24} height={24} alt="search icon" />
            <input className='outline-none text-xs sm:text-sm' type="text" placeholder='search' />
          </div>
        </div>

        {/* Calender */}
        <div className='hidden xl:block'>
          <Calender />
        </div>
      </div>
      {/* User button */}
      <button
        onClick={() => { setModalToggle(true) }}

        className='w-12 ml-2 rounded-full md:w-72 md:rounded-lg p-0.5 md:px-2.5 md:py-1.5 bg-[#FCFCFD] border-gray-300 flex justify-between border'>
        <div className=' md:flex items-center space-x-2'>
          <Image src={'/avatar.png'} alt='avatar logo' width={33} height={33} className='rounded-full md:rounded-md' />
          <div className='hidden md:block'>
            <h4 className='text-[10px]'>Welcome back,</h4>
            <h2 className='text-base font-medium'>Akshita Patel</h2>
          </div>
        </div>
        <Image className='hidden md:block' src={'down-arrow.svg'} alt="" width={24} height={24} />
      </button>
    </div>
  )
}
