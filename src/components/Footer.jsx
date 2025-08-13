import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'purple',fontWeight:'600'}} className='d-flex flex-column justify-content-center align-items-center text-light'>
      <h2 className='mb-4'>Contact Us</h2>
      <h5><HiOutlineMail />  resumebuilder@gmail.com</h5>
      <h5><IoMdCall />  9064673665</h5>
      <h5>Connect With Us</h5>
      <div className="d-flex justify-content-center fs-4 mt-3">
        <FaWhatsapp  className='me-4'/>
        <FaFacebook className='me-4'/>
        <FaInstagram />
      </div>
      <p className='mt-3' >Built and designed with ❤️ using React</p>
    </div>
  )
}

export default Footer
