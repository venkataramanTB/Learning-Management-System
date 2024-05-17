// src/Pages/Courses.jsx
import React from 'react';
import { Card, Typography, makeStyles, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    padding: '20px',
  },
  profile: {
    flex: '0 0 250px',
    padding: '20px',
    marginRight: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    background:'#EEEEEE',
  },
  courses: {
    flex: 1,
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    background:'#FFFFFF',
  },
  list: {
    marginTop: '20px',
  }
});

function Dash() {
  const classes = useStyles();

  const userInfo = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 28,
    gender: 'Male',
  };

  const enrolledCourses = [
    { name: 'Course A', progress: 50 }, 
    { name: 'Course B', progress: 75 },
    { name: 'Course C', progress: 30 },
    { name: 'Course D', progress: 90 },
  ];

  return (
    <div className={classes.container}>
      {/* User profile */}
      <Card className={classes.profile}>
        <Typography variant="h6">User Profile</Typography>
        <Typography>Name: {userInfo.name}</Typography>
        <Typography>Email: {userInfo.email}</Typography>
        <Typography>Age: {userInfo.age}</Typography>
        <Typography>Gender: {userInfo.gender}</Typography>
      </Card>

      {/* Enrolled courses */}
      <Card className={classes.courses}>
        <Typography variant="h6">Enrolled Courses</Typography>
        <List className={classes.list}>
          {enrolledCourses.map((course, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={course.name}
                secondary={`Progress: ${course.progress}%`}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}

export default Dash;
