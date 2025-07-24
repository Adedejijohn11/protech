import { GoHeartFill } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import { productData } from "../components/Home/productData";

function Product() {
  const { id } = useParams<{ id: string }>();

  const productId = Number(id);

  // Here you would typically fetch the product details using the id
  const productDetails = productData?.find(
    (product: any) => product.id === productId
  );

  console.log("Product Details:", productDetails);

  return (
    <div className="h-full w-full  flex flex-col p-[12px] ">
      <p>Home - Catalog - Boose - Qiet Place Speakers</p>
      <div className=" flex flex-col lg:flex-row h-auto lg:h-full w-full mt-[12px]">
        <div className="relative h-[500px] md:h-[700px] lg:h-full w-full lg:w-[60%] flex flex-col items-center justify-center  ">
          <div className="h-[60%] md:h-[60%] w-[72%] md:w-[60%] bg-gray-500"></div>
          <div className=" absolute top-[14px] left-[14px] py-[8px] px-[12px] text-black font-semibold rounded-xl bg-hightlight">
            Bestseller
          </div>
          <div className="  absolute top-[14px] right-[14px] text-xl p-[12px] rounded-full bg-secondary">
            <GoHeartFill />
          </div>
          <div className=" absolute top-[38%] left-[-35px] md:left-[-20px] flex flex-col items-center">
            <div className="p-[15px] rounded-full bg-blue-950" />
            <div className="p-[15px] rounded-full bg-white my-[8px]" />
            <div className="p-[15px] rounded-full bg-gray-700" />
            <button className="py-[4px] px-[12px] rounded-full -rotate-90 my-[45px]">
              DARK GRAY
            </button>
            <div className="p-[15px] rounded-full bg-gray-400" />
          </div>
          <div className=" absolute bottom-[14px] left-[14px] flex flex-row items-center gap-5 ">
            <div className=" h-[65px] w-[65px] rounded-xl border-2 border-hightlight bg-secondary"></div>
            <div className=" h-[65px] w-[65px] rounded-xl border border-hightlight/60 bg-secondary"></div>
            <div className=" h-[65px] w-[65px] rounded-xl border border-hightlight/60 bg-secondary"></div>
            <div className=" h-[65px] w-[65px] rounded-xl border border-hightlight/60 bg-secondary"></div>
          </div>
        </div>
        <div className=" h-auto lg:h-full w-full lg:w-[40%] flex flex-col items-start py-[30px] px-[5%] md:px-[20px] lg:px-[60px] overflow-hidden lg:overflow-y-scroll no-scrollbar  ">
          <p className="text-white/50">{productDetails?.make}</p>
          <h1 className="text-4xl font-semibold mt-[20px]">
            {productDetails?.productName}
          </h1>
          <div className=" w-full flex flex-row items-center justify-between mt-[20px] ">
            <p className="flex flex-row items-center gap-2 ">
              <div className="text-yellow-500">
                <FaStar />
              </div>
              {productDetails?.starRating.toFixed(1)}
            </p>
            <p className="flex flex-row items-center gap-2 ">
              {productDetails?.reviews} reviews{" "}
              <div>
                <IoIosArrowForward />
              </div>
            </p>
          </div>
          <p className="text-gray-500 mt-[30px]">
            {productDetails?.description}
          </p>
          <p className="text-4xl mt-[30px] ">{productDetails?.price}</p>
          <div className="flex flex-col mt-[30px]">
            <p>Key Features</p>
            <ul className="list-disc pl-5 ">
              {productDetails?.keyFeatures?.map(
                (feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                )
              )}
            </ul>
          </div>
          <div className=" w-full flex flex-col gap-5 mt-[50px]">
            <button className=" font-semibold text-primary rounded-full bg-hightlight hover:border-none">
              Buy Now
            </button>
            <button className="flex flex-row items-center justify-center font-semibold rounded-full gap-5">
              <div className="text-xl">
                <FiShoppingCart />
              </div>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
