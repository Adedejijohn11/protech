import React from "react";
import { productData } from "../Home/productData";
// import { cardData } from '../../types/global'
import NewArrivalsCard from "./newArrivalsCard";

const NewArrivalsSection = () => {
  const newArrivals = productData.filter((product) => product.isNewArrival);
  return (
    <div className="h-full w-ful pt-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[10px] lg:gap-5 px-[12px] md:px-[6px] lg:px-0 bg-red-00 ">
      {newArrivals.map((item) => (
        <NewArrivalsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewArrivalsSection;
