import React from "react";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";

type SearchProps = {
  uniToggle: (menu: string) => void;
  showSearchInput: boolean;
};

function Search({ uniToggle, showSearchInput }: SearchProps) {
  return (
    <AnimatePresence initial={false}>
      <>
        {showSearchInput && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex items-center bg-white w- px-2 "
          >
            <div
              className="text-gray-500 bg-slate-200 mr-2"
              onClick={() => uniToggle("search_input")}
            >
              <IoMdClose />
            </div>
            <input className="w-[300px] rounded-none focus:outline-none text-black bg-white" />

            {/* <div className=" text-black bg-slate-200 ">
              <FiSearch />
            </div> */}
          </motion.div>
        )}
      </>
    </AnimatePresence>
  );
}

export default Search;
