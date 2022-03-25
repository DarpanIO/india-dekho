import React from "react";
import forts from "./forts";
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

function FortsArticleContent() {
    const { id } = useParams();
    var index =id-1;
    return(
        <div>
            {createArticle(forts[index])}
        </div>
    );
}
export default FortsArticleContent;