const express = require("express");
const app = express();
const cors = require("cors");
const { executeQuery } = require("./db");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Signup route
app.post("/users/signup", async (req, res) => {
    try {
        const { username, email, password,firstName, lastName, age, gender} = req.body;
        const query = `INSERT INTO users (Username, Email, Password, FirstName, LastName, Age, Gender) VALUES ('${username}', '${email}', '${password}','${firstName}','${lastName}', '${age}', '${gender}')`;
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
        const query = `SELECT * FROM users WHERE Username='${username}' AND password='${password}'`;
        const result = await executeQuery(query);
        if (result.length > 0) {
            // Assuming `result` contains user data
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
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server has started on port " + port + ".");
});
