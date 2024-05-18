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

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: '50px',
    },
    
    navbar: {
        listStyleType: 'none',
        padding: 0,
        margin: '0',
        backgroundColor: '#f2f2f2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
    },
    navItem: {
        margin: '0 10px',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        fontFamily: 'Arial, sans-serif', // Font styling added
    },
    navItemHovered: {
        color: '#76ABAE',
    },
    title: {
        fontSize: '36px',
        marginTop: '20px',
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
        fontFamily: 'Arial, sans-serif', // Font styling added
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
        <Container className={classes.root}>
            <nav>
                <ul className={classes.navbar}>
                    <li className={`${classes.navItem} ${hoveredItem === 0 ? classes.navItemHovered : ''}`} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}><Link to="/">Home</Link></li>
                    <li className={`${classes.navItem} ${hoveredItem === 1 ? classes.navItemHovered : ''}`} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}><Link to="/about">About</Link></li>
                    <li className={`${classes.navItem} ${hoveredItem === 2 ? classes.navItemHovered : ''}`} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}><Link to="/profile">Profile</Link></li>
                    <li className={`${classes.navItem} ${hoveredItem === 3 ? classes.navItemHovered : ''}`} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}><Link to="/courses">Courses</Link></li>
                    <li className={`${classes.navItem} ${hoveredItem === 4 ? classes.navItemHovered : ''}`} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}><Link to="/login">Login</Link></li>
                </ul>
            </nav>
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
    );
}

export default Courses;
