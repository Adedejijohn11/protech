import { RiDeleteBinLine } from "react-icons/ri";
import type { ItemsData } from "../../types/global";
import { useGlobalContext } from "../../context/globalContext";

type cartProps = {
  item: ItemsData;
};

const CartModal = ({ item }: cartProps) => {
  const { updateQuantity, removeFromCart } = useGlobalContext();

  return (
    <div className="w-full">
      <div className="  flex flex-col justify-center items-center  ">
        <div className=" flex flex-col justify-center items-center  h-full w-[95%]   ">
          <div className=" flex flex-row justify-center h-[100px] p-2 gap-3 w-full bg-white border-2 border-gray-300">
            <div className="h-full w-[30%] bg-yellow-400 flex justify-center items-center">
              <img className="h-[110%] " src={item.image[0]} alt="productImg" />
            </div>
            <div className="h-full w-full flex flex-col justify-between ">
              <div className="flex justify-between ">
                <p>{item.productName}</p>
                <RiDeleteBinLine onClick={() => removeFromCart(item.id)} />
              </div>
              <div className="flex justify-between">
                <p>${(Number(item.price) * item.quantity).toFixed(2)}</p>
                <div className=" h-6 w-[30%] flex justify-center items-center border border-gray-500 rounded-md ">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="bg-transparent flex items-center h-5 w-[10px] hover:border-transparent focus:outline-none focus-visible:outline-none"
                  >
                    -
                  </button>
                  <span className="w-[40px] flex items-center justify-center border-l border-r border-gray-500">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="bg-transparent flex items-center justify-center  h-5 w-[20px] hover:border-transparent focus:outline-none focus-visible:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
