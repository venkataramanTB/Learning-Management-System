import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Container, 
    Typography, 
    Card, 
    CardContent, 
    Button,
    Grid,
    Divider,
    Box,
    Avatar,
    TextField,
    Paper,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Home.css';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(5),
        minHeight: 'calc(100vh - 80px)', // Adjusted height to cover the entire screen
    },
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        borderRadius: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: theme.spacing(4),
        minWidth: '50%',
        [theme.breakpoints.down('sm')]: {
            minWidth: 'auto',
            textAlign: 'center',
        },
    },
    image: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(10),
        maxWidth: '100%',
        maxHeight: 200,
        borderRadius: theme.spacing(2),
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(3),
        },
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    description: {
        marginBottom: theme.spacing(2),
    },
    details: {
        textAlign: 'center',
    },
    divider: {
        margin: `${theme.spacing(2)}px 0`,
    },
    purchaseButton: {
        marginTop: theme.spacing(2),
        backgroundColor: '#76ABAE',
        color: 'white',
        padding: '12px 30px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#5c8d91',
        },
    },
    module: {
        marginBottom: theme.spacing(1),
    },
    enquiryContainer: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
        backgroundColor: '#f9f9f9',
    },
    reviewContainer: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
        backgroundColor: '#f9f9f9',
    },
    reviewCard: {
        marginTop: theme.spacing(2),
        borderRadius: theme.spacing(2),
    },
    ratingContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
    },
    starIcon: {
        color: '#fdd835',
        marginRight: theme.spacing(1),
    },
    profileAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    profileCard: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
    },
    profileDetails: {
        marginLeft: theme.spacing(2),
    },
}));

const Course = () => {
    const classes = useStyles();
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser'));

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`https://lms-gox2.onrender.com/course`, {
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
    }, [id]);

    const handlePurchase = () => {
        navigate('/comingsoon');
    };

    if (!course) {
        return <div>Loading...</div>;
    }

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
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <Typography variant="h1" className={classes.title}>{course.CourseName}</Typography>
                        <Typography variant="body1" className={classes.description}>{course.Description}</Typography>
                        <Button 
                            variant="contained" 
                            className={classes.purchaseButton} 
                            onClick={handlePurchase}
                        >
                            Purchase Course
                        </Button>
                    </CardContent>
                    <Grid container direction="column" className={classes.details} justify="space-between">
                        <Grid item>
                            <img src={course.image || 'https://i.pinimg.com/564x/70/33/f8/7033f88628ad9cb4044a6cc39e36792e.jpg'} alt={course.CourseName} className={classes.image} />
                        </Grid>
                        <Grid item>
                            <Divider className={classes.divider} />
                            <Typography variant="subtitle1">Category: {course.Category}</Typography>
                            <Typography variant="subtitle1">Level: {course.Level}</Typography>
                            <Typography variant="subtitle1">Amount: {course.Price} Inr </Typography>
                            <Divider className={classes.divider} />
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </div>
    );
};
export default Course;