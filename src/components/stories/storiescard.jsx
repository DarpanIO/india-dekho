import React from "react";
import "./stories.css";
import { Link } from "react-router-dom";
function StoriesCard(props) {
  return (
    <Link to={props.path}>

    <div className="stories-item">
      <img src={props.img}></img>
      <div className="stories-name">{props.name}</div>
    </div>
    </Link>
  );
}
export default StoriesCard;
