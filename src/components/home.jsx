import React from "react";
import './body.css';
import Culture from "./cultureComponent/culture";
import Stories from "./stories/stories";
import Slider from "./Slider/Slider";
function Home(){
    return (
<div>
<Slider /> 
<div className="bodybg">
    <div className="body-container">
        <Culture />
        <Stories /> 
    </div>
    </div>
</div>


    );
}

export default Home;