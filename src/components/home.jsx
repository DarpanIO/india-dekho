import React from "react";
import Culture from "./segments/culture/culture";
import Story from "./segments/stories/story";
import Epic from "./segments/Epics/epic";
import Cuisine from "./segments/cuisines/cuisine";
import Slider from "./Slider/Slider";
function Home() {
  return (
    <div>
      <Slider />

      <Culture />
      <Story />
      <Cuisine />
      <Epic />
    </div>
  );
}

export default Home;
