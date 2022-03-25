import React from "react";
import Heritage from "./segments/heritage/heritage";
import Story from "./segments/stories/story";
import Epic from "./segments/Epics/epic";
import Cuisine from "./segments/cuisines/cuisine";
import Slider from "./Slider/Slider";
import History from "./segments/historyOfIndia/history";
function Home() {
  return (
    <div>
      <Slider />
      <History />
      <Heritage />
      {/* <Story /> */}
      <Cuisine />
      <Epic />
    </div>
  );
}

export default Home;
