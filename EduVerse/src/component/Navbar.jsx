import React from 'react';
import { Link } from 'react-router-dom';
import { sendCourseName } from '../rest/Service';
import '../css/Navbar.css';

function Navbar() {
    const handleClick = (courseName) => {
        localStorage.setItem('selectedCourseName', courseName); // Kurs adını localStorage'a kaydet
    };

    return (
        <div>
            <div className='menu-bar'>
                <ul className='menu-list'>
                    <Link to='/coursePage' className='menu-item' onClick={() => handleClick('Java')}>JAVA</Link>
                    <Link to='/coursePage' className='menu-item' onClick={() => handleClick('Python')}>PYTHON</Link>
                    <Link to='/coursePage' className='menu-item' onClick={() => handleClick('Sql')}>SQL</Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;