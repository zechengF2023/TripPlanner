import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from '../assets/Logo.png';
import {Link} from "react-router-dom";
import '../css/Signup.css';

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

export default SignUp;