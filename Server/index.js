const express = require("express");
const app = express();
const cors = require("cors");
const {executeQuery} = require("./db");
require("dotenv").config();

app.use(cors());
app.use(express.json());


app.post("/users/signup", async(req,res) =>{
    try{
    const {username, email, password, age, dob} = req.body;
    const query = `INSERT INTO users (Username, email, password, age, dob) VALUES ('${username}', '${email}', '${password}','${age}','${dob}')`;
    const result = await executeQuery(query);
    res.status(200).send("User created Sucessfully");
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
});
app.get("/user/auth/login", async(req,res) => {
    try{
        const {email, password} = req.body;
        const query = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
        const result = await executeQuery(query);
        if(result.length > 0){
            res.status(200).send("Login Sucessful");
        }
        else{
            res.status(400).send("Invalid Credentials");
        }
    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
});