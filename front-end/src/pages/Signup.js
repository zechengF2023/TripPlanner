import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from '../assets/Logo.png';
import {Link} from "react-router-dom";
import '../css/Signup.css';
import React, {useState} from "react";
import {Navigate} from "react-router-dom";

const axios = require("axios")

function SignUp() {
    const [first, setFirst]=useState('')
    const [last, setLast]=useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState(null)
    const handleSubmit = async() =>{
        try{
            const res=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/signup`, {first, last, username, password})
            alert("Logged in!")
            // setSignedIn(true)
        }
        catch(error){
            alert("Please enter valid username and password")
        }
    }

    const renderForm = (
        <div className="signupContainer">
            <div className="card">
                <form>
                    <div className='logoContainer'>
                        <img src={Logo} alt="logo"/>
                    </div>
                    <h1 className='heading'>Welcome to TripPlanner!</h1>
                    <div className="form-row">
                        <label>First Name</label>
                        <input type="text" value={first} required onChange={e => setFirst(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label>Last Name</label>
                        <input type="text" value={last} required onChange={e => setLast(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label>Email Address</label>
                        <TextField style={{width:"75%"}} variant="standard" />
                    </div>
                    <div className="form-row">
                        <label>Username</label>
                        <input type="text" value={username} required onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label>Create a Password</label>
                        <input type="password" value={password} required onChange={e => setPassword(e.target.value)} />
                    </div>
                    <Button style={{width:"100%", background: "grey"}} size="large" variant="contained" onClick={()=>{handleSubmit()}}>Join</Button>
                    <div>
                        <h3>Already a member?</h3>
                        <h3><Link to="/login">Sign In</Link> using your TripPlanner account.</h3>
                    </div>
                </form>
            </div>
        </div>
    );
    return (
        <div className="signupContainer">
            <div className="login-form">
                {currentUser ?<Navigate to = "/"/>: renderForm}
            </div>
        </div>
    );
}

export default SignUp;