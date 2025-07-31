import React from "react";
import SalesCard from "./SalesCards";
import { productData } from "../Home/productData";
import type { cardData } from "../../types/global";

const SalesSection = () => {
  const saleProducts: cardData[] = productData.filter(
    (product) => product.discount
  );
  return (
    <div className="h-full w-ful pt-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[10px] lg:gap-5 px-[12px] md:px-[6px] lg:px-0  ">
      {saleProducts.map((item) => (
        <SalesCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SalesSection;
