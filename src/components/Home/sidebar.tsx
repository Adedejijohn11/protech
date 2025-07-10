import CancelButton from "../UI/cancelbutton";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GoSearch } from "react-icons/go";

function SideBar() {
  return (
    <div className=" flex flex-col p-[20px] h-full w-full">
      <h1>Bestsellers</h1>
      <div className=" flex flex-row items-start mt-[20px]">
        <a className="text-gray-600" href="/home">
          Home
        </a>
        <div className="mx-2">-</div>
        <a className="" href="/bestsellers">
          BestSellers
        </a>
      </div>
      <div className="flex flex-col mt-[30px]">
        <div className=" flex flex-row items-center">
          <CancelButton />
          <a className=" " href="/bestsellers">
            Reset Filters
          </a>
        </div>
        <div className=" w-full flex flex-row flex-wrap gap-1 mt-[20px] ">
          <div className=" flex items-center justify-center h-[45px] px-[30px] rounded-full bg-secondary">
            <p className="mr-2">Apple</p> <CancelButton />
          </div>
          <div className=" flex items-center justify-center h-[45px] px-[30px] rounded-full bg-secondary">
            <p className="mr-2">SMEG</p> <CancelButton />
          </div>
          <div className=" flex items-center justify-center h-[45px] px-[20px] rounded-full bg-secondary">
            <p className="mr-2">Remez</p> <CancelButton />
          </div>
          <div className=" flex items-center justify-center h-[45px] px-[20px] rounded-full bg-secondary">
            <p className="mr-2">Home Appliances</p> <CancelButton />
          </div>
          <div className=" flex items-center justify-center h-[45px] px-[20px] rounded-full bg-secondary">
            <p className="mr-2">Kitchen Appliances</p> <CancelButton />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between mt-[30px] ">
        <p className="text-2xl font-semibold">PRICE</p>
        <div className=" flex items-center justify-center h-[30px] w-[30px] rounded-full border-2 border-gray-400">
          <IoIosArrowDown />
        </div>
      </div>
      <div className=" flex items-center justify-between mt-[30px] ">
        <p className="text-2xl font-semibold">BRAND</p>
        <div className=" flex items-center justify-center h-[30px] w-[30px] rounded-full border-2 border-gray-400">
          <IoIosArrowUp />
        </div>
      </div>
      <div className=" flex flex-col mt-[16px]">
        <div className=" flex flex-row items-center h-[40px] rounded-full bg-gray-800 overflow-hidden ">
          <div className="p-[12px]">
            <GoSearch />
          </div>
          <input
            className="h-full w-full focus:outline-none bg-transparent "
            type="text"
            placeholder="Search brands"
          />
        </div>
        <div className=" flex flex-col mt-[16px]">
          <div className=" flex flex-row items-center text-xl ">
            <input className="h-6 w-6 mr-[10px]" type="checkbox" />
            <p>Apple</p>
          </div>
          <div className=" flex flex-row items-center text-xl mt-3">
            <input className="h-6 w-6 mr-[10px]" type="checkbox" />
            <p>LG</p>
          </div>
          <div className=" flex flex-row items-center text-xl mt-3">
            <input className="h-6 w-6 mr-[10px]" type="checkbox" />
            <p>Kitchen Aid</p>
          </div>
          <div className=" flex flex-row items-center text-xl mt-3">
            <input className="h-6 w-6 mr-[10px]" type="checkbox" />
            <p>SamSung</p>
          </div>
          <div className=" flex flex-row items-center text-xl mt-3 ">
            <input className="h-6 w-6 mr-[10px]" type="checkbox" />
            <p>Sony</p>
          </div>
          <div className=" flex flex-row items-center text-xl mt-3">
            <input className="h-6 w-6 mr-[10px]" type="checkbox" />
            <p>Remez</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
