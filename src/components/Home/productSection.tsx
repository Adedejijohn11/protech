import ProductCard from "./productCard";
import type { cardData } from "../../types/global";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

// the props for the component

type CardGridProps = {
  data: cardData[];
  navFilter: string;
};

// const ProductSection: React.FC<CardGridProps> = ({ data }) => {
function ProductSection({ navFilter, data }: CardGridProps) {
  return (
    // <AnimatePresence mode="wait">
    <div
      // initial={{ y: "-30%", opacity: 1 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: "-120%", opacity: 0 }}
      // transition={{ duration: 0.8 }}
      className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[10px] lg:gap-5 px-[12px] md:px-[6px] lg:px-0 bg-red-00"
    >
      {/* CARD-1 */}
      {/* {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))} */}
      {navFilter === "allitems"
        ? data.map((item) => <ProductCard key={item.id} item={item} />)
        : data
            .filter((item) => item?.category?.toLowerCase() === navFilter)
            .map((item) => <ProductCard key={item.id} item={item} />)}
    </div>
    // </AnimatePresence>
  );
}

export default ProductSection;
