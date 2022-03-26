import React from "react";
import '../content.css';

function SegmentArticle(props){
return(       
     <div>
    <div className="segment-heading">
            <h1>{props.name}</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
    <div className="main-content-image"><img src={props.img} alt={props.name}/></div>
    <div></div>
    <div className="wide-card-text">
    {/* <h5>{props.description}</h5> */}
    <div dangerouslySetInnerHTML={props.description} className="article-description"></div>
    </div>

</div>);
}

export default SegmentArticle;