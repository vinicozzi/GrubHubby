import React from 'react';
import {useState, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import ProfileButton from "./ProfileButton"
import "./navbar.css"

function Navigation() {

const sessionUser = useSelector(state => state.session.user)

let sessionLinks

if (sessionUser) {

    sessionLinks = (<ProfileButton user={sessionUser} />
    )

} else {

    sessionLinks = (
        <div className="navbar">
        <NavLink to="/login" id="login">Log in</NavLink>
        <NavLink to="/signup" id="signup">Sign up</NavLink>
        <NavLink to="/restaurants" id="restaurant">Restaurants</NavLink>
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

