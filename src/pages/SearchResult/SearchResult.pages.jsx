import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import Footer from "../../containers/Footer/Footer";
import Product from "../../containers/Product/Product";
import TopHeader from "../../containers/TopHeader/TopHeader";
import { useNavigate } from "react-router-dom";
import Breadcumb from "../../containers/Breadcumb/Breadcumb";
const SearchResult = () => {
  const navigate = useNavigate();

  const {
    search: { search },
  } = useSelector((state) => state);
  let products = [];
  if (search.length > 4) {
    products = search.slice(0, 4);
  } else {
    products = search;
  }

  useEffect(() => {
    if (search.length < 1) {
      navigate("/");
    }
  }, []);

  return (
    <div className="search-result">
      <TopHeader />
      <BottomHeader />
      <Breadcumb label={"Search Result.."} />
      <div className="custom-container mx-auto">
        <div className="search-body grid grid-cols-4 gap-12 mt-24">
          {products?.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;
