import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        width: '250px', // Set the desired width
        height: '250px', // Set the desired height
    },
}));

const Dash = () => {
    const classes = useStyles();

    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150',
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
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Performance',
                data: [65, 59, 80, 81, 56, 55],
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
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Performance Over Months
                            </Typography>
                            <Box>
                                <Bar data={barData} options={barOptions} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dash;
