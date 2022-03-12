import "../css/ResultMap.css"
import GoogleMapReact from 'google-map-react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Icon } from '@iconify/react';

const ResultMap=(props)=>{
  const location ={
    address: 'NYU',
    lat: 40.729603794934015, 
    lng: -73.99646407872974,
  }
  const LocationPin =({text})=>(
    <div className="pin">
      <Icon className="pinImg" icon="entypo:location-pin" color="red"/>      
      <p>{text}</p>
    </div>
  )
  return(
    <>
    <Header />
    <div className="map_page">
      <div className="map_component">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDXkTuxCbHzr4PT0wiF_SO5rh6wpeiWMoQ' }}
          defaultCenter={location}
          defaultZoom={17}
        >
          <LocationPin lat={40.729603794934015} lng={-73.99646407872974} text="NYU"/>
          <LocationPin lat={40.73169582048705} lng={-73.99712378852689} text="NYU"/>
        </GoogleMapReact>
        
      </div>
    </div>
    <Footer />
    </>
  )
}

export default ResultMap