import React from 'react'
import '../css/Navbar.css'

function Navbar() {
    return (
        <div>
            <div className='menu-bar'>
                <ul className='menu-list'>
                    <li className='menu-item'>JAVA</li>
                    <li className='menu-item'>PYTHON</li>
                    <li className='menu-item'>SQL</li>
                    <li className='menu-item'>HTML</li>
                    <li className='menu-item'>C++</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar