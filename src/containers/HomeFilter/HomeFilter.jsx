import React, { useState } from "react";
import GroupProduct from "../../component/GroupProduct/GroupProduct";
import Title from "../../component/Title/Title";

const HomeFilter = () => {
  const [filter, setFilter] = useState("new");

  const filterHome = (e) => {
    setFilter(e);
  };

  const render = () => {
    if (filter === "feat") {
      return true;
    }
  };

  return (
    <>
      <div className="home-filter">
        <div className="custom-container mx-auto">
          <Title label="Latest Products" />
          <div className="filter-category mt-14 flex justify-center gap-14">
            <button
              onClick={() => filterHome("new")}
              className={filter === "new" ? "active" : ""}
              type="button"
            >
              New Arrival
            </button>

            <button
              onClick={() => filterHome("feat")}
              className={filter === "feat" ? "active" : ""}
              type="button"
            >
              Featured
            </button>
            <button
              onClick={() => filterHome("best")}
              className={filter === "best" ? "active" : ""}
              type="button"
            >
              Best Seller
            </button>
            <button
              onClick={() => filterHome("spec")}
              className={filter === "spec" ? "active" : ""}
              type="button"
            >
              Special Offer
            </button>
          </div>
        </div>
      </div>

      <div className="filter-product">
        <div className="custom-container mx-auto">
          <div className="md:grid-cols-4 grid grid-cols-2  gap-8 md:gap-12 mt-12">
            {filter === "new" ? <GroupProduct start={16} end={20} /> : ""}
            {filter === "feat" ? <GroupProduct start={0} end={5} /> : ""}
            {filter === "best" ? <GroupProduct start={7} end={12} /> : ""}
            {filter === "spec" ? <GroupProduct start={16} end={20} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFilter;
