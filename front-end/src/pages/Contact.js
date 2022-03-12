import "../css/Contact.css"
import Footer from "../components/Footer.js"
import Header from "../components/Header"
import React from "react"
import Plane from "../assets/Plane.png"


const Contact=e=>{
    const handleSubmit=()=>{
        return(
            alert("form submitted!")  
        )
    }
        

    return(
        <>
            <Header />
            <div className="contactDiv">
                <h1 className="H1">Travel Issues?</h1>
                <div className="div2">
                    <img alt="Plane" id="Plane" src={Plane} />
                    <h2 className="H2">We are here to help!</h2>
                </div>
                <h2 id="send_message">Send us a message!</h2>
                <form className="issueForm"onSubmit={handleSubmit}>
                    <label for= "issue_text">What kind of issue are you having:</label>
                    <select name="issues" id="issues">
                        <option value="Login issue">Login Issue</option>
                        <option value="Searching issue">Searching Issue</option>
                        <option value="Profile issue">Profile Issue</option>
                        <option value="Other">Other</option>
                    </select>
                    <label for= "issue_text">Please describe your problem:</label>
                    <textarea className="issueBox" /><br/>
                    <input type="submit" id="submit_button" name="button" value="submit"/>
                </form>
                <h2 className="support_num" >For further issue:</h2>
                <h2 className="support_num">Support number: xxx-xxx-xxx</h2>
            </div>
            <Footer />
        </>
    )
}

export default Contact