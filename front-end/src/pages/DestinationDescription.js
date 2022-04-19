import { useEffect,useState } from "react";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import ActivityTop5 from "../components/ActivityTop5"
import "../css/DestinationDescription.css"
const axios=require("axios")
const Buffer=require('buffer').Buffer;

const DestinationDescription=()=>{
    const {state}=useLocation();
    const {destination}=state;
    const [activityData,setActivityData]=useState([])
    const fetchData=async()=>{
        const activitiesReceived=await axios.post("http://localhost:3000/destinationDescription/getTop5",{"top5":destination.top5})
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
        <div className="view">
            <h1 className="title">{destination.name}</h1>
            <div className="content">
            <div className="description">
                <h1>Description</h1>
                <p className="descriptionContent">{destination.description}</p>
            </div>
            <div className="top5">
                <h1>Top 5 tourist attractions:</h1>
                <div className="activities">
                {activityData.map((activity,i)=>(
                    <ActivityTop5 activity={activity} id={i}/>
                ))}
                </div>
            </div>
            </div> 
            {/* end of content */}
            <Link to="/" className="link">Plan a trip to {destination.name}</Link>
        </div>
    )
}
export default DestinationDescription