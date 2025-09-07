import ProductCard from "./productCard";
import type { cardData } from "../../types/global";

// the props for the component

type CardGridProps = {
  navFilter: string;
  products: cardData[];
  addToCart: (products: cardData) => void;
};

// const ProductSection: React.FC<CardGridProps> = ({ data }) => {
function ProductSection({ navFilter, addToCart, products }: CardGridProps) {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[10px] lg:gap-5 px-[12px] md:px-[6px] lg:px-0 bg-red-00 ">
      {navFilter === "allitems"
        ? products.map((item) => (
            <ProductCard key={item.id} item={item} addToCart={addToCart} />
          ))
        : products
            .filter((item) => item?.category?.toLowerCase() === navFilter)
            .map((item) => (
              <ProductCard key={item.id} item={item} addToCart={addToCart} />
            ))}
    </div>
  );
}

export default ProductSection;
