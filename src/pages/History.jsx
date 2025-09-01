import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';
import { NavItem } from 'react-bootstrap';

function History() {

const [resume,setResume]=useState([])


useEffect(()=>{
  getHistory()
},[resume])
const getHistory= async()=>{
  try{
  const result=await getHistoryAPI()

  setResume(result.data)
  }catch(err){
    console.log(err);
    
  }
 
}
// console.log(resume);

const handleRemoveHistory=async(id)=>{
  try{
     await deleteHistoryAPI(id)
     getHistory()
  }catch(err){
    console.log(err);
    
  }
}
  return (
    <>
   <div className="">
    
       <h1 className='text-center mt-5'>Resume Downloaded History</h1>
      <Link to={'/'} style={{marginTop:'-50px'}} className='float-end me-5 '>BACK</Link>
    
     <Box component="section" className='container-fluid' >
     
       <div className="row">
        {
          resume.length>0 ?
       
          resume?.map((item,index)=>(
        
            
            <div key={index} className="col-md-4">
           <Paper elevation={3}  sx={{my:5, p:5,textAlign:'center'}}>
            <div  className="d-flex align-items-center justify-content-evenly pb-4 ">
              <h6>Review At: <br /> {item?.timeStamp}</h6>
              <button onClick={()=>handleRemoveHistory(item?.id)} className='btn btn-danger ms-5'><MdDelete /></button>
            </div>
             <div className="border rounded p-3">
              <img className='img-fluid h-100' src={item?.imgURL} alt="resume" />
             </div>
             </Paper>
         </div> 
          ))        
          :
          <p>History is empty!!!</p>     
        }
       </div>
     </Box>
   </div>
    </>
  )
}

export default History
