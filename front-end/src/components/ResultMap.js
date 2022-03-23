import "../css/ResultMap.css"
import GoogleMapReact from 'google-map-react'
import { red } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ResultMap=(props)=>{
  const location ={
    address:props.data[0].location,
    lat: props.data[0].lat,
    lng: props.data[0].lng,
  }
  const LocationPin =({text})=>(
    <div className="pin">
      <LocationOnIcon sx={{ fontSize: 35, color:red[400]}} ></LocationOnIcon>
      <p className="pinText">{text}</p>
    </div>
  )
  return(
    <div className="map_page">
      <div className="map_component">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDXkTuxCbHzr4PT0wiF_SO5rh6wpeiWMoQ' }}
          defaultCenter={location}
          defaultZoom={17}
        >
          {props.data.map((destination,index)=>{
            return <LocationPin key={index} lat={destination.lat} lng={destination.lng} text={destination.location} ></LocationPin>
          })}
        </GoogleMapReact>
        
      </div>
    </div>
  )
}

export default ResultMap