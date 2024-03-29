import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div id="navbar" className='hidden sm:block fixed border-r top-0 left-0 w-auto px-3 2xl:px-0 2xl:w-[296px] h-screen bg-white'>
      <div className='flex flex-col w-full items-center mt-0 2xl:mt-10 py-2 h-full justify-between max-h-none 2xl:max-h-[700px]'>
        <nav className='w-auto 2xl:w-[233px] flex flex-col space-y-2'>
          <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
            <div style={LinkContentStyle} className=''>
              <img alt='home icon' src={'/nav/nav-home.svg'} />
              <span className='hidden 2xl:block' style={LinkContentTextStyle}>Dashboard</span>
            </div>
          </Link>
          <Link style={LinkStyles} href={"/"} className='nav-link  bg-[#7950F2] text-white'>
            <div style={LinkContentStyle} className=''>
              <img alt='content icon' src={'/nav/nav-content.svg'} />
              <span className='hidden 2xl:block' style={LinkContentTextStyle}>Content</span>
            </div>
          </Link>
          <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
            <div style={LinkContentStyle} className=''>
              <img alt='team icon' src={'/nav/nav-team.svg'} />
              <span className='hidden 2xl:block' style={LinkContentTextStyle}>Team</span>
            </div>
          </Link>
          <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
            <div style={LinkContentStyle} className=''>
              <img alt='user icon' src={'/nav/nav-user.svg'} />
              <span className='hidden 2xl:block' style={LinkContentTextStyle}>User</span>
            </div>
          </Link>
          <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
            <div style={LinkContentStyle} className=''>
              <img alt='app icon' src={'/nav/nav-app.svg'} />
              <span className='hidden 2xl:block' style={LinkContentTextStyle}>App/Web</span>
            </div>
          </Link>
          <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
            <div style={LinkContentStyle} className=''>
              <img alt='analytics icon' src={'/nav/nav-analytics.svg'} />
              <span className='hidden 2xl:block' style={LinkContentTextStyle}>Analytics</span>
              <span className='alert'>3</span>
            </div>
          </Link>
          <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
            <div style={LinkContentStyle} className=''>
              <img alt='media icon' src={'/nav/nav-media.svg'} />
              <span className='hidden 2xl:block' style={LinkContentTextStyle}>Media</span>
              <span className='alert'>10</span>
            </div>
          </Link>
          <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
            <div style={LinkContentStyle} className=''>
              <img alt='notification icon' src={'/nav/nav-notification.svg'} />
              <span className='hidden 2xl:block' style={LinkContentTextStyle}>Notification</span>
            </div>
          </Link>
          <Link style={LinkStyles} href={"/"} className='nav-link text-[#53545C] hover:bg-[#E8E9FF]'>
            <div style={LinkContentStyle} className=''>
              <img alt='settings icon' src={'/nav/nav-settings.svg'} />
              <span className='hidden 2xl:block' style={LinkContentTextStyle}>Settings</span>
            </div>
          </Link>
        </nav>

        <button className='flex 2xl:mt-14 mb-5 items-center rounded-full 2xl:rounded-[10px] space-x-2.5 w-auto 2xl:w-[232px] bg-[#E8E9FF] p-2 2xl:px-[16px] 2xl:py-[11px]'>
          <img alt="contat icon" src={'/nav/nav-contact.svg'} />
          <span className='hidden 2xl:block text-sm leading-4'>Contact Support</span>
        </button>
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