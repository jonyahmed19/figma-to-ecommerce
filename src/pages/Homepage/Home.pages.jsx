import React, { useEffect } from "react";
import TopHeader from "../../containers/TopHeader/TopHeader";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import MainSlider from "../../containers/MainSlider/MainSlider";
import FeaturedProducts from "../../containers/FeaturedProducts/FeaturedProducts";
import Footer from "../../containers/Footer/Footer";
import { useSelector } from "react-redux";
import HomeFilter from "../../containers/HomeFilter/HomeFilter";
import PromoArea from "../../containers/PromoArea/PromoArea";
import BrandArea from "../../containers/BrandArea/BrandArea";

const Homepage = () => {
  const { isLoading } = useSelector((state) => state.products);

  return (
    <div className="homepage">
      <TopHeader />
      <BottomHeader />
      <MainSlider />
      {isLoading ? (
        <div className="loader">Loading</div>
      ) : (
        <>
          <FeaturedProducts />
          <HomeFilter />
          <PromoArea />
          <BrandArea />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Homepage;
