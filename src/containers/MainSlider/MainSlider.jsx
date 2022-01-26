import React from "react";
import "./MainSlider.css";
import promotional from "../../assets/image/promotional.jpg";

const MainSlider = () => {
  return (
    <div
      className="mainslider bg-promtion"
      style={{ backgroundImage: `url(${promotional})` }}
    >
      <div className="custom-container mx-auto">
        <div className="flex justify-center flex-col mainslider-inner">
          <p className="text-pinish">Best Furniture For Your Castle....</p>
          <h2>New Furniture Collection Trends in 2020</h2>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
