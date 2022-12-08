import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Querypage from "./components/Qureypage";
import Sidebar from "./components/Sidebar"
import Createqurey from "./components/createQurey";
import Adminpage from "./components/Adminpage";
import Dashboard from "./components/Dasboard";

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Sidebar'element={<Sidebar/>}/>
    <Route path='/Qureypage' element={<Querypage/>}/>
     <Route path='/createQurey' element={<Createqurey/>}/>
     <Route path='/Adminpage' element={<Adminpage/>}/>
    <Route path='/Dasboard' element={<Dashboard/>}/>
 </Routes>
 {/* <Sidebar>
  <Routes>
  
    <Route path='/Qureypage' element={<Querypage/>}/>
     <Route path='/createQurey' element={<Createqurey/>}/>
     <Route path='/Adminpage' element={<Adminpage/>}/>
   </Routes>
   
  
</Sidebar> */}
   </BrowserRouter> 

    
    
    </div>
  );
}

export default App;
