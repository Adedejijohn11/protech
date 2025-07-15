import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { TbCurrencyDollar } from "react-icons/tb";
import type { cardData } from "../../types/global";

type cardProps = {
  item: cardData;
};

function ProductCard({ item }: cardProps) {
  return (
    <div className=" h-[480px] w-full flex flex-col items-center">
      {/*product-item */}
      <div className="h-auto w-full rounded-2xl bg-secondary p-2 ">
        <div className=" flex flex-col items-center">
          <div className="w-full h-10 flex items-center  justify-between ">
            <div>
              {item.discount ? (
                <span className="rounded-lg bg-hightlight text-black font-semibold text-sm p-2">
                  {item.discount}
                </span>
              ) : null}
            </div>
            <div className=" flex items-center justify-center h-[30px] w-[30px] rounded-full border-2 border-gray-600">
              <FaRegHeart />
            </div>
          </div>
          {/* img  */}
          <div className="bg-gray-300 w-[270px] h-[280px] flex justify-center mb-[45px] ">
            <img src="" alt="products" />
          </div>
        </div>
      </div>

      {/* Product-name and price */}
      <div className=" h-[110px]  w-full flex justify-center mt-2  ">
        <div className="w-[350px]  ">
          <div className="flex justify-between  ">
            <p>{item.title}</p>
            <p className="flex flex-row items-center justify-center ">
              <FaStar className="text-hightlight mr-1" />
              <span className="text-[18px]">{item.starRating.toFixed(1)}</span>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1">
              <p className="flex flex-row items-center text-2xl">
                {/* <TbCurrencyDollar  /> */}$
                <span>{item.price.toFixed(2)}</span>
              </p>
              {item.oldPrice && (
                <p className="flex flex-row items-center line-through ">
                  <TbCurrencyDollar />
                  <span>{item.oldPrice.toFixed(2)}</span>
                </p>
              )}
            </div>
            <div>
              <p>{item.productName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
