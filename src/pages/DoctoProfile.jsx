import { useState } from "react";
import { useLocation } from "react-router-dom";

const DoctorProfile=()=>{

    const location=useLocation();
    const [myDoc,setMydoc]=useState()

    return(
        <>
            <h1>We Are Doctors</h1>
        </>
    )
}
export default DoctorProfile;