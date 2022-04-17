import "../css/ArticleListing.css"
import { useNavigate } from "react-router-dom";
import React from "react"
import { Link } from "@mui/material";

const ArticleListing=({article})=>{

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    //   let path = `/results/${article.id}`; 
    //   navigate(path);
        navigate("/hotelResult",{state:{article:article}})
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
                <Link to="/results" className="linkEle">Select to continue</Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleListing