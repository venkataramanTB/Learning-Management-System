import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
const Profile = () => {
    const cachedUser = sessionStorage.getItem('loggedInUser');
    const user = cachedUser ? JSON.parse(cachedUser) : null;
    return (
        <div className='root'>
            <div className="card">
                <div className="profile">
                    <h1>Profile</h1>
                    <hr></hr>
                    {user ? (
                        <React.Fragment>
                            <p><strong>Username:</strong> {user.Username}</p>
                            <p><strong>Full Name:</strong> {user.FirstName} {user.LastName}</p>
                            <p><strong>Email:</strong> {user.Email}</p>
                            <p><strong>Age:</strong> {user.Age}</p>
                            <p><strong>Course:</strong> {user.course}</p>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <p>User details not found</p>
                            <Link to="/login" className="cta-button">Not yet Logged in</Link>
                        </React.Fragment>
                    )}
                    <Link to="/dash" className="cta-button">Go to Dashboard</Link>
                    <Link to="/logout" className="cta-button">Logout</Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;
