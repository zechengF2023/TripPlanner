import "../css/SingleResult.css"
import React, {useEffect, useState}  from 'react'; 
import Header from "../components/Header"; 
import Footer from "../components/Footer"
import { Paper, Button, touchRippleClasses, duration } from '@mui/material'

import {GoogleMap,Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import { useSearchParams, createSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
const axios=require('axios')
const Buffer=require('buffer').Buffer;
function SingleResult(){
    const [searchParams]=useSearchParams()
    const [hotel, setHotel]=useState({})
    const navigate=useNavigate()
    const getHotel=async()=>{
        const res=await axios.post("http://localhost:3000/getSingleHotel",{name:searchParams.get("hotel"), city: searchParams.get("destination")})
        const hotelFetched=res.data
        setHotel(hotelFetched)
    }
    const MapComponent=()=>{
        return(
          <GoogleMap
            defaultCenter={new window.google.maps.LatLng(hotel.lat,hotel.lng)} defaultZoom={13} id="hotelMap">
          <Marker key={0} position={{lat:hotel.lat, lng:hotel.lng}} label={{text:hotel.name, fontSize:"18px", fontWeight:"bold"}}></Marker>
          </GoogleMap> 
    )}
    const WrappedMap=withScriptjs(withGoogleMap(MapComponent));
    const toActivities=()=>{
        const params={hotel: hotel.name, destination: searchParams.get("destination"), duration: searchParams.get("duration"), startDate: searchParams.get("startDate"), endDate: searchParams.get("endDate") }
        navigate({pathname:"/hotelToTrip", search:`?${createSearchParams(params)}`})
    }
    useEffect(()=>{
        getHotel()
    },[])
    return (
        <div>
            <Header/>
            <div className="hotelDisplay">
                <div className="leftContent">
                    <h2 className="priceRating">{"Price: $"+hotel.price+" Rating:"+hotel.rating}</h2>
                    <h2 className="singleName">{hotel.name}</h2>
                    <p className="singleBlurb">{hotel.blurb}</p>
                    {hotel.amenity && <p> {"Amenities: "+hotel.amenity.join(", ")} </p>}
                </div>
                <div className="rightContent">
                    <div className="hotelMap" >
                        <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                        />
                    </div> 
                </div>
            </div>
            <div className="links">
                <a target="_blank" rel="noreferrer" href={hotel.link} className="bookLink">
                    Book a Room
                </a>
                {/* <Link to="/hotelToTrip" className="tripLink">
                    Proceed to choose activities
                </Link> */}
                <div className="tripLink" onClick={()=>{toActivities()}}>Proceed to choose activities</div>
            </div>
            <Footer className="ftr"/>
        </div>
    )
}
        
export default SingleResult