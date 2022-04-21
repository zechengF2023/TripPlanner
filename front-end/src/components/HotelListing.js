import "../css/ArticleListing.css"
import { useNavigate } from "react-router-dom";
import React from "react"
import { Link } from "@mui/material";
import { useContext } from 'react';
import AppContext from '../AppContext';
const ArticleListing=({article})=>{
    const myContext=useContext(AppContext)
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    //   let path = `/results/${article.id}`; 
    //   navigate(path);
        myContext.setHotel(article)
        navigate("/hotel")
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
                <Link to="/hotel" className="linkEle">Select to continue</Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleListing