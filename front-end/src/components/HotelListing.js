import "../css/ArticleListing.css"
import { useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import React from "react"
import { Link } from "@mui/material";

const ArticleListing=({article})=>{
    let navigate = useNavigate()
    const [searchParams]=useSearchParams()
    const routeChange = () =>{ 
        const params={hotel: article.name, destination: searchParams.get("destination"), duration: searchParams.get("duration"), startDate: searchParams.get("startDate"), endDate: searchParams.get("endDate") }
        navigate({pathname:"/hotel", search:`?${createSearchParams(params)}`})
    }
    return (
        <div className="articleBox" onClick={routeChange}>
            <div className="articleVisual">
                <img className="articleImage" alt="hotel" src={article.image}/>
            </div>
            <div className="articleContent">
                <div className="articleHeader">
                    <h1>{article.name}</h1>
                    <h1>${article.price}</h1>
                </div>
                <textarea className="articleDescription" rows={5}>{article.blurb}</textarea>
                <div className="bottomBar">
                <h2 className="articleRating">Rating: {article.rating}/5</h2>
                <p className="linkEle">Select to continue</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleListing