import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css'
import About from './component/About'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SignUp from './component/SignUp'
import {SnackbarProvider} from "notistack"
import Feedback from './component/Feedback'
import Login from './component/Login'

import Servicestest from './component/Servicestest'
import Addservices from './component/Addservices'
import Loginn from './component/Loginn'
import Contact from './component/Contact'

const App = () => {
  return (
   <BrowserRouter>
   <SnackbarProvider>
   <Navbar/>
   <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home />} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Feedback' element={<Feedback/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Servicestest' element={<Servicestest/>}/>
    <Route path='/Addservices' element={<Addservices/>} />
    <Route path='/Loginn' element={<Loginn/>} />
   
   </Routes>

   </SnackbarProvider>
   </BrowserRouter>

  )
}

export default App