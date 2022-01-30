import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cartpage from "./pages/Cartpage/Cartpage";
import Contactpage from "./pages/Contact/Contact.pages";
import Home from "./pages/Homepage/Home.pages";
import Shoppage from "./pages/Shop/Shop.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/shop" element={<Shoppage />} />
      </Routes>
    </div>
  );
}

export default App;
