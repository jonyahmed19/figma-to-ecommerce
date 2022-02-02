import React from "react";
import Product from "../../containers/Product/Product";
import GroupProduct from "../../component/GroupProduct/GroupProduct";

const Shopbody = () => {
  return (
    <div className="shopbody">
      <div className="custom-container mx-auto">
        <div className="product-group mt-14 md:mt-24">
          <h2 className="text-xl font-bold border-b pb-3 border-solid border-pinish">
            Men's Clothing
          </h2>
          <div className="md:flex grid grid-cols-2  gap-8 md:gap-12 mt-8">
            <GroupProduct start={0} end={4} />
          </div>
        </div>
        <div className="product-group mt-14 md:mt-24">
          <h2 className="text-xl font-bold border-b pb-3 border-solid border-pinish">
            Jewelary
          </h2>
          <div className="md:flex grid grid-cols-2  gap-8 md:gap-12 mt-8">
            <GroupProduct start={4} end={8} />
          </div>
        </div>
        <div className="product-group mt-14 md:mt-24">
          <h2 className="text-xl font-bold border-b pb-3 border-solid border-pinish">
            Electronics
          </h2>
          <div className="md:grid-cols-4 grid grid-cols-2  gap-8 md:gap-12 mt-8">
            <GroupProduct start={8} end={14} />
          </div>
        </div>
        <div className="product-group mt-14 md:mt-24">
          <h2 className="text-xl font-bold border-b pb-3 border-solid border-pinish">
            Women's Clothing
          </h2>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-8">
            <GroupProduct start={14} end={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopbody;
