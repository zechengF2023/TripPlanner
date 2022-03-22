import "../css/ResultMap.css"
import GoogleMapReact from 'google-map-react'
import { red } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ResultMap=(props)=>{
  const location ={
    address: 'NYU',
    lat: 40.729603794934015, 
    lng: -73.99646407872974,
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
          <LocationPin lat={40.729603794934015} lng={-73.99646407872974} text="NYU"/>
          <LocationPin lat={40.73169582048705} lng={-73.99712378852689} text="Washington Square"/>
        </GoogleMapReact>
        
      </div>
    </div>
  )
}

export default ResultMap