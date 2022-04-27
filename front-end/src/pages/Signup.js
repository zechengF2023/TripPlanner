import Button from '@mui/material/Button';
import Logo from '../assets/Logo.png';
import '../css/Signup.css';
import React, {useState} from "react";
import { useNavigate } from 'react-router';
const axios = require("axios")
function SignUp() {
    const [first, setFirst]=useState('')
    const [last, setLast]=useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    const handleSubmit = async() =>{
        try{
            const res=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/signup`, {first, last, username, password})
            if(res.data==="duplicate"){
                alert("The username already exists. Please sign in.")
            }
            else{
                alert("Logged in!")
                localStorage.setItem("user",res.data.username)
                localStorage.setItem("userFirst", res.data.first)
                navigate(-2)
            }
        }
        catch(error){
            console.log(error)
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
                        <label>Username</label>
                        <input type="text" value={username} required onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label>Create a Password</label>
                        <input type="password" value={password} required onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="requirements">
                        <p>* Please fill in all fields. </p>
                        <p>* Username should be your email address. </p>
                        <p>* Password should be at least six characters. </p>
                    </div>
                    <Button style={{width:"100%", background: "grey"}} size="large" variant="contained" onClick={()=>{handleSubmit()}}>Join</Button>
                    <div>
                        {/* disabled for routing purpose */}
                        {/* <h3>Already a member?</h3>
                        <h3><Link to="/login">Sign In</Link> using your TripPlanner account.</h3> */}
                    </div>
                </form>
            </div>
        </div>
    );
    return (
        <div className="signupContainer">
            <div className="login-form">
                {renderForm}
            </div>
        </div>
    );
}

export default SignUp;