import "../css/ArticleListing.css"
import hotel from "../assets/hotel.jpeg"
import React from "react"

const ArticleListing=({article})=>{
    return (
        <div className="articleBox">
            <div className="articleVisual">
                <img className="articleImage" alt="hotel" src={hotel}/>
            </div>
            <div className="articleContent">
                <div className="articleHeader">
                    <h1>{article.name}</h1>
                    <h1>{article.price}</h1>
                </div>
                <h3 className="articleDistance">distance from location</h3>
                <div className="articleAmenities">
                    <h2>{article.amenitites}</h2>
                </div>
                <h3 className="articleTagline">{article.tagline}</h3>
                <p className="articleDescription">{article.blurb}</p>
                <h2 className="articleRating">{article.rating} (# of reviews)</h2>
            </div>
        </div>
    )
}

export default ArticleListing