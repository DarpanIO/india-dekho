import React from "react";
// import './culture.css';
import '../../../cards.css'
import '../../../App.css'
import SegmentCard from "../../segment-item-cards";
import epics from "./epics";
import EpicsArticle from "./epicsArticle";
import { Routes, Route } from "react-router-dom";
function createCard(card){
//   console.log(card);
    return <SegmentCard 
      key={card.id}
      img={card.img}
      name={card.name}
      path={"/epics/"+card.id}
      description={card.description}
      buylink={card.buylink}
    /> ;
    }
function EpicHome(){
return(
    <div>
    <div className="segment-heading">
       Epics
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {epics.map(createCard)}
    </div>
</div>
);
}
function Epic(){
    return(
<Routes>
    <Route exact path="/" element={<EpicHome />} />
    <Route exact path=":id" element={<EpicsArticle />} />
</Routes>
    );
}
export default Epic;