
import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from "antd";

const Update=()=>{

  const [mydata,setmydata]=useState([])

  const [editData, setEditData]=useState({});

  const loadData=()=>{
    let url="http://localhost:3000/Student";
    axios.get(url).then((res)=>{
      setmydata(res.data)
    })
  }
  useEffect(()=>{
    loadData()
  },[])




  const mydel=(myid)=>{
    let url=`http://localhost:3000/Student/${myid}`

    axios.delete(url).then((res)=>{
      alert("DATA Deleted")
      loadData()
    })
  }
  const myEdit=(myid)=>{
    let url=`http://localhost:3000/Student/${myid}`
    axios.get(url).then((res)=>{
      setEditData(res.data);
      // console.log(res.data);
    });
  }

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setEditData(values=>({...values, [name]:value}));
  }

  const handleSubmit=()=>{
    let url=`http://localhost:3000/Student/${editData.id}`
    axios.put(url,editData).then(()=>{
      
      message.success("Record Successfully updated!!!");
      
      loadData();
    })
  }

  const ans=mydata.map((key)=>{
    return(
      <>
         <tr>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.fees}</td>
          <td width="10px"><Button variant="danger" onClick={()=>{mydel(key.id)}} >Delete</Button>{' '}</td>
          <td width="10px"><Button variant="success" onClick={()=>{myEdit(key.id)}} >Edit</Button></td>

          {/* <Button variant="danger">Danger</Button>{' '} */}
          
         </tr>
      </>
    )
  })
    return(
        <>
        <div style={{display:"block"}}>
          <h1 style={{marginLeft:"350px",marginBottom:"40px",marginTop:"20px"}}> Update Students Record</h1>
          <Table striped bordered hover style={{marginLeft:"40px",textAlign:"center"}}>
          <thead>
             <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
             </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>

          </Table>
          <br />
          <div style={{marginBottom:"20px",marginLeft:"80px"}}>
          Edit Rollno<input type="text" name="rollno" value={editData.rollno} onChange={handleInput}></input>
          Name<input type="text" name="name" value={editData.name} onChange={handleInput}></input>
          City<input type="text" name="city" value={editData.city} onChange={handleInput}></input>
          Fees<input type="text" name="fees" value={editData.fees} onChange={handleInput}></input>

          <button onClick={handleSubmit} style={{marginLeft:"20px",backgroundColor:"green",color:"white"}}>Update Save!!</button>
          </div>
          </div>
        </>
    )
}
export default Update;



// string query -> ${myid}