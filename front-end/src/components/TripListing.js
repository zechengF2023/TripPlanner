import "../css/TripListing.css"
import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import {createSearchParams } from "react-router-dom";

const axios=require("axios")
const Buffer=require('buffer').Buffer;

const TripListing=({trip, deleteTrip})=>{
    const destination=trip.city
    const navigate=useNavigate()
    const [cover, setCover]=useState();
    const fetchCover=async()=>{
        try{
            const cityFetched=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/getCity`, {"name":destination})
            const cityImg="data:image/jpeg;base64,".concat(Buffer.from(cityFetched.data[0].image.data).toString("base64"))
            setCover(cityImg)
        }
        catch(error) {
            console.log(error);
        }
    }
    const viewTrip=async()=>{
        try{

            let actiData=[]
            trip.activities.forEach((element, idx2) => {
                const activityOneDay=[]
                element.forEach(async(item, idx)=>{
                    const activityJson=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/getActivity`,{"name":item})
                    const activityFormatted=activityJson.data[0]
                    activityFormatted.image="data:image/jpeg;base64,".concat(Buffer.from(activityFormatted.image.data).toString("base64"))
                    activityOneDay.push(activityFormatted)
                    if(activityOneDay.length===trip.activities[idx2].length){
                        actiData.push(activityOneDay)
                    }
                    if(actiData.length===trip.activities.length){
                        const params={hotel:trip.hotel, destination, duration: actiData.length, startDate: trip.startDate, endDate: trip.endDate }
                        navigate({pathname: "/trip", search: `?${createSearchParams(params)}`},{state:{actiData}})
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
        <div className="tripContent">
            <div className="tripHeader">
                <h2 onClick={()=>{viewTrip()}}> Your trip to {trip.city}</h2>
                <DeleteIcon className="icon" style={{fontSize:25}} onClick={()=>deleteTrip(trip)}/>
            </div>
            <img className="tripPhoto" src={cover} alt="tripPhoto" onClick={()=>{viewTrip()}}/>
            <h3 className="tripDates"> From {trip.startDate} to {trip.endDate}</h3>
        </div>

    )
}

export default TripListing