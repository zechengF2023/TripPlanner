import "../css/About.css";
import React from "react"
import Footer from "../components/Footer.js"
import Header from "../components/Header"
import logo from "../assets/logo_2.png"
const About=()=>{
    return(
        <div>
            <Header />
            <div className='aboutContent'>
                <div className="aboutTitle">About Us</div>
                <div className="aboutBody">The inspiration of this project arises from the fact that it's often time-consuming for people to plan trips themselves. To make an interesting and memorable trip, one would have to do vast research on local hotels, tourist attractions , restaurants, etc. With the goal of exempting you from such trouble, the Trip Planner app aims to generate trips based on your preferences, saving your time while catering to your needs.</div>
                <div className="aboutEnding">
                    Wish you a pleasant user experience! 
                </div>
                <img src={logo} id="aboutLogoImg" alt="img"></img>
            </div>
            <div className="aboutFooterDiv">
                <Footer />
            </div>
        </div>
    )
}

export default About