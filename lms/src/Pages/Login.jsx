import React, { useState } from "react";
import { Card, TextField, Button, Typography, makeStyles, Link, CssBaseline, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import { PuffLoader } from "react-spinners";

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
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '600px',
        hight: '600px',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
        background: '#76ABAE',
        '&:hover': {
            backgroundColor: '#609396',
        },
    },
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    h4:{
        paddingBottom:'20px',
    }, 
});

function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorDialogOpen, setErrorDialogOpen] = useState(false); // State for error dialog

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        
        try {
            const response = await fetch('https://lms-gox2.onrender.com/user/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
    
            if (response.ok) {
                const userData = await response.json();
                sessionStorage.setItem('loggedInUser', JSON.stringify(userData));
                window.location.href = '/';
            } else if (response.status === 400) {
                setErrorDialogOpen(true); // Open error dialog
            } else {
                setErrorDialogOpen(true); // Open error dialog
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorDialogOpen(true); // Open error dialog
        } finally {
            setLoading(false);
        }
    }  
    
    return (
        
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.body}>
                <Card className={classes.card}>
                    <Typography variant="h4" align="center" className={classes.title}>Login</Typography>
                    <br></br>
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
                        <Link component={RouterLink} to="/Signup">Sign up</Link> 
                    </Typography>
                    {loading && (
                        <div className={classes.loaderContainer}>
                            <PuffLoader color="#36d7b7" />
                        </div>
                    )}
                    {/* Error dialog */}
                    <Dialog open={errorDialogOpen} onClose={() => setErrorDialogOpen(false)}>
                        <DialogTitle>Error</DialogTitle>
                        <DialogContent>
                            <Typography variant="body1">Invalid Username or Password. Please try again.</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setErrorDialogOpen(false)} color="primary">OK</Button>
                        </DialogActions>
                    </Dialog>
                </Card>
            </div>
        </ThemeProvider>
    );
}

export default Login;
