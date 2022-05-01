import '../css/Landing.css';
import Logo from '../assets/logo_2.png';
import Button from '@mui/material/Button';

const Landing=()=> {

    return (
       <div className="landingContainer">
          <div className="card">
            <div>
                <div className='logoContainer'>
                    <img src={Logo}/>
                </div>
                <Button style={{width:"100%", background: "grey"}} size="large" variant="contained" href="/signup">Sign Up</Button>
                <Button style={{width:"100%", background: "grey", marginTop: "5px"}} size="large" variant="contained" href="/login">Login</Button>
            </div>
          </div>
       </div>
    )
}

export default Landing