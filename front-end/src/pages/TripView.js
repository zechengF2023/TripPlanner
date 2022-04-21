import "../css/TripView.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ResultMap from "../components/ResultMap"
import ResultFlowDiagram from "../components/ResultFlowDiagram"
import Modal from "../components/SaveModal"
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import MapIcon from '@mui/icons-material/Map';
import Day from "../components/Day/Day"
import DayView from "../components/DayView/DayView"
import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import { duration } from "@mui/material"
const Buffer=require('buffer').Buffer

const TripView=props=>{
    const {state}=useLocation()
    const hotelData=state.hotelData
    const days=state.duration
    const actiData=state.actiData
    const destination=state.destination
    
    const renderDays=(days)=>{
        let dayList=[]
        for (let i=1;i<days+1;i++){
            dayList.push(<Day dayNumber = {i} setDayNumber = {handleDayClick} className="dayIcon"/>)
            // <button className="dayIcon" key={i} onClick={()=>handleDayClick(i)}>Day{i}</button>
        }
        return dayList
    }

    const [showModal, setModal]=useState(false)
    const [displayMap, showMap]=useState(false);
    // handles the current day view - based on button pressed
    const [displayDay, setDisplayDay]=useState(1);
    const [displayEdit, showEdit]=useState(false);
    const [dir, setDir]=useState([]);
    const [mode, setMode]=useState(window.google.maps.TravelMode.DRIVING);
    const [timeL, setTimeL] = useState([])
    // const [totalTime, setTotalTime]=useState(0) calculate total time functionality to be implemented.
    const handleDayClick=num=>{
        showMap(false)
        showEdit(false)
        setDisplayDay(num)
    }
    const handleMapClick=()=>{
        showEdit(false)
        showMap(true)
    }
    const handleEditClick=()=>{
        showMap(false)
        showEdit(true)
    }
    const handleSaveClick=()=>{
        setModal(true)
        document.body.style.overflow = 'hidden';
    }
    const closeModal=()=>{
        setModal(false)
        document.body.style.overflow="scroll";
    }
    const directionService=new window.google.maps.DirectionsService();
    const waypointsList=[]
    for(let x=0;x<actiData.length;x++){
        const dayWPList=[]
        for (let i=0;i<actiData[x].length;i++){
          dayWPList.push({location: new window.google.maps.LatLng(actiData[x][i].lat,actiData[x][i].lng), stopover: true})
        }
      waypointsList.push(dayWPList)
    }
    async function getDir(request){
        const result2 = await directionService.route(
          request, (result, status) => {
            if (status !== window.google.maps.DirectionsStatus.OK){
              console.error(`error fetching directions ${result}`);
              return false
            }
          }
        )
        return result2
    }
    function getRequest(idx, mode){
        let dirRequest={
            origin: new window.google.maps.LatLng(hotelData.lat, hotelData.lng),
            destination: new window.google.maps.LatLng(hotelData.lat, hotelData.lng),
            travelMode: mode,
            waypoints: waypointsList[idx]
        }
        return dirRequest
    }
    (async() => {
        const aDir=await getDir(getRequest(displayDay-1, mode))
        setDir(aDir)
        const timeData=[]
        for(let i=0;i<aDir.routes[0].legs.length;i++){
            let durationText=aDir.routes[0].legs[i].duration.text
            timeData.push(durationText)
        }
        setTimeL(timeData)
    })()
    
    const displayContent=()=>{
        if (displayMap){           
            return <ResultMap dayNum={displayDay} dir={dir} actiData={actiData[displayDay-1]} hotelData={hotelData} timeData={timeL}></ResultMap>
        }
        else if (displayEdit){
            return <p>This is edit</p>
        }
        else {
            return <ResultFlowDiagram actiData={actiData[displayDay-1]} hotelData={hotelData} timeData={timeL}></ResultFlowDiagram>
        }
    }
    return(
        <div>
            <Header />
            <div className="template">
                <h1>Trip to {destination} </h1>
                <div className="subHeader">
                    <div className="dayIcons">
                        {renderDays(days)}
                    </div>
                    <div className="Icons">
                        <MapIcon className="Icon"  sx={{ fontSize: "5vh"}} onClick={handleMapClick} />
                        <EditIcon className="Icon" sx={{ fontSize: "5vh"}} onClick={handleEditClick}/>
                        <SaveIcon className="Icon" sx={{ fontSize: "5vh"}} onClick={handleSaveClick}/>
                    </div>
                </div>
                {/* <DayView dayNumber = {displayDay} key = {displayDay} /> */}
                <div className="panelAndSummary">
                    <div className="floatingPanel">
                        <p id="panelIntro">Mode of Travel:</p>
                        <select id="selectBox" value={mode} onChange={e=>setMode(e.target.value)}>
                        <option value={window.google.maps.TravelMode.DRIVING}>Driving</option>
                        <option value={window.google.maps.TravelMode.WALKING}>Walking</option>
                        <option value={window.google.maps.TravelMode.BICYCLING}>Bicycling</option>
                        <option value={window.google.maps.TravelMode.TRANSIT}>Transit</option>
                        </select>
                    </div>
                    {/* <div className="timeSummary">
                        <div id="timeText">Time in total:</div>
                        <p id="timeValue">{totalTime}</p>
                    </div> */}
                </div>
                {displayContent()}
                {showModal && <Modal toClose={closeModal}/>}
            </div>
            <Footer />
        </div>
    )
}

export default TripView