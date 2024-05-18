import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import './Home.css';

const Home = () => {
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser')); // Parse the user data
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate loading time
    }, []);

    return (
        <div className="home">
            {loading ? (
                <div className="loader-container">
                    <PacmanLoader color="black" size={50} speedMultiplier={2}/> 
                </div>
            ) : (
                <>
                    <nav className="navbar">
                        <div className="navbar-container">
                            <Link to="/" className="nav-logo">
                                LMS
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
                    <div className="home-content">
                        <h1 className="title">Welcome to the Learning Management System</h1>
                        <p className="description">Our Learning Management System provides a comprehensive, customizable, scalable, and easy to use platform to educators and learners. We are committed to making learning accessible and effective for all. Explore courses, create your own learning paths, and achieve your educational goals here.</p>
                        {userData ? (
                            <Link to="/dash" className="cta-button">Go to Dashboard</Link>
                        ) : (
                            <Link to="/login" className="cta-button">Get Started</Link>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
