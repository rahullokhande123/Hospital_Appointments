
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import img2 from "../../public/doctor1.jpg";
import img3 from "../../public/doctor2.jpg";
import img4 from "../../public/doctor3.jpg";
import img5 from "../../public/doctor4.jpg";

import Card from 'react-bootstrap/Card';

import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Home=()=>{

  const [cart,setCart]=useState([]);
  const navigate=useNavigate();

  const loadData=()=>{
    let api="http://localhost:3000/Doctors";
    axios.get(api).then((res)=>{
      setCart(res.data)
    })
  }

  useEffect(()=>{
    loadData();
  },[])

  const dataSend=(key)=>{
    navigate("/doctorprofile",{state:key})
  }

  const ans=cart.map((key)=>{
    return(
      <>
      
      <Card style={{ width: '15rem',marginRight:"50px" }}>
      
      <Card.Img variant="top" onClick={()=>{dataSend(key)}}  src={key.image} 
      style={{width:"100%",height:"300px"}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
        {key.des} 
        </Card.Text>
        <Card.Text>
        {key.course} 
        </Card.Text>
        <Button variant="success" onClick={()=>{dataSend(key)}} >View Profile</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
  return(
    <>
{/* ================================ Hero Section ============================= */}

<h1 style={{marginTop:"10px",marginLeft:"650px"}}>Specialist Doctors</h1>

<Container style={{marginTop:"50px",display:"flex",marginLeft:"200px"}}>

    {ans}

    </Container> 
    </>
  )
}
export default Home