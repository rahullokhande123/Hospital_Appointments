import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const DoctorProfile=()=>{

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
                <h1>{myDoc.name}</h1>
                <br />
                <b>{myDoc.about}</b>
            </div>

            </div>
            
            <br />
            <div style={{marginLeft:"10%"}} >
                <Button variant="dark">Book Appitment</Button>
            </div>
            
           
        </>
    )
}
export default DoctorProfile;