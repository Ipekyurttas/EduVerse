import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import Signup from './component/Signup'
import Profil from './component/Profil'
import Education from './component/Education'
import Course from './component/Course'
import CoursePage from './component/CoursePage'
import PaymentPage from './component/PaymentPage'
import Learn from './component/Learn'
import Certifica from './component/Certifica'
import HomePage from './component/HomePage'


function App() {

  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
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
    </div>
  )
}

export default App
