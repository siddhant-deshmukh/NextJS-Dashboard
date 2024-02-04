import Image from 'next/image'
import React from 'react'

export default function AdvList() {
  return (
    <>
      <div>
        <h3>Top Advertisements</h3>
      </div>
      <div className="overflow-x-hidden">
        <div className="flex space-x-5 w-fit py-10">
          {
            topAdvList.map((adv, index) => {
              return (
                // h-[212px]
                <div key={index} className="border ml-2 shadow-lg rounded-2xl overflow-hidden  "> 
                  <div className="flex w-fit">
                    <div className='w-[150px] sm:w-[226px] aspect-[226/212]'>
                      <Image className='flex-nowrap object-cover' src={adv.imgSrc} width={226}  height={212} alt="" />
                    </div>
                    <div className="p-2.5 sm:p-5 w-[200px] sm:w-[274px]">
                      <h4 className="text-lg sm:text-2xl font-semibold">{adv.name}</h4>
                      <p className="text-xs sm:text-base text-[#A0A3BD]">{adv.desc}</p>
                      <div id="visit-footer" className="flex mt-3 justify-between space-x-2">
                        <button className="bg-[#E8E9FF] rounded-xl text-[#7750F1] font-semibold text-xs sm:text-lg leading-none py-2.5 sm:py-4 w-full">
                          Visit
                        </button>
                        <button className="aspect-square bg-[#FAFAFA] items-center border flex justify-center rounded-xl w-10 sm:w-[70px]">
                          <img className="w-5 h-[6px]" alt="" src={'/3-dot.svg'} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

const topAdvList = [
  { imgSrc: "/adv/adv-1.jpg", name: "Build your business", desc: "Shopify has all the tools you need to start, sell, market, and manage." },
  { imgSrc: "/adv/adv-2.jpg", name: "Libre Coffee", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
  { imgSrc: "/adv/adv-3.jpg", name: "KFC", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
]