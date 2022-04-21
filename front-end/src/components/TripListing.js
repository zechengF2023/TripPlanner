import "../css/TripListing.css"
import React, { useEffect } from "react"
import {Link} from "react-router-dom"
import temporaryPhoto from "../assets/destination.jpeg"
import { useNavigate } from "react-router"
import { useState } from "react"
import { useContext } from 'react';
import AppContext from '../AppContext';
const axios=require("axios")
const Buffer=require('buffer').Buffer;

//data requried in TripView: 
    // const hotelData=state.hotelData
    // const days=state.duration
    // const actiData=state.actiData
    // console.log(actiData)
    // const destination=state.destination

const TripListing=({trip})=>{
    const myContext=useContext(AppContext)
    const destination=trip.city
    const navigate=useNavigate()
    const [cover, setCover]=useState();
    const fetchCover=async()=>{
        try{
            const cityFetched=await axios.post("http://localhost:3000/getCity", {"name":destination})
            const cityImg="data:image/jpeg;base64,".concat(Buffer.from(cityFetched.data[0].image.data).toString("base64"))
            setCover(cityImg)
        }
        catch(error) {
            console.log(error);
        }
    }
    const viewTrip=async()=>{
        try{
            const hotelJson=await axios.post("http://localhost:3000/getHotel",{"name":trip.hotel})
            const hotelData=hotelJson.data[0]
            hotelData.image="data:image/jpeg;base64,".concat(Buffer.from(hotelData.image.data).toString("base64"))

            let actiData=[]
            trip.activities.forEach((element, idx2) => {
                const activityOneDay=[]
                element.forEach(async(item, idx)=>{
                    const activityJson=await axios.post("http://localhost:3000/getActivity",{"name":item})
                    const activityFormatted=activityJson.data[0]
                    activityFormatted.image="data:image/jpeg;base64,".concat(Buffer.from(activityFormatted.image.data).toString("base64"))
                    activityOneDay.push(activityFormatted)
                    if(activityOneDay.length===trip.activities[idx2].length){
                        actiData.push(activityOneDay)
                    }
                    if(actiData.length===trip.activities.length){
                        myContext.setHotel(hotelData)
                        myContext.setDestination(destination)
                        myContext.setDuration(actiData.length)
                        navigate("/trip",{state:{actiData}})
                    }
                })
            })
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchCover()
    },[])
    return (
        <div className="tripContent" onClick={()=>{viewTrip()}}>
            <h2 className="tripHeader"> Your trip to {trip.city}</h2>
            <img className="tripPhoto" src={cover} alt="tripPhoto"/>
            <h3 className="tripDates"> From {trip.startDate} to {trip.endDate}</h3>
        </div>
    )
}

export default TripListing