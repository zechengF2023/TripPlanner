import React, {useEffect, useMemo} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import savedTrips from "../components/savedTripsData.json"
import TripListing from "../components/TripListing"
import "../css/Profile.css"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router"
import { useContext } from 'react';
import AppContext from '../AppContext';
const axios=require("axios")
const Buffer=require('buffer').Buffer;

const Profile=()=> {
    const myContext=useContext(AppContext)
    const navigate=useNavigate()
    // useEffect(()=>{
    //     window.onpopstate=()=>{
    //         navigate("/")
    //     }
    // })
    let counter=0
    const [trips, setTrips]=useState([])
    const [userName, setUsername]=useState("Username")
    const fetchTrip=async()=>{
        const tripsFetched=await axios.post("http://localhost:3000/profile/getAllTrips")
        setTrips(tripsFetched.data)
    }
    const deleteTrip=(trip)=>{
        (async()=>{
            await axios.post("http://localhost:3000/deleteTrip", {tripId: trip._id})
        })()
        // window.location.reload() not working
        counter++ //why not working
    }
    useEffect(()=>{
        if(!myContext.currentUser){
            alert("Please log in to view profile")
            navigate("/")
        }
        fetchTrip()
    },[counter])
    return (
        <div className="view">
            <Header/>
            <div className="secondaryContainer">
                {myContext.currentUser && <p>Welcome, [{myContext.currentUser.username}]!</p>}
                <a href="/settings" className="linkToSettings">Settings</a>
            </div>
            <h2 className="subtitle">Your saved trips:</h2>
            <div className="tripHolder">
                {trips.map((trip, i) =>
                    <TripListing trip={trip} key={i} deleteTrip={deleteTrip}/>
                )}
            </div>
            <Footer/>
        </div>
    )
}
export default Profile