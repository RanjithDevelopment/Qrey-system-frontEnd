import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/qureypage.css";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Sidebar from "./Sidebar";


function Querypage() {
  const token = localStorage.getItem("token")
  
 useEffect(()=>{
  async function getData() {
    const apidata = await axios.get("https://qurey-system-org.onrender.com/Qurey/get", {
      headers: {
        'accesstoken': token,
      }
    });
    setResultData(apidata.data.reverse());
   console.log(resultData[0].QureyNO);
  }
  getData();
 },[]);
  const [resultData, setResultData] = useState([]);
//too delete the qurey in database
  const handledelete= async(id)=>{
    await axios.delete(`https://qurey-system-org.onrender.com/Qurey/delete/${id}`,{
      headers: {
        'accesstoken': token,
      }
    });
    };
   
  return (
    <>
    
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={5}>
          <div className="conatainer">

            <h1>Qurey page</h1>
            <Grid container spacing={2} >
              <Grid item xs={4}>
                <Button variant="outlined">+ create Qurey</Button>
                { resultData.map((data,index) => {
                  return (<div className="showqureies">
                    <Card sx={{ minWidth: 275 }} key={index}>
                      <CardContent>
                      <Typography  variant="h4" className="qustions" gutterBottom>
                         QureyCategory:{data.QureyNO}
                        </Typography>
                        <Typography  variant="h6"  gutterBottom>
                         QureyCategory:{data.category}
                        </Typography>
                        <Typography  variant="h6"  gutterBottom>
                         QureyCategory:{data.title}
                        </Typography>
                        <Typography  variant="h6"  gutterBottom>
                         Assigned to :{data.mentor}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14 }} color="text.secondary" component="div">
                         QureyLanguage:{data.language}
                        </Typography>
                        
                        <Typography variant="body2">
                          Description:<br/>{data.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={()=>handledelete(data._id)}>close</Button>
                      </CardActions>
                    </Card>
                  </div>)
                })
                }
              </Grid>
              <Grid item xs={4}>
              </Grid>
            </Grid>

          </div>
        </Grid>
        <Grid item xs={5} >
          
          <h1 className="qureyhead">Your current qurey appear here</h1>
          <div className="recent-container">
            <div className="content">
              <h1 className="qustions">QureyNo :</h1>
              <h3 className="answers">{resultData[0].QureyNO}</h3>
              <hr></hr>
              <h1 className="qustions">QureyTitle: </h1>
              <h3 className="answers">{resultData[0].title}</h3>
            <h1 className="qustions">
              AssignedTo
            </h1>
                <h3 className="answers">{resultData[0].mentor}</h3>
            
                
              
            </div>
          </div>
      
        </Grid>
      </Grid>
    </>
  );
}


export default Querypage;