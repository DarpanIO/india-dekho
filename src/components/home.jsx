import React from "react";
import Culture from "./segments/culture/culture";
import Story from "./segments/stories/story";
import Slider from "./Slider/Slider";
function Home() {
  return (
    <div>
      <Slider />

      <Culture />
      <Story />
    </div>
  );
}

export default Home;
