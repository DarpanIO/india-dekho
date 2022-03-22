import React from "react";
import Nav from "./components/nav.jsx";
import "./App.css";
import Home from "./components/home";
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
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/culture/museum/*" element={<Museum />} />
      </Routes>
    </div>
  );
}

export default App;
