import React from "react";
// import './culture.css';
import '../../cards.css'
import '../../App.css'
import CultureCard from "./culturecard";
import cultures from "./cultures";
import Museum from "./museum/museum";
import { Outlet, Link, Routes, Route } from "react-router-dom";
function createCard(card){
//   console.log(card);
    return <CultureCard 
      key={card.id}
      img={card.img}
      name={card.name}
      path={card.path}
    /> ;
    }
function CultureHome(){
return(
    <div>
    <div className="segment-heading">
       Our Culture
        <img src={require('../res/divider.png')} />
    </div>
    <div className="long-card-items">
        {cultures.map(createCard)}
    </div>
</div>
);
}
function Culture(){
    return(
<Routes>
    <Route exact path="/" element={<CultureHome />} />
    <Route exact path="/Museum/*" element={<Museum />} />
</Routes>
    );
}
export default Culture;