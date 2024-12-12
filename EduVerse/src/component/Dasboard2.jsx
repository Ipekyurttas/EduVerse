import React from 'react'
import yazilim from '../image/pc.png'
import sistem from '../image/mouse.png'
import isletme from '../image/computer.png'
import tasarim from '../image/earth.png'
import monitor from '../image/monitor.jpeg'
import '../css/Dashboard.css'

function Dashboard2() {
    return (
        <div>
            <div className='dasboard-title'>
                <h1 className='h1-title'>Hoş Geldiniz!</h1>
            </div>
            <div className='dashboard-container2'>
                <div className='left-section'>
                    <div className='menu-write'>
                        <img src={yazilim} className='menu-icon' />
                        <span>Yazılım Dünyası</span>
                    </div>
                    <div className='menu-write' >
                        <img src={sistem} className='menu-icon' />
                        <span>Sistem Dünyası</span>
                    </div>
                    <div className='menu-write'>
                        <img src={isletme} className='menu-icon' />
                        <span>İşletme Dünyası</span>
                    </div>
                    <div className='menu-write'>
                        <img src={tasarim} className='menu-icon' />
                        <span>Tasarım Dünyası</span>
                    </div>
                </div>
                <div className='right-section'>
                    <img src={monitor} className='monitor-image' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard2