
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import img1 from "../../public/hospital.png";

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
const Topbar=()=>{

  const [Doc,setDoc]=useState("");
  const [mydata,setmydata]=useState([])
  const navigate=useNavigate();

  const handlesearch=()=>{
    let api=`http://localhost:3000/Patients/?doctor=${Doc}`
    axios.get(api).then((res)=>{
         setmydata(res.data)
    })
  }
  

  
  const ans=mydata.map((key)=>{
    return(
      <>
          <tr>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.age}</td>
            <td>{key.adhar}</td>
            <td>{key.contact}</td>
            <td>{key.doctor}</td>
          </tr>
      </>
    )
  })

  return(
    <>
    {/* ============================== Navbar Section ========================== */}
    <div style={{position:"sticky",top:0,zIndex:"3"}}>
    <Navbar expand="lg"   className="bg-body-tertiary">
      <Container fluid>

        <img style={{marginLeft:"50px"}} src={img1} width="50px" height="50px" />

        <Navbar.Brand style={{marginRight:"100px"}} >City Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link as={Link} to="insert" style={{marginRight:"20px"}}>Enter Patient Details</Nav.Link> */}
            <Nav.Link as={Link} to="display" style={{marginRight:"20px"}}>Patients Details</Nav.Link>
            <Nav.Link as={Link} to="search" style={{marginRight:"20px"}}>Search</Nav.Link>
            <NavDropdown title="Appointments" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="doctor_gourav">Dr. Gourav Patel</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="doctor_Arun">
                  Dr. Arun Sharma
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="doctor_ritu">Dr. Ritu Baghel</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="doctor_varsha">Dr. Varsha Gupta</NavDropdown.Item>
              
            </NavDropdown>
            
          </Nav>
 {/* ============================ Search Section =============================== */}
          <Form className="d-flex" style={{marginRight:"50px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={Doc} onChange={(e)=>{setDoc(e.target.value)}}
              
            />
            <Button variant="outline-success" onClick={handlesearch} >Search</Button>
  {/* ================================================================= */}
        {/* <div>
          {ans}
        </div> */}
        {/* <section style={{display:"block"}}>
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
        </section> */}

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}
export default Topbar;