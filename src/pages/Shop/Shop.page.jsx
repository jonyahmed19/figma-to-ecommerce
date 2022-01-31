import React from "react";
import TopHeader from "../../containers/TopHeader/TopHeader";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import Footer from "../../containers/Footer/Footer";
import Shopbody from "../../containers/Shopbody/Shopbody";
import Breadcumb from "../../containers/Breadcumb/Breadcumb";
import { useSelector } from "react-redux";
const Shoppage = () => {
  const { isLoading } = useSelector((state) => state.products);

  return (
    <div className="shoppage">
      <TopHeader />
      <BottomHeader />
      <Breadcumb label={"Shop"} />
      {isLoading ? <div className="loader">Loading</div> : <Shopbody />}
      <Footer />
    </div>
  );
};

export default Shoppage;
