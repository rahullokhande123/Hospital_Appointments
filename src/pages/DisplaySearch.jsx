import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";


const DisplaySearch=()=>{

  const location=useLocation();
  const [Pdata,setPdata]=useState({

    id:"",
    name:"",
    city:"",
    age:"",
    adhar:"",
    contact:"",
    doctor:""

  });
  useEffect(()=>{
    console.log("Chup Rahja")
    setPdata({
      id:location.state.id,
      name:location.state.name,
      city:location.state.city,
      age:location.state.age,
      adhar:location.state.adhar,
      contact:location.state.contact,
      doctor:location.state.doctor
    })
  },[])

  console.log({Pdata})
  return(
    
    <>
    
        <h1>{Pdata.name}</h1>
    </>
  )
}
export default DisplaySearch;



