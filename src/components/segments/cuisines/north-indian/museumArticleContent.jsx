import React from "react";
import museums from "./northindiancusines";
import SegmentArticle from "../../../segments-article";
import {useParams} from "react-router-dom";

function createArticle(card){
    return <SegmentArticle
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
            {createArticle(museums[index])}
        </div>
    );
}
export default MuseumArticleContent;