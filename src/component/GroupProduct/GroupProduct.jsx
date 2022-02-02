import React from "react";
import Product from "../../containers/Product/Product";
import { useSelector } from "react-redux";
const GroupProduct = ({ start, end }) => {
  const {
    products: { data },
  } = useSelector((state) => state.products);

  return (
    <>
      {data?.slice(start, end)?.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </>
  );
};

export default GroupProduct;
