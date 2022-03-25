import React from "react";
import '../cards.css';
import { Link } from "react-router-dom";
function SubSegmentCard(props) {
    return (
        <div className="wide-card">
        <Link to={props.path} target={props.target} >
            <div><img src={props.img} alt={props.name} /></div>
            <div className="wide-card-text">
            <h3>{props.name}</h3>
            {props.description.__html.length>0 && <h5>{props.description.__html.substr(0,50)+"..."}</h5>}
            </div>
        </Link>

        </div>
    );
}

export default SubSegmentCard;