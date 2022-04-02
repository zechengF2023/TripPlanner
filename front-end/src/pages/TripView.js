import "../css/SpecificResult.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ResultMap from "../components/ResultMap"
import ResultFlowDiagram from "../components/ResultFlowDiagram"
import Modal from "../components/SaveModal"
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import MapIcon from '@mui/icons-material/Map';

import actiImg from "../assets/activity.jpeg"
import { useState } from "react"

const TripView=props=>{
    // number of days of this trip
    let days=2
    //destination city name//
    let destination="New York"
    // data of all the activities, each sublist is for one day
    let actiData=[[{"location": "NYU", "lat": 40.729603794934015,"lng":-73.99646407872974, "image":actiImg, "stay":30},{"location": "Washington Square", "lat": 40.73169582048705,"lng":-73.99712378852689,"image":actiImg, "stay":45}, {"location": "NYU Bookstore", "lat": 40.7292215,"lng":-73.9932385, "image":actiImg,"stay":35}],
                  [{"location": "Bobst Library", "lat":40.729793742025834, "lng":-73.99704954065322, "image":actiImg, "stay":200},{"location": "Stern School of Business", "lat": 40.729228370255534, "lng": -73.99624215337731,"image":actiImg, "stay":15}, {"location": "Tish School of the Arts", "lat": 40.72951832313394, "lng":-73.99357707600099, "image":actiImg,"stay":25}]]
    // data of the chosen hotel
    let hotelData=[{"location":"Lipton", "lat": 40.73163825016495, "lng":-73.99930411551414, "image":actiImg}]
    
    const [showModal, setShow]=useState(false)
    const renderDays=(days)=>{
        let dayList=[]
        for (let i=1;i<days+1;i++){
            dayList.push(<button className="dayIcon" key={i} onClick={()=>handleDayClick(i)}>Day{i}</button>)
        }
        return dayList
    }
    const dirL=[]
    for(let i=0;i<days;i++){
        dirL.push({"id":i, "val":null})
    }
    let [dirList, setDirections] = useState(dirL);
    const addDir=(i,val)=>{ //i is day number
      setDirections(
        dirList.map((dir)=>
          dir.id===i?{...dir, "val":val}:{...dir}
        )
      )
    }    
        const directionService=new window.google.maps.DirectionsService();
        const fakeWPList=[]
        const [dir, setDir]=useState(null)
        for(let z=0;z<3;z++){
            const locObj=new window.google.maps.LatLng(actiData[0][z].lat,actiData[0][z].lng)
            fakeWPList.push({location: locObj})
        }
        for(let z=0;z<3;z++){
            const locObj=new window.google.maps.LatLng(actiData[1][z].lat,actiData[1][z].lng)
            fakeWPList.push({location: locObj})
        }
        // for(let i=0;i<days;i++){
            const waypointsList=[]
            // for (let x=0;x<actiData[i].length;x++){
            //     const locObj=new window.google.maps.LatLng(actiData[i][x].lat,actiData[i][x].lng)
            //     waypointsList.push({location: locObj})
            // }
            directionService.route(
                {
                origin: new window.google.maps.LatLng(hotelData[0].lat, hotelData[0].lng),
                destination: new window.google.maps.LatLng(hotelData[0].lat, hotelData[0].lng),
                travelMode: window.google.maps.TravelMode.DRIVING,
                waypoints: fakeWPList,
                provideRouteAlternatives: false
                },
                (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK){
                    // console.log("Legs duration is:")
                    // console.log(result.routes[0].legs[0].duration)
                    console.log("success")
                    setDir(result)
                }
                else {
                    console.log("I'm run!")
                    console.error(`error fetching directions ${result}`);
                }
                }
            )
        // }
    
    const [displayId, setDisplay]=useState(1);
    const handleMapClick=()=>{
        setDisplay(days+1)
        console.log("map clicked!")
    }
    const handleEditClick=()=>{
        setDisplay(days+2)
        console.log("edit clicked!")
    }
    const handleSaveClick=()=>{
        setShow(true)
        document.body.style.overflow = 'hidden';
        console.log("save clicked!")
    }
    const closeModal=()=>{
        setShow(false)
        document.body.style.overflow="scroll";
    }

    const handleDayClick=num=>{
        setDisplay(num)
    }
    let timeData=[30, 20, 40, 35]
    const displayContent=()=>{
        if (displayId<=days){
            return <ResultFlowDiagram actiData={actiData[displayId-1]} hotelData={hotelData} timeData={timeData}></ResultFlowDiagram>
        }
        else if (displayId===days+1){
            return <ResultMap dir={null} actiData={actiData[0]} hotelData={hotelData} timeData={timeData}></ResultMap>
        }
        else if (displayId===days+2){
            return <p>This is edit</p>
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
                {displayContent(displayId)}
                {showModal && <Modal toClose={closeModal}/>} 
            </div>
            <Footer />
        </div>
    )
}

export default TripView