import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
 
const Navbar = () => {
    return(
        <>
        <nav>
            <ul className='nav-cont'>
                <li ><Link to='/Projects' id='pro-d'>Projects</Link></li>
                <li ><Link to='/' id='hm-d'>Home</Link></li>
                <li ><Link to='/Resume' id='res-d'>Resume</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar