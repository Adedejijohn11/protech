// import React from "react";
import { FiAlignLeft } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

type MenuProps = {
  showMenu: boolean;
  uniToggle: (menu: string) => void;
};

const MenuBar = ({ showMenu, uniToggle }: MenuProps) => {
  return (
    <AnimatePresence initial={false}>
      {showMenu && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => uniToggle("mobile_menu")}
            className={`absolute lg:hidden top-0 z-40 h-full w-full inset-0 bg-black/40 shadow-lg `}
          ></motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.8 }}
            className="absolute top-0 z-50 right-0 h-full w-[80%] flex items-center justify-center bg-black "
          >
            <div className="0 h-[95%]  w-[90%] flex flex-col ">
              <div className="flex items-center justify-between border-b-2 border-gray-500 pb-6 ">
                <h1 className="text-2xl ">Protech</h1>
                <button
                  className="p-[2px] mt-1 text-2xl bg-black focus:outline-none"
                  onClick={() => uniToggle("mobile_menu")}
                >
                  <IoMdClose />
                </button>
              </div>

              <div className=" flex flex-col mt-14 gap-5 ">
                <button
                  className="flex items-center py-2 px-6 rounded-full border border-gray-500 "
                  onClick={() => uniToggle("mobile_menu")}
                >
                  <div className="text-2xl mr-3">
                    <FiAlignLeft />
                  </div>
                  Catalog
                </button>
                <div className="flex flex-col gap-8 ml-2">
                  <Link to="/" onClick={() => uniToggle("mobile_menu")}>
                    Bestsellers
                  </Link>
                  <Link to="sales" onClick={() => uniToggle("mobile_menu")}>
                    Sales
                  </Link>
                  <Link
                    to="/newarrivals"
                    onClick={() => uniToggle("mobile_menu")}
                  >
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuBar;
