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
import Header3 from './component/Header3'
import Dashboard2 from './component/Dasboard2'

function App() {

  const location = useLocation();

  return (
    <div>
      {/* Eğer login sayfasında değilsek Header1 ve Navbar göster */}
      {location.pathname !== '/login' && <Header1 />}


      {location.pathname !== '/home' && <Header2 />}

      {location.pathname === '/home' && <Header3 />}

      {location.pathname !== '/login' && <Navbar />}

      {location.pathname !== '/login' && location.pathname !== '/home' && <Dashboard />}

      {location.pathname === '/home' && <Dashboard2 />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
