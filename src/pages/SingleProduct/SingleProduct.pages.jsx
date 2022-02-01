import React, { useEffect } from "react";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import Breadcumb from "../../containers/Breadcumb/Breadcumb";
import Footer from "../../containers/Footer/Footer";
import TopHeader from "../../containers/TopHeader/TopHeader";
import { useParams } from "react-router-dom";
import { singleFetch } from "../../redux/single/single.thunk";
import { useSelector, useDispatch } from "react-redux";
import SingleBody from "../../containers/SingleBody/SingleBody";
import NotFoundInner from "../../containers/NotFoundInner/NotFoundInner";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { single } = useSelector((state) => state);

  const { productId } = useParams();
  useEffect(() => {
    dispatch(singleFetch(productId));
  }, []);

  console.log("single", single);

  return (
    <div className="single-page">
      <TopHeader />
      <BottomHeader />
      <Breadcumb label={"Product Details"} />

      {!single.single ? (
        <NotFoundInner />
      ) : single.isLoading ? (
        <div className="loader">Loading</div>
      ) : (
        <SingleBody single={single} />
      )}

      <Footer />
    </div>
  );
};

export default SingleProduct;
