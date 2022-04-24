//import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from '../assets/Logo.png';
import '../css/Login.css';
import {Link} from "react-router-dom"
import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import { useContext } from 'react';
import AppContext from '../AppContext';
const axios = require("axios")
function Login() {
    const myContext=useContext(AppContext)
    const [loggedin, setLoggedin] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
  
    useEffect(() => {
        setLoggedin(false)
    }, [loggedin])
  
    const handleSubmit = e => {
        (async()=>{
            try{
                const res=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/login`, {username: name, password: password})
                if(res.status===200){
                    setName("")
                    setPassword('')
                    alert("Logged in!")
                    setLoggedin(true)
                    myContext.setCurrentUser(res.data)
                }
            }
            catch(error){
                alert("Please enter valid username and password!")
            }
        })()
    }
    
    const renderForm = (
        <div className="loginContainer">
            <div className="card">
                <form>
                    <div className='logoContainer'>
                        <img src={Logo} alt="logo"/>
                    </div>
                    <h1 className='heading'>Welcome back Traveler!</h1>
                    <div className="form-row">
                        <label>User Name</label>
                        <input type="text" value={name} required onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label>Password</label>
                        <input type="password" value={password} required onChange={e => setPassword(e.target.value)} />
                    </div>
                    <Button onClick={()=>handleSubmit()} style={{width:"100%", background: "grey"}} size="large" variant="contained">Login</Button>
                    <div>
                        <h3>Not yet a member?</h3>
                        <h3><Link to="/signup">Create an Account</Link>  here.</h3>
                    </div>
                </form>
            </div>
       </div>
    )
    if (true) {
        return (
            <div className="loginContainer">
                <div className="form-row">
                    {loggedin ?<Navigate to = "/"/>: renderForm}
                </div>
            </div>
        )
    }
}

export default Login