import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cartpage from "./pages/Cartpage/Cartpage";
import Contactpage from "./pages/Contact/Contact.pages";
import Home from "./pages/Homepage/Home.pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </div>
  );
}

export default App;
