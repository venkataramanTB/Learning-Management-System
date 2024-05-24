// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import CSS for styling

const Navbar = ({ userData }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-logo">
                    EduMatrix
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links"><i className="fas fa-home"></i> Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links"><i className="fas fa-info-circle"></i> About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-links"><i className="fas fa-user"></i> Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courses" className="nav-links"><i className="fas fa-book"></i> Courses</Link>
                    </li>
                    {userData ? (
                        <li className="nav-item">
                            <Link to="/dash" className="nav-links"><i className="fas fa-user"></i> Dashboard</Link>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link to="/login" className="nav-links"><i className="fas fa-sign-in-alt"></i> Login</Link>
                        </li>
                    )}
                    {userData && (
                        <li className="nav-item">
                            <Link to="/logout" className="nav-links"><i className="fas fa-sign-out-alt"></i> Logout</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
