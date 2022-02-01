import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../component/ProductImage/ProductImage";
import ProductTitle from "../../component/ProductTitle/ProductTitle";
import ProductLabel from "../../component/ProductLabel/ProductLabel";
import ProductPrice from "../../component/ProductPrice/ProductPrice";
import Button from "../../component/Button/Button";
import Review from "../../component/Review/Review";
const Product = ({ data }) => {
  const url = `/product/${data.id}`;

  return (
    <div className="product justify-evenly flex gap-2 flex-col flex-1" to={url}>
      <Link to={url}>
        <ProductImage src={data.image} />
      </Link>
      <div className="product-bottom flex gap-2 flex-col p-4 mt-3">
        <Link to={url}>
          <ProductTitle name={data.title} />
        </Link>
        <ProductLabel label={data.category} />
        <Review size={20} value={data?.rating?.rate} />
        <ProductPrice price={data.price} />
        <Button
          label={"Add to Cart"}
          cart={data}
          padding={"bg-pinish text-white py-3 px-4 my-4 "}
        />
      </div>
    </div>
  );
};

export default Product;
