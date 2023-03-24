import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="NavBar">
            <div className="Logo">
                <Link to="/">
                    <h3>Suite Selector</h3>
                </Link>
            </div>
            <NavLink to="/" className="Navbar__link">
                Home
            </NavLink>
            <NavLink to="/show" className="Navbar__link">
                Show all
            </NavLink>
            <NavLink to="show/toilets/backInlet" className="Navbar__link">
                Back Inlet
            </NavLink>
            <NavLink to="show/toilets/bottomInlet" className="Navbar__link">
                Bottom Inlet
            </NavLink>
        </div>
    );
}
