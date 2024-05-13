import React, { useState } from "react";
import { Card, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        width: '300px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '100px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
        marginBottom: '20px',
        width: '100%',
    },
    button: {
        width: '100%',
    },
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
        console.log(`Username: ${username}, Password: ${password}`);
    }

    return (
        <Card className={classes.card}>
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
    )
}

export default Login;