import React from "react";
import { Routes,Route } from "react-router-dom";
import '../../../../content.css';
import SubSegmentCardAnchor from "../../../sub-segments-item-cards-anchor";
import WestIndianCusines from "./westindiancusines";

function createCard(card){
    console.log(card);
    return <SubSegmentCardAnchor 
      key={card.id}
      img={process.env.PUBLIC_URL + card.img}
      name={card.name}
      description={card.description}
      path={card.path}
      target="_blank"
    /> ;
    }
function WestPage() {
    return(

        <div className="heading-center">
    <div className="segment-heading">
            <h1>West Indian Cuisines</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
        {WestIndianCusines.map(createCard)}

        </div>
        );
}
    function WestIndian() {
    return (


        <div className="heading-center">
            
            <Routes>
            <Route exact path="/" element={<WestPage />} />
            {/* <Route exact path=":id" element={<MuseumArticleContent />} /> */}
            </Routes>

        </div>
    );
}
export default WestIndian;