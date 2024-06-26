import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import  useAppContext  from '../AppContext'


const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const isLoggedIn = sessionStorage.getItem('isloggedin');
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

  const {logout} = useAppContext();

  console.log(isLoggedIn);
  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${isHomePage ? 'navbar-transparent' : 'navbar-black'}`}>
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <Link className="navbar-brand me-2" to="/Admin/base">
            <img
              src={logo}
              height={40}
              alt="skjh"
              // loading="lazy"
              style={{ marginTop: "-8px", marginBottom: "-8px" }}
            />
          </Link>
          {/* Toggle button */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button> */}
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link n-txt" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/About">
                  AboutUs
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link n-txt" to="/services">
                  Services
                </Link>
              </li>

              <li>
                <Link className="nav-link n-txt" to="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Left links */}
            {isLoggedIn ? (
              <div className="d-flex align-items-center n-con">

                <Link type='button' onClick={logout} className="btn btn-outline-light px-3 me-2">
                  Logout
                </Link>
                {/* <Link to="/UserProfile" className="btn btn-light me-3">Profile</Link> */}
              </div>
            ) : (

              <div className="n-con d-flex align-items-center">

                <Link to="/Loginn" className="btn btn-outline-light px-3" >
                  Login
                </Link>
                <Link to="/Signup" className="btn btn-light" style={{marginLeft:'20px'}}>
                  Sign up for free
                </Link>
              </div>

            )}

          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </div>
  )
}

export default Navbar