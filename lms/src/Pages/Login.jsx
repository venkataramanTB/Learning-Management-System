import React, { useState } from "react";
import { Card, TextField, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    body: {
        background: 'black'
    },
    card: {
        width: '800px',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '150px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        background:'',
    },
    input: {
        marginBottom: '20px',
        width: '100%',

    },
    button: {
        width: '100%',
        marginBottom: '20px',
    },
    h1:{
        textAlign: 'left',
    }    
});

function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "venky" && password === "1234") {
            console.log(`Welcome ${username}`);
            window.location.href='/';
        } else {
            alert('Invalid Username or Password');
        }
    }

    return (
        <Card className={classes.card}>
            <Typography variant="h4" align="center" className={classes.title}>Login</Typography>
            <form onSubmit={handleSubmit}>
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
        </Card>
    );
}

export default Login;
