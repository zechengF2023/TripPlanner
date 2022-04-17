import "../css/Recommendation.css"
import React from "react"
import {Link} from "react-router-dom"
import activityImage from "../assets/activity.jpeg"

const RecommendationActivity=({recommendation})=>{
    return (
        <div className="recAct">
            <Link to={"/results/1"} > 
                <img className="activityImage" alt="activity" src={recommendation.image} /> 
            </Link>
            <h2 className="activitySubHeader">{recommendation.name}</h2>
        </div>
    )
}

export default RecommendationActivity