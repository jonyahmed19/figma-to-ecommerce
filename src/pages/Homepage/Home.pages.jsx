import React from "react";
import TopHeader from "../../containers/TopHeader/TopHeader";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import MainSlider from "../../containers/MainSlider/MainSlider";
const Homepage = () => {
  return (
    <div className="homepage">
      <TopHeader />
      <BottomHeader />
      <MainSlider />
    </div>
  );
};

export default Homepage;
