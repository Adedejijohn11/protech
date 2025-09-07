import { FiAlignCenter } from "react-icons/fi";
import ProductSection from "./productSection";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { productData } from "../data/productData";
import { useGlobalContext } from "../../context/globalContext";

const MainSection = () => {
  const { addToCart } = useGlobalContext();

  const [navFilter, setNavFilter] = useState("allitems");
  const [isVisible, setIsVisible] = useState(true);

  // const [cart, setCart] = useState<ItemsData[]>([]);

  const handleMakeChange = (newFilter: string) => {
    setNavFilter(newFilter);
    // Reset visibility to false before setting it to true || Trigger animation

    setIsVisible(false);
    // Wait for a moment before setting it to true to allow the exit animation to complete
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay as needed
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="h-full w-full ">
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
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ type: "tween", duration: 0.8 }}
          key={isVisible ? "visible" : "hidden"}
          className="h-auto w-full flex pt-9 "
        >
          <ProductSection
            navFilter={navFilter}
            products={productData}
            addToCart={addToCart}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainSection;
