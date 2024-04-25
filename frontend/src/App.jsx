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
import { AppProvider } from './AppContext'
import Addservices from './component/AddServices'
import Services from './component/Services'
import PServices from './component/PService'
import LServices from './component/LService'
import MServices from './component/MService'
import Login from './component/Login'
import ViewService from './component/ViewService'
import Pmanage from './component/Pmanage'
import Mmanage from './component/Mmanage'
import Lmanage from './component/Lmanage'
import UpdateService from './component/UpdateService'
import Main from './component/Admin/Index'
import Header from './component/Admin/Header'
import Base from './component/Admin/Base'
import UserAuth from './UserAuth';
import AdminAuth from './AdminAuth'
import Loginn from './component/Loginn'
import Umanage from './component/Umanage'

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
          <Route path='/Loginn' element={<Loginn />} />
          {/* <Route path='/Contact' element={<Contact />} /> */}
          <Route path='/About' element={<About />} />
          <Route path='/Feedback' element={<Feedback />} /> 
          <Route path='/Login' element={<Login />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/PService' element={<PServices />} />
          <Route path='/LService' element={<LServices />} />
          <Route path='/MService' element={<MServices />} />
          <Route path='/Addservices' element={<AdminAuth><Addservices /></AdminAuth>} />
          <Route path='/UpdateService/:id' element={<AdminAuth><UpdateService /></AdminAuth>} />
          <Route path='/ViewService/:id' element={<ViewService />} />

          <Route path='/Admin' element={ <AdminAuth><Main /></AdminAuth> } >
          <Route path='Header' element={<Header />} />
          <Route path='Base' element={<Base />} />
          <Route path='Pmanage' element={<Pmanage />} />
          <Route path='Mmanage' element={<Mmanage />} />
          <Route path='Lmanage' element={<Lmanage />} />
          <Route path='Umanage' element={<Umanage />} />


         </Route>

        </Routes>

      </SnackbarProvider>
    </AppProvider>
    </BrowserRouter >

  )
}

export default App