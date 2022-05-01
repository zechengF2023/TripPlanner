import { useEffect,useState } from "react";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import ActivityTop5 from "../components/ActivityTop5"
import "../css/DestinationDescription.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
const axios=require("axios")
const Buffer=require('buffer').Buffer;

const DestinationDescription=()=>{
    const {state}=useLocation();
    const {destination}=state;
    const [activityData,setActivityData]=useState([])
    const fetchData=async()=>{
        const activitiesReceived=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/destinationDescription/getTop5`,{"top5":destination.top5})
        activitiesReceived.data.forEach(item => {
            item[0].image="data:image/jpeg;base64,".concat(Buffer.from(item[0].image.data).toString("base64"))
            setActivityData(activityData=>[...activityData, item[0]])
        });
    }
    useEffect(()=>{
        setActivityData([])
        fetchData()
    },[])
    return(
        <div>
        <Header></Header>
        <div className="ddView">
            <h1 className="ddTitle">{destination.name}</h1>
            <div className="ddContent">
            <div className="ddDescription">
                <h1>Description</h1>
                <p className="ddDescriptionContent">{destination.description}</p>
            </div>
            <div className="top5">
                <h1>Top 5 tourist attractions:</h1>
                <div className="ddActivities">
                {activityData.map((activity,i)=>(
                    <ActivityTop5 activity={activity} id={i}/>
                ))}
                </div>
            </div>
            </div> 
            {/* end of content */}
            <div className="ddLinkDiv">
            <Link to="/" className="ddLink">Plan a trip to {destination.name}</Link>  
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}
export default DestinationDescription