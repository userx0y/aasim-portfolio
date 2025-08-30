import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[]);
  return (
    <>
    <div className="container-fluid text-center pt-5 page-title-div" style={{backgroundColor: '#1a1a1a', fontFamily: 'Montserrat', color : 'rgb(180, 157, 91)', height: '200px'}}>
        <h1 className='page-title' style={{fontSize: '50px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase'}} data-aos="fade-in">Experience</h1>
    </div>
    <div className="container-fluid first-card" style={{display: 'flex', justifyContent: 'center',backgroundColor: '#1a1a1a', height: '610px'}}>
        <div className="card d-flex" style={{height: '150px', border: '1px solid black', width: '100%', maxWidth: '1270px'}}>
            <img className="card-img-top" src="https://colaninfotech.com/wp-content/themes/twentytwenty/custom/images/headanfoot/colan-logo.png" style={{width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'black'}}  alt="Card image cap" />
            <div className="card-body" style={{backgroundColor: 'rgba(47, 48, 49, 1)'}}>
                <p className='d-flex' style={{justifyContent: 'end', color : 'rgb(180, 157, 91)', fontFamily: "'Montserrat'"}}><b>DEC 2023 – JAN 2024</b></p>
                <h1 className='text-center' style={{color: 'white', fontFamily: "'Montserrat'"}} data-aos="fade-in">Python Django Developer, Colan Infotech</h1>
                <br />
                <p className="card-text text-white" style={{fontFamily: "'Montserrat'"}}>
                    <ul>
                    <li><b style={{color: 'rgb(180, 157, 91)'}}>Contributed to Colan CRM project</b>, focusing on backend automation and data management.</li>
                    <li>Developed a <b>Truecaller scraping automation</b> using Selenium to streamline customer data collection.</li>
                    <li>Implemented a feature where <b>Excel uploads are automatically processed</b> to extract and populate CRM tables, with option for manual entry.</li>
                    <li>Integrated automation outputs with the CRM system using <b>Python, Django, and REST APIs</b>.</li>
                    <li>Strengthened expertise in <b>web scraping, automation, and backend development</b> within a professional team environment.</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
    {/* <div className="container-fluid second-card" style={{display: 'flex', justifyContent: 'center',backgroundColor: '#1a1a1a', height: '750px'}}>
        <div className="card d-flex" style={{height: '150px', border: '1px solid black', width: '100%', maxWidth: '1270px'}}>
            <div style={{display: 'flex',borderRadius: '5px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', backgroundColor: 'white'}}>
                <img src="../../assets/tcs.png" style={{height: '120px', objectFit: 'contain'}} />
                <img src="../../assets/humana.png" style={{height: '50px', objectFit: 'contain', paddingBottom: '20px'}} />
            </div>
            <div className="card-body" style={{backgroundColor: 'rgba(47, 48, 49, 1)'}}>
                <p className='d-flex' style={{justifyContent: 'end', color : 'rgb(180, 157, 91)', fontFamily: "'Montserrat'"}}><b>Feb. 2022 – Sep.2023</b></p>
                <h1 className='text-center' style={{color: 'white', fontFamily: "'Montserrat'"}} data-aos="fade-in">ASP.NET Developer, Tata Consultancy Services TCS</h1>
                <br />
                <p className="card-text text-white" style={{fontFamily: "'Montserrat'"}}>
                    <ul>
                    <li>Led the migration of legacy <b style={{color: 'rgb(180, 157, 91)'}}>.NET</b> applications to <b style={{color: 'rgb(180, 157, 91)'}}>AWS</b>, leveraging <b style={{color: 'rgb(180, 157, 91)'}}>AWS Secrets Manager</b> to secure sensitive data, ensuring 100% compliance with security standards and reducing data breach risk by 30%.</li>
                    <li>Developed scalable backend systems using <b style={{color: 'rgb(180, 157, 91)'}}>C#, .NET Core</b>, and <b style={{color: 'rgb(180, 157, 91)'}}>ASP.NET MVC</b>, following clean coding practices to deliver robust solutions that improved system uptime by 25%.</li>
                    <li>Built dynamic and responsive front-end interfaces with <b style={{color: 'rgb(180, 157, 91)'}}>Angular</b>, enhancing user engagement by 20% and streamlining project management using <b style={{color: 'rgb(180, 157, 91)'}}>JIRA</b> to maintain 95% sprint velocity.</li>
                    <li>Modernized enterprise-grade web applications by integrating <b style={{color: 'rgb(180, 157, 91)'}}>C#, ASP.NET Core/MVC, and Web APIs on AWS</b>, increasing application performance by 35% and scalability for peak traffic loads.</li>
                    <li>Designed <b style={{color: 'rgb(180, 157, 91)'}}>fault-tolerant</b>, cost-effective <b style={{color: 'rgb(180, 157, 91)'}}>cloud architectures</b> that optimized web transactions and improved operational efficiency, reducing infrastructure costs by 18%.</li>
                    <li>Applied <b style={{color: 'rgb(180, 157, 91)'}}>OOP</b> principles and developed modular, reusable components using <b style={{color: 'rgb(180, 157, 91)'}}>Java, XML, and CGI</b>, and implemented <b style={{color: 'rgb(180, 157, 91)'}}>CI/CD</b> pipelines in <b style={{color: 'rgb(180, 157, 91)'}}>AWS</b>, accelerating deployment frequency by 40% and reducing release failures by 15%.</li>
                    <li>Developed microservices-based architectures using <b style={{color: 'rgb(180, 157, 91)'}}>.NET Core and Apache Kafka</b> for asynchronous communication, improving system scalability and enabling real-time data processing across distributed services.</li>
                    </ul>
                </p>
            </div>
        </div>
    </div> */}
    {/* <div className="container-fluid card-gap card-two" style={{display: 'flex', justifyContent: 'center',backgroundColor: '#1a1a1a', height: '600px'}}>
        <div className="card d-flex" style={{height: '100px', border: '1px solid black', width: '100%',maxWidth: '1270px'}}>
            <img className="card-img-top" src="../../assets/newgen.jpg" style={{width: '100%', height: '100%', objectFit: 'contain'}}  alt="Card image cap" />
            <div className="card-body" style={{backgroundColor: 'rgba(47, 48, 49, 1)'}}>
                <p className='d-flex' style={{justifyContent: 'end', color : 'rgb(180, 157, 91)', fontFamily: "'Montserrat'"}}><b>Feb. 2021 – Feb. 2022</b></p>
                <h1 className='text-center' style={{color: 'white', fontFamily: "'Montserrat'"}} data-aos="fade-in">Software Design Engineer-1, Newgen Software Technologies</h1>
                <br />
                <p className="card-text text-white" style={{fontFamily: "'Montserrat'"}}>
                    <ul>
                    <li>Maintained and enhanced internal reporting tools using <b style={{color: 'rgb(180, 157, 91)'}}>C#</b> and <b style={{color: 'rgb(180, 157, 91)'}}>ASP.NET</b>, improving backend process accuracy and cutting employee manual effort by 40%, which accelerated report generation timelines.</li>
                    <li>Designed and optimized complex <b style={{color: 'rgb(180, 157, 91)'}}>SQL</b> queries, stored procedures, and validation triggers to automate backend workflows, boosting data integrity by 25% and enhancing security compliance.</li>
                    <li>Performed thorough <b style={{color: 'rgb(180, 157, 91)'}}>unit testing</b> and debugged logic errors to improve code reliability. Led peer code reviews that enhanced code quality and reduced production bugs by 30%, contributing to more stable releases.</li>
                    <li>Supported the transition of <b style={{color: 'rgb(180, 157, 91)'}}>ETL workflows to SSIS-based architecture</b>, increasing pipeline reliability by 35% and reducing maintenance overhead.</li>
                    <li>Worked across <b style={{color: 'rgb(180, 157, 91)'}}>MSSQL, PostgreSQL, and Oracle</b> for data operations, optimizing query performance and reducing DB-level latencies by 30%, thereby improving overall data retrieval speed.</li>
                    <li>Authored detailed <b style={{color: 'rgb(180, 157, 91)'}}>technical documentation and user manuals</b>, enabling faster onboarding for 5+ new team members and improving system adoption rates by 20%.</li>
                    </ul>
                </p>
            </div>
        </div>
    </div> */}
    <style>
        {`
        @media(max-width: 768px){
        .card-gap{
        padding-top : 400px
        }
        .page-title{
        line-height: 1.2 !important;
        font-size : 30px !important;
        }
        .card-two{
        height : 1800px !important;
        }
        .page-title-div{
        height : 130px !important;
        }
        .first-card{
        height : 1150px !important;
        }
        .second-card{
        height : 1250px !important;
        }
        }
        `}
    </style>
    </>
  )
}
export default Experience