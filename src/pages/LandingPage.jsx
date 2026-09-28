import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      this is the landing page
      <a href="/cart">Cart</a>
      <br />
      <Link to={"/ojami"}>product details</Link>
    </div>
  );
};

export default LandingPage;
