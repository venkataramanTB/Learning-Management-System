import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Dashboard from '../Pages/Dashboard'
import Courses from '../Pages/Courses'
import Course from '../Pages/Course'
import Profile from '../Pages/Profile'
import Settings from '../Pages/Settings'
import Logout from '../Pages/Logout'
import Signup from '../Pages/Signup' 
import Home from '../Pages/Home'
import '../App.css'

function Routed() {
  return (
    <Router>
      <div className='route'>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/signup" component={Signup} /> {/* Route for SignUp page */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/courses" component={Courses} />
          <Route path="/course/:id" component={Course} />
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routed;
