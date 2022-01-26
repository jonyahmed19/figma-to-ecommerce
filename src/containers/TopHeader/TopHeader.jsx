import React from "react";
import "./Topheader.css";

import {
  FaRegEnvelope,
  FaPhoneVolume,
  FaChevronDown,
  FaRegHeart,
  FaRegUser,
  FaShoppingBasket,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="topheader bg-voilate py-4">
      <div className="custom-container mx-auto">
        <div className="flex">
          <div className="flex-1 flex gap-5 items-center">
            <p className="flex items-center gap-2">
              <FaRegEnvelope />
              example@hotmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneVolume />
              (12345)67890
            </p>
          </div>
          <div className="flex-1 flex gap-5 items-center justify-end">
            <p className="flex items-center gap-2">
              English
              <FaChevronDown />
            </p>
            <p className="flex items-center gap-2">
              USD
              <FaChevronDown />
            </p>
            <p className="flex items-center gap-2">
              Login
              <FaRegUser />
            </p>
            <p className="flex items-center gap-2">
              Wishlist
              <FaRegHeart />
            </p>
            <p>
              <FaShoppingBasket />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
