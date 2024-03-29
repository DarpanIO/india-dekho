import React from "react";
// import './culture.css';
import '../../../cards.css'
import '../../../App.css'
import SegmentCard from "../../segment-item-cards";
import cuisines from "./artStyles";
import NorthIndian from "./north-indian/north-indian";
import SouthIndian from "./south-indian/south-indian";
import { Routes, Route } from "react-router-dom";
function createCard(card){
//   console.log(card);
    return <SegmentCard 
      key={card.id}
      img={process.env.PUBLIC_URL + card.img}
      name={card.name}
      path={card.path}
      description={card.description}
    /> ;
    }
function CuisinesHome(){
return(
    <div>
    <div className="segment-heading">
       Indian Cuisines
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {cuisines.map(createCard)}
    </div>
</div>
);
}
function Cuisine(){
    return(
<Routes>
    <Route exact path="/" element={<CuisinesHome />} />
    <Route exact path="/north-indian/" element={<NorthIndian/>} />
    <Route exact path="/south-indian/" element={<SouthIndian/>} />
</Routes>
    );
}
export default Cuisine;