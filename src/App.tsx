import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/Layout";
import Product from "./pages/product";
import Sales from "./pages/sales";
import NewProducts from "./pages/newArrivals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales/product/:id" element={<Product />} />
          <Route path="/newarrivals" element={<NewProducts />} />
          <Route path="/newarrivals/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
