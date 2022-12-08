import React, { useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormGroup from '@mui/material/FormGroup';
import { useNavigate ,NavLink} from 'react-router-dom';



function Dashboard({children}) {

    const navigate = useNavigate(); 
    const handlelogout = () => {
        localStorage.clear("token") ? navigate('/Login') : <></>

    }
    return (
      <>
            <Box sx={{ flexGrow: 1 }}>
                <FormGroup>
                </FormGroup>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" component="div" >
                           
                         <NavLink to='/Adminpage'>Assign  mentor</NavLink>
                        </Typography>
                       
                       
                        

                        
                    </Toolbar>
                    
                </AppBar>
            </Box>
         
        </>
    );
}
export default Dashboard;