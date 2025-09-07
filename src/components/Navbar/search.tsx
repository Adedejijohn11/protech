import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { filteredProducts, search, setSearch } = useGlobalContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Optionally do something on search click
    setShowDropdown(search.length > 0);
  };

  const handleSelect = (id: number) => {
    navigate(`/product/${id}`);
    setSearch("");
    setShowDropdown(false);
  };

  return (
    <div>
      <div className=" flex w-[280px] md:w-[310px bg-white">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowDropdown(e.target.value.length > 0);
          }}
          className="w-[253px] md:w-[283px] h-[28px] rounded-none focus:outline-none ml-3 text-black bg-white"
        />
        <button
          onClick={handleSearch}
          className="text-center text-black border-none focus:outline-none bg-white pl-1"
        >
          <FiSearch />
        </button>
      </div>
      {/* Dropdown */}
      {showDropdown && filteredProducts.length > 0 && (
        <div className="absolute right-[0] md:right-[-90px] bg-white shadow-md w-full md:w-[500px]  mt-1 max-h-96 overflow-y-auto   rounded-lg ">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => handleSelect(p.id)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
            >
              <div className="flex gap-10">
                <div className="h-10 w-10 rounded-full hidden md:flex  overflow-hidden">
                  <img src={p.image[0]} alt="productImage" />
                </div>
                <span className="text-black">{p.productName}</span>
              </div>

              <span className="text-gray-500">${p.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
