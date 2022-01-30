import React, { useEffect } from "react";
import TopHeader from "../../containers/TopHeader/TopHeader";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import MainSlider from "../../containers/MainSlider/MainSlider";
import FeaturedProducts from "../../containers/FeaturedProducts/FeaturedProducts";

import Footer from "../../containers/Footer/Footer";
const Homepage = () => {
  return (
    <div className="homepage">
      <TopHeader />
      <BottomHeader />
      <MainSlider />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Homepage;
