import { FiAlignLeft } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Search from "./search";

// import Loginbar from "./Login/login";

type NavbarProps = {
  uniToggle: (menu: string) => void;
};

function Navbar({ uniToggle }: NavbarProps) {
  return (
    <nav className="flex flex-col justify-between  h-20 w-full md:w-full lg:w-full py-2  lg:py-5 bg-secondary  ">
      <div className="flex flex-row  justify-between">
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
            <a href="/bestsellers">Bestsellers</a>
            <a className="mx-6" href="/Sales">
              Sales
            </a>
            <a href="/newarrivals">NewArrivals</a>
          </div>
        </div>
        <div className="relative  flex flex-row items-center justify-end w-[60%] lg:w-[50%]  mr-[5%] md:mr-[5%] lg:mr-[40px]  ">
          <div className="   hidden  lg:flex items-center justify-center   ">
            <div>
              <Search />
            </div>
            <div className="mr-0 md:mr-4 lg:mr-4 ">
              <FiSearch />
            </div>
          </div>

          <a
            href="cart"
            className="flex flex-row items-center mr-0 md:mr-0 lg:mr-4 ml-4 "
          >
            <div className=" mr-0 md:mr-2 lg:mr-2 text-xl">
              <FiShoppingCart />
            </div>
            <div className="hidden lg:flex">Cart</div>
          </a>
          <button
            onClick={() => uniToggle("login_menu")}
            // href="login"
            className="flex flex-row items-center mr-0 md:mr-4 lg:mr-4 ml-4 p-0  focus:outline-none"
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
              onClick={() => uniToggle("mobile_menu")}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Search to display on small screen */}
      <div className="flex lg:hidden justify-center w-full items-center">
        <div className="flex items-center bg-white w-[80%] ">
          <div className=" text-gray-500 mx-2">
            <FiSearch />
          </div>
          <input className="w-full rounded-none focus:outline-none text-black bg-white " />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
