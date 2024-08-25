 
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
    let url=`http://localhost:3000/Student/?rollno=${rno}`
    axios.get(url).then((res)=>{
      setmydata(res.data)
    })
  }

  let ans;
  if(mydata.length>0){
   ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <th>
          Roll No.
          <hr />
        <td>{key.rollno}</td>
        </th>

        <th>
          Name
          <hr />
          <td>{key.name}</td>
        </th>
        <th>
          City
          <hr />
        <td>{key.city}</td>
        </th>
        
        <th>
          Fees
          <hr />
        <td>{key.fees}</td>
        </th>
        
      </tr>
      </>
    )
  })}
 

  return(
    <>
    <section style={{display:"block"}}>
    <div style={{display:"block"}}>

    {/* <img src="/public/r1.jpg" width="50px" height="50px" style={{border:"1px solid white",borderRadius:"50%",marginLeft:"20px"}} />
    <b style={{marginLeft:"10px"}}>Mr. Rahul Lokhande</b> */}

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