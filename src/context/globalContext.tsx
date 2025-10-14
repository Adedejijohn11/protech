import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { toast } from "react-hot-toast";
import type { cardData, ItemsData } from "../types/global";
import { productData as rawProductData } from "../components/data/productData";

type GlobalContexType = {
  cart: ItemsData[];
  productData: ItemsData[];
  filteredProducts: ItemsData[];
  addToCart: (item: cardData) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, amount: number) => void;
  clearCart: () => void;
  search: string;
  setSearch: (value: string) => void;
  showMenu: boolean;
  showLogin: boolean;
  showCart: boolean;
  onToggle: (menu: string) => void;
  filter: ItemsData[];
};

const GlobalContext = createContext<GlobalContexType | null>(null);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cart, setCart] = useState<ItemsData[]>([]);
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  // const [filter , setfilter] = useState("");

  const onToggle = (menu: string) => {
    switch (menu) {
      case "mobile_menu":
        setShowMenu((prev) => !prev);
        setShowLogin(false);
        setShowCart(false);
        break;

      case "login_menu":
        setShowLogin((prev) => !prev);
        setShowMenu(false);
        setShowCart(false);
        break;

      case "cart_modal":
        setShowCart((prev) => !prev);
        setShowMenu(false);
        setShowLogin(false);
        break;

      default:
        setShowMenu(false);
        setShowLogin(false);
        setShowCart(false);
    }
  };

  // Map raw cardData to ItemsData (add quantity)
  const productData: ItemsData[] = rawProductData.map((item: cardData) => ({
    ...item,
    quantity: 0,
  }));

  // Filtered products based on search
  const filteredProducts = productData.filter((p) => {
    const searchLower = search.toLowerCase();

    return (
      p.productName.toLowerCase().includes(searchLower) ||
      p.make.toLowerCase().includes(searchLower) ||
      p.category.toLowerCase().includes(searchLower)
    );
  });

  // Filtered products
  const filter = productData.filter((p) => p.make === "APPLE");

  const addToCart = (item: cardData) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === item.id);
      if (exist) {
        toast.error("Item already in cart", {
          duration: 800,
          position: "top-center",
        });
        return prev; // Don't change the cart
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) =>
    setCart((prev) => prev.filter((p) => p.id !== id));

  const updateQuantity = (id: number, amount: number) =>
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + amount) } : p
      )
    );

  const clearCart = () => setCart([]);
  return (
    <GlobalContext.Provider
      value={{
        showMenu,
        showLogin,
        showCart,
        onToggle,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        filteredProducts,
        filter,
        search,
        setSearch,
        productData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error(
      "useGlobalContext must be used within GlobalContextProvider"
    );
  return context;
};
