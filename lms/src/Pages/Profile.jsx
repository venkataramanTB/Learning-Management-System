import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const cachedUser = sessionStorage.getItem('loggedInUser');
    const user = cachedUser ? JSON.parse(cachedUser) : null;

    return (
        <div className="card">
            <div className="profile">
                <h1>Profile</h1>
                {user ? (
                    <React.Fragment>
                        <p><strong>Name:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>Course:</strong> {user.course}</p>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                    <p>User details not found</p>
                    <Link to="/login">Not yet Logged in</Link>
                    </React.Fragment>
                )}
                <Link to="/dashboard">Go to Dashboard</Link>
            </div>
        </div>
    );
}

export default Profile;
