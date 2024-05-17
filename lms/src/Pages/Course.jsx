import React from 'react';
import { useParams } from 'react-router-dom';
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

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(5),
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
        maxWidth: '100%',
        maxHeight: 200,
        borderRadius: theme.spacing(2),
        marginBottom: theme.spacing(2), // Add bottom margin
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3),
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
        textAlign: 'left',
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
    const { courseId } = useParams();

    // Hypothetical HTML course data
    const course = {
        id: courseId,
        name: 'HTML Fundamentals',
        description: 'Learn the basics of HTML (Hypertext Markup Language), the standard markup language for documents designed to be displayed in a web browser. This course covers everything from creating simple web pages to structuring content with HTML tags.',
        duration: '4 weeks',
        modules: [
            'Module 1: Introduction to HTML',
            'Module 2: HTML Document Structure',
            'Module 3: Working with Text and Links',
            'Module 4: Working with Images and Multimedia',
            'Module 5: HTML Forms and Input Elements',
            'Module 6: HTML Tables',
            'Module 7: HTML Semantics',
            'Module 8: HTML5 Features',
        ],
        amount: '₹5000', // Amount in Indian Rupees
        image: 'https://via.placeholder.com/400x200', // Placeholder image URL
    };

    const handlePurchase = () => {
        // Add logic for handling course purchase
        console.log('Course purchased');
    };

    const handleEnquirySubmit = () => {
        // Add logic for handling enquiry submission
        console.log('Enquiry submitted');
    };

    return (
        <Container className={classes.root}>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant="h1" className={classes.title}>{course.name}</Typography>
                    <Typography variant="body1" className={classes.description}>{course.description}</Typography>
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
                        <img src={course.image} alt={course.name} className={classes.image} />
                    </Grid>
                    <Grid item>
                        <Divider className={classes.divider} />
                        <Typography variant="subtitle1">Duration: {course.duration}</Typography>
                        <Typography variant="subtitle1">Modules:</Typography>
                        <Box ml={2}>
                            {course.modules.map((module, index) => (
                                <Typography key={index} variant="body1" className={classes.module}>{module}</Typography>
                            ))}
                        </Box>
                        <Divider className={classes.divider} />
                        <Typography variant="subtitle1">Amount: {course.amount}</Typography>
                    </Grid>
                </Grid>
            </Card>
            <Paper elevation={3} className={classes.enquiryContainer}>
                <Typography variant="h5" gutterBottom>Enquiry</Typography>
                <TextField
                    id="enquiry-text"
                    label="Type your enquiry here"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.purchaseButton} 
                    onClick={handleEnquirySubmit}
                >
                    Submit Enquiry
                </Button>
            </Paper>
            <Paper elevation={3} className={classes.reviewContainer}>
                <Typography variant="h5" gutterBottom>Reviews</Typography>
                <Card className={classes.reviewCard}>
                    <CardContent>
                        <Box className={classes.profileCard}>
                            <Avatar alt="John Doe" src="https://via.placeholder.com/150" className={classes.profileAvatar} />
                            <Box className={classes.profileDetails}>
                                <Typography variant="subtitle1">John Doe</Typography>
                                <Box className={classes.ratingContainer}>
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className={`fas fa-star ${classes.starIcon}`}></i>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <Typography variant="body1">
                            "This course provided me with a solid foundation in HTML."
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.reviewCard}>
                    <CardContent>
                        <Box className={classes.profileCard}>
                            <Avatar alt="Jane Smith" src="https://via.placeholder.com/150" className={classes.profileAvatar} />
                            <Box className={classes.profileDetails}>
                                <Typography variant="subtitle1">Jane Smith</Typography>
                                <Box className={classes.ratingContainer}>
                                    {[...Array(4)].map((_, index) => (
                                        <i key={index} className={`fas fa-star ${classes.starIcon}`}></i>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <Typography variant="body1">
                            "Highly recommended! The modules are well-structured and easy to follow."
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.reviewCard}>
                    <CardContent>
                        <Box className={classes.profileCard}>
                            <Avatar alt="Alice Johnson" src="https://via.placeholder.com/150" className={classes.profileAvatar} />
                            <Box className={classes.profileDetails}>
                                <Typography variant="subtitle1">Alice Johnson</Typography>
                                <Box className={classes.ratingContainer}>
                                    {[...Array(3)].map((_, index) => (
                                        <i key={index} className={`fas fa-star ${classes.starIcon}`}></i>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <Typography variant="body1">
                            "Good course content. Could be more interactive."
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
        </Container>
    );
};

export default Course;
