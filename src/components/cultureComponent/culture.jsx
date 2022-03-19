import React from "react";
import './culture.css';
import CultureCard from "./culturecard";
import cultures from "./cultures";
import { Outlet, Link } from "react-router-dom";
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
                <img src={require('../res/divider.png')} />
            </div>
            <div className="culture-items">
                {cultures.map(createCard)}
            </div>
        </div>
    );
}
export default Culture;