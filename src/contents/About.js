import React from 'react'
import profilepic from '../img/profile.jpg'

function About() {
    return (
        <div className="condiv about">
            <h1 className='subtopic'>About Me</h1>
            <img src={profilepic} alt="profilepic" className='profilepic' />
            <h3>Hi, I'm Sahatchai</h3>
            <p>graduated Software
                Engineering with experience in front end
                development during a study project
                and I have passionate about front end
                thus I continuously improve
                programming skill purpose for ready to
                do a job. I have complete confidence
                and can bring me front-end experience
                background to make an advantage to
                your organization SKILLS & EXPERTISE</p>
        </div>
    )
}

export default About