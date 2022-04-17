import "../css/SingleResult.css"
import React, {useEffect, useState}  from 'react'; 
import Header from "../components/Header"; 
import Footer from "../components/Footer"
import { Paper, Button, touchRippleClasses } from '@mui/material'
import {useParams, Link} from "react-router-dom"; 
import {useLocation} from "react-router-dom"
import {GoogleMap,Marker, withGoogleMap, withScriptjs } from 'react-google-maps'

function SingleResult(){
    const {state}=useLocation()
    const {article}=state;
    const amenityStr=article.amenity.join(", ")
    const MapComponent=()=>{
        return( 
          <GoogleMap
            defaultCenter={new window.google.maps.LatLng(article.lat,article.lng)} defaultZoom={13} id="hotelMap">
          <Marker key={0} position={{lat:article.lat, lng:article.lng}} label={{text:article.name, fontSize:"18px", fontWeight:"bold"}}></Marker>
          </GoogleMap> 
    )}
   
    const WrappedMap=withScriptjs(withGoogleMap(MapComponent));
    return (
        <div>
            <Header/>
            <div className="hotelDisplay">
                <div className="leftContent">
                    <h2 className="priceRating">{"Price: $"+article.price+" Rating:"+article.rating}</h2>
                    <h2 className="singleName">{article.name}</h2>
                    <p className="singleBlurb">{article.blurb}</p>
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
                <a target="_blank" href={article.link} className="bookLink">
                    Book a Room
                </a>
                <a href={"/trip"} className="tripLink">
                    Proceed to choose activities
                </a>
            </div>
            <Footer className="ftr"/>
        </div>
    )
}
        
export default SingleResult