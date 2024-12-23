import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import Header1 from './component/Header1'
import Header2 from './component/Header2'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import Signup from './component/Signup'
import Profil from './component/Profil'
import Education from './component/Education'
import Course from './component/Course'
import CoursePage from './component/CoursePage'
import PaymentPage from './component/PaymentPage'
import Learn from './component/Learn'
import Certifica from './component/Certifica'


function App() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && location.pathname !== '/home' && location.pathname !== '/signup' && location.pathname !== '/profil' && location.pathname !== '/education' && location.pathname !== '/course' && location.pathname !== '/coursePage' && location.pathname !== '/payment' && location.pathname !== '/learn' && !location.pathname.startsWith('/certifica/') && <Header1 />}
      {location.pathname !== '/home' && location.pathname !== '/profil' && location.pathname !== '/education' && location.pathname !== '/course' && location.pathname !== '/coursePage' && location.pathname !== '/payment' && location.pathname !== '/learn' && !location.pathname.startsWith('/certifica/') && <Header2 />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/education' element={<Education />} />
        <Route path='/course' element={<Course />} />
        <Route path='/coursePage' element={<CoursePage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/learn' element={<Learn />} />
        <Route path="/certifica/:courseId" element={<Certifica />} />
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/home' && location.pathname !== '/signup' && location.pathname !== '/profil' && location.pathname !== '/education' && location.pathname !== '/course' && location.pathname !== '/coursePage' && location.pathname !== '/payment' && location.pathname !== '/learn' && !location.pathname.startsWith('/certifica/') && <Navbar />}
      {location.pathname !== '/login' && location.pathname !== '/home' && location.pathname !== '/signup' && location.pathname !== '/profil' && location.pathname !== '/education' && location.pathname !== '/course' && location.pathname !== '/coursePage' && location.pathname !== '/payment' && location.pathname !== '/learn' && !location.pathname.startsWith('/certifica/') && <Dashboard />}
    </div>
  )
}

export default App
