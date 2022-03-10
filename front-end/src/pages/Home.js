import "../css/Home.css"
import React from "react"
import {Link} from "react-router-dom"
import RecommendationActivity from "../components/RecommendationActivity"
import RecommendationDestination from "../components/RecommendationDestination"
import logo from "../assets/Logo.png"
import ProfileIcon from "../assets/ProfileWhite.png"

function changeQuery(e) {
    e.preventDefault(); 
    // const word = e.currentTarget.word; 
}

const Home=()=>{
    return (
        <div>
            <div className="imageSearch">
                <div className="homepageHeader">
                    <Link to="/">
                        <img class="headerImage" alt="Logo" src={logo} />  
                    </Link>  
                    <Link to="/myTrips">
                        <h1 className="tripsLink">
                            Trips
                        </h1>
                    </Link>
                    <a href="/profile"><img id="profileIcon" alt="profileIcon" src={ProfileIcon} /></a>
                </div>
                <form className="searchForm" onSubmit={(e) => changeQuery()}>
                    <input className="destinationInput" type="text" placeholder="Search Destinations" name="destination"/>
                    <input className="checkInInput" type="text" placeholder="Check In" name="checkIn"/>
                    <input className="checkOuInput" type="text" placeholder="Check Out" name="checkOut"/>
                    <input className="travelerInput" type="text" placeholder="Number of Travelers" name="traveler"/>
                    <button className="searchButton" type="submit">Search</button>
                </form>
            </div>
            <h1 className="recTitle">
                    Recommended Activities
            </h1>
            <div className="recommendation">
                    <RecommendationActivity/>
                    {/* {results.map((RecommendationActivity, i) =>
                        <RecommendationActivity activity={activity} key={i}/>
                    )} */}
            </div>
            <h1 className="recTitle">
                    Recommended Destinations
            </h1>
            <div className="recommendation">
                <RecommendationDestination/>
                {/* {results.map((RecommendationDestination, i) =>
                        <RecommendationDestination destination={destination} key={i}/>
                )} */}
            </div>
        </div>
    )
}

export default Home