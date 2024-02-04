import Image from 'next/image'
import React from 'react'

export default function ArticleList() {
  return (
    <>
      <div>
        <h3>Top Articles</h3>
      </div>
      <div className="overflow-x-hidden">
        <div className="flex mt-7 space-x-9">
          {
            topArticleList.map((article, index) => {
              return (
                <div key={index} className="flex flex-col rounded-xl border bg-white p-3 w-[472px]">
                  <Image className="rounded-xl" src={article.imgSrc} alt="" width={448} height={228} />
                  {/* Topic, Date, author */}
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-2 text-sm font-medium items-center">
                      <span className="text-[#9058FF] font-bold">{article.topic}</span>
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                      <span className="text-gray-400">{article.date}</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <Image alt="avatar" src={'/dp-avatar.jpg'} width={30} height={30} />
                      <span className="text-sm font-bold">Maria Doe</span>
                    </div>
                  </div>
                  {/* Title */}
                  <div className="flex justify-between items-center mt-3">
                    <h1 className="text-[#22285E] text-[22px] font-semibold">{article.title}</h1>
                    {
                      article.type === "created" &&
                      <button className={`bg-[#E3D5FF] text-[#7950F2] font-semibold rounded-md py-2.5 px-5 outline-none border-none`}>
                        Created
                      </button>
                    }
                    {
                      article.type === "published" &&
                      <button className={`bg-[#E4FFF8] text-[#0DAD82] font-semibold rounded-md py-2.5 px-5 outline-none border-none`}>
                        Published
                      </button>
                    }
                  </div>
                  {/* Description */}
                  <div className="text-[#A0A3BD] mt-0">
                    {article.desc}
                  </div>
                  {/* Tags */}
                  <div className="flex space-x-3 mt-2 text-base leading-none font-semibold text-[#A0A3BD]">
                    {
                      article.tags.map((text, index) => {
                        return <span key={index} className="py-3 border px-4 bg-[#F8FAFB]">
                          {text}
                        </span>
                      })
                    }
                  </div>
                  {/* Footer btns */}
                  <div className="flex mt-3 justify-between space-x-5">
                    <button className="bg-[#E8E9FF] rounded-xl text-[#7750F1] font-semibold text-lg py-4 w-[360px]">
                      View
                    </button>
                    <button className="aspect-square bg-[#FAFAFA] items-center border flex justify-center rounded-xl w-[60px]">
                      <Image className="" alt="" src={'/3-dot.svg'} width={20} height={6} />
                    </button>
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