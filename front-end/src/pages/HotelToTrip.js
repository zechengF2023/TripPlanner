import {useLocation} from "react-router-dom"
import {useState}  from 'react'; 
import { fontSize } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AppContext from '../AppContext';
const axios=require("axios")
const Buffer=require('buffer').Buffer;

const HotelToTrip=props=>{
    let navigate = useNavigate(); 
    const myContext=useContext(AppContext)
    const planTrip=activitiesList=>{
        let resultList=[]
        for(let i=0;i<myContext.duration;i++){
            resultList.push([])
        }
        console.log(resultList)
        let counter=0
        while(counter<activitiesList.length){
            for(let i=0;i<myContext.duration;i++){
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
            const activitiesReceived=await axios.post("http://localhost:3000/getDestinationActivities",{destination:myContext.destination})
            const activities=activitiesReceived.data
            activities.forEach(item => {
                item.image="data:image/jpeg;base64,".concat(Buffer.from(item.image.data).toString("base64"))
            })
            const plannedActivities=planTrip(activities)
            navigate("/trip", {state:{actiData:plannedActivities}})
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