import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>|<Link to="/favoritos">Favoritos</Link>
        </div>
    )

}