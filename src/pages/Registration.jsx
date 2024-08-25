import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration=()=>{
    const [input, setInput] =useState({});
    const navigate=useNavigate();
    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values, [name]:value}));
         console.log(input)
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       let api="http://localhost:3000/userdata";
       axios.post(api, input).then((res)=>{       
           toast.success("You are Succesfully registered!!!")
           setInput({
            name:"",
            userid:"",
            email:"",
            password:""
           })
       })
    }
    return(
        <>
        <div id='rPage'>

      <Button style={{marginLeft:"600px",marginTop:"10px"}} variant="outline-dark"  onClick={()=>{navigate("/home")}} >Home</Button>

      <Button style={{marginLeft:"10px",marginTop:"10px"}}  variant="outline-dark" type="submit" onClick={()=>{navigate("/login")}}>
        Login Page
      </Button>

          <h1 style={{marginBottom:"70px",marginTop:"50px",marginLeft:"100px"}}> User Registration</h1>
      <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter userid</Form.Label>
        <Form.Control type="text" name="userid" value={input.userid} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password" value={input.pwd} onChange={handleInput} />
      </Form.Group>
      <Button variant="dark" type="submit" onClick={handleSubmit}>
        Submit
      </Button>

      
    </Form>
    <ToastContainer />

    </div>
        </>
    )
}
export default Registration;