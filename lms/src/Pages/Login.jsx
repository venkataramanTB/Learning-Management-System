import React, { useState } from "react";
import { Card, TextField, Button, Typography, makeStyles, Link, CssBaseline } from "@material-ui/core"; // Import CssBaseline
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink from react-router-dom


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
    card: {
        width: '800px',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '150px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        background:'#EEEEEE',
    },
    input: {
        marginBottom: '20px',
        width: '100%',
        color: 'white',
    },
    button: {
        width: '100%',
        marginBottom: '20px',
        color: '#ffffff',
        background: '#76ABAE'
    },
    h1:{
        textAlign: 'left',
        color: '#93B1A6',
    }    
});

function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/user/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username, // Assuming username is actually the email
                    password: password
                })
            });
    
            if (response.ok) {
                // Parse response data to JSON
                const userData = await response.json();
    
                // Store user data in sessionStorage
                sessionStorage.setItem('loggedInUser', JSON.stringify(userData));
    
                // Redirect to home page or dashboard
                window.location.href = '/';
            } else if (response.status === 400) {
                alert('Invalid Username or Password');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }  
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.body}>
                <Card className={classes.card}>
                    <Typography variant="h4" align="center" className={classes.title}>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <TextField 
                            label="Username" 
                            variant="outlined" 
                            className={classes.input} 
                            value={username} 
                            onChange={handleUsernameChange} 
                        />
                        <TextField 
                            label="Password" 
                            variant="outlined" 
                            type="password" 
                            className={classes.input} 
                            value={password} 
                            onChange={handlePasswordChange} 
                        />
                        <Button variant="contained" color="primary" type="submit" className={classes.button}>
                            Submit
                        </Button>
                    </form>
                    <Typography variant="body1" align="center">
                        Don't have an account?{" "}
                        <Link component={RouterLink} to="/signup">Sign up</Link> 
                    </Typography>
                </Card>
            </div>
        </ThemeProvider>
    );
}

export default Login;