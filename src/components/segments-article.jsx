import React from "react";
import '../content.css';

function SegmentArticle(props){
return(       
     <div>
    <div className="segment-heading">
            <h1>{props.name}</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
    <div><img src={props.img} className="main-content-image" alt={props.name}/></div>
    <div className="wide-card-text">
    <h5>{props.description}</h5>
    </div>

</div>);
}

export default SegmentArticle;