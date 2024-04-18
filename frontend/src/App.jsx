import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './App.css'
import About from './component/About'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SignUp from './component/SignUp'
import { SnackbarProvider } from "notistack"
import Contact from './component/Contact'
import Feedback from './component/Feedback'
import Login from './component/Login'
import { AppProvider } from './AppContext'
import Addservices from './component/Addservices'
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