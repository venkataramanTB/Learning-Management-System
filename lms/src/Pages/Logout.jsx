import React from 'react';
import './Logout.css';

const Logout = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href='/login';
  };

  return (
    <div className="logout">
      <h1>Logout</h1>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Yes</button>
    </div>
  );
};

export default Logout;