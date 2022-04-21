import React, {useEffect, useMemo} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import savedTrips from "../components/savedTripsData.json"
import TripListing from "../components/TripListing"
import "../css/Profile.css"
import { useState } from "react"
const axios=require("axios")
const Buffer=require('buffer').Buffer;

const Profile=()=> {
    const [trips, setTrips]=useState([])
    const [userName, setUsername]=useState("Username")
    const fetchTrip=async()=>{
        const tripsFetched=await axios.post("http://localhost:3000/profile/getAllTrips")
        setTrips(tripsFetched.data)
    }
    useEffect(()=>{
        fetchTrip()
    },[])

    return (
        <div className="view">
            <Header/>
            <div className="secondaryContainer">
                <p>Welcome, [{userName}]!</p>
                <a href="/settings" className="linkToSettings">Settings</a>
            </div>
            <h2 className="subtitle">Your saved trips:</h2>
            <div className="tripHolder">
                {trips.map((trip, i) =>
                    <TripListing trip={trip} key={i}/>
                )}
            </div>
            <Footer/>
        </div>
    )
}
export default Profile