
import { MdEditDocument } from "react-icons/md";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { editResumeAPI, getAResumeAPI } from "../services/allAPI";
import swal from 'sweetalert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeId,setUpdateUserInput}) {
  const [userSkill,setUserSkill] = React.useState("")
  const [userInput,setUserInput]=React.useState({})
  const [open, setOpen] = React.useState(false);
  // console.log(resumeId);
  // console.log(userInput);

  React.useEffect(()=>{
    resumeId && getEditResumeDetails()
  },[resumeId])
  
  
  const getEditResumeDetails=async ()=>{
    try{
        const result = await getAResumeAPI(resumeId)
        setUserInput(result?.data)
        // console.log(result?.data);
        
    }catch(err){
        console.log(err);
        
      }
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

const addSkill=()=>{
  if(userSkill){
    if(userInput.skills.includes(userSkill)) {         
      alert("Given Skill is already existing!!")
     }else{
      setUserInput({...userInput,skills:[...userInput.skills,userSkill]})
     }
     setUserSkill('')
    }
}
const removeSkill=(skill)=>{
  setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=skill)})
}

const handleResumeUpdate=async()=>{
  try{
    const result=await editResumeAPI(userInput?.id,userInput)
    setUpdateUserInput(result?.data)
    swal("Success!", "Resume updated successfully", "success");
    handleClose()    
  }catch(err){
console.log(err);

  }
}
  return (
    <>
      <button onClick={handleOpen} className="btn fs-3 text-primary"><MdEditDocument /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {/* personal details */}
    
                     <h3>Personal Details</h3>
                     <div className="d-flex row px-3 pb-5">
                        <TextField
                                        id="standard-basic-name"
                                        label="Full Name"
                                        variant="standard"
                                        onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,name:e.target.value}})}
                                        value={userInput?.personalData?.name}
                                      />
                                      <TextField
                                        id="standard-basic-job"
                                        label="Job Title"
                                        variant="standard"
                                         onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,jobTitle:e.target.value}})}
                                         value={userInput?.personalData?.jobTitle}
                                      />
                                      <TextField
                                        id="standard-basic-location"
                                        label="Location"
                                        variant="standard"
                                         onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,location:e.target.value}})}
                                         value={userInput?.personalData?.location}
                                      />
                     </div>
                     {/* contact details */}
                 <h3>Contact Details</h3>
                           <div className="d-flex row px-3 pb-5">
                              <TextField
                id="standard-basic-mail"
                label="Email"
                variant="standard"
                 onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,email:e.target.value}})}
                 value={userInput?.personalData?.email}
              />
              <TextField
                id="standard-basic-phone"
                label="Phone Number"
                variant="standard"
                 onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,phone:e.target.value}})}
                 value={userInput?.personalData?.phone}
              />
              <TextField
                id="standard-basic-github"
                label="Github Profile Link"
                variant="standard"
                 onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,github:e.target.value}})}
                 value={userInput?.personalData?.github}
              />
              <TextField
                id="standard-basic-linkedin"
                label="Linkedin Profile Link"
                variant="standard"
                 onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,linkedin:e.target.value}})}
                 value={userInput?.personalData?.linkedin}
              />
              <TextField
                id="standard-basic-portfolio"
                label="Portfolio Link"
                variant="standard"
                 onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,portfolio:e.target.value}})}
                 value={userInput?.personalData?.portfolio}
              />
                           </div>
                           {/* educational details */}
                            <h3>Education Details</h3>
                        <div className="d-flex row px-3 pb-5">
                            <TextField
                id="standard-basic-course"
                label="Course Name"
                variant="standard"
                 onChange={(e)=>setUserInput({...userInput,education:{...userInput.education,course:e.target.value}})}
                 value={userInput?.education?.course}
              />
              <TextField
                id="standard-basic-college"
                label="College"
                variant="standard"
                   onChange={(e)=>setUserInput({...userInput,education:{...userInput.education,college:e.target.value}})}
                   value={userInput?.education?.college}
              />
              <TextField
                id="standard-basic-university"
                label="University"
                variant="standard"
                   onChange={(e)=>setUserInput({...userInput,education:{...userInput.education,university:e.target.value}})}
                   value={userInput?.education?.university}
              />
              <TextField
                id="standard-basic-year"
                label="Year of Passout"
                variant="standard"
                   onChange={(e)=>setUserInput({...userInput,education:{...userInput.education,year:e.target.value}})}
                   value={userInput?.education?.year}
              />
                        </div>
                        {/* professional details */}
                        <h3>Professional Details</h3>
                                  <div className="d-flex row px-3 pb-5">
                                     <TextField
                id="standard-basic-role"
                label="Job or Internship"
                variant="standard"
                   onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,jobRole:e.target.value}})}
                     value={userInput?.experience?.jobRole}
              />
              <TextField
                id="standard-basic-companyname"
                label="Company Name"
                variant="standard"
                  onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})}
                   value={userInput?.experience?.company}
              />
              <TextField
                id="standard-basic-companylocation"
                label="Company Location"
                variant="standard"
                  onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,jobLocation:e.target.value}})}
                   value={userInput?.experience?.jobLocation}
              />
              <TextField
                id="standard-basic-duration"
                label="Duration"
                variant="standard"
                  onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})}
                   value={userInput?.experience?.duration}
              />
                                  </div>
                                  {/* skills */}
                                  <h3>Skills</h3>
          <div className="d-flex align-items-center justify-content-between ">
             <TextField sx={{width:'400px'}} id="standard-basic-skill" label="Add Skills" variant="standard" onChange={e=>setUserSkill(e.target.value)} value={userSkill}/>
             <Button onClick={addSkill} variant="text">ADD</Button>
             </div>
             <h5 className="mt-3">Selected Skills</h5>

          <div className="d-flex flex-wrap my-3">             
     
            {/* span must duplicate according to the user added skill */}
           {
            userInput?.skills?.length>0 &&
            userInput?.skills?.map((item,index)=>(
              <span key={index} className='btn btn-primary text-light m-2'>{item}<button onClick={()=>removeSkill(item)} className='btn text-light'>X</button></span>
            ))
           }
          </div>
          {/* professional summary */}
         <h3>Professional Summary</h3>
         <div className="d-flex row px-3">
        <TextField id="standard-basic-name" label="Write a short summary of yourself"  variant="standard" multiline rows={4} value={userInput?.summary} onChange={(e)=>setUserInput({...userInput,summary:e.target.value})}
        />
                                            
          </div>
          </Typography>
        <button onClick={handleResumeUpdate} className="btn btn-primary my-4">UPDATE</button>
          
        </Box>
      </Modal>
    </>
  )
}

export default Edit
