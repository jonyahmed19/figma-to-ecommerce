import React, { useEffect, useState } from "react";
import Title from "../../component/Title/Title";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
import GroupProduct from "../../component/GroupProduct/GroupProduct";

const FeaturedProducts = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="featured-products my-14 md:my-24">
      <div className="custom-container mx-auto">
        <Title label="Featured Products" />
        <div className="product-group grid grid-cols-2  md:flex gap-10 md:gap-12 mt-14 md:mt-20">
          <GroupProduct start={3} end={7} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
