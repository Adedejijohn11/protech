import { FiAlignLeft } from "react-icons/fi";
// import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context/globalContext";
import Search from "./search";
// import MenuBar from "./menubar";

// import Loginbar from "./Login/login";

// type NavbarProps = {
//   uniToggle: (menu: string) => void;

// };

function Navbar() {
  const { cart, onToggle } = useGlobalContext();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className=" relative flex flex-col justify-between h-28 md:h-20 w-full md:w-full lg:w-full py-2  md:py-5 bg-secondary">
      <div className="flex flex-row  justify-between  ">
        <div className=" w-[30%] lg:w-[50%] flex flex-row items-center justify-start md:justify-start lg:justify-between  ml-[5%] md:ml-[5%] lg:ml-[40px] b ">
          <Link to="/" className="text-xl md:text-2xl lg:text-2xl">
            Protech
          </Link>

          <button className=" hidden md:hidden lg:flex items-center py-2 px-6 rounded-full border border-gray-500 ">
            <div className="text-2xl mr-3">
              <FiAlignLeft />
            </div>
            Catalog
          </button>

          <div className=" hidden md:hidden lg:flex">
            <Link to="/">Bestsellers</Link>
            <Link to="sales" className="mx-6">
              Sales
            </Link>

            <Link to="/newarrivals">NewArrivals</Link>
          </div>
        </div>
        <div className="  flex flex-row items-center justify-end w-[60%] lg:w-[50%]  mr-[5%] md:mr-[5%] lg:mr-[40px] ">
          {/* Search  */}
          <div className="absolute md:sticky bottom-2 right-[20px] sm:right-[50px] smd:right-[70px] md:right-[210px] z-50 ">
            <Search />
          </div>

          {/* Cart */}
          <button
            onClick={() => onToggle("cart_modal")}
            className=" flex flex-row items-center mr-0 md:mr-0 lg:mr-4 ml-4 focus:outline-none hover:text-hightlight"
          >
            <div className="relative mr-0 md:mr-2 lg:mr-2 text-xl">
              <FiShoppingCart />
              {totalItems > 0 && (
                <span className=" absolute top-[-7px] left-3 h-4 w-4 bg-red-700 rounded-full text-xs text-center">
                  {totalItems}
                </span>
              )}
            </div>
            <div className="hidden lg:flex">Cart</div>
          </button>

          {/* Login */}
          <button
            onClick={() => onToggle("login_menu")}
            // href="login"
            className="flex flex-row items-center mr-0 md:mr-4 lg:mr-4 ml-0 p-0  focus:outline-none"
          >
            <div className="mr-2 text-xl">
              <IoPerson />
            </div>
            <div className="hidden lg:flex">Login</div>
          </button>

          {/* Menuicon */}
          <div className="flex lg:hidden">
            <button
              className=" py-[2px] px-[4px]  text-2xl focus:outline-none"
              onClick={() => onToggle("mobile_menu")}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
