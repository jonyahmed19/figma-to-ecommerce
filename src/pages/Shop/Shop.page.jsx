import React from "react";
import TopHeader from "../../containers/TopHeader/TopHeader";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import Footer from "../../containers/Footer/Footer";
import Shopbody from "../../containers/Shopbody/Shopbody";
import Breadcumb from "../../containers/Breadcumb/Breadcumb";
const Shoppage = () => {
  return (
    <div className="shoppage">
      <TopHeader />
      <BottomHeader />
      <Breadcumb label={"Shop"} />
      <Shopbody />
      <Footer />
    </div>
  );
};

export default Shoppage;
