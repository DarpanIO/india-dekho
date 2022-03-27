import React from "react";
// import './culture.css';
import '../../cards.css'
import '../../App.css'
import SegmentCard from "../segment-item-cards";
import states from "./states";
import StatesArticle from "./statesArticle";
import { Routes, Route } from "react-router-dom";
function createCard(card){
//   console.log(card);
    return <SegmentCard 
      key={card.id}
      img={card.img}
      name={card.name}
      path={"/states/"+card.id}
      description={card.description}
    /> ;
    }
function StatesHome(){
return(
    <div>
    <div className="segment-heading">
       States
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {states.map(createCard)}
    </div>
</div>
);
}
function State(){
    return(
<Routes>
    <Route exact path="/" element={<StatesHome />} />
    <Route exact path=":id" element={<StatesArticle />} />
</Routes>
    );
}
export default State;