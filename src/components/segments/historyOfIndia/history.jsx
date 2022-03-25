import React from "react";
// import './culture.css';
import '../../../cards.css'
import '../../../App.css'
import SegmentCard from "../../segment-item-cards";
import histories from "./histories";
import HistoriesArticle from "./historiesArticle";
import { Routes, Route } from "react-router-dom";
function createCard(card){
//   console.log(card);
    return <SegmentCard 
      key={card.id}
      img={card.img}
      name={card.name}
      path={"/histories/"+card.id}
      description={card.description}
    /> ;
    }
function HistoryHome(){
return(
    <div>
    <div className="segment-heading">
       History of India
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {histories.map(createCard)}
    </div>
</div>
);
}
function History(){
    return(
<Routes>
    <Route exact path="/" element={<HistoryHome />} />
    <Route exact path=":id" element={<HistoriesArticle />} />
</Routes>
    );
}
export default History;