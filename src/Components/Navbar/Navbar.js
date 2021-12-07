import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
               <Link to="/chat-app"> <h1>CHAT APP</h1> </Link>               
            </div>
        </>
    )
}

export default Navbar
