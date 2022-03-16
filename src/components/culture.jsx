import React from "react";
import './culture.css';
import CultureCard from "./culturecard";
import cultures from "./cultures";
function createCard(card){
  
    return <CultureCard 
      key={card.id}
      img={card.img}
      name={card.name}
    /> ;
    }
function Culture(){
    return(
        <div>
            <div className="heading">
                Our Culture
            </div>
            <div className="culture-items">
                {cultures.map(createCard)}
            </div>
        </div>
    );
}
export default Culture;