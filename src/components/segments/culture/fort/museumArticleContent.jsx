import React from "react";
import museums from "./museums";
import SegmentArticle from "../../../segments-article";
import {useParams} from "react-router-dom";

function createArticle(card){
    return <SegmentArticle
      key={card.id}
      img={process.env.PUBLIC_URL + card.img}
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