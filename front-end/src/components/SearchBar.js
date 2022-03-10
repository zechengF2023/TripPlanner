import "../css/Search.css"
import React from "react"

function changeQuery(e) {
    e.preventDefault(); 
    // const word = e.currentTarget.word; 
}

const Search=()=>{
    return (
        <form className="searchForm" onSubmit={(e) => changeQuery()}>
            <input className="destinationInput" type="text" placeholder="Search Destinations" name="destination"/>
            <input className="checkInInput" type="text" placeholder="Check In" name="checkIn"/>
            <input className="checkOuInput" type="text" placeholder="Check Out" name="checkOut"/>
            <input className="travelerInput" type="text" placeholder="Number of Travelers" name="traveler"/>
            <button className="searchButton" type="submit">Search</button>
        </form>
    )
}

export default Search