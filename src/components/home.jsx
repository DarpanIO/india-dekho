import React from "react";
import Heritage from "./segments/heritage/heritage";
import Story from "./segments/stories/story";
import Epic from "./segments/Epics/epic";
import Cuisine from "./segments/cuisines/cuisine";
import Slider from "./Slider/Slider";
function Home() {
  return (
    <div>
      <Slider />

      <Heritage />
      <Story />
      <Cuisine />
      <Epic />
    </div>
  );
}

export default Home;
