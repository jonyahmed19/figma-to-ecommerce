import React from "react";

const ProductImage = ({ src }) => {
  return (
    <div className="productimage flex justify-center mt-3">
      <img src={src} alt={src} />
    </div>
  );
};

export default ProductImage;
