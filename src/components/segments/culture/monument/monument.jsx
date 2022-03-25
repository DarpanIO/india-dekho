import React from "react";
import { Routes,Route } from "react-router-dom";
import '../../../../content.css';
import SubSegmentCard from "../../../sub-segments-item-cards";
import monuments from "./monuments";
import MonumentArticleContent from "./monumentsArticleContent";

function createCard(card){
    console.log(card);
    return <SubSegmentCard 
      key={card.id}
      img={process.env.PUBLIC_URL + card.img}
      name={card.name}
      description={card.description}
      path={"/culture/monuments/"+card.id}
    /> ;
    }
function MonumentsPage() {
    return(

        <div className="heading-center">
    <div className="segment-heading">
            <h1>Monuments</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
        {monuments.map(createCard)}

        </div>
        );
}
    function Monument() {
    return (


        <div className="heading-center">
            
            <Routes>
            <Route exact path="/" element={<MonumentsPage />} />
            <Route exact path=":id" element={<MonumentArticleContent />} />
            </Routes>

        </div>
    );
}
export default Monument;