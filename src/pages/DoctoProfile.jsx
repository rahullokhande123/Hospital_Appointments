import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const DoctorProfile=()=>{

    const navigate=useNavigate();
    const location=useLocation();
    const [myDoc,setMydoc]=useState({
        id:"",
        image:"",
        name:"",
        des:"",
        course:"",
        about:""
    })
    useEffect(()=>{
        setMydoc({
            id:location.state.id,
            image:location.state.image,
            name:location.state.name,
            des:location.state.des,
            course:location.state.course,
            about:location.state.about

        })
    },[])

    return(
        <>
            <div style={{display:"flex"}}>
            <div>
                <img src={myDoc.image} style={{width:"350px",height:"400px",margin:"60px",border:"2px solid white",boxShadow:"8px 12px 12px 0px"}} />
                <h2 style={{marginLeft:"25%"}}>{myDoc.name}</h2>
                <h5 style={{marginLeft:"10%"}} >{myDoc.des}</h5>
                <b style={{marginLeft:"20%"}} >{myDoc.course}</b>

            </div>
            <div>
                <h1 style={{marginTop:"6%"}}>{myDoc.name}</h1>
                <br />
                <b style={{marginTop:"20px"}}>{myDoc.about}</b>
                <div style={{marginLeft:"3%",marginTop:"3%"}} >
                     <Button variant="success" onClick={()=>{navigate("/insert")}} >Book Appitment</Button>
                </div>
            </div>

            </div>
            
            
           
        </>
    )
}
export default DoctorProfile;