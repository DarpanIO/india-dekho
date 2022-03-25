import React from "react";
import { Routes,Route } from "react-router-dom";
import '../../../../content.css';
import SubSegmentCardAnchor from "../../../sub-segments-item-cards-anchor";
import SouthIndianCusines from "./southindiancusines";

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
function SouthPage() {
    return(

        <div className="heading-center">
    <div className="segment-heading">
            <h1>South Indian Cuisines</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
        {SouthIndianCusines.map(createCard)}

        </div>
        );
}
    function SouthIndian() {
    return (


        <div className="heading-center">
            
            <Routes>
            <Route exact path="/" element={<SouthPage />} />
            </Routes>
        </div>
    );
}
export default SouthIndian;