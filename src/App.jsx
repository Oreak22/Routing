import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";
import ProductTemplate from "./pages/ProductTemplate";
import Fashion from "./pages/Fashion";
import Sport from "./pages/Sport";

const App = () => {
  return (
    <>
      {/* <h1>this is mr David</h1> */}
      {/* <nav>navbar</nav> */}
      <Routes>
        {/* <Route path="/products" element={<Product />} /> */}
        <Route path="/ojami" element={<ProductDetails />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />

        {/* nested routing */}
        <Route path="/products" element={<ProductTemplate />}>
          <Route path="fashion" element={<Fashion />} />
          <Route index element={<Sport />} />
          <Route path="everyday" element={<Fashion />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
