import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/Layout";
import Product from "./pages/product";
import Sales from "./pages/sales";
import { GlobalContextProvider } from "./context/globalContext";
// import NewArrivals from "./pages/newarrivals";
import Cart from "./pages/cart";
import NewArrivals from "./pages/newarrivals";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales/product/:id" element={<Product />} />
            <Route path="/newarrivals" element={<NewArrivals />} />
            <Route path="/newarrivals/product/:id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
