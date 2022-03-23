import React from "react";
import storiesitem from "./storiesitem";
import MuseumArticle from "./MuseumArticle";
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
    var index =id-1;
    return(
        <div>
            {createArticle(storiesitem[index])}
        </div>
    );
}
export default MuseumArticleContent;