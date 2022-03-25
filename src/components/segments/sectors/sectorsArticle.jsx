import React from "react";
import sectors from "./sectors";
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

function SectorsArticle() {
    const { id } = useParams();
    var index =id-1;
    console.log(index);
    return(
        <div>
            {createArticle(sectors[index])}
        </div>
    );
}
export default SectorsArticle;