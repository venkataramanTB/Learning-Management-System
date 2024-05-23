const axios = require('axios');

const getGitHubContributions = async (username) => {
  if (username === undefined){
    throw new Error('No GitHub username provided');
  }
  else{
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN; 
    const query = `
    {
        user(login: "${username}") {
            contributionsCollection {
                contributionCalendar {
                    weeks {
                        contributionDays {
                            date
                            contributionCount
                        }
                    }
                }
            }
        }
    }`;
  }
    try {
        const response = await axios.post(
            'https://api.github.com/graphql',
            { query },
            {
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
            }
        );

        if (response.data.errors) {
            console.error('GraphQL errors:', response.data.errors);
            throw new Error('Invalid GitHub username or no contributions data available');
        }

        const contributions = response.data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
            week => week.contributionDays.map(day => ({
                date: day.date,
                count: day.contributionCount,
            }))
        );

        return contributions;
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error.message);
        throw new Error('Failed to fetch GitHub contributions');
    }
};

module.exports = { getGitHubContributions };
