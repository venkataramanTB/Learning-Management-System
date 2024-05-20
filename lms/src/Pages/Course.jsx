import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper, Grid } from '@material-ui/core';

const Course = () => {
    const [course, setCourse] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`http://localhost:5000/course/${id}`);
                const data = await response.json();
                setCourse(data);
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };
        fetchCourse();
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>{course.CourseName}</Typography>
                <Typography variant="subtitle1" gutterBottom>Instructor: {course.Instructor}</Typography>
                <Typography variant="body1" gutterBottom>Description: {course.Description}</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <Typography variant="body1"><strong>Start Date:</strong> {course.StartDate}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant="body1"><strong>End Date:</strong> {course.EndDate}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant="body1"><strong>Price:</strong> {course.Price}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant="body1"><strong>Level:</strong> {course.Level}</Typography>
                    </Grid>
                </Grid>
                <Typography variant="body1" gutterBottom><strong>Category:</strong> {course.Category}</Typography>
                <Typography variant="body1" gutterBottom><strong>Status:</strong> {course.Status}</Typography>
            </Paper>
        </div>
    );
};

export default Course;
