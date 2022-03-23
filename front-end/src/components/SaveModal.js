import { useNavigate } from "react-router-dom"
import {useState} from "react"
import "../css/SaveModal.css"
const SaveModal=({toClose})=>{
    let navigate=useNavigate()
    const [isSaved, setSaved]=useState(false)    
    const toSave=()=>{
        /*save operations*/
        setSaved(true)
    }
    const toHome=()=>{
        toClose();
        navigate("/home")
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