import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
    <div className="nav-container">
        <nav className="navbar navbar-light">
            <span className="navbar-brand mb-0 h1">Vikings</span>
            <span className="navbar-brand mb-0 h2">{props.message}</span>
            <span className="navbar-brand mb-0 h3">Score: {props.score}</span>
        </nav>
    </div>
);

export default Navbar;