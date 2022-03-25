import React from "react";
import Nav from "./components/navigation/nav.jsx";
import "./App.css";
import Home from "./components/home";
import Blog from "./components/Blog/Blog.jsx";
import IndianStates from "./components/indian-states/indian-states.jsx";
import AboutUs from "./components/about-us/about-us.jsx";
import Story from "./components/segments/stories/story.jsx";
import Heritage from "./components/segments/heritage/heritage.jsx";
import Cuisine from "./components/segments/cuisines/cuisine.jsx";
import Epic from "./components/segments/Epics/epic.jsx";
import History from "./components/segments/historyOfIndia/history.jsx";
import Festival from "./components/segments/festivals/festival.jsx";
import Sector from "./components/segments/sectors/sector.jsx";
import PeaceTime from "./components/segments/peacetime-awards/peaceTime.jsx";
import Footer from "./components/footer/footer.jsx";
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
        <Route exact path="/heritages/*" element={<Heritage />} />
        <Route exact path="/stories/*" element={<Story />} />
        <Route exact path="/cuisines/*" element={<Cuisine />} />
        <Route exact path="/epics/*" element={<Epic />} />
        <Route exact path="/histories/*" element={<History />} />
        <Route exact path="/festivals/*" element={<Festival />} />
        <Route exact path="/sectors/*" element={<Sector />} />
        <Route exact path="/peacetime-awards/*" element={<PeaceTime />} />

      </Routes>
    </div>
</div>
<Footer />
</div>
  );
}

export default App;
