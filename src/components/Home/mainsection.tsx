import { FiAlignCenter } from "react-icons/fi";
import ProductSection from "./productSection";
import { productData } from "./productData";
import { useState } from "react";

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

  return (
    <div className="h-full w-full  ">
      <div className=" flex flex-row items-center justify-between w-full ">
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
        </ul>
        <button className=" hidden md:hidden lg:flex items-center py-2 px-4 rounded-full border border-gray-500 ">
          <div className="text-2xl mr-3">
            <FiAlignCenter />
          </div>
          Top Rated
        </button>
      </div>
      <div className="h-auto w-full flex pt-9 ">
        <ProductSection data={productData} />
      </div>
    </div>
  );
}

export default MainSection;
