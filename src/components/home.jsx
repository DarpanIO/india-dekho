import React from "react";
import Culture from "./cultureComponent/culture";
import Slider from "./Slider/Slider";
function Home() {
  return (
    <div>
      <Slider />

      <Culture />
      {/* <Stories /> */}
    </div>
  );
}

export default Home;
