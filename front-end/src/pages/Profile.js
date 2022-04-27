import { useEffect, useState } from "react"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import { Navigate, useNavigate } from "react-router"
import "../css/Profile.css"
const axios=require("axios")
const Profile=()=>{
    const [first, setFirst]=useState()
    const [last, setLast]=useState()
    const [username, setUsername]=useState()
    const navigate=useNavigate()
    const fetchUser=async()=>{
        const user=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/getUser`,{"username":localStorage.getItem("user")})
        console.log(user.data)
        setFirst(user.data.first)
        setLast(user.data.last)
        setUsername(user.data.username)
    }
    (async()=>{
        fetchUser()
    })()
    useEffect(()=>{
        if(localStorage.getItem("user")===null){
            alert("Please log in to view your profile")
            navigate("/")
        }
    })
    return(
        <div>
            <Header></Header>
            <div className="content">
                <p>Username: {username}</p>
                <p>First name: {last}</p>
                <p>Last name: {first}</p>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Profile;