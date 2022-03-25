import React, { useState} from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../css/Settings.css"



const Settings=()=>{
    // var, modify the var
    const [alt, setAlt] = useState("");
    const[visible, setVisible] = useState(false);
    
    function handleInfoPopUp(val) {
        // render a component 
        // compontent -> info page 
        /*setAlt("I was clicked");
        setVisible(true);

        console.log(alt);
        alert("Blah");*/
        console.log("in handleInfoPopup")
        console.log(val)
        if (val === "info") {
            setAlt("info")
        }
        else if (val === "pass") {
            setAlt("pass")
        }
        else if (val === "email") {
            setAlt("email")
        }
        else if (val === "accnt") {
            setAlt("accnt")
        }
        else {
            setAlt("")
        }
    }

    const visibleFunction = () => {
        <div>
            <h1>Hi</h1>
        </div>
    }


        
    return(
        
        <div>
            <Header />

            
            <div class="flex-container">
                <div class="flex-child" id ="div1">
                    <h4 class="col-h1">Settings</h4>
                    <div id= "info" onClick = {() => handleInfoPopUp("info")}>
                        <p>See your account information</p>
                    </div>
                    <div id ="pass" onClick = {() => handleInfoPopUp("pass")}>
                        <p>Change your password</p>
                    </div>
                    <div id = "email" onClick = {() => handleInfoPopUp("email")}>
                        <p>Verify your email</p>
                    </div>
                    <div id ="accnt" onClick = {() => handleInfoPopUp("accnt")}>
                        <p>Deactivate your account</p>
                    </div>
                </div>

                <div  id="vertical-line" class ="vertical-row"></div>

                <div className="rightContent"><RightDisplay alt = {alt} /></div>
           </div>
               
            
            <Footer />
        </div>
           
    )
}

/*if (props.alt === "infor") {
    /..
}
else {
    if (props.alt === "pass") {
        ...
    }
    else {
        display
    }
}*/

const RightDisplay = (props) => {
    return (
        <React.Fragment>
            {
            props.alt === "info" ? <AccountInformation /> : props.alt === "pass" ? <ChangePassword />: props.alt === "email" ? <Verify/>: props.alt === "accnt" ? <Deactivate />: <React.Fragment />
            }
        </React.Fragment>
    )
}

const AccountInformation = () => {
    return (
        <div id="divinfo">
        <h4 class="col-h2">Account Settings</h4>
        <p>First Name: n/a</p>
        <p>Last Name: n/a</p>
        <p>Date of Birth: mm/dd/yyyy</p>
        <p>Email: n/a</p>
        </div>
    )
}
const ChangePassword = () => {
    return (
        <div id ="divpass" >
        <h4 class="col-h2">Passwords</h4>
        <p>Current Password:</p>
        <p>New Password:</p>
         <p>Confirm New Password:</p>
        <button className="btn">Reset Password</button>
        </div>
    )
}
const Verify = () => {
    return (
        <div id = "divemail">
        <h4 class="col-h2">Email</h4>
        <p>Enter email:</p>
        <button className="btn">Verify Email</button>
        </div>
    )
}
const Deactivate = () => {
    return (
        <div id ="divtemp">
        <h4 class="col-h2">Edit Account</h4>
        <p>Please enter your username:</p>
        <p>Please enter password: </p>
        <button className="btn">Deactivate Account</button>
        </div>
    )
}

export default Settings