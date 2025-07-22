import { useState } from "react";
import MainSection from "../components/Home/mainsection";
import SideBar from "../components/Home/sidebar";
import { FaFilter } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex flex-row h-full w-full">
      <button
        className="absolute top-[56px] left-0 z-30 py-[6px] px-[12px] rounded-l-none rounded-r-md lg:hidden"
        onClick={toggleSidebar}
      >
        <FaFilter />
      </button>

      <div
        className={`z-40 absolute md:absolute lg:static h-[100%] w-[80%] lg:w-[20%] ${
          isSidebarOpen ? "flex" : "hidden"
        }  lg:flex bg-primary lg:bg-transparent p-[5px] overflow-y-scroll no-scrollbar`}
      >
        <button
          className="py-[6px] px-[12px] lg:hidden absolute top-[56px] right-0 z-40 rounded-l-md rounded-r-none"
          onClick={toggleSidebar}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
        <SideBar />
      </div>
      <div
        onClick={isSidebarOpen ? toggleSidebar : undefined}
        className="z-0 h-[100%] w-full md:w-full lg:w-[80%] overflow-y-scroll no-scrollbar p-[5px]"
      >
        <MainSection />
      </div>
    </div>
  );
}

export default Home;
