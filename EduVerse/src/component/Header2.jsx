import React from 'react'
import logo1 from '../image/logo1.png'
import yazı from '../image/yazı.png'
import '../css/Header2.css'
import basket from '../image/basket.png'
import search from '../image/search.png'
import hearth from '../image/heart.png'
import bell from '../image/bell.png'
import { Link } from 'react-router-dom';

function Header2() {
    return (
        <div>
            <div className='header2'>
                <div className='header-logo'>
                    <img src={logo1} className='logo1' />
                    <img src={yazı} className='logo2' />
                </div>

                <div className='header2-search'>
                    <img className='search-icon' src={search} />
                    <input type='text' placeholder='Dilediğiniz şeyi arayın' className='search-input' />
                </div>

                <div className='icons'>
                    <a><img src={basket} className='basket' /></a>
                    <a><img src={hearth} className='heart' /></a>
                    <a><img src={bell} className='bell' /></a>
                </div>

                <div className='action-link'>
                    <Link to='/login' className='link2'>Giriş Yap</Link>
                    <Link to='/signup' className='link2'>Kayıt Ol</Link>
                </div>
            </div>
        </div>
    )
}

export default Header2