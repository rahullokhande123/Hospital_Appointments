
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const location=useLocation();
const [myDoc,setMydoc]=useState({
  id:"",
  name:""
})
useEffect(()=>{
  setMydoc({
      id:location.state.id,
      name:location.state.name

  })
},[])


const Insert=()=>{

  const navigate=useNavigate();
  const [input,setInput]=useState({});

  const handlechange=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setInput(values=>({...values,[name]:value}))
  }

  const handleSubmit=()=>{
    let api="http://localhost:3000/Patients";
    axios.post(api,input).then((res)=>{
      alert("Data Submited")
      setInput({})
    })
  }
  return(
    
    <>

    <section id='insertSection' style={{width:"90%",height:"825px"}}>
    <div style={{width:"500px",marginLeft:"500px",marginTop:"60px",marginRight:"60px"}}>


    <Button style={{marginLeft:"700px",marginTop:"10px"}} variant="outline-dark"  onClick={()=>{navigate("/home")}} >Home</Button>
    <Container>

    <h1 style={{marginLeft:"25px",marginBottom:"50px"}}>Insert Patients Details</h1>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handlechange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' value={input.value} onChange={handlechange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" name='age' value={input.age} onChange={handlechange}  />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Aadhar No.</Form.Label>
        <Form.Control type="text" name='adhar' value={input.adhar} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Docter Refrense</Form.Label>
        <Form.Control type="text" name='' value={input.myDoc.name} onChange={handlechange} />
      </Form.Group>

      <Button variant="success" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </Container>
    </div>
    </section>
    </>
  
  )
}
export default Insert;



