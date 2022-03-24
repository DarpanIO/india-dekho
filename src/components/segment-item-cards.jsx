import React from "react";
import "../cards.css";
import { Link } from "react-router-dom";
function SegmentCard(props) {
  return (
    <div className="long-card-item">
    {/* <BrowserRouter> */}


    <Link to={props.path}>
      <img src={props.img} alt={props.name}></img>
      <div>{props.name}</div>
      {props.description.__html.length>0 && <div>{props.description.__html.substr(1,20)+"..."}</div>}
      

    </Link>

    {/* </BrowserRouter> */}

    </div>
  );
}
export default SegmentCard;
