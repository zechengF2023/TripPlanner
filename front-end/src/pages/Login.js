//import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from '../assets/Logo.png';
import '../css/Login.css';
import {Link} from "react-router-dom"
import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

const axios = require("axios")

/*
const Login=()=> {

    // function logIn(e) {
    //     e.preventDefault();
    //     setLoggedIn(true); 
    // }

    return (
       <div className="loginContainer">
          <div className="card">
             <div className='logoContainer'>
                <img src={Logo} alt="logo"/>
             </div>
              <h1 className='heading'>Welcome back Traveler!</h1>
              <div className="form-row">
                  <label>User Name</label>
                  <TextField style={{width:"100%"}} variant="standard" />
              </div>
              <div className="form-row">
                  <label>Password</label>
                  <TextField style={{width:"100%"}} variant="standard" />
              </div>
              <Button onClick="logIn()" style={{width:"100%", background: "grey"}} size="large" variant="contained" href="/">Login</Button>
              <div>
                  <h3>Not yet a member?</h3>
                  <h3><Link to="/signup">Create an Account</Link>  here.</h3>
              </div>
          </div>
       </div>
    )
} */


function Login() {
    const [loggedin, setLoggedin] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
  
    useEffect(() => {
        setLoggedin(false)
        console.log(loggedin)
    }, [loggedin])
  
    const handleSubmit = e => {
        e.preventDefault()
        console.log(loggedin)
        axios
            .post(`${process.env.REACT_APP_SERVER_HOSTNAME}/login`, {name: name, password: password})
            .then((response) => {setLoggedin(response.data)})
            .catch(err => {console.log(`error! ${err}`)})
            setName('')
            setPassword('')
      
    }
    
    const renderForm = (
        <div className="loginContainer">
            <div className="card">
                <form onSubmit={handleSubmit}>
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
                    <Button onClick="logIn()" style={{width:"100%", background: "grey"}} size="large" variant="contained" href="/">Login</Button>
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