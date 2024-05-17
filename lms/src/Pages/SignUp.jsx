import React, { useState } from "react";
import { Card, TextField, Button, Typography, makeStyles, MenuItem } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    width: '400px',
    padding: '50px',
    margin: 'auto',
    marginTop: '50px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    background: '#EEEEEE',
  },
  input: {
    marginBottom: '20px',
    width: '100%',
  },
  button: {
    width: '100%',
    marginBottom: '20px',
    background: '#76ABAE',
    color: '#ffffff',
  },
  title: {
    marginBottom: '20px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  }
});

function Signup() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (!/^[a-zA-Z\s]+$/.test(username)) {
      setError("Username should contain only letters and spaces.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      setError("First name should contain only letters and spaces.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      setError("Last name should contain only letters and spaces.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 8) {
      setError("Password should have at least 8 characters.");
      return;
    }

    const signupData = { 
      username, 
      email, 
      password, 
      age, 
      firstName, 
      lastName, 
      gender 
    };
    console.log(signupData);
    const profileData = {
      uname : username
    };

    try {
      const response = await fetch('http://localhost:5000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData)
      });

      if (response.ok) {
        alert(`Hello ${username}, please log in.`);
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(`Failed to create user: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h4" align="center" className={classes.title}>
        Sign Up
      </Typography>
      <form onSubmit={handleSignUp}>
        <TextField
          label="Username"
          variant="outlined"
          className={classes.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="First Name"
          variant="outlined"
          className={classes.input}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          className={classes.input}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          className={classes.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          className={classes.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Age"
          variant="outlined"
          type="number"
          className={classes.input}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          select
          label="Gender"
          variant="outlined"
          className={classes.input}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
        {error && <Typography className={classes.error}>{error}</Typography>}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Sign Up
        </Button>
      </form>
      <div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </Card>
  );
}

export default Signup;
