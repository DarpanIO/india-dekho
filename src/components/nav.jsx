import React from "react";
import './nav.css';
import { Link,BrowserRouter } from "react-router-dom";
function Nav() {
    return(
<div class="nav">


<img src="#" class="logo" alt="My Country" />
    <ul type= 'none'>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/museum">Blog</Link></li>
    <li><a href="#">About Us</a></li>
    </ul>
    {/* <Outlet /> */}

    </div>
    );
}

export default Nav;