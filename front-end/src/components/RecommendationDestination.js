import "../css/Recommendation.css"
import React from "react"
import {Link} from "react-router-dom"
import temporaryPhoto from "../assets/destination.jpeg"

const RecommendationDestination=({destination})=>{
    return (
        // <div className="recDestination" style={{backgroundImage:`url(${destination.image})`}}>
        <Link to="/destinationDescription" state={{destination:destination}} style={{textDecoration:"none"}}>   
            <div className="recDestination">
                <img src={destination.image} alt="destinationImage" className="destImg"/>
                <h2 className="destinationSubHeader">{destination.name}</h2>
            </div>
        </Link>

    )
}

export default RecommendationDestination