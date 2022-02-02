import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadProductsAsync } from "../../redux/directory/loadproducts.thunks";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../component/SearchBar/SearchBar";
import { slide as Menu } from "react-burger-menu";

const BottomHeader = () => {
  const browserWidth = window.innerWidth > 1023 ? true : false;
  const {
    products: { data },
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data) {
      dispatch(loadProductsAsync());
    }
  }, []);

  const links = (
    <>
      <Link to="/">Home</Link>
      <Link className="flex items-baseline gap-1" to="/shop">
        <p>Shop</p>
      </Link>
      <Link to="/contact">Contact</Link>
    </>
  );

  return (
    <div className="bottomheader bg-white py-5">
      <div className="custom-container mx-auto">
        <div className="grid grid-cols-1 md:flex justify-between gap-6 md:gap-20">
          <div className="logo order-1 justify-center md:justify-start flex flex-2">
            <Link to="/">
              <h1 className="font-sans">Hekto</h1>
            </Link>
          </div>
          <div className="menu flex order-2 md:order-2 flex-1 gap-10 items-center">
            {browserWidth ? (
              links
            ) : (
              <Menu noOverlay width={200}>
                {links}
              </Menu>
            )}
          </div>

          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
