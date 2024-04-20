import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './App.css'
import About from './component/About'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SignUp from './component/SignUp'
<<<<<<< HEAD
import {SnackbarProvider} from "notistack"
=======
import { SnackbarProvider } from "notistack"
import Contact from './component/Contact'
>>>>>>> 31c81c9249103dddd269e38791be2faf215ab64f
import Feedback from './component/Feedback'
import Login from './component/Login'
import { AppProvider } from './AppContext'
import Addservices from './component/Addservices'
<<<<<<< HEAD
import Services from './component/Services'
import PServices from './component/PService'
import MServices from './component/MService'
import LServices from './component/LService'


const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <SnackbarProvider>
          <Navbar />
          <Routes>
=======
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
>>>>>>> fa51dc0f4cd8c6fff87a602f065ceeca871525dd

            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path='/Feedback' element={<Feedback />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/PService' element={<PServices />} />
            <Route path='/LService' element={<LServices />} />
            <Route path='/MService' element={<MServices />} />
            <Route path='/Addservices' element={<Addservices />} />
            
          </Routes>

        </SnackbarProvider>
      </AppProvider>
    </BrowserRouter>

  )
}

export default App