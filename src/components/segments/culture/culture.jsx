import React from "react";
// import './culture.css';
import '../../../cards.css'
import '../../../App.css'
import SegmentCard from "../../segment-item-cards";
import cultures from "./cultures";
import Museum from "./museum/museum";
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
function CultureHome(){
return(
    <div>
    <div className="segment-heading">
       Our Culture
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {cultures.map(createCard)}
    </div>
</div>
);
}
function Culture(){
    return(
<Routes>
    <Route exact path="/" element={<CultureHome />} />
    <Route exact path="/museum/*" element={<Museum />} />
</Routes>
    );
}
export default Culture;