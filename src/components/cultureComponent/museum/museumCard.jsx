import React from "react";
import museums from "./museums";
import '../../../cards.css';
function MuseumCard(props) {
    return (
        <div className="wide-card">
            <div><img src={props.img}/></div>
            <div className="wide-card-text">
            <h3>{props.name}</h3>
            <h5>{props.description}</h5>
            </div>

        </div>
    );
}

export default MuseumCard;