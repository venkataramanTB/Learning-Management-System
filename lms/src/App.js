// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Pages/Navbar'; // Import the Navbar component
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dash from './Pages/Dash';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import Settings from './Pages/Settings';
import Logout from './Pages/Logout';
import Home from './Pages/Home';
import Signup from './Pages/SignUp';
import About from './Pages/About';
import PaymentForm from './Pages/Payment';
import ComingSoon from './Pages/ComingSoon';
import Footer from './Pages/Footer'; // Import the Footer component

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch or set user data here
    // Example:
    // setUserData({ name: 'John Doe' });
  }, []);

  return (
    <Router>
      <Navbar userData={userData} /> {/* Navbar is rendered here */}
      <div className='route'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
