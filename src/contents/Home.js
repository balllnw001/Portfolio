import React from 'react'
import profilepic from '../img/profile.jpg'
import ReactTypingEffect from 'react-typing-effect'
import Social from '../components/Social'

function Home() {
    return (
        <div className="condiv home">
            <img src={profilepic} alt="profilepic" className='profilepic' />
            <ReactTypingEffect text={['I am Sahatchai Somiya', 'I am Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
            <Social />
        </div>
    )
}

export default Home