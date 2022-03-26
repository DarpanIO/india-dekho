import React from "react";
// import './culture.css';
import '../../../cards.css'
import '../../../App.css'
import SegmentCard from "../../segment-item-cards";
import stories from "./stories";
import StoriesArticle from "./storiesArticle";
import { Routes, Route } from "react-router-dom";
function createCard(card){
//   console.log(card);
    return <SegmentCard 
      key={card.id}
      img={card.img}
      name={card.name}
      path={"/stories/"+card.id}
      description={card.description}
    /> ;
    }
function StoryHome(){
return(
    <div>
    <div className="segment-heading">
       Our Stories
        <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
    </div>
    <div className="long-card-items">
        {stories.map(createCard)}
    </div>
</div>
);
}
function Story(){
    return(
<Routes>
    <Route exact path="/" element={<StoryHome />} />
    <Route exact path=":id" element={<StoriesArticle />} />
</Routes>
    );
}
export default Story;