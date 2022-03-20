import React from "react";
import "./culture.css";
import { Link,BrowserRouter } from "react-router-dom";
function CultureCard(props) {
  return (
    <div className="culture-item">

    <Link to="/museum">
      <img src={props.img}></img>
      <div className="culture-name">{props.name}</div>
    </Link>


    </div>
  );
}
export default CultureCard;
