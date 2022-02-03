import React from "react";

const Promo = ({ image, title, info }) => {
  return (
    <div className="promo flex flex-col items-center text-center py-16 md:py-10 px-3 gap-5">
      <img src={image} alt={title} />
      <h3 className="text-2xl text-blue font-bold">{title}</h3>
      <p>{info}</p>
    </div>
  );
};

export default Promo;
