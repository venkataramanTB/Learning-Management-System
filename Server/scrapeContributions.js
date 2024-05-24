const axios = require('axios');

const getGitHubContributions = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        // Process response to get contributions data
        const contributions = response.data.map(repo => {
            // Example processing logic
            return {
                date: repo.created_at, // Example date
                count: repo.stargazers_count // Example contribution count
            };
        });
        return contributions;
    } catch (error) {
        console.error('Error fetching contributions from GitHub:', error);
        throw error;
    }
};