import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/Layout";
import Product from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
