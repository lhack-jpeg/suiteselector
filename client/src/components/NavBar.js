import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
    return (
        <header className="main-header">
            <div className="logo">
                <Link to="/">
                    <h3>Suite Selector</h3>
                </Link>
            </div>
            <nav className="navbar">
                <div className="main-nav">
                    <ul className="main-nav__nav-items">
                        <li className="main-nav__item">
                            <NavLink to="/" className="Navbar__link">
                                Home
                            </NavLink>
                        </li>
                        <li className="main-nav__item">
                            <NavLink to="/show" className="Navbar__link">
                                Show all
                            </NavLink>
                        </li>
                        <li className="main-nav__item">
                            <NavLink
                                to="show/toilets/backInlet"
                                className="Navbar__link"
                            >
                                Back Inlet
                            </NavLink>
                        </li>
                        <li className="main-nav__item">
                            <NavLink
                                to="show/toilets/bottomInlet"
                                className="Navbar__link"
                            >
                                Bottom Inlet
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
