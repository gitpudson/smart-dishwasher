import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <Link to="/" >Smart Dishwasher</Link>
               
            </div>
        </div>
    )
}

export default Navbar
