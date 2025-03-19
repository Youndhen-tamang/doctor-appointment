import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import MyProfile from './Pages/MyProfile'
import MyAppointments from './Pages/MyAppointments'
import Appointment from './Pages/Appointment'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/contact' element ={<Contact/>} />
      <Route path='/doctors/:speciality' element ={<Doctors/>} />
      <Route path='/doctors' element ={<Doctors/>} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/my-profile' element ={<MyProfile/>} />
      <Route path='/my-appointment' element ={<MyAppointments/>} />
      <Route path='/appoinments/:docId' element ={<Appointment/>} />
      </Routes>
      <Footer/>
     
    </div>
  )
}

export default App
