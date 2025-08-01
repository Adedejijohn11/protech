import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { TbCurrencyDollar } from "react-icons/tb";
import type { cardData } from "../../types/global";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

type cardProps = {
  item: cardData;
};

function ProductCard({ item }: cardProps) {
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 },
      }}
      className=" h-[480px] w-full flex flex-col items-center"
    >
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
          <Link
            to={`product/${item.id}`}
            className="w-[270px] h-[280px] flex justify-center mb-[45px] "
          >
            <img
              className=" h-full w-full"
              src={item.image[0]}
              alt="products"
            />
          </Link>
        </div>
      </div>

      {/* Product-name and price */}
      <div className=" h-[110px]  w-full flex justify-center mt-2  ">
        <div className="w-[350px]  ">
          <div className="flex justify-between  ">
            <p>{item.make}</p>
            <p className="flex flex-row items-center justify-center ">
              <FaStar className="text-hightlight mr-1" />
              <span className="text-[18px]">{item.starRating.toFixed(1)}</span>
            </p>
          </div>
          <div className="flex flex-col ">
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
            <div className="flex flex-row justify-between items-center">
              <p>{item.productName}</p>
              <button className="h-[30px] w-auto flex items-center bg-red-500 hover:bg-red-700 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
