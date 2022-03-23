import React from "react";
import Nav from "./components/nav.jsx";
import "./App.css";
import Home from "./components/home";
import Culture from "./components/cultureComponent/culture"
import Museum from "./components/cultureComponent/museum/museum";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import {Redirect} from "react-router"
function App() {
  return (
    <div>
      <Nav />
      {/* {display && <Slider />} */}
      <div className="bodybg">
    <div className="body-container">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/culture/*" element={<Culture />} />
      </Routes>
    </div>
</div>
</div>
  );
}

export default App;
