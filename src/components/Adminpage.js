import React, { useState, useEffect } from "react";
import "../css/admin.css";

import axios from "axios";
import Dashboard from "./Dasboard";

function Adminpage() {
    const[mentor,setMentor]=useState("");
    console.log(mentor);
    useEffect(()=>{
        getdata();
    },[])
    const token = localStorage.getItem("token");
    async function getdata() {
        const apidata = await axios.get("https://qurey-system-org.onrender.com/Qurey/get", {
            headers: {
                'accesstoken': token,
            }
        });
        setResultData(apidata.data.reverse());

    }
    //common change 
    const commonOnChange=(e)=>{
setMentor(e.target.value);
    }
    const handleAssgin=async (id)=>{
const updateData=await axios.put(`https://qurey-system-org.onrender.com/Qurey/update/${id}`,{
    ...mentor
},{
    headers: {
        'accesstoken': token,
    }});
    }
      
    const [resultData, setResultData] = useState([]);
  

    return (
        <>

           
                <Dashboard/>
              
                    {
                        resultData.map((data, index) => {
                           
                            return (
                                <div className="admin_card" key={index}>
                                    <h2>Assigning a mentor to Queries</h2>
                                    <h4>student name:{data.studentemail}</h4>
                                    <h4>Qurey number:{data.QureyNO}</h4>
                                    <input onChange={(e)=>commonOnChange(e)}/>
                                    <br/>
                                    <button className="btn btn-info" onClick={()=>{handleAssgin(data._id)}}>Assign</button>
                                </div>
                            )
                        })

                    }
            

        </>

    )

}
export default Adminpage;