import React from "react";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import Breadcumb from "../../containers/Breadcumb/Breadcumb";
import Cartdata from "../../containers/Cartdata/Cartdata";
import Footer from "../../containers/Footer/Footer";
import TopHeader from "../../containers/TopHeader/TopHeader";

const Cartpage = () => {
  return (
    <div className="cartpage">
      <TopHeader />
      <BottomHeader />
      <Breadcumb label="Shopping Cart" />
      <Cartdata />
      <Footer />
    </div>
  );
};

export default Cartpage;
