import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Card, CardContent } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default function Dashboard() {
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Welcome to the Dashboard</Paper>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Card 1
              </Typography>
              <Typography variant="body2" component="p">
                Some information about Card 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Card 2
              </Typography>
              <Typography variant="body2" component="p">
                Some information about Card 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}