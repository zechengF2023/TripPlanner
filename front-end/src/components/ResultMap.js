import "../css/ResultMap.css"
import {GoogleMap,Marker, withGoogleMap, withScriptjs,DirectionsRenderer } from 'react-google-maps'
import { useEffect, useState } from "react"

const ResultMap=(props)=>{
  const directionService=new window.google.maps.DirectionsService();
  const [dir, setDir]=useState()
  let [mode, setMode] = useState(window.google.maps.TravelMode.DRIVING);
  const waypointsList=[]
  for(let x=0;x<props.actiData.length;x++){
    const dayWPList=[]
    for (let i=0;i<props.actiData[x].length;i++){
      dayWPList.push({location: new window.google.maps.LatLng(props.actiData[x][i].lat,props.actiData[x][i].lng), stopover: true})
    }
  waypointsList.push(dayWPList)
  }

  async function getDir(request){
    const result2 = await directionService.route(
      request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK){
          // console.log("Legs duration is:")
          // console.log(result.routes[0].legs[0].duration)
          // setDir(result);
          return result;
        }
        else {
          console.error(`error fetching directions ${result}`);
          return false
        }
      }
    )
    return result2
  }
// useEffect(
// (async () => { 
//   let dirRequest={
//     origin: new window.google.maps.LatLng(props.hotelData[0].lat, props.hotelData[0].lng),
//     destination: new window.google.maps.LatLng(props.hotelData[0].lat, props.hotelData[0].lng),
//     travelMode: mode,
//     waypoints: waypointsList[0]
//   }
//   const result = await getDir(dirRequest)
//   if (result) direction=result
// })()
// )
// console.log("direction is: ")
// console.log(direction)


// waypointsList.forEach((element,idx) => {
//   (async()=>{ 
//     let dirRequest={
//       origin: new window.google.maps.LatLng(props.hotelData[0].lat, props.hotelData[0].lng),
//       destination: new window.google.maps.LatLng(props.hotelData[0].lat, props.hotelData[0].lng),
//       travelMode: mode,
//       waypoints: element
//     }
//     const result = await getDir(dirRequest)
//     if (result) setDir(result)
//   })()
// })
const MapComponent=()=>{
  return( 
    <GoogleMap
      defaultCenter={new window.google.maps.LatLng(props.hotelData[0].lat, props.hotelData[0].lng)}
      defaultZoom={17}
      id="map"
    >
    {/* <Marker key={0} position={{lat:props.hotelData[0].lat, lng:props.hotelData[0].lng}} label={{text:props.hotelData[0].location, fontSize:"18px", fontWeight:"bold"}}></Marker>
    {props.actiData.map((d, idx)=>(
      <Marker key={idx+1} position={{lat:d.lat, lng:d.lng}} label={{text:d.location, fontSize:"18px", fontWeight:"bold"}}></Marker>
    ))} */}
    {/* {resultL.map((r)=>(<DirectionsRenderer directions={r} options={{suppressMarkers: true}}/>))} */}
    <DirectionsRenderer directions={props.dir[0]}/>
    
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
