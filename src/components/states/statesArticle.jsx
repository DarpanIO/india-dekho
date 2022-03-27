import React from "react";
import states from "./states";
import SegmentArticle from "../segments-article";
import {useParams} from "react-router-dom";

function createArticle(card){
    return <SegmentArticle
      key={card.id}
      img={card.img}
      name={card.name}
      description={card.description}
    /> ;
    }

function StatesArticle() {
    const { id } = useParams();
    var index =id-1;
    console.log(index);
    return(
        <div>
            {createArticle(states[index])}
        </div>
    );
}
export default StatesArticle;