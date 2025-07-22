// import React from "react";
import { FiAlignLeft } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

type MenuProps = {
  close: () => void;
  uniToggle: (menu: string) => void;
};

const MenuBar = ({ close, uniToggle }: MenuProps) => {
  return (
    <div className="absolute right-0 h-full w-[80%] flex items-center justify-center bg-black ">
      <div className="0 h-[95%]  w-[90%] flex flex-col ">
        <div className="flex items-center justify-between border-b-2 border-gray-500 pb-6 ">
          <h1 className="text-2xl ">Protech</h1>
          <button
            className="p-[2px] mt-1 text-2xl bg-black focus:outline-none"
            onClick={close}
          >
            <IoMdClose />
          </button>
        </div>

        <div className=" flex flex-col mt-14 gap-5 ">
          <button
            className="flex items-center py-2 px-6 rounded-full border border-gray-500 "
            onClick={close}
          >
            <div className="text-2xl mr-3">
              <FiAlignLeft />
            </div>
            Catalog
          </button>
          <div className="flex flex-col gap-8 ml-2">
            <Link to="/bestsellers" onClick={close}>
              Bestsellers
            </Link>
            <Link to="/SLinkles" onClick={close}>
              Sales
            </Link>
            <Link to="/newarrivals" onClick={close}>
              NewArrivals
            </Link>
            <Link
              to="/login"
              className="flex items-center"
              onClick={() => uniToggle("login_menu")}
            >
              <div className="mr-2 text-xl">
                <IoPerson />
              </div>

              <div>Login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
