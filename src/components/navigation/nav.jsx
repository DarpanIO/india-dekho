import React from "react";
import './nav.css';
import { Link } from "react-router-dom";
function Nav() {
    return(
<div class="nav">

<div className="logo-container">
<img src={process.env.PUBLIC_URL + "/Imgs/logo.jpeg"} class="logo" alt="My Country" />
<div className="title">
#INDIA-DEKHO
</div>
</div>
    <ul type= 'none'>
    <li><Link to="/home">Home</Link></li>
    {/* <li><Link to="/blog">Blog</Link></li> */}
    <li><Link to="/indian-states">Indian States</Link></li>
    <li><Link to="/about-us">About Us</Link></li>
    <input type="text" placeholder="Explore India.."></input>

    </ul>
    {/* <Outlet /> */}

    </div>
    );
}

export default Nav;