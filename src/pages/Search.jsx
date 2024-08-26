 
import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

import React from 'react';
import { Button, message } from 'antd';

import { useNavigate } from "react-router-dom";


const Search=()=>{

  const holdNavigate=useNavigate();
  const gotoDisplay=()=>{
    holdNavigate("/display")
  }

  const [Doc,setDoc]=useState("")
  const [mydata,setmydata]=useState([])

  const handlesearch=()=>{
    let url=`http://localhost:3000/Patients/?doctor=${Doc}`
    axios.get(url).then((res)=>{
      setmydata(res.data)
    })
  }

  let ans;
  if(mydata.length>0){
   ans=mydata.map((Key)=>{
    return(
      <>
      <tr>
        
        <td>{Key.name}</td>
        <td>{Key.city}</td>
        <td>{Key.age}</td>
        <td>{Key.adhar}</td>
        <td>{Key.doctor}</td>
      
      </tr>
      </>
    )
  })}
 

  return(
    <>
    <section style={{display:"block"}}>
    <div style={{display:"block"}}>

     <b style={{marginLeft:"500px",fontSize:"20px"}}>Search</b>
     <input style={{marginLeft:"10px",marginTop:"3%",width:"300px"}} type="text" value={Doc} onChange={(e)=>{setDoc(e.target.value)}} />
     <button onClick={handlesearch} style={{marginLeft:"10px",borderRadius:"10px",backgroundColor:"gray",color:"white",marginBottom:"20px"}}>Search</button>
     </div> 
     <div style={{marginLeft:"350px",width:"50%"}}> 
     <Table striped bordered hover >

      <tr>
           <th>Patients Name</th>
           <th>City</th>
           <th>Age</th>
           <th>Aadhar No.</th>
           <th>Doctor</th>
      </tr>
    
      <tbody>
        {ans}
      </tbody>
      </Table>
      </div>
      </section>


    </>
  )
}
export default Search;