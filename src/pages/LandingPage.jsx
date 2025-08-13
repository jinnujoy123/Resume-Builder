import React from 'react'
import {Link} from 'react-router-dom'
function LandingPage() {
  return (
    <div className="">
      <section id='part1'style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:`url("https://plus.unsplash.com/premium_photo-1661388016753-1e2972d0ef06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, backgroundSize: 'cover',backgroundAttachment:'fixed' }} >
         <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 box shadow py-5 rounded mt-5 text-center text-dark " style={{backgroundColor:'rgba(255, 255, 255, 0.3)'}}>
              <h3 >Designed to get hired</h3>
              <h4 className='my-2'>Your skills, your story, your next job <br />- all in one</h4>
              <Link to={'/resume'}>
              <button className='btn btn-primary'>Make your Resume</button>
              </Link>
          </div>
          <div className="col-12 col-md-4"></div>
         </div>
      </section>

     {/* tools */}
     <section className="tools p-5">
      <h1 className='text-center'>Tools</h1>
     <div className="row">
       <div className=" tool-content col-12 col-md-6 p-5">
        <h4>Resume</h4>
        <p>Create unlimited new resumes and easily edit them afterwards.</p>
        <h4 className='mt-4'>Jobs</h4>
        <p>Automatically receive new relevant job postings.</p>
        <h4 className='mt-4'>Applications</h4>
        <p>effortlessly manage and track your job applications in an organized manner.</p>
       </div>
       <div className="col-12 col-md-6">
         <div className="tool-image">
          <img className='img-fluid w-75 ms-5' src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@2x.png" alt="tools" />
         </div>
       </div>
     </div>
     </section>
     <section id='part3'style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:`url("https://plus.unsplash.com/premium_photo-1661274189734-90d6aa7eb010?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, backgroundSize: 'cover',backgroundAttachment:'fixed' }} >
     </section>
     {/* testimony */}
     <section className="tools p-5">
      <h1 className='text-center'>Testimony</h1>
     <div className="row">
       <div className=" testimony col-12 col-md-6 p-5">
        <h4>Trusted by professionals worldwide</h4>
        <p className=' mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus explicabo officia, itaque eos sequi ullam quis magni reiciendis cum ipsum, vero velit recusandae nostrum culpa illo suscipit repellendus?  <br />
        Suscipit odit unde atque odio necessitatibus laboriosam reprehenderit, aperiam sint aut, debitis explicabo magni alias exercitationem fugit ab temporibus totam ullam natus deserunt libero ipsam possimus ratione sequi porro. Ex.</p>
        
       </div>
       <div className="testimony_user col-12 col-md-6 px-md-5">
         <div className="row mt-5">
         <div className="col-3">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=''/>
         </div>
         <div className="col-3 ">
          <img className='' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         <div className="col-3">
          <img className='' src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         <div className="col-3">
            <img className='' src="https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         </div>
          <div className="row mt-2">
         <div className="col-3">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=''/>
         </div>
         <div className="col-3 ">
          <img className='' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         <div className="col-3">
          <img className='' src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         <div className="col-3">
            <img className='' src="https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         </div>
          <div className="row mt-2">
         <div className="col-3">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=''/>
         </div>
         <div className="col-3 ">
          <img className='' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         <div className="col-3">
          <img className='' src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         <div className="col-3">
            <img className='' src="https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         </div>
       
       </div>
     </div>
     </section>
    </div>
  )
}

export default LandingPage
