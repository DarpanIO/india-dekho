import React from "react";
import './nav.css';
import { Link } from "react-router-dom";
function Nav() {
    return(
<div class="nav">


<img src="#" class="logo" alt="My Country" />
    <ul type= 'none'>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/indian-states">Indian States</Link></li>
    <li><Link to="/about-us">About Us</Link></li>

    </ul>
    {/* <Outlet /> */}

    </div>
    );
}

export default Nav;