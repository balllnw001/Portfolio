import React from 'react'

import Bike1 from '../img/Bike.png'
import Bike2 from '../img/Bike-content.png'
import Bike3 from '../img/Bike1.png'
import Bike4 from '../img/Bike-content1.png'

function Performance() {
    return (
        <div className="condiv performance">
            <h1 className="subtopic">Performance</h1>
            <h3>Design</h3>
            <ul>
                <li>
                    <h3 className='subtopic-title'>Harley Davidson</h3>
                    <div className="Experience-main">
                        <div className="Experience-main-l">
                            <img src={Bike1} alt="OTOP1" className='ExperienceIMG' />
                        </div>
                        <div className="Experience-main-r">
                            <img src={Bike2} alt="Bike2" className='ExperienceIMG' />
                        </div>
                    </div>
                    <h3>Responsive</h3>
                    <div className="Experience-main">
                        <div className="Experience-main-l">
                            <img src={Bike3} alt="Bike3" className='ExperienceIMGflutter' />
                        </div>
                        <div className="Experience-main-r">
                            <img src={Bike4} alt="Bike4" className='ExperienceIMGflutter' />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Performance