import React from "react";
import {
  FaStripe,
  FaNode,
  FaReact,
  FaSalesforce,
  FaGit,
  FaFigma,
  FaCss3,
} from "react-icons/fa";

const BrandArea = () => {
  return (
    <div className="brand-area">
      <div className="custom-container mx-auto">
        <div
          className="brand-inner flex flex-wrap justify-center 
        mt-12 md:mt-28
        gap-10 md:gap-12"
        >
          <FaFigma className="text-6xl text-gray hover:text-pinish" />
          <FaCss3 className="text-6xl text-gray hover:text-pinish" />
          <FaReact className="text-6xl text-gray hover:text-pinish" />
          <FaNode className="text-6xl text-gray hover:text-pinish" />
          <FaGit className="text-6xl text-gray hover:text-pinish" />
          <FaStripe className="text-6xl text-gray hover:text-pinish" />
          <FaSalesforce className="text-6xl text-gray hover:text-pinish" />
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
