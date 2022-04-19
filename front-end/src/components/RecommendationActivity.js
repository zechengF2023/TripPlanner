import "../css/Recommendation.css"
import React from "react"
import {Link} from "react-router-dom"


const RecommendationActivity=({recommendation})=>{
    return (
        <div className="recAct">
            <a href={recommendation.link} > 
                <img className="activityImage" alt="activity" src={recommendation.image} /> 
            </a>
            <h2 className="activitySubHeader">{recommendation.name}</h2>
        </div>
    )
}

export default RecommendationActivity