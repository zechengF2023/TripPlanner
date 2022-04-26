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
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Login from '@mui/icons-material/Login';
import { MenuItemUnstyled } from "@mui/base";
const Header=()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const logOut=()=>{
        localStorage.removeItem("user")
        alert("Logged out!")
    }
    return (
        <div className="header">
            {/* Logo will send user back to homepage */}
            <div className="headerLeft">
                <Link to="/">
                    <img className="headerImage" alt="Logo" src={logo} />  
                </Link>    
            </div>
            
            <div className="headerRight">
                <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Link to="/profile">Trips</Link>
                    <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>
                            J
                        </Avatar>
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
                    <Link to="/profile">
                        <MenuItem>
                        <Avatar/> <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Profile</h4>
                        </MenuItem>
                    </Link>
                    <Link to="/settings">
                        <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small"/>
                        </ListItemIcon>
                            <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Settings</h4>
                        </MenuItem>
                    </Link>
                    {localStorage.getItem("user")==null && 
                        <MenuItem>
                        <Link to="/login">
                            <ListItemIcon>
                                <Logout fontSize="small"/>
                            </ListItemIcon>
                                {/* {loggedIn && (
                                    <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Login</h4>
                                )}
                                {!loggedIn && (
                                    <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Logout</h4>
                                )} */}
                            <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Login</h4>
                        </Link>
                        </MenuItem>
                    }
                    {localStorage.getItem("user")!=null && 
                        <MenuItem>
                        <div onClick={()=>{logOut()}}>
                        <ListItemIcon>
                                <Login fontSize="small"/>
                            </ListItemIcon>
                        <h4 style={{textDecoration:`none`, margin:`0px`, color: `black`}}>Logout</h4>
                        </div>
                        </MenuItem>
                    }
                </Menu>
                </React.Fragment>
            </div>
        </div>
    )
}

export default Header