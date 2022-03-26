import React from "react";
import "../../content.css";
function AboutUs(){
    return(
        <>
            
            <div>
    <div className="segment-heading">
            <h1>About Us</h1>
            <img src={process.env.PUBLIC_URL + `/Imgs/divider.png`} alt=""/>
        </div>
    <div className="wide-card-text">
    {/* <h5>{props.description}</h5> */}
    <div  className="article-description">India Dekho offers comprehensive information related to cultural heritage, ancient monuments, literary arts, visual arts , cuisine , festivals , indian epics and much more. Indian culture has been influenced by several foreign cultures throughout its history.</div>
    </div>

</div>
        </>
    );
}

export default AboutUs ;