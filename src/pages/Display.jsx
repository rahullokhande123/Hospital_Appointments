
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Display=()=>{

  const navigate= useNavigate();
  const [Pdata,setPdata]=useState([]);

  const loadPdata=()=>{
    let api="http://localhost:3000/Patients";
    axios.get(api).then((res)=>{
      setPdata(res.data)
    })
  }
  useEffect(()=>{
    loadPdata();
  },[]);

  const ans=Pdata.map((Key)=>{
    return(
      <>
         <tr>
               <td>{Key.name}</td>
               <td>{Key.city}</td>
               <td>{Key.age}</td>
               <td>{Key.adhar}</td>
               <td>{Key.contact}</td>
               <td>{Key.doctor}</td>
         </tr>
      </>
    )
  })

  return(
    <>
      <Container>
          
      <Button style={{marginLeft:"1050px",marginTop:"10px"}} variant="outline-dark"  onClick={()=>{navigate("/home")}} >Home</Button>

        <h1 style={{marginLeft:"400px",marginBottom:"50px"}}>Patients Details</h1>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>Patients Name</th>
          <th>City</th>
          <th>Age</th>
          <th>Aadhar No.</th>
          <th>Contact No.</th>
          <th>Doctor Refrence</th>
        </tr>
        {ans}
      </thead>
        </Table>

      </Container>
    </>
  )
}
export default Display;