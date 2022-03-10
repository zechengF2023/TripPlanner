import "../css/ArticleListing.css"
import hotel from "../assets/hotel.jpeg"
import React from "react"

const ArticleListing=()=>{
    return (
        <div className="articleBox">
            <div className="articleVisual">
                <img className="articleImage" alt="hotel" src={hotel}/>
            </div>
            <div className="articleContent">
                <div className="articleHeader">
                    <h1>Property Name</h1>
                    <h1>Price</h1>
                </div>
                <h3 className="articleDistance">distance from location</h3>
                <div className="articleAmenities">
                    <h2>Main Amenities</h2>
                </div>
                <h3 className="articleTagline">Tagline of property</h3>
                <p className="articleDescription">Blurb about the property</p>
                <h2 className="articleRating">Rating (# of reviews)</h2>
            </div>
        </div>
    )
}

export default ArticleListing