import React from "react";
import "../cards.css";
import { Link,BrowserRouter } from "react-router-dom";
function SegmentCard(props) {
  return (
    <div className="long-card-item">
    {/* <BrowserRouter> */}


    <Link to={props.path}>
      <img src={props.img}></img>
      <div>{props.name}</div>
      {props.description.length>0 && <div>{props.description.substr(1,40)}</div>}
      

    </Link>

    {/* </BrowserRouter> */}

    </div>
  );
}
export default SegmentCard;
