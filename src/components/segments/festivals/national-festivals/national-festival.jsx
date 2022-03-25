import React from "react";
import { Routes,Route } from "react-router-dom";
import '../../../../content.css';
import SubSegmentCard from "../../../sub-segments-item-cards";
import nationalFestivals from "./national-festivals";
import NationalFestivalArticleContent from "./nationalFestivalArticleContent";

function createCard(card){
    console.log(card);
    return <SubSegmentCard 
      key={card.id}
      img={process.env.PUBLIC_URL + card.img}
      name={card.name}
      description={card.description}
      path={"/festivals/national-festival/"+card.id}
    /> ;
    }
function NationalFestivalPage() {
    return(

        <div className="heading-center">
    <div className="segment-heading">
            <h1>National Festivals</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
        {nationalFestivals.map(createCard)}

        </div>
        );
}
    function NationalFestival() {
    return (


        <div className="heading-center">
            
            <Routes>
            <Route exact path="/" element={<NationalFestivalPage />} />
            <Route exact path=":id" element={<NationalFestivalArticleContent />} />
            </Routes>

        </div>
    );
}
export default NationalFestival;