import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const user = {
        name: 'Venkataraman TB',
        email: 'sample@gmail.com',
        age: '20',
        course: 'python,c,java'
    };

    return (
        <div className="card">
            <div className="profile">
                <h1>Profile</h1>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Course:</strong> {user.course}</p>
                <Link to="/dashboard">Go to Dashboard</Link>
            </div>
        </div>
    );
}

export default Profile;