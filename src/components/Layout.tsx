import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <main className="h-[calc(100vh-80px)] w-full flex flex-col">
        <div className=" h-full w-full flex flex-row ">
          <Outlet />
        </div>
      </main>
      {/* Footer */}
    </div>
  );
};

export default Layout;
