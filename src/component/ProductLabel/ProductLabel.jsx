import React from "react";

const ProductLabel = ({ label }) => {
  return (
    <p className="product-category capitalize text-blue">Category: {label}</p>
  );
};

export default ProductLabel;
