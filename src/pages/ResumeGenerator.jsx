import { FcDocument } from "react-icons/fc";
import React from 'react'
import { TbFileDownload } from "react-icons/tb";
import { Link } from "react-router-dom";

function ResumeGenerator() {
  return (
    <div className=' py-2 '>
         <h4 className='text-center py-5'>Create a job-winning Resume in minutes</h4>
         <div className="container">
          <div className="row px-5 mx-3">
           
            <div className="col-md-5 d-flex flex-column mt-2 justify-content-center align-items-center border shadow py-3 ">
             <FcDocument className="fs-1"/>
              <h4 className='pt-3'>Add your information</h4>
              <p>Add pre-written examples to each section</p>
              <h4>Step 1</h4>
            </div>
           <div className="col-md-2"></div>
           <div className="col-md-5 d-flex flex-column mt-2 justify-content-center align-items-center border shadow py-3">
            <TbFileDownload className="fs-1"/>
              <h4 className='pt-3'>Download your Resume</h4>
              <p>Download and start applying</p>
              <h4>Step 2</h4>
            </div>
          
          </div>
         </div>
         <div className="text-center mb-5">
          <Link to={'/form'}>
              <button className='btn btn-primary mt-5 text-center'>LET'S START</button>
              </Link>
         </div>
    </div>
  )
}

export default ResumeGenerator
