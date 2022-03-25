import React from "react";
import Heritage from "./segments/heritage/heritage";
import Story from "./segments/stories/story";
import Epic from "./segments/Epics/epic";
import Cuisine from "./segments/cuisines/cuisine";
import Slider from "./Slider/Slider";
import History from "./segments/historyOfIndia/history";
import Festival from "./segments/festivals/festival";
import Sector from "./segments/sectors/sector";
import PeaceTime from "./segments/peacetime-awards/peaceTime";
function Home() {
  return (
    <div>
      <Slider />
      <History />
      <Heritage />
      {/* <Story /> */}
      <Cuisine />
      <Festival />
      <Sector />
      <PeaceTime />
      <Epic />
    </div>
  );
}

export default Home;
