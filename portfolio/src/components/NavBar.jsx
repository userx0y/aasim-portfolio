import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const NavBar = () => {
  const navigate = useNavigate();
  const handleNav = (path) => {
    navigate(path);
  };
  return (
    <>
    <div style={{backgroundColor: '#044bb4ff'}}>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand text-white navbar-xname" to='/' style={{fontFamily: 'Montserrat', fontSize : '18px'}}>MOHAMMED AASIM KARTAPILLAI</NavLink>
        <div className="offcanvas offcanvas-start half-offcanvas" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{backgroundColor: "#1a1a1a"}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white" id="offcanvasScrollingLabel" style={{fontFamily: 'Montserrat', fontSize: '18px'}}>MENU</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            {/* <button className="nav-link text-white" style={{fontFamily: 'Montserrat', fontSize: '18px'}} data-bs-dismiss="offcanvas" onClick={()=> handleNav('/experience')}>EXPERIENCE</button> */}
            </li>
            <li className="nav-item">
            <button className="nav-link text-white" style={{fontFamily: 'Montserrat', fontSize: '18px'}} data-bs-dismiss="offcanvas" onClick={()=> handleNav('/projects')}>OPEN SOURCE</button>
            </li>
            <li className="nav-item">
            <button className="nav-link text-white" style={{fontFamily: 'Montserrat', fontSize: '18px'}} data-bs-dismiss="offcanvas" onClick={()=> handleNav('/contact')}>CONTACT</button>
            </li>
        </ul>
        </div>
      </div>
    </div>
    </nav>
    </div>
    <style>
      {`
      @media(max-width : 768px){
      .navbar-xname{
      font-size : 13px !important;
      padding : 0px 0px !important;
      }
      }
      `}
    </style>
    </>
  )
}
export default NavBar