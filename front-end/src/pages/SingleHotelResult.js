import "../css/SingleResult.css"
import React, {useEffect, useState}  from 'react'; 
import Header from "../components/Header"; 
import Footer from "../components/Footer"
import { Paper, Button, touchRippleClasses, duration } from '@mui/material'
import {useParams, Link} from "react-router-dom"; 
import {useLocation} from "react-router-dom"
import {GoogleMap,Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import { useContext } from 'react';
import AppContext from '../AppContext';

function SingleResult(){
    const myContext=useContext(AppContext)
    const amenityStr=myContext.hotel.amenity.join(", ")
    const MapComponent=()=>{
        return(
          <GoogleMap
            defaultCenter={new window.google.maps.LatLng(myContext.hotel.lat,myContext.hotel.lng)} defaultZoom={13} id="hotelMap">
          <Marker key={0} position={{lat:myContext.hotel.lat, lng:myContext.hotel.lng}} label={{text:myContext.hotel.name, fontSize:"18px", fontWeight:"bold"}}></Marker>
          </GoogleMap> 
    )}
   
    const WrappedMap=withScriptjs(withGoogleMap(MapComponent));
    return (
        <div>
            <Header/>
            <div className="hotelDisplay">
                <div className="leftContent">
                    <h2 className="priceRating">{"Price: $"+myContext.hotel.price+" Rating:"+myContext.hotel.rating}</h2>
                    <h2 className="singleName">{myContext.hotel.name}</h2>
                    <p className="singleBlurb">{myContext.hotel.blurb}</p>
                    <p> {"Amenities: "+amenityStr} </p>
                </div>
                <div className="rightContent">
                    <div className="hotelMap" >
                        <WrappedMap
                        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDXkTuxCbHzr4PT0wiF_SO5rh6wpeiWMoQ"}
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                        />
                    </div> 
                </div>
            </div>
            <div className="links">
                <a target="_blank" rel="noreferrer" href={myContext.hotel.link} className="bookLink">
                    Book a Room
                </a>
                <Link to="/hotelToTrip" className="tripLink">
                    Proceed to choose activities
                </Link>
            </div>
            <Footer className="ftr"/>
        </div>
    )
}
        
export default SingleResult