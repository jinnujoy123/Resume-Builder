import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';



function Preview() {
  return (
    <>
       <Box component="section">
     
      <Paper elevation={3}  sx={{ p: 2,textAlign:'center'}}>
        <h2>Name</h2>
        <h4>JobTitle</h4>
        <p><span>Location</span> | <span>Email</span> | <span>Phone</span></p>
        <Link href={""} >GITHUB </Link>
        <Link href={""} >LINKEDIN </Link>
        <Link href={""} >PORTFOLIO</Link>
        <Divider>Summary</Divider>
        </Paper>
    </Box>
    </>
  )
}

export default Preview
