require('dotenv').config(); // Load environment variables from .env file

const express = require("express");
const cors = require("cors");
const { executeQuery } = require("./db");
const { getGitHubContributions } = require('./scrapeContributions');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

// Signup route
app.post("/users/signup", async (req, res) => {
    try {
        const { username, email, password, firstName, lastName, age, gender, githubProfileId } = req.body;
        const query = `INSERT INTO users (Username, Email, Password, FirstName, LastName, Age, Gender, githubProfileId) VALUES ('${username}', '${email}', '${password}', '${firstName}', '${lastName}', '${age}', '${gender}', '${githubProfileId}')`;
        await executeQuery(query);
        res.status(200).send("User created successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    }
});

// Login route
app.post("/user/auth/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const query = `SELECT * FROM users WHERE Username='${username}' AND Password='${password}'`;
        const result = await executeQuery(query);
        if (result.length > 0) {
            const userData = result[0];
            console.log(`Logged in as ${username}`);
            res.status(200).json(userData); // Return user data as JSON
        } else {
            res.status(400).send("Invalid credentials");
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    }
});

// Courses route with users
app.post('/course', async (req, res) => {
    try {
        const { courseId } = req.body;
        if (isNaN(courseId)) {
            return res.status(400).json({ error: 'Invalid courseId' });
        }
        const query = `SELECT * FROM course WHERE CourseID = ${courseId}`;
        const courses = await executeQuery(query);
        if (courses.length === 0) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(courses[0]);
    } catch (error) {
        console.error('Error fetching course details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// List of Courses
app.get("/courses", async (req, res) => {
    try {
        const query = "SELECT * FROM course WHERE Status='Active'";
        const courses = await executeQuery(query);
        res.status(200).json(courses);
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).send("Internal Server Error");
    }
});

// GitHub Contributions route (accepts payload)
// Assuming you have the necessary imports and setup
app.post('/api/contributions', async (req, res) => {
    const { userdata } = req.body;
    if (userdata) {
        return res.status(400).json({ error: 'Userdata is required' });
    }

    try {
        const contributions = await getGitHubContributions(userdata);
        res.json(contributions);
    } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



