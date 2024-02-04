import Image from 'next/image'
import React from 'react'

export default function Calender() {
  return (
    <div className='flex space-x-5 items-center border border-[#A0A3BD] bg-[#FCFCFD] py-4 px-6 rounded-lg'>
      <div className='relative'>
        <input
          className='outline-none bg-transparent w-[112px] text-base leading-none p-0'
          placeholder='11/10/2022'
          defaultValue={'2022-10-11'}
          // pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-\d{4}"
          type='date' />
        <Image className='absolute top-0.5 right-0' alt='calender icon' src="/calendar.svg" width={20} height={20} />
      </div>
      <span>OR</span>
      <div className='relative'>
        <input
          className='outline-none bg-transparent w-[112px] text-base leading-none p-0'
          placeholder='11/10/2022'
          defaultValue={'2022-10-11'}
          // pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-\d{4}"
          type='date' />
        <Image className='absolute top-0.5 right-0' alt='calender icon' src="/calendar.svg" width={20} height={20} />
      </div>
    </div>
  )
}
