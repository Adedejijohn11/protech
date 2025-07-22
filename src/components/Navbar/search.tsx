import React from "react";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
function Search() {
  return (
    <div className="absolute right-48 top-2 flex items-center bg-white w-[53%] px-2 ">
      <div className="text-gray-500 bg-slate-200 mr-2">
        <IoMdClose />
      </div>
      <input className="w-[220px] lg:w-[330px] rounded-none focus:outline-none text-black bg-white" />

      <div className=" text-black bg-slate-200 ">
        <FiSearch />
      </div>
    </div>
  );
}

export default Search;
