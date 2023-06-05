import React from 'react';
import {useState, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import ProfileButton from "./ProfileButton"
import { useParams } from "react-router-dom";
import "./navbar.css"

function Navigation() {

const sessionUser = useSelector(state => state.session.user)
const {restaurantId} = useParams();
let sessionLinks

if (sessionUser) {

    sessionLinks = (<ProfileButton user={sessionUser} />
    )

} else {

    sessionLinks = (
        <div className="navbar">
        <NavLink to="/login" id="login">Log in</NavLink>
        <NavLink to="/signup" id="signup">Sign up</NavLink>
        {/* <NavLink to="/restaurants" id="restaurant">Restaurants</NavLink> */}
        {/* <NavLink to="/main" id="main">Main</NavLink> */}
        </div>
    )

}

return (

<ul className="navbar">
<li>
{/* <NavLink exact to="/" className="nav-link">Home</NavLink> */}
{sessionLinks}
</li>
</ul>
);
}

export default Navigation;

