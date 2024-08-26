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
        course:""
    })
    useEffect(()=>{
        setMydoc({
            id:location.state.id,
            image:location.state.image,
            name:location.state.name,
            des:location.state.des,
            course:location.state.course
        })
    },[])

    return(
        <>
            <h1></h1>
            <div>
                <img src={myDoc.image} style={{width:"350px",height:"400px",margin:"60px",border:"2px solid white",boxShadow:"8px 12px 12px 0px"}} />
                <h2 style={{marginLeft:"8%"}}>{myDoc.name}</h2>
                <h5 style={{marginLeft:"2%"}} >{myDoc.des}</h5>
                <b style={{marginLeft:"11%"}} >{myDoc.course}</b>

            </div>
            <br />
            <div style={{marginLeft:"8%"}} >
                <Button variant="dark">Book Appitment</Button>
            </div>
            
           
        </>
    )
}
export default DoctorProfile;