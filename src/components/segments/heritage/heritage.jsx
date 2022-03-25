import React from "react";
import '../../../cards.css'
import '../../../App.css'
import SegmentCard from "../../segment-item-cards";
import heritages from "./heritages";
import Museum from "./museum/museum";
import Monument from "./monument/monument";
import Fort from "./forts/fort";
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
function HeritageHome(){
return(
    <div>
    <div className="segment-heading">
       Our Heritage
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {heritages.map(createCard)}
    </div>
</div>
);
}
function Heritage(){
    return(
<Routes>
    <Route exact path="/" element={<HeritageHome />} />
    <Route exact path="/museum/*" element={<Museum />} />
    <Route exact path="/monuments/*" element={<Monument />} />
    <Route exact path="/forts/*" element={<Fort />} />
</Routes>
    );
}
export default Heritage;