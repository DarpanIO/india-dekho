import React from "react";
import "../../cards.css";
import { Link,BrowserRouter } from "react-router-dom";
function CultureCard(props) {
  return (
    <div className="long-card-item">
    {/* <BrowserRouter> */}


    <Link to={props.path}>
      <img src={props.img}></img>
      <div className="long-card-item">{props.name}</div>
    </Link>

    {/* </BrowserRouter> */}

    </div>
  );
}
export default CultureCard;
