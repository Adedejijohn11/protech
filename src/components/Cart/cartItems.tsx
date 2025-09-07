import { IoMdClose } from "react-icons/io";
import CartModal from "./cartModal";
// import { useCart } from "./cartContext";
import { useGlobalContext } from "../../context/globalContext";

// type cartProps = {
//   showCart: boolean;
//   onToggle: (menu: string) => void;
// };

const CartItems = () => {
  // const { cart, clearCart } = useCart();

  const { cart, clearCart, showCart, onToggle } = useGlobalContext();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {showCart && (
        <div className="h-full w-[80%] md:w-[35%] bg-white text-black absolute top-0 z-50 right-0 overflow-x-hidden">
          <button
            className=" absolute top-1 left-3 p-[2px] mt-1 text-2xl bg-transparent focus:outline-none hover:border-transparent"
            onClick={() => onToggle("cart_modal")}
          >
            <IoMdClose />
          </button>

          <div className="text-center m-10 ">
            <h1 className="text-3xl">cart</h1>
            <a href="">Continue shopping</a>
          </div>
          {cart.length === 0 ? (
            <div className="text-center">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <CartModal key={item.id} item={item} />
              ))}
            </>
          )}

          <div className="w-full p-6 mt-3 ">
            <div className=" flex justify-end items-center ">
              <p className="text-2xl font-bold">
                Total: ${Number(totalPrice).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  {
                    cart.length === 0
                      ? alert(" Cart is empty!")
                      : alert("Thanks for shopping!");
                  }
                  clearCart();
                }}
                className="text-white w-[50%] flex items-center justify-center   bg-red-600 hover:border-transparent focus:outline-none focus-visible:outline-none"
              >
                Buy NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
