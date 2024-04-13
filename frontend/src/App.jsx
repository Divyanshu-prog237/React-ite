import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import About from './component/About'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SignUp from './component/SignUp'
import {SnackbarProvider} from "notistack"
import Services from './component/Services'
import Contact from './component/Contact'
import Feedback from './component/Feedback'
import Login from './component/Login'

const App = () => {
  return (
   <BrowserRouter>
   <SnackbarProvider>
   <Navbar/>
   <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home />} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path = '/Services' element={<Services/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Feedback' element={<Feedback/>} />
    <Route path='/Login' element={<Login/>} />

   </Routes>

   </SnackbarProvider>
   </BrowserRouter>

  )
}

export default App