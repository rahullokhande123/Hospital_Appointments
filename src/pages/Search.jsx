 
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

  const back=()=>{
    holdNavigate(-1)
  }
  

  const [rno,setrno]=useState("")
  const [mydata,setmydata]=useState([])

  const handlesearch=()=>{
    let url=`http://localhost:3000/Student/?rollno=${doctor}`
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
        <th>
          Name
          <hr />
        <td>{Key.name}</td>
        </th>

        <th>
          City
          <hr />
          <td>{Key.city}</td>
        </th>
        <th>
          Age
          <hr />
        <td>{Key.age}</td>
        </th>
        
        <th>
          Aadhar No.
          <hr />
        <td>{Key.adhar}</td>
        </th>

        <th>
          Doctor
          <hr />
        <td>{Key.doctor}</td>
        </th>
        
      </tr>
      </>
    )
  })}
 

  return(
    <>
    <section style={{display:"block"}}>
    <div style={{display:"block"}}>

     <b style={{marginLeft:"350px",fontSize:"20px"}}>Search With Roll No.</b>
     <input style={{marginLeft:"10px"}} type="text" value={rno} onChange={(e)=>{setrno(e.target.value)}} />
     <button onClick={handlesearch} style={{marginLeft:"10px",borderRadius:"10px",backgroundColor:"gray",color:"white",marginBottom:"20px"}}>Search</button>
     </div> 
     <div style={{marginLeft:"250px",width:"50%"}}> 
     <Table striped bordered hover >
    
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