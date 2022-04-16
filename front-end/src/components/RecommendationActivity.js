import "../css/Recommendation.css"
import React from "react"
import {Link} from "react-router-dom"
import activityImage from "../assets/activity.jpeg"

const RecommendationActivity=({recommendation})=>{
    return (
        <div className="recAct">
            {/* MUST MERGE recommendationData.json and Properties json */}
            <Link to={"/results/1"}> 
                <img className="activityImage" alt="activity" src={recommendation.image} /> 
            </Link>
            {/* <img class="activityImage" alt="activity" src={recommendation.image} />  */}
            <h2 className="activitySubHeader">{recommendation.name}</h2>
            <h2 className="activitySubHeader">{recommendation.location}</h2>
        </div>
    )
}

export default RecommendationActivity