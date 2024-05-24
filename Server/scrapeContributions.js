const axios = require('axios');

const getGitHubContributions = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const contributions = response.data.map(repo => {
            return {
                date: repo.created_at, 
                count: repo.stargazers_count 
            };
        });
        return contributions;
    } catch (error) {
        console.error('Error fetching contributions from GitHub:', error);
        throw error;
    }
};