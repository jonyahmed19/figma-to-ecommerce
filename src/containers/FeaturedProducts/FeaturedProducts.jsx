import React, { useEffect, useState } from "react";
import Title from "../../component/Title/Title";
import Product from "../Product/Product";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const { products, isLoading, errorMessage } = useSelector(
    (state) => state.products
  );
  return (
    <div className="featured-products my-14 md:my-24">
      <div className="custom-container mx-auto">
        <Title label="Featured Products" />
        <div className="product-group grid grid-cols-2  md:flex gap-10 md:gap-12 mt-14 md:mt-20">
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
