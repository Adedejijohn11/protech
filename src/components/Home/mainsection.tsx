import { FiAlignCenter } from "react-icons/fi";
import ProductSection from "./productSection";
import { productData } from "./productData";
import { useState } from "react";
import { Link } from "react-router-dom";
// import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

function MainSection() {
  const [navFilter, setNavFilter] = useState("allitems");

  const handleMakeChange = (newFilter: string) => {
    setNavFilter(newFilter);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: "-30%", opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "30%", opacity: 0 }}
        transition={{ duration: 0.9 }}
        className="h-full w-full "
      >
        <div className=" flex flex-row items-center justify-between w-full ">
          <ul className="flex flex-row items-center w-auto h-full  p-4">
            <li
              className={` text-sm md:text-base hover:text-hightlight duration-300 hover:scale-105 ${
                navFilter === "allitems" ? "text-hightlight" : "text-white"
              } mr-[10px] md:mr-12`}
            >
              <Link
                onClick={() => handleMakeChange("allitems")}
                className={`${
                  navFilter === "allitems"
                    ? " border-b-2 border-hightlight pb-2"
                    : ""
                } `}
                to="/"
              >
                All Items
              </Link>
            </li>
            <li
              className={` text-sm md:text-base hover:text-hightlight duration-300 hover:scale-105 ${
                navFilter === "smartphones" ? "text-hightlight" : "text-white"
              }  mr-[10px] md:mr-12 `}
            >
              <Link
                className={`${
                  navFilter === "smartphones"
                    ? " border-b-2 border-hightlight pb-2"
                    : ""
                } `}
                onClick={() => handleMakeChange("smartphones")}
                to="/"
              >
                Smartphones
              </Link>
            </li>
            <li
              className={` text-sm md:text-base hover:text-hightlight duration-300 hover:scale-105  ${
                navFilter === "kitchen" ? "text-hightlight" : "text-white"
              } mr-[10px] md:mr-12 `}
            >
              <Link
                className={`${
                  navFilter === "kitchen"
                    ? " border-b-2 border-hightlight pb-2"
                    : ""
                } `}
                onClick={() => handleMakeChange("kitchen")}
                to="/"
              >
                Kitchen
              </Link>
            </li>
            <li
              className={` text-sm md:text-base hover:text-hightlight duration-300 hover:scale-105 ${
                navFilter === "gameconsole" ? "text-hightlight" : "text-white"
              }   `}
            >
              <Link
                className={`${
                  navFilter === "gameconsole"
                    ? " border-b-2 border-hightlight pb-2"
                    : ""
                } `}
                onClick={() => handleMakeChange("gameconsole")}
                to="/"
              >
                Game Console
              </Link>
            </li>
          </ul>
          <button className=" hidden md:hidden lg:flex items-center py-2 px-4 rounded-full border border-gray-500 ">
            <div className="text-2xl mr-3">
              <FiAlignCenter />
            </div>
            Top Rated
          </button>
        </div>
        <div className="h-auto w-full  flex pt-9 ">
          <ProductSection navFilter={navFilter} data={productData} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MainSection;
