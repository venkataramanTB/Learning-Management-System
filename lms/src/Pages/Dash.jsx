import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Home.css';
import ContributionsChart from './Github';
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Avatar,
    Box,
} from '@material-ui/core';
import { Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Registering the components
ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
    },
    profileSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    largeAvatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginBottom: theme.spacing(2),
    },
    card: {
        marginBottom: theme.spacing(2),
    },
    chartContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pieChart: {
        width: '250px',
        height: '250px',
    },
    barChart: {
        width: '1000px', // Adjust this value to control the bar chart size
        maxWidth: '100%', // Ensure it doesn't exceed the container's width
    },
}));

const Dash = () => {
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const classes = useStyles();
    const user = {
        name: `${userData.FirstName}`,
        email: `${userData.Email}`,
        avatar: 'https://via.placeholder.com/150',
        githubProfileId: `${userData.GithubProfileId}` // Ensure this field exists in the userData
    };

    const pieData = {
        labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        datasets: [
            {
                data: [10, 20, 30, 25, 15],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    const barData = {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'Performance',
                data: [65, 59, 80, 81, 56, 55, 70, 75, 60, 90, 85, 95],
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

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
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Card className={classes.card}>
                            <CardContent className={classes.profileSection}>
                                <Avatar alt={user.name} src={user.avatar} className={classes.largeAvatar} />
                                <Typography variant="h6">{user.name}</Typography>
                                <Typography color="textSecondary">{user.email}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Courses Enrolled
                                </Typography>
                                <Box className={classes.chartContainer}>
                                    <div className={classes.pieChart}>
                                        <Pie data={pieData} />
                                    </div>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <ContributionsChart username={userData.GithubProfileId} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Dash;
