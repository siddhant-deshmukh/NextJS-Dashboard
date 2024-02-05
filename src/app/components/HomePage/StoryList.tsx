import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function StoryList() {
  return (
    <>
      <div className='section-heading'>
        <h3>Top Stories</h3>
        <button>See all</button>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex w-fit mt-7 space-x-9">
          {
            topStoriesList.map((story, index) => {
              return (
                <div key={index} className="flex flex-col w-[260px] sm:w-[340px] aspect-[340/500]">
                  <div className="relative rounded-xl">
                    <Image src={story.imgSrc} alt="" className="-z-10 object-cover" width={340} height={500} />
                    <div className="z-10 w-[260px] sm:w-[340px] aspect-[340/500] absolute top-0 left-0">
                      <div className="flex flex-col h-full justify-between p-3">

                        <div className="flex items-center justify-end space-x-3">
                          <button className="flex bg-[#EDEEED] py-1.5 px-2.5 space-x-1.5 rounded-md items-center">
                            <Image className='object-cover' src={'/eye.svg'} alt="" width={16} height={16} />
                            <span className="text-[##9058FF] text-xs">428</span>
                          </button>
                          <button className="flex bg-[#EDEEED] py-1.5 px-2.5 space-x-1.5 rounded-md">
                            <Image className='object-cover' src={'/chart.svg'} alt="" width={16} height={16} />
                          </button>
                        </div>

                        <div className="text-white text-lg sm:text-2xl font-semibold" >
                          <h1>{story.name}</h1>
                          <div>
                            <div className="flex justify-between items-center mt-3">
                              <div className="flex space-x-1 text-xs sm:text-base font-medium items-center">
                                <span className=" font-[900]">{story.topic}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                <span className="text-[#A0A3BD] font-bold">20 Sep 2022</span>
                              </div>
                              {
                                story.type === "published" &&
                                <button className={`bg-[#E4FFF8] text-[#0DAD82] text-xs sm:text-base font-semibold rounded-md py-1.5 px-3 sm:py-2.5 sm:px-5 outline-none border-none`}>
                                  Published
                                </button>
                              }
                              {
                                story.type === "created" &&
                                <button className={`bg-[#DAF1FB] text-[#58A4FF] text-xs sm:text-base font-semibold rounded-md py-1.5 px-3 sm:py-2.5 sm:px-5 outline-none border-none`}>
                                  Created
                                </button>
                              }
                              {
                                story.type === "draft" &&
                                <button className={`bg-[#F4F4F4] text-[#A0A3BD] text-xs sm:text-base font-semibold rounded-md py-1.5 px-3 sm:py-2.5 sm:px-5 outline-none border-none`}>
                                  Draft
                                </button>
                              }
                            </div>
                          </div>
                          <div className="flex mt-3 justify-between space-x-2">
                            <Link href={`story/${index+1}`} className="text-center bg-[#E8E9FF] rounded-xl text-[#7750F1] font-semibold text-sm sm:text-lg leading-none py-2.5 sm:py-4 w-full">
                              View
                            </Link>
                            <button className="bg-[#FAFAFA] items-center border flex justify-center rounded-xl w-[50px] sm:w-[70px]">
                              <Image className="" alt="" src={'/3-dot.svg'} width={20} height={6} />
                            </button>
                          </div>
                        </div>
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

const topStoriesList = [
  { imgSrc: "/story/stories-1.jpg", name: "How 7 lines code turned into $36 Billion Empire", topic: "BUISNESS", type: "published" },
  { imgSrc: "/story/stories-2.jpg", name: "Chez pierre restaurant in Monte Carlo by Vuidafieri", topic: "BUISNESS", type: "created" },
  { imgSrc: "/story/stories-3.jpg", name: "Teknion wins Gold at 2022 International Design Awards", topic: "POLITICS", type: "draft" },
  { imgSrc: "/story/stories-4.jpg", name: "How 7 lines code turned into $36 Billion Empire", topic: "BUISNESS", type: "published" },
  { imgSrc: "/story/stories-2.jpg", name: "Chez pierre restaurant in Monte Carlo by Vuidafieri", topic: "BUISNESS", type: "created" },
]