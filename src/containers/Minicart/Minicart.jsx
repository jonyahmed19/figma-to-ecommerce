import React from "react";
import { useSelector } from "react-redux";

const Minicart = () => {
  const { cartItems } = useSelector((state) => state.cartItems);
  let quantity = 0;
  return (
    <span
      className="
    mini-cart 
    bg-white 
    text-black
    ml-1
    mt-2
    "
    >
      {cartItems.length}
    </span>
  );
};

export default Minicart;
