import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import "./BottomHeader.css";

const BottomHeader = () => {
  return (
    <div className="bottomheader bg-white py-5">
      <div className="custom-container mx-auto">
        <div className="flex justify-between gap-20">
          <div className="logo flex flex-2">
            <Link to="/">
              <h1 className="font-sans">Hekto</h1>
            </Link>
          </div>
          <div className="menu flex flex-1 gap-10 items-center">
            <Link to="/">Home</Link>
            <Link className="flex items-baseline gap-1" to="/">
              <p>Shop</p> {<FaChevronDown />}
            </Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="search flex flex-2">
            <input type="text" className="" name="search" />
            <button type="button" className="py-4 px-5 bg-pinish">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;