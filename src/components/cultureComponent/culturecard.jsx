import React from "react";
import "./culture.css";
import { Link,BrowserRouter } from "react-router-dom";
function CultureCard(props) {
  return (
    <div className="culture-item">
    {/* <BrowserRouter> */}


    <Link to={props.path}>
      <img src={props.img}></img>
      <div className="culture-name">{props.name}</div>
    </Link>

    {/* </BrowserRouter> */}

    </div>
  );
}
export default CultureCard;
