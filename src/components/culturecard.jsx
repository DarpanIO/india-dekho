import React from "react";
import "./culture.css";
function CultureCard(props) {
  return (
    <div className="culture-item">
      <img src={props.img}></img>
      <div className="culture-name">{props.name}</div>
    </div>
  );
}
export default CultureCard;
