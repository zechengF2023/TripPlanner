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
                    <h1>About Us</h1>
                    <p>The inspiration of this project arises from the fact that it's often time-consuming for people to plan trips themselves. To make an interesting and memorable trip, one would have to do vast research on local hotels, tourist attractions , restaurants, etc. With the goal of exempting you from such trouble, the Trip Planner app aims to generate trips based on your preferences, saving your time while catering to your needs. </p>
                    <p>
                        Wish you a pleasant user experience! 
                    </p>
                    <img src={logo} id="logoImg"></img>
                <div className="footerDiv">
                <Footer />
                </div>
            </div>
        </div>
    )
}

export default About