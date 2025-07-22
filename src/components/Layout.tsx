import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import { useState } from "react";
import MenuBar from "./Navbar/menubar";
import Loginbar from "./Navbar/Login/login";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const uniToggle = (menu: string) => {
    if (menu === "mobile_menu") {
      setShowMenu(!showMenu);
      setShowLogin(false);
    } else {
      setShowLogin(!showLogin);
      setShowMenu(false);
    }
  };

  const closeAll = () => {
    setShowLogin(false);
    setShowMenu(false);
  };

  return (
    <div className="relative h-screen w-screen">
      <Navbar uniToggle={uniToggle} />
      {/* Menubar */}
      <div
        className={`absolute lg:hidden top-0 z-50  h-full w-full inset-0 bg-black/40 shadow-lg ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        <MenuBar close={closeAll} uniToggle={uniToggle} />
      </div>
      {/* Loginbar */}
      <div
        className={`absolute top-0 right-0 z-50 h-full w-full inset-0 bg-white/30 ${
          showLogin ? "flex" : "hidden"
        }`}
      >
        <Loginbar close={closeAll} />
      </div>

      <main className="h-[calc(100vh-80px)] w-full flex flex-col">
        <div className=" h-full w-full flex flex-row">
          <Outlet />
        </div>
      </main>
      {/* Footer */}
    </div>
  );
};

export default Layout;
