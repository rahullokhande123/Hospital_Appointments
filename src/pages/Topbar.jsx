
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import img1 from "../../public/hospital.png";

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Topbar=()=>{
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
            <Nav.Link as={Link} to="insert" style={{marginRight:"20px"}}>Enter Patient Details</Nav.Link>
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
          <Form className="d-flex" style={{marginRight:"50px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}
export default Topbar;