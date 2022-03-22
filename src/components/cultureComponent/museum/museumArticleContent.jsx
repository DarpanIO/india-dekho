import React from "react";
import museums from "./museums";
import MuseumArticle from "./MuseumArticle";
import MuseumCard from "./museumCard";
import {useLocation} from "react-router-dom";

function createArticle(card){
    return <MuseumArticle
      key={card.id}
      img={card.img}
      name={card.name}
      description={card.description}
    /> ;
    }

function MuseumArticleContent() {
    const { state } = useLocation();
    // console.log(state);
    return(
        <div>
        <div className="heading-center">
            {museums.map(createArticle)}
        </div>
        </div>
    );
}
export default MuseumArticleContent;