import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <nav>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login/Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
            <h1 className="title">Welcome to the Learning Management System</h1>
            <p className="description">Our Learning Management System provides a comprehensive, customizable, scalable, and easy to use platform to educators and learners. We are committed to making learning accessible and effective for all. Explore courses, create your own learning paths, and achieve your educational goals here.</p>
            <Link to="/login" className="login-button">Get Started</Link>
        </div>
    );
}

export default Home;