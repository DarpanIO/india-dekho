import React from "react";
import museums from "./museums";
import '../../../cards.css';
import { Link } from "react-router-dom";
function MuseumCard(props) {
    return (
        <div className="wide-card">
        <Link to={props.path}>
            <div><img src={props.img}/></div>
            <div className="wide-card-text">
            <h3>{props.name}</h3>
            <h5>{props.description}</h5>
            </div>
        </Link>

        </div>
    );
}

export default MuseumCard;