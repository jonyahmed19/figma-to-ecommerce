import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./BottomHeader.css";
import { loadProductsAsync } from "../../redux/directory/loadproducts.thunks";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../component/SearchBar/SearchBar";
const BottomHeader = () => {
  const {
    products: { data },
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data) {
      dispatch(loadProductsAsync());
    }
  }, []);
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
            <Link className="flex items-baseline gap-1" to="/shop">
              <p>Shop</p>
            </Link>
            <Link to="/contact">Contact</Link>
          </div>

          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
