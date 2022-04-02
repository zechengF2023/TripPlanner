import "../css/Search.css"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function changeQuery(e) {
    e.preventDefault(); 
    // const word = e.currentTarget.word; 
}

const Search=()=>{
    const [checkin, setCheckin] = useState(null)
    const [checkout, setCheckout] = useState(null)
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/results`; 
        navigate(path);
    }
    return (
        <form className="searchForm" onSubmit={(e) => changeQuery()}>
            <input className="destinationInput" type="text" placeholder="Search Destinations" name="destination"/>
            <DatePicker placeholderText = "Check In" selected = {checkin} onChange = {(date) => setCheckin(date)} />
            <DatePicker placeholderText = "Check Out" selected = {checkout} onChange = {(date) => setCheckout(date)} />
            <input className="travelerInput" type="text" placeholder="Number of Travelers" name="traveler"/>
            <button className="searchButton" type="submit" onClick={routeChange}>Search</button>
        </form>
    )
}

export default Search