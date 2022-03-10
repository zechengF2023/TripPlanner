import "../css/Recommendation.css"
import React from "react"
import activityImage from "../assets/activity.jpeg"

const RecommendationActivity=()=>{
    return (
        <div className="recAct">
            <img class="activityImage" alt="activity" src={activityImage} /> 
            <h2 className="activitySubHeader">Rating</h2>
            <h2 className="activitySubHeader">Activity Title</h2>
            <h2 className="activitySubHeader">Location</h2>
        </div>
    )
}

export default RecommendationActivity