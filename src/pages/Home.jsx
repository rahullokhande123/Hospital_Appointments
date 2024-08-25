
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import img2 from "../../public/doctor1.jpg";
import img3 from "../../public/doctor2.jpg";
import img4 from "../../public/doctor3.jpg";
import img5 from "../../public/doctor4.jpg";

import Card from 'react-bootstrap/Card';

import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Home=()=>{

  const [cart,setCart]=useState([]);
  const navigate=useNavigate();

  const loadData=()=>{
    let api="http://localhost:3000/Doctors";
    axios.get(api).then((res)=>{
      setCart(res.data)
    })
  }
  const dataSend=(key)=>{
    navigate("/doctorprofile",{state:key})
  }
  return(
    <>

{/* ================================ Hero Section ============================= */}

<h1 style={{marginTop:"10px",marginLeft:"650px"}}>Specialist Doctors</h1>

<Container style={{marginTop:"50px",display:"flex",marginLeft:"200px"}}>    
<Card style={{ width: '15rem',marginRight:"50px" }}>
      <Card.Img variant="top" src={img2} style={{width:"240px",height:"250px"}} />
      <Card.Body>
        <Card.Title>Dr. Gourav Patel</Card.Title>
        <Card.Text>
        Cardiothoracic and Vascular Surgery Services <br /> <b> MBBS, MS, MCh</b> 
        </Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem',marginRight:"50px" }}>
      <Card.Img variant="top" src={img3} style={{width:"240px"}} />
      <Card.Body>
        <Card.Title>Dr. Arun S.</Card.Title>
        <Card.Text>
        Director, Urology Services <br /> <b> MBBS, MS, DNB GENITO-URINARY SURGERY</b> 
        </Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem',marginRight:"50px" }}>
      <Card.Img variant="top" src={img4} style={{width:"240px",height:"250px"}} />
      <Card.Body>
        <Card.Title>Dr. Ritu Baghel</Card.Title>
        <Card.Text>
        Director, Pathology & Blood Bank Services <br /> <b>MBBS, MD</b> 
        </Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem',marginRight:"50px" }}>
      <Card.Img variant="top" src={img5} style={{width:"240px",height:"250px"}} />
      <Card.Body>
        <Card.Title>Dr. Varsha Gupta</Card.Title>
        <Card.Text>
        Senior Consultant, Dental Services <br /> <b> BDS, MDS, PGDHM</b> 
        </Card.Text>
        <Button variant="primary" onClick={()=>{dataSend(key)}} >View Profile</Button>
      </Card.Body>
    </Card>

    </Container> 
    </>
  )
}
export default Home