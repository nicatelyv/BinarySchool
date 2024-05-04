import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <h1><NavLink to={"/"}>Store</NavLink></h1>
            <ul>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/products"}>Products</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar