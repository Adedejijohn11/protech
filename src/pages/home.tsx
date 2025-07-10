import MainSection from "../components/Home/mainsection";
import SideBar from "../components/Home/sidebar";

function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="h-[100%] w-[20%] bg-gray-00 p-4">
        <SideBar />
      </div>
      <div className="h-[100%] w-[80%] bg-gray-00 p-4">
        <MainSection />
      </div>
    </div>
  );
}

export default Home;
