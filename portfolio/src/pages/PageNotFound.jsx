import React from 'react';
import NotFound from "../assets/404_error.json"
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="container-fluid text-center" style={{height: '100vh', backgroundColor: '#1a1a1a', color : 'white', fontFamily: 'Montserrat', paddingTop: '100px'}}>
        {/* <h1>404 Page not found</h1> */}
        <Lottie animationData={NotFound} style={{height: '50%'}}/>
        <br />
        <p style={{fontFamily: "'Montserrat'"}}>Nothing to see here...</p>
        <p style={{fontFamily: "'Montserrat'"}}>Sorry. The page you're looking for could not be found.</p>
        <button className='btn' style={{backgroundColor: 'rgb(180, 157, 91)', fontWeight: 'bolder'}} onClick={()=> navigate('/')}>Return Home</button>
    </div>
    </>
  )
}
export default PageNotFound