import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import '../css/Login.css'
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import axios from "axios";
import { Link,useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Image from "../images/loginimage.png";
import Logo from "../images/logo.png";

import jwt_decode from "jwt-decode";

function Login() {
    const navigate=useNavigate();
    let loginvalues = {
        email: "",
        password: "",
        error: {
            email: "",
            password: ""

        }
    };
    const [Logindata, setlogindata] = useState(loginvalues);
    
    const [apidata, setapidata] = useState([]);
    const [logedUser, setlogeduser] = useState(false);

    //mounting phase of the component 
    useEffect(() => {
        // on mounting phase here i hit the api and get the response
       
    }, []);
    /// here is onchange function 
    const commonchange = (e) => {
        let error = { ...Logindata.error };
        if (e.target.value === "") {

            error[e.target.name] = `${e.target.name} is Required`;
        } else {

            error[e.target.name] = "";
        }
        setlogindata({ ...Logindata, [e.target.name]: e.target.value, error });

    };
    const handlesumit =async () => {
      
            const response = await axios.post("https://qurey-system-org.onrender.com/register/signin",{...Logindata});

//storing token in localStorage 
if(response){
    localStorage.setItem("token",response.data);
   
   const token = localStorage.getItem("token");
   const existuser=jwt_decode(token);
   existuser.role==="admin" ? navigate('/Navbar' ): navigate('/Sidebar')
   
 
}



//    logedUser? useNavigate("/homepage"):<></>;
    };
    return (

        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                <div >
                        <img  src={Logo}/>
                    </div>  
                </Grid>
                <Grid item xs={5}>
                    <div className="formcontainer" >
                        <CssVarsProvider>
                            <main >

                                <Sheet
                                    sx={{
                                        maxWidth: 400,
                                        mx: 'auto', // margin left & right
                                        my: 4, // margin top & botom
                                        py: 3, // padding top & bottom
                                        px: 2, // padding left & right
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2,
                                        borderRadius: 'sm',
                                        boxShadow: 'md',
                                    }}

                                    variant="outlined"
                                >
                                    <div>

                                        <Typography level="body2">Sign in to continue.</Typography>
                                    </div>
                                    <TextField
                                        // html input attribute
                                        name="email"
                                        type="email"
                                        onChange={(e) => commonchange(e)}
                                        value={Logindata.email}
                                        placeholder="ranjith@email.com"
                                        // pass down to FormLabel as children
                                        label="Email"
                                    /><br />
                                    <span style={{ color: 'red' }}>{Logindata.error.email}</span>
                                    <TextField
                                        name="password"
                                        type="password"
                                        onChange={(e) => commonchange(e)}
                                       value={Logindata.password}
                                        label="password"
                                    /><br />
                                    <span style={{ color: "red" }}>{Logindata.error.password}</span>
                                    <Button
                                        sx={{
                                            mt: 1, // margin top
                                        }}
                                        onClick={handlesumit}
                                        component={Link}
                                        
                                    >
                                        Log in
                                    </Button>

                                    Don&apos;t have an account?
                                    <Button component={Link} to="/Signup" size="large" variant='Outlined' color="info">
                                        Sign UP!
                                    </Button>

                                </Sheet>
                            </main>
                        </CssVarsProvider>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className="imagecontainer">
                        <img className="image" src={Image}/>
                    </div>

                </Grid>
            </Grid>

        </>




    );
}
export default Login;