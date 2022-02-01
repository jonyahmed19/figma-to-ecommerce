import React from "react";
import "./MainSlider.css";
import promotional from "../../assets/image/promotional.jpg";
import Button from "../../component/Button/Button";
import { Link } from "react-router-dom";
const MainSlider = () => {
  return (
    <div
      className="mainslider bg-promtion"
      style={{ backgroundImage: `url(${promotional})` }}
    >
      <div className="custom-container mx-auto">
        <div className="flex items-start py-12 md:py-20 gap-5 md:gap-10 flex-col mainslider-inner">
          <p className="text-pinish">Best Furniture For Your Castle....</p>
          <h2 className=" text-3xl md:text-6xl font-bold leading-snug">
            New Furniture Collection
            <br /> Trends in 2022
          </h2>
          <p className="text-gray ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Magna in est adipiscing in phasellus non in justo.
          </p>
          <Link
            to="/shop"
            className="py-3 
          px-8
          hover:bg-black hover:text-white
          bg-pinish text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
