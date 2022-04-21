import { useNavigate } from "react-router-dom"
import {useState} from "react"
import { useContext } from 'react';
import AppContext from '../AppContext';
import "../css/SaveModal.css"
const axios=require("axios")

const SaveModal=({toClose,actiData})=>{
    const myContext=useContext(AppContext)
    let navigate=useNavigate()
    const [isSaved, setSaved]=useState(false)    
    const dateToString=(dateObj)=>{
        return dateObj.getFullYear()+"-"+dateObj.getMonth()+"-"+dateObj.getDate()
    }
    const toSave=()=>{
        /*save operations*/
        let dataToUpload={}
        const activities=[]
        actiData.forEach(subArray=>{
            const activitiesForDays=[]
            subArray.forEach(activity=>{
                activitiesForDays.push(activity.name)
            })
            activities.push(activitiesForDays)
        })
        dataToUpload.activities=activities
        dataToUpload.hotel=myContext.hotel.name
        dataToUpload.city=myContext.destination
        dataToUpload.startDate=dateToString(myContext.checkin)
        dataToUpload.endDate=dateToString(myContext.checkout)
        const res=axios.post("http://localhost:3000/saveTrip",dataToUpload).then(setSaved(true))
    }
    const toHome=()=>{
        toClose();
        navigate("/")
    }
    const toProfile=()=>{
        toClose();
        navigate("/profile")
    }
    return(
        <div className="screen">
            <div className="modal">
                <div className="title">
                    {!isSaved && <p>Are you sure you want to save?</p>}
                    {isSaved && <p>Your trip is saved!</p>}
                </div>
                <div className="btns">
                    {!isSaved && <button className="continueBtn" onClick={()=>toClose()}>Continue editing</button>}
                    {!isSaved && <button className="saveBtn" onClick={()=>toSave()}>Save</button>}
                    {isSaved && <button className="homeBtn" onClick={()=>toHome()}>Return to home</button>}
                    {isSaved && <button className="profileBtn" onClick={()=>toProfile()}>View in my trips</button>}
                </div>
            </div>
        </div>
    )
}

export default SaveModal