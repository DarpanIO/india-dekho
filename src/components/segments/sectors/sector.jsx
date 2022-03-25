import React from "react";
// import './culture.css';
import '../../../cards.css'
import '../../../App.css'
import SegmentCard from "../../segment-item-cards";
import sectors from "./sectors";
import SectorsArticle from "./sectorsArticle";
import { Routes, Route } from "react-router-dom";
function createCard(card){
//   console.log(card);
    return <SegmentCard 
      key={card.id}
      img={card.img}
      name={card.name}
      path={"/sectors/"+card.id}
      description={card.description}
    /> ;
    }
function SectorHome(){
return(
    <div>
    <div className="segment-heading">
       Sectors Of Indian Economy
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {sectors.map(createCard)}
    </div>
</div>
);
}
function Sector(){
    return(
<Routes>
    <Route exact path="/" element={<SectorHome />} />
    <Route exact path=":id" element={<SectorsArticle />} />
</Routes>
    );
}
export default Sector;