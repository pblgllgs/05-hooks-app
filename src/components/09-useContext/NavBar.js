import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">Features</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

