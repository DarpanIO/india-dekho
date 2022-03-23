import React from "react";
import { Routes,Route } from "react-router-dom";
import '../../../content.css';
import SegmentCard from "../../segments-item-cards";
import museums from "./museums";
import MuseumArticleContent from "./museumArticleContent";

function createCard(card){
    console.log(card);
    return <SegmentCard 
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
        <div className="segment-heading">
            <h1>Museums</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>

            
            <Routes>
            <Route exact path="/" element={museums.map(createCard)} />
            <Route exact path=":id" element={<MuseumArticleContent />} />
            </Routes>

        </div>
    );
}
export default Museum;