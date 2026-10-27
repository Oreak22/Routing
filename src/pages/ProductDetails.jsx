import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // useParams();
  const { username } = useParams();
  return (
    <>
      <h1>this is a page for a {username} product</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
        deleniti dolore, ullam, laborum numquam magnam fuga quidem aspernatur
        nesciunt illum, recusandae aliquam quam. Saepe commodi atque sequi animi
        magnam pariatur.
      </p>
    </>
  );
};

export default ProductDetails;
