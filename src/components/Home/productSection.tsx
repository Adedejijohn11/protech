import ProductCard from "./productCard";
import type { cardData } from "../../types/global";

// the props for the component

type CardGridProps = {
  data: cardData[];
};

// const ProductSection: React.FC<CardGridProps> = ({ data }) => {
function ProductSection({ data }: CardGridProps) {
  return (
    <div className="h-full w-full grid md:grid-cols-3 grid-cols-2 ">
      {/* CARD-1 */}
      {data.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
}

export default ProductSection;
