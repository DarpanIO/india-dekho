import React from "react";


function MuseumArticle(props){
    // console.log(this.props);
    // console.log(props.key);
//  const {state}=useLocation();
//  console.log(state.item.id);

return(       
     <div className="wide-card">
    <div><img src={props.img}/></div>
    <div className="wide-card-text">
    <h3>{props.name}</h3>
    <h5>{props.description}</h5>
    </div>

</div>);
}

export default MuseumArticle;