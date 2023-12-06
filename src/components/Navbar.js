import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// export default function Navbar() {
    // Only for hiding buttons when shrink window
    /*
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
    */

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Webby</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="about">About Me</Link>
                <Link to="projects">Projects</Link>
                <Link to="contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;