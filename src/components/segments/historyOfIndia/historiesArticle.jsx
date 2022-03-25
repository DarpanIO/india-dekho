import React from "react";
import histories from "./histories";
import SegmentArticle from "../../segments-article";
import {useParams} from "react-router-dom";

function createArticle(card){
    return <SegmentArticle
      key={card.id}
      img={card.img}
      name={card.name}
      description={card.description}
    /> ;
    }

function HistoriesArticle() {
    const { id } = useParams();
    var index =id-1;
    console.log(index);
    return(
        <div>
            {createArticle(histories[index])}
        </div>
    );
}
export default HistoriesArticle;