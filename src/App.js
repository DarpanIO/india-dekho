import React from "react";
import Nav from "./components/navigation/nav.jsx";
import "./App.css";
import Home from "./components/home";
import Blog from "./components/Blog/Blog.jsx";
import IndianStates from "./components/indian-states/indian-states.jsx";
import AboutUs from "./components/about-us/about-us.jsx";
import Story from "./components/segments/stories/story.jsx";
import Culture from "./components/segments/culture/culture.jsx";
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
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/indian-states" element={<IndianStates />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/culture/*" element={<Culture />} />
        <Route exact path="/stories/*" element={<Story />} />
      </Routes>
    </div>
</div>
</div>
  );
}

export default App;
