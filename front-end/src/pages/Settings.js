import { useRef } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../css/Settings.css"



const Settings=()=>{
    var info = document.querySelector ("#info");
    var divinfo = document.querySelector ("#divinfo");
    var pass = document.querySelector("#pass");
    var divpass = document.querySelector("#divpass");
    var email = document.querySelector("#email");
    var divemail = document.querySelector("#divemail");
    var accnt = document.querySelector("#accnt");
    var divtemp = document.querySelector("#divtemp");

    info.onclick = function (event){
        divinfo.classList.remove("hidden");
        divpass.classList.add("hidden");
        divemail.classList.add("hidden");
        divtemp.classList.add("hidden");

    }
    pass.onclick = function (event){
        divpass.classList.remove("hidden");
        divinfo.classList.add("hidden");
        divemail.classList.add("hidden");
        divtemp.classList.add("hidden");
    }

    email.onclick = function (event){
        divpass.classList.add("hidden");
        divinfo.classList.add("hidden");
        divemail.classList.remove("hidden");
        divtemp.classList.add("hidden");
    }

    accnt.onclick = function (event){
        divpass.classList.add("hidden");
        divinfo.classList.add("hidden");
        divemail.classList.add("hidden");
        divtemp.classList.remove("hidden");
    }

        
    return(
        
        <div>
            <Header />

            <p>This is Settings!</p>
            <div class="flex-container">
                <div class="flex-child" id ="div1">
                    <h4 class="col-h1">Settings</h4>
                    <div id= "info">
                        <p>See your account information</p>
                    </div>
                    <div id ="pass">
                        <p>Change your password</p>
                    </div>
                    <div id = "email">
                        <p>Verify your email</p>
                    </div>
                    <div id ="accnt">
                        <p>Deactivate your account</p>
                    </div>
                </div>

                <div  id="vertical-line" class ="vertical-row"></div>

                <div class="flex-child" id ="div2">
                    <div id="divinfo" class="hidden">
                        <h4 class="col-h2">Account Settings</h4>
                        <p>First Name: N/A</p>
                        <p>Last Name: N/A</p>
                        <p>Date of birth: N/A</p>
                        <p>Email: N/A</p>
                    </div>
                    <div id ="divpass" class="hidden">
                        <h4 class="col-h2">Passwords</h4>
                        <p>Current Password:</p>
                        <p>New Password:</p>
                        <p>Confirm New Password:</p>
                        <button>Reset Password</button>
                    </div>
                    <div id = "divemail" class="hidden">
                        <h4 class="col-h2">Email</h4>
                        <p>Enter email:</p>
                        <button>Verify Email</button>
                    </div>
                    <div id ="divtemp" class="hidden">
                        <h4 class="col-h2">Edit Account</h4>
                        <p>Please enter your username:</p>
                        <p>Please enter password: </p>
                        <button>Deactivate Account</button>

                    </div>
                </div>
           </div>
               
            
            <Footer />
        </div>
           
    )
}

export default Settings