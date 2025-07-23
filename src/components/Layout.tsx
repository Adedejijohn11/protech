import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import { useState } from "react";
import MenuBar from "./Navbar/menubar";
import Loginbar from "./Auth/login";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const uniToggle = (menu: string) => {
    switch (menu) {
      case "mobile_menu":
        setShowMenu(!showMenu);
        setShowLogin(false);
        break;

      case "login_menu":
        setShowLogin(!showLogin);
        setShowMenu(false);
        break;

      case "search_input":
        setShowSearchInput(!showSearchInput);
        break;

      default:
        setShowMenu(false);
        setShowLogin(false);
        setShowSearchInput(false);
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Navbar uniToggle={uniToggle} showSearchInput={showSearchInput} />
      {/* MenuModal*/}
      <MenuBar showMenu={showMenu} uniToggle={uniToggle} />
      {/* LoginModal */}
      <Loginbar uniToggle={uniToggle} showLogin={showLogin} />
      {/* SearchModal */}

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
