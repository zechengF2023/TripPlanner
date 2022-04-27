import "../css/Contact.css"
import Footer from "../components/Footer.js"
import Header from "../components/Header"
import Modal from "../components/ContactModal"
import React,{ useState } from "react"
import Plane from "../assets/Plane.png"

const Contact=e=>{
    const axios=require("axios")
    const [issueCategory,setCategory]=useState("")
    const [issueDescription,setDescription]=useState("")
    const [show, setShow]=useState(false)
    
    async function handleSubmit(e){
        e.preventDefault();
        if (!issueDescription){
            alert("Please enter the description")
        }
        else if(!issueCategory || issueCategory==="Empty"){
            alert("Please choose an issue")
        }
        else{
            // setTimeout(()=>alert("Submit failed! Please try again later."),5000)
            let res=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/contact`,{"category":issueCategory, "description":issueDescription})
            if(res.status===200){
                handleShow()
                setCategory("")
                setDescription("")
            }   
        }
    }
    const handleShow=()=>{
        setShow(true)
        document.body.style.overflow = 'hidden';
    }
    const handleClose=()=>{
        setShow(false)
        document.body.style.overflow="scroll";
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
                <form className="issueForm" onSubmit={handleSubmit}>
                    <label htmlFor= "issue_text">What kind of issue are you having:</label>
                    <select name="issues" id="issues" value={issueCategory} onChange={e=>setCategory(e.target.value)}>
                        <option value="Empty"></option>
                        <option value="Login issue">Login Issue</option>
                        <option value="Searching issue">Searching Issue</option>
                        <option value="Profile issue">Profile Issue</option>
                        <option value="Other">Other</option>
                    </select>
                    <label htmlFor= "issue_text">Please describe your problem:</label>
                    <textarea className="issueBox" value={issueDescription} onChange={e=>setDescription(e.target.value)}></textarea><br/>
                    <input type="submit" id="submit_button" name="button" value="submit"/>
                </form>
                <h2 className="support_num" >For further issue:</h2>
                <h2 className="support_num">Support number: xxx-xxx-xxx</h2>
                {show &&<Modal toClose={handleClose}/>}
            </div>
            <Footer />
        </>
    )
}

export default Contact