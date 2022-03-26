import React from "react";
import "./footer.css";
function Footer(){
    return(
        <div className="footer">
           <div className="team-name">
           MADE BY TECH JUNKIES
           </div>
           <div className="Social-Media">
           Join us on 
           <a href="https://t.me/Indiadekhoofficial" target="_blank">
               <img src={process.env.PUBLIC_URL +"/Imgs/tele.png"}  target="_blank"/>
           </a>
           <a href="https://www.instagram.com/darpan.io/" target="_blank">
               <img src={process.env.PUBLIC_URL +"/Imgs/insta.png"}  target="_blank"/>
           </a>
           </div>
           <div className="Social-Media">
           Review us on 
           <a href="https://t.me/Tanu08_bot" target="_blank">
               <img src={process.env.PUBLIC_URL +"/Imgs/tele.png"}  />
           </a>
           </div>
        </div>
    );
}

export default Footer;