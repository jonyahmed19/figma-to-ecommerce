import React from "react";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import Footer from "../../containers/Footer/Footer";
import TopHeader from "../../containers/TopHeader/TopHeader";
import NotFoundInner from "../../containers/NotFoundInner/NotFoundInner";
const Notfound = () => {
  return (
    <div className="notfound">
      <TopHeader />
      <BottomHeader />

      <div className="not-found-body">
        <NotFoundInner />
      </div>
      <Footer />
    </div>
  );
};

export default Notfound;
