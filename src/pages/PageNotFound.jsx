import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
     
     <h1 style={{fontWeight:'700'}} >Page Not Found</h1>
     <h4 className='my-4'>Sorry ,we couldn't find the page</h4>
     <Link to={'/'}><button className="btn btn-primary">Back to Home</button></Link>
    </div>
  )
}

export default PageNotFound
