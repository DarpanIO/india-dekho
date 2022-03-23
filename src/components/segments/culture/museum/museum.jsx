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
      img={card.img}
      name={card.name}
      description={card.description}
      path={"/culture/museum/"+card.id}
    /> ;
    }

    function Museum() {
    return (


        <div className="heading-center">

            
            <Routes>
            <Route exact path="/" element={museums.map(createCard)} />
            <Route exact path=":id" element={<MuseumArticleContent />} />
            </Routes>

        </div>
    );
}
export default Museum;