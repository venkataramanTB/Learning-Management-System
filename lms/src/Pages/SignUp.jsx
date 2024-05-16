import React, { useState } from "react";
import { Card, TextField, Button, Typography, makeStyles, MenuItem } from "@material-ui/core"; 
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    width: '400px',
    padding: '50px',
    margin: 'auto',
    marginTop: '50px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    background:'#EEEEEE',
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
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    // Validate constraints
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
    // All constraints passed, print data to console
    console.log("Username:", username);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Age:", age);
    console.log("Gender:", gender);
    // You can add logic to send the data to your backend for registration
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
          onChange={handleUsernameChange} 
        />
        <TextField 
          label="First Name" 
          variant="outlined" 
          className={classes.input} 
          value={firstName} 
          onChange={handleFirstNameChange} 
        />
        <TextField 
          label="Last Name" 
          variant="outlined" 
          className={classes.input} 
          value={lastName} 
          onChange={handleLastNameChange} 
        />
        <TextField 
          label="Email" 
          variant="outlined" 
          className={classes.input} 
          value={email} 
          onChange={handleEmailChange} 
        />
        <TextField 
          label="Password" 
          variant="outlined" 
          type="password" 
          className={classes.input} 
          value={password} 
          onChange={handlePasswordChange} 
        />
        <TextField 
          label="Age" 
          variant="outlined" 
          type="number" 
          className={classes.input} 
          value={age} 
          onChange={handleAgeChange} 
        />
        <TextField 
          select
          label="Gender"
          variant="outlined" 
          className={classes.input} 
          value={gender} 
          onChange={handleGenderChange} 
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
      {/* Link to navigate to the login page */}
      <div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </Card>
  );
}

export default Signup;
