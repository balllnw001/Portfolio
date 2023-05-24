import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink end to="/" >Home</NavLink></li>
                <li><NavLink to="/about" >About</NavLink></li>
                <li><NavLink to="/education" >Education</NavLink></li>
                <li><NavLink to="/skills" >Skills</NavLink></li>
                <li><NavLink to="/experience" >Experience</NavLink></li>
                <li><NavLink to="/contact" >Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar