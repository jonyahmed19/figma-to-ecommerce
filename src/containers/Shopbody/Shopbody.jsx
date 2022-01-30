import React from "react";
import Product from "../../containers/Product/Product";
import { useSelector } from "react-redux";

const Shopbody = () => {
  const {
    products: { data },
  } = useSelector((state) => state.products);

  return (
    <div className="shopbody">
      <div className="custom-container mx-auto">
        <div className="product-group mt-24">
          <h2 className="text-xl font-bold border-b pb-3 border-solid border-pinish">
            Men's Clothing
          </h2>
          <div className="flex gap-12 mt-8">
            {data?.slice(0, 4)?.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </div>
        <div className="product-group mt-24">
          <h2 className="text-xl font-bold border-b pb-3 border-solid border-pinish">
            Jewelary
          </h2>
          <div className="flex gap-12 mt-8">
            {data?.slice(4, 8)?.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </div>
        <div className="product-group mt-24">
          <h2 className="text-xl font-bold border-b pb-3 border-solid border-pinish">
            Electronics
          </h2>
          <div className="grid grid-cols-4 gap-12 mt-8">
            {data?.slice(8, 14)?.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </div>
        <div className="product-group mt-24">
          <h2 className="text-xl font-bold border-b pb-3 border-solid border-pinish">
            Women's Clothing
          </h2>
          <div className=" mt-8 grid gap-12 grid-cols-4">
            {data?.slice(14, 20)?.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopbody;
