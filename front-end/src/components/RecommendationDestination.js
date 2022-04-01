import "../css/Recommendation.css"
import React from "react"
import {Link} from "react-router-dom"
import temporaryPhoto from "../assets/destination.jpeg"

const RecommendationDestination=({destination})=>{
    return (
        // <div className="recDestination" style={{backgroundImage:`url(${destination.image})`}}>
        <Link to="/results">
            <div className="recDestination" style={{backgroundImage:`url(${temporaryPhoto})`}}>
                <h2 className="destinationSubHeader">{destination.location}</h2>
            </div>
        </Link>

    )
}

export default RecommendationDestination