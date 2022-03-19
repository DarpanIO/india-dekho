import React from "react";
import "./stories.css";
function StoriesCard(props) {
  return (
    <div className="stories-item">
      <img src={props.img}></img>
      <div className="stories-name">{props.name}</div>
    </div>
  );
}
export default StoriesCard;
