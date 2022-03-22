import React from "react";
import museums from "./museums";
import MuseumArticle from "./MuseumArticle";
import MuseumCard from "./museumCard";
import {useParams} from "react-router-dom";

function createArticle(card){
    return <MuseumArticle
      key={card.id}
      img={card.img}
      name={card.name}
      description={card.description}
    /> ;
    }

function MuseumArticleContent() {
    const { id } = useParams();
    console.log(id);
    // console.log(museums[id]);
    console.log(museums[id-1]);
    var index =id-1;

    return(
        <div>
        <div className="heading-center">
            {createArticle(museums[index])}
            {/* {museums.map(createArticle)} */}
        </div>
        </div>
    );
}
export default MuseumArticleContent;