import "../css/Header.css"
import logo from "../assets/Logo.png"
import {Link} from "react-router-dom"
import React from "react"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Login from '@mui/icons-material/Login';
import { useNavigate } from "react-router";
const Header=()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate=useNavigate()
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const logOut=()=>{
        localStorage.removeItem("user")
        localStorage.removeItem("userFirst")
        alert("Logged out!")
    }
    const toMyTrips=()=>{
        if(localStorage.getItem("user")===null){
            alert("Please log in to view saved trips")
        }
        else{
            navigate("/myTrips")
        }
    }
    const toProfile=()=>{
        if(localStorage.getItem("user")===null){
            alert("Please log in to view profile")
        }
        else{
            navigate("/profile")
        }
    }
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    <img className="headerImage" alt="Logo" src={logo} />  
                </Link>    
            </div>
            <div className="headerRight">
                <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    {/* <div onClick={()=>toMyTrips()}>Trips</div> */}
                    <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {localStorage.getItem("userFirst")!=null &&
                        <Avatar sx={{ width: 45, height: 45 }}>
                            {localStorage.getItem("userFirst")}
                        </Avatar>
                        }   
                        {localStorage.getItem("userFirst")===null &&
                        <Avatar sx={{ width: 45, height: 45, fontSize: 20 }}>
                            Hello
                        </Avatar>
                        }   
                    </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <div onClick={()=>toProfile()}>
                        <MenuItem>
                        <Avatar/> <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Profile</h4>
                        </MenuItem>
                    </div>
                    {/* <Link to="/settings">
                        <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small"/>
                        </ListItemIcon>
                            <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Settings</h4>
                        </MenuItem>
                    </Link> */}
                    <div onClick={()=>{toMyTrips()}}>
                        <MenuItem>
                        <ListItemIcon>
                                <EventAvailableIcon fontSize="medium"/>
                        </ListItemIcon>
                        <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>My Trips</h4>
                        </MenuItem>
                        </div>
                    {localStorage.getItem("user")==null && 
                        <Link to="/login" className="loginLink">
                        <MenuItem>
                            <ListItemIcon>
                                <Login fontSize="medium"/>
                            </ListItemIcon>
                            <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Login</h4>
                        </MenuItem>
                        </Link>
                    }
                    {localStorage.getItem("user")!=null && 
                        <div onClick={()=>{logOut()}}>
                        <MenuItem>
                        <ListItemIcon>
                                <Logout fontSize="medium"/>
                        </ListItemIcon>
                        <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Logout</h4>
                        </MenuItem>
                        </div>
                    }
                </Menu>
                </React.Fragment>
            </div>
        </div>
    )
}

export default Header