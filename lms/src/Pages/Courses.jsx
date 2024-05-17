import React from 'react';
import { Link } from 'react-router-dom';
const Courses = () => {
    const courses = [
        { id: 1, name: 'Course 1', offer: '50% off' },
        { id: 2, name: 'Course 2', offer: '30% off' },
        { id: 3, name: 'Course 3', offer: '20% off' },
        { id: 4, name: 'Course 4', offer: '10% off' },
        { id: 5, name: 'Course 5', offer: 'No offer' },
        { id: 6, name: 'Course 6', offer: '40% off' },
        { id: 7, name: 'Course 7', offer: '15% off' },
        { id: 8, name: 'Course 8', offer: '25% off' },
        { id: 9, name: 'Course 9', offer: '5% off' },
    ];

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, backgroundColor: '#f2f2f2' }}>
                    <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/"><i className="fas fa-home"></i>   Home</Link></li>
                    <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/about"><i className="fas fa-info-circle"></i>   About</Link></li>
                    <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/profile"><i className="fas fa-user"></i>   Profile</Link></li>  
                    <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/courses"><i className='fas fa-books'></i>  Courses</Link></li>
                    <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/login"><i className="fas fa-sign-in-alt"></i>   Login</Link></li>
                </ul>
            </nav>
            <h1 style={{ fontSize: '36px', marginTop: '20px' }}>Available Courses</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                {courses.map(course => (
                    <div key={course.id} style={{ width: '300px', margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <h3>{course.name}</h3>
                        <p>Offer: {course.offer}</p>
                        <Link to={`/course/${course.id}`} style={{ backgroundColor: '#007bff', color: 'white', padding: '5px 10px', textDecoration: 'none', borderRadius: '5px' }}>View Course</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
