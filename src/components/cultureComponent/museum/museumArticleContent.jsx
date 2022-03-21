import React from "react";
import museums from "./museums";
import museumArticle from "./museumArticle";
function createArticle(item, index){
    return(
        <createArticle key={index} img={item.img} name={item.name} link={ '/culture/museums/${item.id}'} />
     ); }
function MuseumArticleContent() {
    return(
        <div>
            {museums.map(createArticle)}
        </div>
    );
}
export default MuseumArticleContent;