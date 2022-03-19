import React from "react";
import './stories.css';
import StoriesCard from "./storiescard";
import storiesitem from "./storiesitem";
function createCard(card){
  
    return <StoriesCard 
      key={card.id}
      img={card.img}
      name={card.name}
    /> ;
    }
function Stories(){
    return(
        <div>
            <div className="heading">
                Our Stories
                <img src={require('../res/divider.png')} />
            </div>
            <div className="stories-items">
                {storiesitem.map(createCard)}
            </div>
        </div>
    );
}
export default Stories;