import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import MenuBar from "./Navbar/menubar";
import Loginbar from "./Auth/login";
import { Toaster } from "react-hot-toast";

import Cart from "../pages/cart";

const Layout = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* ✅ Toast notification renderer */}
      <Toaster position="top-center" />
      <Navbar />
      {/* MenuModal*/}
      <MenuBar />
      <Loginbar />
      <Cart />

      <main className="h-[calc(100vh-80px)] w-full flex flex-col">
        <div className=" h-full w-full flex flex-row">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
