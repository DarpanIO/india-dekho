import React from "react";
import { Routes,Route } from "react-router-dom";
import '../../../content.css';
import '../../body.css';
import MuseumCard from "./museumCard";
import museums from "./museums";
import MuseumArticleContent from "./museumArticleContent";

function createCard(card){
    console.log(card);
    return <MuseumCard 
      key={card.id}
      img={card.img}
      name={card.name}
      description={card.description}
      path={"/culture/museum/"+card.id}
    /> ;
    }

    function Museum() {
    return (

<div className="bodybg">
    <div className="body-container">
        <div className="heading-center">
            <h1>Museums</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>

            
            <Routes>
            <Route exact path="/" element={museums.map(createCard)} />
            <Route exact path=":id" element={<MuseumArticleContent />} />
            </Routes>

        </div>
        </div>
        </div>
    );
}
export default Museum;