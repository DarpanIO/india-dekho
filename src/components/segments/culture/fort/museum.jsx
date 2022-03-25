import React from "react";
import { Routes,Route } from "react-router-dom";
import '../../../../content.css';
import SubSegmentCard from "../../../sub-segments-item-cards";
import museums from "./museums";
import MuseumArticleContent from "./museumArticleContent";

function createCard(card){
    console.log(card);
    return <SubSegmentCard 
      key={card.id}
      img={process.env.PUBLIC_URL + card.img}
      name={card.name}
      description={card.description}
      path={"/culture/museum/"+card.id}
    /> ;
    }
function MuseumsPage() {
    return(

        <div className="heading-center">
    <div className="segment-heading">
            <h1>Museums</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
        {museums.map(createCard)}

        </div>
        );
}
    function Museum() {
    return (


        <div className="heading-center">
            
            <Routes>
            <Route exact path="/" element={<MuseumsPage />} />
            <Route exact path=":id" element={<MuseumArticleContent />} />
            </Routes>

        </div>
    );
}
export default Museum;