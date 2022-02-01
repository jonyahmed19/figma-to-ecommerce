import React from "react";
import ReactStars from "react-rating-stars-component";

const Review = ({ size, value }) => {
  const reviewValue = {
    edit: false,
    size: size,
    value: value,
  };

  return <ReactStars {...reviewValue} />;
};

export default Review;
