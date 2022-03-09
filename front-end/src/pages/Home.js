import "../css/Home.css"
import React from "react"
import RecommendationActivity from "../components/RecommendationActivity"
import RecommendationDestination from "../components/RecommendationDestination"

function changeQuery(e) {
    e.preventDefault(); 
    // const word = e.currentTarget.word; 
}

const Home=()=>{
    return (
        <div>
            <div className="imageSearch">
                <form className="searchForm" onSubmit={(e) => changeQuery()}>
                    <input className="destinationInput" type="text" placeholder="Search Destinations" name="destination"/>
                    <input className="checkInInput" type="text" placeholder="Check In" name="checkIn"/>
                    <input className="checkOuInput" type="text" placeholder="Check Out" name="checkOut"/>
                    <input className="travelerInput" type="text" placeholder="Number of Travelers" name="traveler"/>
                    <button className="searchButton" type="submit">Search</button>
                </form>
            </div>
            <div className="recommendation">
                <RecommendationActivity/>
                {/* <div>
                    {results.map((gif, i) =>
                        <PostCard gif={gif} key={i}/>
                    )}
                
                </div> */}
            </div>
            <div className="recommendation">
                <RecommendationDestination/>
            </div>
        </div>
    )
}

export default Home