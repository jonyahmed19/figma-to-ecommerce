import React from "react";

const IconText = ({ padding, label, cart }) => {
  const productCart = (e) => {
    console.log("cart id:", cart.id);

    e.preventDefault();
  };

  return (
    <button onClick={productCart} type="button" className={padding}>
      {label}
    </button>
  );
};

export default IconText;
