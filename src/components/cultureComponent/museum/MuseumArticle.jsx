import React from "react";
import '../../../content.css';

function MuseumArticle(props){
return(       
     <div>
    <h3>{props.name}</h3>
    <div><img src={props.img} className="main-content-image" alt={props.name}/></div>
    <div className="wide-card-text">
    <h5>{props.description}</h5>
    </div>

</div>);
}

export default MuseumArticle;