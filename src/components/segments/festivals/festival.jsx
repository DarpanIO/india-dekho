import React from "react";
import '../../../cards.css'
import '../../../App.css'
import SegmentCard from "../../segment-item-cards";
import heritages from "./festivals";
import festivals from "./festivals";
import NationalFestival from "./national-festivals/national-festival";
import RegionalFestival from "./regional-festivals/regional-festival";


import { Routes, Route } from "react-router-dom";
function createCard(card){
//   console.log(card);
    return <SegmentCard 
      key={card.id}
      img= {process.env.PUBLIC_URL + card.img}
      name={card.name}
      path={card.path}
      description={card.description}
    /> ;
    }
function FestivalHome(){
return(
    <div>
    <div className="segment-heading">
       Festivals
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {festivals.map(createCard)}
    </div>
</div>
);
}
function Festival(){
    return(
<Routes>
    <Route exact path="/" element={<FestivalHome />} />
    <Route exact path="/national-festival/*" element={<NationalFestival />} />
    <Route exact path="/regional-festival/*" element={<RegionalFestival />} />
</Routes>
    );
}
export default Festival;