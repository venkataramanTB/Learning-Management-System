import React from 'react';
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
import './Home.css'; // Reuse the Home.css for consistent styling

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: '50px',
    },
    title: {
        fontSize: '36px',
        marginTop: '20px',
        color: '#000000', // Changed to black
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
});

const Courses = () => {
    const classes = useStyles();
    const [hoveredItem, setHoveredItem] = React.useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const courses = [
        { id: 1, name: 'HTML Course', offer: '50% off' },
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
        <div className="home">
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
                        <li className="nav-item">
                            <Link to="/login" className="nav-links"><i className="fas fa-sign-in-alt"></i> Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Container className={classes.root}>
                <Typography variant="h1" className={classes.title}>Available Courses</Typography>
                <Grid container justify="center" spacing={4}>
                    {courses.map(course => (
                        <Grid item key={course.id}>
                            <Card className={classes.courseCard}>
                                <CardContent>
                                    <Typography variant="h5" component="h5">{course.name}</Typography>
                                    <Typography color="textSecondary">Offer: {course.offer}</Typography>
                                    <Button 
                                        component={Link} 
                                        to={`/course/${course.id}`} 
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
            </Container>
        </div>
    );
}

export default Courses;
