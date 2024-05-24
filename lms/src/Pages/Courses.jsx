import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    Button 
} from '@material-ui/core';
import { ClipLoader } from 'react-spinners'; 
import './Home.css';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: '50px',
    },
    title: {
        fontSize: '36px',
        marginTop: '20px',
        color: '#000000', 
    },
    courseCard: {
        width: '300px',
        margin: '10px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    viewCourseBtn: {
        backgroundColor: '#76ABAE',
        color: 'white',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#5c8d91',
        },
        fontFamily: 'Arial, sans-serif',
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
    },
});

const Courses = () => {
    const classes = useStyles();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true); 
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser')); 

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://lms-gox2.onrender.com/courses'); 
                const data = await response.json();
                setCourses(data);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching courses:', error);
                setLoading(false); 
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="home">
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
            <Container className={classes.root}>
                <Typography variant="h1" className={classes.title}>Available Courses</Typography>
                {loading ? (
                    <div className={classes.spinner}>
                        <ClipLoader size={50} color={"#76ABAE"} loading={loading} />
                    </div>
                ) : (
                    <Grid container justify="center" spacing={4}>
                        {courses.map(course => (
                            <Grid item key={course.CourseID}>
                                <Card className={classes.courseCard}>
                                    <CardContent>
                                        <Typography variant="h5" component="h5">{course.CourseName}</Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Instructor: {course.Instructor} <br />
                                            Description: {course.Description} <br />
                                            Price: {course.Price} <br />
                                            Level: {course.Level} <br />
                                            Category: {course.Category} <br />
                                            Status: {course.Status}
                                        </Typography>
                                        <Button 
                                            component={Link} 
                                            to={`/course/${course.CourseID}`} 
                                            variant="contained" 
                                            className={classes.viewCourseBtn}
                                        >
                                            View Course
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </div>
    );
}

export default Courses;
