import {useLocation} from "react-router-dom"
import {useState}  from 'react'; 
import { fontSize } from "@mui/system";
import { useNavigate } from "react-router-dom";
const axios=require("axios")
const Buffer=require('buffer').Buffer;

const HotelToTrip=props=>{
    let navigate = useNavigate(); 
    const {state}=useLocation()
    const hotelData=state.article
    const duration=state.duration
    const destination=state.destination
    const [activityData,setActivityData]=useState([]);
    const planTrip=activitiesList=>{
        let resultList=[]
        for(let i=0;i<duration;i++){
            resultList.push([])
        }
        console.log(resultList)
        let counter=0
        while(counter<activitiesList.length){
            for(let i=0;i<duration;i++){
                if(counter<activitiesList.length){
                    resultList[i].push(activitiesList[counter])
                    counter++
                }
                else{
                    counter++
                    break;
                }
            }
        }
        return resultList;  
    }
    const toTrips=async ()=>{
        try{
            const activitiesReceived=await axios.post("http://localhost:3000/getDestinationActivities",{destination:destination})
            // activitiesReceived.data.forEach((item)=>{
            //     item.image="data:image/jpeg;base64,".concat(Buffer.from(item.image.data).toString("base64"))
            //     setActivityData((activityData=>[...activityData, item]))
            // })
            const activities=activitiesReceived.data
            activities.forEach(item => {
                item.image="data:image/jpeg;base64,".concat(Buffer.from(item.image.data).toString("base64"))
            })
            const plannedActivities=planTrip(activities)
            navigate("/trip", {state:{actiData:plannedActivities, hotelData, duration, destination}})
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <button onClick={toTrips} style={{fontSize:"3vh"}}>Continue to view activities</button>
    )
}

export default HotelToTrip