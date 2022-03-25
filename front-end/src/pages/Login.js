import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from '../assets/Logo.png';
import '../css/Login.css';
import {Link} from "react-router-dom"


const Login=()=> {

    // function logIn(e) {
    //     e.preventDefault();
    //     setLoggedIn(true); 
    // }

    return (
       <div className="loginContainer">
          <div className="card">
             <div className='logoContainer'>
                <img src={Logo}/>
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
}

export default Login