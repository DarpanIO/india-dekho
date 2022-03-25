import React from "react";
import { Routes,Route } from "react-router-dom";
import '../../../../content.css';
import SubSegmentCard from "../../../sub-segments-item-cards";
import forts from "./forts";
import FortsArticleContent from "./fortsArticleContent";

function createCard(card){
    console.log(card);
    return <SubSegmentCard 
      key={card.id}
      img={process.env.PUBLIC_URL + card.img}
      name={card.name}
      description={card.description}
      path={"/heritages/forts/"+card.id}
    /> ;
    }
function FortsPage() {
    return(

        <div className="heading-center">
    <div className="segment-heading">
            <h1>Monuments</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
        {forts.map(createCard)}

        </div>
        );
}
    function Fort() {
    return (


        <div className="heading-center">
            
            <Routes>
            <Route exact path="/" element={<FortsPage />} />
            <Route exact path=":id" element={<FortsArticleContent />} />
            </Routes>

        </div>
    );
}
export default Fort;