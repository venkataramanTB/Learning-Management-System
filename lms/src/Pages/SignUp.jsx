import React, { useState } from "react";
import { Card, TextField, Button, Typography, makeStyles,CssBaseline, MenuItem,Grid } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        body: {
          backgroundColor: 'linear-gradient(135deg, #3498db, #8e44ad)',
          color: 'white',
        },
      },
    },
  },
});

const useStyles = makeStyles({
  body:{
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
  card: {
    width: '100vh',
    hight: '500px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginTop: '225px',
    borderRadius: '10px',
    
  },
  input: {
    marginBottom: '10px',
    width: '100%',
    color: 'white',
},
  button: {
    width: '100%',
    marginBottom: '20px',
    color: '#ffffff',
    background: '#76ABAE',
    '&:hover': {
      backgroundColor: '#609396',
  },
},
  title: {
    marginBottom: '20px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
});

function Signup() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [gitId, setgitId] = useState("");
  const [linkedinId, setLinkedinId] = useState("");
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
      gender,
      gitId, 
      linkedinId,
    };
    console.log(signupData);
    const profileData = {
      uname : username
    };

    try {
      const response = await fetch('https://lms-gox2.onrender.com/users/signup', {
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
    <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.body}>
    <Card className={classes.card}>
      <Typography variant="h4" align="center" className={classes.title}>
        Sign Up
      </Typography>
      <form onSubmit={handleSignUp}>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            variant="outlined"
            className={classes.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            className={classes.input}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={6}>
          <TextField
            label="Username"
            variant="outlined"
            className={classes.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            variant="outlined"
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid className={classes.gridContainer}>
        <Grid>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={6}>
            <TextField
              label="Age"
              variant="outlined"
              type="number"
              className={classes.input}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={6}>
          <TextField
            label="Git id"
            variant="outlined"
            className={classes.input}
            value={gitId}
            onChange={(e) => setgitId(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="LinkedIn id"
            variant="outlined"
            className={classes.input}
            value={linkedinId}
            onChange={(e) => setLinkedinId(e.target.value)}
          />
        </Grid>
      </Grid>
      <br></br>
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
    </div>
    </ThemeProvider>
  );
}

export default Signup;
