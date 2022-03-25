import "../css/TripListing.css"
import React from "react"
import {Link} from "react-router-dom"
import temporaryPhoto from "../assets/destination.jpeg"

const TripListing=({trip})=>{
    return (
        <div className="tripContent">
            <Link to="/trip">
                <h2 className="tripHeader"> Your trip to {trip.location} </h2>
                <img className="tripPhoto" src={temporaryPhoto} alt="savedTripPhoto"/>
                <h3 className="tripDates"> From {trip.startDate} to {trip.endDate}</h3>
            </Link>
        </div>
    )
}

export default TripListing