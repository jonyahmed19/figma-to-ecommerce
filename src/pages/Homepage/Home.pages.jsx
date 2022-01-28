import React, { useEffect } from "react";
import TopHeader from "../../containers/TopHeader/TopHeader";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import MainSlider from "../../containers/MainSlider/MainSlider";
import FeaturedProducts from "../../containers/FeaturedProducts/FeaturedProducts";
import { loadProductsAsync } from "../../redux/directory/loadproducts.thunks";
import { useDispatch } from "react-redux";
const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsAsync());
  }, []);

  return (
    <div className="homepage">
      <TopHeader />
      <BottomHeader />
      <MainSlider />
      <FeaturedProducts />
    </div>
  );
};

export default Homepage;
