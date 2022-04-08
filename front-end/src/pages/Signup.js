import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from '../assets/Logo.png';
import {Link} from "react-router-dom";
import '../css/Signup.css';
import React, {useState} from "react";
import {Navigate} from "react-router-dom";

const axios = require("axios")

/*
const SignUp = () => {

    return (
        <div className="signupContainer">
            <div className="card">
                <div className='logoContainer'>
                <img src={Logo}/>
                </div>
                <h1 className='heading'>Welcome to TripPlanner!</h1>
                <div className="form-row">
                    <label>First Name</label>
                    <TextField style={{width:"75%"}} variant="standard" />
                </div>
                <div className="form-row">
                    <label>Last Name</label>
                    <TextField style={{width:"75%"}} variant="standard" />
                </div>
                <div className="form-row">
                    <label>Email Address</label>
                    <TextField style={{width:"100%"}} variant="standard" />
                </div>
                <div className="form-row">
                    <label>Create a Password</label>
                    <TextField style={{width:"100%"}} variant="standard" />
                </div>
                <Button style={{width:"100%", background: "grey"}} size="large" variant="contained" href="/login">Join</Button>
                <div>
                    <h3>Already a member?</h3>
                    <h3><Link to="/login">Sign In</Link> using your TripPlanner account.</h3>
                </div>
            </div>
        </div>
    );
}
*/

function SignUp() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [signedIn, setSignedIn] = useState(false)
  
    const handleSubmit = e =>{
        e.preventDefault()
        console.log((name))
        console.log((password))
        axios
            .post(`${process.env.REACT_APP_SERVER_HOSTNAME}/signup`, {name: name, password: password})
            .then((response) => {console.log(response)})
            .catch(err => {console.log(`error error error! ${err}`)})
        setSignedIn(true)
    }

    const renderForm = (
        <div className="signupContainer">
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className='logoContainer'>
                        <img src={Logo} alt="logo"/>
                    </div>
                    <h1 className='heading'>Welcome to TripPlanner!</h1>
                    <div className="form-row">
                        <label>First Name</label>
                        <TextField style={{width:"75%"}} variant="standard" />
                    </div>
                    <div className="form-row">
                        <label>Last Name</label>
                        <TextField style={{width:"75%"}} variant="standard" />
                    </div>
                    <div className="form-row">
                        <label>Email Address</label>
                        <TextField style={{width:"100%"}} variant="standard" />
                    </div>
                    <div className="form-row">
                        <label>Username</label>
                        <input type="text" value={name} required onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label>Create a Password</label>
                        <input type="password" value={password} required onChange={e => setPassword(e.target.value)} />
                    </div>
                    <Button style={{width:"100%", background: "grey"}} size="large" variant="contained" href="/login">Join</Button>
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
                {signedIn ?<Navigate to = "/"/>: renderForm}
            </div>
        </div>
    );
}

export default SignUp;