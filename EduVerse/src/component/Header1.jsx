import React from 'react'
import '../css/Header1.css'
import { Link } from 'react-router-dom'

function Header1() {
    return (
        <div>
            <div className='header'>
                <div className='title'>EduVerse'e Hoş Geldiniz!</div>
                <div className='header-links'>
                    <a className='link'>Hakkımızda</a>
                    <Link to='/education' className='link'>Eğitim Verin</Link>
                </div>
            </div>
        </div>
    )
}

export default Header1