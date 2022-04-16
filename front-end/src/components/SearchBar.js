import "../css/Search.css"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment';

const Search=(props)=>{
    let duration=moment.duration((moment(props.checkout).diff(moment(props.checkin)))).days()+1;
    let navigate = useNavigate(); 
    const beginSearch=(e)=>{
        e.preventDefault();
        let intTravelerNum=0;
        if (duration<=0){alert("invalid date!")}
        else if (props.destination!=="New York"){alert("invalid destination!")}
        else{
            try{
                intTravelerNum=parseInt(props.travelerNum)
            }
            catch{
                alert("invalid traveler number!")
            }
            if (intTravelerNum>0){
                navigate("/results",{state:{intTravelerNum:intTravelerNum, destination: props.destination, duration: duration}})
            }
            else{alert("invalid traveler number!")}
        }
    }
    return (
        <form className="searchForm" onSubmit={beginSearch}>
            <input className="destinationInput" type="text" placeholder="Search Destinations" name="destination" value={props.destination} onChange={e=>props.setDestination(e.target.value)}/>
            <div className="datePickers">
            <DatePicker placeholderText = "Check In" selected = {props.checkin} onChange = {(date) => props.setCheckin(date)} />
            <DatePicker placeholderText = "Check Out" selected = {props.checkout} onChange = {(date) => props.setCheckout(date)} />
            </div>
            <input className="travelerInput" type="text" placeholder="Number of Travelers" name="traveler" value={props.travelerNum} onChange={e=>props.setTravelerNum(e.target.value)}/>
            <button className="searchButton" type="submit">Search</button>
        </form>
    )
}

export default Search