import "../css/Header.css"
import logo from "../assets/Logo.png"
import {Link} from "react-router-dom"
import React from "react"
import ProfileIcon from "../assets/Profile.png"
// import SettingIcon from "../assets/Setting.png"
// import HelpIcon from "../assets/Help.png"

const Header=()=>{
    return (
        <div className="header">
            {/* Logo will send user back to homepage */}
            <div className="headerLeft">
                <Link to="/">
                    <img class="headerImage" alt="Logo" src={logo} />  
                </Link>    
                
            </div>
            
            <div className="headerRight">
                <Link to="/myTrips">Trips</Link>
                <a href="/profile"><img id="profileIcon" alt="profileIcon" src={ProfileIcon} /></a>
            </div>

            {/* I think this should be moved to the footer*/}
            {/* <Link to="/about">About</Link> */}
            
            {/* 
            <a href="/settings"><img id="settingIcon" alt="settingIcon" src={SettingIcon} /></a>
            <a href="/help"><img id="helpIcon" alt="helpIcon" src={HelpIcon} /></a>
            <div class="login_text">
                <Link to="/login" id="log in/out">log in/out</Link>
            </div> */}
        </div>
    )
}

export default Header