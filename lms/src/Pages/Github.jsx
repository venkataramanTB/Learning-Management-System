import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@material-ui/core';
import axios from 'axios';

const ContributionsChart = ({ username }) => {
    const [contributionsData, setContributionsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user = sessionStorage.getItem('loggedInUser');
    const userdata = user ? JSON.parse(user).githubProfileId : null; // Assuming githubProfileId is the correct field

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await axios.post('https://lms-gox2.onrender.com/api/contributions', userdata); // Pass userdata directly
                setContributionsData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.response ? error.response.data.message : error.message);
                setLoading(false);
            }
        };

        if (userdata) {
            fetchContributions();
        }
    }, [userdata]); // Update the dependency array to include userdata only

    const formatDataForChart = () => {
        const labels = contributionsData.map(contribution => contribution.date);
        const data = contributionsData.map(contribution => contribution.count);

        return {
            labels,
            datasets: [
                {
                    label: 'GitHub Contributions',
                    data,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1,
                },
            ],
        };
    };

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error: {error}</Typography>;

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    GitHub Contributions
                </Typography>
                <Box>
                    <Bar data={formatDataForChart()} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default ContributionsChart;
