import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => setMobileOpen(!mobileOpen);

    // Close mobile menu when a link is clicked
    const closeMenu = () => setMobileOpen(false);

    return (
        <header
            id="header"
            className={`header d-flex align-items-center light-background sticky-top ${mobileOpen ? 'mobile-nav-active' : ''
                }`}
        >
            <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none"
                    onClick={closeMenu}
                >
                    <h1 className="sitename mb-0">Sahil</h1>
                </NavLink>

                {/* Navigation Menu */}
                <nav id="navmenu" className="navmenu">
                    <ul className="list-unstyled mb-0">

                        <li>
                            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/resume" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Resume
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Services
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Portfolio
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Contact
                            </NavLink>
                        </li>

                    </ul>

                    {/* Mobile Toggle Button */}
                    <i
                        className={`mobile-nav-toggle d-xl-none bi ${mobileOpen ? 'bi-x' : 'bi-list'}`}
                        onClick={toggleMenu}
                    ></i>
                </nav>

                {/* Social Links */}
                <div className="header-social-links d-flex gap-2">
                    <a href="https://github.com/sahil-15-12-2002" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sahil-kumar-9a102b219" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/_sahil_kumar_35" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>

            </div>
        </header>
    );
};

export default Header;