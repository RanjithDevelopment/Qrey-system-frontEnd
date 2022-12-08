import React, { useState } from "react";
import "../css/qureypage.css";
import Button from '@mui/material/Button';
import Sidebar from "./Sidebar";
import Grid from '@mui/material/Grid';
import axios from "axios";

function Createqurey() {
    /// here is onchange functi
    let qureyDetails = {
        category: "",
        language: "",
        title: "",
        description: "",
        error: {
            category: "",
            language: "",
            title: "",
            description: "",

        }
    };
    const [qureydata, setqureydata] = useState(qureyDetails);
    //common onchange function to store all the details about qurey
    const commonchange = (e) => {
        let error = { ...qureydata.error };
        if (e.target.value === "") {

            error[e.target.name] = `${e.target.name} is Required`;
        } else {

            error[e.target.name] = "";
        }
        setqureydata({ ...qureydata, [e.target.name]: e.target.value, error });

    };
    const token=localStorage.getItem("token");
    
    //to handle the form submiision
    const handleCreate = async() => {
       
      const insertedResponse = await axios.post("https://qurey-system-org.onrender.com/Qurey/create", {
        data:{
            category: qureydata.category,
            language: qureydata.language,
            title: qureydata.title,
            description: qureydata.description
        }
      },
      {headers: {
        'accesstoken':token,
      }});
     console.log(insertedResponse);
    
    };
    
    return (
        <>
       
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Sidebar />
                </Grid>
                <Grid item xs={8}>
                    <h1>Create Your Qurey</h1>

                    <h2>Topic</h2>

                    <div className="Selecbox">
                        <label className="label">category</label>
                        <select name="category" value={qureydata.category} onChange={(e) => { commonchange(e) }} className="form-select form-select-lg mb-3" id="selectbox" aria-label=".form-select-lg example">
                            <option selected>--select the category--</option>

                            <option value="zen class doubt">zen class doubt</option>
                            <option value="pre bootcamp doubt">pre bootcamp doubt</option>
                            <option value="placement doubt">placement doubt</option>
                            <option value="coordination doubt">coordination doubt</option>
                        </select>
                        <br />
                        <label className="label">prefered language for communication</label>
                        <select name="language" value={qureydata.language} onChange={(e) => { commonchange(e) }} className="form-select form-select-lg mb-3" id="selectbox" aria-label=".form-select-lg example">
                            <option selected>--select the language--</option>

                            <option value="tamil">tamil</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>


                        </select>
                    </div>
                    <h2>Details</h2>
                    <div className="details_container">
                        <label className="label">QureyTitle</label>
                        <input type="text" name="title" value={qureydata.title} onChange={(e) => { commonchange(e) }} className="form-control" placeholder="QureyTitle" aria-label="QureyTitle" aria-describedby="basic-addon1" />
                        <br />
                        <label className="label">Description of the qurey </label>
                        <textarea name="description" value={qureydata.description} onChange={(e) => commonchange(e)} className="form-control" placeholder="Description" aria-label="Description" aria-describedby="basic-addon1" />
                      

                    </div>
                    
                    <Button
            
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleCreate}
          >
            Create
          </Button>
                   
                </Grid>
            </Grid>
        </>
    )
}
export default Createqurey;