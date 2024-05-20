import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Course.css';

const Course = () => {
    const [course, setCourse] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`http://localhost:5000/course`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ courseId: id })
                });
                const data = await response.json();
                setCourse(data);
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };
        fetchCourse();
    }, []);

    const handleBuyNow = () => {
        navigate('/comingsoon'); // Navigate to the payment page
    };

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div className="course-container">
            <h1 className="course-title">{course.CourseName}</h1>
            <p className="course-info">Instructor: {course.Instructor}</p>
            <p className="course-info">Description: {course.Description}</p>
            <p className="course-info">Start Date: {course.StartDate}</p>
            <p className="course-info">End Date: {course.EndDate}</p>
            <p className="course-info">Price: {course.Price}</p>
            <p className="course-info">Level: {course.Level}</p>
            <p className="course-info">Category: {course.Category}</p>
            <p className="course-info">Status: {course.Status}</p>
            <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
        </div>
    );
};

export default Course;
