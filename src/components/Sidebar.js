import React,{useState}from "react";
import Logo from "../images/logo.png";
import "../css/sidebar.css";
import Grid from '@mui/material/Grid';
import {
    FaAllergies,FaHome, FaSignInAlt, FaRegIdBadge
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
    const menuItem = [
      
        {

            path: "/createQurey",
            name: "Create",
            icon: <FaRegIdBadge />
        },
        {

            path: "/Qureypage",
            name: "Queries",
            icon: <FaAllergies />
        }
    ];
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    return (
        <>
     
        <div className="container">
            <div style={{width:isOpen?"300px":"50px"}} className="sidebar" onClick={toggle}>
               
                <div className="top_section">
                    <Grid container spacing={2} >
                        <Grid item xs={2}>
                        <h1 style={{display:isOpen?"block":"none"}}className="username">Name</h1>
                            
                        </Grid>
                        <Grid item xs={2} >
                        <div style={{marginLeft:isOpen?"50px":"0px"}} className="bars" >
                            
                            <img style={{display:isOpen?"block":"none"}}  className="sidebar_img"  src={Logo} />
                        </div>
                        
                       
                        </Grid>
                    </Grid>
                </div>
                {
                    menuItem.map((item, index) => (

                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display:isOpen?"block":"none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))

                }
            </div>
            <main>{children}</main>
        </div>

        </>

    );



};
export default Sidebar;