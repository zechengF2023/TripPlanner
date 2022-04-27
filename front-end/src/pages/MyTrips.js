import React, {useEffect} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TripListing from "../components/TripListing"
import "../css/MyTrips.css"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useContext } from "react"
import AppContext from "../AppContext"
const axios=require("axios")

const MyTrips=()=> {
    const myContext=useContext(AppContext)
    const navigate=useNavigate()
    const [counter, setCounter]=useState(0)
    const [trips, setTrips]=useState([])
    const fetchTrip=async()=>{
        const tripsFetched=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/myTrips/getAllTrips`, {username: localStorage.getItem("user")})
        setTrips(tripsFetched.data)
    }
    const deleteTrip=(trip)=>{
        (async()=>{
            await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/deleteTrip`, {tripId: trip._id})
        })()
        setCounter(counter+1)
    }
    useEffect(()=>{
        if(localStorage.getItem("user")===null){
            navigate("/")
            alert("Please log in to view saved trips")
        }
        fetchTrip()
        // window.addEventListener("popstate", ()=>{
        //     if(myContext.isSaved){
        //         console.log("just saved")
        //         myContext.setSaved(false)
        //         navigate("/")
        //     }
        //     else{
        //         console.log("not saved")
        //         navigate(-1)
        //     }
        // }) 
    },[counter])
    return (
        <div className="view">
            <Header/>
            <div className="secondaryContainer">
                {<p>Welcome,    {localStorage.getItem("userFirst")}!</p>}
                {/* <a href="/settings" className="linkToSettings">Settings</a> */}
            </div>
            <h2 className="subtitle">Your saved trips:</h2>
            <div className="tripHolder">
                {trips.map((trip, i) =>
                    <TripListing trip={trip} key={i} deleteTrip={deleteTrip}/>
                )}
                {trips.length===0 && <p className="noSavedTrip">You haven't saved any trip.</p>}
            </div>
            <Footer/>
        </div>
    )
}
export default MyTrips