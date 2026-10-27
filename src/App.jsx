import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";
import ProductTemplate from "./pages/ProductTemplate";
import Fashion from "./pages/Fashion";
import Sport from "./pages/Sport";
import PageNotFound from "./PageNotFound";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Home from "./Home";

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/productdetail/:username" element={<ProductDetails />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* nested routing */}
        {/* <Route path="/products" element={<ProductTemplate />}>
          <Route path="fashion" element={<Fashion />} />
          <Route index element={<Sport />} />
          <Route path="everyday" element={<Fashion />} />
        </Route> */}

        {/* wildcard */}
        {/* <Route path="*" element={<PageNotFound />} />
      </Routes> */}

      <Home/>
    </>
  );
};

export default App;
