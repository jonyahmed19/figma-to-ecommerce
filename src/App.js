import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundries from "./component/ErrorBoundries/ErrorBoundries";

const Home = React.lazy(() => import("./pages/Homepage/Home.pages"));
const Cartpage = React.lazy(() => import("./pages/Cartpage/Cartpage"));
const Contactpage = React.lazy(() => import("./pages/Contact/Contact.pages"));
const Shoppage = React.lazy(() => import("./pages/Shop/Shop.page"));
const SearchResult = React.lazy(() =>
  import("./pages/SearchResult/SearchResult.pages")
);
const Notfound = React.lazy(() => import("./pages/Notfound/Notfound.pages"));
const SingleProduct = React.lazy(() =>
  import("./pages/SingleProduct/SingleProduct.pages")
);

function App() {
  return (
    <div className="App">
      <ErrorBoundries>
        <Suspense fallback={<div className="loader">Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/shop" element={<Shoppage />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </ErrorBoundries>
    </div>
  );
}

export default App;
