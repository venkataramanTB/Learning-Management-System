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

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === "venky" && password === "1234") {
            // Store user data in sessionStorage
            const user = { username };
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            setLoggedInUser(user);
            console.log(`Welcome ${username}`);
            window.location.href='/';
        } else {
            alert('Invalid Username or Password');
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
                        <Link component={RouterLink} to="/signup">Sign up</Link> {/* Link to the sign-up page */}
                    </Typography>
                </Card>
            </div>
        </ThemeProvider>
    );
}

export default Login;
