
import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';

const DoctorRituBaghel=()=>{

    const [apm,setApm]=useState([]);

    const loadAppointments=()=>{
        let api=`http://localhost:3000/Patients?doctor=Dr. Ritu Baghel`;
        axios.get(api).then((res)=>{
            setApm(res.data)
        })
    }
    useEffect(()=>{
        loadAppointments();
    },[])

    const ans=apm.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.id}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.age}</td>
                    <td>{key.contact}</td>
                    <td>{key.adhar}</td>
                   
                </tr>
            </>
        )
    })
    return(
        <>
           <Table striped bordered hover>
             <thead>
                 <tr>
                    <th>Patient Id</th>
                    <th>Patient Name</th>
                    <th>City</th>
                    <th>Age</th>
                    <th>Contact No.</th>
                    <th>Aadhar No.</th>

                  </tr>
             </thead>
             <tbody>
                   {ans}
             </tbody>
          </Table>
        </>
    )
}
export default DoctorRituBaghel;