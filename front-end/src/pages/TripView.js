import "../css/SpecificResult.css"
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

import actiImg from "../assets/activity.jpeg"
import { useEffect, useState } from "react"

const TripView=props=>{
    // number of days of this trip
    let days=2
    //destination city name//
    let destination="New York"
    // data of all the activities, each sublist is for one day
    let actiData=[[{"name": "NYU", "lat": 40.729603794934015,"lng":-73.99646407872974, "image":actiImg, "stay":30},{"name": "Washington Square", "lat": 40.73169582048705,"lng":-73.99712378852689,"image":actiImg, "stay":45}, {"name": "NYU Bookstore", "lat": 40.7292215,"lng":-73.9932385, "image":actiImg,"stay":35}],
                  [{"name": "Bobst Library", "lat":40.729793742025834, "lng":-73.99704954065322, "image":actiImg, "stay":200},{"name": "Stern School of Business", "lat": 40.729228370255534, "lng": -73.99624215337731,"image":actiImg, "stay":15}, {"name": "Tish School of the Arts", "lat": 40.72951832313394, "lng":-73.99357707600099, "image":actiImg,"stay":25}]]
    // data of the chosen hotel
    let hotelData=[{"name":"Lipton", "lat": 40.73163825016495, "lng":-73.99930411551414, "image":actiImg}]
    
    const renderDays=(days)=>{
        let dayList=[]
        for (let i=1;i<days+1;i++){
            dayList.push(<Day dayNumber = {i} setDayNumber = {setDisplayDay}/>
            
            /*<button className="dayIcon" key={i} onClick={()=>handleDayClick(i)}>Day{i}</button>*/)
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
    const handleDayClick=num=>{
        showMap(false)
        showEdit(false)
        setDisplayDay(num)
    }
    const handleMapClick=()=>{
        showEdit(false)
        showMap(true)
        console.log("map clicked!")
    }
    const handleEditClick=()=>{
        showMap(false)
        showEdit(true)
        console.log("edit clicked!")
    }
    const handleSaveClick=()=>{
        setModal(true)
        document.body.style.overflow = 'hidden';
        console.log("save clicked!")
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
        console.log("result returned in gitDir is:")
        console.log(result2)
        return result2
    }
    function getRequest(idx, mode){
        let dirRequest={
            origin: new window.google.maps.LatLng(hotelData[0].lat, hotelData[0].lng),
            destination: new window.google.maps.LatLng(hotelData[0].lat, hotelData[0].lng),
            travelMode: mode,
            waypoints: waypointsList[idx]
        }
        return dirRequest
    }
    
    
    (async() => {
        console.log("async f")
        const aDir=await getDir(getRequest(displayDay-1, mode))
        setDir(aDir)
        const timeData=[]
        for(let i=0;i<aDir.routes[0].legs.length;i++){
            timeData.push(aDir.routes[0].legs[i].duration.text)
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
                        <MapIcon className="Icon"  sx={{ fontSize: 40}} onClick={handleMapClick} />
                        <EditIcon className="Icon" sx={{ fontSize: 40}} onClick={handleEditClick}/>
                        <SaveIcon className="Icon" sx={{ fontSize: 40}} onClick={handleSaveClick}/>
                    </div>
                </div>
                <DayView dayNumber = {displayDay} key = {displayDay} />
                <div className="floatingPanel">
                    <p id="panelIntro">Mode of Travel:</p>
                    <select id="selectBox" value={mode} onChange={e=>setMode(e.target.value)}>
                    <option value={window.google.maps.TravelMode.DRIVING}>Driving</option>
                    <option value={window.google.maps.TravelMode.WALKING}>Walking</option>
                    <option value={window.google.maps.TravelMode.BICYCLING}>Bicycling</option>
                    <option value={window.google.maps.TravelMode.TRANSIT}>Transit</option>
                    </select>
                </div> 
                {displayContent()}
                {showModal && <Modal toClose={closeModal}/>}
            </div>
            <Footer />
        </div>
    )
}

export default TripView