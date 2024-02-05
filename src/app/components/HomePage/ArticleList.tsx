import Image from 'next/image'
import React from 'react'

export default function ArticleList() {
  return (
    <>
      <div className='section-heading'>
        <h3>Top Articles</h3>
        <button>See all</button>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex mt-4 py-3 pl-3 space-x-2.5 sm:space-x-4 lg:space-x-9">
          {
            topArticleList.map((article, index) => {
              return (
                <div key={index} className="flex text-[#A0A3BD] flex-col relative rounded-xl border bg-white p-0 sm:p-3 w-[320px] sm:w-[472px] transition-all duration-200 scale-100 hover:scale-105">
                  <Image className="rounded-none sm:rounded-xl" src={article.imgSrc} alt="" width={448} height={228} />
                  {/* Topic, Date, author */}
                  <div className='p-3 sm:p-0'>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex space-x-2 text-xs sm:text-sm font-medium items-center">
                        <span className="text-[#9058FF] font-extrabold">{article.topic}</span>
                        <span className="w-1.5 h-1.5 bg-[#D9D9D9] rounded-full" />
                        <span className="font-semibold">{article.date}</span>
                      </div>
                      <div className="flex space-x-2 items-center">
                        <div className='w-[20px] sm:w-[30px] aspect-square'>
                          <Image alt="avatar" className='object-cover' src={'/dp-avatar.jpg'} width={30} height={30} />
                        </div>
                        <span className="text-xs leading-none sm:text-base text-black font-semibold">Maria Doe</span>
                      </div>
                    </div>
                    {/* Title */}
                    <div className="flex justify-between items-center mt-3">
                      <h1 className='inline-block sm:block text-[#22285E] text-[18px] sm:text-[24px] font-semibold'>
                        {article.title}
                      </h1>
                      {
                        article.type === "created" &&
                        <span className='absolute top-1.5 right-1.5 sm:static'>
                          <button className={`bg-[#E3D5FF] text-[#7950F2] font-semibold rounded-xl sm:rounded-lg text-xs py-1.5 px-2.5 sm:text-base sm:py-2.5 sm:px-5 outline-none border-none`}>
                            Created
                          </button>
                        </span>
                      }
                      {
                        article.type === "published" &&
                        <span className='absolute top-1.5 right-1.5 sm:static'>
                          <button className={`bg-[#E4FFF8] text-[#0DAD82] font-semibold rounded-xl sm:rounded-lg text-xs py-1.5 px-2.5 sm:text-base sm:py-2.5 sm:px-5 outline-none border-none`}>
                            Published
                          </button>
                        </span>
                      }
                    </div>
                    {/* Description */}
                    <div className=" mt-0">
                      {article.desc}
                    </div>
                    {/* Tags */}
                    <div className="flex space-x-3 mt-2 text-base leading-none font-semibold ">
                      {
                        article.tags.map((text, index) => {
                          return <span key={index} className="text-xs py-1.5 px-2.5 sm:text-base sm:py-3 sm:px-4 border  bg-[#F8FAFB]">
                            {text}
                          </span>
                        })
                      }
                    </div>
                    {/* Footer btns */}
                    <div className="flex mt-3 justify-between space-x-5">
                      <button className="bg-[#E8E9FF] hover:bg-violet-200 rounded-xl text-[#7750F1]  font-semibold text-xs sm:text-lg py-2.5 sm:py-4 w-[360px]">
                        View
                      </button>
                      <button className="bg-[#FAFAFA] items-center border flex justify-center rounded-xl w-[60px]">
                        <Image className="" alt="" src={'/3-dot.svg'} width={20} height={6} />
                      </button>
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


const topArticleList = [
  {
    title: "7 Rules of Effective Branding",
    desc: "Why Branding matters for your Business",
    type: "created",
    date: "20 Sep 2022",
    topic: "BUISNESS",
    tags: ["Branding", "Communication", "Branding"],
    imgSrc: "/articles/articals-1.jpg"
  },
  {
    title: "Research on biodiversity an...",
    desc: "Lorem ipsum dolor sit amet, consectetur",
    type: "published",
    date: "20 Sep 2022",
    topic: "ECONOMY",
    tags: ["World", "Population"],
    imgSrc: "/articles/articals-2.jpg"
  },
  {
    title: "Close and historical ties to h...",
    desc: "Lorem ipsum dolor sit amet, consectetur",
    type: "published",
    date: "20 Sep 2022",
    topic: "POLITICS",
    tags: ["Politics", "Defence"],
    imgSrc: "/articles/articals-3.jpg"
  },
  {
    title: "7 Rules of Effective Branding",
    desc: "Why Branding matters for your Business",
    type: "created",
    date: "20 Sep 2022",
    topic: "BUISNESS",
    tags: ["Branding", "Communication", "Branding"],
    imgSrc: "/articles/articals-1.jpg"
  },
]