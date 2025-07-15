import MainSection from "../components/Home/mainsection";
import SideBar from "../components/Home/sidebar";

function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="h-[100%] w-[20%] md:flex hidden bg-gray-00 p-[5px] overflow-y-scroll no-scrollbar">
        <SideBar />
      </div>
      <div className="h-[100%] w-[80%] overflow-y-scroll no-scrollbar p-[5px]">
        <MainSection />
      </div>
    </div>
  );
}

export default Home;
