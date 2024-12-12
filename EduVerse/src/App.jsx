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

function App() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && <Header1 />}
      <Header2 />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {location.pathname !== '/login' && <Navbar />}
      {location.pathname !== '/login' && <Dashboard />}
    </div>
  )
}

export default App
