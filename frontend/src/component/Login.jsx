import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


const Login = () => {
  return (
    <div className='divy'>
    <div className='wrapper'>
        <form action=''>
            <h1>
                Login
            </h1>
            <div className='"input-boxx'>
                <input type="text" placeholder='Username' required />
                <FaUser />
            </div>
            <div className='input-boxx'>
                <input type="password" placeholder='Password' required />
                <RiLockPasswordFill />
            </div>
            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember Me</label>
                <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
                <p>Don't Hace and account <a href='#'>Register</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login