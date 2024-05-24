import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@material-ui/core';
import axios from 'axios';

const ContributionsChart = ({ username }) => {
    const [contributionsData, setContributionsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user = sessionStorage.getItem('loggedInUser');
    const userdata= `${user.githubProfileId}`;

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/contributions', { userdata });
                setContributionsData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.response ? error.response.data.message : error.message);
                setLoading(false);
            }
        };

        fetchContributions();
    }, [username]);

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
