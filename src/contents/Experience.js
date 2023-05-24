import React from 'react'

// IMG
import GPFT from '../img/Gproject-frontend.png'
import GPBE from '../img/Gproject-backend.png'
import Flutter from '../img/Flutter.jpg'
import OTOP1 from '../img/OTOP1.png'
import OTOP2 from '../img/OTOP2.png'
import OTOP3 from '../img/OTOP3.png'
import OTOP4 from '../img/OTOP4.png'
import User from '../img/user.png'
import Admin from '../img/admin.png'

function Experience() {
    return (
        <div className="condiv experience">
            <h1 className='subtopic'>Experience</h1>
            <ul>
                <li>
                    <h3 className='subtopic-title'>GRADUATION PROJECT</h3>
                    <p>position : Full Stack Developer</p>
                    <p>Software Engineering Examination Management System</p>
                    <div className="Experience-main">
                        <div className="Experience-main-l">
                            <img src={GPFT} alt="Gproject" className='ExperienceIMG' />
                        </div>
                        <div className="Experience-main-r">
                            <img src={GPBE} alt="Gproject" className='ExperienceIMG' />
                        </div>
                    </div>
                </li>
                <li>
                    <h3 className='subtopic-title'>INTERNSHIP AT ALW COMPANY CHIANG MAI</h3>
                    <p>position : Mobile Developer</p>
                    <p>Program POS Restaurant</p>
                    <img src={Flutter} alt="Flutter" className='ExperienceIMGflutter' />
                </li>
                <li>
                    <h3 className='subtopic-title'>ADDITIONAL INTERNSHIP AT LAMPANG RAJABHAT UNIVERSITY</h3>
                    <p>position : Font-end Developer</p>
                    <p>OTOP Lampang</p>
                    <div className="Experience-main">
                        <div className="Experience-main-l">
                            <img src={OTOP1} alt="OTOP1" className='ExperienceIMG' />
                        </div>
                        <div className="Experience-main-r">
                            <img src={OTOP2} alt="OTOP2" className='ExperienceIMG' />
                        </div>
                    </div>
                    <h3>Responsive</h3>
                    <div className="Experience-main">
                        <div className="Experience-main-l">
                            <img src={OTOP3} alt="OTOP3" className='ExperienceIMGflutter' />
                        </div>
                        <div className="Experience-main-r">
                            <img src={OTOP4} alt="OTOP4" className='ExperienceIMGflutter' />
                        </div>
                    </div>
                </li>
                <li>
                    <h3 className='subtopic-title'>FREELANCE</h3>
                    <p>position : Full Stack Developer</p>
                    <p>Government document management system</p>
                    <div className="Experience-main">
                        <div className="Experience-main-l">
                            <img src={User} alt="Admin" className='ExperienceIMGflutter' />
                        </div>
                        <div className="Experience-main-r">
                            <img src={Admin} alt="Admin" className='ExperienceIMGflutter' />
                        </div>
                    </div>
                </li>
            </ul>

        </div >
    )
}

export default Experience