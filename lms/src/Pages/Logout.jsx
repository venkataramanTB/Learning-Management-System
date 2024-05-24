import React from 'react';
import './Logout.css';

const Logout = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href='/login';
  };

  return (
    <div className='root'>
      <div className="logout">
        <br></br>
        <h1>Logout</h1>
        <br></br>
        <p>Are you sure you want to logout?</p>
        <br></br>
        <button onClick={handleLogout}>Yes</button>
        <br></br>
      </div>
    </div>
  );
};

export default Logout;