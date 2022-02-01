import React from "react";
import Button from "../../component/Button/Button";
import Review from "../../component/Review/Review";
const SingleBody = ({ single: { single } }) => {
  return (
    <div className="single-body my-32">
      <div className="custom-container mx-auto">
        <div className="product-top grid grid-cols-2 gap-2 p-12">
          <div className="product-image flex justify-center">
            <img src={single.image} alt={single.title} />
          </div>
          <div className="product-feature flex flex-col gap-5 mt-10">
            <h2 className="title text-2xl text-blue font-bold">
              {single.title}
            </h2>

            <div>
              <Review size="22" value={single?.rating?.rate} />

              <span>({single?.rating?.count})</span>
            </div>

            <p className="price text-xl font-bold text-blue">${single.price}</p>
            <p className="description">{single.description}</p>
            <Button
              label={"Add to Cart"}
              cart={single}
              padding={"bg-pinish text-white py-4 px-4 my-4 addtocart"}
            />
            <p className="category capitalize">
              Category: <span>{single.category}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="product-bottom mt-32 py-20 bg-singlebtm">
        <div className="custom-container mx-auto">
          <p className="text-lg">
            {single.description +
              single.description +
              single.description +
              single.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBody;
