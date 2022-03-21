import React from "react";
import museums from "./museums";
import MuseumArticle from "./MuseumArticle";
function createArticle(item, index){
    return(
        <MuseumArticle id={index} img={item.img} name={item.name} link={ '/culture/museums/${item.id}'} />
     ); }
function MuseumArticleContent() {
    return(
        <div>
            {museums.map(createArticle)}
        </div>
    );
}
export default MuseumArticleContent;