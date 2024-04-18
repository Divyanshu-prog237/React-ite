import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import  useAppContext  from '../AppContext'


const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  // const isServicePage = location.pathname === '/Services';

  const isLoggedIn = sessionStorage.getItem('isloggedin');
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

  const {logout} = useAppContext();

  console.log(isLoggedIn);
  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${isHomePage ? 'navbar-transparent' : 'navbar-black'}`}>
      {/* <nav className={`navbar navbar-expand-lg ${isServicePage ? 'navbar-transparent' : 'navbar-black'}`}> */}
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <Link className="navbar-brand me-2" to="/Admin/base">
            <img
              src={logo}
              height={60}
              alt="skjh"
              // loading="lazy"
              style={{ marginTop: "-8px", marginBottom: "-8px" }}
            />
          </Link>
<<<<<<< HEAD
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
                <Link className="nav-link n-txt" to="/Services">
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
              <div className="d-flex align-items-center">

                <Link type='button' onClick={logout} className="btn btn-outline-light px-3 me-2">
                  Logout
                </Link>
                {/* <Link to="/UserProfile" className="btn btn-light me-3">Profile</Link> */}
              </div>
            ) : (

              <div className=" n-con d-flex align-items-center">

                <Link to="/Login" className="btn btn-outline-light ">
                  Login
                </Link>
                <Link to="/Signup" className="btn btn-light mx-3 ">
                  Signup
                </Link>
              </div>

            )}

          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* </nav> */}
      {/* Navbar */}
=======
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/SignUp">
            SignUp
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Services">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Servicestest">
            Service Test
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Loginn">
            Loginn
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Addservices">
            Add Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Feedback">
            Feedback
          </Link>
        </li>
      
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
  
>>>>>>> fa51dc0f4cd8c6fff87a602f065ceeca871525dd
    </div>
  )
}

export default Navbar