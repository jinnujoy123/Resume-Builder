import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { addDownloadHistoryAPI } from '../services/allAPI';

function Preview({userInput,setUserInput,finish,resumeId}) {

  const [downloadStatus,setDownloadStatus] = useState(false) 


// useEffect(()=>{ 
//   updateResume!={} && 
//    console.log(updateResume);
//   //  setUserInput(updateResume)
//    console.log(userInput);
   
   
// },[updateResume]) 

const downloadCV =async()=>{
    // get element for taking screenshot
const input = document.getElementById("result")
const canvas=await html2canvas(input,{scale:2})
// console.log(canvas);
const imgURL = canvas.toDataURL('image/png')
// console.log(imgURL);
const pdf = new jsPDF()
const pdfWidth = pdf.internal.pageSize.getWidth()
const pdfHeight = pdf.internal.pageSize.getHeight()
pdf.addImage(imgURL,'PNG',0,0,pdfWidth,pdfHeight)
pdf.save('resume.pdf')
setDownloadStatus(true)

// get time
const localTimeData = new Date()
const timeStamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`

// add download resume to json using api call

try{
  const result=await addDownloadHistoryAPI({...userInput,imgURL,timeStamp})
  console.log(result);
  
}
catch(err){
  console.log(err);
  
}

  }


  return (
    <>{
      userInput.personalData.name!="" &&
      <div className='d-flex flex-column'>
          
            
            <div className="">
          
           {
            finish &&
             <Stack direction={'row'} sx={{justifyContent:'flex-end'}} style={{marginTop:'50px'}}>
            <Stack direction={'row'} sx={{alignItems:'center'}}>
              <button onClick={downloadCV} className="btn fs-3 text-primary" ><FaFileDownload /></button>
                  <div className="">
                  <Edit setUpdateUserInput={setUserInput} resumeId={resumeId} />
                </div>
                {
                  downloadStatus &&
                  <>
                  <Link to={'/history'} className="btn fs-3 text-primary"><FaHistory /></Link>
                  </>
                }
                  <Link to={'/resume'} className="btn text-primary" >BACK</Link>
            </Stack>
            </Stack>
           }
          
            </div>

      <Box component="section">
      
        <Paper id="result" elevation={3}  sx={{my:5, p:5,textAlign:'center',marginTop:'100px'}} >
          <h2>{userInput.personalData.name}</h2>
          <h5>{userInput.personalData.jobTitle}</h5>
          <p><span>{userInput.personalData.location}</span> | <span>{userInput.personalData.email}</span> | <span>{userInput.personalData.phone}</span></p>
          <Link href={""} >{userInput.personalData.github }</Link>
          <Link href={""} >{userInput.personalData.linkedin} </Link>
          <Link href={""} >{userInput.personalData.portfolio}</Link>
          <Divider sx={{fontSize:'25px'}}>Summary</Divider>
          <p className='fs-5 text-start '>{userInput.summary}</p>
          <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
              <h5>{userInput.education.course}</h5>
              <p><span>{userInput.education.college}</span> | <span>{userInput.education.university}</span> | <span>{userInput.education.year}</span></p>
          <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
              <h5>{userInput.experience.jobRole}</h5>
              <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>
          <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
            <Stack justifyContent={'space-evenly'} direction="row" sx={{flexWrap:'wrap',gap:'10px'}}>
      
            {userInput.skills?.map(userskill=>(
              <Button variant="contained">{userskill}</Button>
            ))
          }    
      
      
             </Stack>
          </Paper>
      </Box>
      </div>
}
    </>
  )
}

export default Preview
