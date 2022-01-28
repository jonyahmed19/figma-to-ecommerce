import React from "react";
import "./MainSlider.css";
import promotional from "../../assets/image/promotional.jpg";
import Button from "../../component/Button/Button";
const MainSlider = () => {
  return (
    <div
      className="mainslider bg-promtion"
      style={{ backgroundImage: `url(${promotional})` }}
    >
      <div className="custom-container mx-auto">
        <div className="flex items-start gap-10 flex-col mainslider-inner">
          <p className="text-pinish">Best Furniture For Your Castle....</p>
          <h2 className="text-6xl font-bold leading-snug">
            New Furniture Collection
            <br /> Trends in 2022
          </h2>
          <p className="text-gray ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Magna in est adipiscing in phasellus non in justo.
          </p>
          <Button padding="py-3 px-8 bg-pinish text-white" label="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
