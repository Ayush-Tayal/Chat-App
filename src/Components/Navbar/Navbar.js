import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
               <Link to="/"> Let's Chat </Link>               
            </div>
        </>
    )
}

export default Navbar
