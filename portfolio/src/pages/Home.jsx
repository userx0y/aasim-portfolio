import { useRef, useEffect } from "react";
import Profile from "../assets/Aasim.jpg";
import Typed from "typed.js";
import Button from "../components/Button";
import TechStackButton from "../components/TechStackButton";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
    const ref = useRef(null);
    useEffect(()=>{
        AOS.init({duration: 1000});
        const typed = new Typed(ref.current, { strings:["FULL STACK DEVELOPER", "MERN STACK DEVELOPER", "PYTHON DJANGO DEVELOPER", "SOFTWARE ENGINEER"],
            backSpeed: 30,
            typeSpeed: 50,
            loop : true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
  return (
    <>
    <div className="container-fluid" style={{height: '550px', 'backgroundColor': '#1a1a1a'}}>
        <div className="container pt-5 home-flex" style={{display : 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{height: '150px'}}>
                <span ref={ref} style={{fontSize: '3rem', color: '#044bb4ff'}}></span>
                <p className="text-below-span" style={{color: 'white', fontSize: '2.2rem', marginTop: '50px', fontFamily: "'Montserrat'"}}>Building Scalable & Modern Web Solutions</p>
            </div>
            
            <img className="profileIMG" src={Profile} alt="noimage" style={{maxWidth: '400px', width: '100%', borderRadius: '20px', height: '500px', objectFit: 'cover'}} />
        </div>
    </div>
    <div className="container-fluid pt-4" style={{height: '140px', backgroundColor: '#1a1a1a', display: 'flex', justifyContent : 'center'}}>
        <div className="exp-btn">
            <Button />
        </div>
    </div>
    <div className="container-fluid text-center small-intro" style={{height: '700px', paddingTop: '20px', letterSpacing : '1px', fontFamily: 'Montserrat', backgroundColor: '#1a1a1a', color: 'white', width: '100%'}}>
        <div className="aboutmex">
            <h1 data-aos="fade-in">Hello!</h1>
            <h1 data-aos="fade-in">My Name is Mohammed Aasim Kartapillai</h1>
            <h4 data-aos="zoom-in" style={{color: 'gray'}}>I’m passionate about coding and creating projects that solve real problems.</h4>
            <br /><br /><br />
            <h1 style={{color: 'rgb(180, 157, 91)'}}>Quick REVIEW</h1>
            <a href="#tech-stack" className="btn btn-outline-warning mt-3" style={{borderRadius: "30px", padding: "10px 20px", fontWeight: "600"}}>Go to Tech Stack Section</a><br />
            <a href="#academics-section" className="btn btn-outline-warning mt-3" style={{borderRadius: "30px", padding: "10px 20px", fontWeight: "600"}}>Go to Academic Section</a>
        </div>
        <div className="certificates" style={{paddingTop: '100px'}}>
            <h1 className="pb-3" style={{fontSize: '30px', color : 'rgb(180, 157, 91)'}}>CERTIFICATES</h1>
            <div>
                <p data-aos="fade-in" style={{color: 'gray'}}>British Council – Spoken English (Intermediate)</p>
                <p data-aos="fade-in" style={{color: 'gray'}}>NIIT – Data Structures & Algorithms, C & C++</p>
            </div>
        </div>
    </div>
    <div className="container-fluid text-center tech-stack-heading" id="tech-stack" style={{paddingTop: '50px',height: '100px', fontFamily: "'Montserrat'", backgroundColor: '#1a1a1a'}}>
        <h1 data-aos="fade-in" style={{fontSize: '30px', color: 'rgb(180, 157, 91)'}} >TECH STACK</h1>
    </div>
    <div className="container-fluid gap-4 d-flex tech-logo" style={{backgroundColor: '#1a1a1a', height: "100px", justifyContent: 'center'}}>
        <div className="card mb-3" style={{maxWidth: "18rem", height: '150px', border: 'none'}}>
            <div className="card-body card-body-logo" style={{backgroundColor: '#1a1a1a'}}>
                <h1 className="card-title" style={{fontSize: '100px'}}><i data-aos="fade-in" className="devicon-mongodb-plain colored"></i></h1>
            </div>
        </div>
        <div className="card mb-3" style={{maxWidth: "18rem", height: '150px', border: 'none'}}>
            <div className="card-body card-body-logo" style={{backgroundColor: '#1a1a1a'}}>
                <h1 className="card-title" style={{fontSize: '100px', color : 'white'}}><i data-aos="fade-in" class="devicon-express-original"></i></h1>
            </div>
        </div>
        <div className="card mb-3" style={{maxWidth: "18rem", height: '150px', border: 'none'}}>
            <div className="card-body card-body-logo" style={{backgroundColor: '#1a1a1a'}}>
                <h1 className="card-title" style={{fontSize: '100px'}}><i data-aos="fade-in" class="devicon-react-original colored"></i></h1>
            </div>
        </div>
        <div className="card mb-3" style={{maxWidth: "18rem", height: '150px', border: 'none'}}>
            <div className="card-body card-body-logo" style={{backgroundColor: '#1a1a1a'}}>
                <h1 className="card-title" style={{fontSize: '100px'}}><i data-aos="fade-in" class="devicon-nodejs-plain colored"></i></h1>
            </div>
        </div>
    </div>
    <div className="container-fluid last-section" style={{display: 'flex', height: '250px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1a'}}>
        <TechStackButton />
    </div>
    <div className="container-fluid education-section" style={{textAlign: 'center', color: 'rgb(180, 157, 91)', backgroundColor: '#1a1a1a', height: '100px'}}>
        <h1 id="academics-section" style={{fontSize: '30px', fontFamily: "'Montserrat'"}} data-aos="fade-in">ACADEMICS</h1>
    </div>
    {/* <div className="container-fluid depaul-card" style={{backgroundColor: '#1a1a1a', height: '400px', display: 'flex', justifyContent: 'center'}}>
        <div class="card mb-3" style={{border: 'none', height: '50px'}}>
            <img src="https://admissions24.measiit.edu.in/wp-content/uploads/2023/12/logo-red-2.png" class="card-img-top" alt="noimage"  />
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', fontFamily: "'Montserrat'", maxWidth:'900px'}}>
                <h5 class="card-title">Postgraduate (PG)</h5>
                <p class="card-text">M.S in Computer Science</p>
                <p class="card-text">DePaul University | Aug 2023 — Jun 2025</p>
                <p class="card-text"><small class="text-body-light">Location: Chicago, United States</small></p>
            </div>
        </div>
    </div> */}
    <div className="container-fluid new-college-card" style={{backgroundColor: '#1a1a1a', display: 'flex', justifyContent: 'center', padding: '30px 0'}}>
    <div className="card mb-3 shadow-lg" style={{border: 'none', maxWidth: '860px', width: '100%'}}>
        <img src="../../assets/pg.jpg" className="card-img-top" alt="noimage" 
        style={{objectFit: "contain", backgroundColor: 'white', height: '250px', padding: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} />
        <div className="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', fontFamily: "'Montserrat'"}}>
        <h5 className="card-title" style={{color: 'rgb(180, 157, 91)'}}>Postgraduate (PG)</h5>
        <p className="card-text" style={{fontSize: '18px'}}>Master Of Computer Application</p>
        <p className="card-text">MEASI Institute of Information Technology | Sep 2023 — May 2025</p>
        <p className="card-text"><small>Location: Chennai, India</small></p>
        </div>
    </div>
    </div>
    <div className="container-fluid new-college-card" style={{backgroundColor: '#1a1a1a', display: 'flex', justifyContent: 'center', padding: '30px 0'}}>
    <div className="card mb-3 shadow-lg" style={{border: 'none', maxWidth: '860px', width: '100%'}}>
        <img src="../../assets/ug.png" className="card-img-top" alt="noimage" 
        style={{objectFit: "contain", backgroundColor: 'white', height: '250px', padding: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} />
        <div className="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', fontFamily: "'Montserrat'"}}>
        <h5 className="card-title" style={{color: 'rgb(180, 157, 91)'}}>Undergraduate (UG)</h5>
        <p className="card-text" style={{fontSize: '18px'}}>B.com Information System Management</p>
        <p className="card-text">The New College | Jun 2019 — Apr 2022</p>
        <p className="card-text"><small>Location: Chennai, India</small></p>
        </div>
    </div>
    </div>
    <style>
        {`
        .typed-cursor{
        font-size : 3rem;
        color : white;
        }
        @media (max-width: 768px){
        .new-college-card{
        padding : 30px 15px !important;
        }
        .profileIMG{
        height : 450px !important;
        }
        span{
        font-size : 19px !important;
        }
        .svce-section{
        height : 400px !important;
        }
        .text-below-span{
        margin-top : 20px !important;
        font-size : 1.2rem !important;
        }
        .home-flex{
        flex-direction : column;
        align-items : center;
        }
        .exp-btn{
        margin-top : 140px;
        }
        .aboutmex{
        margin-top : 90px;
        }
        .small-intro{
        height : 950px !important;
        }
        .tech-stack-heading{
        height : 400px !important;
        padding-top : 10px !important;
        }
        .tech-logo{
        padding-top : 90px !important;
        display: flex;
        flex-direction : column;
        align-items : center;
        }
        .card-body-logo:hover{
        background-color : rgb(16, 17, 18) !important;
        }
        .last-section{
        height : 500px !important;
        padding-top : 300px !important;
        }
        .education-section{
        height : 100px !important;
        }
        .depaul-card{
        height : 320px !important;
        }
        }

        .card-body-logo:hover{
        background-color : rgba(18, 16, 16, 1) !important;
        }
        `}        
    </style>
    </>
  )
}
export default Home