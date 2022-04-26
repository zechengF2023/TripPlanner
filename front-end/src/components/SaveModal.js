import { useNavigate } from "react-router-dom"
import {useState} from "react"
import "../css/SaveModal.css"
import { useSearchParams } from "react-router-dom";
const axios=require("axios")

const SaveModal=({toClose,actiData})=>{
    const [searchParams]=useSearchParams()
    let navigate=useNavigate()
    const [isSaved, setSaved]=useState(false)    
    const destination=searchParams.get("destination")
    const startDate=searchParams.get("startDate")
    const endDate=searchParams.get("endDate")
    const hotel=searchParams.get("hotel")
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
        dataToUpload.username=localStorage.getItem("user")
        dataToUpload.activities=activities
        dataToUpload.hotel=hotel
        dataToUpload.city=destination
        dataToUpload.startDate=startDate
        dataToUpload.endDate=endDate
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