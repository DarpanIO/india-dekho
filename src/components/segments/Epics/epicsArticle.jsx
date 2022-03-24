import React from "react";
import epics from "./epics";
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

function EpicsArticle() {
    const { id } = useParams();
    var index =id-1;
    console.log(index);
    return(
        <div>
            {createArticle(epics[index])}
        </div>
    );
}
export default EpicsArticle;