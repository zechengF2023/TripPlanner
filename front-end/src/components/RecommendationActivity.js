import "../css/Recommendation.css"
import React from "react"
import activityImage from "../assets/activity.jpeg"

const RecommendationActivity=({recommendation})=>{
    return (
        <div className="recAct">
            <img class="activityImage" alt="activity" src={activityImage} /> 
            {/* <img class="activityImage" alt="activity" src={recommendation.image} />  */}
            <h2 className="activitySubHeader">{recommendation.rating}/5</h2>
            <h2 className="activitySubHeader">{recommendation.name}</h2>
            <h2 className="activitySubHeader">{recommendation.location}</h2>
        </div>
    )
}

export default RecommendationActivity