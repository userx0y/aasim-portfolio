import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[]);
  return (
    <>
    <div className="container-fluid pt-5" style={{backgroundColor: '#1a1a1a', height: '200px'}}>
        <h1 data-aos="fade-in" className='text-center page-title' style={{fontFamily: 'Montserrat', margin: '0px 0px', color : 'rgb(180, 157, 91)', fontSize: '50px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase'}}>open source contribution</h1>
    </div>
        <div className="container-fluid d-flex pt-5 card-2" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
    <div class="card mb-3 card-1-size" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
        <div class="col-md-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src="../../assets/wchat-logo.png" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain', height: '170px'}}/>
        </div>
        <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
            <h5 class="card-title">
                <b style={{color: 'rgb(180, 157, 91)'}}>WChat – Group Chat Website</b>
            </h5>
            <br />
            <p class="card-text">
                Made a chat website where people can join and talk in real-time. It shows notifications when someone joins or sends a message, asks before closing or reloading, and gives a random Guest name if you don’t enter one.
            </p>
            <p class="card-text">
                <small class="text-body-secondary">
                <a href="https://wchat-app.vercel.app" target="_blank" rel="noopener noreferrer">https://wchat-app.vercel.app</a>
                </small>
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="container-fluid d-flex pt-5 card-2" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
    <div class="card mb-3 card-1-size" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
        <div class="col-md-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src="../../assets/healthcare-logo.jpg" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain', height: '170px'}}/>
        </div>
        <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
            <h5 class="card-title">
                <b style={{color: 'rgb(180, 157, 91)'}}>Healthcare MERN – Role Based Login, Appointments & Prescriptions</b>
            </h5>
            <br />
            <p class="card-text">
                Built a healthcare management system with MERN stack featuring role-based login, appointment booking, prescriptions, and admin dashboard.</p>
            <p class="card-text">
                <small class="text-body-secondary">
                <a href="https://healthcare-mern.vercel.app" target="_blank" rel="noopener noreferrer">https://healthcare-mern.vercel.app</a>
                </small>
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="container-fluid d-flex pt-5 card-2" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
    <div class="card mb-3 card-1-size" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
        <div class="col-md-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src="../../vite.svg" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain', height: '170px'}}/>
        </div>
        <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
            <h5 class="card-title">
                <b style={{color: 'rgb(180, 157, 91)'}}>Hackathon Notepad – Fun & Interactive Features</b>
            </h5>
            <br />
            <p class="card-text">
                Created a hackathon notepad app with welcome message text-to-speech, confetti, Lucide icons, typed.js, Lottie animations, and validated registration/login.
            </p>
            <p class="card-text">
                <small class="text-body-secondary">
                <a href="https://hackathon-mern.vercel.app" target="_blank" rel="noopener noreferrer">https://hackathon-mern.vercel.app</a>
                </small>
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="container-fluid d-flex pt-5 card-2" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
    <div class="card mb-3 card-1-size" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
        <div class="col-md-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src="../../assets/bunny.png" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain', height: '170px'}}/>
        </div>
        <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
            <h5 class="card-title">
                <b style={{color: 'rgb(180, 157, 91)'}}>Tabnabbing Demo – Learn Web Security</b>
            </h5>
            <br />
            <p class="card-text">
            Created a small project demonstrating a tabnabbing attack using a fake Instagram login page for educational purposes.
            </p>
            <p class="card-text">
                <small class="text-body-secondary">
                <a href="https://68b04f07d5b08609b78fe0cf--insta-stalker.netlify.app/" target="_blank" rel="noopener noreferrer">https://68b04f07d5b08609b78fe0cf--insta-stalker.netlify.app/</a>
                </small>
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>

    <style>
        {`
        @media(max-width: 768px){
        .card-1-size{
        height : 600px !important;
        }
        .page-title{
        font-size : 30px !important;
        line-height : 1.2 !important;
        }
        .card-1{
        height : 750px !important;
        }
        .card-2{
        height :750px !important;
        }
        .card-3{
        height : 800px !important;
        }
        }
        `}
    </style>
    </>
  )
}
export default Projects