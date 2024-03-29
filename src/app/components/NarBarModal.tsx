'use client'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Calender from './Calender'


export default function NavBarModal({ setModalToggle }: {
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>
}) {

  const modalRef = useRef<HTMLDivElement | null>(null)
  const navbarRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (modalRef.current != null && navbarRef.current != null) {
      //@ts-ignore
      modalRef.current?.onclick((event) => {
        if (event.target != navbarRef.current) {
          setModalToggle(false)
        }
      })
    }
  }, [navbarRef, modalRef, setModalToggle])

  return (
    <div
      onClick={(e) => {
        if (navbarRef.current && navbarRef.current != e.target) {
          setModalToggle(false)
        }
      }}
      ref={modalRef} className='block xl:hidden w-full h-screen fixed top-0 left-0 bg-black z-30 bg-opacity-25'>
      <div ref={navbarRef} className='text-[#53545C] block xl:hidden fixed border-r top-0 left-0 w-auto px-3 2xl:px-0 2xl:w-[296px] h-screen bg-white'>
        <div className='flex flex-col  w-full items-center py-2 h-full justify-between'>
          <nav className='w-[233px] flex flex-col space-y-2'>
            <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
              <div style={LinkContentStyle} className=''>
                <img alt='home icon' src={'/nav/nav-home.svg'} />
                <span className='block' style={LinkContentTextStyle}>Dashboard</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='nav-link text-white bg-[#7950F2]'>
              <div style={LinkContentStyle} className=''>
                <img alt='content icon' src={'/nav/nav-content.svg'} />
                <span className='block' style={LinkContentTextStyle}>Content</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
              <div style={LinkContentStyle} className=''>
                <img alt='team icon' src={'/nav/nav-team.svg'} />
                <span className='block' style={LinkContentTextStyle}>Team</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
              <div style={LinkContentStyle} className=''>
                <img alt='user icon' src={'/nav/nav-user.svg'} />
                <span className='block' style={LinkContentTextStyle}>User</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
              <div style={LinkContentStyle} className=''>
                <img alt='app icon' src={'/nav/nav-app.svg'} />
                <span className='block' style={LinkContentTextStyle}>App/Web</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
              <div style={LinkContentStyle} className=''>
                <img alt='analytics icon' src={'/nav/nav-analytics.svg'} />
                <span className='block' style={LinkContentTextStyle}>Analytics</span>
                <span className='alert-b'>3</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
              <div style={LinkContentStyle} className=''>
                <img alt='media icon' src={'/nav/nav-media.svg'} />
                <span className='block' style={LinkContentTextStyle}>Media</span>
                <span className='alert-b'>10</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
              <div style={LinkContentStyle} className=''>
                <img alt='notification icon' src={'/nav/nav-notification.svg'} />
                <span className='block' style={LinkContentTextStyle}>Notification</span>
              </div>
            </Link>
            <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
              <div style={LinkContentStyle} className=''>
                <img alt='settings icon' src={'/nav/nav-settings.svg'} />
                <span className='block' style={LinkContentTextStyle}>Settings</span>
              </div>
            </Link>
          </nav>

          <div className='w-[232px] mt-5'>
            <Calender />
            <button className='flex text-[#1C1D22] mt-5 mb-5 items-center rounded-[10px] space-x-2.5 w-full bg-[#E8E9FF] px-[16px] py-[11px]'>
              <img alt="contat icon" src={'/nav/nav-contact.svg'} />
              <span className='block text-sm leading-4'>Contact Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const LinkStyles: React.CSSProperties = {
  // paddingLeft: "20px",
  // paddingRight: "20px",
  // paddingTop: "16px",
  // paddingBottom: "16px",
  // // background: "#7950F2",
  // borderRadius: "12px"
}
const LinkContentStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
}
const LinkContentTextStyle: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "16.8px",
  marginLeft: "16px",
  fontWeight: 600,
}