import "../css/ResultMap.css"
import {GoogleMap,Marker, withGoogleMap, withScriptjs,DirectionsRenderer } from 'react-google-maps'
import { useState } from "react"

const ResultMap=(props)=>{
  // const directionService=new window.google.maps.DirectionsService();
  // let dirL=[{"id":1, "val":null}]
  // let [dirList, setDirections] = useState(dirL);
  // const handleAdd=(i,val)=>{
  //   setDirections(
  //     dirList.map((dir)=>
  //       dir.id==i?{...dir, "val":val}:{...dir}
  //     )
  //   )
  // }
  let [mode, setMode] = useState(window.google.maps.TravelMode.DRIVING);
  // const waypointsList=[]
  // for (let i=0;i<props.actiData.length;i++){
  //   waypointsList.push({location: new window.google.maps.LatLng(props.actiData[i].lat,props.actiData[i].lng), stopover: true})
  //   console.log(props.actiData[i].lat)
  // }
  // directionService.route(
  //   {
  //     origin: new window.google.maps.LatLng(props.hotelData[0].lat, props.hotelData[0].lng),
  //     destination: new window.google.maps.LatLng(props.hotelData[0].lat, props.hotelData[0].lng),
  //     travelMode: mode,
  //     waypoints: waypointsList
  //   },
  //    (result, status) => {
  //     if (status === window.google.maps.DirectionsStatus.OK){
  //       // console.log("Legs duration is:")
  //       // console.log(result.routes[0].legs[0].duration)
  //       handleAdd(1, result)
  //     }
  //     else {
  //       console.error(`error fetching directions ${result}`);
  //       return<></>
  //     }
  //   }
  // )
  
  const MapComponent=()=>{
    return( 
      <GoogleMap
        defaultCenter={new window.google.maps.LatLng(props.hotelData[0].lat, props.hotelData[0].lng)}
        defaultZoom={17}
        id="map"
      >
      <Marker key={0} position={{lat:props.hotelData[0].lat, lng:props.hotelData[0].lng}} label={{text:props.hotelData[0].location, fontSize:"18px", fontWeight:"bold"}}></Marker>
      {props.actiData.map((d, idx)=>(
        <Marker key={idx+1} position={{lat:d.lat, lng:d.lng}} label={{text:d.location, fontSize:"18px", fontWeight:"bold"}}></Marker>
      ))}
      <DirectionsRenderer directions={props.dir} options={{suppressMarkers: true}}/>
      </GoogleMap> 
  )}
  const WrappedMap=withScriptjs(withGoogleMap(MapComponent));
  return(
    <div className="map_page">
      <div style={{height:'100%', width:'80%'}}>
      <WrappedMap 
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDXkTuxCbHzr4PT0wiF_SO5rh6wpeiWMoQ"}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
      </div>    
      <div className="floatingPanel">
        <p id="panelIntro">Mode of Travel:</p>
        <select id="selectBox" value={mode} onChange={e=>setMode(e.target.value)}>
        <option value={window.google.maps.TravelMode.DRIVING}>Driving</option>
        <option value={window.google.maps.TravelMode.WALKING}>Walking</option>
        <option value={window.google.maps.TravelMode.BICYCLING}>Bicycling</option>
        <option value={window.google.maps.TravelMode.TRANSIT}>Transit</option>
        </select>
      </div>
  </div>
  )
}

export default ResultMap
