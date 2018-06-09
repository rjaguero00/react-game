import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div className="nav-container">
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Vikings</span>
            <span className="navbar-brand mb-0 h2">Click an image to begin!</span>
            <span className="navbar-brand mb-0 h3">Score: 0 | Top Score: 0</span>
        </nav>
    </div>
);

export default Navbar;