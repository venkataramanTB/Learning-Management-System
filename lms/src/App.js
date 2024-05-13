import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Courses from './Pages/Courses'
import Course from './Pages/Course'
import Profile from './Pages/Profile'
import Settings from './Pages/Settings'
import Logout from './Pages/Logout'
import Home from './Pages/Home'

function App() {
  return (
    <Router>
        <div className='route'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;