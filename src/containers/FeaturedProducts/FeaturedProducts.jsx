import React, { useEffect, useState } from "react";
import Title from "../../component/Title/Title";
import Product from "../Product/Product";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const { products, isLoading, errorMessage } = useSelector(
    (state) => state.products
  );
  return (
    <div className="featured-products my-24">
      <div className="custom-container mx-auto">
        <Title label="Featured Products" />
        <div className="product-group flex gap-12 mt-20">
          {products?.data &&
            products?.data
              .slice(0, 4)
              .map((product) => <Product key={product.id} data={product} />)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
