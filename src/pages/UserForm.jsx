import React from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'
import { useState } from 'react';

function UserForm() {
  const [userInput, setUserInput] = React.useState({
      personalData: {
        name: "",
        jobTitle: "",
        location: "",
        email: "",
        phone: "",
        github: "",
        linkedin: "",
        portfolio: "",
      },
      education: {
        course: "",
        college: "",
        university: "",
        year: "",
      },
      experience: {
        jobRole: "",
        company: "",
        jobLocation: "",
        duration: "",
      },
      skills: [],
      summary: "",
    });
    // state for finish
    const [finish,setFinish]=useState(false)
    const [resumeId,setResumeId]=useState("")
  return (
    <>
     {finish?
     <div className="d-flex justify-content-center align-items-center">
      <Preview userInput={userInput} setUserInput={setUserInput} finish={finish} resumeId={resumeId}/></div>
      :
      <div className="container">
      <div className="row p-5">
        <div className="col-lg-6">
            <Steps userInput={userInput} setUserInput={setUserInput} setFinish={setFinish} setResumeId={setResumeId}/>
        </div>
        <div className="col-lg-6 ">
            <Preview userInput={userInput} />
        </div>
      </div>
     </div>
     }
    </>
  )
}

export default UserForm
