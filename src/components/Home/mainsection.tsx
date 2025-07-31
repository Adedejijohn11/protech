import { FiAlignCenter } from "react-icons/fi";
import ProductSection from "./productSection";
import { productData } from "./productData";
import { useState } from "react";
<<<<<<< HEAD

function MainSection() {
  const [active, setActive] = useState<number>(0);
  const List = [
    {
      id: 1,
      title: "All Items",
    },
    {
      id: 2,
      title: "Smartphones",
    },
    {
      id: 3,
      title: "Kitchen",
    },
    {
      id: 4,
      title: "Game Console",
    },
  ];
=======
import { Link } from "react-router-dom";

function MainSection() {
  const [navFilter, setNavFilter] = useState("allitems");

  const handleMakeChange = (newFilter: string) => {
    setNavFilter(newFilter);
  };
>>>>>>> dev

  return (
    <div className="h-full w-full  ">
      <div className=" flex flex-row items-center justify-between w-full ">
<<<<<<< HEAD
        <ul className="flex flex-row items-center w-auto h-full p-4 ">
          {List.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`text-sm md:text-base mr-[10px] md:mr-12  duration-200 ${
                active === index
                  ? "border-b-2 text-hightlight border-hightlight pb-1"
                  : ""
              }`}
            >
              {item.title}
            </li>
          ))}
=======
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
>>>>>>> dev
        </ul>
        <button className=" hidden md:hidden lg:flex items-center py-2 px-4 rounded-full border border-gray-500 ">
          <div className="text-2xl mr-3">
            <FiAlignCenter />
          </div>
          Top Rated
        </button>
      </div>
<<<<<<< HEAD
      <div className="h-auto w-full flex pt-9 ">
        <ProductSection data={productData} />
=======
      <div className="h-auto w-full  flex pt-9 ">
        <ProductSection navFilter={navFilter} data={productData} />
>>>>>>> dev
      </div>
    </div>
  );
}

export default MainSection;
