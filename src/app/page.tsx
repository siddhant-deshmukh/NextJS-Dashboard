import Tabs from "@/components/Tabs";
import TopBar from "@/components/TopBar";
import AdvList from "@/components/AdvList";
import StoryList from "@/components/StoryList";
import ArticleList from "@/components/ArticleList";

export default function Home() {

  return (
    <div className="bg-[#F8FAFB] w-full min-h-screen ">
      <TopBar />
      <main className="pl-2 sm:px-0 sm:pl-7 md:pl-10 flex flex-col overflow-x-hidden ">
        <div className="mt-14">
          <h1 className="text-[#212121] text-2xl sm:text-4xl font-semibold">Hello Admin,</h1>
          <p className="text-[#A0A3BD] text-sm sm:text-lg mt-1 ">This is what we got you for today</p>
        </div>
        <div className="mt-10">
          <Tabs />
          <div className="mt-14">
            <ArticleList />
          </div>
          <div className="mt-14">
            <StoryList />
          </div>
          <div className="mt-14 mb-20">
            <AdvList />
          </div>
        </div>
      </main>
    </div>
  );
}
