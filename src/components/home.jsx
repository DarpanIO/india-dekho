import React from "react";
// import './body.css';
import Nav from "./nav";
import Culture from "./cultureComponent/culture";
import Stories from "./stories/stories";
import Slider from "./Slider/Slider"
function Home(){
    return (

       <div>
        {/* <Slider /> */}

        <Culture />
        <Stories /> 
    </div>

    );
}

export default Home;