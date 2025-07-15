import { FiAlignCenter } from "react-icons/fi";
import ProductSection from "./productSection";
import { productData } from "./productData";

function MainSection() {
  return (
    <div className="h-full w-full  ">
      <div className=" flex flex-row items-center justify-between w-full ">
        <ul className="flex flex-row items-center w-auto h-full  p-4">
          <li className=" text-hightlight mr-12">
            <a className=" border-b-2 border-hightlight pb-2 " href="/">
              All Items
            </a>
          </li>
          <li className=" hover:text-hightlight duration-300 hover:scale-105 mr-12 ">
            <a href="/">Smartphones</a>
          </li>
          <li className=" hover:text-hightlight duration-300 hover:scale-105 mr-12 ">
            <a href="/">Kitchen</a>
          </li>
          <li className=" hover:text-hightlight duration-300 hover:scale-105  ">
            <a href="/">Game Console</a>
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
        <ProductSection data={productData} />
      </div>
    </div>
  );
}

export default MainSection;
