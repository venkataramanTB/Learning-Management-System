import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    CardMedia, 
    Button 
} from '@material-ui/core';
import videoBackground from '../Assests/lms_about_vid.mp4'; 
import './Home.css'; // Import Home.css for navbar styling

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginTop: '100px',
        padding: '20px',
        maxWidth: '1000px',
        margin: 'auto',
    },
    video: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1', // Ensure the video stays behind other content
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#333',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: '1.5rem',
        margin: '20px 0',
        color: '#76ABAE',
        textDecoration: 'underline',
    },
    subtitle_key: {
        fontSize: '1.5rem',
        margin: '20px 0',
        color: 'black',
        textDecoration: 'underline',
    },
    text: {
        fontSize: '1.2rem',
        color: 'black',
        margin: '10px 0',
    },
    card: {
        maxWidth: 345,
        margin: '20px auto',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set background color with transparency
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add shadow for depth effect
    },
    media: {
        height: 200,
        objectFit: 'cover',
    },
    button: {
        margin: theme.spacing(2),
        backgroundColor: '#76ABAE',
        color: 'white',
        '&:hover': {
            backgroundColor: '#5c8d91',
        },
    },
    nav: {
        width: '100%',
        height: '80px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
    },
    logo: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#333',
        textDecoration: 'none',
    },
    menu: {
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap', // Allow items to wrap if needed
        margin: '0',
        padding: '0',
    },
    menuItem: {
        marginLeft: '10px', // Reduce margin to fit more items
        marginTop: '10px',
    },
    menuLink: {
        color: '#333',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s ease',
        '&:hover': {
            color: '#007BFF',
        },
    },
    footer: {
        marginTop: '50px',
        padding: '20px 0',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
    },
    footerText: {
        fontSize: '1rem',
        color: '#666',
    },
    contactSection: {
        marginTop: '40px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '10px',
    },
    contactItem: {
        margin: '10px 0',
    },
    featuresSection: {
        marginTop: '40px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '10px',
    },
    featureItem: {
        margin: '10px 0',
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <div>
            <video autoPlay loop muted className={classes.video}>
                <source src={videoBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <nav className="navbar"> {/* Use the same class as defined in Home.css */}
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
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h2" className={classes.subtitle}>
                                    Our Mission
                                </Typography>
                                <Typography className={classes.text}>
                                    At LMS, our mission is to democratize education by providing accessible, high-quality learning opportunities for everyone, everywhere. We believe in the transformative power of education and are committed to creating a platform that supports lifelong learning and skill development.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h2" className={classes.subtitle}>
                                    Our Vision
                                </Typography>
                                <Typography className={classes.text}>
                                    Our vision is to become the leading online learning platform, empowering individuals to achieve their full potential through personalized, engaging, and accessible education. We strive to create a world where learning knows no boundaries and where anyone can pursue their passions and goals.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Typography variant="h2" className={classes.subtitle}>Meet Our Team</Typography>
                <Grid container spacing={4} justify="center">
                    {[
                        { id: 1, name: 'John Doe', role: 'CEO', image: 'https://via.placeholder.com/150?text=John+Doe', description: 'John is the visionary behind LMS, with a passion for education and technology.' },
                        { id: 2, name: 'Jane Smith', role: 'CTO', image: 'https://via.placeholder.com/150?text=Jane+Smith', description: 'Jane leads our tech team, ensuring our platform is robust and user-friendly.' },
                        { id: 3, name: 'Robert Brown', role: 'COO', image: 'https://via.placeholder.com/150?text=Robert+Brown', description: 'Robert oversees operations, making sure everything runs smoothly and efficiently.' },
                    ].map((member) => (
                        <Grid item key={member.id}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={member.image}
                                    title={member.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {member.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.featuresSection}>
                    <Typography variant="h2" className={classes.subtitle_key}>
                    Key Features
                    </Typography>
                    <Typography className={classes.featureItem}><strong>Interactive Courses:</strong> Our courses are designed to be engaging and interactive, with a mix of videos, quizzes, and assignments.</Typography>
                    <Typography className={classes.featureItem}><strong>Expert Instructors:</strong> Learn from industry experts who bring real-world experience to the virtual classroom.</Typography>
                    <Typography className={classes.featureItem}><strong>Flexible Learning:</strong> Access courses anytime, anywhere, and learn at your own pace.</Typography>
                    <Typography className={classes.featureItem}><strong>Community Support:</strong> Join a vibrant community of learners and get support from peers and instructors.</Typography>
                    <Typography className={classes.featureItem}><strong>Certifications:</strong> Earn certificates of completion to showcase your new skills and knowledge.</Typography>
                </div>
                <div className={classes.contactSection}>
                    <Typography variant="h2" className={classes.subtitle_key}>Contact Us</Typography>
                    <Typography className={classes.contactItem}><strong>Email:</strong> support@lms.com</Typography>
                    <Typography className={classes.contactItem}><strong>Phone:</strong> +1 (123) 456-7890</Typography>
                    <Typography className={classes.contactItem}><strong>Address:</strong> 123 LMS Street, Edutown, USA</Typography>
                </div>
                <Button 
                    component={Link} 
                    to="/" 
                    variant="contained" 
                    className={classes.button}
                >
                    Go to Home
                </Button>
            </Container>
            <footer className={classes.footer}>
                <Typography className={classes.footerText}>
                    &copy; 2024 LMS. All rights reserved. | <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
                </Typography>
            </footer>
        </div>
    );
};

export default About;