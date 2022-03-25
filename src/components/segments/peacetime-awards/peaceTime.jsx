import React from "react";
// import './culture.css';
import '../../../cards.css'
import '../../../App.css'
import SegmentCard from "../../segment-item-cards";
import peaceTimeAwards from "./peaceTimeAwards";
import PeaceTimeArticle from "./peaceTimeArticle";
import { Routes, Route } from "react-router-dom";
function createCard(card){
//   console.log(card);
    return <SegmentCard 
      key={card.id}
      img={card.img}
      name={card.name}
      path={"/peacetime-awards/"+card.id}
      description={card.description}
    /> ;
    }
function PeaceTimeHome(){
return(
    <div>
    <div className="segment-heading">
       Sectors Of Indian Economy
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {peaceTimeAwards.map(createCard)}
    </div>
</div>
);
}
function PeaceTime(){
    return(
<Routes>
    <Route exact path="/" element={<PeaceTimeHome />} />
    <Route exact path=":id" element={<PeaceTimeArticle />} />
</Routes>
    );
}
export default PeaceTime;