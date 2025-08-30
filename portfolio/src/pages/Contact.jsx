import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Contact = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[]);
  return (
    <>
    <div className="container-fluid pt-5 page-title-div" style={{backgroundColor: '#1a1a1a', color: 'rgb(180, 157, 91)', height: '200px'}}>
        <h1 className="text-center page-title" data-aos="fade-in" style={{fontSize: '50px',fontWeight: 700,letterSpacing: '2px', fontFamily : "'Montserrat'", textTransform: 'uppercase'}}>CONTACT ME</h1>
    </div>
    <div className="container-fluid gap-5 pt-5 mobile-card" style={{display: 'flex', justifyContent: 'center', backgroundColor: '#1a1a1a', height: "300px"}}>
      <div className="card" style={{width: "100%", maxWidth: '300px', height: '70%', backgroundColor: 'rgba(70, 72, 73, 1)', display: 'flex', alignItems: 'center'}}>
       <i data-aos="fade-in" className="fas fa-phone fa-4x" style={{marginTop: '50px'}}></i>
        <div className="card-body text-white">
          <p className="card-text">+91 6369361437</p>
        </div>
      </div>
      <div className="card" style={{width: "100%", maxWidth: '300px', height: '70%', backgroundColor: 'rgba(70, 72, 73, 1)', display: 'flex', alignItems: 'center'}}>
        <i data-aos="fade-in" className="fa-solid fa-envelope fa-4x" style={{marginTop: '50px'}}></i>
        <div className="card-body text-white text-center">
          <p className="card-text"><a className="text-white" href="mailto:mohammed.saalim.k@gmail.com" target="_blank" rel="noopener noreferrer">mohammedaasim304@gmail.com</a></p>
        </div>
      </div>
    </div>
    <div className="container-fluid gap-3 d-flex text-white logos" style={{backgroundColor: '#1a1a1a', height: '200px', justifyContent: 'center'}}>
      <a data-aos="slide-right" style={{color: 'white', 'fontSize': '50px'}} href="https://github.com/userx0y/" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a>
      <a data-aos="slide-left" style={{color: 'white', 'fontSize': '50px'}} href="#" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      {/* <a data-aos="fade-in" style={{color: 'white', 'fontSize': '50px'}} href=""><i class="fa-brands fa-instagram" rel="noopener noreferrer" target="_blank"></i></a>
      <a data-aos="fade-in" style={{color: 'white', 'fontSize': '50px'}} href=""><i class="fa-brands fa-x-twitter" rel="noopener noreferrer" target="_blank"></i></a> */}
    </div>
    <div className="container-fluid last-section" style={{backgroundColor: '#1a1a1a', height: '10vh'}}>
    </div>
    <style>
      {`

      a:hover{
      color : rgb(180, 157, 91) !important;
      }
      @media(max-width: 768px){
      .page-title-div{
      height : 150px !important;
      }
      .mobile-card{
      display : flex;
      flex-direction : column;
      align-items : center;
      }
      .page-title{
      line-height : 1.2 !important;
      font-size : 30px !important;
      }
      .logos{
      padding-top: 100px;
      }
      a:hover{
      color : rgb(180, 157, 91) !important;
      }
      .last-section{
      height : 10vh !important;
      }
      }
      `}
    </style>
    </>
  )
}
export default Contact