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
      {props.description.__html.length>0 && <div>{props.description.__html.substr(0,20)+"..."}</div>}

    </Link>
      {props.buylink && <a href={props.buylink} target="_blank">Buy Now</a>}

    {/* </BrowserRouter> */}

    </div>
  );
}
export default SegmentCard;
