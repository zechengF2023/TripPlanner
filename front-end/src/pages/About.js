import "../css/About.css"
import React from "react"
import Footer from "../components/Footer.js"
import Header from "../components/Header"
import logo from "../assets/Logo.png"
const About=()=>{
    return(
        <div>
            <Header />
            <div className='content'>
                <div className="title">About Us</div>
                <div className="body">The inspiration of this project arises from the fact that it's often time-consuming for people to plan trips themselves. To make an interesting and memorable trip, one would have to do vast research on local hotels, tourist attractions , restaurants, etc. With the goal of exempting you from such trouble, the Trip Planner app aims to generate trips based on your preferences, saving your time while catering to your needs.</div>
                <div className="ending">
                    Wish you a pleasant user experience! 
                </div>
                <img src={logo} id="logoImg" alt="img"></img>
            </div>
            <div className="footerDiv">
                <Footer />
            </div>
        </div>
    )
}

export default About