import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";

import { FaHistory } from "react-icons/fa";
import Edit from './Edit';

function Preview({userInput}) {
  return (
    <>{
      userInput.personalData.name!="" &&
      <>
        <Stack direction={'row'} sx={{justifyContent:'flex-end'}}>
          <Stack direction={'row'} sx={{alignItems:'center'}}>
            <button className="btn fs-3 text-primary" ><FaFileDownload /></button>
              <div className="">
                <Edit/>
              </div>
                <Link to={'/history'} className="btn fs-3 text-primary"><FaHistory /></Link>
                <Link to={'/resume'} className="btn text-primary" >BACK</Link>
          </Stack>
        </Stack>
      <Box component="section">
      
        <Paper elevation={3}  sx={{my:5, p:5,textAlign:'center'}}>
          <h2>{userInput.personalData.name}</h2>
          <h5>{userInput.personalData.jobTitle}</h5>
          <p><span>{userInput.personalData.location}</span> | <span>{userInput.personalData.email}</span> | <span>{userInput.personalData.phone}</span></p>
          <Link href={""} >{userInput.personalData.github }</Link>
          <Link href={""} >{userInput.personalData.linkedin} </Link>
          <Link href={""} >{userInput.personalData.portfolio}</Link>
          <Divider sx={{fontSize:'25px'}}>Summary</Divider>
          <p className='fs-5 text-start'>{userInput.summary}</p>
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
      </>
}
    </>
  )
}

export default Preview
