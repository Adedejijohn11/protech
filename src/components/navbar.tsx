import { FiAlignLeft } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";

function Navbar() {
  return (
    <nav className=" flex flex-row justify-between items-center h-20 w-full md:w-full lg:w-full bg-secondary">
      <div className=" w-[50%] flex flex-row items-center justify-start md:justify-start lg:justify-between  ml-[5%] md:ml-[5%] lg:ml-[40px] ">
        <h1 className="text-xl md:text-2xl lg:text-2xl">Protech</h1>

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
      <div className="flex flex-row items-center justify-end w-[50%] mr-[5%] md:mr-[5%] lg:mr-[40px]">
        <a href="search" className=" mr-4 ">
          <FiSearch />
        </a>
        <a
          href="cart"
          className="flex flex-row items-center mr-0 md:mr-0 lg:mr-4 ml-4 "
        >
          <div className="mr-2 text-xl">
            <FiShoppingCart />
          </div>
          Cart
        </a>
        <a
          href="login"
          className=" hidden md:hidden lg:flex flex-row items-center ml-4"
        >
          <div className="mr-2 text-xl">
            <IoPerson />
          </div>
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
