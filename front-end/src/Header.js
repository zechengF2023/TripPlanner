import "./Header.css"
import logo from "./IconFolder/Logo.png"
import {Link} from "react-router-dom"
import React from "react"
import ProfileIcon from "./IconFolder/Profile.png"
import SettingIcon from "./IconFolder/Setting.png"
import HelpIcon from "./IconFolder/Help.png"

const Header=()=>{
    return (
        <nav>
            <img class="image" alt="Logo" src={logo} />
            <Link to="/">Home</Link> 
            <Link to="/recommendedTrips">Recommended Trips</Link>        
            <Link to="/myTrips">My Trips</Link>
            <Link to="/about">About</Link>
            <a href="/profile"><img id="profileIcon" alt="profileIcon" src={ProfileIcon} /></a>
            <a href="/settings"><img id="settingIcon" alt="settingIcon" src={SettingIcon} /></a>
            <a href="/help"><img id="helpIcon" alt="helpIcon" src={HelpIcon} /></a>
            <div class="login_text">
                <Link to="/login" id="log in/out">log in/out</Link>
            </div>
        </nav>
    )
}

export default Header