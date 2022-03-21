import React from "react";
import '../../../content.css';
import MuseumCard from "./museumCard";
import museums from "./museums";

function createCard(card){
    return <MuseumCard 
      key={card.id}
      img={card.img}
      name={card.name}
      description={card.description}
      path={"/culture/museum/"+card.id}
    /> ;
    }

    function Museum() {
    return (
        <div>
        <div className="heading-center">
            <h1>Museums</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} />
            {museums.map(createCard)}
        </div>
        </div>
    );
}
export default Museum;