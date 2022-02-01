import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cartpage from "./pages/Cartpage/Cartpage";
import Contactpage from "./pages/Contact/Contact.pages";
import Home from "./pages/Homepage/Home.pages";
import Shoppage from "./pages/Shop/Shop.page";
import SearchResult from "./pages/SearchResult/SearchResult.pages";
import Notfound from "./pages/Notfound/Notfound.pages";
import SingleProduct from "./pages/SingleProduct/SingleProduct.pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
