import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    const quantity = useSelector(state => state.cart.quantity)

    return (
        <nav>
            <h1><NavLink to={"/"}>Store</NavLink></h1>
            <ul>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/products"}>Products</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <div style={{ position: "relative", padding: "8px" }}>
                    <NavLink to={"/cart"}>Cart</NavLink>
                    <p style={{ position: "absolute", right: "0", top: "0", fontSize: "16px" }}> {quantity}</p>
                </div>
            </ul>
        </nav >
    )
}

export default Navbar