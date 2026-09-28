import React from "react";
import { Outlet } from "react-router-dom";

const ProductTemplate = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <nav style={{ width: "30%", background: "yellow", minHeight: "100dvh" }}>
        this is my sideBar
      </nav>

      <main
        style={{
          width: "70%",
          background: "black",
          minHeight: "100dvh",
          color: "white",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default ProductTemplate;
