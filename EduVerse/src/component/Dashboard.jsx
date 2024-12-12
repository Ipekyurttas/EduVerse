import React from 'react'
import yazilim from '../image/pc.png'
import sistem from '../image/mouse.png'
import isletme from '../image/computer.png'
import tasarim from '../image/earth.png'

function Dashboard() {
    return (
        <div>
            <div>
                <div>
                    <img src={yazilim} />
                    <span>Yazılım Dünyası</span>
                </div>
                <div>
                    <img src={sistem} />
                    <span>Sistem Dünyası</span>
                </div>
                <div>
                    <img src={isletme} />
                    <span>İşletme Dünyası</span>
                </div>
                <div>
                    <img src={tasarim} />
                    <span>Tasarım Dünyası</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard