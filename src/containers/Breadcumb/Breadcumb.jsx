import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcumb = ({ label }) => {
  const location = useLocation();

  return (
    <div className="breadcumb bg-pinkbg py-10 md:py-24">
      <div className="custom-container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{label}</h2>
        <p className="text-md text-bold">
          <Link to="/">Home</Link>
          <span className="text-pinish capitalize">
            {" /" + location.pathname.substring(1)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Breadcumb;
