import "../css/ContactModal.css"
import { useNavigate } from "react-router-dom"
const ContactModal=({toClose})=>{
    let navigate=useNavigate();
    const toHome=()=>{
        toClose();
        navigate("/home")
    }
    return(
        <div className="screen">
            <div className="modal">
                <div className="title">
                    <p>Form Submitted!</p>
                </div>
                <div className="btns">
                    <button id="continueBtn" onClick={()=>toClose()}>Continue reporting</button>
                    <button id="homeBtn" onClick={()=>toHome()}>Return to home</button>
                </div>
            </div>
        </div>
    )
}

export default ContactModal
