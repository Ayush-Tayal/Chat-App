import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
    return (
        <div className="home-comp">
            <h1>Welcome to Home Page</h1>
            
            <div className="home-buttons">
                <Link to='/signup'><button>Sign Up</button></Link>  
                <Link to='/signin'><button>Sign In</button></Link>
            </div>
            
        </div>
    )
}

export default Home
