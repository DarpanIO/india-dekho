import React from "react";
import './nav.css';
import { Outlet, Link } from "react-router-dom";
function Nav() {
    return(
<div class="nav">
<img src="#" class="logo" alt="My Country" />
    <ul type= 'none'>
    {/* <li><Link to="/">Home</Link></li> */}
    <li><a href="#">Blog</a></li>
    <li><a href="#">About Us</a></li>
    </ul>
    {/* <Outlet /> */}
    </div>
    );
}

export default Nav;