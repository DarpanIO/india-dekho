import React from "react";
import { Routes,Route } from "react-router-dom";
import '../../../../content.css';
import SubSegmentCard from "../../../sub-segments-item-cards";
import regionalFestivals from "./regional-festivals";
import RegionalFestivalArticleContent from "./regionalFestivalArticleContent";
function createCard(card){
    console.log(card);
    return <SubSegmentCard 
      key={card.id}
      img={process.env.PUBLIC_URL + card.img}
      name={card.name}
      description={card.description}
      path={"/festivals/regional-festival/"+card.id}
    /> ;
    }
function RegionalFestivalPage() {
    return(

        <div className="heading-center">
    <div className="segment-heading">
            <h1>Regional Festivals</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
        {regionalFestivals.map(createCard)}

        </div>
        );
}
    function RegionalFestival() {
    return (


        <div className="heading-center">
            
            <Routes>
            <Route exact path="/" element={<RegionalFestivalPage />} />
            <Route exact path=":id" element={<RegionalFestivalArticleContent />} />
            </Routes>

        </div>
    );
}
export default RegionalFestival;