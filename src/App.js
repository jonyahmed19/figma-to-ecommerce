import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cartpage from "./pages/Cartpage/Cartpage";

import Home from "./pages/Homepage/Home.pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;
