import "../css/Search.css"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment';
import { useContext } from 'react';
import AppContext from '../AppContext';
const Search=()=>{
    const myContext=useContext(AppContext)
    let navigate = useNavigate(); 
    const[travelerNum,setTravelerNum]=useState()
    const dateToString=(dateObj)=>{
        return dateObj.getFullYear()+"-"+dateObj.getMonth()+"-"+dateObj.getDate()
    }
    const beginSearch=(e)=>{
        e.preventDefault();
        myContext.setDuration(moment.duration((moment(myContext.checkout).diff(moment(myContext.checkin)))).days()+1)
        if (myContext.duration<=0){alert("invalid date!")}
        //need to be modified
        else if (myContext.destination!=="New York"){alert("invalid destination!")} 
        else{
            try{
                myContext.travelerNum=parseInt(myContext.travelerNum)
            }
            catch{
                alert("invalid traveler number!")
            }
            if (myContext.travelerNum>0){
                console.log(myContext)
                navigate("/searchResults",{state:{startDate:dateToString(myContext.checkin), endDate:dateToString(myContext.checkout)}})
            }
            else{alert("invalid traveler number!")}
        }
    }
    return (
        <form className="searchForm" onSubmit={beginSearch}>
            <input className="destinationInput" type="text" placeholder="Search Destinations" name="destination" value={myContext.destination} onChange={e=>myContext.setDestination(e.target.value)}/>
            <div className="datePickers">
            <DatePicker placeholderText = "Check In" selected = {myContext.checkin} onChange = {(date) => myContext.setCheckin(date)} />
            <DatePicker placeholderText = "Check Out" selected = {myContext.checkout} onChange = {(date) => myContext.setCheckout(date)} />
            </div>
            <input className="travelerInput" type="text" placeholder="Number of Travelers" name="traveler" value={myContext.travelerNum} onChange={e=>myContext.setTravelerNum(e.target.value)}/>
            <button className="searchButton" type="submit">Search</button>
        </form>
    )
}

export default Search