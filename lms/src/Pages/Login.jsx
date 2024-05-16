import React, { useState } from "react";
import { Card, TextField, Button, makeStyles,Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    card: {
        width: '500px',
        paddingTop:'25px',
        paddingBottom:'25px',
        padding: '100px',
        display: 'flex',    
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        background:'black',
        border: '2px solid white',
        borderRadius:'10px',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'black',
    },
    input: {
        marginBottom: '20px',
        width: '100%',
        border: '2px solid white',
        borderRadius:'5px',
        backgroundColor: 'transparent', // Make the text field transparent
        color: 'white', // Text color remains white
    },
    button: {
        width: '100%',
        marginBottom: '20px',
        marginTop:'20px',
        background:'#7F8487',
        color:'black',
        borderRadius:'50px',
    },
    title:{ 
        color:'white',
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
        <div className={classes.container}>
        <Card className={classes.card}>
            <h1 className={classes.title}>---- LOGIN ----</h1>
            <br></br>
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
                <Link to ="/" className={classes.link}>
                <Button variant="contained" type="submit" className={classes.button}>
                    Submit
                </Button>
                </Link>
            </form>
            <Link to="/forgot-password" className={classes.link}>
                <Typography>Forgot Password?</Typography>
            </Link>
        </Card>
        </div>
    )
}
export default Login;