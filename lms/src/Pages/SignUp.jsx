import React, { useState } from "react";
import { Card, TextField, Button, Typography, makeStyles } from "@material-ui/core"; 
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
  }
});

function Signup() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    // Implement sign-up logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Mobile Number:", mobileNumber);
    // You can add logic to send the data to your backend for registration
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h4" align="center" className={classes.title}>
        Sign Up
      </Typography>
      <form onSubmit={handleSignUp}>
        <TextField 
          label="Name" 
          variant="outlined" 
          className={classes.input} 
          value={name} 
          onChange={handleNameChange} 
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
          label="Mobile Number" 
          variant="outlined" 
          className={classes.input} 
          value={mobileNumber} 
          onChange={handleMobileNumberChange} 
        />
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